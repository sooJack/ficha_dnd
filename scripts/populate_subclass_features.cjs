const fs = require('fs');

const appPath = 'd:/Projetos/VSCode/ficha_dnd/src/data/subclasses.jsx';
const mdPath = 'd:/Downloads/Subclasses_DnD_Organizadas.md';

const appSource = fs.readFileSync(appPath, 'utf8');
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

const aliasMap = {
  'Serralheiro de Batalha': 'Batalhador de Aço',
  'Caminho do Gigante': 'Caminho do Quebrador de Mentes / Selvagem de Battlerager',
};

const normalize = (value = '') => String(value)
  .toLowerCase()
  .normalize('NFD')
  .replace(/[\u0300-\u036f]/g, '')
  .replace(/[\*_]/g, '')
  .replace(/\(/g, '')
  .replace(/\)/g, '')
  .replace(/[^a-z0-9\s]/g, ' ')
  .replace(/\s+/g, ' ')
  .trim();

const parseSubclassData = () => {
  const start = appSource.indexOf('const subclassData = ');
  const end = appSource.indexOf('\nconst unlockLevels =');
  const literal = appSource.slice(start + 'const subclassData = '.length, end).trim();
  return Function(`return ${literal}`)();
};

const featureData = {};
let currentClass = null;
let currentSubclass = null;
let currentFeature = null;

for (const raw of markdown.split(/\r?\n/)) {
  const line = raw.trimEnd();

  if (line.startsWith('# ')) {
    currentClass = classMap[line.slice(2).trim()] || null;
    currentSubclass = null;
    currentFeature = null;
    continue;
  }

  if (!currentClass) continue;

  if (line.startsWith('## ')) {
    let header = line.slice(3).trim();
    header = header.replace(/^\d+\.\s*/, '');
    if (header.includes('(')) {
      header = header.split('(')[0].trim();
    }
    currentSubclass = header.trim();
    if (currentSubclass) {
      featureData[currentClass] ??= {};
      featureData[currentClass][currentSubclass] = [];
    }
    currentFeature = null;
    continue;
  }

  if (!currentSubclass) continue;

  if (line.startsWith('- **Nível ')) {
    const body = line.replace(/^\s*-\s*/, '');
    const titleStart = body.indexOf('Nível ');
    const titleEnd = body.indexOf(':**', titleStart);
    if (titleStart >= 0 && titleEnd >= 0) {
      const title = body.slice(titleStart, titleEnd);
      const match = title.match(/Nível\s+(\d+)\s*[-—]\s*(.+)$/);
      if (match) {
        currentFeature = {
          level: Number(match[1]),
          name: match[2].trim(),
          detail: body.slice(titleEnd + 3).trim(),
        };
        featureData[currentClass][currentSubclass].push(currentFeature);
      }
    }
    continue;
  }

  if (currentFeature && line.startsWith('  - ')) {
    currentFeature.detail += '\n' + line.trim();
  }
}

const subclassData = parseSubclassData();
const output = {};

for (const [classId, options] of Object.entries(subclassData)) {
  output[classId] = {};
  const candidates = Object.keys(featureData[classId] || {});

  for (const [appName] of options) {
    const target = normalize(appName);
    const alias = normalize(aliasMap[appName] || appName);
    const matchedName = candidates.find((name) => normalize(name) === target)
      || candidates.find((name) => normalize(name) === alias)
      || candidates.find((name) => normalize(name).includes(target) || target.includes(normalize(name)))
      || candidates.find((name) => normalize(name).includes(alias) || alias.includes(normalize(name)))
      || (aliasMap[appName] ? candidates.find((name) => normalize(name) === normalize(aliasMap[appName])) || aliasMap[appName] : null)
      || appName;

    output[classId][appName] = (featureData[classId]?.[matchedName] || []).map((feature) => ({
      level: feature.level,
      name: feature.name,
      detail: String(feature.detail).replace(/\*\*/g, '').replace(/^:\s*/, '').trim(),
    }));
  }
}

const replacement = `const exactSubclassFeatures = ${JSON.stringify(output, null, 2)};\n\n`;
const newSource = appSource.replace(/const exactSubclassFeatures = \{[\s\S]*?\n\};\n\n/, replacement);

fs.writeFileSync(appPath, newSource, 'utf8');
console.log('Exact subclass entries refreshed from markdown.');
