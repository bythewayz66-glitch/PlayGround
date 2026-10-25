import * as THREE from 'three';
import {
  clamp,
  damp,
  easeOutBack,
  easeOutCubic,
  hash2,
  hexKey,
  hexesInRadius,
  HEX_DIRECTIONS,
  hexToWorld,
  mulberry32,
  smoothstep,
  worldToHex,
} from './utils.js';
import { ParticleSystem, RippleSystem } from './particles.js';

export const BLOOM_TARGET = 120;
export const START_RADIUS = 2;
export const MAX_RADIUS = 6;
const TILE_MAX_HEIGHT = 4.4;
const TILE_MIN_HEIGHT = 0.22;

import { TOOLS } from './tools.js';
export { TOOLS };

const MILESTONES = [
  { bloom: 18, radius: 3, sparks: 7, message: 'A new ring of the isle unfurls' },
  { bloom: 48, radius: 4, sparks: 9, message: 'The horizon opens — the world is growing' },
  { bloom: 88, radius: 5, sparks: 11, message: 'Another ring rises from the clouds' },
  { bloom: 145, radius: 6, sparks: 15, message: 'The isle has become a small world' },
];

const TYPE = {
  meadow: 'meadow',
  stone: 'stone',
  water: 'water',
};

const TYPE_COLORS = {
  meadow: [0x7fa878, 0x88af7d, 0x759d70, 0x8db882],
  stone: [0x92978a, 0x878d82, 0x9a9e91],
  water: [0x5cbcc2, 0x66c6c9, 0x55b2bb],
};

const SIDE_COLORS = {
  meadow: [0xa58157, 0x9b7952, 0xad875d],
  stone: [0x74766d, 0x7c7e74, 0x6d7169],
  water: [0x8c795b, 0x806f55, 0x947e60],
};

const DECOR = {
  none: 'none',
  tree: 'tree',
  crystal: 'crystal',
  magic: 'magic',
  prop: 'prop',
};

const FEATURE = {
  none: 'none',
  path: 'path',
  home: 'home',
  shop: 'shop',
  water: 'water',
};

const BUILDING_STYLES = {
  cabin: { w: 0.96, d: 0.78, wallH: 0.5, wall: 0, roof: 0, roofMode: 'gable', porch: true, chimney: true },
  longhouse: { w: 1.18, d: 0.72, wallH: 0.52, wall: 1, roof: 1, roofMode: 'gable', ridge: true },
  tower: { w: 0.68, d: 0.68, wallH: 1.38, wall: 1, roof: 1, roofMode: 'cone', lantern: true },
  treehouse: { w: 0.78, d: 0.78, wallH: 0.44, wall: 0, roof: 0, roofMode: 'gable', elevated: 0.48 },
  lighthouse: { w: 0.6, d: 0.6, wallH: 1.52, wall: 0, roof: 1, roofMode: 'cone', stripes: true, lantern: true },
  atelier: { w: 0.94, d: 0.8, wallH: 0.52, wall: 0, roof: 2, roofMode: 'flat', glass: true, plants: true },
  hall: { w: 1.16, d: 0.84, wallH: 0.68, wall: 0, roof: 2, roofMode: 'gable', columns: true, banners: true },
  bakery: { w: 0.96, d: 0.74, wallH: 0.48, wall: 0, roof: 0, roofMode: 'gable', chimney: true, awning: true },
  forge: { w: 0.92, d: 0.78, wallH: 0.5, wall: 1, roof: 2, roofMode: 'gable', chimney: true, forge: true },
  tavern: { w: 1.02, d: 0.8, wallH: 0.55, wall: 1, roof: 1, roofMode: 'gable', sign: true, chimney: true },
  library: { w: 1.02, d: 0.82, wallH: 0.64, wall: 2, roof: 1, roofMode: 'gable', columns: true, books: true },
  bathhouse: { w: 1.02, d: 0.88, wallH: 0.48, wall: 2, roof: 2, roofMode: 'flat', pool: true, columns: true },
  apothecary: { w: 0.9, d: 0.76, wallH: 0.48, wall: 0, roof: 2, roofMode: 'gable', plants: true, sign: true },
  observatory: { w: 0.78, d: 0.78, wallH: 0.7, wall: 1, roof: 2, roofMode: 'dome', telescope: true },
};

const ISLAND_NAMES = [
  'Isle of First Light',
  'Fernhollow',
  'The Lantern Shelf',
  'Mosswake',
  'Amberstep',
  'Little Comet',
  'The Quiet Orchard',
  'Windrow',
];

function makeHexRingGeometry(inner, outer, segments = 6) {
  const positions = [];
  const indices = [];
  for (let i = 0; i < segments; i += 1) {
    const a0 = (i / segments) * Math.PI * 2;
    const a1 = ((i + 1) / segments) * Math.PI * 2;
    positions.push(Math.cos(a0) * inner, 0, Math.sin(a0) * inner);
    positions.push(Math.cos(a0) * outer, 0, Math.sin(a0) * outer);
    positions.push(Math.cos(a1) * outer, 0, Math.sin(a1) * outer);
    positions.push(Math.cos(a1) * inner, 0, Math.sin(a1) * inner);
    const n = i * 4;
    indices.push(n, n + 1, n + 2, n, n + 2, n + 3);
  }
  const geometry = new THREE.BufferGeometry();
  geometry.setAttribute('position', new THREE.Float32BufferAttribute(positions, 3));
  geometry.setIndex(indices);
  geometry.computeVertexNormals();
  return geometry;
}

function makeGlowTexture() {
  const size = 128;
  const canvas = document.createElement('canvas');
  canvas.width = size;
  canvas.height = size;
  const ctx = canvas.getContext('2d');
  const gradient = ctx.createRadialGradient(size / 2, size / 2, 0, size / 2, size / 2, size / 2);
  gradient.addColorStop(0, 'rgba(255,255,255,0.95)');
  gradient.addColorStop(0.12, 'rgba(255,242,194,0.75)');
  gradient.addColorStop(0.36, 'rgba(255,195,104,0.25)');
  gradient.addColorStop(1, 'rgba(255,180,80,0)');
  ctx.fillStyle = gradient;
  ctx.fillRect(0, 0, size, size);
  const texture = new THREE.CanvasTexture(canvas);
  texture.colorSpace = THREE.SRGBColorSpace;
  return texture;
}

function makeFlowerTexture() {
  const size = 64;
  const canvas = document.createElement('canvas');
  canvas.width = size;
  canvas.height = size;
  const ctx = canvas.getContext('2d');
  ctx.translate(32, 32);
  ctx.fillStyle = 'white';
  for (let i = 0; i < 5; i += 1) {
    const angle = (i / 5) * Math.PI * 2;
    ctx.beginPath();
    ctx.ellipse(Math.cos(angle) * 9, Math.sin(angle) * 9, 7, 5, angle, 0, Math.PI * 2);
    ctx.fill();
  }
  ctx.fillStyle = 'rgba(255,220,120,0.95)';
  ctx.beginPath();
  ctx.arc(0, 0, 5, 0, Math.PI * 2);
  ctx.fill();
  const texture = new THREE.CanvasTexture(canvas);
  texture.colorSpace = THREE.SRGBColorSpace;
  return texture;
}


function makeWaterMaterial(color) {
  return new THREE.ShaderMaterial({
    uniforms: {
      uTime: { value: 0 },
      uColor: { value: new THREE.Color(color) },
      uDeep: { value: new THREE.Color(0x1d5f6b) },
      uSun: { value: new THREE.Vector3(0.35, 0.8, 0.5).normalize() },
    },
    vertexShader: `
      varying vec3 vWorld;
      varying vec3 vNormalW;
      void main() {
        vec4 world = modelMatrix * vec4(position, 1.0);
        vWorld = world.xyz;
        vNormalW = normalize(mat3(modelMatrix) * normal);
        gl_Position = projectionMatrix * viewMatrix * world;
      }
    `,
    fragmentShader: `
      uniform float uTime;
      uniform vec3 uColor;
      uniform vec3 uDeep;
      uniform vec3 uSun;
      varying vec3 vWorld;
      varying vec3 vNormalW;
      void main() {
        vec3 n = normalize(vNormalW);
        if (n.y < 0.0) n = -n;
        vec3 viewDir = normalize(cameraPosition - vWorld);
        float w1 = sin(vWorld.x * 3.1 + vWorld.z * 2.6 + uTime * 1.35);
        float w2 = sin(vWorld.x * 5.7 - vWorld.z * 4.3 - uTime * 1.8);
        float ripple = (w1 + w2) * 0.5;
        vec3 color = mix(uDeep, uColor, 0.55 + ripple * 0.18);
        float fresnel = pow(1.0 - max(dot(n, viewDir), 0.0), 2.2);
        float glint = smoothstep(0.72, 1.0, sin(vWorld.x * 11.0 + vWorld.z * 8.0 + uTime * 2.3) * 0.5 + 0.5);
        float spec = pow(max(dot(n, normalize(uSun + viewDir * 0.35)), 0.0), 26.0);
        color += vec3(0.07, 0.16, 0.18) * fresnel;
        color += vec3(0.42, 0.4, 0.3) * spec;
        color += vec3(0.16, 0.25, 0.23) * glint * 0.45;
        gl_FragColor = vec4(color, 1.0);
      }
    `,
  });
}

function makeFoamMaterial() {
  return new THREE.ShaderMaterial({
    uniforms: {
      uTime: { value: 0 },
      uColor: { value: new THREE.Color(0xd7fff4) },
    },
    transparent: true,
    depthWrite: false,
    side: THREE.DoubleSide,
    blending: THREE.AdditiveBlending,
    vertexShader: `
      varying vec3 vLocal;
      void main() {
        vLocal = position;
        gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
      }
    `,
    fragmentShader: `
      uniform float uTime;
      uniform vec3 uColor;
      varying vec3 vLocal;
      void main() {
        float angle = atan(vLocal.z, vLocal.x);
        float flow = sin(angle * 7.0 + uTime * 1.7) * 0.5 + 0.5;
        float fine = sin(angle * 19.0 - uTime * 2.6) * 0.5 + 0.5;
        float alpha = 0.12 + flow * 0.2 + fine * 0.08;
        gl_FragColor = vec4(uColor, alpha);
      }
    `,
  });
}

export class Island {
  constructor(scene, events = {}, options = {}) {
    this.scene = scene;
    this.events = events;
    this.id = options.id || `isle-${Date.now().toString(36)}`;
    this.name = options.name || ISLAND_NAMES[0];
    this.index = options.index ?? 0;
    this.origin = new THREE.Vector3(options.x || 0, 0, options.z || 0);
    this.theme = options.theme || 'meadow';
    this.connections = new Set(options.connections || []);
    this.group = new THREE.Group();
    this.group.name = `openwork-isle-${this.id}`;
    this.group.position.copy(this.origin);
    this.scene.add(this.group);

    this.tiles = new Map();
    this.tileList = [];
    this.tileMeshes = [];
    this.trees = [];
    this.crystals = [];
    this.residents = [];
    this.ripples = [];
    this.radius = START_RADIUS;
    this.sparks = 20;
    this.bloom = 0;
    this.won = false;
    this.active = false;
    this.time = 0;
    this.saveClock = 0;
    this.spawnClock = 0;
    this.milestonesReached = new Set();
    this.history = [];
    this.stats = {
      actions: 0,
      land: 0,
      water: 0,
      grovesPlanted: 0,
      prismsWoken: 0,
      villagers: 2,
      homes: 0,
      shops: 0,
      paths: 0,
      residents: 0,
      magic: 0,
      props: 0,
      folk: {},
      tools: {},
    };
    this.heartBloom = 0;
    this.winPulse = 0;
    this.floraDirty = false;

    this.buildMaterials();
    this.buildGeometry();
    this.buildSelection();
    this.particles = new ParticleSystem(scene, 1100);
    this.ripplesSystem = new RippleSystem(scene, 16);
    this.glowTexture = makeGlowTexture();
    this.flowerTexture = makeFlowerTexture();
    this.buildHeartseed();
    this.buildFlowers();
    this.buildResidentMaterials();
    this.buildAnimalKit();

    this.loadOrCreate(options.saved);
    this.refreshStats();
    this.syncResidents();
    this.updateHeartseedImmediate();
  }

  setEvents(events) {
    this.events = { ...this.events, ...events };
  }

  getCenterWorld() {
    return this.origin.clone();
  }

  toWorldPoint(position) {
    return position.clone().add(this.origin);
  }

  setActive(active) {
    this.active = active;
  }

  setWorldVisible(visible) {
    this.group.visible = visible;
    if (this.particles?.points) this.particles.points.visible = visible;
    if (this.ripplesSystem?.ripples) {
      for (const ripple of this.ripplesSystem.ripples) {
        ripple.mesh.visible = visible && ripple.life > 0;
      }
    }
  }

  buildMaterials() {
    this.topMaterials = {};
    this.sideMaterials = {};
    this.waterMaterials = TYPE_COLORS.water.map((color) => makeWaterMaterial(color));
    this.foamMaterial = makeFoamMaterial();
    for (const typeName of Object.keys(TYPE_COLORS)) {
      if (typeName === 'water') {
        this.topMaterials[typeName] = this.waterMaterials;
      } else {
        this.topMaterials[typeName] = TYPE_COLORS[typeName].map((color) => {
          const options = {
            color,
            roughness: 0.92,
            metalness: 0,
            flatShading: false,
          };
          return new THREE.MeshStandardMaterial(options);
        });
      }
      this.sideMaterials[typeName] = SIDE_COLORS[typeName].map(
        (color) =>
          new THREE.MeshStandardMaterial({
            color,
            roughness: 1,
            metalness: 0,
            flatShading: true,
          }),
      );
    }

    this.trunkMaterial = new THREE.MeshStandardMaterial({ color: 0x7e5c42, roughness: 1, flatShading: true });
    this.leafMaterials = [
      new THREE.MeshStandardMaterial({ color: 0x6e9665, roughness: 0.95, flatShading: true }),
      new THREE.MeshStandardMaterial({ color: 0x7ca36d, roughness: 0.95, flatShading: true }),
      new THREE.MeshStandardMaterial({ color: 0x62895f, roughness: 0.95, flatShading: true }),
      new THREE.MeshStandardMaterial({ color: 0x90b377, roughness: 0.95, flatShading: true }),
    ];
    this.fruitMaterial = new THREE.MeshStandardMaterial({
      color: 0xf1c66e,
      emissive: 0xd28b36,
      emissiveIntensity: 0.45,
      roughness: 0.5,
      flatShading: true,
    });
    this.crystalMaterials = [
      new THREE.MeshStandardMaterial({
        color: 0xf0a9d2,
        emissive: 0xb64d89,
        emissiveIntensity: 0.5,
        roughness: 0.28,
        metalness: 0.08,
        flatShading: true,
      }),
      new THREE.MeshStandardMaterial({
        color: 0x8fe0d8,
        emissive: 0x268f8a,
        emissiveIntensity: 0.45,
        roughness: 0.25,
        metalness: 0.08,
        flatShading: true,
      }),
      new THREE.MeshStandardMaterial({
        color: 0xf5d78b,
        emissive: 0xa66a1e,
        emissiveIntensity: 0.4,
        roughness: 0.3,
        metalness: 0.08,
        flatShading: true,
      }),
    ];
    this.rockMaterial = new THREE.MeshStandardMaterial({ color: 0x81796a, roughness: 1, flatShading: true });
    this.rockDarkMaterial = new THREE.MeshStandardMaterial({ color: 0x635e55, roughness: 1, flatShading: true });
    this.pathMaterial = new THREE.MeshStandardMaterial({ color: 0xc7a87a, roughness: 1, flatShading: true });
    this.pathStoneMaterial = new THREE.MeshStandardMaterial({ color: 0xb0946f, roughness: 1, flatShading: true });
    this.plasterMaterials = [
      new THREE.MeshStandardMaterial({ color: 0xf0e4ca, roughness: 0.92 }),
      new THREE.MeshStandardMaterial({ color: 0xe8d5b4, roughness: 0.94 }),
      new THREE.MeshStandardMaterial({ color: 0xd6e0cf, roughness: 0.92 }),
    ];
    this.timberMaterial = new THREE.MeshStandardMaterial({ color: 0x76513a, roughness: 0.94, flatShading: true });
    this.thatchMaterial = new THREE.MeshStandardMaterial({ color: 0xb9854e, roughness: 1, flatShading: true });
    this.roofMaterials = [
      new THREE.MeshStandardMaterial({ color: 0x9a5f45, roughness: 0.95, flatShading: true }),
      new THREE.MeshStandardMaterial({ color: 0x58705d, roughness: 0.95, flatShading: true }),
      new THREE.MeshStandardMaterial({ color: 0xa87845, roughness: 0.95, flatShading: true }),
    ];
    this.awningMaterials = [
      new THREE.MeshStandardMaterial({ color: 0xe6d6b8, roughness: 0.9 }),
      new THREE.MeshStandardMaterial({ color: 0xc36248, roughness: 0.9 }),
      new THREE.MeshStandardMaterial({ color: 0x67846d, roughness: 0.9 }),
    ];
    this.warmGlowMaterial = new THREE.MeshStandardMaterial({
      color: 0xffe2a2,
      emissive: 0xffaa3d,
      emissiveIntensity: 0.7,
      roughness: 0.4,
    });
    this.rugMaterial = new THREE.MeshStandardMaterial({ color: 0xb86e52, roughness: 1, flatShading: true });
    this.counterMaterial = new THREE.MeshStandardMaterial({ color: 0x9a6d49, roughness: 0.9, flatShading: true });
    this.produceMaterials = [
      new THREE.MeshStandardMaterial({ color: 0xdf8a52, roughness: 0.85, flatShading: true }),
      new THREE.MeshStandardMaterial({ color: 0xe3bd5f, roughness: 0.85, flatShading: true }),
      new THREE.MeshStandardMaterial({ color: 0x84a861, roughness: 0.85, flatShading: true }),
      new THREE.MeshStandardMaterial({ color: 0xc96962, roughness: 0.85, flatShading: true }),
    ];
    this.paleWoodMaterial = new THREE.MeshStandardMaterial({ color: 0xd8c39d, roughness: 0.94, flatShading: true });
    this.darkWoodMaterial = new THREE.MeshStandardMaterial({ color: 0x4f392b, roughness: 1, flatShading: true });
    this.slateMaterial = new THREE.MeshStandardMaterial({ color: 0x59615d, roughness: 0.96, flatShading: true });
    this.copperMaterial = new THREE.MeshStandardMaterial({ color: 0x9a6a45, roughness: 0.62, metalness: 0.16, flatShading: true });
    this.birchBarkMaterial = new THREE.MeshStandardMaterial({ color: 0xe5dfce, roughness: 0.95, flatShading: true });
    this.palmLeafMaterial = new THREE.MeshStandardMaterial({ color: 0x6f9c61, roughness: 0.9, flatShading: true });
    this.blossomMaterials = [
      new THREE.MeshStandardMaterial({ color: 0xe6a7b7, roughness: 0.9, flatShading: true }),
      new THREE.MeshStandardMaterial({ color: 0xf0c7cd, roughness: 0.9, flatShading: true }),
      new THREE.MeshStandardMaterial({ color: 0xd98fa5, roughness: 0.9, flatShading: true }),
    ];
    this.moonMaterial = new THREE.MeshStandardMaterial({
      color: 0xc9dcff,
      emissive: 0x6c8ed8,
      emissiveIntensity: 0.62,
      roughness: 0.22,
      metalness: 0.12,
      flatShading: true,
    });
    this.sunMaterial = new THREE.MeshStandardMaterial({
      color: 0xffd783,
      emissive: 0xd68c22,
      emissiveIntensity: 0.7,
      roughness: 0.28,
      metalness: 0.08,
      flatShading: true,
    });
    this.mushroomCapMaterial = new THREE.MeshStandardMaterial({ color: 0xc96752, roughness: 0.88, flatShading: true });
    this.creamMaterial = new THREE.MeshStandardMaterial({ color: 0xf2e6cd, roughness: 0.94, flatShading: true });
    this.charcoalMaterial = new THREE.MeshStandardMaterial({ color: 0x383b36, roughness: 1, flatShading: true });
    this.glassMaterial = new THREE.MeshStandardMaterial({
      color: 0xa7d9d2,
      emissive: 0x447e79,
      emissiveIntensity: 0.32,
      transparent: true,
      opacity: 0.56,
      roughness: 0.16,
      metalness: 0.12,
      flatShading: true,
    });
    this.bannerMaterials = [
      new THREE.MeshStandardMaterial({ color: 0xc6634d, roughness: 0.9, side: THREE.DoubleSide }),
      new THREE.MeshStandardMaterial({ color: 0xe0b45f, roughness: 0.9, side: THREE.DoubleSide }),
      new THREE.MeshStandardMaterial({ color: 0x67846d, roughness: 0.9, side: THREE.DoubleSide }),
    ];
    this.kiteMaterials = [
      new THREE.MeshStandardMaterial({ color: 0xe08b64, roughness: 0.7, side: THREE.DoubleSide }),
      new THREE.MeshStandardMaterial({ color: 0xe8c86b, roughness: 0.7, side: THREE.DoubleSide }),
      new THREE.MeshStandardMaterial({ color: 0x71a3a0, roughness: 0.7, side: THREE.DoubleSide }),
    ];
    this.flameMaterial = new THREE.MeshStandardMaterial({
      color: 0xffb45f,
      emissive: 0xff7b24,
      emissiveIntensity: 0.9,
      roughness: 0.4,
      transparent: true,
      opacity: 0.88,
      flatShading: true,
    });
    this.waterGlowMaterial = new THREE.MeshBasicMaterial({
      color: 0xb8f2e9,
      transparent: true,
      opacity: 0.32,
      depthWrite: false,
      blending: THREE.AdditiveBlending,
    });
    this.baseMaterial = new THREE.MeshStandardMaterial({
      vertexColors: true,
      roughness: 1,
      metalness: 0,
      flatShading: true,
    });
    this.heartMaterials = {
      shell: new THREE.MeshStandardMaterial({
        color: 0xf6c66e,
        emissive: 0xdd8a24,
        emissiveIntensity: 0.58,
        roughness: 0.24,
        metalness: 0.12,
        transparent: true,
        opacity: 0.96,
        flatShading: true,
      }),
      core: new THREE.MeshStandardMaterial({
        color: 0xfff4cd,
        emissive: 0xffcf68,
        emissiveIntensity: 1.05,
        roughness: 0.2,
      }),
      petal: new THREE.MeshStandardMaterial({
        color: 0xf6d78a,
        emissive: 0xbf7a25,
        emissiveIntensity: 0.45,
        roughness: 0.45,
        side: THREE.DoubleSide,
        flatShading: true,
      }),
      petalInner: new THREE.MeshStandardMaterial({
        color: 0xfff0c4,
        emissive: 0xd18d32,
        emissiveIntensity: 0.6,
        roughness: 0.4,
        side: THREE.DoubleSide,
        flatShading: true,
      }),
      beam: new THREE.MeshBasicMaterial({
        color: 0xffdda0,
        transparent: true,
        opacity: 0,
        depthWrite: false,
        blending: THREE.AdditiveBlending,
        side: THREE.DoubleSide,
      }),
    };
  }

