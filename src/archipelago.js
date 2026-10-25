import * as THREE from 'three';
import { Island, ISLAND_NAMES } from './world.js';
import { Planet } from './planet.js';
import { clamp } from './utils.js';

const SAVE_KEY = 'openwork-world-v3';
const LEGACY_KEY = 'openwork-world-v2';
const BRIDGE_DECK = new THREE.MeshStandardMaterial({ color: 0x9a6b43, roughness: 0.98, flatShading: true });
const BRIDGE_EDGE = new THREE.MeshStandardMaterial({ color: 0x765037, roughness: 1, flatShading: true });
const BRIDGE_ROPE = new THREE.LineBasicMaterial({ color: 0xd0b384, transparent: true, opacity: 0.85 });

function islandEdge(island) {
  return 1.6 * island.radius + 1.25;
}

function islandPosition(index) {
  const angle = index * 2.39996 + 0.45;
  const distance = 12.4 + (index % 3) * 2.1;
  return {
    x: Math.cos(angle) * distance,
    z: Math.sin(angle) * distance,
  };
}

export class World {
  constructor(scene, events = {}) {
    this.scene = scene;
    this.events = events;
    this.islands = new Map();
    this.activeId = null;
    this.mood = 'dawn';
    this.time = 0;
    this.saveClock = 0;
    this.bridgeGroup = new THREE.Group();
    this.bridgeGroup.name = 'openwork-bridges';
    this.scene.add(this.bridgeGroup);
    this.planet = new Planet(scene);
    this.planet.group.visible = false;
    this.load();
    this.planet.syncAll(this.islands.values());
    this.bindEvents();
  }

  get active() {
    return this.islands.get(this.activeId) || [...this.islands.values()][0] || null;
  }

  get radius() {
    return this.active?.radius ?? 2;
  }

  get sparks() {
    return this.active?.sparks ?? 0;
  }

  get bloom() {
    return this.active?.bloom ?? 0;
  }

  get won() {
    return this.active?.won ?? false;
  }

  get stats() {
    return this.active?.stats ?? { actions: 0, groves: 0, prisms: 0, hexes: 0, residents: 0 };
  }

  get tiles() {
    return this.active?.tiles ?? new Map();
  }

  get particles() {
    return this.active?.particles ?? null;
  }

  get heartseed() {
    return this.active?.heartseed ?? null;
  }

  load() {
    let saved = null;
    try {
      const raw = localStorage.getItem(SAVE_KEY);
      if (raw) saved = JSON.parse(raw);
    } catch (error) {
      console.warn('Could not restore the archipelago', error);
    }

    if (saved?.v === 3 && Array.isArray(saved.islands) && saved.islands.length) {
      saved.islands.forEach((islandData, index) => {
        const island = new Island(this.scene, {}, {
          id: islandData.id || `isle-${index}`,
          name: islandData.name || ISLAND_NAMES[index % ISLAND_NAMES.length],
          index,
          x: islandData.x || 0,
          z: islandData.z || 0,
          connections: islandData.connections || [],
          saved: islandData,
        });
        this.islands.set(island.id, island);
      });
      this.activeId = this.islands.has(saved.activeId) ? saved.activeId : [...this.islands.keys()][0];
      if (saved.mood) this.mood = saved.mood;
    } else {
      let legacy = null;
      try {
        const raw = localStorage.getItem(LEGACY_KEY);
        if (raw) legacy = JSON.parse(raw);
      } catch {
        // Ignore malformed legacy saves.
      }
      const island = new Island(this.scene, {}, {
        id: 'first-light',
        name: ISLAND_NAMES[0],
        index: 0,
        x: 0,
        z: 0,
        saved: legacy && Array.isArray(legacy.tiles) ? legacy : null,
      });
      this.islands.set(island.id, island);
      this.activeId = island.id;
    }

    for (const island of this.islands.values()) island.setActive(island.id === this.activeId);
    this.rebuildBridges();
  }

  bindEvents(events = null) {
    if (events) this.events = { ...this.events, ...events };
    for (const [id, island] of this.islands) {
      island.setEvents({
        state: () => this.events.state?.(this.getState()),
        action: (event) => {
          this.events.action?.({ ...event, islandId: id });
          this.save();
        },
        denied: (tool, tile) => this.events.denied?.(tool, tile),
        toast: (message, tone) => this.events.toast?.(message, tone),
        expansion: (event) => this.events.expansion?.(event),
        win: (event) => this.events.win?.(event),
        persist: () => this.save(),
        rename: () => this.events.state?.(this.getState()),
        reset: () => this.reset(),
      });
    }
  }

  setEvents(events) {
    this.events = { ...this.events, ...events };
    this.bindEvents();
  }

  setActive(id, options = {}) {
    if (!this.islands.has(id) || id === this.activeId) return false;
    this.active?.setActive(false);
    this.activeId = id;
    this.active?.setActive(true);
    this.save();
    if (options.focus !== false) this.events.focus?.(this.getState());
    return true;
  }

  isConnected(a, b) {
    return Boolean(a?.connections?.has(b?.id) && b?.connections?.has(a?.id));
  }

