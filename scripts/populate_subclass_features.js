const fs = require('fs');

const appPath = 'd:/Projetos/VSCode/ficha_dnd/src/data/subclasses.jsx';
const mdPath = 'd:/Downloads/Subclasses_DnD_Organizadas.md';

const source = fs.readFileSync(appPath, 'utf8');
const markdown = fs.readFileSync(mdPath, 'utf8');
const classMap = {
  'Artífice': 'artifice',
  'Bárbaro': 'barbaro',
  'Bardo': 'bardo',
  'Clérigo': 'clerigo',
  'Druida': 'druida',
  'Feiticeiro': 'feiticeiro',
  'Guerreiro': 'guerreiro',
  'Ladino': 'ladino',
  'Mago': 'mago',
  'Monge': 'monge',
  'Paladino': 'paladino',
  'Patrulheiro': 'patrulheiro',
  'Bruxo': 'bruxo',
};

const normalize = (value = '') => String(value)
  .toLowerCase()
  .normalize('NFD')
  .replace(/[\u0300-\u036f]/g, '')
  .replace(/[*_]/g, '')
  .replace(/\(|\)/g, '')
  .replace(/[^a-z0-9\s]/g, ' ')
  .replace(/\s+/g, ' ')
  .trim();

const aliasMap = {
  'A Bruxa do Arquifada': 'Arquifada',
  'Serralheiro de Batalha': 'Batalhador de Aço',
  'Caminho do Gigante': 'Caminho do Quebrador de Mentes / Selvagem de Battlerager',
  'Guardião de Dracônico / Guardião das Feras': 'Guardião de Dracônico / Guardião das Feras',
  'Andarilho Feérico': 'Guardião de Dracônico / Guardião das Feras',
};

const parseFeatureFile = () => {
  const featuresByClass = {};
  let currentClass = null;
  let currentSubclass = null;
  let currentFeature = null;

  for (const raw of markdown.split(/\r?\n/)) {
    const line = raw.trimEnd();

    if (line.startsWith('# ')) {
      const title = line.slice(2).trim();
      currentClass = classMap[title] || null;
      currentSubclass = null;
      currentFeature = null;
      continue;
    }

    if (!currentClass) continue;

    if (line.startsWith('## ')) {
      let header = line.slice(3).trim();
      header = header.replace(/^\d+\.\s*/, '');
      header = header.replace(/\s*\(\*\*\*\*\*.*?\*\*\*\*\*\)\s*$/, '');
      currentSubclass = header.trim();
      if (!currentSubclass) {
        currentSubclass = null;
      } else {
        featuresByClass[currentClass] ??= {};
        featuresByClass[currentClass][currentSubclass] = [];
      }
      currentFeature = null;
      continue;
    }

    if (!currentSubclass) continue;

    const match = line.match(/^- \*\*Nível\s+(\d+)\s*[—-]\s*(.+?)\*\*:(.*)$/);
    if (match) {
      currentFeature = {
        level: Number(match[1]),
        name: match[2].trim(),
        detail: match[3].trim(),
      };
      featuresByClass[currentClass][currentSubclass].push(currentFeature);
      continue;
    }

    if (currentFeature && (line.startsWith('  - ') || (line.startsWith('  ') && !line.startsWith('    ')))) {
      currentFeature.detail += '\n' + line.trim();
    }
  }

  return featuresByClass;
};

const dataStart = source.indexOf('const subclassData = ');
const dataEnd = source.indexOf('const unlockLevels =');
const expression = source.slice(dataStart + 'const subclassData = '.length, dataEnd).trim();
const subclassData = Function(`return ${expression}`)();

const featureData = parseFeatureFile();
const output = {};

for (const [classId, options] of Object.entries(subclassData)) {
  output[classId] = {};

  for (const [appName] of options) {
    const targetNorm = normalize(appName);
    const candidates = Object.keys(featureData[classId] || {});

    let matchedName = candidates.find((name) => normalize(name) === targetNorm)
      || candidates.find((name) => normalize(name) === normalize(aliasMap[appName] || appName))
      || candidates.find((name) => normalize(name).replace(/^(o|a|os|as)\s+/, '') === targetNorm)
      || candidates.find((name) => normalize(name).replace(/^(o|a|os|as)\s+/, '') === normalize(aliasMap[appName] || appName));

    if (!matchedName) {
      const normalizedMap = candidates.map((name) => ({ name, norm: normalize(name) }));
      matchedName = normalizedMap.find(({ norm }) => norm.includes(targetNorm) || targetNorm.includes(norm))?.name || appName;
    }

    output[classId][appName] = (featureData[classId]?.[matchedName] || []).map((feature) => ({
      level: feature.level,
      name: feature.name,
      detail: String(feature.detail).replace(/\*\*/g, '').replace(/^:\s*/, '').trim(),
    }));
  }
}

const generated = `const exactSubclassFeatures = ${JSON.stringify(output, null, 2)};\n\nexport const subclassAbilities = Object.fromEntries(Object.entries(subclasses).map(([classId, options]) => [classId, Object.fromEntries(options.map((option) => [option.name, (exactSubclassFeatures[classId]?.[option.name] || []).map(({ level, name, detail }) => ({ level, name, detail }))]))]));\n`;

const startIndex = source.indexOf('const exactSubclassFeatures = {');
const newSource = source.slice(0, startIndex) + generated;
fs.writeFileSync(appPath, newSource, 'utf8');
console.log('Updated subclass feature data with exact markdown entries.');
