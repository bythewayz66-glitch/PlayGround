import * as THREE from 'three';
import { clamp } from './utils.js';

export const PLANET_HEX_TARGET = 250000;
const PLANET_RADIUS = 118;
const PLANET_CENTER_Y = -128;
const PLANET_ROWS = 443;

const MEADOW_COLORS = [0x86ad78, 0x91b883, 0x7ba271, 0x9cc08a];
const STONE_COLORS = [0xa8aa96, 0x999d8e, 0xb6b59f];
const WATER_COLORS = [0x6bc9ca, 0x7ad6d2, 0x5bbec5];

const TYPE_COLORS = {
  meadow: MEADOW_COLORS,
  stone: STONE_COLORS,
  water: WATER_COLORS,
};

function hash01(value) {
  const x = Math.sin(value * 127.1 + 311.7) * 43758.5453123;
  return x - Math.floor(x);
}

function writeSrgb(target, offset, hex) {
  target[offset] = ((hex >> 16) & 255) / 255;
  target[offset + 1] = ((hex >> 8) & 255) / 255;
  target[offset + 2] = (hex & 255) / 255;
}

function smoothstep(edge0, edge1, value) {
  const t = clamp((value - edge0) / (edge1 - edge0), 0, 1);
  return t * t * (3 - 2 * t);
}

function shaderColor(hex) {
  return new THREE.Color(hex).convertLinearToSRGB();
}

function findColumnBase() {
  let best = 887;
  let bestDistance = Infinity;
  for (let base = 820; base <= 950; base += 1) {
    let total = 0;
    for (let row = 0; row < PLANET_ROWS; row += 1) {
      const lat = -Math.PI / 2 + ((row + 0.5) / PLANET_ROWS) * Math.PI;
      total += Math.max(4, Math.round(base * Math.cos(lat)));
    }
    if (total < PLANET_HEX_TARGET) continue;
    const distance = total - PLANET_HEX_TARGET;
    if (distance < bestDistance) {
      bestDistance = distance;
      best = base;
    }
  }
  return best;
}

function makeAtmosphereMaterial() {
  return new THREE.ShaderMaterial({
    side: THREE.BackSide,
    transparent: true,
    depthWrite: false,
    blending: THREE.AdditiveBlending,
    uniforms: {
      uColor: { value: shaderColor(0x9fd6dc) },
      uPower: { value: 3.2 },
    },
    vertexShader: `
      varying vec3 vNormal;
      varying vec3 vView;
      void main() {
        vec4 mv = modelViewMatrix * vec4(position, 1.0);
        vNormal = normalize(normalMatrix * normal);
        vView = normalize(-mv.xyz);
        gl_Position = projectionMatrix * mv;
      }
    `,
    fragmentShader: `
      uniform vec3 uColor;
      uniform float uPower;
      varying vec3 vNormal;
      varying vec3 vView;
      void main() {
        float rim = pow(1.0 - abs(dot(normalize(vNormal), normalize(vView))), uPower);
        gl_FragColor = vec4(uColor, rim * 0.42);
      }
    `,
  });
}