  connectNearest() {
    const from = this.active;
    if (!from) return null;
    const candidates = [...this.islands.values()]
      .filter((island) => island.id !== from.id && !this.isConnected(from, island))
      .sort((a, b) => from.origin.distanceTo(a.origin) - from.origin.distanceTo(b.origin));
    const to = candidates[0];
    if (!to) {
      this.events.toast?.('Every isle within reach is already connected.', 'gold');
      return null;
    }
    from.connections.add(to.id);
    to.connections.add(from.id);
    this.rebuildBridges();
    this.save();
    this.events.bridge?.({ from, to });
    return { from, to };
  }

  disconnectNearest() {
    const from = this.active;
    if (!from || !from.connections.size) {
      this.events.toast?.('No bridge leaves this isle yet.', 'gold');
      return null;
    }
    const toId = [...from.connections][0];
    const to = this.islands.get(toId);
    from.connections.delete(toId);
    to?.connections.delete(from.id);
    this.rebuildBridges();
    this.save();
    this.events.toast?.('The bridge was taken back by the wind.');
    return { from, to };
  }

  rebuildBridges() {
    while (this.bridgeGroup.children.length) {
      const child = this.bridgeGroup.children.pop();
      child.traverse?.((node) => {
        if (node.geometry) node.geometry.dispose();
      });
    }
    const seen = new Set();
    for (const island of this.islands.values()) {
      for (const otherId of island.connections) {
        const other = this.islands.get(otherId);
        if (!other) continue;
        const key = [island.id, other.id].sort().join('|');
        if (seen.has(key)) continue;
        seen.add(key);
        this.bridgeGroup.add(this.createBridge(island, other));
      }
    }
  }

  createBridge(a, b) {
    const group = new THREE.Group();
    group.name = `bridge-${a.id}-${b.id}`;
    const direction = b.origin.clone().sub(a.origin).setY(0).normalize();
    const start = a.origin.clone().add(direction.clone().multiplyScalar(islandEdge(a) * 0.82));
    const end = b.origin.clone().sub(direction.clone().multiplyScalar(islandEdge(b) * 0.82));
    const startY = 0.52;
    const endY = 0.58;
    start.y = startY;
    end.y = endY;
    const span = start.distanceTo(end);
    const steps = Math.max(24, Math.round(span * 4));
    const deckWidth = 0.46;
    const planks = new THREE.InstancedMesh(new THREE.BoxGeometry(1, 1, 1), BRIDGE_DECK, steps);
    const dummy = new THREE.Object3D();
    const points = [];
    for (let i = 0; i < steps; i += 1) {
      const t = i / (steps - 1);
      const x = THREE.MathUtils.lerp(start.x, end.x, t);
      const z = THREE.MathUtils.lerp(start.z, end.z, t);
      const y = THREE.MathUtils.lerp(startY, endY, t) - Math.sin(t * Math.PI) * 0.5;
      const tangent = new THREE.Vector3(
        (end.x - start.x) / steps,
        (endY - startY) / steps - (Math.cos(t * Math.PI) * Math.PI * 0.5) / steps,
        (end.z - start.z) / steps,
      ).normalize();
      dummy.position.set(x, y, z);
      dummy.rotation.y = Math.atan2(-tangent.z, tangent.x);
      dummy.rotation.z = Math.atan2(tangent.y, Math.hypot(tangent.x, tangent.z)) * 0.5;
      dummy.scale.set((span / steps) * 1.16, 0.055, deckWidth);
      dummy.updateMatrix();
      planks.setMatrixAt(i, dummy.matrix);
      points.push(new THREE.Vector3(x, y, z));
    }
    planks.instanceMatrix.needsUpdate = true;
    planks.castShadow = true;
    planks.receiveShadow = true;
    group.add(planks);

    const leftPoints = [];
    const rightPoints = [];
    const side = new THREE.Vector3(-direction.z, 0, direction.x);
    for (const point of points) {
      leftPoints.push(point.clone().addScaledVector(side, -deckWidth * 0.52).add(new THREE.Vector3(0, 0.09, 0)));
      rightPoints.push(point.clone().addScaledVector(side, deckWidth * 0.52).add(new THREE.Vector3(0, 0.09, 0)));
    }
    for (const ropePoints of [leftPoints, rightPoints]) {
      const rail = new THREE.Line(new THREE.BufferGeometry().setFromPoints(ropePoints), BRIDGE_ROPE);
      group.add(rail);
    }

    for (let i = 3; i < points.length - 3; i += 8) {
      const post = new THREE.Mesh(new THREE.BoxGeometry(0.045, 0.38, 0.045), BRIDGE_EDGE);
      post.position.copy(points[i]).add(new THREE.Vector3(0, 0.12, 0));
      group.add(post);
      for (const offset of [-deckWidth * 0.52, deckWidth * 0.52]) {
        const pair = post.clone();
        pair.position.addScaledVector(side, offset);
        group.add(pair);
      }
    }

    for (const [point, island] of [[start, a], [end, b]]) {
      const lantern = new THREE.Mesh(new THREE.CylinderGeometry(0.055, 0.07, 0.12, 6), BRIDGE_DECK);
      lantern.position.copy(point).add(new THREE.Vector3(0, 0.22, 0));
      group.add(lantern);
      const glow = new THREE.PointLight(0xffc27a, 0.85, 3.8, 2);
      glow.position.copy(point).add(new THREE.Vector3(0, 0.42, 0));
      group.add(glow);
    }

    return group;
  }