  buildGeometry() {
    const geometry = new THREE.CylinderGeometry(0.975, 1.02, 1, 6, 1, false);
    geometry.rotateY(Math.PI / 6);
    this.tileGeometry = geometry;

    this.treeTrunkGeometry = new THREE.CylinderGeometry(0.065, 0.11, 0.72, 5, 1);
    this.treeCanopyGeometry = new THREE.IcosahedronGeometry(1, 0);
    this.crystalGeometry = new THREE.OctahedronGeometry(0.5, 0);
    this.rockGeometry = new THREE.DodecahedronGeometry(0.5, 0);
    this.crystalRingGeometry = new THREE.TorusGeometry(0.43, 0.012, 4, 24);
    this.heartRingGeometry = new THREE.TorusGeometry(0.58, 0.012, 4, 40);
    this.seedGeometry = new THREE.OctahedronGeometry(0.34, 0);
    this.coreGeometry = new THREE.OctahedronGeometry(0.16, 0);
    this.petalGeometry = new THREE.SphereGeometry(0.5, 7, 5);
    this.selectionGeometry = makeHexRingGeometry(0.72, 0.92);
    this.waterRingGeometry = makeHexRingGeometry(0.83, 0.995);
    this.selectionGlowGeometry = makeHexRingGeometry(0.54, 0.98);
    this.pathGeometry = new THREE.CylinderGeometry(0.82, 0.82, 0.035, 6, 1);
    this.pathGeometry.rotateY(Math.PI / 6);
    this.pathStoneGeometry = new THREE.BoxGeometry(0.22, 0.035, 0.14);
    this.beamGeometry = new THREE.BoxGeometry(1, 1, 1);
    this.residentLimbGeometry = new THREE.CylinderGeometry(0.045, 0.055, 0.2, 5);
    this.residentBodyGeometry = new THREE.CylinderGeometry(0.105, 0.145, 0.3, 7);
    this.residentHeadGeometry = new THREE.IcosahedronGeometry(0.11, 1);
  }

  buildResidentMaterials() {
    this.residentPalette = [
      { coat: 0x7b9b89, accent: 0xe6c47f, hat: 0x6c5846 },
      { coat: 0xb9775c, accent: 0xeee1c8, hat: 0x4d5f54 },
      { coat: 0x6f829c, accent: 0xe4b263, hat: 0x8f6748 },
      { coat: 0x9a7e9d, accent: 0xd8e1c9, hat: 0x5d5144 },
      { coat: 0xc39258, accent: 0xb6d2c0, hat: 0x755341 },
      { coat: 0x73908c, accent: 0xd8a1a1, hat: 0x5b4937 },
    ].map((colors) => ({
      coat: new THREE.MeshStandardMaterial({ color: colors.coat, roughness: 0.92, flatShading: true }),
      accent: new THREE.MeshStandardMaterial({ color: colors.accent, roughness: 0.9, flatShading: true }),
      hat: new THREE.MeshStandardMaterial({ color: colors.hat, roughness: 0.96, flatShading: true }),
      skin: new THREE.MeshStandardMaterial({
        color: [0xe8bfa1, 0xc68e6d, 0x8d6048, 0xf0cfb0][Math.floor(Math.random() * 4)],
        roughness: 0.9,
        flatShading: true,
      }),
    }));
  }

  buildAnimalKit() {
    this.animalLegGeometry = new THREE.CylinderGeometry(0.022, 0.032, 0.24, 5);
    this.animalEarGeometry = new THREE.ConeGeometry(0.045, 0.16, 5);
    this.animalTailGeometry = new THREE.ConeGeometry(0.055, 0.3, 5);
    this.animalBodyGeometry = new THREE.SphereGeometry(1, 8, 6);
    this.animalHeadGeometry = new THREE.IcosahedronGeometry(1, 1);
    this.animalEyeGeometry = new THREE.SphereGeometry(0.022, 5, 4);
    const fur = (color, roughness = 0.95) => new THREE.MeshStandardMaterial({ color, roughness, flatShading: true });
    this.animalMaterials = {
      deerFur: fur(0x9a6b45),
      deerBelly: fur(0xe7d4b2),
      rabbitFur: fur(0xd8c7ac),
      rabbitInner: fur(0xe0a39d),
      foxFur: fur(0xc26a3b),
      foxCream: fur(0xf0e2c7),
      dark: fur(0x3b2e24),
      eye: new THREE.MeshStandardMaterial({ color: 0x1f1a15, roughness: 0.35 }),
    };
    this.animals = [];
    this.animalKitReady = true;
  }

  buildSelection() {
    this.selection = new THREE.Group();
    const ringMat = new THREE.MeshBasicMaterial({
      color: 0xffd88c,
      transparent: true,
      opacity: 0.88,
      depthWrite: false,
      blending: THREE.AdditiveBlending,
      side: THREE.DoubleSide,
    });
    const glowMat = new THREE.MeshBasicMaterial({
      color: 0xffc861,
      transparent: true,
      opacity: 0.1,
      depthWrite: false,
      blending: THREE.AdditiveBlending,
      side: THREE.DoubleSide,
    });
    this.selectionRing = new THREE.Mesh(this.selectionGeometry, ringMat);
    this.selectionGlow = new THREE.Mesh(this.selectionGlowGeometry, glowMat);
    this.selectionRing.renderOrder = 15;
    this.selectionGlow.renderOrder = 14;
    this.selection.add(this.selectionGlow, this.selectionRing);
    this.selection.visible = false;
    this.selection.userData.target = null;
    this.group.add(this.selection);
  }

  buildHeartseed() {
    const group = new THREE.Group();
    group.position.set(0, 1.5, 0);

    const plinth = new THREE.Mesh(
      new THREE.CylinderGeometry(0.46, 0.56, 0.16, 6),
      this.rockDarkMaterial,
    );
    plinth.position.y = 0.08;
    plinth.receiveShadow = true;
    group.add(plinth);

    const plinthRing = new THREE.Mesh(
      new THREE.TorusGeometry(0.42, 0.018, 5, 28),
      this.fruitMaterial,
    );
    plinthRing.rotation.x = Math.PI / 2;
    plinthRing.position.y = 0.17;
    group.add(plinthRing);

    const seedPivot = new THREE.Group();
    seedPivot.position.y = 1.06;
    group.add(seedPivot);

    const shell = new THREE.Mesh(this.seedGeometry, this.heartMaterials.shell);
    shell.scale.set(0.9, 1.65, 0.9);
    shell.castShadow = true;
    seedPivot.add(shell);

    const core = new THREE.Mesh(this.coreGeometry, this.heartMaterials.core);
    core.scale.set(0.72, 1.3, 0.72);
    seedPivot.add(core);

    const glow = new THREE.Sprite(
      new THREE.SpriteMaterial({
        map: this.glowTexture,
        color: 0xffc869,
        transparent: true,
        opacity: 0.72,
        depthWrite: false,
        blending: THREE.AdditiveBlending,
      }),
    );
    glow.scale.setScalar(3.3);
    seedPivot.add(glow);

    const orbit = new THREE.Group();
    seedPivot.add(orbit);
    const orbitRing = new THREE.Mesh(this.heartRingGeometry, this.fruitMaterial);
    orbitRing.rotation.x = 1.22;
    orbitRing.rotation.z = 0.3;
    orbit.add(orbitRing);

    const orbitRing2 = new THREE.Mesh(this.heartRingGeometry, this.fruitMaterial);
    orbitRing2.rotation.x = -1.3;
    orbitRing2.rotation.z = -0.2;
    orbitRing2.scale.setScalar(0.82);
    orbit.add(orbitRing2);

    const shards = [];
    const shardGeom = new THREE.OctahedronGeometry(0.065, 0);
    for (let i = 0; i < 3; i += 1) {
      const shard = new THREE.Mesh(shardGeom, this.fruitMaterial);
      shard.scale.set(0.7, 1.7, 0.7);
      orbit.add(shard);
      shards.push(shard);
    }

    const light = new THREE.PointLight(0xffbf62, 2.2, 8, 1.7);
    light.position.y = 1.06;
    group.add(light);

    const bloomGroup = new THREE.Group();
    bloomGroup.position.y = 1.06;
    bloomGroup.visible = false;
    for (let i = 0; i < 14; i += 1) {
      const angle = (i / 14) * Math.PI * 2;
      const petal = new THREE.Mesh(this.petalGeometry, i % 2 === 0 ? this.heartMaterials.petal : this.heartMaterials.petalInner);
      petal.scale.set(0.18, 0.62, 0.05);
      petal.position.set(Math.cos(angle) * 0.38, 0.04, Math.sin(angle) * 0.38);
      petal.rotation.y = -angle;
      petal.rotation.z = Math.PI / 2 - 0.32;
      petal.userData.angle = angle;
      bloomGroup.add(petal);
    }
    const bloomCore = new THREE.Mesh(new THREE.IcosahedronGeometry(0.34, 1), this.heartMaterials.core);
    bloomGroup.add(bloomCore);
    for (let i = 0; i < 10; i += 1) {
      const angle = (i / 10) * Math.PI * 2;
      const petal = new THREE.Mesh(this.petalGeometry, this.heartMaterials.petal);
      petal.scale.set(0.1, 0.5, 0.04);
      petal.position.set(Math.cos(angle) * 0.2, 0.24, Math.sin(angle) * 0.2);
      petal.rotation.y = -angle;
      petal.rotation.z = Math.PI / 2;
      bloomGroup.add(petal);
    }
    group.add(bloomGroup);

    const beam = new THREE.Mesh(new THREE.CylinderGeometry(0.18, 0.72, 8, 12, 1, true), this.heartMaterials.beam);
    beam.position.y = 4.3;
    beam.visible = false;
    group.add(beam);

    this.heartseed = {
      group,
      seedPivot,
      shell,
      core,
      glow,
      orbit,
      orbitRing,
      orbitRing2,
      shards,
      light,
      bloomGroup,
      beam,
      bloomProgress: 0,
    };
    this.group.add(group);
  }

  buildFlowers() {
    this.flowerGeometry = new THREE.BufferGeometry();
    this.flowerMaterial = new THREE.PointsMaterial({
      size: 0.16,
      map: this.flowerTexture,
      transparent: true,
      alphaTest: 0.08,
      depthWrite: false,
      vertexColors: true,
      sizeAttenuation: true,
    });
    this.flowers = new THREE.Points(this.flowerGeometry, this.flowerMaterial);
    this.flowers.renderOrder = 4;
    this.flowers.frustumCulled = false;
    this.group.add(this.flowers);
    this.rebuildFlowers();
  }

  createInitialTile(q, r) {
    const distance = Math.max(Math.abs(q), Math.abs(r), Math.abs(-q - r));
    const noise = hash2(q * 7 + 12, r * 11 - 4);
    const isHeart = q === 0 && r === 0;
    const type = isHeart ? TYPE.stone : noise > 0.82 ? TYPE.stone : TYPE.meadow;
    const height = isHeart
      ? 1.58
      : clamp(1.3 - distance * 0.11 + hash2(q * 13 - 2, r * 5 + 9) * 0.28, 0.72, 1.48);
    return {
      q,
      r,
      x: 0,
      z: 0,
      height,
      targetHeight: height,
      currentHeight: height,
      type,
      variant: Math.floor(hash2(q * 3 + 1, r * 8 + 3) * 4) % TYPE_COLORS[type].length,
      decor: DECOR.none,
      decorLevel: 0,
      decorStyle: null,
      feature: FEATURE.none,
      featureLevel: 0,
      featureStyle: null,
      wildRock: !isHeart && hash2(q * 17 + 4, r * 2 + 7) > 0.81,
      isHeart,
      group: null,
      mesh: null,
      decorGroup: null,
      featureGroup: null,
      rockMesh: null,
      spawn: 1,
      spawnDelay: 0,
      spawnProgress: 1,
      heightPulse: 0,
    };
  }

  createTile(tile, options = {}) {
    const { animate = false, delay = 0 } = options;
    const world = hexToWorld(tile.q, tile.r);
    tile.x = world.x;
    tile.z = world.z;

    const group = new THREE.Group();
    group.position.set(tile.x, animate ? -2.8 : 0, tile.z);
    tile.group = group;

    const material = [
      this.sideMaterials[tile.type][tile.variant % this.sideMaterials[tile.type].length],
      this.topMaterials[tile.type][tile.variant % this.topMaterials[tile.type].length],
      this.sideMaterials[tile.type][tile.variant % this.sideMaterials[tile.type].length],
    ];
    const mesh = new THREE.Mesh(this.tileGeometry, material);
    mesh.position.y = tile.height / 2;
    mesh.scale.y = tile.height;
    mesh.receiveShadow = true;
    mesh.castShadow = true;
    mesh.userData.tile = tile;
    tile.mesh = mesh;
    group.add(mesh);

    const decorGroup = new THREE.Group();
    decorGroup.position.y = tile.height;
    tile.decorGroup = decorGroup;
    group.add(decorGroup);

    const featureGroup = new THREE.Group();
    featureGroup.position.y = tile.height;
    tile.featureGroup = featureGroup;
    group.add(featureGroup);

    const waterRing = new THREE.Mesh(this.waterRingGeometry, this.foamMaterial);
    waterRing.position.y = tile.height + 0.012;
    waterRing.rotation.y = Math.PI / 6;
    waterRing.renderOrder = 2;
    waterRing.visible = tile.type === TYPE.water;
    tile.waterRing = waterRing;
    group.add(waterRing);

    this.group.add(group);
    this.tiles.set(hexKey(tile.q, tile.r), tile);
    this.tileList.push(tile);
    this.tileMeshes.push(mesh);

    if (tile.decor !== DECOR.none) {
      this.createDecor(tile, tile.decor, tile.decorLevel, false, tile.decorStyle);
    } else if (tile.wildRock) {
      this.createWildRock(tile);
    }
    if (tile.feature !== FEATURE.none) {
      this.createFeature(tile, tile.feature, false, tile.featureStyle);
    }

    tile.spawn = animate ? 0 : 1;
    tile.spawnDelay = delay;
    tile.spawnProgress = animate ? 0 : 1;
    if (animate) {
      group.scale.setScalar(0.25);
      group.visible = false;
    }
    return tile;
  }

  spawnRing(radius, animate = true, delayBase = 0) {
    const existing = this.tiles.size;
    const coords = hexesInRadius(radius);
    let added = 0;
    coords.forEach(([q, r], index) => {
      const key = hexKey(q, r);
      if (this.tiles.has(key)) return;
      const tile = this.createInitialTile(q, r);
      this.createTile(tile, { animate, delay: delayBase + index * 0.018 });
      added += 1;
    });
    if (added > 0) {
      this.radius = Math.max(this.radius, radius);
      this.rebuildBase(animate);
      this.rebuildFlowers();
    }
    return added;
  }

  applySavedTile(saved, tile) {
    if (!tile) return;
    tile.height = clamp(Number(saved.h) || tile.height, TILE_MIN_HEIGHT, TILE_MAX_HEIGHT);
    tile.targetHeight = tile.height;
    tile.currentHeight = tile.height;
    tile.type = Object.values(TYPE).includes(saved.t) ? saved.t : tile.type;
    tile.variant = Number.isInteger(saved.v) ? saved.v : tile.variant;
    tile.decor = Object.values(DECOR).includes(saved.d) ? saved.d : DECOR.none;
    tile.decorLevel = Number(saved.l) || 0;
    tile.decorStyle = typeof saved.ds === 'string' ? saved.ds : null;
    tile.feature = Object.values(FEATURE).includes(saved.f) ? saved.f : FEATURE.none;
    tile.featureStyle = typeof saved.fs === 'string' ? saved.fs : null;
    tile.wildRock = Boolean(saved.rock);
    tile.mesh.position.y = tile.height / 2;
    tile.mesh.scale.y = tile.height;
    this.updateTileMaterials(tile);
    tile.decorGroup.position.y = tile.height;
    tile.featureGroup.position.y = tile.height;
    if (tile.decor !== DECOR.none) {
      this.createDecor(tile, tile.decor, tile.decorLevel, false, tile.decorStyle);
    } else if (tile.wildRock) {
      this.createWildRock(tile);
    } else {
      this.clearWildRock(tile);
    }
    if (tile.feature !== FEATURE.none) this.createFeature(tile, tile.feature, false, tile.featureStyle);
  }

  loadOrCreate(saved = null) {
    if (saved && Array.isArray(saved.tiles)) {
      this.sparks = clamp(Number(saved.sparks) || 20, 0, 999);
      this.bloom = Math.max(0, Number(saved.bloom) || 0);
      this.won = Boolean(saved.won);
      this.stats = { ...this.stats, ...(saved.stats || {}) };
      this.radius = clamp(Number(saved.radius) || START_RADIUS, START_RADIUS, MAX_RADIUS);
      this.milestonesReached = new Set(saved.milestonesReached || []);
      this.spawnRing(this.radius, false);
      const byKey = new Map(saved.tiles.map((entry) => [hexKey(entry.q, entry.r), entry]));
      for (const tile of this.tileList) {
        const entry = byKey.get(hexKey(tile.q, tile.r));
        if (entry) this.applySavedTile(entry, tile);
      }
      this.heartBloom = clamp(this.bloom / BLOOM_TARGET, 0, 1);
      this.rebuildFlowers();
      return;
    }

    this.spawnRing(START_RADIUS, false);
    const center = this.tiles.get(hexKey(0, 0));
    if (center) {
      center.type = TYPE.stone;
      center.variant = 1;
      center.height = 1.58;
      center.targetHeight = 1.58;
      center.currentHeight = 1.58;
      center.mesh.position.y = center.height / 2;
      center.mesh.scale.y = center.height;
      this.updateTileMaterials(center);
    }
  }

