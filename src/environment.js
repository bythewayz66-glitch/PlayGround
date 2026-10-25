import * as THREE from 'three';
import { mulberry32 } from './utils.js';

function makeSoftTexture() {
  const size = 64;
  const canvas = document.createElement('canvas');
  canvas.width = size;
  canvas.height = size;
  const ctx = canvas.getContext('2d');
  const gradient = ctx.createRadialGradient(32, 32, 0, 32, 32, 32);
  gradient.addColorStop(0, 'rgba(255,250,226,0.95)');
  gradient.addColorStop(0.4, 'rgba(255,238,186,0.38)');
  gradient.addColorStop(1, 'rgba(255,225,160,0)');
  ctx.fillStyle = gradient;
  ctx.fillRect(0, 0, size, size);
  const texture = new THREE.CanvasTexture(canvas);
  texture.colorSpace = THREE.SRGBColorSpace;
  return texture;
}

function makeCloudTexture() {
  const size = 256;
  const canvas = document.createElement('canvas');
  canvas.width = size;
  canvas.height = size;
  const ctx = canvas.getContext('2d');
  const random = mulberry32(281);
  ctx.clearRect(0, 0, size, size);
  for (let i = 0; i < 16; i += 1) {
    const x = 50 + random() * 156;
    const y = 84 + random() * 76;
    const radius = 22 + random() * 42;
    const gradient = ctx.createRadialGradient(x, y, 0, x, y, radius);
    gradient.addColorStop(0, 'rgba(255,251,242,0.55)');
    gradient.addColorStop(0.55, 'rgba(255,248,235,0.25)');
    gradient.addColorStop(1, 'rgba(255,246,232,0)');
    ctx.fillStyle = gradient;
    ctx.beginPath();
    ctx.arc(x, y, radius, 0, Math.PI * 2);
    ctx.fill();
  }
  const texture = new THREE.CanvasTexture(canvas);
  texture.colorSpace = THREE.SRGBColorSpace;
  return texture;
}

function makeDistantIsland(random, radius = 1.4) {
  const group = new THREE.Group();
  const bodyMaterial = new THREE.MeshStandardMaterial({
    color: 0x76634e,
    roughness: 1,
    flatShading: true,
  });
  const mossMaterial = new THREE.MeshStandardMaterial({
    color: 0x78906b,
    roughness: 1,
    flatShading: true,
  });
  const leafMaterial = new THREE.MeshStandardMaterial({
    color: 0x67866a,
    roughness: 1,
    flatShading: true,
  });
  const body = new THREE.Mesh(new THREE.ConeGeometry(radius, radius * 2.7, 7, 2), bodyMaterial);
  body.rotation.x = Math.PI;
  body.position.y = -radius * 1.28;
  group.add(body);
  const top = new THREE.Mesh(new THREE.CylinderGeometry(radius * 1.02, radius * 0.92, radius * 0.18, 7), mossMaterial);
  top.position.y = -radius * 0.02;
  group.add(top);
  const trunkGeometry = new THREE.CylinderGeometry(0.035, 0.05, 0.35, 5);
  const crownGeometry = new THREE.IcosahedronGeometry(0.2, 0);
  const treeCount = 1 + Math.floor(random() * 3);
  for (let i = 0; i < treeCount; i += 1) {
    const tree = new THREE.Group();
    const trunk = new THREE.Mesh(trunkGeometry, bodyMaterial);
    trunk.position.y = 0.12;
    const crown = new THREE.Mesh(crownGeometry, leafMaterial);
    crown.position.y = 0.35;
    crown.scale.set(1, 0.85, 1);
    tree.add(trunk, crown);
    const angle = random() * Math.PI * 2;
    const distance = random() * radius * 0.55;
    tree.position.set(Math.cos(angle) * distance, 0.08, Math.sin(angle) * distance);
    tree.scale.setScalar(0.8 + random() * 0.7);
    group.add(tree);
  }
  group.userData.baseY = 0;
  group.userData.phase = random() * Math.PI * 2;
  return group;
}

export class Environment {
  constructor(scene, renderer) {
    this.scene = scene;
    this.renderer = renderer;
    this.clock = 0;
    this.clouds = [];
    this.birds = [];
    this.focus = new THREE.Vector2(0, 0);
    this.buildLights();
    this.buildClouds();
    this.buildMotes();
  }

