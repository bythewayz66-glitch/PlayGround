import * as THREE from 'three';
import { BLOOM_TARGET } from './world.js';
import { TOOLS, TOOL_CATEGORIES, TOOL_ICONS } from './tools.js';
import { World } from './archipelago.js';
import { Environment } from './environment.js';
import { Soundscape } from './audio.js';
import { clamp, damp, hexKey, prefersReducedMotion } from './utils.js';

const canvas = document.getElementById('world');
const loading = document.getElementById('loading');
const startScreen = document.getElementById('startScreen');
const startButton = document.getElementById('startBtn');
const game = document.getElementById('game');
const winScreen = document.getElementById('winScreen');
const keepBuildingButton = document.getElementById('keepBuildingBtn');
const helpBackdrop = document.getElementById('helpBackdrop');
const helpButton = document.getElementById('helpBtn');
const helpClose = document.getElementById('helpClose');
const resetButton = document.getElementById('resetBtn');
const helpSoundButton = document.getElementById('helpSoundBtn');
const soundButton = document.getElementById('soundBtn');
const walkButton = document.getElementById('walkBtn');
const walkUi = document.getElementById('walkUi');
const walkStatus = document.getElementById('walkStatus');
const joystick = document.getElementById('joystick');
const joystickKnob = document.getElementById('joystickKnob');
const studioButton = document.getElementById('studioBtn');
const studioBackdrop = document.getElementById('studioBackdrop');
const studioClose = document.getElementById('studioClose');
const islandNameInput = document.getElementById('islandNameInput');
const islandNameSave = document.getElementById('islandNameSave');
const islandList = document.getElementById('islandList');
const islandCount = document.getElementById('islandCount');
const newIslandButton = document.getElementById('newIslandBtn');
const bridgeButton = document.getElementById('bridgeBtn');
const studioWalkButton = document.getElementById('studioWalkBtn');
const worldName = document.getElementById('worldName');
const app = document.getElementById('app');
const moodButtons = [...document.querySelectorAll('.mood')];
const sparkValue = document.getElementById('sparkValue');
const goalFill = document.getElementById('goalFill');
const goalPct = document.getElementById('goalPct');
const goalLabel = document.getElementById('goalLabel');
const goalEyebrow = document.getElementById('goalEyebrow');
const worldViewNote = document.getElementById('worldViewNote');
const worldSub = document.getElementById('worldSub');
const sphereChip = document.getElementById('sphereChip');
const sphereMeta = document.getElementById('sphereMeta');
const sphereAction = document.getElementById('sphereAction');
const toolDock = document.getElementById('toolDock');
const toolPages = document.getElementById('toolPages');
const toolPageName = document.getElementById('toolPageName');
const toolPageIndex = document.getElementById('toolPageIndex');
const hintPill = document.getElementById('hintPill');
const hintText = document.getElementById('hintText');
const orbitHint = document.getElementById('orbitHint');
const toasts = document.getElementById('toasts');
const floaters = document.getElementById('floaters');
let toolButtons = [];
let currentPage = 0;

const reducedMotion = prefersReducedMotion();
const isTouch = matchMedia('(pointer: coarse)').matches;

const renderer = new THREE.WebGLRenderer({
  canvas,
  antialias: true,
  alpha: true,
  powerPreference: 'high-performance',
  preserveDrawingBuffer: false,
});
renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 2));
renderer.setSize(window.innerWidth, window.innerHeight);
renderer.outputColorSpace = THREE.SRGBColorSpace;
renderer.toneMapping = THREE.ACESFilmicToneMapping;
renderer.toneMappingExposure = 0.98;
renderer.shadowMap.enabled = true;
renderer.shadowMap.type = THREE.PCFShadowMap;
renderer.setClearColor(0x000000, 0);

const gl = renderer.getContext();
const debugInfo = gl.getExtension('WEBGL_debug_renderer_info');
const rendererName = debugInfo ? String(gl.getParameter(debugInfo.UNMASKED_RENDERER_WEBGL)) : '';
const softwareRenderer = /swiftshader|software|llvmpipe|mesa offscreen/i.test(rendererName);
if (softwareRenderer) document.documentElement.classList.add('software-renderer');

const scene = new THREE.Scene();
scene.fog = new THREE.Fog(0xd8d1c3, 25, 90);

const camera = new THREE.PerspectiveCamera(
  window.innerWidth < 900 ? 55 : 37,
  window.innerWidth / window.innerHeight,
  0.1,
  620,
);

const environment = new Environment(scene, renderer);
const sound = new Soundscape();
const world = new World(scene);

const cameraState = {
  target: new THREE.Vector3(0, 0, 0),
  targetGoal: new THREE.Vector3(0, 0, 0),
  yaw: -0.62,
  targetYaw: -0.62,
  pitch: window.innerWidth < 900 ? 0.9 : 0.98,
  targetPitch: window.innerWidth < 900 ? 0.9 : 0.98,
  zoom: 1,
  targetZoom: 1,
  fit: 16,
  autoOrbit: !reducedMotion,
  pointerId: null,
};

let currentTool = 'land';
let started = false;
let winShown = false;
let loadingDismissed = false;
let lastSparkFloor = -1;
let lastHudSignature = '';
let resetArmed = false;
let resetTimer = 0;
let hintStage = 0;
let studioOpen = false;
let walkActive = false;
let sphereView = false;
let walkStatusClock = 0;
const walkState = {
  keys: new Set(),
  joystick: { x: 0, y: 0 },
  pointerId: null,
  center: { x: 0, y: 0 },
};

const pointerState = {
  pointers: new Map(),
  drag: null,
  pinch: null,
  multiTouch: false,
  hovered: null,
  isDragging: false,
};

function getFov() {
  return window.innerWidth < 900 ? 55 : 37;
}