  rebuildBase(animate = false) {
    if (this.baseGroup) {
      this.group.remove(this.baseGroup);
      this.baseGroup.traverse((child) => {
        if (child.geometry && child.geometry !== this.rockGeometry) child.geometry.dispose();
      });
    }

    const radius = this.radius;
    const topRadius = 1.6 * radius + 1.25;
    const depth = 3.8 + radius * 1.2;
    const seed = 17 + radius * 5;
    const group = new THREE.Group();
    const positions = [];
    const colors = [];
    const indices = [];
    const rings = 7;
    const segments = 20;
    const random = mulberry32(seed);
    const topColor = new THREE.Color(0x7b674e);
    const midColor = new THREE.Color(0x5c5145);
    const deepColor = new THREE.Color(0x3c4039);

    for (let level = 0; level <= rings; level += 1) {
      const t = level / rings;
      const y = -0.4 - depth * Math.pow(t, 0.88);
      const band = 1 - smoothstep(0, 1, t);
      const ringRadius = Math.max(0.12, topRadius * (1 - Math.pow(t, 1.25)) * (0.92 + band * 0.08));
      for (let segment = 0; segment < segments; segment += 1) {
        const angle = (segment / segments) * Math.PI * 2;
        const wobble = 1 + Math.sin(angle * 3 + seed * 0.4) * 0.055 + Math.cos(angle * 5 - seed) * 0.035;
        const jag = 1 + (random() - 0.5) * 0.16;
        const r = ringRadius * wobble * jag;
        positions.push(Math.cos(angle) * r, y + (random() - 0.5) * 0.24, Math.sin(angle) * r);
        const color = topColor.clone().lerp(midColor, smoothstep(0, 0.62, t)).lerp(deepColor, smoothstep(0.55, 1, t));
        color.offsetHSL((random() - 0.5) * 0.012, (random() - 0.5) * 0.03, (random() - 0.5) * 0.045);
        colors.push(color.r, color.g, color.b);
      }
    }

    for (let level = 0; level < rings; level += 1) {
      for (let segment = 0; segment < segments; segment += 1) {
        const nextSegment = (segment + 1) % segments;
        const a = level * segments + segment;
        const b = level * segments + nextSegment;
        const c = (level + 1) * segments + segment;
        const d = (level + 1) * segments + nextSegment;
        indices.push(a, c, b, b, c, d);
      }
    }

    const topCenterIndex = positions.length / 3;
    positions.push(0, -0.34, 0);
    const capColor = topColor.clone().offsetHSL(0, 0.02, -0.02);
    colors.push(capColor.r, capColor.g, capColor.b);
    for (let segment = 0; segment < segments; segment += 1) {
      const next = (segment + 1) % segments;
      indices.push(topCenterIndex, segment, next);
    }

    const bottomCenterIndex = positions.length / 3;
    positions.push(0, -0.4 - depth * 1.08, 0);
    const deep = deepColor.clone();
    colors.push(deep.r, deep.g, deep.b);
    const lastRing = rings * segments;
    for (let segment = 0; segment < segments; segment += 1) {
      const next = (segment + 1) % segments;
      indices.push(bottomCenterIndex, lastRing + next, lastRing + segment);
    }

    const geometry = new THREE.BufferGeometry();
    geometry.setAttribute('position', new THREE.Float32BufferAttribute(positions, 3));
    geometry.setAttribute('color', new THREE.Float32BufferAttribute(colors, 3));
    geometry.setIndex(indices);
    geometry.computeVertexNormals();
    const mesh = new THREE.Mesh(geometry, this.baseMaterial);
    mesh.receiveShadow = true;
    mesh.castShadow = false;
    group.add(mesh);

    const shardCount = 4 + radius * 2;
    for (let i = 0; i < shardCount; i += 1) {
      const angle = random() * Math.PI * 2;
      const distance = topRadius * (0.45 + random() * 0.42);
      const shard = new THREE.Mesh(this.rockGeometry, random() > 0.5 ? this.rockMaterial : this.rockDarkMaterial);
      shard.castShadow = true;
      shard.receiveShadow = true;
      const size = 0.32 + random() * 0.72;
      shard.scale.set(size * (0.7 + random() * 0.6), size * (0.8 + random() * 1.2), size * (0.7 + random() * 0.6));
      shard.position.set(
        Math.cos(angle) * distance,
        -1.9 - random() * (depth * 0.62),
        Math.sin(angle) * distance,
      );
      shard.rotation.set(random() * Math.PI, random() * Math.PI, random() * Math.PI);
      group.add(shard);
    }

    this.baseGroup = group;
    this.group.add(group);
    if (animate) {
      group.scale.set(0.84, 0.7, 0.84);
      this.baseGrow = 0;
    } else {
      group.scale.setScalar(1);
      this.baseGrow = 1;
    }
  }

  updateTileMaterials(tile) {
    const topList = this.topMaterials[tile.type];
    const sideList = this.sideMaterials[tile.type];
    const top = topList[tile.variant % topList.length];
    const side = sideList[tile.variant % sideList.length];
    tile.mesh.material = [side, top, side];
    if (tile.waterRing) tile.waterRing.visible = tile.type === TYPE.water;
  }

  updateTileHeight(tile) {
    tile.mesh.position.y = tile.currentHeight / 2;
    tile.mesh.scale.y = tile.currentHeight;
    tile.decorGroup.position.y = tile.currentHeight;
    tile.featureGroup.position.y = tile.currentHeight;
    if (tile.waterRing) tile.waterRing.position.y = tile.currentHeight + 0.012;
  }

  createDecor(tile, kind, level, animate = true, style = null) {
    tile.decor = kind;
    tile.decorLevel = level;
    tile.decorStyle = style || tile.decorStyle || null;
    while (tile.decorGroup.children.length > 0) {
      tile.decorGroup.remove(tile.decorGroup.children[0]);
    }
    this.clearWildRock(tile);

    let object = null;
    if (kind === DECOR.tree) {
      object = this.createTree(tile, level, tile.decorStyle);
      if (!this.trees.includes(object)) this.trees.push(object);
    } else if (kind === DECOR.crystal) {
      object = this.createCrystal(tile, level, tile.decorStyle);
      if (!this.crystals.includes(object)) this.crystals.push(object);
    } else if (kind === DECOR.magic) {
      object = this.createMagicDecor(tile, tile.decorStyle, level);
      if (!this.crystals.includes(object)) this.crystals.push(object);
    } else if (kind === DECOR.prop) {
      object = this.createProp(tile, tile.decorStyle, level);
    }
    tile.decorObject = object;
    if (object) {
      tile.decorGroup.add(object);
      object.userData.pop = animate ? 0 : 1;
    }

    if (animate) {
      tile.decorGroup.scale.setScalar(0.01);
      tile.decorGroup.userData.pop = 0;
    } else {
      tile.decorGroup.scale.setScalar(1);
      tile.decorGroup.userData.pop = 1;
    }
  }


  createFeature(tile, kind, animate = true, style = null) {
    tile.feature = kind;
    tile.featureStyle = style || tile.featureStyle || null;
    while (tile.featureGroup.children.length > 0) {
      tile.featureGroup.remove(tile.featureGroup.children[0]);
    }
    let object = null;
    if (kind === FEATURE.path) object = this.createPath(tile, tile.featureStyle);
    else if (kind === FEATURE.home) {
      object = tile.featureStyle && tile.featureStyle !== 'cottage'
        ? this.createStyledBuilding(tile, tile.featureStyle, 'home')
        : this.createHome(tile);
    } else if (kind === FEATURE.shop) {
      object = tile.featureStyle && tile.featureStyle !== 'market'
        ? this.createStyledBuilding(tile, tile.featureStyle, 'shop')
        : this.createShop(tile);
    } else if (kind === FEATURE.water) object = this.createWaterFeature(tile, tile.featureStyle);
    tile.featureObject = object;
    if (object) tile.featureGroup.add(object);

    if (animate) {
      tile.featureGroup.scale.setScalar(0.01);
      tile.featureGroup.userData.pop = 0;
    } else {
      tile.featureGroup.scale.setScalar(1);
      tile.featureGroup.userData.pop = 1;
    }
  }

  clearFeature(tile) {
    while (tile.featureGroup.children.length > 0) {
      tile.featureGroup.remove(tile.featureGroup.children[0]);
    }
    tile.feature = FEATURE.none;
    tile.featureStyle = null;
    tile.featureObject = null;
  }

  createPath(tile, style = 'path') {
    const group = new THREE.Group();
    const random = mulberry32(Math.floor(hash2(tile.q + 21, tile.r + 9) * 100000) + (style?.length || 0) * 31);
    const padMaterial = style === 'cobble'
      ? this.slateMaterial
      : style === 'boardwalk'
        ? this.darkWoodMaterial
        : style === 'plaza'
          ? this.creamMaterial
          : style === 'garden'
            ? this.leafMaterials[1]
            : this.pathMaterial;
    const pad = new THREE.Mesh(this.pathGeometry, padMaterial);
    pad.position.y = 0.018;
    pad.receiveShadow = true;
    pad.scale.setScalar(style === 'plaza' ? 0.96 : style === 'garden' ? 0.9 : 1);
    group.add(pad);

    if (style === 'boardwalk') {
      for (let i = 0; i < 5; i += 1) {
        const plank = new THREE.Mesh(this.pathStoneGeometry, i % 2 ? this.timberMaterial : this.paleWoodMaterial);
        plank.scale.set(4.4, 0.72, 1.4);
        plank.position.set(0, 0.055, -0.5 + i * 0.25);
        plank.rotation.y = 0.04;
        plank.castShadow = true;
        group.add(plank);
      }
      for (const x of [-0.78, 0.78]) {
        const beam = new THREE.Mesh(this.beamGeometry, this.timberMaterial);
        beam.scale.set(0.06, 0.06, 1.5);
        beam.position.set(x, 0.02, 0);
        group.add(beam);
      }
    } else if (style === 'steps') {
      for (let i = 0; i < 3; i += 1) {
        const step = new THREE.Mesh(new THREE.CylinderGeometry(0.78 - i * 0.17, 0.82 - i * 0.16, 0.08, 6), i % 2 ? this.pathStoneMaterial : this.slateMaterial);
        step.rotation.y = Math.PI / 6;
        step.position.y = 0.05 + i * 0.075;
        step.castShadow = true;
        step.receiveShadow = true;
        group.add(step);
      }
    } else if (style === 'garden') {
      for (let i = 0; i < 7; i += 1) {
        const angle = (i / 7) * Math.PI * 2;
        const radius = 0.58;
        const stem = new THREE.Mesh(new THREE.CylinderGeometry(0.012, 0.018, 0.13, 4), this.leafMaterials[0]);
        stem.position.set(Math.cos(angle) * radius, 0.08, Math.sin(angle) * radius);
        const bloom = new THREE.Mesh(new THREE.IcosahedronGeometry(0.045, 0), this.blossomMaterials[i % this.blossomMaterials.length]);
        bloom.position.set(stem.position.x, 0.16, stem.position.z);
        group.add(stem, bloom);
      }
      const stone = new THREE.Mesh(this.pathStoneGeometry, this.slateMaterial);
      stone.scale.set(1.3, 1, 1.3);
      stone.position.set(0, 0.05, 0);
      group.add(stone);
    } else if (style === 'mosaic') {
      const palette = [this.pathStoneMaterial, this.creamMaterial, this.blossomMaterials[0], this.sunMaterial, this.moonMaterial, this.leafMaterials[1]];
      for (let i = 0; i < 18; i += 1) {
        const tileMesh = new THREE.Mesh(this.pathStoneGeometry, palette[i % palette.length]);
        const angle = (i / 18) * Math.PI * 2;
        const radius = i < 6 ? 0.26 : i < 12 ? 0.47 : 0.69;
        tileMesh.scale.set(0.75, 0.55, 0.75);
        tileMesh.position.set(Math.cos(angle) * radius, 0.056, Math.sin(angle) * radius);
        tileMesh.rotation.y = -angle;
        group.add(tileMesh);
      }
    } else {
      const count = style === 'gravel' ? 18 : style === 'cobble' ? 12 : style === 'plaza' ? 14 : 4 + Math.floor(random() * 3);
      for (let i = 0; i < count; i += 1) {
        const stone = new THREE.Mesh(this.pathStoneGeometry, style === 'cobble' ? (i % 3 ? this.slateMaterial : this.pathStoneMaterial) : this.pathStoneMaterial);
        const angle = random() * Math.PI * 2;
        const radius = style === 'gravel' ? 0.12 + random() * 0.7 : 0.16 + random() * 0.52;
        stone.position.set(Math.cos(angle) * radius, style === 'gravel' ? 0.04 : 0.045, Math.sin(angle) * radius);
        stone.scale.setScalar(style === 'gravel' ? 0.48 : style === 'plaza' ? 1.15 : 1);
        stone.rotation.y = style === 'plaza' ? -angle : random() * Math.PI;
        stone.rotation.x = (random() - 0.5) * 0.12;
        stone.castShadow = true;
        group.add(stone);
      }
      if (style === 'plaza') {
        const ring = new THREE.Mesh(this.crystalRingGeometry, this.copperMaterial);
        ring.rotation.x = Math.PI / 2;
        ring.position.y = 0.06;
        ring.scale.setScalar(1.45);
        group.add(ring);
      }
    }
    group.userData.kind = 'path';
    group.userData.style = style;
    return group;
  }

  createHome(tile) {
    const group = new THREE.Group();
    const random = mulberry32(Math.floor(hash2(tile.q + 3, tile.r + 31) * 100000));
    group.rotation.y = Math.floor(random() * 4) * (Math.PI / 2) + 0.16;

    const floor = new THREE.Mesh(new THREE.CylinderGeometry(0.72, 0.74, 0.055, 6), this.plasterMaterials[0]);
    floor.position.y = 0.03;
    floor.receiveShadow = true;
    group.add(floor);

    const rug = new THREE.Mesh(this.beamGeometry, this.rugMaterial);
    rug.scale.set(0.42, 0.015, 0.3);
    rug.position.set(0.05, 0.063, 0.04);
    rug.receiveShadow = true;
    group.add(rug);

    const plaster = this.plasterMaterials[Math.floor(random() * this.plasterMaterials.length)];
    const addBox = (material, sx, sy, sz, x, y, z) => {
      const mesh = new THREE.Mesh(this.beamGeometry, material);
      mesh.scale.set(sx, sy, sz);
      mesh.position.set(x, y, z);
      mesh.castShadow = true;
      mesh.receiveShadow = true;
      group.add(mesh);
      return mesh;
    };

    addBox(plaster, 1.08, 0.56, 0.075, 0, 0.34, -0.44);
    addBox(plaster, 0.075, 0.56, 0.76, -0.5, 0.34, 0);
    addBox(plaster, 0.075, 0.56, 0.76, 0.5, 0.34, 0);
    addBox(plaster, 0.34, 0.56, 0.075, -0.38, 0.34, 0.44);
    addBox(plaster, 0.34, 0.56, 0.075, 0.38, 0.34, 0.44);
    addBox(this.timberMaterial, 0.16, 0.17, 0.085, 0.38, 0.61, 0.44);
    addBox(plaster, 1.16, 0.08, 0.1, 0, 0.65, -0.44);

    for (const x of [-0.54, 0.54]) {
      for (const z of [-0.47, 0.47]) {
        addBox(this.timberMaterial, 0.07, 0.78, 0.07, x, 0.42, z);
      }
    }
    addBox(this.timberMaterial, 1.14, 0.07, 0.07, 0, 0.79, -0.47);
    addBox(this.timberMaterial, 1.14, 0.07, 0.07, 0, 0.79, 0.47);
    addBox(this.timberMaterial, 0.07, 0.07, 0.99, -0.54, 0.79, 0);
    addBox(this.timberMaterial, 0.07, 0.07, 0.99, 0.54, 0.79, 0);

    const pane = addBox(this.warmGlowMaterial, 0.24, 0.2, 0.03, -0.27, 0.45, -0.485);
    pane.castShadow = false;

    const bed = addBox(this.timberMaterial, 0.3, 0.08, 0.5, -0.23, 0.15, -0.17);
    bed.castShadow = true;
    addBox(this.rugMaterial, 0.27, 0.055, 0.42, -0.23, 0.205, -0.17);
    addBox(this.plasterMaterials[0], 0.24, 0.06, 0.12, -0.23, 0.245, -0.33);
    addBox(this.timberMaterial, 0.26, 0.04, 0.26, 0.24, 0.28, 0.17);
    addBox(this.timberMaterial, 0.05, 0.24, 0.05, 0.24, 0.16, 0.17);
    const pot = new THREE.Mesh(new THREE.CylinderGeometry(0.07, 0.055, 0.11, 6), this.roofMaterials[0]);
    pot.position.set(0.34, 0.11, 0.08);
    group.add(pot);
    const leaf = new THREE.Mesh(new THREE.IcosahedronGeometry(0.1, 0), this.leafMaterials[0]);
    leaf.position.set(0.34, 0.21, 0.08);
    leaf.castShadow = true;
    group.add(leaf);

    const chimney = addBox(this.rockMaterial, 0.14, 0.34, 0.14, -0.37, 0.62, -0.31);

    group.userData.kind = 'home';
    group.userData.door = new THREE.Vector3(0, 0, 0.75);
    group.userData.chimney = chimney;
    return group;
  }

  createShop(tile) {
    const group = new THREE.Group();
    const random = mulberry32(Math.floor(hash2(tile.q + 27, tile.r + 11) * 100000));
    group.rotation.y = Math.floor(random() * 4) * (Math.PI / 2) + 0.08;

    const floor = new THREE.Mesh(new THREE.CylinderGeometry(0.74, 0.76, 0.05, 6), this.pathMaterial);
    floor.position.y = 0.028;
    floor.receiveShadow = true;
    group.add(floor);

    const addBox = (material, sx, sy, sz, x, y, z) => {
      const mesh = new THREE.Mesh(this.beamGeometry, material);
      mesh.scale.set(sx, sy, sz);
      mesh.position.set(x, y, z);
      mesh.castShadow = true;
      mesh.receiveShadow = true;
      group.add(mesh);
      return mesh;
    };

    for (const x of [-0.46, 0.46]) {
      for (const z of [-0.39, 0.39]) addBox(this.timberMaterial, 0.06, 0.86, 0.06, x, 0.46, z);
    }
    addBox(this.counterMaterial, 1.04, 0.16, 0.32, 0, 0.31, 0.3);
    addBox(this.timberMaterial, 0.96, 0.28, 0.08, 0, 0.16, 0.3);

    const awningCount = 7;
    for (let i = 0; i < awningCount; i += 1) {
      const material = this.awningMaterials[i % this.awningMaterials.length];
      const panel = addBox(material, 1.08 / awningCount, 0.045, 0.78, -0.54 + (i + 0.5) * (1.08 / awningCount), 0.88, 0);
      panel.rotation.z = (i - (awningCount - 1) / 2) * 0.018;
    }
    addBox(this.timberMaterial, 0.04, 0.045, 0.8, 0, 0.91, 0);

    for (let i = 0; i < 4; i += 1) {
      const basket = new THREE.Mesh(new THREE.CylinderGeometry(0.1, 0.075, 0.09, 7), this.counterMaterial);
      basket.position.set(-0.34 + i * 0.22, 0.43, 0.3);
      basket.castShadow = true;
      group.add(basket);
      for (let j = 0; j < 3; j += 1) {
        const produce = new THREE.Mesh(new THREE.IcosahedronGeometry(0.045, 0), this.produceMaterials[(i + j) % this.produceMaterials.length]);
        produce.position.set(basket.position.x + (random() - 0.5) * 0.08, 0.49 + random() * 0.025, 0.3 + (random() - 0.5) * 0.08);
        group.add(produce);
      }
    }

    const crate = addBox(this.timberMaterial, 0.24, 0.2, 0.24, -0.35, 0.12, 0.28);
    crate.rotation.y = 0.16;
    const sign = addBox(this.plasterMaterials[0], 0.34, 0.22, 0.04, 0.34, 0.63, -0.38);
    sign.rotation.z = -0.04;
    addBox(this.timberMaterial, 0.04, 0.55, 0.04, 0.34, 0.33, -0.38);
    addBox(this.warmGlowMaterial, 0.1, 0.1, 0.028, 0.34, 0.63, -0.35);

    group.userData.kind = 'shop';
    return group;
  }

