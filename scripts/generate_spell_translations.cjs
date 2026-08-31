// Este arquivo será gerado com todas as 319 magias traduzidas
// Script: gera tradução de todas as magias da D&D 5E

const fs = require('fs');
const spellsData = JSON.parse(fs.readFileSync('spells_data.json', 'utf8'));

// Dicionário manual de traduções de descri ções completas
// Você pode adicionar mais conforme necessário
const spellTranslations = {
  "Acid Arrow": "Uma flecha verde cintilante dispara em direção a um alvo dentro do alcance e explode em um jato de ácido. Faça um ataque à distância com magia contra o alvo. Em um acerto, o alvo sofre 4d4 de dano ácido imediatamente e 2d4 de dano ácido no fim do seu próximo turno. Em um erro, a flecha respinga o alvo com ácido por metade do dano inicial e nenhum dano no fim de seu próximo turno.",
  "Acid Splash": "Você arremessa uma bolha de ácido. Escolha uma criatura dentro do alcance ou escolha duas criaturas dentro do alcance que estejam a 5 pés uma da outra. Um alvo deve passar em um teste de resistência de Destreza ou sofrer 1d6 de dano ácido.",
  // ... mais traduções aqui
};

// Gerar lista de magias não traduzidas para referência
console.log('=== MAGIAS NÃO TRADUZIDAS ===\n');
const untranslated = spellsData.filter(spell => !spellTranslations[spell.name]);
console.log(`Total de magias não traduzidas: ${untranslated.length}`);
untranslated.forEach(spell => {
  console.log(`\n"${spell.name}" (Level ${spell.level}):`);
  if (spell.desc && spell.desc[0]) {
    console.log(`${spell.desc[0].substring(0, 200)}...`);
  }
});

// Salvar lista para tradução
fs.writeFileSync('untranslated_spells.json', JSON.stringify(untranslated, null, 2));
console.log('\n\nLista de não traduzidas salva em untranslated_spells.json');