function getZoomBounds() {
  return sphereView ? { min: 0.4, max: 1.8 } : { min: 0.66, max: 1.8 };
}

function computeFitDistance() {
  if (sphereView) return world.planet.getViewDistance();
  const radius = world.radius;
  const aspect = Math.max(camera.aspect, 0.35);
  const tan = Math.tan((camera.fov * Math.PI) / 360);
  const baseDistance = 10.6 + radius * 3.5;
  const halfWidth = 1.4 + radius * 1.9;
  const widthDistance = halfWidth / (tan * Math.min(aspect, 2.05));
  return Math.max(baseDistance, widthDistance);
}

function focusActiveIsland() {
  if (sphereView) return;
  const center = world.getActiveCenter();
  const portrait = camera.aspect < 0.95;
  const targetY = portrait ? -0.15 : 0.28;
  cameraState.targetGoal.set(center.x, targetY, center.z);
  if (!started) cameraState.target.copy(cameraState.targetGoal);
  cameraState.pitch = clamp(cameraState.pitch, 0.62, 1.22);
  cameraState.targetPitch = clamp(cameraState.targetPitch, 0.62, 1.22);
  cameraState.fit = computeFitDistance();
  environment.setFocus(center.x, center.z);
}

function updateCameraTargetForLayout() {
  if (sphereView) {
    cameraState.targetGoal.copy(world.planet.getCameraTarget());
    return;
  }
  focusActiveIsland();
}

function setSphereView(force = null) {
  const next = force === null ? !sphereView : Boolean(force);
  if (next === sphereView) return;
  if (next && !started) return;
  if (next && walkActive) toggleWalk(false);
  sphereView = next;
  game.classList.toggle('is-world-view', sphereView);
  world.setWorldView(sphereView);
  environment.setWorldView(sphereView);
  worldViewNote.setAttribute('aria-hidden', String(!sphereView));
  updateHUD(true);
  sphereChip.setAttribute('aria-pressed', String(sphereView));
  sphereAction.textContent = sphereView ? 'Back' : 'View';
  sphereChip.setAttribute('aria-label', sphereView ? 'Return to the active isle' : 'View the worldsphere');
  if (sphereView) {
    const planetTarget = world.planet.getCameraTarget();
    cameraState.targetGoal.copy(planetTarget);
    cameraState.target.copy(planetTarget);
    cameraState.fit = world.planet.getViewDistance();
    cameraState.targetPitch = 1.04;
    cameraState.targetYaw = -0.62;
    cameraState.targetZoom = 1;
    setHint('The worldsphere — every isle becomes part of it');
    sound.chime();
  } else {
    focusActiveIsland();
    cameraState.targetPitch = camera.aspect < 0.95 ? 0.9 : 0.98;
    cameraState.targetZoom = 1;
    setOnboardingHint();
    sound.select();
  }
}

function updateSphereHud(state) {
  const sphere = state.sphere;
  if (!sphere || !sphereMeta) return;
  sphereMeta.textContent = `${sphere.claimed.toLocaleString('en-US')} / ${sphere.target.toLocaleString('en-US')} hexes`;
  sphereChip.title = `${sphere.percent < 0.01 ? sphere.percent.toFixed(3) : sphere.percent.toFixed(2)}% of the worldsphere is claimed`;
}

function setCameraImmediate() {
  cameraState.target.copy(cameraState.targetGoal);
  cameraState.fit = computeFitDistance();
  const distance = cameraState.fit * cameraState.zoom;
  if (scene.fog) {
    scene.fog.near = distance + 6;
    scene.fog.far = distance + 62;
  }
  const sinPitch = Math.sin(cameraState.pitch);
  camera.position.set(
    cameraState.target.x + Math.sin(cameraState.yaw) * sinPitch * distance,
    cameraState.target.y + Math.cos(cameraState.pitch) * distance,
    cameraState.target.z + Math.cos(cameraState.yaw) * sinPitch * distance,
  );
  camera.lookAt(cameraState.target);
}

updateCameraTargetForLayout();
cameraState.fit = computeFitDistance();
setCameraImmediate();
world.particles.setViewport(window.innerHeight, camera.fov);

function formatSub() {
  const state = world.getState();
  return `${state.hexes} hexes · ${state.homes || 0} cottages · ${state.residents || 0} neighbors`;
}

function updateHUD(force = false) {
  const state = world.getState();
  const signature = `${state.islandId}|${state.sparksFloor}|${Math.round(state.bloomPct * 1000)}|${state.hexes}|${state.homes}|${state.residents}|${state.islandCount}|${state.mood}|${state.won}|${state.sphere?.claimed || 0}|${sphereView}`;
  if (!force && signature === lastHudSignature) return;
  lastHudSignature = signature;

  if (state.sparksFloor !== lastSparkFloor) {
    sparkValue.textContent = state.sparksFloor.toLocaleString('en-US');
    lastSparkFloor = state.sparksFloor;
  }
  if (sphereView && state.sphere) {
    const spherePercent = state.sphere.percent;
    goalEyebrow.textContent = 'Worldsphere';
    goalLabel.textContent = 'One island at a time';
    goalFill.style.width = `${Math.min(100, spherePercent)}%`;
    goalPct.textContent = `${spherePercent < 1 ? spherePercent.toFixed(2) : Math.round(spherePercent)}%`;
  } else {
    const percent = Math.min(100, Math.round(state.bloomPct * 100));
    goalEyebrow.textContent = 'World bloom';
    goalFill.style.width = `${Math.min(100, state.bloomPct * 100)}%`;
    goalPct.textContent = `${percent}%`;
    goalLabel.textContent = state.won ? 'The world is awake' : 'Wake the Heartseed';
  }
  worldSub.textContent = formatSub();
  worldName.textContent = state.islandName || 'Isle of First Light';
  updateSphereHud(state);

  for (const button of toolButtons) {
    const tool = TOOLS[button.dataset.tool];
    if (tool) button.classList.toggle('unaffordable', state.sparksFloor < tool.cost);
  }

  const sparks = document.querySelector('.sparks');
  if (sparks) {
    sparks.title = `Sparks — earning ${state.sparkRate.toFixed(2)} per second from living things`;
  }
  if (studioOpen) renderStudio();
}