  buildLights() {
    const hemisphere = new THREE.HemisphereLight(0xdce9ea, 0x8a7153, 1.5);
    this.scene.add(hemisphere);
    this.hemisphere = hemisphere;

    const sun = new THREE.DirectionalLight(0xffe0b4, 2.15);
    sun.position.set(9, 15, 7);
    sun.castShadow = true;
    const size = window.innerWidth < 720 ? 10 : 13;
    sun.shadow.mapSize.set(size === 10 ? 1024 : 2048, size === 10 ? 1024 : 2048);
    sun.shadow.camera.left = -size;
    sun.shadow.camera.right = size;
    sun.shadow.camera.top = size;
    sun.shadow.camera.bottom = -size;
    sun.shadow.camera.near = 1;
    sun.shadow.camera.far = 42;
    sun.shadow.bias = -0.0007;
    sun.shadow.normalBias = 0.035;
    sun.target.position.set(0, 1, 0);
    this.scene.add(sun);
    this.scene.add(sun.target);
    this.sun = sun;

    const fill = new THREE.DirectionalLight(0x9ebfd1, 0.52);
    fill.position.set(-8, 6, -9);
    this.scene.add(fill);
    this.fill = fill;

    const bounce = new THREE.DirectionalLight(0xf2c393, 0.24);
    bounce.position.set(0, -4, 3);
    this.scene.add(bounce);
    this.bounce = bounce;
  }

  setFocus(x, z) {
    this.focus.set(x, z);
    if (this.sun) {
      this.sun.position.set(x + 9, 15, z + 7);
      this.sun.target.position.set(x, 1, z);
      this.sun.target.updateMatrixWorld();
    }
    if (this.fill) this.fill.position.set(x - 8, 6, z - 9);
    if (this.bounce) this.bounce.position.set(x, -4, z + 3);
  }

  setWorldView(active) {
    for (const cloud of this.clouds) cloud.visible = !active;
    for (const bird of this.birds) bird.visible = !active;
  }

  setMood(mood) {
    if (!this.sun) return;
    const presets = {
      dawn: { sun: 0xffe0b4, sunI: 2.15, sky: 0xdce9ea, ground: 0x8a7153, hemiI: 1.5, fill: 0x9ebfd1, fillI: 0.52, bounce: 0xf2c393, bounceI: 0.24, exposure: 0.98, fog: 0xd8d1c3 },
      noon: { sun: 0xfff7df, sunI: 2.8, sky: 0xe3f1f2, ground: 0x9a8562, hemiI: 1.75, fill: 0xa9cde0, fillI: 0.62, bounce: 0xf6dfb6, bounceI: 0.28, exposure: 1.02, fog: 0xd9e1dc },
      golden: { sun: 0xffc778, sunI: 2.55, sky: 0xf2dfc5, ground: 0x9d7551, hemiI: 1.3, fill: 0xb6b4c5, fillI: 0.42, bounce: 0xe6a56c, bounceI: 0.3, exposure: 0.98, fog: 0xdfc7aa },
      dusk: { sun: 0xff9a66, sunI: 1.85, sky: 0xbfaebd, ground: 0x745b51, hemiI: 0.9, fill: 0x8598b9, fillI: 0.5, bounce: 0xc77e68, bounceI: 0.24, exposure: 0.9, fog: 0xb59c9e },
      night: { sun: 0xa9c3e8, sunI: 0.92, sky: 0x506d8a, ground: 0x3b4148, hemiI: 0.46, fill: 0x6686ad, fillI: 0.38, bounce: 0x6d7a8f, bounceI: 0.13, exposure: 0.76, fog: 0x43576b },
    };
    const preset = presets[mood] || presets.dawn;
    this.sun.color.setHex(preset.sun);
    this.sun.intensity = preset.sunI;
    this.hemisphere.color.setHex(preset.sky);
    this.hemisphere.groundColor.setHex(preset.ground);
    this.hemisphere.intensity = preset.hemiI;
    this.fill.color.setHex(preset.fill);
    this.fill.intensity = preset.fillI;
    this.bounce.color.setHex(preset.bounce);
    this.bounce.intensity = preset.bounceI;
    this.renderer.toneMappingExposure = preset.exposure;
    if (this.scene.fog) this.scene.fog.color.setHex(preset.fog);
    for (const cloud of this.clouds) {
      cloud.material.opacity = mood === 'night' ? 0.15 : mood === 'dusk' ? 0.28 : 0.3;
    }
  }

  buildClouds() {
    const texture = makeCloudTexture();
    const random = mulberry32(921);
    for (let i = 0; i < 11; i += 1) {
      const radius = 7 + random() * 14;
      const angle = (i / 11) * Math.PI * 2 + random() * 0.5;
      const material = new THREE.SpriteMaterial({
        map: texture,
        color: 0xfff8ec,
        transparent: true,
        opacity: 0.3 + random() * 0.22,
        depthWrite: false,
        fog: true,
      });
      const cloud = new THREE.Sprite(material);
      const width = 6 + random() * 7;
      cloud.scale.set(width, width * (0.34 + random() * 0.18), 1);
      cloud.position.set(
        Math.cos(angle) * radius,
        -8.4 + random() * 2.3,
        Math.sin(angle) * radius,
      );
      cloud.userData = {
        angle,
        radius,
        y: cloud.position.y,
        speed: 0.004 + random() * 0.008,
        phase: random() * Math.PI * 2,
      };
      cloud.renderOrder = 2;
      this.scene.add(cloud);
      this.clouds.push(cloud);
    }
  }