  createStyledBuilding(tile, style, kind = 'home') {
    const config = BUILDING_STYLES[style] || BUILDING_STYLES.cabin;
    const group = new THREE.Group();
    const random = mulberry32(Math.floor(hash2(tile.q + 41, tile.r + 13) * 100000) + style.length * 37);
    group.rotation.y = Math.floor(random() * 4) * (Math.PI / 2) + 0.12;
    const baseY = config.elevated || 0;
    const wallMaterial = config.wall === 2 ? this.slateMaterial : this.plasterMaterials[config.wall % this.plasterMaterials.length];
    const roofMaterial = config.glass ? this.glassMaterial : config.roof === 2 ? this.slateMaterial : this.roofMaterials[config.roof % this.roofMaterials.length];
    const floor = new THREE.Mesh(new THREE.CylinderGeometry(0.72, 0.74, 0.055, 6), config.wall === 2 ? this.pathStoneMaterial : this.plasterMaterials[0]);
    floor.position.y = baseY + 0.03;
    floor.receiveShadow = true;
    group.add(floor);

    const addBox = (material, sx, sy, sz, x, y, z) => {
      const mesh = new THREE.Mesh(this.beamGeometry, material);
      mesh.scale.set(sx, sy, sz);
      mesh.position.set(x, baseY + y, z);
      mesh.castShadow = true;
      mesh.receiveShadow = true;
      group.add(mesh);
      return mesh;
    };
    const addCylinder = (material, radiusTop, radiusBottom, height, x, y, z, segments = 8) => {
      const mesh = new THREE.Mesh(new THREE.CylinderGeometry(radiusTop, radiusBottom, height, segments), material);
      mesh.position.set(x, baseY + y, z);
      mesh.castShadow = true;
      mesh.receiveShadow = true;
      group.add(mesh);
      return mesh;
    };
    const addGlow = (color, scale, x, y, z, opacity = 0.42) => {
      const glow = new THREE.Sprite(new THREE.SpriteMaterial({
        map: this.glowTexture,
        color,
        transparent: true,
        opacity,
        depthWrite: false,
        blending: THREE.AdditiveBlending,
      }));
      glow.position.set(x, baseY + y, z);
      glow.scale.setScalar(scale);
      group.add(glow);
      return glow;
    };

    if (baseY > 0) {
      for (const [x, z] of [[-0.48, -0.4], [0.48, -0.4], [-0.48, 0.4], [0.48, 0.4]]) {
        addBox(this.timberMaterial, 0.07, baseY + 0.2, 0.07, x, baseY * 0.5, z);
      }
      addBox(this.paleWoodMaterial, 0.08, 0.06, 0.55, 0.28, 0.17, 0.72);
    }

    const w = config.w;
    const d = config.d;
    const wallH = config.wallH;
    addBox(wallMaterial, w, wallH, 0.075, 0, wallH * 0.5 + 0.06, -d * 0.5);
    addBox(wallMaterial, 0.075, wallH, d, -w * 0.5, wallH * 0.5 + 0.06, 0);
    addBox(wallMaterial, 0.075, wallH, d, w * 0.5, wallH * 0.5 + 0.06, 0);
    addBox(wallMaterial, w * 0.34, wallH, 0.075, -w * 0.33, wallH * 0.5 + 0.06, d * 0.5);
    addBox(wallMaterial, w * 0.34, wallH, 0.075, w * 0.33, wallH * 0.5 + 0.06, d * 0.5);
    addBox(this.timberMaterial, 0.16, 0.18, 0.08, 0, 0.64, d * 0.5);

    for (const x of [-w * 0.5, w * 0.5]) {
      for (const z of [-d * 0.5, d * 0.5]) addBox(this.timberMaterial, 0.065, wallH + 0.18, 0.065, x, wallH * 0.5 + 0.09, z);
    }
    addBox(this.timberMaterial, w + 0.06, 0.065, 0.065, 0, wallH + 0.08, -d * 0.5);
    addBox(this.timberMaterial, w + 0.06, 0.065, 0.065, 0, wallH + 0.08, d * 0.5);
    addBox(this.timberMaterial, 0.065, 0.065, d + 0.06, -w * 0.5, wallH + 0.08, 0);
    addBox(this.timberMaterial, 0.065, 0.065, d + 0.06, w * 0.5, wallH + 0.08, 0);

    const pane = addBox(this.warmGlowMaterial, 0.22, 0.18, 0.03, -w * 0.25, 0.42, -d * 0.5 - 0.045);
    pane.castShadow = false;
    const door = addBox(this.darkWoodMaterial, w * 0.2, wallH * 0.8, 0.04, 0, wallH * 0.4 + 0.07, d * 0.5 + 0.045);
    door.castShadow = false;

    const roofY = wallH + (config.roofMode === 'cone' ? 0.08 : 0.12);
    if (config.roofMode === 'gable') {
      for (const side of [-1, 1]) {
        const panel = addBox(roofMaterial, w * 0.63, 0.055, d + 0.16, side * w * 0.22, roofY + 0.11, 0);
        panel.rotation.z = side * (config.ridge ? 0.45 : 0.58);
        panel.castShadow = true;
      }
      if (config.ridge) addBox(this.timberMaterial, 0.055, 0.06, d + 0.2, 0, roofY + 0.3, 0);
    } else if (config.roofMode === 'cone') {
      const roof = new THREE.Mesh(new THREE.ConeGeometry(Math.max(w, d) * 0.66, config.glass ? 0.42 : 0.62, 8), roofMaterial);
      roof.position.y = baseY + roofY + 0.18;
      roof.castShadow = true;
      roof.receiveShadow = true;
      group.add(roof);
    } else if (config.roofMode === 'dome') {
      const dome = new THREE.Mesh(new THREE.SphereGeometry(Math.max(w, d) * 0.54, 12, 8, 0, Math.PI * 2, 0, Math.PI / 2), roofMaterial);
      dome.position.y = baseY + roofY + 0.03;
      dome.castShadow = true;
      group.add(dome);
      addGlow(0xb8d8ff, 0.72, 0, roofY + 0.62, 0, 0.34);
    } else {
      addBox(roofMaterial, w + 0.12, 0.055, d + 0.12, 0, roofY + 0.03, 0);
      if (config.glass) {
        for (let i = 0; i < 4; i += 1) addBox(this.glassMaterial, w * 0.2, 0.04, d * 0.8, -w * 0.3 + i * w * 0.2, roofY + 0.09, 0);
      }
    }

    if (config.chimney) {
      const chimney = addBox(config.forge ? this.slateMaterial : this.rockMaterial, 0.14, roofY * 0.75, 0.14, -w * 0.32, roofY * 0.54, -d * 0.3);
      chimney.castShadow = true;
      if (config.forge) addGlow(0xff8a3d, 0.5, -w * 0.32, roofY * 0.92, -d * 0.3, 0.45);
    }
    if (config.porch) {
      addBox(this.paleWoodMaterial, w + 0.16, 0.045, 0.28, 0, 0.06, d * 0.5 + 0.16);
      for (const x of [-w * 0.42, w * 0.42]) addBox(this.timberMaterial, 0.055, 0.42, 0.055, x, 0.26, d * 0.5 + 0.26);
      addBox(this.timberMaterial, w * 0.9, 0.045, 0.065, 0, 0.48, d * 0.5 + 0.26);
    }
    if (config.columns) {
      for (const x of [-w * 0.36, w * 0.36]) addCylinder(this.creamMaterial, 0.04, 0.05, wallH + 0.2, x, wallH * 0.54, d * 0.5 + 0.13, 6);
    }
    if (config.banners) {
      for (const x of [-w * 0.55, w * 0.55]) {
        addBox(this.timberMaterial, 0.035, wallH + 0.54, 0.035, x, wallH * 0.5 + 0.2, d * 0.5 + 0.05);
        const banner = addBox(this.bannerMaterials[x < 0 ? 0 : 1], 0.18, 0.34, 0.02, x + (x < 0 ? 0.1 : -0.1), wallH + 0.2, d * 0.5 + 0.05);
        banner.castShadow = false;
      }
    }
    if (config.awning) {
      for (let i = 0; i < 5; i += 1) {
        const panel = addBox(this.awningMaterials[i % this.awningMaterials.length], 0.17, 0.04, 0.32, -w * 0.34 + i * 0.17, wallH - 0.02, d * 0.5 + 0.19);
        panel.rotation.x = -0.22;
      }
    }
    if (config.sign) {
      addBox(this.timberMaterial, 0.035, 0.48, 0.035, w * 0.44, 0.27, d * 0.5 + 0.16);
      addBox(this.plasterMaterials[0], 0.28, 0.18, 0.035, w * 0.44, 0.56, d * 0.5 + 0.16);
      addBox(this.warmGlowMaterial, 0.08, 0.08, 0.025, w * 0.44, 0.56, d * 0.5 + 0.19);
    }
    if (config.books) {
      for (let i = 0; i < 3; i += 1) {
        addBox(this.timberMaterial, 0.06, 0.3, 0.52, -w * 0.31 + i * 0.07, 0.24, -d * 0.28);
        const bookColors = [this.blossomMaterials[0], this.sunMaterial, this.leafMaterials[1], this.moonMaterial];
        for (let j = 0; j < 4; j += 1) addBox(bookColors[j], 0.05, 0.045, 0.1, -w * 0.31 + i * 0.07, 0.14 + j * 0.05, -d * 0.36);
      }
    }
    if (config.plants) {
      for (let i = 0; i < 4; i += 1) {
        const angle = i * 1.7 + random();
        const x = Math.cos(angle) * (w * 0.32);
        const z = Math.sin(angle) * (d * 0.28);
        addCylinder(this.roofMaterials[0], 0.045, 0.055, 0.1, x, 0.09, z, 6);
        const leaf = new THREE.Mesh(this.treeCanopyGeometry, this.blossomMaterials[i % this.blossomMaterials.length]);
        leaf.scale.setScalar(0.07);
        leaf.position.set(x, baseY + 0.17, z);
        group.add(leaf);
      }
    }
    if (config.pool) {
      addCylinder(this.slateMaterial, 0.26, 0.28, 0.08, 0, 0.06, 0.1, 8);
      const water = new THREE.Mesh(new THREE.CylinderGeometry(0.2, 0.2, 0.02, 8), this.topMaterials.water[1]);
      water.position.set(0, baseY + 0.11, 0.1);
      group.add(water);
      addGlow(0x9fe9e5, 0.34, 0, 0.2, 0.1, 0.26);
    }
    if (config.telescope) {
      const tube = addCylinder(this.copperMaterial, 0.035, 0.055, 0.48, 0.12, 0.62, 0.08, 6);
      tube.rotation.z = -0.82;
      tube.rotation.x = 0.22;
      addBox(this.timberMaterial, 0.05, 0.28, 0.05, 0.06, 0.3, 0.04);
    }
    if (config.lantern) {
      addBox(this.warmGlowMaterial, 0.17, 0.2, 0.17, 0, roofY + 0.52, 0);
      addGlow(0xffc76c, 0.95, 0, roofY + 0.52, 0, 0.56);
    }
    if (config.stripes) {
      for (let i = 0; i < 3; i += 1) {
        const band = addCylinder(this.awningMaterials[1], w * 0.56, w * 0.56, 0.1, 0, 0.3 + i * 0.34, 0, 8);
        band.scale.x = 0.98;
      }
    }
    if (config.forge) {
      addBox(this.slateMaterial, 0.22, 0.12, 0.14, 0.25, 0.17, 0.2);
      addBox(this.warmGlowMaterial, 0.12, 0.07, 0.1, 0.25, 0.25, 0.2);
      addGlow(0xff8d42, 0.38, 0.25, 0.25, 0.2, 0.4);
    }
    if (config.elevated) {
      addBox(this.timberMaterial, 0.06, 0.045, 0.62, 0.28, -0.21, 0.74);
      for (let i = 0; i < 3; i += 1) addBox(this.timberMaterial, 0.35, 0.035, 0.2, 0.28, -0.15 + i * -0.1, 0.74);
    }

    if (kind === 'shop') {
      addBox(this.counterMaterial, w * 0.62, 0.15, 0.26, 0, 0.28, 0.12);
      for (let i = 0; i < 3; i += 1) {
        const basket = new THREE.Mesh(new THREE.CylinderGeometry(0.08, 0.06, 0.08, 6), this.counterMaterial);
        basket.position.set(-0.2 + i * 0.2, baseY + 0.4, 0.12);
        group.add(basket);
      }
    } else {
      addBox(this.timberMaterial, 0.28, 0.08, 0.4, -w * 0.23, 0.15, -d * 0.16);
      addBox(this.rugMaterial, 0.25, 0.045, 0.34, -w * 0.23, 0.2, -d * 0.16);
      addBox(this.timberMaterial, 0.2, 0.05, 0.2, w * 0.22, 0.27, d * 0.12);
      addBox(this.timberMaterial, 0.04, 0.23, 0.04, w * 0.22, 0.16, d * 0.12);
    }

    group.userData.kind = kind;
    group.userData.style = style;
    group.userData.door = new THREE.Vector3(0, 0, d * 0.5 + 0.2);
    return group;
  }

  createWaterFeature(tile, style = 'pool') {
    const group = new THREE.Group();
    const random = mulberry32(Math.floor(hash2(tile.q + 17, tile.r + 37) * 100000) + style.length * 43);
    const addRing = (material, scale, y = 0.02) => {
      const ring = new THREE.Mesh(this.crystalRingGeometry, material);
      ring.rotation.x = Math.PI / 2;
      ring.position.y = y;
      ring.scale.setScalar(scale);
      group.add(ring);
      return ring;
    };
    const addStone = (material, radius, height, angle, distance, y) => {
      const stone = new THREE.Mesh(this.rockGeometry, material);
      stone.scale.set(radius, height, radius * 0.9);
      stone.position.set(Math.cos(angle) * distance, y, Math.sin(angle) * distance);
      stone.rotation.set(random() * Math.PI, random() * Math.PI, random() * Math.PI);
      stone.castShadow = true;
      group.add(stone);
    };
    const addGlow = (color, scale, y, opacity = 0.4) => {
      const glow = new THREE.Sprite(new THREE.SpriteMaterial({
        map: this.glowTexture,
        color,
        transparent: true,
        opacity,
        depthWrite: false,
        blending: THREE.AdditiveBlending,
      }));
      glow.position.y = y;
      glow.scale.setScalar(scale);
      group.add(glow);
    };

    if (style === 'pond') {
      for (let i = 0; i < 5; i += 1) {
        const pad = new THREE.Mesh(new THREE.CylinderGeometry(0.09 + random() * 0.05, 0.09 + random() * 0.05, 0.012, 7), this.leafMaterials[i % this.leafMaterials.length]);
        const angle = random() * Math.PI * 2;
        const radius = random() * 0.48;
        pad.position.set(Math.cos(angle) * radius, 0.045, Math.sin(angle) * radius);
        pad.rotation.y = random() * Math.PI;
        group.add(pad);
      }
      for (let i = 0; i < 6; i += 1) {
        const angle = random() * Math.PI * 2;
        const radius = 0.58 + random() * 0.12;
        const stem = new THREE.Mesh(new THREE.CylinderGeometry(0.012, 0.018, 0.34, 4), this.leafMaterials[2]);
        stem.position.set(Math.cos(angle) * radius, 0.17, Math.sin(angle) * radius);
        stem.rotation.z = (random() - 0.5) * 0.16;
        group.add(stem);
        const tip = new THREE.Mesh(new THREE.CylinderGeometry(0.025, 0.02, 0.12, 5), this.darkWoodMaterial);
        tip.position.set(stem.position.x, 0.37, stem.position.z);
        group.add(tip);
      }
    } else if (style === 'stream') {
      for (let i = 0; i < 6; i += 1) {
        const angle = (i / 6) * Math.PI * 2;
        const stone = new THREE.Mesh(this.rockGeometry, i % 2 ? this.rockMaterial : this.pathStoneMaterial);
        stone.scale.set(0.12, 0.045, 0.16);
        stone.position.set(Math.cos(angle) * 0.5, 0.05, Math.sin(angle) * 0.5);
        stone.rotation.y = -angle;
        group.add(stone);
      }
      for (let i = 0; i < 4; i += 1) addStone(this.rockMaterial, 0.09, 0.06, random() * Math.PI * 2, 0.7, 0.025);
    } else if (style === 'lagoon') {
      addRing(this.leafMaterials[1], 0.7, 0.025);
      for (let i = 0; i < 5; i += 1) {
        const angle = (i / 5) * Math.PI * 2 + 0.3;
        const coral = new THREE.Mesh(new THREE.CylinderGeometry(0.02, 0.035, 0.24 + random() * 0.2, 5), this.blossomMaterials[i % this.blossomMaterials.length]);
        coral.position.set(Math.cos(angle) * 0.52, 0.12, Math.sin(angle) * 0.52);
        coral.rotation.z = (random() - 0.5) * 0.45;
        group.add(coral);
      }
      for (let i = 0; i < 4; i += 1) addStone(this.rockMaterial, 0.11, 0.05, random() * Math.PI * 2, 0.68, 0.02);
    } else if (style === 'tidepool') {
      for (let i = 0; i < 7; i += 1) addStone(i % 2 ? this.rockMaterial : this.rockDarkMaterial, 0.1 + random() * 0.08, 0.07 + random() * 0.09, (i / 7) * Math.PI * 2, 0.46 + random() * 0.25, 0.02);
      for (let i = 0; i < 3; i += 1) {
        const star = new THREE.Group();
        for (let j = 0; j < 5; j += 1) {
          const arm = new THREE.Mesh(this.pathStoneGeometry, this.produceMaterials[0]);
          arm.scale.set(0.07, 0.012, 0.15);
          arm.position.set(Math.cos((j / 5) * Math.PI * 2) * 0.07, 0, Math.sin((j / 5) * Math.PI * 2) * 0.07);
          arm.rotation.y = -(j / 5) * Math.PI * 2;
          star.add(arm);
        }
        star.position.set((random() - 0.5) * 0.5, 0.045, (random() - 0.5) * 0.5);
        group.add(star);
      }
    } else if (style === 'cascade') {
      for (let i = 0; i < 3; i += 1) {
        const stone = new THREE.Mesh(new THREE.CylinderGeometry(0.42 - i * 0.09, 0.48 - i * 0.09, 0.08, 6), i % 2 ? this.rockMaterial : this.slateMaterial);
        stone.rotation.y = Math.PI / 6;
        stone.position.set(0.1 - i * 0.05, 0.04 + i * 0.07, -0.18 + i * 0.16);
        stone.castShadow = true;
        group.add(stone);
      }
      const fall = new THREE.Mesh(new THREE.CylinderGeometry(0.018, 0.04, 0.32, 6), this.waterGlowMaterial);
      fall.position.set(0.18, 0.24, 0.12);
      group.add(fall);
      addGlow(0xc4f8ef, 0.5, 0.27, 0.3);
    } else if (style === 'moonwell') {
      addRing(this.slateMaterial, 0.7, 0.025);
      const water = new THREE.Mesh(new THREE.CylinderGeometry(0.5, 0.5, 0.02, 12), this.topMaterials.water[2]);
      water.position.y = 0.04;
      group.add(water);
      const orb = new THREE.Mesh(this.coreGeometry, this.moonMaterial);
      orb.position.y = 0.35;
      orb.scale.setScalar(0.72);
      group.add(orb);
      addGlow(0xbfd9ff, 1.2, 0.35, 0.52);
      for (let i = 0; i < 4; i += 1) addStone(this.rockMaterial, 0.1, 0.16, (i / 4) * Math.PI * 2, 0.62, 0.07);
    } else if (style === 'spring') {
      for (let i = 0; i < 5; i += 1) addStone(i % 2 ? this.rockMaterial : this.pathStoneMaterial, 0.1, 0.09, (i / 5) * Math.PI * 2, 0.54, 0.045);
      const jet = new THREE.Mesh(new THREE.CylinderGeometry(0.025, 0.055, 0.32, 6), this.waterGlowMaterial);
      jet.position.y = 0.18;
      group.add(jet);
      addGlow(0xc7fff3, 0.75, 0.22, 0.38);
    } else {
      addRing(this.leafMaterials[1], 0.68, 0.025);
      for (let i = 0; i < 4; i += 1) {
        const pad = new THREE.Mesh(new THREE.CylinderGeometry(0.08, 0.08, 0.01, 6), this.leafMaterials[i % this.leafMaterials.length]);
        pad.position.set((random() - 0.5) * 0.6, 0.04, (random() - 0.5) * 0.6);
        group.add(pad);
      }
    }

    group.userData.kind = 'water';
    group.userData.style = style;
    return group;
  }