function renderToolPages() {
  toolPages.replaceChildren();
  TOOL_CATEGORIES.forEach((category, index) => {
    const button = document.createElement('button');
    button.className = 'tool-page';
    button.dataset.page = String(index);
    button.setAttribute('role', 'tab');
    button.setAttribute('aria-selected', String(index === currentPage));
    button.setAttribute('aria-controls', 'toolDock');
    button.setAttribute('aria-label', `${category.label} — ${category.note}`);
    button.innerHTML = `<span class="tool-page-icon">${TOOL_ICONS[category.icon]}</span><span>${category.label}</span>`;
    toolPages.appendChild(button);
  });
}

function renderToolPage(index, activate = false) {
  currentPage = clamp(index, 0, TOOL_CATEGORIES.length - 1);
  const category = TOOL_CATEGORIES[currentPage];
  toolDock.replaceChildren();
  category.tools.forEach((toolName, toolIndex) => {
    const tool = TOOLS[toolName];
    if (!tool) return;
    const button = document.createElement('button');
    const active = toolName === currentTool;
    button.className = `tool${active ? ' active' : ''}`;
    button.dataset.tool = toolName;
    button.setAttribute('aria-pressed', String(active));
    button.setAttribute('aria-label', `${tool.label} — ${tool.hint}, costs ${tool.cost} sparks`);
    button.innerHTML = `
      <span class="key">${toolIndex + 1}</span>
      <span class="tool-icon">${TOOL_ICONS[tool.icon]}</span>
      <span class="tool-name">${tool.label}</span>
      <span class="tool-cost"><b>${tool.cost}</b><i></i></span>
    `;
    toolDock.appendChild(button);
  });
  toolButtons = [...toolDock.querySelectorAll('.tool')];
  for (const button of toolPages.querySelectorAll('.tool-page')) {
    const selected = Number(button.dataset.page) === currentPage;
    button.classList.toggle('active', selected);
    button.setAttribute('aria-selected', String(selected));
  }
  toolPageName.textContent = category.label;
  toolPageIndex.textContent = `${String(currentPage + 1).padStart(2, '0')} / ${TOOL_CATEGORIES.length}`;
  if (activate && !category.tools.includes(currentTool)) selectTool(category.tools[0], true);
  updateHUD(true);
}

function selectTool(toolName, silent = false) {
  const tool = TOOLS[toolName];
  if (!tool) return;
  const page = TOOL_CATEGORIES.findIndex((category) => category.tools.includes(toolName));
  if (page >= 0 && page !== currentPage) renderToolPage(page, false);
  currentTool = toolName;
  for (const button of toolButtons) {
    const active = button.dataset.tool === toolName;
    button.classList.toggle('active', active);
    button.setAttribute('aria-pressed', String(active));
  }
  if (!silent && started) sound.select();
  if (pointerState.hovered) world.highlight(pointerState.hovered);
}

function showToast(message, tone = '') {
  if (!message) return;
  const toast = document.createElement('div');
  toast.className = `toast ${tone}`.trim();
  toast.innerHTML = '<span class="toast-mark"></span>';
  const label = document.createElement('span');
  label.textContent = message;
  toast.appendChild(label);
  toasts.appendChild(toast);
  while (toasts.children.length > 3) toasts.firstElementChild.remove();
  window.setTimeout(() => {
    toast.classList.add('is-leaving');
    window.setTimeout(() => toast.remove(), 380);
  }, 3100);
}

function projectToScreen(position) {
  const point = position.clone();
  point.y += 0.6;
  point.project(camera);
  return {
    x: (point.x * 0.5 + 0.5) * window.innerWidth,
    y: (-point.y * 0.5 + 0.5) * window.innerHeight,
  };
}

function showFloater(position, text, variant = '') {
  const screen = projectToScreen(position);
  if (screen.x < 10 || screen.x > window.innerWidth - 10) return;
  const floater = document.createElement('div');
  floater.className = `floater ${variant}`.trim();
  floater.textContent = text;
  floater.style.left = `${clamp(screen.x, 20, window.innerWidth - 20)}px`;
  floater.style.top = `${clamp(screen.y, 60, window.innerHeight - 150)}px`;
  floaters.appendChild(floater);
  window.setTimeout(() => floater.remove(), 1600);
}

function setHint(text) {
  hintText.textContent = text;
  hintPill.classList.remove('is-hidden');
}

function setOnboardingHint() {
  const stats = world.stats;
  if (world.won) {
    setHint('The isle is awake — settle another, or walk among your neighbors');
  } else if (stats.shops > 0) {
    setHint('The market is open — walk the isle to meet your neighbors');
  } else if (stats.homes > 0) {
    setHint('Cottages bring neighbors — try opening a market');
  } else if (stats.prisms > 0) {
    setHint('Every living thing adds bloom');
  } else if (stats.groves > 0) {
    setHint('Groves gather sparks while you dream');
  } else if (stats.actions > 0) {
    setHint('Try a path, a cottage, or a pool');
  } else {
    setHint('Tap a hex to shape the land');
  }
}

