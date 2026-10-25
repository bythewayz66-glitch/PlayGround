import * as THREE from 'three';

const particleVertexShader = /* glsl */ `
  attribute float aSize;
  attribute float aAlpha;
  attribute vec3 aColor;
  varying vec3 vColor;
  varying float vAlpha;
  uniform float uScale;

  void main() {
    vColor = aColor;
    vAlpha = aAlpha;
    vec4 mvPosition = modelViewMatrix * vec4(position, 1.0);
    gl_PointSize = aSize * uScale / max(0.1, -mvPosition.z);
    gl_Position = projectionMatrix * mvPosition;
  }
`;

const particleFragmentShader = /* glsl */ `
  varying vec3 vColor;
  varying float vAlpha;

  void main() {
    vec2 uv = gl_PointCoord - vec2(0.5);
    float d = length(uv);
    float core = smoothstep(0.5, 0.04, d);
    float sparkle = smoothstep(0.11, 0.0, d);
    float a = (core * 0.75 + sparkle) * vAlpha;
    if (a < 0.004) discard;
    gl_FragColor = vec4(vColor, a);
  }
`;

export class ParticleSystem {
  constructor(scene, max = 900) {
    this.max = max;
    this.cursor = 0;
    this.positions = new Float32Array(max * 3);
    this.colors = new Float32Array(max * 3);
    this.sizes = new Float32Array(max);
    this.alphas = new Float32Array(max);
    this.velocities = new Float32Array(max * 3);
    this.life = new Float32Array(max);
    this.maxLife = new Float32Array(max);
    this.drag = new Float32Array(max);
    this.gravity = new Float32Array(max);
    this.origin = new Float32Array(max * 3);

    const geometry = new THREE.BufferGeometry();
    const position = new THREE.BufferAttribute(this.positions, 3);
    const color = new THREE.BufferAttribute(this.colors, 3);
    const size = new THREE.BufferAttribute(this.sizes, 1);
    const alpha = new THREE.BufferAttribute(this.alphas, 1);
    position.setUsage(THREE.DynamicDrawUsage);
    color.setUsage(THREE.DynamicDrawUsage);
    size.setUsage(THREE.DynamicDrawUsage);
    alpha.setUsage(THREE.DynamicDrawUsage);
    geometry.setAttribute('position', position);
    geometry.setAttribute('aColor', color);
    geometry.setAttribute('aSize', size);
    geometry.setAttribute('aAlpha', alpha);

    this.uniforms = { uScale: { value: 800 } };
    const material = new THREE.ShaderMaterial({
      uniforms: this.uniforms,
      vertexShader: particleVertexShader,
      fragmentShader: particleFragmentShader,
      transparent: true,
      depthWrite: false,
      blending: THREE.AdditiveBlending,
    });

    this.points = new THREE.Points(geometry, material);
    this.points.frustumCulled = false;
    this.points.renderOrder = 20;
    scene.add(this.points);
    this.geometry = geometry;
  }

  setViewport(height, fov) {
    const physicalHeight = height * Math.min(window.devicePixelRatio || 1, 2);
    this.uniforms.uScale.value = physicalHeight / (2 * Math.tan((fov * Math.PI) / 360));
  }

  emitBurst(origin, options = {}) {
    const {
      count = 24,
      color = 0xffd28a,
      color2 = null,
      speed = 1.4,
      spread = 0.22,
      size = 0.075,
      sizeVariance = 0.06,
      life = 1.1,
      lifeVariance = 0.6,
      gravity = -1.1,
      drag = 1.8,
      upward = 0.8,
      ring = false,
    } = options;

    const c1 = new THREE.Color(color);
    const c2 = color2 !== null ? new THREE.Color(color2) : c1;

    for (let i = 0; i < count; i += 1) {
      const index = this.cursor;
      this.cursor = (this.cursor + 1) % this.max;
      const i3 = index * 3;
      const angle = Math.random() * Math.PI * 2;
      const radial = (ring ? 0.75 + Math.random() * 0.35 : Math.random()) * spread;
      this.positions[i3] = origin.x + Math.cos(angle) * radial;
      this.positions[i3 + 1] = origin.y + (Math.random() - 0.35) * spread * 0.7;
      this.positions[i3 + 2] = origin.z + Math.sin(angle) * radial;
      this.origin[i3] = this.positions[i3];
      this.origin[i3 + 1] = this.positions[i3 + 1];
      this.origin[i3 + 2] = this.positions[i3 + 2];

      const outward = ring ? 0.6 + Math.random() * 0.8 : Math.random() * 0.55;
      this.velocities[i3] = Math.cos(angle) * outward * speed;
      this.velocities[i3 + 1] = (Math.random() * 0.8 + upward) * speed;
      this.velocities[i3 + 2] = Math.sin(angle) * outward * speed;

      const mixed = c1.clone().lerp(c2, Math.random());
      this.colors[i3] = mixed.r;
      this.colors[i3 + 1] = mixed.g;
      this.colors[i3 + 2] = mixed.b;

      this.sizes[index] = Math.max(0.015, size + (Math.random() - 0.5) * sizeVariance);
      const particleLife = Math.max(0.2, life + (Math.random() - 0.5) * lifeVariance);
      this.life[index] = particleLife;
      this.maxLife[index] = particleLife;
      this.alphas[index] = 1;
      this.drag[index] = drag;
      this.gravity[index] = gravity;
    }
  }