  createMagicDecor(tile, style = 'moonstone', level = 1) {
    const group = new THREE.Group();
    const random = mulberry32(Math.floor(hash2(tile.q + 29, tile.r + 7) * 100000) + style.length * 53);
    const addGlow = (color, scale, y, opacity = 0.45) => {
      const glow = new THREE.Sprite(new THREE.SpriteMaterial({
        map: this.glowTexture,
        color,
        transparent: true,
        opacity,
        depthWrite: false,
        blending: THREE.AdditiveBlending,
      }));
      glow.position.y = y;
      glow.scale.setScalar(scale);
      group.add(glow);
      return glow;
    };
    const addShard = (material, height, angle, radius, tilt = 0.18) => {
      const shard = new THREE.Mesh(this.crystalGeometry, material);
      shard.scale.set(0.16 + random() * 0.08, height, 0.16 + random() * 0.08);
      shard.position.set(Math.cos(angle) * radius, height * 0.5 + 0.03, Math.sin(angle) * radius);
      shard.rotation.set((random() - 0.5) * tilt, random() * Math.PI, (random() - 0.5) * tilt);
      shard.castShadow = true;
      group.add(shard);
      return shard;
    };

    if (style === 'wisp') {
      const core = new THREE.Mesh(this.coreGeometry, this.sunMaterial);
      core.position.y = 0.55;
      core.scale.setScalar(0.9);
      group.add(core);
      const ring = new THREE.Mesh(this.crystalRingGeometry, this.moonMaterial);
      ring.rotation.x = Math.PI / 2.4;
      ring.position.y = 0.55;
      ring.scale.setScalar(1.05);
      group.add(ring);
      addGlow(0xffefbd, 1.45, 0.58, 0.55);
      for (let i = 0; i < 5; i += 1) {
        const mote = new THREE.Mesh(this.coreGeometry, this.fruitMaterial);
        mote.scale.setScalar(0.16);
        mote.position.set(Math.cos(i * 1.5) * 0.36, 0.44 + i * 0.06, Math.sin(i * 1.5) * 0.36);
        group.add(mote);
      }
      group.userData.orbit = ring;
    } else if (style === 'portal') {
      const ring = new THREE.Mesh(new THREE.TorusGeometry(0.48, 0.06, 6, 24), this.moonMaterial);
      ring.position.y = 0.62;
      group.add(ring);
      const inner = new THREE.Mesh(new THREE.CylinderGeometry(0.4, 0.4, 0.015, 20), this.glassMaterial);
      inner.rotation.x = Math.PI / 2;
      inner.position.y = 0.62;
      group.add(inner);
      const base = new THREE.Mesh(this.slateMaterial, this.crystalRingGeometry);
      base.rotation.x = Math.PI / 2;
      base.position.y = 0.02;
      base.scale.setScalar(0.86);
      group.add(base);
      for (let i = 0; i < 3; i += 1) {
        const stone = new THREE.Mesh(this.rockGeometry, this.rockDarkMaterial);
        stone.scale.set(0.11, 0.24, 0.1);
        stone.position.set(Math.cos((i / 3) * Math.PI * 2) * 0.56, 0.11, Math.sin((i / 3) * Math.PI * 2) * 0.56);
        group.add(stone);
      }
      addGlow(0xa9f0ff, 1.35, 0.62, 0.48);
      group.userData.orbit = ring;
    } else if (style === 'glowcap') {
      for (let i = 0; i < 6; i += 1) {
        const angle = (i / 6) * Math.PI * 2 + random() * 0.4;
        const radius = i === 0 ? 0 : 0.2 + random() * 0.34;
        const height = 0.15 + random() * 0.18;
        const stem = new THREE.Mesh(new THREE.CylinderGeometry(0.018, 0.026, height, 5), this.creamMaterial);
        stem.position.set(Math.cos(angle) * radius, height * 0.5 + 0.03, Math.sin(angle) * radius);
        group.add(stem);
        const cap = new THREE.Mesh(new THREE.SphereGeometry(0.09 + random() * 0.04, 7, 4, 0, Math.PI * 2, 0, Math.PI / 2), this.moonMaterial);
        cap.position.set(stem.position.x, height + 0.03, stem.position.z);
        cap.scale.y = 0.7;
        group.add(cap);
      }
      addGlow(0x9de8da, 0.85, 0.22, 0.42);
    } else if (style === 'rune') {
      for (let i = 0; i < 3; i += 1) {
        const stone = new THREE.Mesh(this.beamGeometry, i === 0 ? this.slateMaterial : this.rockDarkMaterial);
        const height = i === 0 ? 0.9 : 0.44 + random() * 0.2;
        stone.scale.set(i === 0 ? 0.26 : 0.13, height, i === 0 ? 0.13 : 0.11);
        stone.position.set(Math.cos((i / 3) * Math.PI * 2 + 0.4) * (i === 0 ? 0 : 0.34), height * 0.5 + 0.03, Math.sin((i / 3) * Math.PI * 2 + 0.4) * (i === 0 ? 0 : 0.34));
        stone.rotation.y = random() * 0.4;
        stone.castShadow = true;
        group.add(stone);
        if (i === 0) {
          const rune = new THREE.Mesh(this.beamGeometry, this.moonMaterial);
          rune.scale.set(0.08, 0.42, 0.015);
          rune.position.set(0, 0.5, 0.075);
          rune.rotation.z = 0.6;
          group.add(rune);
          const rune2 = rune.clone();
          rune2.rotation.z = -0.6;
          rune2.position.y = 0.42;
          group.add(rune2);
        }
      }
      addGlow(0xa8dfff, 0.7, 0.5, 0.4);
    } else if (style === 'sunshard') {
      const ring = new THREE.Mesh(this.crystalRingGeometry, this.sunMaterial);
      ring.rotation.x = Math.PI / 2;
      ring.position.y = 0.02;
      ring.scale.setScalar(0.95);
      group.add(ring);
      for (let i = 0; i < 5 + level; i += 1) addShard(this.sunMaterial, 0.55 + random() * 0.4, (i / (5 + level)) * Math.PI * 2, i === 0 ? 0 : 0.22 + random() * 0.16, 0.5);
      addGlow(0xffcf76, 1.25, 0.42, 0.52);
    } else if (style === 'starfall') {
      addShard(this.moonMaterial, 0.95, 0, 0, 0.12);
      addShard(this.sunMaterial, 0.46, 2.1, 0.24, 0.4);
      addShard(this.crystalMaterials[1], 0.52, 4.2, 0.2, 0.4);
      for (let i = 0; i < 6; i += 1) {
        const mote = new THREE.Mesh(this.coreGeometry, this.sunMaterial);
        mote.scale.setScalar(0.12);
        mote.position.set(Math.cos(i * 1.7) * 0.4, 0.3 + random() * 0.4, Math.sin(i * 1.7) * 0.4);
        group.add(mote);
      }
      addGlow(0xffe2a4, 1.4, 0.6, 0.55);
    } else {
      const ring = new THREE.Mesh(this.crystalRingGeometry, this.moonMaterial);
      ring.rotation.x = Math.PI / 2;
      ring.position.y = 0.02;
      ring.scale.setScalar(0.85);
      group.add(ring);
      for (let i = 0; i < 4 + level; i += 1) addShard(this.moonMaterial, 0.44 + random() * 0.38, (i / (4 + level)) * Math.PI * 2 + 0.3, i === 0 ? 0 : 0.2 + random() * 0.16, 0.22);
      addGlow(0xbfd9ff, 1.05, 0.36, 0.46);
    }

    group.userData.kind = 'magic';
    group.userData.style = style;
    group.userData.phase = random() * Math.PI * 2;
    group.userData.level = level;
    group.userData.glow = group.children.find((child) => child.isSprite);
    return group;
  }

  createProp(tile, style = 'rock', level = 1) {
    const group = new THREE.Group();
    const random = mulberry32(Math.floor(hash2(tile.q + 53, tile.r + 19) * 100000) + style.length * 67);
    const addBox = (material, sx, sy, sz, x, y, z) => {
      const mesh = new THREE.Mesh(this.beamGeometry, material);
      mesh.scale.set(sx, sy, sz);
      mesh.position.set(x, y, z);
      mesh.castShadow = true;
      mesh.receiveShadow = true;
      group.add(mesh);
      return mesh;
    };
    const addCylinder = (material, rt, rb, h, x, y, z, seg = 6) => {
      const mesh = new THREE.Mesh(new THREE.CylinderGeometry(rt, rb, h, seg), material);
      mesh.position.set(x, y, z);
      mesh.castShadow = true;
      mesh.receiveShadow = true;
      group.add(mesh);
      return mesh;
    };
    const addGlow = (color, scale, x, y, z, opacity = 0.4) => {
      const glow = new THREE.Sprite(new THREE.SpriteMaterial({
        map: this.glowTexture,
        color,
        transparent: true,
        opacity,
        depthWrite: false,
        blending: THREE.AdditiveBlending,
      }));
      glow.position.set(x, y, z);
      glow.scale.setScalar(scale);
      group.add(glow);
      return glow;
    };

    if (style === 'wildflowers') {
      for (let i = 0; i < 9; i += 1) {
        const angle = random() * Math.PI * 2;
        const radius = 0.16 + random() * 0.58;
        const x = Math.cos(angle) * radius;
        const z = Math.sin(angle) * radius;
        const h = 0.12 + random() * 0.2;
        addCylinder(this.leafMaterials[0], 0.011, 0.018, h, x, h * 0.5 + 0.02, z, 4);
        const bloom = new THREE.Mesh(new THREE.IcosahedronGeometry(0.045 + random() * 0.025, 0), [this.blossomMaterials[0], this.sunMaterial, this.creamMaterial, this.produceMaterials[2]][i % 4]);
        bloom.position.set(x, h + 0.02, z);
        group.add(bloom);
      }
    } else if (style === 'rock' || style === 'boulder') {
      const count = style === 'boulder' ? 3 : 1;
      for (let i = 0; i < count; i += 1) {
        const rock = new THREE.Mesh(this.rockGeometry, i % 2 ? this.rockMaterial : this.rockDarkMaterial);
        const scale = style === 'boulder' ? 0.3 + random() * 0.18 : 0.22 + random() * 0.08;
        rock.scale.set(scale * 1.2, scale * 0.78, scale);
        rock.position.set((random() - 0.5) * 0.5, scale * 0.32, (random() - 0.5) * 0.5);
        rock.rotation.set(random() * Math.PI, random() * Math.PI, 0);
        rock.castShadow = true;
        group.add(rock);
      }
    } else if (style === 'log') {
      const log = addCylinder(this.trunkMaterial, 0.1, 0.12, 0.82, 0, 0.13, 0, 7);
      log.rotation.z = Math.PI / 2;
      log.rotation.y = 0.6;
      const cut = addCylinder(this.creamMaterial, 0.095, 0.095, 0.012, 0.4, 0.13, 0.22, 7);
      cut.rotation.z = Math.PI / 2;
      cut.rotation.y = 0.6;
      for (let i = 0; i < 2; i += 1) {
        const mushroom = new THREE.Mesh(new THREE.SphereGeometry(0.045, 6, 4, 0, Math.PI * 2, 0, Math.PI / 2), this.mushroomCapMaterial);
        mushroom.position.set(-0.16 + i * 0.24, 0.23, 0.05 + i * 0.06);
        group.add(mushroom);
      }
    } else if (style === 'mushrooms') {
      for (let i = 0; i < 5 + level; i += 1) {
        const angle = random() * Math.PI * 2;
        const radius = i === 0 ? 0 : 0.14 + random() * 0.44;
        const h = 0.1 + random() * 0.18;
        const x = Math.cos(angle) * radius;
        const z = Math.sin(angle) * radius;
        addCylinder(this.creamMaterial, 0.02, 0.03, h, x, h * 0.5 + 0.02, z, 5);
        const cap = new THREE.Mesh(new THREE.SphereGeometry(0.08 + random() * 0.04, 7, 4, 0, Math.PI * 2, 0, Math.PI / 2), this.mushroomCapMaterial);
        cap.position.set(x, h + 0.02, z);
        cap.scale.y = 0.72;
        group.add(cap);
      }
    } else if (style === 'beehive') {
      addCylinder(this.timberMaterial, 0.03, 0.035, 0.42, -0.2, 0.21, 0, 5);
      addBox(this.timberMaterial, 0.28, 0.04, 0.04, -0.08, 0.4, 0);
      for (let i = 0; i < 3; i += 1) {
        const ring = new THREE.Mesh(new THREE.TorusGeometry(0.12 - i * 0.02, 0.035, 5, 9), this.thatchMaterial);
        ring.rotation.x = Math.PI / 2;
        ring.position.set(0.08, 0.3 + i * 0.065, 0);
        group.add(ring);
      }
      for (let i = 0; i < 3; i += 1) {
        const bee = new THREE.Mesh(this.coreGeometry, this.sunMaterial);
        bee.scale.setScalar(0.055);
        bee.position.set((random() - 0.5) * 0.5, 0.38 + random() * 0.2, (random() - 0.5) * 0.5);
        group.add(bee);
      }
    } else if (style === 'nest') {
      const nest = new THREE.Mesh(new THREE.TorusGeometry(0.22, 0.075, 5, 10), this.darkWoodMaterial);
      nest.rotation.x = Math.PI / 2;
      nest.position.y = 0.11;
      nest.scale.y = 0.6;
      group.add(nest);
      for (let i = 0; i < 3; i += 1) {
        const egg = new THREE.Mesh(new THREE.IcosahedronGeometry(0.055, 1), this.creamMaterial);
        egg.position.set((i - 1) * 0.07, 0.13, (random() - 0.5) * 0.09);
        egg.scale.y = 1.22;
        group.add(egg);
      }
      for (let i = 0; i < 5; i += 1) {
        const twig = addCylinder(this.timberMaterial, 0.008, 0.01, 0.3 + random() * 0.16, (random() - 0.5) * 0.5, 0.08, (random() - 0.5) * 0.5, 4);
        twig.rotation.z = (random() - 0.5) * 1.1;
        twig.rotation.y = random() * Math.PI;
      }
    } else if (style === 'statue') {
      addCylinder(this.pathStoneMaterial, 0.24, 0.28, 0.14, 0, 0.07, 0, 6);
      const body = addCylinder(this.slateMaterial, 0.09, 0.13, 0.42, 0, 0.35, 0, 6);
      body.rotation.z = 0.04;
      const head = new THREE.Mesh(this.residentHeadGeometry, this.slateMaterial);
      head.position.y = 0.6;
      head.scale.setScalar(0.9);
      group.add(head);
      const wing = addBox(this.slateMaterial, 0.06, 0.32, 0.18, -0.12, 0.38, -0.03);
      wing.rotation.z = 0.45;
      const wing2 = addBox(this.slateMaterial, 0.06, 0.32, 0.18, 0.12, 0.38, -0.03);
      wing2.rotation.z = -0.45;
    } else if (style === 'lantern') {
      addCylinder(this.timberMaterial, 0.035, 0.05, 0.72, 0, 0.36, 0, 5);
      addBox(this.timberMaterial, 0.24, 0.045, 0.045, 0.1, 0.72, 0);
      addBox(this.warmGlowMaterial, 0.13, 0.16, 0.13, 0.2, 0.64, 0);
      addBox(this.charcoalMaterial, 0.18, 0.035, 0.18, 0.2, 0.74, 0);
      addGlow(0xffc66d, 0.7, 0.2, 0.64, 0, 0.52);
    } else if (style === 'bonfire') {
      for (let i = 0; i < 5; i += 1) {
        const log = addCylinder(this.darkWoodMaterial, 0.05, 0.065, 0.46, Math.cos((i / 5) * Math.PI * 2) * 0.15, 0.1, Math.sin((i / 5) * Math.PI * 2) * 0.15, 5);
        log.rotation.z = Math.PI / 2.5;
        log.rotation.y = (i / 5) * Math.PI * 2;
      }
      for (let i = 0; i < 3; i += 1) {
        const flame = new THREE.Mesh(new THREE.ConeGeometry(0.1 - i * 0.02, 0.3 + i * 0.12, 6), this.flameMaterial);
        flame.position.set((i - 1) * 0.06, 0.28 + i * 0.06, 0);
        flame.rotation.z = (i - 1) * 0.16;
        group.add(flame);
      }
      addGlow(0xff9a46, 0.95, 0, 0.3, 0, 0.55);
      for (let i = 0; i < 5; i += 1) {
        const stone = new THREE.Mesh(this.rockGeometry, this.rockMaterial);
        stone.scale.setScalar(0.07);
        stone.position.set(Math.cos((i / 5) * Math.PI * 2) * 0.36, 0.04, Math.sin((i / 5) * Math.PI * 2) * 0.36);
        group.add(stone);
      }
    } else if (style === 'banner') {
      addCylinder(this.timberMaterial, 0.025, 0.035, 1.18, 0, 0.59, 0, 5);
      addBox(this.timberMaterial, 0.38, 0.035, 0.035, 0.17, 1.12, 0);
      const flag = addBox(this.bannerMaterials[0], 0.32, 0.34, 0.018, 0.18, 0.94, 0);
      flag.castShadow = false;
      addGlow(0xffdf9f, 0.34, 0.18, 0.9, 0, 0.2);
    } else if (style === 'sculpture') {
      addCylinder(this.pathStoneMaterial, 0.2, 0.24, 0.12, 0, 0.06, 0, 7);
      const pieces = [
        [this.moonMaterial, 0.16, 0.16, 0.16, 0, 0.22, 0],
        [this.sunMaterial, 0.12, 0.12, 0.12, 0.12, 0.35, 0.03],
        [this.blossomMaterials[0], 0.1, 0.18, 0.1, -0.09, 0.42, -0.02],
        [this.crystalMaterials[1], 0.08, 0.08, 0.08, 0.04, 0.54, 0.04],
      ];
      for (const [material, sx, sy, sz, x, y, z] of pieces) {
        const piece = addBox(material, sx, sy, sz, x, y, z);
        piece.rotation.set(random() * 0.5, random() * Math.PI, random() * 0.5);
      }
    } else if (style === 'fountain') {
      addCylinder(this.pathStoneMaterial, 0.48, 0.52, 0.14, 0, 0.08, 0, 8);
      addCylinder(this.slateMaterial, 0.42, 0.44, 0.04, 0, 0.16, 0, 8);
      const water = new THREE.Mesh(new THREE.CylinderGeometry(0.38, 0.38, 0.02, 12), this.topMaterials.water[1]);
      water.position.y = 0.18;
      group.add(water);
      addCylinder(this.creamMaterial, 0.055, 0.08, 0.38, 0, 0.35, 0, 7);
      addCylinder(this.creamMaterial, 0.18, 0.16, 0.04, 0, 0.54, 0, 8);
      const jet = addCylinder(this.waterGlowMaterial, 0.018, 0.035, 0.22, 0, 0.65, 0, 6);
      jet.castShadow = false;
      addGlow(0xb5f8ee, 0.5, 0, 0.6, 0, 0.36);
    } else if (style === 'bench') {
      addBox(this.paleWoodMaterial, 0.72, 0.06, 0.24, 0, 0.24, 0);
      addBox(this.paleWoodMaterial, 0.72, 0.06, 0.1, 0, 0.46, -0.12);
      for (const x of [-0.27, 0.27]) {
        addBox(this.timberMaterial, 0.06, 0.24, 0.28, x, 0.12, 0);
        addBox(this.timberMaterial, 0.06, 0.3, 0.06, x, 0.34, -0.14);
      }
    } else if (style === 'swing') {
      for (const x of [-0.3, 0.3]) addCylinder(this.timberMaterial, 0.035, 0.045, 1.0, x, 0.5, 0, 5);
      addBox(this.timberMaterial, 0.72, 0.045, 0.045, 0, 0.96, 0);
      addBox(this.paleWoodMaterial, 0.32, 0.045, 0.16, 0, 0.32, 0);
      for (const x of [-0.14, 0.14]) addCylinder(this.charcoalMaterial, 0.008, 0.008, 0.62, x, 0.64, 0, 4);
      group.userData.swing = group.children.find((child) => child.material === this.paleWoodMaterial);
    } else if (style === 'kite') {
      addCylinder(this.timberMaterial, 0.018, 0.025, 0.78, 0, 0.39, 0, 4);
      const string = addCylinder(this.creamMaterial, 0.004, 0.004, 0.92, 0.24, 0.98, 0, 3);
      string.rotation.z = -0.55;
      const tail = addCylinder(this.creamMaterial, 0.004, 0.004, 0.4, 0.56, 1.34, 0, 3);
      tail.rotation.z = 0.3;
      const kite = new THREE.Mesh(new THREE.OctahedronGeometry(0.22, 0), this.kiteMaterials[0]);
      kite.scale.set(1, 1.25, 0.08);
      kite.position.set(0.62, 1.48, 0);
      kite.rotation.z = 0.35;
      group.add(kite);
      for (let i = 0; i < 3; i += 1) {
        const ribbon = addBox(this.kiteMaterials[(i + 1) % this.kiteMaterials.length], 0.1, 0.035, 0.01, 0.62 + i * 0.08, 1.32 - i * 0.07, 0.02);
        ribbon.rotation.z = 0.4;
      }
      group.userData.kite = kite;
    }

    group.userData.kind = 'prop';
    group.userData.style = style;
    group.userData.phase = random() * Math.PI * 2;
    group.userData.level = level;
    return group;
  }

  clearWildRock(tile) {
    if (tile.rockMesh) {
      tile.decorGroup.remove(tile.rockMesh);
      tile.rockMesh = null;
    }
    tile.wildRock = false;
  }