function showActionFeedback(event) {
  sound.place(event.family || event.toolName, Math.max(1, event.tile.decorLevel));
  showFloater(event.position, `+${event.bloomGain} bloom`, '');
  const stats = world.stats;
  if (hintStage < 1 && event.toolName === 'land') {
    hintStage = 1;
    window.setTimeout(() => setHint('Now try a path or a grove'), 500);
  } else if (hintStage < 2 && event.toolName === 'water') {
    hintStage = 2;
    window.setTimeout(() => setHint('Groves gather sparks while you dream'), 500);
  } else if (hintStage < 3 && event.toolName === 'grove') {
    hintStage = 3;
    window.setTimeout(() => setHint('Raise a cottage and neighbors will arrive'), 500);
  } else if (hintStage < 4 && (event.toolName === 'home' || event.toolName === 'shop' || event.toolName === 'villager')) {
    hintStage = 4;
    window.setTimeout(() => setOnboardingHint(), 500);
  }
  if (stats.actions === 1) {
    window.setTimeout(() => showToast('Every choice deepens the bloom'), 600);
  }
}

world.setEvents({
  state: () => updateHUD(),
  action: (event) => {
    updateHUD(true);
    showActionFeedback(event);
  },
  denied: (tool) => {
    const button = toolButtons.find((item) => item.dataset.tool === currentTool);
    if (button) {
      button.classList.remove('shake');
      void button.offsetWidth;
      button.classList.add('shake');
      window.setTimeout(() => button.classList.remove('shake'), 450);
    }
    const missing = Math.max(0, Math.ceil(tool.cost - world.sparks));
    showToast(`Need ${missing} more spark${missing === 1 ? '' : 's'} — living tiles give more`, 'gold');
    sound.denied();
  },
  toast: (message, tone) => showToast(message, tone),
  expansion: (event) => {
    showToast(`${event.message}  ·  +${event.sparks} sparks`, 'gold');
    sound.expand();
    window.setTimeout(() => showToast('The isle grew. New hexes are yours.'), 700);
    setHint('A new ring of the isle rises — keep shaping');
  },
  focus: () => {
    if (sphereView) setSphereView(false);
    else focusActiveIsland();
    updateHUD(true);
  },
  newIsland: (island) => {
    sound.expand();
    showToast(`${island.name} rises from the clouds`, 'gold');
    setHint('A new isle waits — shape it, then bridge the two');
    if (studioOpen) renderStudio();
  },
  bridge: (event) => {
    sound.expand();
    showToast(`A bridge links ${event.from.name} and ${event.to.name}`, 'gold');
    setHint('The isles are connected');
  },
  win: () => {
    if (winShown) return;
    sound.win();
    window.setTimeout(showWinScreen, 1750);
  },
});

function showWinScreen() {
  if (winShown || !started) return;
  winShown = true;
  const state = world.getState();
  const stats = document.getElementById('winStats');
  stats.innerHTML = '';
  const entries = [
    [state.hexes, 'hexes'],
    [state.groves, 'groves'],
    [state.prisms, 'prisms'],
    [state.actions, 'choices'],
  ];
  for (const [value, label] of entries) {
    const item = document.createElement('div');
    item.className = 'win-stat';
    const valueEl = document.createElement('b');
    valueEl.textContent = value;
    const labelEl = document.createElement('span');
    labelEl.textContent = label;
    item.append(valueEl, labelEl);
    stats.appendChild(item);
  }
  winScreen.classList.remove('hidden');
  winScreen.setAttribute('aria-hidden', 'false');
  keepBuildingButton.focus({ preventScroll: true });
}

function hideWinScreen() {
  winScreen.classList.add('hidden');
  winScreen.setAttribute('aria-hidden', 'true');
  canvas.focus({ preventScroll: true });
  showToast('The isle is yours to keep shaping');
  sound.chime();
}

function openHelp() {
  helpBackdrop.classList.remove('hidden');
  helpBackdrop.setAttribute('aria-hidden', 'false');
  helpClose.focus({ preventScroll: true });
}

function closeHelp() {
  helpBackdrop.classList.add('hidden');
  helpBackdrop.setAttribute('aria-hidden', 'true');
  helpButton.focus({ preventScroll: true });
}

function applyMood(mood, persist = false) {
  const allowed = ['dawn', 'noon', 'golden', 'dusk', 'night'];
  const next = allowed.includes(mood) ? mood : 'dawn';
  app.dataset.mood = next;
  environment.setMood(next);
  for (const button of moodButtons) {
    button.classList.toggle('active', button.dataset.mood === next);
  }
  if (persist) world.setMood(next);
}

function renderStudio() {
  const state = world.getState();
  if (!studioOpen) return;
  islandNameInput.value = state.islandName || '';
  islandCount.textContent = `${state.islandCount} isle${state.islandCount === 1 ? '' : 's'}`;
  islandList.replaceChildren();
  for (const island of state.islands) {
    const row = document.createElement('div');
    row.className = `island-row${island.active ? ' active' : ''}`;
    const copy = document.createElement('div');
    copy.className = 'island-row-copy';
    const name = document.createElement('b');
    name.textContent = island.name;
    const meta = document.createElement('span');
    const links = island.connections.length;
    meta.textContent = `${island.hexes} hexes · ${island.residents} neighbors · ${links} bridge${links === 1 ? '' : 's'}`;
    copy.append(name, meta);
    const visit = document.createElement('button');
    visit.className = 'island-visit';
    visit.textContent = island.active ? 'Here' : 'Visit';
    visit.disabled = island.active;
    visit.setAttribute('aria-label', island.active ? `${island.name}, current isle` : `Visit ${island.name}`);
    visit.addEventListener('click', () => {
      world.setActive(island.id);
      sound.select();
      closeStudio();
    });
    row.append(copy, visit);
    islandList.appendChild(row);
  }
  for (const button of moodButtons) {
    button.classList.toggle('active', button.dataset.mood === state.mood);
  }
}