function makeHexFieldMaterial(pixelRatio) {
  return new THREE.ShaderMaterial({
    transparent: true,
    depthWrite: false,
    depthTest: true,
    blending: THREE.NormalBlending,
    uniforms: {
      uPixelRatio: { value: pixelRatio },
      uTime: { value: 0 },
      uSize: { value: 1.7 },
    },
    vertexShader: `
      attribute vec3 aColor;
      attribute float aClaim;
      attribute float aSeed;
      uniform float uPixelRatio;
      uniform float uTime;
      uniform float uSize;
      varying vec3 vColor;
      varying float vClaim;
      varying float vSeed;
      void main() {
        vec4 mv = modelViewMatrix * vec4(position, 1.0);
        float distanceScale = 300.0 / max(1.0, -mv.z);
        float pulse = 1.0 + sin(uTime * 1.6 + aSeed * 6.2831) * 0.08 * aClaim;
        gl_PointSize = max(1.15, uSize * uPixelRatio * distanceScale * mix(0.78, 2.2, aClaim) * pulse);
        gl_Position = projectionMatrix * mv;
        vColor = aColor;
        vClaim = aClaim;
        vSeed = aSeed;
      }
    `,
    fragmentShader: `
      varying vec3 vColor;
      varying float vClaim;
      varying float vSeed;
      void main() {
        vec2 p = gl_PointCoord - 0.5;
        vec2 q = abs(p);
        float hexEdge = max(q.x * 0.8660254 + q.y * 0.5, q.y);
        float edge = 1.0 - smoothstep(0.34, 0.5, hexEdge);
        float halo = 1.0 - smoothstep(0.0, 0.52, length(p));
        float alpha = mix(0.23, 1.0, vClaim) * mix(edge, halo, 0.18);
        float glow = vClaim * (0.8 + 0.22 * sin(vSeed * 31.0));
        vec3 color = vColor + glow * 0.34;
        if (alpha < 0.018) discard;
        gl_FragColor = vec4(color, alpha);
      }
    `,
  });
}

function makeMarkerTexture() {
  const size = 128;
  const canvas = document.createElement('canvas');
  canvas.width = size;
  canvas.height = size;
  const ctx = canvas.getContext('2d');
  const center = size / 2;
  const glow = ctx.createRadialGradient(center, center, 0, center, center, center);
  glow.addColorStop(0, 'rgba(255, 249, 222, 0.96)');
  glow.addColorStop(0.16, 'rgba(255, 214, 129, 0.78)');
  glow.addColorStop(0.4, 'rgba(255, 180, 78, 0.28)');
  glow.addColorStop(0.72, 'rgba(255, 157, 55, 0.06)');
  glow.addColorStop(1, 'rgba(255, 150, 48, 0)');
  ctx.fillStyle = glow;
  ctx.fillRect(0, 0, size, size);
  ctx.strokeStyle = 'rgba(255, 238, 190, 0.92)';
  ctx.lineWidth = 2.4;
  ctx.beginPath();
  ctx.arc(center, center, 33, 0, Math.PI * 2);
  ctx.stroke();
  ctx.strokeStyle = 'rgba(255, 201, 106, 0.5)';
  ctx.lineWidth = 1.2;
  ctx.beginPath();
  ctx.arc(center, center, 42, 0, Math.PI * 2);
  ctx.stroke();
  const texture = new THREE.CanvasTexture(canvas);
  texture.colorSpace = THREE.SRGBColorSpace;
  return texture;
}