  buildPersonModel(palette, explorer = false, role = 'resident') {
    const group = new THREE.Group();
    const body = new THREE.Mesh(this.residentBodyGeometry, palette.coat);
    body.position.y = 0.31;
    body.castShadow = true;
    group.add(body);

    const head = new THREE.Mesh(this.residentHeadGeometry, palette.skin);
    head.position.y = 0.52;
    head.castShadow = true;
    group.add(head);

    const hat = new THREE.Mesh(new THREE.ConeGeometry(0.15, 0.14, 7), palette.hat);
    hat.position.y = 0.62;
    hat.castShadow = true;
    group.add(hat);

    const scarf = new THREE.Mesh(new THREE.CylinderGeometry(0.09, 0.11, 0.05, 7), palette.accent);
    scarf.position.y = 0.435;
    group.add(scarf);

    const limbs = { leftLeg: null, rightLeg: null, leftArm: null, rightArm: null };
    for (const [key, x] of [['leftLeg', -0.062], ['rightLeg', 0.062]]) {
      const pivot = new THREE.Group();
      pivot.position.set(x, 0.22, 0);
      const limb = new THREE.Mesh(this.residentLimbGeometry, palette.hat);
      limb.position.y = -0.09;
      limb.castShadow = true;
      pivot.add(limb);
      group.add(pivot);
      limbs[key] = pivot;
    }
    for (const [key, x] of [['leftArm', -0.13], ['rightArm', 0.13]]) {
      const pivot = new THREE.Group();
      pivot.position.set(x, 0.4, 0);
      const limb = new THREE.Mesh(this.residentLimbGeometry, palette.coat);
      limb.position.y = -0.08;
      limb.rotation.z = key === 'leftArm' ? 0.12 : -0.12;
      limb.castShadow = true;
      pivot.add(limb);
      group.add(pivot);
      limbs[key] = pivot;
    }

    if (role === 'child') group.scale.setScalar(0.78);
    if (role === 'elder') {
      const beard = new THREE.Mesh(new THREE.ConeGeometry(0.075, 0.18, 5), this.creamMaterial);
      beard.position.set(0, 0.43, 0.085);
      beard.rotation.x = Math.PI;
      group.add(beard);
      const staff = new THREE.Mesh(new THREE.CylinderGeometry(0.012, 0.016, 0.56, 4), this.timberMaterial);
      staff.position.set(0.18, 0.27, 0.03);
      staff.rotation.z = -0.08;
      group.add(staff);
    }
    if (role === 'musician') {
      const body = new THREE.Mesh(new THREE.BoxGeometry(0.16, 0.1, 0.07), this.timberMaterial);
      body.position.set(0.16, 0.32, 0.09);
      body.rotation.z = -0.25;
      group.add(body);
      const neck = new THREE.Mesh(new THREE.BoxGeometry(0.025, 0.26, 0.025), this.timberMaterial);
      neck.position.set(0.23, 0.45, 0.09);
      neck.rotation.z = -0.2;
      group.add(neck);
    }
    if (role === 'gardener') {
      const brim = new THREE.Mesh(new THREE.CylinderGeometry(0.17, 0.17, 0.018, 9), this.thatchMaterial);
      brim.position.y = 0.61;
      group.add(brim);
      const hoe = new THREE.Mesh(new THREE.CylinderGeometry(0.01, 0.014, 0.55, 4), this.timberMaterial);
      hoe.position.set(-0.16, 0.3, 0.02);
      hoe.rotation.z = 0.18;
      group.add(hoe);
    }
    if (role === 'fisher') {
      const rod = new THREE.Mesh(new THREE.CylinderGeometry(0.008, 0.012, 0.68, 4), this.darkWoodMaterial);
      rod.position.set(0.17, 0.38, 0.05);
      rod.rotation.z = -0.28;
      group.add(rod);
      const line = new THREE.Mesh(new THREE.CylinderGeometry(0.003, 0.003, 0.3, 3), this.creamMaterial);
      line.position.set(0.28, 0.52, 0.05);
      group.add(line);
    }
    if (role === 'merchant') {
      const pack = new THREE.Mesh(new THREE.BoxGeometry(0.17, 0.2, 0.11), this.counterMaterial);
      pack.position.set(0, 0.31, -0.14);
      pack.castShadow = true;
      group.add(pack);
      const strap = new THREE.Mesh(new THREE.BoxGeometry(0.03, 0.24, 0.16), this.awningMaterials[1]);
      strap.position.set(-0.06, 0.36, -0.02);
      strap.rotation.z = 0.55;
      group.add(strap);
    }
    if (role === 'keeper') {
      const lantern = new THREE.Mesh(new THREE.BoxGeometry(0.1, 0.13, 0.1), this.warmGlowMaterial);
      lantern.position.set(-0.17, 0.26, 0.01);
      group.add(lantern);
      const handle = new THREE.Mesh(new THREE.TorusGeometry(0.045, 0.006, 4, 8, Math.PI), this.charcoalMaterial);
      handle.position.set(-0.17, 0.34, 0.01);
      group.add(handle);
    }

    if (explorer) {
      const pack = new THREE.Mesh(new THREE.BoxGeometry(0.14, 0.19, 0.09), this.timberMaterial);
      pack.position.set(0, 0.32, -0.13);
      pack.castShadow = true;
      group.add(pack);
      const feather = new THREE.Mesh(new THREE.ConeGeometry(0.025, 0.2, 5), this.fruitMaterial);
      feather.position.set(0.06, 0.5, -0.12);
      feather.rotation.z = -0.28;
      group.add(feather);
      group.scale.setScalar(1.1);
    }

    group.userData.limbs = limbs;
    group.userData.role = role;
    return group;
  }

  getRandomLandTile() {
    const options = this.tileList.filter((tile) => tile.type !== TYPE.water && tile.spawnProgress > 0.7);
    if (!options.length) return this.tiles.get(hexKey(0, 0)) || null;
    return options[Math.floor(Math.random() * options.length)];
  }

  pickFolkRole() {
    const folk = this.stats.folk || {};
    const entries = Object.entries(folk).filter(([, count]) => count > 0);
    if (!entries.length) return 'resident';
    const total = entries.reduce((sum, [, count]) => sum + count, 0);
    let roll = Math.random() * total;
    for (const [role, count] of entries) {
      roll -= count;
      if (roll <= 0) return role;
    }
    return entries[0][0];
  }

  spawnResident(tile = null, role = null) {
    const home = tile || this.getRandomLandTile();
    if (!home) return null;
    const residentRole = role || this.pickFolkRole();
    const palette = this.residentPalette[Math.floor(Math.random() * this.residentPalette.length)];
    const group = this.buildPersonModel(palette, false, residentRole);
    const jitter = 0.3;
    group.position.set(
      home.x + (Math.random() - 0.5) * jitter,
      home.currentHeight + 0.02,
      home.z + (Math.random() - 0.5) * jitter,
    );
    group.rotation.y = Math.random() * Math.PI * 2;
    const resident = {
      group,
      tile: home,
      role: residentRole,
      target: null,
      wait: 0.5 + Math.random() * 2.4,
      phase: Math.random() * Math.PI * 2,
      speed: residentRole === 'child' ? 0.42 : residentRole === 'elder' ? 0.22 : 0.28 + Math.random() * 0.16,
      fromY: home.currentHeight,
      toY: home.currentHeight,
    };
    group.userData.resident = resident;
    this.group.add(group);
    this.residents.push(resident);
    return resident;
  }

  getResidentTarget() {
    const auto = this.stats.homes + this.stats.shops * 2;
    return clamp(this.stats.villagers + auto, 2, 30);
  }

  syncResidents() {
    if (!this.tileList.length) return;
    const target = this.getResidentTarget();
    while (this.residents.length > target) {
      const resident = this.residents.pop();
      this.group.remove(resident.group);
    }
    let attempts = 0;
    while (this.residents.length < target && attempts < target + 12) {
      attempts += 1;
      const tile = this.getRandomLandTile();
      if (!tile) break;
      const resident = this.spawnResident(tile);
      if (!resident) break;
    }
    this.stats.residents = this.residents.length;
  }

  buildAnimalModel(species) {
    const group = new THREE.Group();
    const materials = this.animalMaterials;
    const legs = [];
    const part = (geometry, material, x, y, z, sx = 1, sy = 1, sz = 1) => {
      const mesh = new THREE.Mesh(geometry, material);
      mesh.position.set(x, y, z);
      mesh.scale.set(sx, sy, sz);
      mesh.castShadow = true;
      mesh.receiveShadow = true;
      group.add(mesh);
      return mesh;
    };
    const eyes = (y, z, spread) => {
      part(this.animalEyeGeometry, materials.eye, -spread, y, z, 1, 1, 1);
      part(this.animalEyeGeometry, materials.eye, spread, y, z, 1, 1, 1);
    };
    const leg = (x, z, height, radius = 1) => {
      const mesh = part(this.animalLegGeometry, materials.dark, x, height * 0.5, z, radius, height / 0.24, radius);
      legs.push(mesh);
      return mesh;
    };
    let head;
    let tail;
    let headBaseY = 0;

    if (species === 'deer') {
      part(this.animalBodyGeometry, materials.deerFur, 0, 0.5, 0, 0.3, 0.21, 0.2);
      part(this.animalBodyGeometry, materials.deerBelly, 0, 0.43, 0.04, 0.24, 0.12, 0.17);
      const neck = part(this.animalLegGeometry, materials.deerFur, 0, 0.68, 0.16, 2.1, 1.25, 2.1);
      neck.rotation.x = 0.34;
      head = part(this.animalHeadGeometry, materials.deerFur, 0, 0.83, 0.29, 0.1, 0.11, 0.16);
      part(this.animalHeadGeometry, materials.deerBelly, 0, 0.81, 0.42, 0.07, 0.06, 0.08);
      headBaseY = head.position.y;
      for (const side of [-1, 1]) {
        const ear = part(this.animalEarGeometry, materials.deerFur, side * 0.08, 0.93, 0.28, 1.1, 1.25, 0.8);
        ear.rotation.z = side * 0.32;
        const horn = part(this.animalLegGeometry, materials.dark, side * 0.07, 0.98, 0.31, 0.35, 0.95, 0.35);
        horn.rotation.z = side * 0.5;
        horn.rotation.x = 0.18;
        const branch = part(this.animalLegGeometry, materials.dark, side * 0.12, 1.05, 0.34, 0.25, 0.55, 0.25);
        branch.rotation.z = side * 1.05;
      }
      eyes(0.85, 0.4, 0.058);
      for (const sx of [-1, 1]) {
        for (const sz of [-1, 1]) leg(sx * 0.18, sz * 0.14, 0.44, 1.1);
      }
      tail = part(this.animalTailGeometry, materials.deerBelly, 0, 0.53, -0.21, 0.65, 0.7, 0.65);
      tail.rotation.x = -1.05;
    } else if (species === 'fox') {
      part(this.animalBodyGeometry, materials.foxFur, 0, 0.3, 0, 0.29, 0.18, 0.19);
      part(this.animalBodyGeometry, materials.foxCream, 0, 0.27, 0.13, 0.2, 0.14, 0.14);
      head = part(this.animalHeadGeometry, materials.foxFur, 0, 0.39, 0.26, 0.12, 0.11, 0.16);
      part(this.animalHeadGeometry, materials.foxCream, 0, 0.37, 0.4, 0.065, 0.055, 0.115);
      part(this.animalEyeGeometry, materials.eye, 0, 0.35, 0.42, 1.2, 1.2, 0.8);
      headBaseY = head.position.y;
      for (const side of [-1, 1]) {
        const ear = part(this.animalEarGeometry, materials.foxFur, side * 0.072, 0.49, 0.24, 1.15, 1.25, 0.85);
        ear.rotation.z = side * 0.22;
      }
      eyes(0.41, 0.39, 0.062);
      for (const sx of [-1, 1]) {
        for (const sz of [-1, 1]) leg(sx * 0.15, sz * 0.12, 0.24, 0.9);
      }
      tail = part(this.animalTailGeometry, materials.foxFur, 0, 0.46, -0.3, 1.15, 1.55, 1.15);
      tail.rotation.x = -1.25;
    } else {
      part(this.animalBodyGeometry, materials.rabbitFur, 0, 0.2, 0, 0.19, 0.17, 0.25);
      part(this.animalBodyGeometry, materials.rabbitFur, 0, 0.25, 0.1, 0.16, 0.15, 0.16);
      head = part(this.animalHeadGeometry, materials.rabbitFur, 0, 0.35, 0.2, 0.13, 0.13, 0.14);
      part(this.animalHeadGeometry, materials.rabbitInner, 0, 0.33, 0.32, 0.045, 0.04, 0.04);
      headBaseY = head.position.y;
      for (const side of [-1, 1]) {
        const ear = part(this.animalEarGeometry, materials.rabbitFur, side * 0.055, 0.5, 0.17, 0.95, 1.45, 0.7);
        ear.rotation.z = side * 0.16;
        part(this.animalEarGeometry, materials.rabbitInner, side * 0.055, 0.5, 0.18, 0.55, 1.12, 0.35);
      }
      eyes(0.37, 0.31, 0.058);
      for (const sx of [-1, 1]) {
        for (const sz of [-1, 1]) leg(sx * 0.105, sz * 0.13, sz > 0 ? 0.16 : 0.2, 0.85);
      }
      tail = part(this.animalBodyGeometry, materials.rabbitFur, 0, 0.2, -0.24, 0.07, 0.07, 0.07);
    }

    group.userData = {
      kind: 'animal',
      species,
      legs,
      head,
      tail,
      headBaseY,
      phase: Math.random() * Math.PI * 2,
    };
    return group;
  }

  pickAnimalTile(tile, awayFrom = null) {
    if (!tile) return null;
    const options = [];
    for (const [dq, dr] of HEX_DIRECTIONS) {
      const next = this.tiles.get(hexKey(tile.q + dq, tile.r + dr));
      if (!next || next.type === TYPE.water || next.spawnProgress < 0.7) continue;
      const weight = next.decor === DECOR.tree ? 3 : next.feature === FEATURE.path ? 2 : 1;
      for (let i = 0; i < weight; i += 1) options.push(next);
    }
    if (!options.length) return null;
    if (awayFrom) {
      options.sort((a, b) => {
        const da = Math.hypot(a.x - awayFrom.x, a.z - awayFrom.z);
        const db = Math.hypot(b.x - awayFrom.x, b.z - awayFrom.z);
        return db - da;
      });
      return options[Math.floor(Math.random() * Math.min(3, options.length))];
    }
    return options[Math.floor(Math.random() * options.length)];
  }

  syncAnimals() {
    if (!this.animalKitReady) return;
    const treeTiles = this.tileList.filter(
      (tile) => tile.decor === DECOR.tree && tile.type !== TYPE.water && tile.spawnProgress > 0.7,
    );
    const target = treeTiles.length ? clamp(Math.ceil(treeTiles.length / 1.4), 2, 8) : 0;
    while (this.animals.length > target) {
      const animal = this.animals.pop();
      this.group.remove(animal.group);
    }
    let attempts = 0;
    while (this.animals.length < target && attempts < target + 8) {
      attempts += 1;
      const tile = treeTiles[Math.floor(Math.random() * treeTiles.length)] || this.getRandomLandTile();
      if (!tile) break;
      const animal = this.spawnAnimal(tile);
      if (!animal) break;
    }
  }

  spawnAnimal(tile) {
    if (!tile) return null;
    const roll = Math.random();
    const species = roll < 0.42 ? 'rabbit' : roll < 0.78 ? 'deer' : 'fox';
    const group = this.buildAnimalModel(species);
    group.position.set(tile.x, tile.currentHeight + 0.01, tile.z);
    group.rotation.y = Math.random() * Math.PI * 2;
    this.group.add(group);
    const animal = {
      group,
      species,
      tile,
      target: null,
      wait: Math.random() * 2.5,
      speed: species === 'rabbit' ? 0.62 : species === 'fox' ? 0.5 : 0.38,
      alert: 0,
      moving: false,
    };
    this.animals.push(animal);
    return animal;
  }

  updateAnimals(dt, elapsed) {
    if (!this.animals.length) return;
    const explorer = this.explorer?.group.visible ? this.explorer.group.position : null;
    for (const animal of this.animals) {
      const { group } = animal;
      const data = group.userData;
      let threat = null;
      if (explorer) {
        const distance = Math.hypot(explorer.x - group.position.x, explorer.z - group.position.z);
        if (distance < 2.4) {
          threat = explorer;
          if (animal.alert <= 0) {
            animal.alert = 1.4;
            animal.target = this.pickAnimalTile(animal.tile, explorer);
          }
        }
      }
      if (animal.alert > 0) animal.alert -= dt;

      if (!animal.target) {
        animal.wait -= dt;
        if (animal.wait <= 0) {
          animal.target = this.pickAnimalTile(animal.tile, threat);
          animal.wait = 0.5 + Math.random() * 2.4;
        }
      }

      let walking = false;
      if (animal.target) {
        const dx = animal.target.x - group.position.x;
        const dz = animal.target.z - group.position.z;
        const distance = Math.hypot(dx, dz);
        if (distance < 0.04) {
          animal.tile = animal.target;
          animal.target = null;
          animal.wait = animal.species === 'rabbit' ? 0.8 + Math.random() * 2 : 1.4 + Math.random() * 3.4;
        } else {
          const boost = animal.alert > 0 ? 1.9 : 1;
          const step = Math.min(distance, animal.speed * boost * dt);
          group.position.x += (dx / distance) * step;
          group.position.z += (dz / distance) * step;
          const facing = Math.atan2(dx, dz);
          group.rotation.y = facing;
          walking = true;
        }
      }

      const baseY = (animal.target || animal.tile).currentHeight + 0.01;
      group.position.y += (baseY - group.position.y) * Math.min(1, dt * 10);
      const pace = animal.species === 'rabbit' ? 13 : animal.species === 'fox' ? 10 : 7.5;
      const swing = walking ? Math.sin(elapsed * pace + data.phase) * (animal.species === 'rabbit' ? 0.8 : 0.55) : 0;
      data.legs.forEach((leg, index) => {
        leg.rotation.x = swing * (index % 2 === 0 ? 1 : -1);
      });
      if (data.head) {
        const graze = walking ? 0 : Math.sin(elapsed * 0.8 + data.phase) * 0.02;
        data.head.position.y = data.headBaseY + graze;
      }
      if (data.tail) {
        data.tail.rotation.z = Math.sin(elapsed * (walking ? 5 : 2.2) + data.phase) * 0.22;
      }
      if (animal.species === 'rabbit' && walking) {
        group.position.y += Math.abs(Math.sin(elapsed * pace + data.phase)) * 0.07;
      } else if (walking) {
        group.position.y += Math.abs(Math.sin(elapsed * pace + data.phase)) * 0.012;
      }
    }
  }

  pickNextTile(tile) {
    if (!tile) return null;
    const options = [];
    for (const [dq, dr] of HEX_DIRECTIONS) {
      const next = this.tiles.get(hexKey(tile.q + dq, tile.r + dr));
      if (!next || next.type === TYPE.water || next.spawnProgress < 0.7) continue;
      const weight = next.feature === FEATURE.path ? 4 : next.feature === FEATURE.shop ? 3 : next.feature === FEATURE.home ? 2 : 1;
      for (let i = 0; i < weight; i += 1) options.push(next);
    }
    if (!options.length) return null;
    return options[Math.floor(Math.random() * options.length)];
  }

  updateResidents(dt, elapsed) {
    for (const resident of this.residents) {
      const { group } = resident;
      if (!resident.target) {
        resident.wait -= dt;
        if (resident.wait <= 0) {
          resident.target = this.pickNextTile(resident.tile);
          if (resident.target) {
            resident.fromY = resident.tile.currentHeight;
            resident.toY = resident.target.currentHeight;
            resident.wait = 0.25 + Math.random() * 0.6;
          } else {
            resident.wait = 1.3 + Math.random() * 2.5;
          }
        }
      }

      if (resident.target) {
        const dx = resident.target.x - group.position.x;
        const dz = resident.target.z - group.position.z;
        const distance = Math.hypot(dx, dz);
        if (distance < 0.035) {
          resident.tile = resident.target;
          resident.target = null;
          resident.wait = resident.tile.feature === FEATURE.shop ? 4 + Math.random() * 4 : 1.2 + Math.random() * 3.6;
        } else {
          const step = Math.min(distance, resident.speed * dt);
          group.position.x += (dx / distance) * step;
          group.position.z += (dz / distance) * step;
          group.rotation.y = Math.atan2(dx, dz);
        }
      }

      const baseY = resident.target ? resident.toY : resident.tile.currentHeight;
      group.position.y += (baseY + 0.015 - group.position.y) * Math.min(1, dt * 9);
      const walking = Boolean(resident.target);
      const swing = walking ? Math.sin(elapsed * 8.5 + resident.phase) * 0.55 : Math.sin(elapsed * 1.8 + resident.phase) * 0.04;
      const limbs = group.userData.limbs;
      if (limbs) {
        limbs.leftLeg.rotation.x = swing;
        limbs.rightLeg.rotation.x = -swing;
        limbs.leftArm.rotation.x = -swing * 0.7;
        limbs.rightArm.rotation.x = swing * 0.7;
      }
      group.position.y += walking ? Math.abs(Math.sin(elapsed * 8.5 + resident.phase)) * 0.012 : 0;
    }
  }

  canStandAt(x, z) {
    const [q, r] = worldToHex(x, z);
    const tile = this.tiles.get(hexKey(q, r));
    if (!tile || tile.type === TYPE.water || tile.spawnProgress < 0.7) return false;
    return Math.hypot(x - tile.x, z - tile.z) < 0.92;
  }

  ensureExplorer() {
    if (this.explorer) return this.explorer;
    const palette = this.residentPalette[0];
    const group = this.buildPersonModel(palette, true);
    group.visible = false;
    this.group.add(group);
    this.explorer = {
      group,
      tile: null,
      walkPhase: 0,
      moving: false,
      status: '',
    };
    return this.explorer;
  }

  startWalk() {
    const explorer = this.ensureExplorer();
    const candidates = this.tileList.filter(
      (tile) => tile.type !== TYPE.water && !tile.isHeart && tile.spawnProgress > 0.7,
    );
    const paths = candidates.filter((tile) => tile.feature === FEATURE.path);
    const pool = paths.length ? paths : candidates;
    pool.sort((a, b) => Math.hypot(a.x, a.z) - Math.hypot(b.x, b.z));
    const tile = pool[0] || this.tiles.get(hexKey(0, 0)) || this.getRandomLandTile();
    if (!tile) return false;
    explorer.tile = tile;
    explorer.group.position.set(tile.x, tile.currentHeight + 0.02, tile.z);
    explorer.group.rotation.y = Math.atan2(-tile.x, -tile.z);
    explorer.group.visible = true;
    explorer.walkPhase = 0;
    return true;
  }

  stopWalk() {
    if (this.explorer) this.explorer.group.visible = false;
  }

  moveExplorer(dx, dz, dt) {
    const explorer = this.explorer;
    if (!explorer) return;
    const length = Math.hypot(dx, dz);
    if (length < 0.001) {
      explorer.moving = false;
      return;
    }
    const speed = 1.55;
    const nx = explorer.group.position.x + (dx / length) * speed * dt;
    const nz = explorer.group.position.z + (dz / length) * speed * dt;
    let moved = false;
    if (this.canStandAt(nx, nz)) {
      explorer.group.position.x = nx;
      explorer.group.position.z = nz;
      moved = true;
    } else if (this.canStandAt(nx, explorer.group.position.z)) {
      explorer.group.position.x = nx;
      moved = true;
    } else if (this.canStandAt(explorer.group.position.x, nz)) {
      explorer.group.position.z = nz;
      moved = true;
    }
    if (moved) {
      explorer.group.rotation.y = Math.atan2(dx, dz);
      const [q, r] = worldToHex(explorer.group.position.x, explorer.group.position.z);
      explorer.tile = this.tiles.get(hexKey(q, r)) || explorer.tile;
      explorer.moving = true;
      explorer.walkPhase += dt * 9;
    } else {
      explorer.moving = false;
    }
  }