function openStudio() {
  if (walkActive) toggleWalk(false);
  if (sphereView) setSphereView(false);
  if (!helpBackdrop.classList.contains('hidden')) closeHelp();
  if (!winScreen.classList.contains('hidden')) hideWinScreen();
  studioOpen = true;
  renderStudio();
  studioBackdrop.classList.remove('hidden');
  studioBackdrop.setAttribute('aria-hidden', 'false');
  studioClose.focus({ preventScroll: true });
}

function closeStudio() {
  studioOpen = false;
  studioBackdrop.classList.add('hidden');
  studioBackdrop.setAttribute('aria-hidden', 'true');
  studioButton.focus({ preventScroll: true });
}

function setWalkStatus(text) {
  if (walkStatus.textContent === text) return;
  walkStatus.textContent = text;
}

function syncWalkButton() {
  walkButton.setAttribute('aria-pressed', String(walkActive));
  walkButton.setAttribute('aria-label', walkActive ? 'Return to building' : 'Walk the isle');
  walkButton.querySelector('.walk-label').textContent = walkActive ? 'Build' : 'Walk';
  game.classList.toggle('is-walking', walkActive);
  walkUi.setAttribute('aria-hidden', String(!walkActive));
}

function toggleWalk(force = null) {
  const next = force === null ? !walkActive : Boolean(force);
  if (next === walkActive) return;
  if (next) {
    if (!started) return;
    if (!world.beginWalk()) {
      showToast('There is no land here to walk on', 'gold');
      return;
    }
    walkActive = true;
    pointerState.drag = null;
    pointerState.isDragging = false;
    pointerState.hovered = null;
    world.highlight(null);
    canvas.classList.remove('is-dragging');
    cameraState.targetPitch = 0.96;
    cameraState.pitch = 0.96;
    walkState.keys.clear();
    walkState.joystick.x = 0;
    walkState.joystick.y = 0;
    joystickKnob.style.transform = 'translate(0px, 0px)';
    setWalkStatus(world.getWalkStatus());
    sound.chime();
  } else {
    walkActive = false;
    world.endWalk();
    focusActiveIsland();
    cameraState.targetZoom = 1;
    cameraState.targetPitch = camera.aspect < 0.95 ? 0.9 : 0.98;
    sound.select();
  }
  syncWalkButton();
  if (!next) setOnboardingHint();
}

function resetWalkInput() {
  walkState.pointerId = null;
  walkState.joystick.x = 0;
  walkState.joystick.y = 0;
  joystickKnob.style.transform = 'translate(0px, 0px)';
}

function moveJoystick(event) {
  const rect = joystick.getBoundingClientRect();
  const centerX = rect.left + rect.width / 2;
  const centerY = rect.top + rect.height / 2;
  const max = Math.min(rect.width, rect.height) * 0.31;
  let dx = event.clientX - centerX;
  let dy = event.clientY - centerY;
  const distance = Math.hypot(dx, dy);
  if (distance > max) {
    dx = (dx / distance) * max;
    dy = (dy / distance) * max;
  }
  walkState.joystick.x = dx / max;
  walkState.joystick.y = dy / max;
  joystickKnob.style.transform = `translate(${dx}px, ${dy}px)`;
}

function syncSoundUI() {
  soundButton.classList.toggle('muted', sound.muted);
  soundButton.setAttribute('aria-label', sound.muted ? 'Turn sound on' : 'Turn sound off');
  helpSoundButton.textContent = `Sound: ${sound.muted ? 'off' : 'on'}`;
}

async function toggleSound() {
  if (!sound.started) await sound.start();
  sound.setMuted(!sound.muted);
  syncSoundUI();
  if (!sound.muted) sound.chime();
}

async function enterWorld() {
  if (started) return;
  started = true;
  await sound.start();
  sound.chime();
  world.setActiveState(true);
  applyMood(world.mood);
  selectTool(currentTool, true);
  startScreen.classList.add('hidden');
  startScreen.setAttribute('aria-hidden', 'true');
  game.classList.add('is-playing');
  game.setAttribute('aria-hidden', 'false');
  cameraState.autoOrbit = false;
  if (cameraState.zoom > 1.25) cameraState.targetZoom = 1;
  updateHUD(true);
  setOnboardingHint();
  window.setTimeout(() => {
    hintPill.classList.remove('is-hidden');
  }, 600);
  window.setTimeout(() => orbitHint.classList.add('is-hidden'), 7000);
  if (world.won) winShown = true;
  if (world.stats.actions > 0) {
    window.setTimeout(() => showToast('Your world was remembered'), 900);
  }
}

function buildAtPointer(clientX, clientY) {
  if (!started || walkActive || sphereView) return;
  const tile = world.pick(clientX, clientY, camera, canvas);
  if (!tile) {
    world.highlight(null);
    return;
  }
  world.highlight(tile);
  world.place(currentTool, tile);
}

function onPointerDown(event) {
  if (event.pointerType === 'mouse' && event.button !== 0) return;
  if (!started) return;
  const point = { x: event.clientX, y: event.clientY, startX: event.clientX, startY: event.clientY };
  pointerState.pointers.set(event.pointerId, point);
  try {
    canvas.setPointerCapture(event.pointerId);
  } catch {
    // Pointer capture can fail if the pointer is already gone.
  }

  if (pointerState.pointers.size === 1) {
    pointerState.drag = {
      id: event.pointerId,
      startX: event.clientX,
      startY: event.clientY,
      lastX: event.clientX,
      lastY: event.clientY,
      moved: 0,
      time: performance.now(),
    };
    pointerState.multiTouch = false;
    pointerState.isDragging = false;
    canvas.classList.remove('is-dragging');
  } else if (pointerState.pointers.size === 2) {
    pointerState.multiTouch = true;
    pointerState.drag = null;
    pointerState.isDragging = false;
    const [a, b] = [...pointerState.pointers.values()];
    pointerState.pinch = {
      distance: Math.hypot(a.x - b.x, a.y - b.y),
      startZoom: cameraState.targetZoom,
    };
    world.highlight(null);
  }
}

