const FAMILY_STYLES = {
  terrain: { icon: 'terrain', color: 0xc9a36d, color2: 0x8fb573 },
  tree: { icon: 'tree', color: 0x9bc77a, color2: 0xe9cf7d },
  water: { icon: 'water', color: 0x74d2d3, color2: 0x9de6df },
  path: { icon: 'path', color: 0xc8a77b, color2: 0xe3cfa9 },
  home: { icon: 'home', color: 0xe8d3ad, color2: 0xa76545 },
  shop: { icon: 'shop', color: 0xe9b96b, color2: 0xb9563f },
  folk: { icon: 'folk', color: 0x91b9a4, color2: 0xf0c987 },
  magic: { icon: 'crystal', color: 0xf2b6dd, color2: 0x9debe3 },
  prop: { icon: 'prop', color: 0xaab09a, color2: 0xe5d5b7 },
  festive: { icon: 'festive', color: 0xf0b36a, color2: 0xe46f5c },
};

const CATEGORY_DEFS = [
  {
    id: 'terrain',
    label: 'Terrain',
    note: 'Sculpt the earth',
    tools: [
      ['land', 'Land', 'terrain', 'land', 1, 2, 'Raised the earth'],
      ['mesa', 'Mesa', 'terrain', 'mesa', 3, 5, 'Lifted a flat-topped mesa'],
      ['cliff', 'Cliff', 'terrain', 'cliff', 4, 6, 'Raised a sheer cliff'],
      ['plateau', 'Plateau', 'terrain', 'plateau', 3, 5, 'Laid a stony plateau'],
      ['basin', 'Basin', 'terrain', 'basin', 2, 2, 'Hollowed a soft basin'],
      ['terrace', 'Terrace', 'terrain', 'terrace', 2, 4, 'Stepped the hillside'],
      ['stone', 'Stone', 'terrain', 'stone', 2, 3, 'Bared the stone beneath'],
      ['dune', 'Dune', 'terrain', 'dune', 2, 3, 'Swept up a pale dune'],
    ],
  },
  {
    id: 'flora',
    label: 'Flora',
    note: 'Cultivate canopies',
    tools: [
      ['grove', 'Grove', 'tree', 'grove', 4, 8, 'Planted a grove'],
      ['pine', 'Pine', 'tree', 'pine', 5, 9, 'Planted a wind-bent pine'],
      ['blossom', 'Blossom', 'tree', 'blossom', 5, 10, 'Planted a blossom tree'],
      ['birch', 'Birch', 'tree', 'birch', 4, 8, 'Planted a pale birch'],
      ['palm', 'Palm', 'tree', 'palm', 6, 10, 'Raised a salt-loving palm'],
      ['willow', 'Willow', 'tree', 'willow', 6, 11, 'Planted a weeping willow'],
      ['orchard', 'Orchard', 'tree', 'orchard', 8, 14, 'Planted a fruiting orchard'],
      ['ancient', 'Elder', 'tree', 'ancient', 12, 20, 'Woke an elder tree'],
    ],
  },
  {
    id: 'water',
    label: 'Water',
    note: 'Carve living water',
    tools: [
      ['water', 'Pool', 'water', 'pool', 2, 5, 'Carved a mirror pool'],
      ['spring', 'Spring', 'water', 'spring', 4, 7, 'Opened a bright spring'],
      ['pond', 'Pond', 'water', 'pond', 3, 6, 'Dug a quiet pond'],
      ['stream', 'Stream', 'water', 'stream', 3, 6, 'Let a stream wander through'],
      ['lagoon', 'Lagoon', 'water', 'lagoon', 6, 10, 'Spilled a warm lagoon'],
      ['tidepool', 'Tidepool', 'water', 'tidepool', 4, 7, 'Left a tidepool among stones'],
      ['cascade', 'Cascade', 'water', 'cascade', 8, 13, 'Spilled a small cascade'],
      ['moonwell', 'Moonwell', 'water', 'moonwell', 11, 18, 'Sank a moonwell'],
    ],
  },
  {
    id: 'ways',
    label: 'Ways',
    note: 'Draw the paths',
    tools: [
      ['path', 'Path', 'path', 'path', 1, 1, 'Laid a winding path'],
      ['cobble', 'Cobbles', 'path', 'cobble', 2, 2, 'Set a cobbled way'],
      ['boardwalk', 'Boardwalk', 'path', 'boardwalk', 3, 3, 'Ran a timber boardwalk'],
      ['steps', 'Steps', 'path', 'steps', 2, 2, 'Cut shallow steps'],
      ['plaza', 'Plaza', 'path', 'plaza', 4, 5, 'Paved a little plaza'],
      ['gardenPath', 'Garden Way', 'path', 'garden', 2, 4, 'Laid a flowering garden way'],
      ['gravel', 'Gravel', 'path', 'gravel', 1, 2, 'Spread a gravel walk'],
      ['mosaic', 'Mosaic', 'path', 'mosaic', 5, 7, 'Set a colored mosaic'],
    ],
  },
  {
    id: 'homes',
    label: 'Homes',
    note: 'Raise places to dwell',
    tools: [
      ['home', 'Cottage', 'home', 'cottage', 10, 14, 'Raised a cottage'],
      ['cabin', 'Cabin', 'home', 'cabin', 9, 12, 'Built a snug cabin'],
      ['longhouse', 'Longhouse', 'home', 'longhouse', 14, 18, 'Raised a longhouse'],
      ['tower', 'Tower', 'home', 'tower', 16, 22, 'Raised a stone tower'],
      ['treehouse', 'Treehouse', 'home', 'treehouse', 13, 17, 'Nested a treehouse'],
      ['lighthouse', 'Lighthouse', 'home', 'lighthouse', 18, 24, 'Lit a lighthouse'],
      ['atelier', 'Atelier', 'home', 'atelier', 12, 16, 'Opened an artist’s atelier'],
      ['hall', 'Great Hall', 'home', 'hall', 20, 28, 'Raised a great hall'],
    ],
  },
  {
    id: 'trade',
    label: 'Trade',
    note: 'Open doors for trade',
    tools: [
      ['shop', 'Market', 'shop', 'market', 16, 20, 'Opened a market stall'],
      ['bakery', 'Bakery', 'shop', 'bakery', 15, 19, 'Fired the bakery ovens'],
      ['forge', 'Forge', 'shop', 'forge', 17, 21, 'Lit the village forge'],
      ['tavern', 'Tavern', 'shop', 'tavern', 18, 23, 'Opened a warm tavern'],
      ['library', 'Library', 'shop', 'library', 20, 26, 'Shelved a tiny library'],
      ['bathhouse', 'Bathhouse', 'shop', 'bathhouse', 19, 24, 'Steamed a bathhouse'],
      ['apothecary', 'Apothecary', 'shop', 'apothecary', 15, 19, 'Stocked an apothecary'],
      ['observatory', 'Observatory', 'shop', 'observatory', 22, 30, 'Raised an observatory'],
    ],
  },
  {
    id: 'folk',
    label: 'Folk',
    note: 'Welcome new lives',
    tools: [
      ['villager', 'Neighbor', 'folk', 'resident', 3, 4, 'Welcomed a neighbor'],
      ['child', 'Child', 'folk', 'child', 2, 3, 'Welcomed a curious child'],
      ['elder', 'Elder', 'folk', 'elder', 4, 5, 'Welcomed a village elder'],
      ['musician', 'Musician', 'folk', 'musician', 5, 6, 'Welcomed a wandering musician'],
      ['gardener', 'Gardener', 'folk', 'gardener', 4, 5, 'Welcomed a patient gardener'],
      ['fisher', 'Fisher', 'folk', 'fisher', 4, 5, 'Welcomed a river fisher'],
      ['merchant', 'Merchant', 'folk', 'merchant', 5, 7, 'Welcomed a travelling merchant'],
      ['keeper', 'Keeper', 'folk', 'keeper', 6, 8, 'Welcomed a lantern keeper'],
    ],
  },
  {
    id: 'magic',
    label: 'Magic',
    note: 'Wake old wonder',
    tools: [
      ['crystal', 'Prism', 'magic', 'prism', 7, 12, 'Woke a prism'],
      ['moonstone', 'Moonstone', 'magic', 'moonstone', 8, 13, 'Set a moonstone singing'],
      ['sunshard', 'Sunshard', 'magic', 'sunshard', 9, 15, 'Planted a sunshard'],
      ['rune', 'Runestone', 'magic', 'rune', 6, 10, 'Raised a humming runestone'],
      ['glowcap', 'Glowcap', 'magic', 'glowcap', 5, 8, 'Coaxed out a ring of glowcaps'],
      ['wisp', 'Wisp', 'magic', 'wisp', 10, 16, 'Called a gentle wisp'],
      ['starfall', 'Starfall', 'magic', 'starfall', 12, 19, 'Caught a fallen star'],
      ['portal', 'Portal', 'magic', 'portal', 18, 28, 'Opened a quiet portal'],
    ],
  },
  {
    id: 'wilds',
    label: 'Wilds',
    note: 'Place wild things',
    tools: [
      ['flowers', 'Wildflowers', 'prop', 'wildflowers', 1, 2, 'Scattered wildflowers'],
      ['rock', 'Stone', 'prop', 'rock', 1, 2, 'Set a weathered stone'],
      ['boulder', 'Boulder', 'prop', 'boulder', 2, 3, 'Rolled in a boulder'],
      ['log', 'Fallen Log', 'prop', 'log', 1, 2, 'Laid a fallen log'],
      ['mushrooms', 'Mushrooms', 'prop', 'mushrooms', 2, 3, 'Raised a mushroom ring'],
      ['beehive', 'Beehive', 'prop', 'beehive', 4, 6, 'Hung a busy beehive'],
      ['nest', 'Nest', 'prop', 'nest', 3, 4, 'Wove a quiet nest'],
      ['statue', 'Statue', 'prop', 'statue', 8, 12, 'Raised a small statue'],
    ],
  },
  {
    id: 'festive',
    label: 'Festive',
    note: 'Set the isle alight',
    tools: [
      ['lantern', 'Lantern', 'prop', 'lantern', 2, 3, 'Hung a warm lantern'],
      ['bonfire', 'Bonfire', 'prop', 'bonfire', 4, 6, 'Lit a gathering bonfire'],
      ['banner', 'Banner', 'prop', 'banner', 3, 4, 'Raised a fluttering banner'],
      ['sculpture', 'Sculpture', 'prop', 'sculpture', 6, 9, 'Set a curious sculpture'],
      ['fountain', 'Fountain', 'prop', 'fountain', 8, 12, 'Started a small fountain'],
      ['bench', 'Bench', 'prop', 'bench', 2, 3, 'Set a place to rest'],
      ['swing', 'Swing', 'prop', 'swing', 4, 6, 'Hung a garden swing'],
      ['kite', 'Kite', 'prop', 'kite', 3, 5, 'Tethered a bright kite'],
    ],
  },
];