function makeWorldBodyMaterial() {
  return new THREE.ShaderMaterial({
    uniforms: {
      uTime: { value: 0 },
      uSun: { value: new THREE.Vector3(0.38, 0.82, 0.44).normalize() },
      uDeep: { value: shaderColor(0x0a2c3a) },
      uShallow: { value: shaderColor(0x2c7b82) },
      uLand: { value: shaderColor(0x6f915d) },
      uDry: { value: shaderColor(0xbaa06d) },
      uIce: { value: shaderColor(0xe2eeea) },
    },
    vertexShader: `
      varying vec3 vNormal;
      varying vec3 vWorldNormal;
      varying vec3 vView;
      void main() {
        vec4 world = modelMatrix * vec4(position, 1.0);
        vec4 mv = viewMatrix * world;
        vNormal = normalize(normalMatrix * normal);
        vWorldNormal = normalize(mat3(modelMatrix) * normal);
        vView = normalize(-mv.xyz);
        gl_Position = projectionMatrix * mv;
      }
    `,
    fragmentShader: `
      uniform float uTime;
      uniform vec3 uSun;
      uniform vec3 uDeep;
      uniform vec3 uShallow;
      uniform vec3 uLand;
      uniform vec3 uDry;
      uniform vec3 uIce;
      varying vec3 vNormal;
      varying vec3 vWorldNormal;
      varying vec3 vView;

      float hash(vec3 p) {
        p = fract(p * 0.3183099 + vec3(0.13, 0.27, 0.41));
        p *= 17.0;
        return fract(p.x * p.y * p.z * (p.x + p.y + p.z));
      }

      float noise(vec3 x) {
        vec3 i = floor(x);
        vec3 f = fract(x);
        f = f * f * (3.0 - 2.0 * f);
        return mix(
          mix(mix(hash(i + vec3(0,0,0)), hash(i + vec3(1,0,0)), f.x),
              mix(hash(i + vec3(0,1,0)), hash(i + vec3(1,1,0)), f.x), f.y),
          mix(mix(hash(i + vec3(0,0,1)), hash(i + vec3(1,0,1)), f.x),
              mix(hash(i + vec3(0,1,1)), hash(i + vec3(1,1,1)), f.x), f.y),
          f.z
        );
      }

      float fbm(vec3 p) {
        float value = 0.0;
        float amplitude = 0.54;
        for (int i = 0; i < 4; i++) {
          value += amplitude * noise(p);
          p = p * 2.07 + vec3(1.7, 3.1, 4.3);
          amplitude *= 0.5;
        }
        return value;
      }

      void main() {
        vec3 p = normalize(vWorldNormal);
        float drift = uTime * 0.003;
        float broad = fbm(p * 2.15 + vec3(drift, 0.0, 0.0));
        float detail = fbm(p * 6.2 + vec3(11.4, 2.1, 5.7));
        float height = broad * 0.78 + detail * 0.22;
        float land = smoothstep(0.505, 0.585, height);
        float shore = smoothstep(0.435, 0.57, height);
        float mountains = smoothstep(0.655, 0.79, height);
        float latitude = abs(p.y);

        vec3 color = mix(uDeep, uShallow, shore * 0.72);
        vec3 ground = mix(uLand, uDry, smoothstep(0.4, 0.85, detail) * 0.6);
        color = mix(color, ground, land);
        color = mix(color, uDry * 1.06, mountains * 0.34);
        float polar = smoothstep(0.82, 0.965, latitude);
        color = mix(color, uIce, polar * 0.9);

        float light = clamp(dot(normalize(vWorldNormal), normalize(uSun)) * 0.78 + 0.34, 0.16, 1.1);
        float rim = pow(1.0 - abs(dot(normalize(vNormal), normalize(vView))), 3.4);
        color *= light;
        color += vec3(0.24, 0.52, 0.56) * rim * 0.26;
        color += uDeep * 0.16;
        gl_FragColor = vec4(color, 1.0);
      }
    `,
  });
}

export class Planet {
  constructor(scene, options = {}) {
    this.scene = scene;
    this.radius = options.radius ?? PLANET_RADIUS;
    this.centerY = options.centerY ?? PLANET_CENTER_Y;
    this.rows = PLANET_ROWS;
    this.claimedCount = 0;
    this.time = 0;
    this.rotation = 0;

    this.group = new THREE.Group();
    this.group.name = 'openwork-worldsphere';
    this.group.position.set(0, this.centerY, 0);
    this.group.rotation.z = THREE.MathUtils.degToRad(-13.4);
    this.group.rotation.x = THREE.MathUtils.degToRad(8.5);
    this.scene.add(this.group);

    this.buildGrid();
    this.buildBody();
    this.buildHexField();
    this.buildAtmosphere();

    this.markers = new THREE.Group();
    this.markers.name = 'worldsphere-island-markers';
    this.markerMap = new Map();
    this.markerTexture = makeMarkerTexture();
    this.group.add(this.markers);
  }