function onPointerMove(event) {
  if (!started) return;
  const tracked = pointerState.pointers.get(event.pointerId);
  if (tracked) {
    tracked.x = event.clientX;
    tracked.y = event.clientY;
  }

  if (pointerState.pointers.size >= 2) {
    const [a, b] = [...pointerState.pointers.values()];
    const distance = Math.hypot(a.x - b.x, a.y - b.y);
    if (pointerState.pinch && pointerState.pinch.distance > 0) {
      const ratio = pointerState.pinch.distance / Math.max(1, distance);
      const bounds = getZoomBounds();
      cameraState.targetZoom = clamp(pointerState.pinch.startZoom * ratio, bounds.min, bounds.max);
    }
    return;
  }

  if (pointerState.drag && pointerState.drag.id === event.pointerId) {
    const drag = pointerState.drag;
    const dx = event.clientX - drag.lastX;
    const dy = event.clientY - drag.lastY;
    drag.lastX = event.clientX;
    drag.lastY = event.clientY;
    drag.moved += Math.hypot(dx, dy);
    if (drag.moved > 7) {
      pointerState.isDragging = true;
      canvas.classList.add('is-dragging');
    }
    cameraState.targetYaw -= dx * 0.0062;
    cameraState.targetPitch = clamp(cameraState.targetPitch + dy * 0.0042, 0.65, 1.2);
    if (pointerState.isDragging) world.highlight(null);
    return;
  }

  if (walkActive || sphereView) {
    canvas.style.cursor = pointerState.isDragging ? 'grabbing' : 'grab';
    return;
  }

  if (event.pointerType === 'mouse') {
    const tile = world.pick(event.clientX, event.clientY, camera, canvas);
    pointerState.hovered = tile;
    world.highlight(tile);
    canvas.style.cursor = tile ? 'pointer' : 'grab';
  }
}

function onPointerUp(event) {
  if (!started) {
    pointerState.pointers.delete(event.pointerId);
    return;
  }
  const drag = pointerState.drag;
  pointerState.pointers.delete(event.pointerId);
  const wasTap =
    drag &&
    drag.id === event.pointerId &&
    drag.moved < 8 &&
    performance.now() - drag.time < 700 &&
    !pointerState.multiTouch &&
    !walkActive &&
    !sphereView &&
    pointerState.pointers.size === 0;

  if (wasTap) {
    buildAtPointer(event.clientX, event.clientY);
  }

  if (pointerState.pointers.size === 0) {
    pointerState.drag = null;
    pointerState.pinch = null;
    pointerState.multiTouch = false;
    pointerState.isDragging = false;
    canvas.classList.remove('is-dragging');
  } else if (pointerState.pointers.size === 1) {
    const [remaining] = [...pointerState.pointers.values()];
    pointerState.drag = {
      id: [...pointerState.pointers.keys()][0],
      startX: remaining.x,
      startY: remaining.y,
      lastX: remaining.x,
      lastY: remaining.y,
      moved: 0,
      time: performance.now(),
    };
    pointerState.multiTouch = true;
    pointerState.pinch = null;
  }
}

function onPointerCancel(event) {
  pointerState.pointers.delete(event.pointerId);
  if (pointerState.pointers.size === 0) {
    pointerState.drag = null;
    pointerState.pinch = null;
    pointerState.multiTouch = false;
    pointerState.isDragging = false;
    canvas.classList.remove('is-dragging');
  }
}

canvas.addEventListener('pointerdown', onPointerDown);
canvas.addEventListener('pointermove', onPointerMove);
canvas.addEventListener('pointerup', onPointerUp);
canvas.addEventListener('pointercancel', onPointerCancel);
canvas.addEventListener('pointerleave', () => {
  if (pointerState.pointers.size === 0) {
    pointerState.hovered = null;
    world.highlight(null);
    if (!pointerState.isDragging) canvas.style.cursor = 'grab';
  }
});
canvas.addEventListener(
  'wheel',
  (event) => {
    if (!started) return;
    event.preventDefault();
    const bounds = getZoomBounds();
    cameraState.targetZoom = clamp(cameraState.targetZoom * (1 + event.deltaY * 0.001), bounds.min, bounds.max);
  },
  { passive: false },
);

toolDock.addEventListener('click', (event) => {
  const button = event.target.closest('.tool');
  if (button) selectTool(button.dataset.tool);
});
toolPages.addEventListener('click', (event) => {
  const button = event.target.closest('.tool-page');
  if (!button) return;
  renderToolPage(Number(button.dataset.page), true);
  sound.select();
});
toolPages.addEventListener('wheel', (event) => {
  if (Math.abs(event.deltaY) < Math.abs(event.deltaX)) return;
  event.preventDefault();
  renderToolPage(currentPage + (event.deltaY > 0 ? 1 : -1), true);
  sound.select();
}, { passive: false });

startButton.addEventListener('click', enterWorld);
keepBuildingButton.addEventListener('click', hideWinScreen);
helpButton.addEventListener('click', openHelp);
helpClose.addEventListener('click', closeHelp);
helpBackdrop.addEventListener('pointerdown', (event) => {
  if (event.target === helpBackdrop) closeHelp();
});
soundButton.addEventListener('click', toggleSound);
helpSoundButton.addEventListener('click', toggleSound);

