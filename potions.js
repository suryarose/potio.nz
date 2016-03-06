var POTIONS = [
  ['fire',  'water',  'steam'],
  ['air',   'water',  'bubbles'],
  ['air',   'fire',   'lightning'],
  ['air',   'air',    'sky'],
  ['air',   'earth',  'sky'],
  ['fire',  'earth',  'lava'],
  ['earth', 'water',  'bog'],
  ['water', 'water',  'pressure'],
  ['fire',  'fire',   'fireball'],
  ['water', 'bubbles',  'fizzywater'],
  ['pressure', 'earth', 'rock'],
  ['rock', 'fire', 'metal'],
  ['machine', 'bread', 'toaster'],
  ['flour', 'water', 'dough'],
  ['wheat', 'windmill', 'flour'],
  ['bread', 'toaster','toast'],
  ['metal', 'fire', 'oven'],
  ['dough','oven', 'bread'],
  ['seed', 'earth', 'plant'],
  ['metal', 'steam', 'boiler'],
  ['plant', 'water', 'tree'],
  ['life', 'tree', 'ape'],
  ['life', 'life', 'movement'],
  ['space', 'movement', 'time'],
  ['time', 'ape', 'human'],
  ['ape', 'human', 'strength'],
  ['superevolvedbeing', 'human', 'superhero'],
  ['strength', 'superhero', 'superman'],
  ['superhero', 'rock', 'kryptonite'],
  ['water', 'life', 'fish'],
  ['bread', 'human', 'baker'],
  ['superman', 'rock', 'kryptonite'],
  ['human', 'fish', 'mermaid'],
  ['fire', 'space', 'star'],
  ['rock', 'lava', 'volcano'],
  ['mountain', 'lava', 'volcano'],
  ['rock', 'rock', 'mountain'],
  ['earth', 'earth', 'hill'],
  ['sky', 'pressure', 'wind'],
  ['sky', 'sky', 'space'],
  ['rock', 'star', 'planet'],
  ['rock', 'space', 'asteroid'],
  ['earth', 'asteroid', 'meteorite'],
  ['time', 'space', 'spacetime'],
  ['time', 'star', 'supernova'],
  ['star', 'planet', 'solarsystem'],
  ['star', 'star', 'galaxy'],
  ['blade', 'tree', 'wood'],
  ['human', 'machine', 'cyborg '],
  ['rock', 'metal', 'blade'],
  ['blade', 'wood', 'wheel'],
  ['plough', 'earth', 'field'],
  ['time', 'machine', 'clock'],
  ['air', 'wheel', 'tyre'],
  ['tyre', 'flood', 'rubberring'],
  ['air', 'pressure', 'wind'],
  ['seed', 'water', 'plant'],
  ['sky', 'star', 'sun'],
  ['sky', 'fire', 'sun'],
  ['sun', 'plant', 'wheat'],
  ['life', 'earth', 'seed'],
  ['dustcloud', 'water', 'life'],
  ['human', 'star', 'nome'],
  ['machine', 'wheel', 'car'],
  ['blacksmith', 'diamond', 'ring'],
  ['tree', 'pressure', 'coal'],
  ['coal', 'pressure', 'diamond'],
  ['human', 'oven', 'blacksmith'],
  ['machine', 'space', 'spaceship'],
  ['human', 'space', 'astronaut'],
  ['human', 'human', 'love'],
  ['love', 'ring', 'marriage'],
  ['marriage', 'human', 'baby'],
  ['time', 'baby', 'child'],
  ['sky', 'water', 'cloud'],
  ['sun', 'rain', 'rainbow'],
  ['boiler', 'water', 'hotwater'],
  ['child', 'time', 'teenager'],
  ['teenager', 'time', 'adult'],
  ['adult', 'time', 'elder'],
  ['teenager', 'teenager', 'gang'],
  ['wheel', 'blade', 'cog'],
  ['cog', 'metal', 'machine'],
  ['time', 'elder', 'corpse'],
  ['corpse', 'time', 'baby'],
  ['oven', 'earth', 'brick'],
  ['brick', 'human', 'builder'],
  ['builder', 'brick', 'wall'],
  ['builder', 'wall', 'house'],
  ['wall', 'wall', 'house'],
  ['bread', 'house', 'bakery'],
  ['baby', 'bread', 'roll'],
  ['roll', 'house', 'bakery'],
  ['metal', 'human', 'robot'],
  ['superman', 'kryptonite', 'human'],
  ['rock', 'house', 'cave'],
  ['metal', 'metal', 'handle'],
  ['handle', 'blade', 'sword'],
  ['sword', 'human', 'knight'],
  ['sword', 'sword', 'doublesidedsword'],
  ['knight', 'knight', 'army'],
  ['fish', 'fish', 'school'],
  ['mountain', 'water', 'lake'],
  ['rock', 'time', 'sand'],
  ['sand', 'sand', 'desert'],
  ['desert', 'lake', 'oasis'],
  ['rock', 'roll', 'rockandroll'],
  ['earth', 'corpse', 'grave'],
  ['rock', 'grave', 'gravestone'],
  ['rainbow', 'rainbow', 'doublerainbow'],
  ['earth', 'blade', 'plough'],
  ['plant', 'desert', 'cactus'],
  ['cloud', 'water', 'rain'],
  ['cloud', 'life', 'sheep'],
  ['rockandroll', 'movement', 'dance'],
  ['human', 'dance', 'dancer'],
  ['tree', 'tree', 'forest'],
  ['sky', 'rock', 'moon'],
  ['machine', 'coal', 'train'],
  ['ape', 'baby', 'chimp'],
  ['ape', 'planet', 'planetoftheapes'],
  ['forest', 'human', 'path'],
  ['sheep', 'blade', 'wool'],
  ['plant', 'wool', 'cotton'],
  ['cotton', 'wheel', 'thread'],
  ['thread', 'human', 'weaver'],
  ['weaver', 'thread', 'loom'],
  ['thread', 'loom', 'cloth'],
  ['cloth', 'tree', 'hammock'],
  ['hammock', 'human', 'sleep'],
  ['baby', 'sleep', 'silence'],
  ['dustcloud', 'human', 'sneeze'],
  ['human', 'sneeze', 'mr.sneeze'],
  ['car', 'car', 'traffic'],
  ['car', 'path', 'road'],
  ['house', 'house', 'village'],
  ['house', 'village', 'town'],
  ['teenager', 'school', 'university'],
  ['university', 'teenager', 'student'],
  ['university', 'adult', 'maturestudent'],
  ['time', 'school', 'work'],
  ['time', 'university', 'dissertation'],
  ['work', 'builder', 'buildingsite'],
  ['movement', 'water', 'river'],
  ['lake', 'lake', 'sea'],
  ['sea', 'sea', 'ocean'],
  ['sea', 'sun', 'salt'],
  ['salt', 'sea', 'deadsea'],
  ['sky', 'life', 'bird'],
  ['space', 'life', 'alien'],
  ['earth', 'sun', 'solarsystem'],
  ['river', 'life', 'fish'],
  ['sea', 'life', 'dolphin'],
  ['ocean', 'life', 'whale'],
  ['sea', 'plant', 'seaweed'],
  ['wind', 'earth', 'dustcloud'],
  ['wind', 'rain', 'storm'],
  ['storm', 'river', 'flood'],
  ['storm', 'cloud', 'lightning'],
  ['lightning', 'metal', 'electricity'],
  ['electricity', 'metal', 'wire'],
  ['wire', 'electricity', 'circuit'],
  ['wire', 'wire', 'coil'],
  ['coil', 'electricity', 'magnet'],
  ['magnet', 'coil', 'electricity'],
  ['glass', 'coil', 'lightbulb'],
  ['lightbulb', 'electricity', 'light'],
  ['light', 'traffic', 'trafficlight'],
  ['sand', 'fire', 'glass'],
  ['sand', 'metal', 'siliconchip'],
  ['siliconchip', 'siliconchip', 'computer'],
  ['computer', 'computer', 'network'],
  ['network', 'network', 'internet'],
  ['electricity', 'electricity', 'surge'],
  ['sea', 'wood', 'boat'],
  ['train', 'house', 'station'],
  ['bird', 'metal', 'aeroplane'],
  ['aeroplane', 'cloud', 'vapourtrail'],
  ['lightning', 'bog', 'life'],
  ['asteroid', 'earth', 'life'],
  ['lightning', 'sky', 'thunder'],
  ['water', 'lava', 'rock'],
  ['star', 'explosion', 'supernova'],
  ['space', 'water', 'ice'],
  ['ice', 'space', 'comet'],
  ['comet', 'earth', 'life'],
  ['wind', 'wind', 'hurricane'],
  ['pressure', 'water', 'whirlpool'],
  ['whirlpool', 'hurricane', 'tornado'],
  ['adult', 'adult', 'love'],
  ['love', 'human', 'baby'],
  ['human', 'plant', 'food'],
  ['water', 'metal', 'bottle'],
  ['bottle', 'hotwater', 'hotwaterbottle'],
  ['bird', 'blade', 'feather'],
  ['feather', 'cloth', 'pillow'],
  ['wind', 'human', 'airbender'],
  ['earth', 'superevolvedbeing', 'earthbender'],
  ['flood', 'human', 'waterbender'],
  ['fireball', 'human', 'firebender'],
  ['time', 'human', 'superevolvedbeing'],
  ['whirlpool', 'space', 'blackhole'],
  ['wheat', 'house', 'windmill'],
  ['wind', 'house', 'windmill'],
  ['spaceship', 'fire', 'rocket'],
  ['spaceship', 'alien', 'flyingsaucer'],
  ['whirlpool', 'water', 'bermudatriangle'],
  ['tornado', 'water', 'bermudatriangle'],
  ['cloth', 'boat', 'sailboat'],
  ['sailboat', 'wood', 'mast'],
  ['child', 'rubberring', 'learner'],
  ['learner', 'time', 'swimer'],
  ['nome', 'computer', 'thething'],
  ['pressure', 'seed', 'oil'],
  ['oil', 'fire', 'plastic'],
  ['plastic', 'fire', 'tube'],
  ['tube', 'metal', 'pole'],
  ['cloth', 'pole', 'trampoline'],
  ['cloth', 'mast', 'sail'],
  ['movement', 'trampoline', 'bounce'],
  ['metal', 'buildingsite', 'scaffolding'],
  ['light', 'light', 'laser'],
  ['laser', 'sword', 'lightsaber'],
  ['lightsaber', 'human', 'jedi'],
  ['lightsaber', 'rock', 'crystal'],
  ['desert', 'life', 'camel'],
  ['food', 'thething', 'electricity'],
  ['fireball', 'space', 'star'],
  ['ice', 'machine', 'freezer'],
  ['ice', 'ice', 'iceberg'],
  ['storm', 'ice', 'blizzard'],
  ['ice', 'rain', 'hail'],
  ['bandage', 'corpse', 'mummy'],
  ['cloth', 'woond', 'bandage'],
  ['blade', 'human', 'cut'],
  ['house', 'triangale', 'pyramid'],
  ['thread', 'thread', 'string'],
  ['string', 'string', 'rope'],
  ['wood', 'pressure', 'paper'],
  ['wood', 'coal', 'penil'],
  ['penil', 'paper', 'point'],
  ['point', 'point', 'line'],
  ['point', 'line', 'triangale'],
  ['triangale', 'point', 'squre'],
  ['plant', 'thread', 'fibre'],
  ['fibre', 'fibre', 'pod'],
  ['pod', 'water', 'bean'],
  ['bean', 'oven', 'roastbeans'],
  ['roastbeans', 'rock', 'groundbeans'],
  ['groundbeans', 'hotwater', 'coffee'],
  ['fibre', 'tree', 'leaf'],
  ['leaf', 'hotwater', 'tea'],
  ['fibre', 'plant', 'leaf'],
  ['cut', 'cut', 'woond'],
  ['cut', 'water', 'blood'],
  ['metal', 'time', 'rust'],
  ['baby', 'food', 'milk'],
  ['milk', 'human', 'milkman'],
  ['milkman', 'car', 'milkfloat'],
  ['triangale', 'triangale', 'squre'],
  ['poo', 'life', 'worm'],
  ['worm', 'worm', 'worms'],
  ['worm', 'poo', 'threadworm'],
  ['worms', 'earth', 'wormhole'],
  ['human', 'food', 'poo'],
  ['life', 'time', 'death'],
  ['rain', 'seed', 'plant'],
  ['rain', 'plant', 'tree'],
  ['mountain', 'mountain', 'mountainrange'],
  ['child', 'child', 'friend'],
  ['tree', 'sun', 'shade'],
  ['bubbles', 'blade', 'soap'],
  ['child', 'bubbles', 'run'],
  ['movement', 'human', 'walk'],
  ['point', 'computer', 'pixel'],
  ['explosion', 'explosion', 'bigbang'],
  ['bigbang', 'time', 'universe'],
  ['universe', 'human', 'spirit'],
  ['spirit', 'human', 'conchesnes'],
  ['house', 'work', 'office'],
  ['explosion', 'volcano', 'eruption'],
  ['moon', 'asteroid', 'crater'],
  ['sea', 'path', 'miracale'],
  ['pressure', 'pressure', 'explosion'],
  ['movement', 'air', 'sound'],
  ['human', 'sound', 'talk'],
  ['baby', 'talk', 'nonsens'],
  ['baby', 'sound', 'cry'],
  ['baby', 'movement', 'crawl'],
  ['movement', 'earth', 'earthqake'],
  ['fire', 'ice', 'water'],
  ['ice', 'lake', 'icerink'],
  ['river', 'ice', 'glacier'],
  ['river', 'rock', 'waterfall'],
  ['cloth', 'human', 'clothes'],
  ['life', 'forest', 'anamal'],
  ['anamal', 'human', 'pet'],
  ['milk', 'baby','teeth'],
  ['teeth', 'baby', 'milkteeth'],
  ['blade', 'teeth', 'saw'],
  ['saw', 'electricity', 'chainsaw'],
  ['rope', 'metal', 'chain'],
  ['hill', 'hill', 'mountain'],
  ['hill', 'rock', 'mountain'],
  ['lava', 'water', 'rock'],
  ['plant', 'earth', 'grass'],
  ['grass', 'sun', 'hay'],
  ['hay', 'life', 'horse'],
  ['horse', 'car', 'cart'],
  ['cart', 'wheel', 'cartwheel']
];