  buildGrid() {
    const base = findColumnBase();
    this.rowStart = new Int32Array(this.rows + 1);
    this.rowCols = new Uint16Array(this.rows);
    this.rowLat = new Float32Array(this.rows);
    let total = 0;
    for (let row = 0; row < this.rows; row += 1) {
      const lat = -Math.PI / 2 + ((row + 0.5) / this.rows) * Math.PI;
      this.rowLat[row] = lat;
      const cols = Math.max(4, Math.round(base * Math.cos(lat)));
      this.rowCols[row] = cols;
      total += cols;
    }

    let overflow = total - PLANET_HEX_TARGET;
    let cursor = 0;
    let guard = 0;
    while (overflow > 0 && guard < this.rows * 4) {
      if (this.rowCols[cursor] > 4) {
        this.rowCols[cursor] -= 1;
        overflow -= 1;
      }
      cursor = (cursor + 1) % this.rows;
      guard += 1;
    }

    total = 0;
    for (let row = 0; row < this.rows; row += 1) {
      this.rowStart[row] = total;
      total += this.rowCols[row];
    }
    this.rowStart[this.rows] = total;
    this.cellCount = total;
    this.capacity = total;
    this.target = PLANET_HEX_TARGET;

    this.positions = new Float32Array(total * 3);
    this.baseColors = new Float32Array(total * 3);
    this.colors = new Float32Array(total * 3);
    this.claims = new Float32Array(total);
    this.seeds = new Float32Array(total);
    this.owners = new Uint16Array(total);

    for (let row = 0; row < this.rows; row += 1) {
      const cols = this.rowCols[row];
      const lat = this.rowLat[row];
      const cosLat = Math.cos(lat);
      const sinLat = Math.sin(lat);
      const rowOffset = row % 2 === 0 ? 0 : Math.PI / cols;
      for (let col = 0; col < cols; col += 1) {
        const index = this.rowStart[row] + col;
        const lon = (col / cols) * Math.PI * 2 + rowOffset - Math.PI;
        const nx = Math.cos(lon) * cosLat;
        const ny = sinLat;
        const nz = Math.sin(lon) * cosLat;
        this.positions[index * 3] = nx * this.radius;
        this.positions[index * 3 + 1] = ny * this.radius;
        this.positions[index * 3 + 2] = nz * this.radius;

        const seed = hash01(index * 0.731 + row * 7.13);
        this.seeds[index] = seed;
        const shelf = Math.sin(lon * 2.3 + row * 0.17) * 0.5 + 0.5;
        const depth = clamp(Math.abs(lat) / (Math.PI / 2), 0, 1);
        const continent =
          Math.sin(lon * 2.1 + Math.sin(lat * 3.4 + 1.1) * 1.28) * 0.56 +
          Math.sin(lon * 4.6 - lat * 2.2 + 0.8) * 0.24 +
          Math.sin(lat * 6.8 + lon * 0.7) * 0.2;
        const landness = smoothstep(0.02, 0.42, continent);
        const polar = smoothstep(0.83, 0.97, depth);
        const oceanR = 0.028 + shelf * 0.026 + seed * 0.008;
        const oceanG = 0.115 + shelf * 0.075 + seed * 0.012;
        const oceanB = 0.15 + shelf * 0.08;
        const landR = 0.105 + seed * 0.05 + shelf * 0.025;
        const landG = 0.238 + shelf * 0.085 + seed * 0.035;
        const landB = 0.135 + seed * 0.045;
        let red = oceanR + (landR - oceanR) * landness;
        let green = oceanG + (landG - oceanG) * landness;
        let blue = oceanB + (landB - oceanB) * landness;
        red += (0.38 - red) * polar * 0.72;
        green += (0.48 - green) * polar * 0.72;
        blue += (0.5 - blue) * polar * 0.72;
        this.baseColors[index * 3] = red;
        this.baseColors[index * 3 + 1] = green;
        this.baseColors[index * 3 + 2] = blue;
        this.colors[index * 3] = red;
        this.colors[index * 3 + 1] = green;
        this.colors[index * 3 + 2] = blue;
      }
    }
  }