  updateExplorer(dt, elapsed) {
    const explorer = this.explorer;
    if (!explorer || !explorer.group.visible) return;
    const tile = explorer.tile;
    const targetY = tile ? tile.currentHeight + 0.02 : explorer.group.position.y;
    explorer.group.position.y += (targetY - explorer.group.position.y) * Math.min(1, dt * 10);
    const swing = explorer.moving ? Math.sin(explorer.walkPhase) * 0.62 : Math.sin(elapsed * 2.1) * 0.035;
    const limbs = explorer.group.userData.limbs;
    if (limbs) {
      limbs.leftLeg.rotation.x = swing;
      limbs.rightLeg.rotation.x = -swing;
      limbs.leftArm.rotation.x = -swing * 0.75;
      limbs.rightArm.rotation.x = swing * 0.75;
    }
    if (explorer.moving) {
      explorer.group.position.y += Math.abs(Math.sin(explorer.walkPhase)) * 0.018;
    }
  }

  getExplorerWorldPosition() {
    if (!this.explorer) return this.origin.clone();
    return this.explorer.group.position.clone().add(this.origin);
  }

  getWalkStatus() {
    const tile = this.explorer?.tile;
    if (!tile) return this.name;
    if (tile.feature === FEATURE.home) return 'Inside a cottage';
    if (tile.feature === FEATURE.shop) return 'At the market stall';
    if (tile.feature === FEATURE.path) return 'On the winding path';
    return this.name;
  }

  createWildRock(tile) {
    if (tile.rockMesh) return;
    const rock = new THREE.Mesh(this.rockGeometry, hash2(tile.q, tile.r) > 0.5 ? this.rockMaterial : this.rockDarkMaterial);
    const scale = 0.16 + hash2(tile.q + 4, tile.r - 2) * 0.18;
    rock.scale.set(scale * 1.2, scale * 0.8, scale);
    rock.position.set((hash2(tile.q, tile.r + 10) - 0.5) * 0.55, scale * 0.35, (hash2(tile.q + 2, tile.r) - 0.5) * 0.55);
    rock.rotation.set(hash2(tile.q, tile.r) * Math.PI, hash2(tile.q + 5, tile.r) * Math.PI, 0);
    rock.castShadow = true;
    rock.receiveShadow = true;
    tile.decorGroup.add(rock);
    tile.rockMesh = rock;
  }

  createTree(tile, level, style = 'grove') {
    const group = new THREE.Group();
    const random = mulberry32(Math.floor(hash2(tile.q + 10, tile.r + 20) * 100000) + level * 71 + (style?.length || 0) * 17);
    const trunkMaterial = style === 'birch' ? this.birchBarkMaterial : style === 'palm' ? this.paleWoodMaterial : this.trunkMaterial;
    const trunk = new THREE.Mesh(this.treeTrunkGeometry, trunkMaterial);
    trunk.position.y = 0.36;
    if (style === 'ancient') trunk.scale.set(1.7, 1.3, 1.7);
    if (style === 'palm') {
      trunk.scale.set(0.8, 1.7, 0.8);
      trunk.rotation.z = 0.1;
      trunk.position.y = 0.58;
    }
    if (style === 'willow') trunk.scale.set(1.05, 1.12, 1.05);
    trunk.castShadow = true;
    trunk.receiveShadow = true;
    group.add(trunk);

    const canopy = new THREE.Group();
    canopy.position.y = 0.72;
    if (style === 'palm') canopy.position.set(0.1, 1.17, 0);
    group.add(canopy);

    if (style === 'pine') {
      const pinePalette = [this.leafMaterials[2], this.leafMaterials[0], this.leafMaterials[3]];
      for (let i = 0; i < 3; i += 1) {
        const tier = new THREE.Mesh(new THREE.ConeGeometry(0.43 - i * 0.08, 0.38, 7), pinePalette[i % pinePalette.length]);
        tier.position.y = 0.05 + i * 0.21;
        tier.rotation.y = random() * Math.PI;
        tier.castShadow = true;
        tier.receiveShadow = true;
        canopy.add(tier);
      }
      if (level >= 3) {
        const star = new THREE.Mesh(this.coreGeometry, this.fruitMaterial);
        star.position.y = 0.73;
        star.scale.setScalar(0.55);
        canopy.add(star);
      }
    } else if (style === 'palm') {
      for (let i = 0; i < 6; i += 1) {
        const frond = new THREE.Mesh(new THREE.ConeGeometry(0.12, 0.72, 4), this.palmLeafMaterial);
        const angle = (i / 6) * Math.PI * 2 + random() * 0.35;
        frond.position.set(Math.cos(angle) * 0.23, -0.04 - (i % 2) * 0.04, Math.sin(angle) * 0.23);
        frond.rotation.z = Math.PI / 2 - 0.26;
        frond.rotation.y = -angle;
        frond.castShadow = true;
        canopy.add(frond);
      }
      if (level >= 3) {
        for (let i = 0; i < 3; i += 1) {
          const coconut = new THREE.Mesh(this.residentHeadGeometry, this.darkWoodMaterial);
          coconut.position.set((random() - 0.5) * 0.22, -0.12, (random() - 0.5) * 0.22);
          canopy.add(coconut);
        }
      }
    } else if (style === 'willow') {
      const crown = new THREE.Mesh(this.treeCanopyGeometry, this.leafMaterials[0]);
      crown.scale.set(0.45, 0.3, 0.45);
      crown.position.y = 0.24;
      crown.castShadow = true;
      canopy.add(crown);
      for (let i = 0; i < 8 + level * 2; i += 1) {
        const strand = new THREE.Mesh(new THREE.CylinderGeometry(0.018, 0.012, 0.52 + random() * 0.32, 4), this.leafMaterials[2]);
        const angle = (i / (8 + level * 2)) * Math.PI * 2 + random() * 0.35;
        const radius = 0.26 + random() * 0.2;
        strand.position.set(Math.cos(angle) * radius, 0.13 - random() * 0.28, Math.sin(angle) * radius);
        strand.rotation.z = (random() - 0.5) * 0.18;
        canopy.add(strand);
      }
    } else {
      const palette = style === 'blossom'
        ? this.blossomMaterials
        : style === 'birch'
          ? [this.leafMaterials[3], this.leafMaterials[1], this.leafMaterials[3]]
          : [this.leafMaterials[1], this.leafMaterials[0], this.leafMaterials[3], this.leafMaterials[2]];
      const blobCount = 2 + level + (style === 'ancient' ? 2 : 0);
      const baseScale = style === 'ancient' ? 0.5 : style === 'birch' ? 0.29 : [0.3, 0.36, 0.41][level - 1] ?? 0.32;
      for (let i = 0; i < blobCount; i += 1) {
        const blob = new THREE.Mesh(this.treeCanopyGeometry, palette[(i + level) % palette.length]);
        const angle = (i / blobCount) * Math.PI * 2 + random() * 0.6;
        const radius = i === 0 ? 0 : (style === 'ancient' ? 0.3 : 0.2) + random() * 0.18;
        const size = baseScale * (i === 0 ? 1 : 0.64 + random() * 0.28);
        blob.position.set(
          i === 0 ? 0 : Math.cos(angle) * radius,
          (i === 0 ? 0.22 : 0.08 + random() * 0.22) + level * 0.035 + (style === 'ancient' ? 0.12 : 0),
          i === 0 ? 0 : Math.sin(angle) * radius,
        );
        blob.scale.set(size * (0.9 + random() * 0.18), size * (0.86 + random() * 0.22), size * (0.9 + random() * 0.18));
        blob.rotation.set(random() * 0.4, random() * Math.PI, random() * 0.4);
        blob.castShadow = true;
        blob.receiveShadow = true;
        canopy.add(blob);
      }
      const fruitCount = style === 'orchard' ? 7 + level * 2 : style === 'ancient' ? 3 : level >= 3 ? 4 : 0;
      if (fruitCount) {
        const fruitGeom = new THREE.IcosahedronGeometry(style === 'ancient' ? 0.055 : 0.045, 0);
        for (let i = 0; i < fruitCount; i += 1) {
          const fruit = new THREE.Mesh(fruitGeom, this.fruitMaterial);
          const angle = random() * Math.PI * 2;
          fruit.position.set(Math.cos(angle) * 0.42, 0.12 + random() * 0.36, Math.sin(angle) * 0.42);
          canopy.add(fruit);
        }
      }
      if (style === 'ancient') {
        const stone = new THREE.Mesh(new THREE.TorusGeometry(0.24, 0.045, 4, 8), this.slateMaterial);
        stone.rotation.x = Math.PI / 2;
        stone.position.y = 0.02;
        group.add(stone);
      }
    }

    group.userData.kind = 'tree';
    group.userData.canopy = canopy;
    group.userData.phase = random() * Math.PI * 2;
    group.userData.sway = 0.008 + level * 0.003 + (style === 'willow' ? 0.005 : 0);
    group.userData.level = level;
    group.userData.style = style;
    return group;
  }

  createCrystal(tile, level, style = 'prism') {
    const group = new THREE.Group();
    const random = mulberry32(Math.floor(hash2(tile.q + 4, tile.r + 16) * 100000) + level * 89);
    const count = [3, 5, 7][level - 1] ?? 3;
    const baseRing = new THREE.Mesh(this.crystalRingGeometry, this.crystalMaterials[1]);
    baseRing.rotation.x = Math.PI / 2;
    baseRing.position.y = 0.018;
    baseRing.scale.setScalar(1 + level * 0.08);
    group.add(baseRing);

    for (let i = 0; i < count; i += 1) {
      const shard = new THREE.Mesh(this.crystalGeometry, this.crystalMaterials[(i + level) % this.crystalMaterials.length]);
      const angle = (i / count) * Math.PI * 2 + random() * 0.5;
      const radius = i === 0 ? 0 : 0.14 + random() * 0.2;
      const height = (0.26 + random() * 0.26) * (1 + level * 0.26);
      shard.scale.set(0.18 + random() * 0.1, height, 0.18 + random() * 0.1);
      shard.position.set(
        Math.cos(angle) * radius,
        height * 0.5 + 0.04,
        Math.sin(angle) * radius,
      );
      shard.rotation.set((random() - 0.5) * 0.35, random() * Math.PI, (random() - 0.5) * 0.35);
      shard.castShadow = true;
      shard.userData.baseY = shard.position.y;
      shard.userData.phase = random() * Math.PI * 2;
      group.add(shard);
    }

    const glow = new THREE.Sprite(
      new THREE.SpriteMaterial({
        map: this.glowTexture,
        color: level >= 3 ? 0xffd9f3 : 0xb7fff5,
        transparent: true,
        opacity: 0.36 + level * 0.06,
        depthWrite: false,
        blending: THREE.AdditiveBlending,
      }),
    );
    glow.scale.setScalar(0.72 + level * 0.18);
    glow.position.y = 0.24;
    group.add(glow);

    if (level >= 3) {
      const halo = new THREE.Mesh(this.crystalRingGeometry, this.fruitMaterial);
      halo.rotation.x = Math.PI / 2;
      halo.rotation.z = 0.3;
      halo.position.y = 0.7;
      halo.scale.setScalar(0.9);
      group.add(halo);
      group.userData.halo = halo;
    }

    group.userData.kind = 'crystal';
    group.userData.phase = random() * Math.PI * 2;
    group.userData.level = level;
    group.userData.glow = glow;
    group.userData.style = style;
    return group;
  }

  rebuildFlowers() {
    if (!this.flowers) return;
    const positions = [];
    const colors = [];
    const palette = [0xfff2d3, 0xf9d17b, 0xe79cbb, 0xcfe6a6, 0xf7f1de];
    for (const tile of this.tileList) {
      if (tile.type === TYPE.water || tile.spawnProgress < 0.7) continue;
      const random = mulberry32(Math.floor(hash2(tile.q * 3 + 5, tile.r * 7 + 1) * 100000));
      const count = tile.decor === DECOR.tree ? 1 : 1 + Math.floor(random() * (tile.type === TYPE.stone ? 1 : 4));
      for (let i = 0; i < count; i += 1) {
        const angle = random() * Math.PI * 2;
        const radius = 0.18 + random() * 0.58;
        positions.push(tile.x + Math.cos(angle) * radius, tile.targetHeight + 0.055, tile.z + Math.sin(angle) * radius);
        const color = new THREE.Color(palette[Math.floor(random() * palette.length)]);
        color.offsetHSL((random() - 0.5) * 0.04, 0, (random() - 0.5) * 0.08);
        colors.push(color.r, color.g, color.b);
      }
    }

    const geometry = new THREE.BufferGeometry();
    geometry.setAttribute('position', new THREE.Float32BufferAttribute(positions, 3));
    geometry.setAttribute('color', new THREE.Float32BufferAttribute(colors, 3));
    if (this.flowers.geometry) this.flowers.geometry.dispose();
    this.flowers.geometry = geometry;
  }

  refreshStats() {
    let groves = 0;
    let prisms = 0;
    let magic = 0;
    let props = 0;
    let waters = 0;
    let homes = 0;
    let shops = 0;
    let paths = 0;
    for (const tile of this.tileList) {
      if (tile.decor === DECOR.tree) groves += 1;
      if (tile.decor === DECOR.crystal) prisms += 1;
      if (tile.decor === DECOR.magic) magic += 1;
      if (tile.decor === DECOR.prop) props += 1;
      if (tile.type === TYPE.water) waters += 1;
      if (tile.feature === FEATURE.home) homes += 1;
      if (tile.feature === FEATURE.shop) shops += 1;
      if (tile.feature === FEATURE.path) paths += 1;
    }
    this.stats.groves = groves;
    this.stats.prisms = prisms;
    this.stats.magic = magic;
    this.stats.props = props;
    this.stats.waters = waters;
    this.stats.homes = homes;
    this.stats.shops = shops;
    this.stats.paths = paths;
    this.stats.hexes = this.tileList.length;
    this.syncResidents();
    this.syncAnimals();
  }

  getSparkRate() {
    return (
      0.42 +
      this.stats.groves * 0.062 +
      this.stats.prisms * 0.092 +
      (this.stats.magic || 0) * 0.075 +
      this.stats.waters * 0.018 +
      this.stats.homes * 0.085 +
      this.stats.shops * 0.11 +
      this.stats.paths * 0.008
    );
  }

  getState() {
    return {
      sparks: this.sparks,
      sparksFloor: Math.floor(this.sparks),
      bloom: this.bloom,
      bloomTarget: BLOOM_TARGET,
      bloomPct: clamp(this.bloom / BLOOM_TARGET, 0, 1),
      radius: this.radius,
      won: this.won,
      groves: this.stats.groves,
      prisms: this.stats.prisms,
      magic: this.stats.magic,
      props: this.stats.props,
      waters: this.stats.waters,
      homes: this.stats.homes,
      shops: this.stats.shops,
      paths: this.stats.paths,
      residents: this.stats.residents,
      hexes: this.stats.hexes,
      actions: this.stats.actions,
      sparkRate: this.getSparkRate(),
      islandId: this.id,
      islandName: this.name,
      origins: { x: this.origin.x, z: this.origin.z },
    };
  }

  getNextMilestone() {
    return MILESTONES.find((milestone) => !this.milestonesReached.has(milestone.bloom)) ?? null;
  }

  place(toolName, tile) {
    if (!tile) return { ok: false, reason: 'missing' };
    if (tile.isHeart) {
      this.events.toast?.('The Heartseed rests here — shape the land around it.', 'gold');
      return { ok: false, reason: 'heart' };
    }
    const tool = TOOLS[toolName];
    if (!tool) return { ok: false, reason: 'tool' };
    if (this.sparks + 0.0001 < tool.cost) {
      this.events.denied?.(tool, tile);
      return { ok: false, reason: 'sparks' };
    }

    const before = {
      height: tile.height,
      type: tile.type,
      decor: tile.decor,
      decorLevel: tile.decorLevel,
      decorStyle: tile.decorStyle,
      feature: tile.feature,
      featureStyle: tile.featureStyle,
      rock: tile.wildRock,
      variant: tile.variant,
    };

    let bloomGain = 0;
    let success = false;
    let message = tool.hint;
    let upgraded = false;

    if (tool.family === 'terrain') {
      const next = {
        land: { height: 0.42, type: TYPE.meadow, variant: (tile.variant + 1) % TYPE_COLORS.meadow.length },
        mesa: { height: 0.72, type: TYPE.meadow, variant: 1 },
        cliff: { height: 1.05, type: TYPE.stone, variant: 1 },
        plateau: { height: 0.55, type: TYPE.stone, variant: 0 },
        basin: { height: -0.38, type: TYPE.meadow, variant: 0 },
        terrace: { height: 0.24, type: TYPE.meadow, variant: 2 },
        stone: { height: 0.08, type: TYPE.stone, variant: 1 },
        dune: { height: 0.32, type: TYPE.meadow, variant: 3 },
      }[tool.style] || { height: 0.42, type: TYPE.meadow, variant: tile.variant };
      const target = tile.targetHeight + next.height;
      if (target >= TILE_MAX_HEIGHT - 0.02) {
        this.events.toast?.('This piece of earth has reached the sky.', 'gold');
        return { ok: false, reason: 'max-height' };
      }
      if (target <= TILE_MIN_HEIGHT + 0.02) {
        this.events.toast?.('The basin has already sunk to the roots.', 'gold');
        return { ok: false, reason: 'min-height' };
      }
      tile.targetHeight = clamp(target, TILE_MIN_HEIGHT, TILE_MAX_HEIGHT);
      tile.height = tile.targetHeight;
      tile.type = next.type;
      tile.variant = next.variant;
      tile.wildRock = false;
      this.clearWildRock(tile);
      bloomGain = tool.bloom;
      this.stats.land += 1;
      success = true;
    } else if (tool.family === 'water') {
      if (tile.type === TYPE.water && tile.targetHeight <= 0.3 && tile.featureStyle === tool.style) {
        this.events.toast?.('This water is already deep and still.', 'gold');
        return { ok: false, reason: 'already-water' };
      }
      this.clearDecor(tile);
      this.clearFeature(tile);
      tile.targetHeight = 0.22;
      tile.height = 0.22;
      tile.type = TYPE.water;
      tile.variant = Math.floor(Math.random() * TYPE_COLORS.water.length);
      tile.wildRock = false;
      this.clearWildRock(tile);
      if (tool.style !== 'pool') this.createFeature(tile, FEATURE.water, true, tool.style);
      this.stats.water += 1;
      bloomGain = tool.bloom;
      success = true;
    } else if (tool.family === 'tree') {
      if (tile.type === TYPE.water) {
        this.events.toast?.('Trees need dry ground — raise the land first.', 'gold');
        return { ok: false, reason: 'water' };
      }
      if (tile.feature === FEATURE.home || tile.feature === FEATURE.shop) {
        this.events.toast?.('There is a doorway here already.', 'gold');
        return { ok: false, reason: 'occupied' };
      }
      if (tile.decor === DECOR.tree && tile.decorStyle === tool.style) {
        if (tile.decorLevel >= 3) {
          this.events.toast?.('This canopy has reached its full height.', 'gold');
          return { ok: false, reason: 'max-level' };
        }
        upgraded = true;
        const nextLevel = tile.decorLevel + 1;
        bloomGain = Math.max(2, tool.bloom - 1);
        this.createDecor(tile, DECOR.tree, nextLevel, true, tool.style);
        message = nextLevel === 2 ? 'The canopy deepens' : 'The tree has become an elder';
        success = true;
      } else {
        this.clearDecor(tile);
        this.createDecor(tile, DECOR.tree, 1, true, tool.style);
        tile.type = tile.type === TYPE.stone ? TYPE.stone : TYPE.meadow;
        this.stats.grovesPlanted += 1;
        bloomGain = tool.bloom;
        success = true;
      }
      tile.wildRock = false;
    } else if (tool.family === 'magic') {
      if (tile.type === TYPE.water) {
        this.events.toast?.('Old magic roots in earth, not water.', 'gold');
        return { ok: false, reason: 'water' };
      }
      if (tile.feature === FEATURE.home || tile.feature === FEATURE.shop) {
        this.events.toast?.('There is a doorway here already.', 'gold');
        return { ok: false, reason: 'occupied' };
      }
      const kind = tool.style === 'prism' ? DECOR.crystal : DECOR.magic;
      if (tile.decor === kind && tile.decorStyle === tool.style) {
        if (tile.decorLevel >= 3) {
          this.events.toast?.('This relic is already singing at its brightest.', 'gold');
          return { ok: false, reason: 'max-level' };
        }
        upgraded = true;
        const nextLevel = tile.decorLevel + 1;
        bloomGain = Math.max(3, tool.bloom - 2);
        this.createDecor(tile, kind, nextLevel, true, tool.style);
        message = 'The relic brightens';
        success = true;
      } else {
        this.clearDecor(tile);
        this.createDecor(tile, kind, 1, true, tool.style);
        if (kind === DECOR.crystal) this.stats.prismsWoken += 1;
        else this.stats.magic += 1;
        bloomGain = tool.bloom;
        success = true;
      }
      tile.wildRock = false;
    } else if (tool.family === 'path') {
      if (tile.type === TYPE.water) {
        this.events.toast?.('Paths need solid ground — raise the land first.', 'gold');
        return { ok: false, reason: 'water' };
      }
      if (tile.feature === FEATURE.home || tile.feature === FEATURE.shop) {
        this.events.toast?.('A doorway already opens onto this hex.', 'gold');
        return { ok: false, reason: 'occupied' };
      }
      if (tile.feature === FEATURE.path && tile.featureStyle === tool.style) {
        this.events.toast?.('This way is already worn smooth.', 'gold');
        return { ok: false, reason: 'already-path' };
      }
      this.clearDecor(tile);
      this.clearFeature(tile);
      this.createFeature(tile, FEATURE.path, true, tool.style);
      bloomGain = tool.bloom;
      success = true;
    } else if (tool.family === 'home' || tool.family === 'shop') {
      const kind = tool.family === 'shop' ? FEATURE.shop : FEATURE.home;
      if (tile.type === TYPE.water) {
        this.events.toast?.('Buildings need dry earth beneath them.', 'gold');
        return { ok: false, reason: 'water' };
      }
      if (tile.feature === FEATURE.home || tile.feature === FEATURE.shop) {
        this.events.toast?.(
          tile.feature === FEATURE.shop ? 'A market already fills this hex.' : 'A building already stands here.',
          'gold',
        );
        return { ok: false, reason: 'occupied' };
      }
      this.clearDecor(tile);
      this.clearFeature(tile);
      this.createFeature(tile, kind, true, tool.style);
      bloomGain = tool.bloom;
      success = true;
    } else if (tool.family === 'folk') {
      if (tile.type === TYPE.water) {
        this.events.toast?.('Neighbors need a place to stand.', 'gold');
        return { ok: false, reason: 'water' };
      }
      this.stats.villagers += 1;
      this.stats.folk = this.stats.folk || {};
      this.stats.folk[tool.style] = (this.stats.folk[tool.style] || 0) + 1;
      this.spawnResident(tile, tool.style);
      bloomGain = tool.bloom;
      success = true;
    } else if (tool.family === 'prop') {
      if (tile.type === TYPE.water) {
        this.events.toast?.('This wild thing needs dry ground.', 'gold');
        return { ok: false, reason: 'water' };
      }
      if (tile.feature === FEATURE.home || tile.feature === FEATURE.shop) {
        this.events.toast?.('There is a doorway here already.', 'gold');
        return { ok: false, reason: 'occupied' };
      }
      this.clearDecor(tile);
      this.createDecor(tile, DECOR.prop, 1, true, tool.style);
      tile.wildRock = false;
      this.stats.props += 1;
      bloomGain = tool.bloom;
      success = true;
    }

    if (!success) return { ok: false, reason: 'unknown' };

    if (before.decor === DECOR.none || before.feature === FEATURE.none) {
      this.clearWildRock(tile);
    }

    this.sparks = Math.max(0, this.sparks - tool.cost);
    this.bloom += bloomGain;
    this.stats.actions += 1;
    this.stats.tools = this.stats.tools || {};
    this.stats.tools[toolName] = (this.stats.tools[toolName] || 0) + 1;
    this.history.push({ tile, before, toolName, bloomGain, cost: tool.cost });
    if (this.history.length > 40) this.history.shift();

    this.updateTileMaterials(tile);
    this.updateTileHeight(tile);
    this.refreshStats();
    this.rebuildFlowers();
    tile.heightPulse = 1;
    this.emitPlacement(tile, toolName, upgraded);

    const position = this.getTileWorldPosition(tile);
    this.events.action?.({
      toolName,
      family: tool.family,
      style: tool.style,
      tile,
      bloomGain,
      cost: tool.cost,
      position,
      upgraded,
      message,
      sparkRate: this.getSparkRate(),
    });
    this.events.state?.(this.getState());

    this.checkMilestones();
    this.checkWin();
    this.save();
    return { ok: true, bloomGain, tile, message, position };
  }