studioButton.addEventListener('click', openStudio);
studioClose.addEventListener('click', closeStudio);
studioBackdrop.addEventListener('pointerdown', (event) => {
  if (event.target === studioBackdrop) closeStudio();
});
newIslandButton.addEventListener('click', () => {
  const island = world.newIsland();
  closeStudio();
  if (island) sound.chime();
});
bridgeButton.addEventListener('click', () => {
  const result = world.connectNearest();
  if (result) {
    window.setTimeout(() => {
      cameraState.targetZoom = 1.48;
      showToast('Pinch or scroll out to see the bridge');
    }, 500);
  }
  renderStudio();
});
islandNameSave.addEventListener('click', () => {
  if (world.renameActiveIsland(islandNameInput.value)) {
    showToast('The isle has a new name', 'gold');
    updateHUD(true);
    renderStudio();
    sound.select();
  }
});
islandNameInput.addEventListener('keydown', (event) => {
  if (event.key === 'Enter') {
    event.preventDefault();
    islandNameSave.click();
  }
});
for (const button of moodButtons) {
  button.addEventListener('click', () => {
    applyMood(button.dataset.mood, true);
    sound.select();
    renderStudio();
  });
}
studioWalkButton.addEventListener('click', () => {
  closeStudio();
  toggleWalk(true);
});
walkButton.addEventListener('click', () => toggleWalk());

joystick.addEventListener('pointerdown', (event) => {
  if (!walkActive) return;
  event.preventDefault();
  event.stopPropagation();
  walkState.pointerId = event.pointerId;
  try {
    joystick.setPointerCapture(event.pointerId);
  } catch {
    // Pointer capture can fail if the joystick leaves the document.
  }
  moveJoystick(event);
});
joystick.addEventListener('pointermove', (event) => {
  if (event.pointerId !== walkState.pointerId) return;
  event.preventDefault();
  moveJoystick(event);
});
const releaseJoystick = (event) => {
  if (event.pointerId !== walkState.pointerId) return;
  resetWalkInput();
};
joystick.addEventListener('pointerup', releaseJoystick);
joystick.addEventListener('pointercancel', releaseJoystick);
joystick.addEventListener('lostpointercapture', (event) => {
  if (event.pointerId === walkState.pointerId) resetWalkInput();
});

resetButton.addEventListener('click', () => {
  if (!resetArmed) {
    resetArmed = true;
    resetButton.textContent = 'Tap again to begin anew';
    window.clearTimeout(resetTimer);
    resetTimer = window.setTimeout(() => {
      resetArmed = false;
      resetButton.textContent = 'Begin a new world';
    }, 3500);
    return;
  }
  world.reset();
  window.location.reload();
});

window.addEventListener('keydown', (event) => {
  if (event.key === 'Escape') {
    if (studioOpen) closeStudio();
    else if (sphereView) setSphereView(false);
    else if (walkActive) toggleWalk(false);
    else if (!helpBackdrop.classList.contains('hidden')) closeHelp();
    else if (!winScreen.classList.contains('hidden')) hideWinScreen();
    return;
  }
  if (!started) return;
  const movement = ['w', 'a', 's', 'd', 'arrowup', 'arrowdown', 'arrowleft', 'arrowright'];
  if (walkActive) {
    const key = event.key.toLowerCase();
    if (movement.includes(key)) {
      event.preventDefault();
      walkState.keys.add(key);
    }
    return;
  }
  if (event.target instanceof HTMLInputElement || event.target instanceof HTMLTextAreaElement) return;
  if (event.key >= '1' && event.key <= '8') {
    const category = TOOL_CATEGORIES[currentPage];
    const name = category.tools[Number(event.key) - 1];
    if (!name) return;
    selectTool(name);
    const button = toolButtons.find((item) => item.dataset.tool === name);
    if (button) {
      button.classList.remove('keyboard-flash');
      void button.offsetWidth;
      button.classList.add('keyboard-flash');
    }
  } else if (event.key === 'q' || event.key === 'Q') {
    renderToolPage((currentPage + TOOL_CATEGORIES.length - 1) % TOOL_CATEGORIES.length, true);
    sound.select();
  } else if (event.key === 'e' || event.key === 'E') {
    renderToolPage((currentPage + 1) % TOOL_CATEGORIES.length, true);
    sound.select();
  } else if (event.key === 'v' || event.key === 'V') {
    setSphereView();
  } else if (event.key === 'r' || event.key === 'R') {
    if (sphereView) {
      cameraState.targetYaw = -0.62;
      cameraState.targetPitch = 1.04;
    } else {
      cameraState.targetYaw = -0.62;
      cameraState.targetPitch = window.innerWidth < 900 ? 0.9 : 0.98;
    }
    cameraState.targetZoom = 1;
    showToast('The view drifts home');
  } else if (event.key === 'h' || event.key === 'H') {
    openHelp();
  } else if (event.key === 'm' || event.key === 'M') {
    toggleSound();
  }
});

window.addEventListener('keyup', (event) => {
  walkState.keys.delete(event.key.toLowerCase());
});

window.addEventListener('resize', () => {
  const width = window.innerWidth;
  const height = window.innerHeight;
  camera.aspect = width / height;
  camera.fov = getFov();
  camera.updateProjectionMatrix();
  renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 2));
  renderer.setSize(width, height);
  world.particles.setViewport(height, camera.fov);
  world.planet.setPixelRatio(Math.min(window.devicePixelRatio || 1, 2));
  updateCameraTargetForLayout();
  cameraState.fit = computeFitDistance();
});

document.addEventListener('visibilitychange', () => {
  if (document.visibilityState === 'hidden') world.save();
});

renderToolPages();
sphereChip.addEventListener('click', () => setSphereView());

const initialToolPage = TOOL_CATEGORIES.findIndex((category) => category.tools.includes(currentTool));
renderToolPage(Math.max(0, initialToolPage), false);
applyMood(world.mood);
focusActiveIsland();
syncSoundUI();
updateHUD(true);
setOnboardingHint();