  buildBody() {
    const material = makeWorldBodyMaterial();
    const body = new THREE.Mesh(new THREE.SphereGeometry(this.radius * 0.985, 160, 96), material);
    body.name = 'worldsphere-body';
    body.receiveShadow = false;
    body.castShadow = false;
    this.group.add(body);
    this.body = body;
    this.bodyMaterial = material;
  }

  buildHexField() {
    const geometry = new THREE.BufferGeometry();
    geometry.setAttribute('position', new THREE.BufferAttribute(this.positions, 3));
    geometry.setAttribute('aColor', new THREE.BufferAttribute(this.colors, 3));
    geometry.setAttribute('aClaim', new THREE.BufferAttribute(this.claims, 1));
    geometry.setAttribute('aSeed', new THREE.BufferAttribute(this.seeds, 1));
    geometry.boundingSphere = new THREE.Sphere(new THREE.Vector3(), this.radius * 1.02);

    this.hexMaterial = makeHexFieldMaterial(Math.min(window.devicePixelRatio || 1, 2));
    const points = new THREE.Points(geometry, this.hexMaterial);
    points.name = 'worldsphere-hex-field';
    points.frustumCulled = false;
    points.renderOrder = 3;
    this.group.add(points);
    this.points = points;
    this.geometry = geometry;
    this.colorAttribute = geometry.getAttribute('aColor');
    this.claimAttribute = geometry.getAttribute('aClaim');
  }

  buildAtmosphere() {
    const atmosphere = new THREE.Mesh(
      new THREE.SphereGeometry(this.radius * 1.075, 64, 48),
      makeAtmosphereMaterial(),
    );
    atmosphere.name = 'worldsphere-atmosphere';
    atmosphere.renderOrder = 4;
    this.group.add(atmosphere);
    this.atmosphere = atmosphere;

    const cloudMaterial = new THREE.ShaderMaterial({
      transparent: true,
      depthWrite: false,
      uniforms: {
        uTime: { value: 0 },
        uSun: { value: new THREE.Vector3(0.38, 0.82, 0.44).normalize() },
      },
      vertexShader: `
        varying vec3 vWorldNormal;
        varying vec3 vNormal;
        void main() {
          vNormal = normalize(normalMatrix * normal);
          vWorldNormal = normalize(mat3(modelMatrix) * normal);
          gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
        }
      `,
      fragmentShader: `
        uniform float uTime;
        uniform vec3 uSun;
        varying vec3 vWorldNormal;
        varying vec3 vNormal;

        float hash(vec3 p) {
          p = fract(p * 0.3183099 + vec3(0.13, 0.27, 0.41));
          p *= 17.0;
          return fract(p.x * p.y * p.z * (p.x + p.y + p.z));
        }

        float noise(vec3 x) {
          vec3 i = floor(x);
          vec3 f = fract(x);
          f = f * f * (3.0 - 2.0 * f);
          return mix(
            mix(mix(hash(i + vec3(0,0,0)), hash(i + vec3(1,0,0)), f.x),
                mix(hash(i + vec3(0,1,0)), hash(i + vec3(1,1,0)), f.x), f.y),
            mix(mix(hash(i + vec3(0,0,1)), hash(i + vec3(1,0,1)), f.x),
                mix(hash(i + vec3(0,1,1)), hash(i + vec3(1,1,1)), f.x), f.y),
            f.z
          );
        }

        float fbm(vec3 p) {
          float value = 0.0;
          float amplitude = 0.55;
          for (int i = 0; i < 4; i++) {
            value += amplitude * noise(p);
            p = p * 2.05 + vec3(2.2, 1.3, 4.4);
            amplitude *= 0.5;
          }
          return value;
        }

        void main() {
          vec3 p = normalize(vWorldNormal);
          float drift = uTime * 0.005;
          float broad = fbm(p * 3.1 + vec3(drift, drift * 0.4, 0.0));
          float detail = fbm(p * 7.4 + vec3(4.1, drift * 0.8, 7.7));
          float cloud = smoothstep(0.52, 0.72, broad * 0.8 + detail * 0.2);
          float light = clamp(dot(normalize(vNormal), normalize(uSun)) * 0.8 + 0.28, 0.12, 1.05);
          float alpha = cloud * 0.26 * light;
          if (alpha < 0.012) discard;
          gl_FragColor = vec4(vec3(0.94, 0.97, 0.95), alpha);
        }
      `,
    });
    const clouds = new THREE.Mesh(new THREE.SphereGeometry(this.radius * 1.014, 96, 64), cloudMaterial);
    clouds.name = 'worldsphere-clouds';
    clouds.renderOrder = 2;
    this.group.add(clouds);
    this.clouds = clouds;
    this.cloudMaterial = cloudMaterial;
  }