  newIsland(options = {}) {
    const index = this.islands.size;
    const position = options.position || this.findIslandPosition(index);
    const name = options.name || ISLAND_NAMES[index % ISLAND_NAMES.length];
    const island = new Island(this.scene, {}, {
      id: `isle-${Date.now().toString(36)}-${index}`,
      name,
      index,
      x: position.x,
      z: position.z,
    });
    this.islands.set(island.id, island);
    island.setActive(false);
    this.bindEvents();
    if (options.focus !== false) {
      this.active?.setActive(false);
      this.activeId = island.id;
      island.setActive(true);
      this.events.focus?.(this.getState());
    }
    this.planet.syncIsland(island);
    this.rebuildBridges();
    this.save();
    this.events.newIsland?.(island);
    return island;
  }

  findIslandPosition(index) {
    let candidate = islandPosition(index);
    let attempts = 0;
    while (attempts < 18) {
      let clear = true;
      for (const island of this.islands.values()) {
        const distance = Math.hypot(candidate.x - island.origin.x, candidate.z - island.origin.z);
        if (distance < 11.5) {
          clear = false;
          break;
        }
      }
      if (clear) break;
      const angle = index * 2.39996 + 0.45 + (attempts + 1) * 0.62;
      const distance = 12.4 + (attempts % 4) * 1.7;
      candidate = { x: Math.cos(angle) * distance, z: Math.sin(angle) * distance };
      attempts += 1;
    }
    return candidate;
  }

  getActiveCenter() {
    return this.active?.origin.clone() || new THREE.Vector3();
  }

  getCameraTarget() {
    return this.getActiveCenter();
  }

  getWorldBoundsRadius() {
    let radius = 0;
    for (const island of this.islands.values()) {
      radius = Math.max(radius, island.origin.length() + islandEdge(island));
    }
    return radius;
  }

  getIslandList() {
    return [...this.islands.values()].map((island) => ({
      id: island.id,
      name: island.name,
      active: island.id === this.activeId,
      hexes: island.tileList.length,
      bloom: island.bloom,
      won: island.won,
      residents: island.stats.residents,
      connections: [...island.connections],
    }));
  }

  setWorldView(active) {
    for (const island of this.islands.values()) island.setWorldVisible(!active);
    this.bridgeGroup.visible = !active;
    this.planet.group.visible = active;
  }

  getState() {
    const base = this.active?.getState() || {};
    return {
      ...base,
      mood: this.mood,
      islandCount: this.islands.size,
      activeIslandId: this.activeId,
      islands: this.getIslandList(),
      sphere: this.planet.getStats(),
    };
  }

  renameActiveIsland(name) {
    return this.active?.rename(name) ?? false;
  }

  setMood(mood) {
    this.mood = mood;
    this.save();
    this.events.mood?.(mood);
  }

  place(toolName, tile) {
    const result = this.active?.place(toolName, tile) ?? { ok: false, reason: 'missing' };
    if (result.ok) this.planet.syncIsland(this.active);
    return result;
  }

  pick(clientX, clientY, camera, canvas) {
    return this.active?.pick(clientX, clientY, camera, canvas) ?? null;
  }

  highlight(tile) {
    this.active?.highlight(tile);
  }

  setActiveState(active) {
    this.active?.setActive(active);
  }

  beginWalk() {
    return this.active?.startWalk() ?? false;
  }

  endWalk() {
    this.active?.stopWalk();
  }

  moveExplorer(dx, dz, dt) {
    this.active?.moveExplorer(dx, dz, dt);
  }

  getExplorerWorldPosition() {
    return this.active?.getExplorerWorldPosition() || this.getActiveCenter();
  }

  getWalkStatus() {
    return this.active?.getWalkStatus() || this.active?.name || 'The isle';
  }

  update(dt, elapsed) {
    this.time = elapsed;
    for (const island of this.islands.values()) island.update(dt, elapsed);
    this.planet.update(dt, elapsed);
    this.saveClock += dt;
    if (this.saveClock > 12) {
      this.saveClock = 0;
      this.save();
    }
  }

  save() {
    try {
      const islands = [...this.islands.values()].map((island) => island.serialize());
      localStorage.setItem(
        SAVE_KEY,
        JSON.stringify({
          v: 3,
          activeId: this.activeId,
          mood: this.mood,
          islands,
          savedAt: Date.now(),
        }),
      );
    } catch {
      // Storage can be unavailable in private mode.
    }
  }

  reset() {
    localStorage.removeItem(SAVE_KEY);
    localStorage.removeItem(LEGACY_KEY);
  }
}