if (world.stats.actions > 0 || world.bloom > 0 || world.radius > 2) {
  startButton.querySelector('span').textContent = 'Return to your isle';
  startButton.setAttribute('aria-label', 'Start game');
}
if (world.won) {
  winShown = true;
  goalLabel.textContent = 'The world is awake';
}
if (isTouch) {
  orbitHint.style.display = 'none';
}

let elapsed = 0;
let firstFrame = false;
let lastFrameTime = performance.now();

function animate(now) {
  requestAnimationFrame(animate);
  const dt = Math.min(Math.max(0, (now - lastFrameTime) / 1000), 0.05);
  lastFrameTime = now;
  elapsed += dt;

  if (cameraState.autoOrbit && !started && !reducedMotion && !walkActive) {
    cameraState.targetYaw += dt * 0.035;
  }

  cameraState.yaw = damp(cameraState.yaw, cameraState.targetYaw, 7.5, dt);
  cameraState.pitch = damp(cameraState.pitch, cameraState.targetPitch, 7.5, dt);
  cameraState.zoom = damp(cameraState.zoom, cameraState.targetZoom, 8, dt);
  cameraState.fit = damp(cameraState.fit, computeFitDistance(), 3.2, dt);
  if (!walkActive) {
    cameraState.target.lerp(cameraState.targetGoal, 1 - Math.exp(-dt * 4.2));
  }

  if (walkActive) {
    let forward = 0;
    let strafe = 0;
    if (walkState.keys.has('w') || walkState.keys.has('arrowup')) forward += 1;
    if (walkState.keys.has('s') || walkState.keys.has('arrowdown')) forward -= 1;
    if (walkState.keys.has('d') || walkState.keys.has('arrowright')) strafe += 1;
    if (walkState.keys.has('a') || walkState.keys.has('arrowleft')) strafe -= 1;
    forward -= walkState.joystick.y;
    strafe += walkState.joystick.x;
    const inputLength = Math.hypot(forward, strafe);
    if (inputLength > 1) {
      forward /= inputLength;
      strafe /= inputLength;
    }
    if (Math.abs(forward) > 0.02 || Math.abs(strafe) > 0.02) {
      const sin = Math.sin(cameraState.yaw);
      const cos = Math.cos(cameraState.yaw);
      world.moveExplorer(-sin * forward + cos * strafe, -cos * forward - sin * strafe, dt);
    } else {
      world.moveExplorer(0, 0, dt);
    }
  }

  world.update(dt, elapsed);
  environment.update(dt, elapsed);
  sound.update(dt);

  if (walkActive) {
    const focus = world.getExplorerWorldPosition();
    cameraState.target.set(focus.x, focus.y + 0.56, focus.z);
    const walkDistance = camera.aspect < 0.95 ? 5.5 : 6.2;
    const sinPitch = Math.sin(cameraState.pitch);
    camera.position.set(
      cameraState.target.x + Math.sin(cameraState.yaw) * sinPitch * walkDistance,
      cameraState.target.y + Math.cos(cameraState.pitch) * walkDistance,
      cameraState.target.z + Math.cos(cameraState.yaw) * sinPitch * walkDistance,
    );
    camera.lookAt(cameraState.target);
    if (scene.fog) {
      scene.fog.near = 18;
      scene.fog.far = 76;
    }
    walkStatusClock += dt;
    if (walkStatusClock > 0.28) {
      walkStatusClock = 0;
      setWalkStatus(world.getWalkStatus());
    }
  } else {
    const distance = cameraState.fit * cameraState.zoom;
    if (scene.fog) {
      if (sphereView) {
        scene.fog.near = distance * 0.82;
        scene.fog.far = distance + world.planet.radius * 2.4;
      } else {
        scene.fog.near = distance + 6;
        scene.fog.far = distance + 62;
      }
    }
    const sinPitch = Math.sin(cameraState.pitch);
    camera.position.set(
      cameraState.target.x + Math.sin(cameraState.yaw) * sinPitch * distance,
      cameraState.target.y + Math.cos(cameraState.pitch) * distance,
      cameraState.target.z + Math.cos(cameraState.yaw) * sinPitch * distance,
    );
    camera.lookAt(cameraState.target);
  }

  if (started) {
    updateHUD();
    if (Math.floor(world.sparks) !== lastSparkFloor) updateHUD(true);
  }

  renderer.render(scene, camera);

  if (!firstFrame) {
    firstFrame = true;
    window.setTimeout(() => {
      if (loadingDismissed) return;
      loadingDismissed = true;
      loading.classList.add('hidden');
      window.setTimeout(() => loading.remove(), 1000);
    }, 280);
  }
}

requestAnimationFrame(animate);

window.addEventListener('beforeunload', () => world.save());

const sparkStatus = document.querySelector('.sparks');
if (sparkStatus) sparkStatus.setAttribute('role', 'status');

window.__OPENWORK__ = {
  world,
  environment,
  camera,
  cameraState,
  scene,
  renderer,
  rendererName,
  softwareRenderer,
  enterWorld,
  selectTool,
  state: () => world.getState(),
  placeAt: (q, r, tool = currentTool) => world.place(tool, world.tiles.get(hexKey(q, r))),
  newIsland: (name) => world.newIsland({ name }),
  connect: () => world.connectNearest(),
  walk: (active = true) => toggleWalk(active),
  mood: (mood) => applyMood(mood, true),
  sphere: (active = true) => setSphereView(active),
  planet: world.planet,
  resetCamera: () => {
    cameraState.targetYaw = -0.62;
    cameraState.targetPitch = window.innerWidth < 900 ? 0.9 : 0.98;
    cameraState.targetZoom = 1;
    focusActiveIsland();
  },
};