  rowColForIndex(index) {
    let low = 0;
    let high = this.rows - 1;
    while (low < high) {
      const mid = (low + high + 1) >> 1;
      if (this.rowStart[mid] <= index) low = mid;
      else high = mid - 1;
    }
    return { row: low, col: index - this.rowStart[low] };
  }

  cellIndex(row, col) {
    if (row < 0 || row >= this.rows) return -1;
    const cols = this.rowCols[row];
    if (!cols) return -1;
    const wrapped = ((col % cols) + cols) % cols;
    return this.rowStart[row] + wrapped;
  }

  slotForIndex(index) {
    let lat;
    let lon;
    if (index < 8) {
      const column = index % 4;
      const band = Math.floor(index / 4);
      lat = band === 0 ? 0.46 : 0.14;
      lon = 2.04 + column * 0.19 + band * 0.04;
    } else {
      const golden = (index * 0.6180339887498949) % 1;
      lat = (golden * 2 - 1) * 1.33;
      lon = (index * 2.399963229728653 + 0.7) % (Math.PI * 2);
    }
    const row = clamp(
      Math.round(((lat + Math.PI / 2) / Math.PI) * (this.rows - 1)),
      8,
      this.rows - 9,
    );
    const cols = this.rowCols[row];
    const col = Math.floor((((lon + Math.PI) % (Math.PI * 2)) / (Math.PI * 2)) * cols);
    return { row, col };
  }

  cellDirection(row, col) {
    const safeRow = clamp(row, 0, this.rows - 1);
    const cols = this.rowCols[safeRow];
    const lat = this.rowLat[safeRow];
    const rowOffset = safeRow % 2 === 0 ? 0 : Math.PI / cols;
    const lon = (col / cols) * Math.PI * 2 + rowOffset - Math.PI;
    const cosLat = Math.cos(lat);
    return new THREE.Vector3(
      Math.cos(lon) * cosLat,
      Math.sin(lat),
      Math.sin(lon) * cosLat,
    );
  }

  updateMarker(island) {
    if (!island) return;
    const key = island.id || `island-${island.index ?? 0}`;
    let marker = this.markerMap.get(key);
    if (!marker) {
      const material = new THREE.SpriteMaterial({
        map: this.markerTexture,
        color: 0xffcf86,
        transparent: true,
        depthWrite: false,
        depthTest: true,
        blending: THREE.AdditiveBlending,
      });
      marker = new THREE.Sprite(material);
      marker.name = `worldsphere-marker-${key}`;
      marker.renderOrder = 6;
      marker.userData.phase = (island.index ?? 0) * 1.7;
      this.markers.add(marker);
      this.markerMap.set(key, marker);
    }
    const slot = this.slotForIndex(island.index ?? 0);
    const direction = this.cellDirection(slot.row, slot.col);
    marker.position.copy(direction).multiplyScalar(this.radius * 1.016);
    marker.userData.baseScale = this.radius * 0.13;
    marker.scale.setScalar(marker.userData.baseScale);
  }

  clearMarkers() {
    for (const marker of this.markerMap.values()) {
      this.markers.remove(marker);
      marker.material.dispose();
    }
    this.markerMap.clear();
  }