  buildBirds() {
    const material = new THREE.MeshBasicMaterial({
      color: 0x566158,
      side: THREE.DoubleSide,
      transparent: true,
      opacity: 0.5,
      depthWrite: false,
      fog: false,
    });
    const wingGeometry = new THREE.BufferGeometry();
    wingGeometry.setAttribute(
      'position',
      new THREE.Float32BufferAttribute([0, 0, 0, -0.52, 0.08, 0.12, 0, 0, 0.34], 3),
    );
    wingGeometry.computeVertexNormals();

    const random = mulberry32(761);
    for (let i = 0; i < 7; i += 1) {
      const group = new THREE.Group();
      const left = new THREE.Mesh(wingGeometry, material);
      left.scale.x = 1;
      const right = new THREE.Mesh(wingGeometry, material);
      right.scale.x = -1;
      group.add(left, right);
      const radius = 11 + random() * 10;
      group.userData = {
        radius,
        y: 5.4 + random() * 4.2,
        angle: random() * Math.PI * 2,
        speed: 0.055 + random() * 0.06,
        flap: random() * Math.PI * 2,
        flapSpeed: 5.5 + random() * 3,
        left,
        right,
        bob: random() * Math.PI * 2,
      };
      group.scale.setScalar(0.44 + random() * 0.3);
      this.scene.add(group);
      this.birds.push(group);
    }
  }

  buildMotes() {
    const random = mulberry32(7781);
    const count = 150;
    const positions = new Float32Array(count * 3);
    const seeds = [];
    for (let i = 0; i < count; i += 1) {
      const angle = random() * Math.PI * 2;
      const radius = 1.6 + random() * 8.5;
      const y = 0.4 + random() * 6.5;
      positions[i * 3] = Math.cos(angle) * radius;
      positions[i * 3 + 1] = y;
      positions[i * 3 + 2] = Math.sin(angle) * radius;
      seeds.push({ angle, radius, y, speed: 0.008 + random() * 0.02, phase: random() * Math.PI * 2, drift: 0.15 + random() * 0.4 });
    }
    const geometry = new THREE.BufferGeometry();
    geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
    const material = new THREE.PointsMaterial({
      size: 0.085,
      map: makeSoftTexture(),
      color: 0xffe7b1,
      transparent: true,
      opacity: 0.8,
      alphaTest: 0.03,
      depthWrite: false,
      blending: THREE.AdditiveBlending,
      sizeAttenuation: true,
      fog: false,
    });
    this.motes = new THREE.Points(geometry, material);
    this.motes.renderOrder = 8;
    this.scene.add(this.motes);
    this.moteSeeds = seeds;
  }

  update(dt, elapsed) {
    this.clock = elapsed;
    for (const cloud of this.clouds) {
      const data = cloud.userData;
      const angle = data.angle + elapsed * data.speed;
      cloud.position.x = this.focus.x + Math.cos(angle) * data.radius;
      cloud.position.z = this.focus.y + Math.sin(angle) * data.radius;
      cloud.position.y = data.y + Math.sin(elapsed * 0.1 + data.phase) * 0.2;
    }

    for (const bird of this.birds) {
      const data = bird.userData;
      data.angle += dt * data.speed;
      data.flap += dt * data.flapSpeed;
      const x = this.focus.x + Math.cos(data.angle) * data.radius;
      const z = this.focus.y + Math.sin(data.angle) * data.radius;
      bird.position.set(x, data.y + Math.sin(elapsed * 0.6 + data.bob) * 0.22, z);
      bird.rotation.y = -data.angle + Math.PI / 2;
      const flap = Math.sin(data.flap) * 0.5 + 0.1;
      data.left.rotation.z = flap;
      data.right.rotation.z = -flap;
    }

    const positions = this.motes.geometry.attributes.position.array;
    for (let i = 0; i < this.moteSeeds.length; i += 1) {
      const seed = this.moteSeeds[i];
      const i3 = i * 3;
      const angle = seed.angle + elapsed * seed.speed;
      positions[i3] = this.focus.x + Math.cos(angle) * seed.radius + Math.sin(elapsed * 0.2 + seed.phase) * seed.drift;
      positions[i3 + 1] = seed.y + Math.sin(elapsed * 0.35 + seed.phase) * 0.3;
      positions[i3 + 2] = this.focus.y + Math.sin(angle) * seed.radius + Math.cos(elapsed * 0.2 + seed.phase) * seed.drift;
    }
    this.motes.geometry.attributes.position.needsUpdate = true;
  }
}