export const TOOL_CATEGORIES = CATEGORY_DEFS.map((category) => ({
  id: category.id,
  label: category.label,
  note: category.note,
  icon: category.tools[0] ? FAMILY_STYLES[category.tools[0][2]].icon : 'prop',
  tools: category.tools.map((entry) => entry[0]),
}));

export const TOOLS = {};
for (const category of CATEGORY_DEFS) {
  for (const [id, label, family, style, cost, bloom, hint] of category.tools) {
    const familyStyle = FAMILY_STYLES[family];
    TOOLS[id] = {
      id,
      category: category.id,
      family,
      style,
      cost,
      bloom,
      label,
      hint,
      color: familyStyle.color,
      color2: familyStyle.color2,
      icon: familyStyle.icon,
    };
  }
}

export const TOOL_ICONS = {
  terrain:
    '<svg viewBox="0 0 32 32" aria-hidden="true"><path d="M3.5 24.2 12.4 11l5.2 7.6L20.8 15l7.7 9.2H3.5Z"/><path d="m9.4 15.8 3-4.8 3.1 4.6" fill="none" stroke="currentColor" stroke-width="1.4" stroke-linecap="round"/></svg>',
  tree:
    '<svg viewBox="0 0 32 32" aria-hidden="true"><path d="M16 3.8c5.7 5.7 9.8 9.5 9.8 14.1 0 4-3 6.8-6.9 6.8H13c-3.9 0-6.9-2.8-6.9-6.8 0-4.6 4.2-8.4 9.9-14.1Z"/><path d="M16 24.6v4.1M16 21.5v-5.2" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"/></svg>',
  water:
    '<svg viewBox="0 0 32 32" aria-hidden="true"><path d="M16 4.4c4.5 5.7 8 9.9 8 14.2A8 8 0 0 1 8 18.6c0-4.3 3.5-8.5 8-14.2Z"/><path d="M12 19.2c.7 2.2 2.2 3.3 4.4 3.5" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/></svg>',
  path:
    '<svg viewBox="0 0 32 32" aria-hidden="true"><path d="M8 28c0-6 7-6 7-11s-5-5-5-9" fill="none" stroke="currentColor" stroke-width="2.6" stroke-linecap="round"/><path d="M20 28c0-4 4-5 4-9" fill="none" stroke="currentColor" stroke-width="2.1" stroke-linecap="round" opacity=".55"/></svg>',
  home:
    '<svg viewBox="0 0 32 32" aria-hidden="true"><path d="M4.6 15.2 16 5l11.4 10.2"/><path d="M7.6 13.4v13.2h16.8V13.4" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linejoin="round"/><path d="M13 26.6v-7h6v7" fill="none" stroke="currentColor" stroke-width="1.6"/><path d="M20.6 8.1V4.2h3.1v6.7" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linejoin="round"/></svg>',
  shop:
    '<svg viewBox="0 0 32 32" aria-hidden="true"><path d="M5 12.2h22l-2.2-5.4H7.2L5 12.2Z"/><path d="M7 12.2v13.2h18V12.2M12.4 25.4v-8.2h7.2v8.2" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linejoin="round"/><path d="M5 12.2h22M9.5 8l1.2 4.2M14.6 8l.5 4.2M19.7 8l-.4 4.2M24.5 8l-1.1 4.2" fill="none" stroke="currentColor" stroke-width="1.3" opacity=".7"/></svg>',
  folk:
    '<svg viewBox="0 0 32 32" aria-hidden="true"><circle cx="16" cy="10" r="4.2"/><path d="M8 27c.3-5.1 3.3-8.1 8-8.1s7.7 3 8 8.1" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"/><path d="M16 5.5c2.7 0 4.6 1.4 4.6 3.9H11.4c0-2.5 1.9-3.9 4.6-3.9Z" fill="currentColor" opacity=".65"/></svg>',
  crystal:
    '<svg viewBox="0 0 32 32" aria-hidden="true"><path d="m16 2.8 8.6 11.3L16 29.2 7.4 14.1 16 2.8Z"/><path d="M7.8 14.1h16.4M16 3.1v25.8M16 14.1l-4.7 8.2M16 14.1l4.7 8.2" fill="none" stroke="currentColor" stroke-width="1.2" stroke-linejoin="round"/></svg>',
  prop:
    '<svg viewBox="0 0 32 32" aria-hidden="true"><path d="M9 25.5c-3.2-2.5-3-7.4 1-10.7 2-1.7 4.2-2.6 6-4.8 1.9 2.6 4.6 3.6 6.2 6.4 2.1 3.8.4 7.9-2.8 9.1H9Z"/><path d="M13.5 25.5c0-3.4 1.2-6.6 3.5-9.3" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/></svg>',
  festive:
    '<svg viewBox="0 0 32 32" aria-hidden="true"><path d="M16 3.2c2.5 3.3 4.5 5.6 4.5 8.2a4.5 4.5 0 1 1-9 0c0-2.6 2-4.9 4.5-8.2Z"/><path d="M16 16.2v12M10.5 28.2h11M12.5 20.8h7" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round"/><path d="M10.5 23.2h11" fill="none" stroke="currentColor" stroke-width="1.4" stroke-linecap="round" opacity=".6"/></svg>',
};