  emitTrail(origin, options = {}) {
    const { color = 0xffd28a, size = 0.04, life = 1.4 } = options;
    const index = this.cursor;
    this.cursor = (this.cursor + 1) % this.max;
    const i3 = index * 3;
    this.positions[i3] = origin.x + (Math.random() - 0.5) * 0.2;
    this.positions[i3 + 1] = origin.y;
    this.positions[i3 + 2] = origin.z + (Math.random() - 0.5) * 0.2;
    this.velocities[i3] = (Math.random() - 0.5) * 0.08;
    this.velocities[i3 + 1] = 0.12 + Math.random() * 0.15;
    this.velocities[i3 + 2] = (Math.random() - 0.5) * 0.08;
    const c = new THREE.Color(color);
    this.colors[i3] = c.r;
    this.colors[i3 + 1] = c.g;
    this.colors[i3 + 2] = c.b;
    this.sizes[index] = size * (0.6 + Math.random() * 0.8);
    this.life[index] = life * (0.6 + Math.random() * 0.8);
    this.maxLife[index] = this.life[index];
    this.alphas[index] = 0.9;
    this.drag[index] = 0.4;
    this.gravity[index] = 0.04;
  }

  update(dt) {
    const positionAttribute = this.geometry.attributes.position;
    const colorAttribute = this.geometry.attributes.aColor;
    const sizeAttribute = this.geometry.attributes.aSize;
    const alphaAttribute = this.geometry.attributes.aAlpha;

    for (let i = 0; i < this.max; i += 1) {
      if (this.life[i] <= 0) {
        if (this.alphas[i] !== 0) {
          this.alphas[i] = 0;
          alphaAttribute.needsUpdate = true;
        }
        continue;
      }
      const i3 = i * 3;
      const t = 1 - this.life[i] / this.maxLife[i];
      this.life[i] -= dt;
      const drag = Math.exp(-this.drag[i] * dt);
      this.velocities[i3] *= drag;
      this.velocities[i3 + 1] = this.velocities[i3 + 1] * drag + this.gravity[i] * dt;
      this.velocities[i3 + 2] *= drag;
      this.positions[i3] += this.velocities[i3] * dt;
      this.positions[i3 + 1] += this.velocities[i3 + 1] * dt;
      this.positions[i3 + 2] += this.velocities[i3 + 2] * dt;
      this.alphas[i] = this.life[i] > 0 ? Math.pow(1 - t, 1.4) : 0;
    }

    positionAttribute.needsUpdate = true;
    colorAttribute.needsUpdate = true;
    sizeAttribute.needsUpdate = true;
    alphaAttribute.needsUpdate = true;
  }
}

const rippleVertexShader = /* glsl */ `
  varying vec2 vUv;
  void main() {
    vUv = uv;
    gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
  }
`;

const rippleFragmentShader = /* glsl */ `
  varying vec2 vUv;
  uniform vec3 uColor;
  uniform float uOpacity;
  void main() {
    vec2 p = vUv - 0.5;
    float d = length(p);
    float ring = smoothstep(0.5, 0.43, d) * smoothstep(0.32, 0.4, d);
    float halo = smoothstep(0.5, 0.08, d) * 0.2;
    float a = (ring * 0.9 + halo) * uOpacity;
    gl_FragColor = vec4(uColor, a);
  }
`;

export class RippleSystem {
  constructor(scene, poolSize = 14) {
    this.scene = scene;
    this.ripples = [];
    const geometry = new THREE.PlaneGeometry(2, 2);
    for (let i = 0; i < poolSize; i += 1) {
      const material = new THREE.ShaderMaterial({
        vertexShader: rippleVertexShader,
        fragmentShader: rippleFragmentShader,
        uniforms: {
          uColor: { value: new THREE.Color(0xffd28a) },
          uOpacity: { value: 0 },
        },
        transparent: true,
        depthWrite: false,
        side: THREE.DoubleSide,
        blending: THREE.AdditiveBlending,
      });
      const mesh = new THREE.Mesh(geometry, material);
      mesh.rotation.x = -Math.PI / 2;
      mesh.visible = false;
      mesh.renderOrder = 16;
      scene.add(mesh);
      this.ripples.push({ mesh, material, life: 0, duration: 1, startScale: 0.4, endScale: 1.4 });
    }
    this.cursor = 0;
  }

  spawn(position, options = {}) {
    const { color = 0xffd28a, scale = 1.25, duration = 1.2, startScale = 0.25 } = options;
    const ripple = this.ripples[this.cursor];
    this.cursor = (this.cursor + 1) % this.ripples.length;
    ripple.mesh.position.set(position.x, position.y + 0.025, position.z);
    ripple.material.uniforms.uColor.value.set(color);
    ripple.material.uniforms.uOpacity.value = 0;
    ripple.duration = duration;
    ripple.life = duration;
    ripple.startScale = startScale;
    ripple.endScale = scale;
    ripple.mesh.scale.setScalar(startScale);
    ripple.mesh.visible = true;
  }

  update(dt) {
    for (const ripple of this.ripples) {
      if (ripple.life <= 0) continue;
      ripple.life -= dt;
      const progress = 1 - Math.max(0, ripple.life) / ripple.duration;
      const eased = 1 - Math.pow(1 - progress, 3);
      const scale = ripple.startScale + (ripple.endScale - ripple.startScale) * eased;
      ripple.mesh.scale.setScalar(scale);
      ripple.material.uniforms.uOpacity.value = Math.pow(1 - progress, 1.7);
      if (ripple.life <= 0) {
        ripple.mesh.visible = false;
      }
    }
  }
}
