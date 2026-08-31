const https = require('https');
const fs = require('fs');

const fetchSpellData = async (spellIndex) => {
  return new Promise((resolve, reject) => {
    const url = `https://www.dnd5eapi.co/api/2014/spells/${spellIndex}`;
    https.get(url, (res) => {
      let data = '';
      res.on('data', chunk => { data += chunk; });
      res.on('end', () => {
        try {
          resolve(JSON.parse(data));
        } catch (e) {
          reject(e);
        }
      });
    }).on('error', reject);
  });
};

const fetchAllSpells = async () => {
  return new Promise((resolve, reject) => {
    https.get('https://www.dnd5eapi.co/api/2014/spells', (res) => {
      let data = '';
      res.on('data', chunk => { data += chunk; });
      res.on('end', () => {
        try {
          resolve(JSON.parse(data).results);
        } catch (e) {
          reject(e);
        }
      });
    }).on('error', reject);
  });
};

const main = async () => {
  console.log('Buscando lista de magias...');
  const spells = await fetchAllSpells();
  console.log(`Encontradas ${spells.length} magias`);

  const allSpellsData = [];
  
  for (let i = 0; i < spells.length; i++) {
    const spell = spells[i];
    try {
      console.log(`Processando [${i + 1}/${spells.length}] ${spell.name}...`);
      const fullSpell = await fetchSpellData(spell.index);
      allSpellsData.push({
        name: fullSpell.name,
        level: fullSpell.level || 0,
        desc: fullSpell.desc || [],
      });
      // Pequeno delay para não sobrecarregar a API
      await new Promise(r => setTimeout(r, 100));
    } catch (e) {
      console.error(`Erro ao buscar ${spell.name}:`, e.message);
    }
  }

  // Salvar dados em arquivo JSON
  fs.writeFileSync('spells_data.json', JSON.stringify(allSpellsData, null, 2));
  console.log('Dados salvos em spells_data.json');
  
  // Exibir os dados formatados para copiar
  console.log('\n=== DADOS DAS MAGIAS (colar em tradução) ===\n');
  allSpellsData.forEach(spell => {
    console.log(`${spell.name} (Level ${spell.level})`);
    if (spell.desc && spell.desc[0]) {
      console.log(`Description: ${spell.desc[0].substring(0, 100)}...`);
    }
    console.log('---');
  });
};

main().catch(console.error);