  clearDecor(tile) {
    if (tile.decorObject) {
      tile.decorObject.traverse((child) => {
        if (child.userData?.kind) return;
      });
      tile.decorGroup.remove(tile.decorObject);
      tile.decor = DECOR.none;
      tile.decorLevel = 0;
      tile.decorStyle = null;
      tile.decorObject = null;
    }
    while (tile.decorGroup.children.length > 0) {
      tile.decorGroup.remove(tile.decorGroup.children[0]);
    }
    this.trees = this.trees.filter((tree) => tree.parent);
    this.crystals = this.crystals.filter((crystal) => crystal.parent);
  }

  emitPlacement(tile, toolName, upgraded) {
    const tool = TOOLS[toolName];
    const position = this.getTileWorldPosition(tile);
    const level = upgraded ? 2 : 1;
    this.ripplesSystem.spawn(position, {
      color: tool.color,
      scale: 1.15 + level * 0.2,
      duration: 1.05,
      startScale: 0.25,
    });
    this.particles.emitBurst(position, {
      count: tool.family === 'magic' ? 42 : tool.family === 'tree' ? 32 : tool.family === 'terrain' ? 20 : 26,
      color: tool.color,
      color2: tool.color2,
      speed: tool.family === 'terrain' ? 1.05 : 1.45,
      spread: 0.34,
      size: 0.085,
      sizeVariance: 0.055,
      life: 1.25,
      gravity: tool.family === 'terrain' ? -0.85 : -0.45,
      drag: 1.7,
      upward: tool.family === 'terrain' ? 0.45 : 0.8,
      ring: tool.family === 'water',
    });
    if (tool.family === 'magic') {
      this.particles.emitBurst(position, {
        count: 16,
        color: 0xfff1b8,
        speed: 0.65,
        spread: 0.12,
        size: 0.05,
        life: 2.1,
        gravity: 0.3,
        drag: 0.7,
        upward: 1.05,
      });
    }
  }

  checkMilestones() {
    let next = this.getNextMilestone();
    while (next && this.bloom >= next.bloom) {
      this.milestonesReached.add(next.bloom);
      this.spawnRing(next.radius, true, 0.2);
      this.sparks = Math.min(999, this.sparks + next.sparks);
      this.refreshStats();
      this.rebuildFlowers();
      const center = new THREE.Vector3(0, 0.8, 0).add(this.origin);
      this.ripplesSystem.spawn(center, { color: 0xffe0a1, scale: 10, duration: 2.1, startScale: 1 });
      this.particles.emitBurst(center, {
        count: 70,
        color: 0xffd18a,
        color2: 0xbff2df,
        speed: 2.8,
        spread: 2.5,
        size: 0.07,
        life: 2.4,
        gravity: 0.15,
        drag: 0.9,
        upward: 1.5,
        ring: true,
      });
      this.events.expansion?.({
        radius: next.radius,
        message: next.message,
        sparks: next.sparks,
        state: this.getState(),
      });
      next = this.getNextMilestone();
    }
    this.events.state?.(this.getState());
  }

  checkWin() {
    if (this.won || this.bloom < BLOOM_TARGET) return;
    this.won = true;
    this.winPulse = 0;
    this.floraDirty = false;
    this.sparks = Math.min(999, this.sparks + 24);
    this.refreshStats();
    this.heartBloom = 1;
    const seedPosition = this.getHeartseedPosition().clone();
    this.particles.emitBurst(seedPosition, {
      count: 130,
      color: 0xffd77f,
      color2: 0xfff6dc,
      speed: 3.8,
      spread: 0.9,
      size: 0.09,
      life: 3.2,
      gravity: 0.45,
      drag: 0.8,
      upward: 2.4,
      ring: true,
    });
    this.ripplesSystem.spawn(new THREE.Vector3(seedPosition.x, this.getCenterTop() + 0.1 + this.origin.y, seedPosition.z), {
      color: 0xffd58a,
      scale: 9,
      duration: 2.4,
      startScale: 0.8,
    });
    this.events.win?.({ state: this.getState() });
    this.events.state?.(this.getState());
    this.save();
  }

  getCenterTop() {
    const center = this.tiles.get(hexKey(0, 0));
    return center ? center.currentHeight : 1.4;
  }

  getHeartseedPosition() {
    return new THREE.Vector3(0, this.getCenterTop() + 1.55, 0).add(this.origin);
  }

  getTileWorldPosition(tile) {
    return new THREE.Vector3(tile.x, tile.currentHeight + 0.05, tile.z).add(this.origin);
  }

  pick(clientX, clientY, camera, canvas) {
    const rect = canvas.getBoundingClientRect();
    const x = ((clientX - rect.left) / rect.width) * 2 - 1;
    const y = -((clientY - rect.top) / rect.height) * 2 + 1;
    this.raycaster ??= new THREE.Raycaster();
    this.pointer ??= new THREE.Vector2();
    this.pointer.set(x, y);
    this.raycaster.setFromCamera(this.pointer, camera);
    const hits = this.raycaster.intersectObjects(this.tileMeshes, false);
    for (const hit of hits) {
      const tile = hit.object.userData.tile;
      if (tile && tile.spawnProgress > 0.6 && tile.group.visible) {
        this.selection.userData.point = hit.point;
        return tile;
      }
    }
    return null;
  }

  highlight(tile) {
    if (!tile || !tile.group.visible || tile.spawnProgress < 0.6) {
      this.selection.visible = false;
      this.selection.userData.target = null;
      return;
    }
    this.selection.visible = true;
    this.selection.userData.target = tile;
    this.selection.position.set(tile.x, tile.currentHeight + 0.03, tile.z);
    const isHeart = tile.isHeart;
    this.selectionRing.material.color.setHex(isHeart ? 0xffefba : 0xffd88c);
    this.selectionGlow.material.color.setHex(isHeart ? 0xffefba : 0xffc861);
    const pulse = 1 + Math.sin(this.time * 3.2) * 0.025;
    this.selectionRing.scale.setScalar(pulse);
    this.selectionGlow.scale.setScalar(1.03 + Math.sin(this.time * 2.1) * 0.03);
  }

  pulseAt(position) {
    this.ripplesSystem.spawn(position, { color: 0xffd28a, scale: 0.9, duration: 0.9, startScale: 0.2 });
  }

  update(dt, elapsed) {
    this.time = elapsed;
    const step = Math.min(dt, 0.05);
    for (const material of this.waterMaterials) material.uniforms.uTime.value = elapsed;
    this.foamMaterial.uniforms.uTime.value = elapsed;

    if (this.active) {
      this.sparks = Math.min(999, this.sparks + this.getSparkRate() * step);
      this.saveClock += step;
      if (this.saveClock > 10) {
        this.saveClock = 0;
        this.save();
      }
    }

    for (const tile of this.tileList) {
      if (tile.spawnProgress < 1) {
        if (tile.spawnDelay > 0) {
          tile.spawnDelay -= step;
          continue;
        }
        tile.spawn = Math.min(1, tile.spawn + step * 1.65);
        const eased = easeOutCubic(tile.spawn);
        tile.spawnProgress = eased;
        tile.group.visible = true;
        tile.group.position.y = -2.8 * (1 - eased);
        tile.group.scale.setScalar(0.25 + 0.75 * eased);
        if (tile.spawn >= 1) {
          tile.group.position.y = 0;
          tile.group.scale.setScalar(1);
          tile.spawnProgress = 1;
          this.floraDirty = true;
        }
      }

      if (Math.abs(tile.currentHeight - tile.targetHeight) > 0.001) {
        tile.currentHeight = damp(tile.currentHeight, tile.targetHeight, 9, step);
        this.updateTileHeight(tile);
      } else if (tile.currentHeight !== tile.targetHeight) {
        tile.currentHeight = tile.targetHeight;
        this.updateTileHeight(tile);
      }

      if (tile.decorGroup.userData.pop !== undefined && tile.decorGroup.userData.pop < 1) {
        tile.decorGroup.userData.pop = Math.min(1, tile.decorGroup.userData.pop + step * 2.7);
        const pop = easeOutBack(tile.decorGroup.userData.pop);
        tile.decorGroup.scale.setScalar(Math.max(0.01, pop));
      }

      if (tile.featureGroup.userData.pop !== undefined && tile.featureGroup.userData.pop < 1) {
        tile.featureGroup.userData.pop = Math.min(1, tile.featureGroup.userData.pop + step * 2.7);
        const pop = easeOutBack(tile.featureGroup.userData.pop);
        tile.featureGroup.scale.setScalar(Math.max(0.01, pop));
      }

      if (tile.heightPulse > 0) {
        tile.heightPulse = Math.max(0, tile.heightPulse - step * 2.6);
        const pulse = Math.sin(tile.heightPulse * Math.PI) * 0.035;
        tile.group.position.y = pulse;
      }

      if (tile.decorObject?.userData.kind === 'tree') {
        const canopy = tile.decorObject.userData.canopy;
        if (canopy) {
          canopy.rotation.z = Math.sin(elapsed * 0.72 + tile.decorObject.userData.phase) * tile.decorObject.userData.sway;
          canopy.rotation.x = Math.cos(elapsed * 0.53 + tile.decorObject.userData.phase) * tile.decorObject.userData.sway * 0.6;
        }
      }

      if (tile.decorObject?.userData.kind === 'crystal') {
        const crystal = tile.decorObject;
        crystal.children.forEach((child) => {
          if (child.userData.baseY) {
            child.position.y = child.userData.baseY + Math.sin(elapsed * 1.6 + child.userData.phase) * 0.012;
          }
        });
        if (crystal.userData.halo) {
          crystal.userData.halo.rotation.z += step * 0.35;
        }
        if (crystal.userData.glow) {
          const pulse = 1 + Math.sin(elapsed * 1.9 + crystal.userData.phase) * 0.08;
          crystal.userData.glow.scale.setScalar((0.72 + crystal.userData.level * 0.18) * pulse);
        }
      }
      if (tile.decorObject?.userData.kind === 'magic') {
        const magic = tile.decorObject;
        if (magic.userData.orbit) {
          magic.userData.orbit.rotation.z = Math.sin(elapsed * 0.8 + magic.userData.phase) * 0.25;
          magic.userData.orbit.rotation.y = elapsed * 0.45;
        }
        if (magic.userData.glow) {
          const pulse = 1 + Math.sin(elapsed * 2.2 + magic.userData.phase) * 0.1;
          magic.userData.glow.scale.setScalar((0.9 + magic.userData.level * 0.12) * pulse);
        }
      }
      if (tile.decorObject?.userData.kind === 'prop') {
        const prop = tile.decorObject;
        if (prop.userData.kite) {
          prop.userData.kite.position.y = 1.48 + Math.sin(elapsed * 1.3 + prop.userData.phase) * 0.07;
          prop.userData.kite.rotation.z = 0.35 + Math.sin(elapsed * 1.7 + prop.userData.phase) * 0.1;
          prop.userData.kite.rotation.y = Math.sin(elapsed * 0.6 + prop.userData.phase) * 0.25;
        }
      }
    }

    if (this.baseGrow < 1) {
      this.baseGrow = Math.min(1, this.baseGrow + step * 1.1);
      const eased = easeOutCubic(this.baseGrow);
      if (this.baseGroup) {
        this.baseGroup.scale.set(0.84 + 0.16 * eased, 0.7 + 0.3 * eased, 0.84 + 0.16 * eased);
      }
    }

    if (this.floraDirty) {
      this.floraDirty = false;
      this.rebuildFlowers();
    }

    if (this.selection.visible) {
      const target = this.selection.userData.target;
      if (target) {
        this.highlight(target);
      }
    }

    this.updateHeartseed(step, elapsed);
    this.updateResidents(step, elapsed);
    this.updateAnimals(step, elapsed);
    this.updateExplorer(step, elapsed);
    this.particles.update(step);
    this.ripplesSystem.update(step);
  }

  updateHeartseedImmediate() {
    const center = this.tiles.get(hexKey(0, 0));
    if (center) this.heartseed.group.position.set(0, center.currentHeight, 0);
  }

  updateHeartseed(dt, elapsed) {
    const center = this.tiles.get(hexKey(0, 0));
    const base = center ? center.currentHeight : 1.4;
    const heart = this.heartseed;
    heart.group.position.y = damp(heart.group.position.y, base, 9, dt);

    const bloom = clamp(this.bloom / BLOOM_TARGET, 0, 1);
    this.heartBloom = bloom;
    const bob = Math.sin(elapsed * 1.15) * 0.06;
    heart.seedPivot.position.y = 1.06 + bob;
    heart.seedPivot.rotation.y = elapsed * 0.32;
    heart.core.rotation.y = -elapsed * 0.6;
    heart.core.rotation.z = Math.sin(elapsed * 0.6) * 0.2;
    const pulse = 1 + Math.sin(elapsed * 2.2) * 0.03;
    heart.shell.scale.set(0.9 * pulse + bloom * 0.08, 1.65 * pulse + bloom * 0.16, 0.9 * pulse + bloom * 0.08);
    heart.glow.scale.setScalar(3.3 + bloom * 1.8 + Math.sin(elapsed * 1.7) * 0.12);
    heart.glow.material.opacity = 0.5 + bloom * 0.24;
    heart.light.intensity = 1.7 + bloom * 2.4 + (this.won ? 1.5 : 0);
    heart.orbit.rotation.y = -elapsed * 0.28;
    heart.orbit.rotation.z = Math.sin(elapsed * 0.35) * 0.16;
    heart.orbitRing.rotation.z += dt * 0.06;
    heart.orbitRing2.rotation.z -= dt * 0.08;

    heart.shards.forEach((shard, index) => {
      const angle = elapsed * (0.48 + index * 0.08) + index * ((Math.PI * 2) / 3);
      const radius = 0.66 + Math.sin(elapsed * 0.7 + index) * 0.05;
      shard.position.set(Math.cos(angle) * radius, Math.sin(elapsed * 1.2 + index * 2) * 0.08, Math.sin(angle) * radius);
      shard.rotation.y += dt * 0.4;
    });

    if (this.won) {
      this.winPulse = Math.min(1, this.winPulse + dt * 0.55);
      const eased = easeOutCubic(this.winPulse);
      heart.bloomGroup.visible = true;
      heart.bloomGroup.scale.setScalar(0.4 + eased * 1.35);
      heart.bloomGroup.rotation.y = elapsed * 0.18;
      heart.bloomGroup.children.forEach((petal, index) => {
        if (petal.userData.angle !== undefined) {
          const open = 0.28 + eased * 1.2;
          petal.rotation.z = Math.PI / 2 - open + Math.sin(elapsed * 1.2 + index) * 0.03;
          petal.position.y = 0.04 + eased * 0.1;
        }
      });
      heart.beam.visible = true;
      heart.beam.material.opacity = 0.08 + eased * 0.13 + Math.sin(elapsed * 1.4) * 0.015;
      heart.beam.rotation.y = elapsed * 0.12;
      if (Math.random() < dt * 18) {
        const angle = Math.random() * Math.PI * 2;
        const radius = Math.random() * 0.8;
        this.particles.emitTrail(this.toWorldPoint(new THREE.Vector3(Math.cos(angle) * radius, base + 1.3 + Math.random() * 1.4, Math.sin(angle) * radius)), {
          color: Math.random() > 0.5 ? 0xffe4a4 : 0xffc0e8,
          size: 0.045,
          life: 2.4,
        });
      }
    } else {
      heart.bloomGroup.scale.setScalar(0.01);
      heart.bloomGroup.visible = false;
      heart.beam.visible = false;
      if (bloom > 0.3 && Math.random() < dt * 2.5) {
        const angle = Math.random() * Math.PI * 2;
        const radius = Math.random() * 0.5;
        this.particles.emitTrail(this.toWorldPoint(new THREE.Vector3(Math.cos(angle) * radius, base + 1.3, Math.sin(angle) * radius)), {
          color: 0xffd9a0,
          size: 0.035,
          life: 1.8,
        });
      }
    }
  }

  serialize() {
    const tiles = this.tileList.map((tile) => ({
      q: tile.q,
      r: tile.r,
      h: Number(tile.targetHeight.toFixed(2)),
      t: tile.type,
      v: tile.variant,
      d: tile.decor,
      l: tile.decorLevel,
      ds: tile.decorStyle,
      f: tile.feature,
      fs: tile.featureStyle,
      rock: tile.wildRock,
    }));
    return {
      id: this.id,
      name: this.name,
      x: Number(this.origin.x.toFixed(2)),
      z: Number(this.origin.z.toFixed(2)),
      radius: this.radius,
      sparks: Number(this.sparks.toFixed(2)),
      bloom: this.bloom,
      won: this.won,
      stats: this.stats,
      connections: Array.from(this.connections),
      milestonesReached: Array.from(this.milestonesReached),
      tiles,
    };
  }

  save() {
    this.events.persist?.(this);
  }

  rename(name) {
    const trimmed = String(name || '').trim().slice(0, 32);
    if (!trimmed) return false;
    this.name = trimmed;
    this.events.rename?.({ island: this, name: trimmed });
    this.save();
    return true;
  }

  reset() {
    this.events.reset?.();
  }
}

export { ISLAND_NAMES };
