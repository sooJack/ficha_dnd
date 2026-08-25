import { image } from "./imageNames";

const classRows = [
  ["artifice", "Artífice", 8, "Inteligência", 2, "Inventor e artesão mágico que transforma ferramentas, infusões e engenhocas em soluções para qualquer aventura.", "artesao-da-guilda"],
  ["barbaro", "Bárbaro", 12, "Força", 2, "Combatente feroz que transforma fúria em resistência e poder destrutivo.", "photo-1519074069444-1ba4fff66d16"],
  ["bardo", "Bardo", 8, "Carisma", 3, "Mestre da inspiração, música e magia, capaz de transformar qualquer grupo.", "photo-1518709594023-6eab9bab7b23"],
  ["clerigo", "Clérigo", 8, "Sabedoria", 2, "Sacerdote que canaliza poder sagrado para curar, proteger e punir.", "photo-1534447677768-be436bb09401"],
  ["druida", "Druida", 8, "Sabedoria", 2, "Guardião da ordem natural, das magias de terra e das formas animais.", "photo-1511497584788-876760111969"],
  ["feiticeiro", "Feiticeiro", 6, "Carisma", 2, "A magia nasce dentro dele e sua criatividade molda efeitos únicos.", "photo-1518709268805-4e9042af9f23"],
  ["guerreiro", "Guerreiro", 10, "Força ou Destreza", 2, "Especialista em combate, treinado em armas, armaduras e estilos diferentes.", "photo-1578662996442-48f60103fc96"],
  ["ladino", "Ladino", 8, "Destreza", 4, "Especialista em furtividade, perícias e ataques precisos.", "photo-1505635552518-3448f9e55d1d"],
  ["mago", "Mago", 6, "Inteligência", 2, "Estudioso da magia arcana que responde a ameaças com preparação.", "photo-1518709268805-4e9042af9f23"],
  ["monge", "Monge", 8, "Destreza e Sabedoria", 2, "Artista marcial que canaliza ki com velocidade e disciplina.", "photo-1549719386-74dfcbf7dbed"],
  ["paladino", "Paladino", 10, "Força e Carisma", 2, "Campeão sagrado que transforma convicção em cura e dano radiante.", "photo-1518709594023-6eab9bab7b23"],
  ["patrulheiro", "Patrulheiro", 10, "Destreza e Sabedoria", 3, "Batedor que conhece o terreno, persegue ameaças e usa magia primal.", "photo-1448375240586-882707db888b"],
  ["bruxo", "Bruxo", 8, "Carisma", 2, "Conjurador que troca favores com uma entidade poderosa.", "photo-1500534623283-312aade485b7"],
];

const casterClasses = ["bardo", "clerigo", "druida", "feiticeiro", "mago", "paladino", "patrulheiro", "bruxo"];
const categories = { artifice: "Especialista", barbaro: "Combatente", bardo: "Conjurador", clerigo: "Conjurador divino", druida: "Conjurador primal", feiticeiro: "Conjurador", guerreiro: "Combatente", ladino: "Especialista", mago: "Conjurador arcano", monge: "Combatente marcial", paladino: "Combatente sagrado", patrulheiro: "Especialista marcial", bruxo: "Conjurador" };

export const classes = classRows.map(([id, name, die, main, skills, text, photo]) => ({
  id, name, die, main, skills, text, image: image(photo, id), caster: casterClasses.includes(id), category: categories[id],
}));

export const classProficiencies = {
  barbaro: ["atletismo", "sobrevivencia"], bardo: ["atuacao", "persuasao"],
  clerigo: ["religiao", "medicina"], druida: ["natureza", "lidarAnimais"],
  feiticeiro: ["arcanismo"], guerreiro: ["atletismo", "intimidacao"],
  ladino: ["furtividade", "blefar"], mago: ["arcanismo", "historia"],
  monge: ["acrobacia", "religiao"], paladino: ["religiao", "atletismo"],
  patrulheiro: ["sobrevivencia", "percepcao"], bruxo: ["arcanismo", "intimidacao"],
};

export const classStartingItems = {
  barbaro: ["Machado de batalha", "Machadinha", "Mochila"], bardo: ["Espada curta", "Instrumento musical", "Couro"],
  clerigo: ["Maça", "Escudo", "Símbolo sagrado"], druida: ["Escudo", "Foco druídico", "Couro"],
  feiticeiro: ["Adaga", "Foco arcano", "Mochila"], guerreiro: ["Espada longa", "Escudo", "Cota de malha"],
  ladino: ["Adaga", "Ferramentas de ladrão", "Couro"], mago: ["Adaga", "Foco arcano", "Livro"],
  monge: ["Espada curta", "Mochila", "Rações (1 dia)"], paladino: ["Espada longa", "Escudo", "Símbolo sagrado"],
  patrulheiro: ["Arco longo", "Espada curta", "Couro"], bruxo: ["Adaga", "Foco arcano", "Couro"],
};

export const startingGoldByClass = {
  artifice: { dice: 4, multiplier: 10 }, barbaro: { dice: 2, multiplier: 10 }, bardo: { dice: 5, multiplier: 10 },
  bruxo: { dice: 4, multiplier: 10 }, clerigo: { dice: 5, multiplier: 10 }, druida: { dice: 2, multiplier: 10 },
  feiticeiro: { dice: 3, multiplier: 10 }, guerreiro: { dice: 5, multiplier: 10 }, ladino: { dice: 4, multiplier: 10 },
  mago: { dice: 4, multiplier: 10 }, monge: { dice: 5, multiplier: 1 }, paladino: { dice: 5, multiplier: 10 },
  patrulheiro: { dice: 5, multiplier: 10 },
};