  tileColor(tile) {
    if (!tile) return 0x6f9b64;
    if (tile.feature === 'home') return 0xf0c374;
    if (tile.feature === 'shop') return 0xf8d38c;
    if (tile.feature === 'path') return 0xd6b179;
    if (tile.decor === 'crystal') return 0x92e5e5;
    if (tile.decor === 'magic') return 0xc6a9ff;
    if (tile.decor === 'prop') return 0xe2ad76;
    if (tile.decor === 'tree') return 0x71a56a;
    if (tile.type === 'water') return WATER_COLORS[tile.variant % WATER_COLORS.length];
    if (tile.type === 'stone') return STONE_COLORS[tile.variant % STONE_COLORS.length];
    return MEADOW_COLORS[tile.variant % MEADOW_COLORS.length];
  }

  syncIsland(island) {
    if (!island || !Array.isArray(island.tileList)) return;
    const slot = this.slotForIndex(island.index ?? 0);
    const islandId = (island.index ?? 0) + 1;

    for (const tile of island.tileList) {
      if (!tile) continue;
      const row = slot.row + tile.r;
      const col = slot.col + tile.q + Math.floor(tile.r / 2);
      const index = this.cellIndex(row, col);
      if (index < 0) continue;
      if (this.owners[index] === 0) this.claimedCount += 1;
      this.owners[index] = islandId;
      const hex = this.tileColor(tile);
      writeSrgb(this.colors, index * 3, hex);
      const lift = tile.feature === 'home' || tile.feature === 'shop' ? 1.16 : 1;
      this.colors[index * 3] = Math.min(1, this.colors[index * 3] * lift);
      this.colors[index * 3 + 1] = Math.min(1, this.colors[index * 3 + 1] * lift);
      this.colors[index * 3 + 2] = Math.min(1, this.colors[index * 3 + 2] * lift);
      this.claims[index] = 1;
    }
    this.colorAttribute.needsUpdate = true;
    this.claimAttribute.needsUpdate = true;
    this.updateMarker(island);
  }

  clearClaims() {
    this.owners.fill(0);
    this.claims.fill(0);
    this.colors.set(this.baseColors);
    this.claimedCount = 0;
    this.colorAttribute.needsUpdate = true;
    this.claimAttribute.needsUpdate = true;
  }

  syncAll(islands) {
    this.clearClaims();
    this.clearMarkers();
    for (const island of islands) this.syncIsland(island);
  }

  getStats() {
    return {
      target: this.target,
      cells: this.cellCount,
      claimed: this.claimedCount,
      percent: this.cellCount ? (this.claimedCount / this.cellCount) * 100 : 0,
      radius: this.radius,
      rows: this.rows,
    };
  }

  getCameraTarget() {
    return new THREE.Vector3(0, this.centerY, 0);
  }

  getViewDistance() {
    return this.radius * 3.72;
  }

  setPixelRatio(ratio) {
    if (this.hexMaterial) this.hexMaterial.uniforms.uPixelRatio.value = ratio;
  }

  update(dt, elapsed) {
    this.time = elapsed;
    this.rotation += dt * 0.012;
    this.group.rotation.y = this.rotation;
    if (this.hexMaterial) this.hexMaterial.uniforms.uTime.value = elapsed;
    if (this.bodyMaterial) this.bodyMaterial.uniforms.uTime.value = elapsed;
    if (this.cloudMaterial) this.cloudMaterial.uniforms.uTime.value = elapsed;
    if (this.clouds) this.clouds.rotation.y = elapsed * 0.005;
    if (this.atmosphere) {
      this.atmosphere.material.uniforms.uPower.value = 3.1 + Math.sin(elapsed * 0.18) * 0.2;
    }
    for (const marker of this.markerMap.values()) {
      const pulse = 1 + Math.sin(elapsed * 1.9 + marker.userData.phase) * 0.12;
      marker.scale.setScalar(marker.userData.baseScale * pulse);
      marker.material.opacity = 0.82 + Math.sin(elapsed * 2.4 + marker.userData.phase) * 0.12;
    }
  }
}
