import { useEffect, useState } from "react";
import {
  ArrowLeft,
  ArrowRight,
  Backpack,
  BookOpen,
  Check,
  ClipboardCheck,
  Cloud,
  Dices,
  Download,
  Eye,
  Heart,
  History,
  Plus,
  ScrollText,
  Shield,
  Sparkles,
  Swords,
  Target,
  Trash2,
  Users,
} from "lucide-react";
import { FiMinus, FiPlus } from "react-icons/fi";
import { GiLevelThree } from "react-icons/gi";
import { image } from "./data/imageNames";
import "./App.css";

const attributes = [
  ["forca", "Força"],
  ["destreza", "Destreza"],
  ["constituicao", "Constituição"],
  ["inteligencia", "Inteligência"],
  ["sabedoria", "Sabedoria"],
  ["carisma", "Carisma"],
];
const skills = [
  ["acrobacia", "Acrobacia", "destreza"],
  ["arcanismo", "Arcanismo", "inteligencia"],
  ["atletismo", "Atletismo", "forca"],
  ["atuacao", "Atuação", "carisma"],
  ["blefar", "Blefar", "carisma"],
  ["furtividade", "Furtividade", "destreza"],
  ["historia", "História", "inteligencia"],
  ["intimidacao", "Intimidação", "carisma"],
  ["intuicao", "Intuição", "sabedoria"],
  ["investigacao", "Investigação", "inteligencia"],
  ["lidarAnimais", "Lidar com Animais", "sabedoria"],
  ["medicina", "Medicina", "sabedoria"],
  ["natureza", "Natureza", "inteligencia"],
  ["percepcao", "Percepção", "sabedoria"],
  ["persuasao", "Persuasão", "carisma"],
  ["prestidigitacao", "Prestidigitação", "destreza"],
  ["religiao", "Religião", "inteligencia"],
  ["sobrevivencia", "Sobrevivência", "sabedoria"],
];
const races = [
  [
    "humano",
    "Humano",
    "+1 em todos os atributos",
    9,
    "Versáteis e ambiciosos, os humanos aprendem depressa, formam comunidades em qualquer ambiente e podem seguir praticamente qualquer vocação.",
    "photo-1534528741775-53994a69daeb",
  ],
  [
    "elfo",
    "Elfo",
    "+2 Destreza",
    9,
    "Descendentes de uma linhagem feérica, elfos têm sentidos aguçados, resistência a encantamento e uma ligação profunda com a magia e a música.",
    "photo-1517841905240-472988babdf9",
  ],
  [
    "anao",
    "Anão",
    "+2 Constituição",
    7.5,
    "Forjados em montanhas e fortalezas, anões são resistentes, leais e habilidosos com ferramentas. Sua resistência anã os torna difíceis de derrubar.",
    "photo-1518709268805-4e9042af9f23",
  ],
  [
    "halfling",
    "Halfling",
    "+2 Destreza",
    7.5,
    "Pequenos e determinados, halflings atravessam perigos com uma sorte extraordinária, discrição natural e coragem que surpreende adversários maiores.",
    "photo-1544725176-7c40e5a71c5e",
  ],
  [
    "draconato",
    "Draconato",
    "+2 Força, +1 Carisma",
    9,
    "Com traços dracônicos e um sopro elemental herdado de sua ancestralidade, draconatos carregam orgulho, presença imponente e um forte senso de honra.",
    "photo-1577495508048-b635879837f1",
  ],
  [
    "gnomo",
    "Gnomo",
    "+2 Inteligência",
    7.5,
    "Gnomos são inventores incansáveis, curiosos e brilhantes. Sua magia ilusória e sua astúcia os ajudam a sobreviver em mundos grandes demais.",
    "photo-1535378917042-10a22c95931a",
  ],
  [
    "meio-elfo",
    "Meio-elfo",
    "+2 Carisma, +1 em dois",
    9,
    "Entre dois mundos, meio-elfos combinam a adaptabilidade humana com a graça élfica, criando pontes sociais e escolhendo seus próprios caminhos.",
    "photo-1548142813-c348350df52b",
  ],
  [
    "meio-orc",
    "Meio-orc",
    "+2 Força, +1 Constituição",
    9,
    "Meio-orcs unem força brutal a uma determinação feroz. Mesmo quando caem, sua resistência permite que continuem lutando.",
    "photo-1521119989659-a83eee488004",
  ],
  [
    "tiefling",
    "Tiefling",
    "+2 Carisma, +1 Inteligência",
    9,
    "Marcados por uma herança infernal, tieflings dominam fogo e escuridão, enfrentando preconceito com personalidade, astúcia e independência.",
    "photo-1506794778202-cad84cf45f1d",
  ],
].map(([id, name, bonus, speed, text, photo]) => ({
  id,
  name,
  bonus,
  speed,
  text,
  image: image(photo, id),
}));
const additionalRaces = [
  [
    "drow",
    "Elfo Negro (Drow)",
    "+2 Destreza, +1 Carisma",
    9,
    "Elfos subterrâneos com visão no escuro superior, magia inata e uma cultura marcada por intriga, devoção e sobrevivência nas profundezas.",
    "photo-1514924013411-cbf25faa35bb",
  ],
  [
    "alto-elfo",
    "Alto Elfo",
    "+2 Destreza, +1 Inteligência",
    9,
    "Elfos estudiosos e refinados, ligados às tradições arcanas e à memória de civilizações antigas.",
    "photo-1518709268805-4e9042af9f23",
  ],
  [
    "elfo-da-floresta",
    "Elfo da Floresta",
    "+2 Destreza, +1 Sabedoria",
    10.5,
    "Habitantes velozes das matas, mestres da camuflagem, do arco e dos caminhos naturais.",
    "photo-1448375240586-882707db888b",
  ],
  [
    "anao-da-colina",
    "Anão da Colina",
    "+2 Constituição, +1 Sabedoria",
    7.5,
    "Anões resistentes, atentos e ligados às tradições de clãs montanheses e comunidades duradouras.",
    "photo-1500534623283-312aade485b7",
  ],
  [
    "anao-da-montanha",
    "Anão da Montanha",
    "+2 Constituição, +2 Força",
    7.5,
    "Anões robustos criados para o trabalho pesado, a guerra e a defesa de fortalezas de pedra.",
    "photo-1464822759023-fed622ff2c3b",
  ],
  [
    "halfling-pes-leves",
    "Halfling Pés Leves",
    "+2 Destreza, +1 Carisma",
    7.5,
    "Halflings sociáveis e discretos, capazes de desaparecer em uma multidão e conquistar aliados com facilidade.",
    "photo-1511632765486-a01980e01a18",
  ],
  [
    "halfling-robusto",
    "Halfling Robusto",
    "+2 Destreza, +1 Constituição",
    7.5,
    "Halflings fortes e resistentes, acostumados a uma vida simples, prática e surpreendentemente perigosa.",
    "photo-1544725176-7c40e5a71c5e",
  ],
  [
    "gnomo-da-floresta",
    "Gnomo da Floresta",
    "+2 Inteligência, +1 Destreza",
    7.5,
    "Gnomos reservados que vivem entre árvores, animais e ilusões, protegendo seus pequenos refúgios.",
    "photo-1511497584788-876760111969",
  ],
  [
    "gnomo-das-rochas",
    "Gnomo das Rochas",
    "+2 Inteligência, +1 Constituição",
    7.5,
    "Inventores incansáveis que transformam metal, madeira e magia em engenhocas úteis e imprevisíveis.",
    "photo-1535378917042-10a22c95931a",
  ],
  [
    "aasimar",
    "Aasimar",
    "+2 Carisma",
    9,
    "Descendentes de uma linhagem celestial, guiados por uma centelha divina e pelo conflito entre destino e escolha pessoal.",
    "photo-1531123897727-8f129e1688ce",
  ],
  [
    "goblin",
    "Goblin",
    "+2 Destreza, +1 Constituição",
    9,
    "Pequenos sobreviventes engenhosos, rápidos e oportunistas, que prosperam quando ninguém os leva a sério.",
    "photo-1542909168-82c3e7fdca5c",
  ],
  [
    "bugbear",
    "Bugbear",
    "+2 Destreza, +1 Força",
    9,
    "Brutos de braços longos e passos silenciosos, especialistas em emboscadas e ataques inesperados.",
    "photo-1500648767791-00dcc994a43e",
  ],
  [
    "kobold",
    "Kobold",
    "+2 Destreza, +1 Inteligência",
    9,
    "Criaturas pequenas e astutas que compensam a fragilidade com armadilhas, cooperação e criatividade.",
    "photo-1506794778202-cad84cf45f1d",
  ],
  [
    "homem-lagarto",
    "Homem-Lagarto",
    "+2 Constituição, +1 Sabedoria",
    9,
    "Sobreviventes reptilianos práticos, ligados aos pântanos, à caça e a uma visão direta da natureza.",
    "photo-1500530855697-b586d89ba3ee",
  ],
  [
    "tabaxi",
    "Tabaxi",
    "+2 Destreza, +1 Carisma",
    9,
    "Viajantes felinos movidos por curiosidade, histórias, objetos fascinantes e a necessidade de descobrir o que existe além do horizonte.",
    "photo-1514888286974-6c03e2ca1dba",
  ],
  [
    "tortle",
    "Tortle",
    "+2 Força, +1 Sabedoria",
    7.5,
    "Povo-tartaruga paciente e resistente, que carrega sua própria casa e valoriza jornadas longas, observação e equilíbrio.",
    "photo-1517849845537-4d257902454a",
  ],
  [
    "firbolg",
    "Firbolg",
    "+2 Sabedoria, +1 Força",
    9,
    "Gigantes gentis das florestas, capazes de conversar com a natureza e desaparecer quando preferem a paz ao conflito.",
    "photo-1511497584788-876760111969",
  ],
  [
    "genasi",
    "Genasi",
    "+2 Constituição, +1 atributo ligado ao elemento",
    9,
    "Seres influenciados pelos planos elementais, manifestando vento, água, fogo ou terra em corpo e temperamento.",
    "photo-1500534623283-312aade485b7",
  ],
  [
    "golias",
    "Golias",
    "+2 Força, +1 Constituição",
    9,
    "Nascidos em montanhas, golias medem seu valor por desafios, resistência e pela capacidade de proteger seu grupo.",
    "photo-1464822759023-fed622ff2c3b",
  ],
  [
    "kenku",
    "Kenku",
    "+2 Destreza, +1 Sabedoria",
    9,
    "Povo alado sem voo que preserva memórias por imitação, usando astúcia, observação e vozes emprestadas.",
    "photo-1444464666168-49d633b86797",
  ],
  [
    "tritao",
    "Tritão",
    "+1 Força, +1 Constituição, +1 Carisma",
    9,
    "Defensores das profundezas que conhecem mares, monstros abissais e o peso de um juramento antigo.",
    "photo-1507525428034-b723cf961d3e",
  ],
  [
    "yuan-ti",
    "Yuan-ti",
    "+2 Carisma, +1 Inteligência",
    9,
    "Herdeiros de uma transformação serpentina, astutos e resistentes a venenos, magia e manipulação social.",
    "photo-1518709594023-6eab9bab7b23",
  ],
].map(([id, name, bonus, speed, text, photo]) => ({
  id,
  name,
  bonus,
  speed,
  text,
  image: image(photo, id),
}));
races.push(...additionalRaces);
const classes = [
  [
    "artifice",
    "Artífice",
    8,
    "Inteligência",
    2,
    "Inventor e artesão mágico que transforma ferramentas, infusões e engenhocas em soluções para qualquer aventura.",
    "artesao-da-guilda",
  ],
  [
    "barbaro",
    "Bárbaro",
    12,
    "Força",
    2,
    "Um combatente feroz que transforma fúria em resistência e poder destrutivo. Domina armas marciais e aguenta golpes que derrubariam outros heróis.",
    "photo-1519074069444-1ba4fff66d16",
  ],
  [
    "bardo",
    "Bardo",
    8,
    "Carisma",
    3,
    "Um mestre da inspiração, da música e da magia. Bardos usam conhecimento, encanto e criatividade para transformar qualquer grupo em uma companhia lendária.",
    "photo-1518709594023-6eab9bab7b23",
  ],
  [
    "clerigo",
    "Clérigo",
    8,
    "Sabedoria",
    2,
    "Um sacerdote escolhido por uma divindade, capaz de canalizar poder sagrado para curar aliados, proteger o grupo e punir inimigos.",
    "photo-1534447677768-be436bb09401",
  ],
  [
    "druida",
    "Druida",
    8,
    "Sabedoria",
    2,
    "Guardião da ordem natural, com magias de terra e vida e a capacidade de assumir formas animais para explorar, lutar e sobreviver.",
    "photo-1511497584788-876760111969",
  ],
  [
    "feiticeiro",
    "Feiticeiro",
    6,
    "Carisma",
    2,
    "A magia nasce dentro do feiticeiro: uma herança dracônica, uma influência cósmica ou um acaso impossível. Sua criatividade molda efeitos únicos.",
    "photo-1518709268805-4e9042af9f23",
  ],
  [
    "guerreiro",
    "Guerreiro",
    10,
    "Força ou Destreza",
    2,
    "Especialista em combate, treinado em todas as armas e armaduras. Sua disciplina permite dominar estilos diferentes e reagir antes que o perigo alcance o grupo.",
    "photo-1578662996442-48f60103fc96",
  ],
  [
    "ladino",
    "Ladino",
    8,
    "Destreza",
    4,
    "Um especialista em furtividade, perícias e ataques precisos. Ladinos vencem pela oportunidade certa, seja abrindo uma fechadura ou encontrando uma fraqueza.",
    "photo-1505635552518-3448f9e55d1d",
  ],
  [
    "mago",
    "Mago",
    6,
    "Inteligência",
    2,
    "Um estudioso da magia arcana que coleciona fórmulas em um grimório. Preparação, pesquisa e controle permitem ao mago responder a quase qualquer ameaça.",
    "photo-1518709268805-4e9042af9f23",
  ],
  [
    "monge",
    "Monge",
    8,
    "Destreza e Sabedoria",
    2,
    "Artista marcial que treina corpo e mente para canalizar ki. Velocidade, golpes desarmados e disciplina tornam o monge uma força móvel e imprevisível.",
    "photo-1549719386-74dfcbf7dbed",
  ],
  [
    "paladino",
    "Paladino",
    10,
    "Força e Carisma",
    2,
    "Um campeão sagrado ligado por um juramento. Sua presença fortalece aliados, enquanto sua energia divina transforma convicção em cura e dano radiante.",
    "photo-1518709594023-6eab9bab7b23",
  ],
  [
    "patrulheiro",
    "Patrulheiro",
    10,
    "Destreza e Sabedoria",
    3,
    "Batedor, caçador e explorador das fronteiras. Patrulheiros conhecem o terreno, perseguem ameaças e combinam armas com magia primal.",
    "photo-1448375240586-882707db888b",
  ],
  [
    "bruxo",
    "Bruxo",
    8,
    "Carisma",
    2,
    "Um conjurador que troca favores com uma entidade poderosa. Seu pacto concede magia singular, invocações e um patrono que sempre cobra suas dívidas.",
    "photo-1500534623283-312aade485b7",
  ],
].map(([id, name, die, main, skillsCount, text, photo]) => ({
  id,
  name,
  die,
  main,
  skills: skillsCount,
  text,
  image: image(photo, id),
  caster: [
    "bardo",
    "clerigo",
    "druida",
    "feiticeiro",
    "mago",
    "paladino",
    "patrulheiro",
    "bruxo",
  ].includes(id),
  category: {
    barbaro: "Combatente",
    bardo: "Conjurador",
    clerigo: "Conjurador divino",
    druida: "Conjurador primal",
    feiticeiro: "Conjurador",
    guerreiro: "Combatente",
    ladino: "Especialista",
    mago: "Conjurador arcano",
    monge: "Combatente marcial",
    paladino: "Combatente sagrado",
    patrulheiro: "Especialista marcial",
    bruxo: "Conjurador",
  }[id],
}));
const classProficiencies = {
  barbaro: ["atletismo", "sobrevivencia"], bardo: ["atuacao", "persuasao"],
  clerigo: ["religiao", "medicina"], druida: ["natureza", "lidarAnimais"],
  feiticeiro: ["arcanismo"], guerreiro: ["atletismo", "intimidacao"],
  ladino: ["furtividade", "blefar"], mago: ["arcanismo", "historia"],
  monge: ["acrobacia", "religiao"], paladino: ["religiao", "atletismo"],
  patrulheiro: ["sobrevivencia", "percepcao"], bruxo: ["arcanismo", "intimidacao"],
};
const classStartingItems = {
  barbaro: ["Machado de batalha", "Machadinha", "Mochila"], bardo: ["Espada curta", "Instrumento musical", "Couro"],
  clerigo: ["Maça", "Escudo", "Símbolo sagrado"], druida: ["Escudo", "Foco druídico", "Couro"],
  feiticeiro: ["Adaga", "Foco arcano", "Mochila"], guerreiro: ["Espada longa", "Escudo", "Cota de malha"],
  ladino: ["Adaga", "Ferramentas de ladrão", "Couro"], mago: ["Adaga", "Foco arcano", "Livro"],
  monge: ["Espada curta", "Mochila", "Rações (1 dia)"], paladino: ["Espada longa", "Escudo", "Símbolo sagrado"],
  patrulheiro: ["Arco longo", "Espada curta", "Couro"], bruxo: ["Adaga", "Foco arcano", "Couro"],
};
const startingGoldByClass = {
  artifice: { dice: 4, multiplier: 10 }, barbaro: { dice: 2, multiplier: 10 },
  bardo: { dice: 5, multiplier: 10 }, bruxo: { dice: 4, multiplier: 10 },
  clerigo: { dice: 5, multiplier: 10 }, druida: { dice: 2, multiplier: 10 },
  feiticeiro: { dice: 3, multiplier: 10 }, guerreiro: { dice: 5, multiplier: 10 },
  ladino: { dice: 4, multiplier: 10 }, mago: { dice: 4, multiplier: 10 },
  monge: { dice: 5, multiplier: 1 }, paladino: { dice: 5, multiplier: 10 },
  patrulheiro: { dice: 5, multiplier: 10 },
};
const backgroundStartingItems = {
  acolito: ["Símbolo sagrado", "Livro"], artesao: ["Ferramentas de artesão", "Roupas de viajante"],
  charlatao: ["Roupas finas", "Kit de disfarce"], criminoso: ["Ferramentas de ladrão", "Pé de cabra"],
  eremita: ["Kit de herbalismo", "Cobertor"], forasteiro: ["Cajado", "Armadilha de caça"],
  "heroi-do-povo": ["Ferramentas de artesão", "Pá"], marinheiro: ["Corda de cânhamo (15 m)", "Roupas comuns"],
  nobre: ["Roupas finas", "Anel de sinete"], sabio: ["Livro", "Tinta e pena"],
  soldado: ["Dados", "Roupas comuns"], artista: ["Disfarce", "Instrumento musical"],
  orfao: ["Pequena faca", "Lembrança dos pais"],
};
const subclassData = {
  artifice: [["Alquimista", "Especialista em reagentes mágicos e elixires experimentais para curar, proteger ou transformar o grupo."], ["Armeiro", "Transforma uma armadura pesada em uma extensão do próprio corpo, escolhendo o modelo Guardião ou Infiltrador."], ["Artilheiro", "Cria canhões mágicos que disparam energia destrutiva ou protegem aliados com campos de força."], ["Serralheiro de Batalha", "Combina magia e armas enquanto luta ao lado de um Defensor de Aço construído por ele." ]],
  barbaro: [["Caminho do Furioso", "Sua fúria se torna um frenesi agressivo, capaz de ampliar seus ataques ao custo de exaustão."], ["Caminho do Guerreiro Totêmico", "Você se liga a espíritos animais e escolhe dons do totem, como a resistência do Urso."]],
  bardo: [["Colégio do Conhecimento", "Domina segredos, perícias e Palavras Cortantes para atrapalhar inimigos e ampliar sua versatilidade."], ["Colégio da Bravura", "Inspira aliados no combate e combina armaduras, armas marciais e música heroica."]],
  bruxo: [["A Bruxa do Arquifada", "Um patrono feérico concede ilusões, teleporte defensivo, invisibilidade e encantamento."], ["O Corruptor", "Um pacto infernal recompensa a queda de inimigos com vitalidade temporária e poder destrutivo."], ["O Grande Antigo", "Uma entidade cósmica desperta talentos mentais e comunicação telepática."]],
  clerigo: [["Domínio do Conhecimento", "A fé em deuses da erudição concede idiomas, perícias e recursos para descobrir segredos."], ["Domínio da Vida", "Aprimora curas e canaliza energia divina para manter aliados vivos."], ["Domínio da Luz", "Usa luz e fogo sagrado para revelar ameaças e punir inimigos."], ["Domínio da Natureza", "Recebe dons druídicos e influência sobre animais e plantas."], ["Domínio da Tempestade", "Controla trovão e relâmpago, maximizando o dano de descargas divinas."], ["Domínio da Trapaça", "Cria uma duplicata ilusória e usa engano para reposicionar e confundir o campo."], ["Domínio da Guerra", "Lidera a linha de frente e concede ataques e bônus táticos aos aliados."]],
  druida: [["Círculo da Terra", "Um bioma escolhido amplia suas magias e permite recuperar energia mágica durante descansos."], ["Círculo da Lua", "Aprimora a Forma Selvagem para assumir feras mais perigosas e lutar na linha de frente."]],
  feiticeiro: [["Linhagem Dracônica", "Uma herança dracônica fortalece sua defesa, vitalidade e dano do elemento ancestral."], ["Magia Selvagem", "O caos mágico pode provocar surtos imprevisíveis quando você conjura."]],
  guerreiro: [["Campeão", "Aperfeiçoa o corpo e amplia a chance de acertos críticos com armas."], ["Mestre de Batalha", "Usa Dados de Superioridade para executar manobras táticas durante os ataques."], ["Cavaleiro Arcano", "Combina combate marcial com magias de Abjuração e Evocação."]],
  ladino: [["Assassino", "Especialista em infiltração e ataques contra inimigos desprevenidos, com críticos devastadores."], ["Larápio", "Usa a Ação Astuta para interagir com objetos e se move com facilidade por telhados e superfícies."], ["Trapaceiro Arcano", "Usa Ilusão, Encantamento e uma Mão de Mago invisível para seus golpes e crimes."]],
  mago: [["Escola de Abjuração", "Cria barreiras arcanas para absorver dano e proteger o grupo."], ["Escola de Conjuração", "Invoca criaturas e objetos e pode trocar de posição em situações de perigo."], ["Escola de Adivinhação", "Usa Portento para substituir rolagens por resultados guardados no início do dia."], ["Escola de Encantamento", "Controla mentes e redireciona ataques contra alvos próximos."], ["Escola de Evocação", "Molda magias de área para preservar aliados e maximizar sua destruição."], ["Escola de Ilusão", "Altera ilusões e cria duplicatas para enganar sentidos e ataques."], ["Escola de Necromancia", "Manipula energia vital, recupera vida e fortalece lacaios mortos-vivos."], ["Escola de Transmutação", "Altera matéria e cria uma Pedra de Transmutação com benefícios escolhidos."]],
  monge: [["Caminho da Mão Aberta", "Aprimora a Rajada de Golpes para empurrar, derrubar ou impedir reações."], ["Caminho das Sombras", "Usa ki para conjurar efeitos furtivos e viajar entre áreas de sombra."], ["Caminho dos Quatro Elementos", "Canaliza ki para moldar terra, água, fogo e ar em técnicas de combate."]],
  paladino: [["Juramento de Devoção", "Um cavaleiro sagrado canaliza honra, luz divina e uma aura contra encantamento."], ["Juramento dos Anciões", "Protege a luz natural e concede resistência a dano de magias aos aliados próximos."], ["Juramento de Vingança", "Foca um inimigo e obtém vantagem persistente para persegui-lo e derrotá-lo."]],
  patrulheiro: [["Caçador", "Escolhe táticas para punir inimigos feridos ou atacar múltiplos alvos."], ["Mestre das Feras", "Luta em parceria com um companheiro animal treinado e leal."]],
};
const subclassSlug = (name) => name.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "").replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "");
const subclasses = Object.fromEntries(Object.entries(subclassData).map(([classId, options]) => [classId, options.map(([name, detail]) => ({
  name,
  detail,
  image: `${import.meta.env.BASE_URL}images/subclasses/${classId}-${subclassSlug(name)}.jpg`,
}))]));
const subclassLevels = { artifice: 3, barbaro: 3, bardo: 3, bruxo: 1, clerigo: 1, druida: 2, feiticeiro: 1, guerreiro: 3, ladino: 3, mago: 2, monge: 3, paladino: 3, patrulheiro: 3 };
const classFeatures = {
  1: "Proficiência +2 · característica inicial da classe", 2: "Nova característica de classe · recurso de combate",
  3: "Escolha de subclasse · característica da subclasse", 4: "Aumento de atributo ou talento",
  5: "Proficiência +3 · melhoria marcante de combate", 8: "Aumento de atributo ou talento",
  12: "Aumento de atributo ou talento", 16: "Aumento de atributo ou talento",
  19: "Aumento de atributo ou talento", 20: "Característica final da classe",
};
const backgrounds = [
  [
    "acolito",
    "Acólito",
    "Intuição e Religião",
    15,
    "Você passou a vida em um templo, servindo uma divindade e aprendendo ritos, dogmas, hospitais e os costumes de fiéis.",
  ],
  [
    "artesao",
    "Artesão da Guilda",
    "Intuição e Persuasão",
    15,
    "Membro de uma guilda respeitada, você aprendeu um ofício, fez contatos comerciais e sabe negociar seu lugar no mundo.",
  ],
  [
    "charlatao",
    "Charlatão",
    "Blefar e Prestidigitação",
    15,
    "Você viveu de identidades falsas, truques e leitura de pessoas, transformando credulidade alheia em oportunidade.",
  ],
  [
    "criminoso",
    "Criminoso",
    "Blefar e Furtividade",
    15,
    "Sobreviveu nas sombras, conhecendo redes ilegais, códigos, contrabando e as rotas discretas que a sociedade ignora.",
  ],
  [
    "eremita",
    "Eremita",
    "Medicina e Religião",
    5,
    "Anos de isolamento deram a você contemplação, práticas de cura e uma descoberta importante que ainda precisa ser compreendida.",
  ],
  [
    "forasteiro",
    "Forasteiro",
    "Atletismo e Sobrevivência",
    10,
    "Você cresceu longe da civilização, aprendeu a encontrar abrigo, rastrear presas e atravessar ambientes hostis.",
  ],
  [
    "heroi-do-povo",
    "Herói do Povo",
    "Adestrar Animais e Sobrevivência",
    10,
    "Uma pessoa comum que se levantou para defender sua comunidade e ganhou reputação por coragem, generosidade e persistência.",
  ],
  [
    "marinheiro",
    "Marinheiro",
    "Atletismo e Percepção",
    10,
    "A vida no convés ensinou você a lidar com tempestades, cordas, mapas, hierarquias e a camaradagem de uma tripulação.",
  ],
  [
    "nobre",
    "Nobre",
    "História e Persuasão",
    25,
    "Você conhece etiqueta, genealogia e política por ter nascido em uma família influente, ainda que seu relacionamento com esse legado seja complexo.",
  ],
  [
    "sabio",
    "Sábio",
    "Arcanismo e História",
    10,
    "Pesquisador e estudioso, você passou anos em bibliotecas reunindo fatos, teorias e pistas sobre uma pergunta que não o abandona.",
  ],
  [
    "soldado",
    "Soldado",
    "Atletismo e Intimidação",
    10,
    "Treinado em uma força organizada, você conhece disciplina, logística, ordens e o custo humano de uma guerra.",
  ],
  [
    "artista",
    "Artista",
    "Acrobacia e Atuação",
    15,
    "Você ganhou a vida diante de plateias, viajando entre cidades e aprendendo a conquistar atenção com talento e presença.",
  ],
  [
    "orfao",
    "Órfão",
    "Furtividade e Prestidigitação",
    10,
    "Criado nas ruas, você aprendeu a se mover sem ser visto, encontrar recursos e identificar rapidamente quem merece confiança.",
  ],
].map(([id, name, prof, gold, text]) => ({
  id,
  name,
  prof,
  gold,
  text,
  image: image(
    {
      acolito: "photo-1542810634-71277d95dcbb",
      artesao: "photo-1452860606245-08befc0ff44b",
      charlatao: "photo-1520201163981-8cc95007dd2f",
      criminoso: "photo-1503843053164-9d7f07fb2e11",
      eremita: "photo-1499209974431-9dddcece7f88",
      forasteiro: "photo-1464822759023-fed622ff2c3b",
      "heroi-do-povo": "photo-1531206715517-5c0ba140b2b8",
      marinheiro: "photo-1500375592092-40eb2168fd21",
      nobre: "photo-1511632765486-a01980e01a18",
      sabio: "photo-1481627834876-b7833e8f5570",
      soldado: "photo-1541339907198-e08756dedf3f",
      artista: "photo-1524368535928-5b5e00ddc76b",
      orfao: "photo-1472162072942-cd5147eb3902",
    }[id],
    id,
  ),
}));
const feats = [
  [
    "Alerta",
    "Você recebe +5 na iniciativa, não pode ser surpreendido enquanto estiver consciente e criaturas escondidas não ganham vantagem contra você.",
    "Combate",
  ],
  [
    "Atleta",
    "Aumenta sua mobilidade: levantar-se custa menos movimento, escalar exige menos esforço e seus saltos melhoram. Também permite aumentar Força ou Destreza.",
    "Aprimoramento",
  ],
  [
    "Conjurador de Guerra",
    "Você tem vantagem em testes para manter concentração e pode realizar componentes somáticos mesmo segurando armas ou escudo.",
    "Magia",
  ],
  [
    "Resiliente",
    "Escolha um atributo, aumente-o em 1 e ganhe proficiência nos testes de resistência desse atributo.",
    "Defesa",
  ],
  [
    "Sortudo",
    "Você possui 3 pontos de sorte por descanso longo para rolar dados adicionais em ataques, testes ou defesas.",
    "Fortuna",
  ],
  [
    "Mestre de Armas Grandes",
    "Ataques com armas pesadas podem causar dano extra quando você aceita uma penalidade no ataque; um crítico ou queda permite outro ataque.",
    "Combate",
  ],
  [
    "Mestre de Armaduras Pesadas",
    "Aumenta sua Força e reduz dano físico enquanto usa armadura pesada, tornando você uma muralha no campo de batalha.",
    "Defesa",
  ],
  [
    "Mestre de Escudo",
    "Você pode usar uma ação bônus para empurrar com o escudo e melhora sua defesa contra efeitos que exigem testes de Destreza.",
    "Defesa",
  ],
  [
    "Observador",
    "Você nota detalhes ocultos com mais facilidade, lê lábios e recebe bônus em Sabedoria ou Inteligência.",
    "Exploração",
  ],
  [
    "Perito",
    "Escolha perícias ou ferramentas: você ganha proficiência e dobra o bônus de proficiência em usos nos quais já é treinado.",
    "Especialista",
  ],
  [
    "Sentinela",
    "Você aproveita melhor ataques de oportunidade, pode parar inimigos que tentam escapar e pune quem ataca seus aliados.",
    "Combate",
  ],
  [
    "Resistente",
    "Seu máximo de pontos de vida aumenta e você se recupera com mais eficiência durante descansos.",
    "Defesa",
  ],
  [
    "Móvel",
    "Sua velocidade aumenta, terreno difícil não reduz seu movimento após um ataque e você evita ataques de oportunidade de alvos atingidos.",
    "Mobilidade",
  ],
].map(([name, text, category]) => ({ name, text, category }));
const itemCatalog = [
  ["Adaga", 2, "Armas"], ["Arco curto", 25, "Armas"], ["Arco longo", 50, "Armas"],
  ["Besta leve", 25, "Armas"], ["Besta pesada", 50, "Armas"], ["Espada curta", 10, "Armas"],
  ["Espada longa", 15, "Armas"], ["Machado de batalha", 10, "Armas"], ["Machadinha", 5, "Armas"],
  ["Maça", 5, "Armas"], ["Martelo de guerra", 15, "Armas"], ["Lança", 1, "Armas"],
  ["Cajado", 5, "Armas"], ["Cota de malha", 75, "Armaduras"], ["Couro", 10, "Armaduras"],
  ["Escudo", 10, "Armaduras"], ["Mochila", 2, "Diversos"], ["Corda de cânhamo (15 m)", 1, "Diversos"],
  ["Tocha", 0.01, "Diversos"], ["Pederneira", 0.5, "Diversos"], ["Rações (1 dia)", 0.5, "Diversos"],
  ["Cantil", 0.2, "Diversos"], ["Kit de curandeiro", 5, "Diversos"], ["Livro", 25, "Diversos"],
  ["Símbolo sagrado", 5, "Diversos"], ["Foco arcano", 10, "Diversos"], ["Foco druídico", 5, "Diversos"],
  ["Instrumento musical", 2, "Diversos"], ["Ferramentas de artesão", 10, "Diversos"],
  ["Roupas de viajante", 2, "Diversos"], ["Roupas comuns", 0.5, "Diversos"], ["Roupas finas", 15, "Diversos"],
  ["Kit de disfarce", 25, "Diversos"], ["Pé de cabra", 2, "Diversos"], ["Kit de herbalismo", 5, "Diversos"],
  ["Cobertor", 0.5, "Diversos"], ["Armadilha de caça", 5, "Diversos"], ["Pá", 2, "Diversos"],
  ["Anel de sinete", 5, "Diversos"], ["Tinta e pena", 10, "Diversos"], ["Dados", 0.1, "Diversos"],
  ["Disfarce", 1, "Diversos"], ["Pequena faca", 0.2, "Diversos"], ["Lembrança dos pais", 0, "Diversos"],
  ["Ferramentas de ladrão", 25, "Diversos"], ["Kit de escalada", 25, "Kits e Pacotes"],
  ["Kit de primeiros socorros", 5, "Kits e Pacotes"],
].map(([name, price, category]) => ({ name, price, category }));
const equipmentPacks = [
  ["Pacote de Artista", 40, "Mochila, saco de dormir, duas fantasias, velas, rações, cantil e kit de disfarce."],
  ["Pacote de Diplomata", 39, "Baú, caixas para mapas, roupas finas, tinta, pena, lâmpada, óleo, papel, perfume, parafina e sabão."],
  ["Pacote de Estudioso", 40, "Mochila, livro de estudo, tinta, pena, pergaminho, areia e pequena faca."],
  ["Pacote de Explorador", 10, "Mochila, saco de dormir, kit de refeição, caixa de fogo, tochas, rações, cantil e 15 m de corda."],
  ["Pacote de Sacerdote", 19, "Mochila, cobertor, velas, caixa de fogo, caixa de esmolas, incenso, incensário, vestes, rações e cantil."],
].map(([name, price, detail]) => ({ name, price, detail }));
const spells = [
  {
    name: "Luz",
    level: 0,
    school: "Evocação",
    damage: "—",
    detail:
      "Um objeto passa a emitir luz intensa em uma área próxima por até uma hora.",
  },
  {
    name: "Mãos Mágicas",
    level: 0,
    school: "Conjuração",
    damage: "—",
    detail:
      "Uma mão espectral manipula objetos leves, abre recipientes e entrega itens à distância.",
  },
  {
    name: "Raio de Gelo",
    level: 0,
    school: "Evocação",
    damage: "1d8 frio",
    detail:
      "Projétil gelado atinge uma criatura, causa dano de frio e reduz seu deslocamento brevemente.",
  },
  {
    name: "Toque Chocante",
    level: 0,
    school: "Evocação",
    damage: "1d8 elétrico",
    detail:
      "Eletricidade percorre o alvo em alcance corpo a corpo e impede reações até o próximo turno.",
  },
  {
    name: "Prestidigitação",
    level: 0,
    school: "Transmutação",
    damage: "—",
    detail:
      "Pequenos efeitos mágicos alteram sons, aromas, marcas e objetos por alguns instantes.",
  },
  {
    name: "Mísseis Mágicos",
    level: 1,
    school: "Evocação",
    damage: "3d4 + 3 força",
    detail:
      "Projéteis de energia atingem alvos escolhidos e não dependem de uma jogada de ataque.",
  },
  {
    name: "Curar Ferimentos",
    level: 1,
    school: "Evocação",
    damage: "1d8 + mod. cura",
    detail: "Energia vital restaura pontos de vida de uma criatura tocada.",
  },
  {
    name: "Escudo",
    level: 1,
    school: "Abjuração",
    damage: "—",
    detail:
      "Uma barreira instantânea aumenta sua defesa e bloqueia mísseis mágicos até seu próximo turno.",
  },
  {
    name: "Mãos Flamejantes",
    level: 1,
    school: "Evocação",
    damage: "3d6 fogo",
    detail:
      "Uma onda de chamas se espalha em cone; criaturas fazem resistência de Destreza.",
  },
  {
    name: "Sono",
    level: 1,
    school: "Encantamento",
    damage: "—",
    detail:
      "Energia sonífera afeta criaturas em uma área começando pelas que têm menos vitalidade.",
  },
  {
    name: "Imobilizar Pessoa",
    level: 2,
    school: "Encantamento",
    damage: "—",
    detail:
      "Uma criatura humanoide faz resistência de Sabedoria ou fica paralisada enquanto mantiver a condição.",
  },
  {
    name: "Invisibilidade",
    level: 2,
    school: "Ilusão",
    damage: "—",
    detail:
      "O alvo desaparece até atacar, conjurar magia ou perder a concentração.",
  },
];
const steps = [
  ["conceito", "Conceito", ScrollText],
  ["raca", "Raça", Users],
  ["classe", "Classe", Swords],
  ["subclasse", "Subclasse", Shield],
  ["magias", "Magias e Truques", Sparkles],
  ["antecedente", "Antecedente", BookOpen],
  ["atributos", "Atributos", Dices],
  ["pericias", "Pericias", Target],
  ["talentos", "Talentos", Sparkles],
  ["equipamentos", "Itens e Ouro", Backpack],
  ["personalidade", "Personalidade", Heart],
  ["aparencia", "Aparência", Eye],
  ["historia", "História", History],
  ["revisao", "Ficha 5e", ClipboardCheck],
];
const pointCosts = { 8: 0, 9: 1, 10: 2, 11: 3, 12: 4, 13: 5, 14: 7, 15: 9 };
const featLevels = [4, 8, 12, 16, 19];
const racialBonuses = {
  humano: {
    forca: 1,
    destreza: 1,
    constituicao: 1,
    inteligencia: 1,
    sabedoria: 1,
    carisma: 1,
  },
  elfo: { destreza: 2 },
  anao: { constituicao: 2 },
  halfling: { destreza: 2 },
  draconato: { forca: 2, carisma: 1 },
  gnomo: { inteligencia: 2 },
  "meio-elfo": { carisma: 2 },
  "meio-orc": { forca: 2, constituicao: 1 },
  tiefling: { carisma: 2, inteligencia: 1 },
  drow: { destreza: 2, carisma: 1 },
  "alto-elfo": { destreza: 2, inteligencia: 1 },
  "elfo-da-floresta": { destreza: 2, sabedoria: 1 },
  "anao-da-colina": { constituicao: 2, sabedoria: 1 },
  "anao-da-montanha": { constituicao: 2, forca: 2 },
  "halfling-pes-leves": { destreza: 2, carisma: 1 },
  "halfling-robusto": { destreza: 2, constituicao: 1 },
  "gnomo-da-floresta": { inteligencia: 2, destreza: 1 },
  "gnomo-das-rochas": { inteligencia: 2, constituicao: 1 },
  aasimar: { carisma: 2 },
  goblin: { destreza: 2, constituicao: 1 },
  bugbear: { destreza: 2, forca: 1 },
  kobold: { destreza: 2, inteligencia: 1 },
  "homem-lagarto": { constituicao: 2, sabedoria: 1 },
  tabaxi: { destreza: 2, carisma: 1 },
  tortle: { forca: 2, sabedoria: 1 },
  firbolg: { sabedoria: 2, forca: 1 },
  genasi: { constituicao: 2 },
  golias: { forca: 2, constituicao: 1 },
  kenku: { destreza: 2, sabedoria: 1 },
  tritao: { forca: 1, constituicao: 1, carisma: 1 },
  "yuan-ti": { carisma: 2, inteligencia: 1 },
};
const elementOptions = ["Ácido", "Frio", "Fogo", "Elétrico", "Venenoso"].map((name) => name);
const freshCharacter = () => ({
  name: "",
  player: "",
  pronoun: "",
  level: 1,
  race: "",
  element: "",
  classId: "",
  background: "",
  subclass: "",
  alignment: "",
  attrs: Object.fromEntries(attributes.map(([key]) => [key, 8])),
  skills: {},
  feats: [],
  equipment: [],
  gold: 0,
  goldRolled: false,
  goldRoll: null,
  combat: { ac: 10, hp: 0, speed: 9 },
  spells: [],
  personality: { traits: "", ideals: "", bonds: "", flaws: "" },
  appearance: { age: "", height: "", eyes: "", hair: "", description: "" },
  story: "",
});
const modifier = (value) => Math.floor((value - 10) / 2);
const signed = (value) => (value >= 0 ? `+${value}` : value);
const spellDamage = (damage) => {
  if (!damage || damage === "—") return null;
  const match = damage.match(/^(.+?)\s+([^\s]+)$/);
  return { amount: match?.[1] || damage, type: match?.[2] || "efeito" };
};
const englishSchoolNames = {
  Abjuration: "Abjuração",
  Conjuration: "Conjuração",
  Divination: "Adivinhação",
  Enchantment: "Encantamento",
  Evocation: "Evocação",
  Illusion: "Ilusão",
  Necromancy: "Necromancia",
  Transmutation: "Transmutação",
};
const spellNameTranslations = {
  "Acid Splash": "Borrifo Ácido", "Aid": "Auxílio", "Alarm": "Alarme", "Alter Self": "Alterar-se", "Animal Friendship": "Amizade Animal", "Animal Messenger": "Mensageiro Animal", "Animal Shapes": "Formas Animais", "Animate Dead": "Animar Mortos", "Animate Objects": "Animar Objetos", "Antilife Shell": "Concha Antivida", "Antimagic Field": "Campo Antimagia", "Antipathy/Sympathy": "Antipatia/Simpatia", "Arcane Eye": "Olho Arcano", "Arcane Hand": "Mão de Bigby", "Arcane Lock": "Tranca Arcana", "Astral Projection": "Projeção Astral", "Augury": "Augúrio", "Awaken": "Despertar", "Bane": "Perdição", "Banishment": "Banimento", "Barkskin": "Pele de Árvore", "Beacon of Hope": "Farol de Esperança", "Bestow Curse": "Amaldiçoar", "Black Tentacles": "Tentáculos Negros de Evard", "Blade Barrier": "Barreira de Lâminas", "Bless": "Abençoar", "Blight": "Definhar", "Blindness/Deafness": "Cegueira/Surdez", "Blink": "Piscar", "Blur": "Reflexos", "Branding Smite": "Marca da Punição", "Burning Hands": "Mãos Flamejantes", "Call Lightning": "Convocar Relâmpagos", "Calm Emotions": "Acalmar Emoções", "Chain Lightning": "Corrente de Relâmpagos", "Charm Person": "Enfeitiçar Pessoa", "Chill Touch": "Toque Arrepiante", "Circle of Death": "Círculo da Morte", "Clairvoyance": "Clarividência", "Clone": "Clone", "Cloudkill": "Névoa Mortal", "Color Spray": "Leque de Cores", "Command": "Comando", "Commune": "Comunhão", "Commune with Nature": "Comunhão com a Natureza", "Comprehend Languages": "Compreender Idiomas", "Compulsion": "Compulsão", "Cone of Cold": "Cone de Frio", "Confusion": "Confusão", "Conjure Animals": "Conjurar Animais", "Conjure Celestial": "Conjurar Celestial", "Conjure Elemental": "Conjurar Elemental", "Conjure Fey": "Conjurar Fadas", "Conjure Minor Elementals": "Conjurar Elementais Menores", "Conjure Woodland Beings": "Conjurar Seres da Floresta", "Contact Other Plane": "Contactar Outro Plano", "Contagion": "Contágio", "Contingency": "Contingência", "Continual Flame": "Chama Contínua", "Control Water": "Controlar a Água", "Control Weather": "Controlar o Clima", "Counterspell": "Contra-feitiço", "Create Food and Water": "Criar Alimentos e Água", "Create Undead": "Criar Mortos-Vivos", "Cure Wounds": "Curar Ferimentos", "Dancing Lights": "Globos de Luz", "Darkness": "Escuridão", "Darkvision": "Visão no Escuro", "Daylight": "Luz do Dia", "Death Ward": "Proteção contra a Morte", "Delayed Blast Fireball": "Bola de Fogo Controlável", "Demiplane": "Semiplano", "Detect Evil and Good": "Detectar o Bem e o Mal", "Detect Magic": "Detectar Magia", "Detect Poison and Disease": "Detectar Venenos e Doenças", "Detect Thoughts": "Detectar Pensamentos", "Dimension Door": "Porta Dimensional", "Disguise Self": "Disfarçar-se", "Disintegrate": "Desintegrar", "Dispel Evil and Good": "Dissipar o Bem e o Mal", "Dispel Magic": "Dissipar Magia", "Divination": "Adivinhação", "Divine Favor": "Favor Divino", "Divine Word": "Palavra Divina", "Dominate Beast": "Dominar Fera", "Dominate Monster": "Dominar Monstro", "Dominate Person": "Dominar Pessoa", "Dream": "Sonho", "Druidcraft": "Druidismo", "Earthquake": "Terremoto", "Eldritch Blast": "Explosão Mística", "Enhance Ability": "Aprimorar Habilidade", "Enlarge/Reduce": "Aumentar/Reduzir", "Entangle": "Emaranhar", "Enthrall": "Cativar", "Etherealness": "Eteridade", "Expeditious Retreat": "Recuo Acelerado", "Eyebite": "Olhar Penetrante", "Fabricate": "Fabricar", "Faerie Fire": "Fogo Fátuo", "Faithful Hound": "Cão Fiel de Mordenkainen", "False Life": "Vitalidade Falsa", "Fear": "Medo", "Feather Fall": "Queda Suave", "Feeblemind": "Enfraquecer Mente", "Find Familiar": "Convocar Familiar", "Find Steed": "Encontrar Montaria", "Find Traps": "Encontrar Armadilhas", "Finger of Death": "Dedos da Morte", "Fire Bolt": "Raio de Fogo", "Fire Shield": "Escudo de Fogo", "Fire Storm": "Tempestade de Fogo", "Fireball": "Bola de Fogo", "Flame Blade": "Lâmina Flamejante", "Flame Strike": "Golpe de Chamas", "Flaming Sphere": "Esfera Flamejante", "Flesh to Stone": "Carne para Pedra", "Fly": "Voo", "Fog Cloud": "Névoa", "Forcecage": "Gaiola de Força", "Foresight": "Previsão", "Freedom of Movement": "Liberdade de Movimento", "Freezing Sphere": "Esfera Congelante de Otiluke", "Gaseous Form": "Forma Gasosa", "Gate": "Portal", "Geas": "Missão", "Gentle Repose": "Repouso Tranquilo", "Giant Insect": "Inseto Gigante", "Glibness": "Lábia", "Globe of Invulnerability": "Globo de Invulnerabilidade", "Glyph of Warding": "Glifo de Proteção", "Goodberry": "Bom Fruto", "Grease": "Graxa", "Greater Invisibility": "Invisibilidade Maior", "Greater Restoration": "Restauração Maior", "Guardian of Faith": "Guardião da Fé", "Guards and Wards": "Guardas e Proteções", "Guidance": "Orientação", "Guiding Bolt": "Raio Guia", "Gust of Wind": "Lufada de Vento", "Hallow": "Santificar", "Hallucinatory Terrain": "Terreno Alucinatório", "Harm": "Dano", "Haste": "Velocidade", "Heal": "Cura", "Healing Word": "Palavra de Cura", "Heat Metal": "Esquentar Metal", "Hellish Rebuke": "Repreensão Infernal", "Heroes' Feast": "Banquete dos Heróis", "Heroism": "Heroísmo", "Hideous Laughter": "Riso Hilariante de Tasha", "Hold Monster": "Imobilizar Monstro", "Hold Person": "Imobilizar Pessoa", "Holy Aura": "Aura Sagrada", "Hunter's Mark": "Marca do Caçador", "Hypnotic Pattern": "Padrão Hipnótico", "Ice Storm": "Tempestade de Gelo", "Identify": "Identificar", "Illusory Script": "Escrita Ilusória", "Imprisonment": "Aprisionamento", "Incendiary Cloud": "Nuvem Incendiária", "Inflict Wounds": "Infligir Ferimentos", "Insect Plague": "Praga de Insetos", "Invisibility": "Invisibilidade", "Jump": "Salto", "Knock": "Arrombar", "Legend Lore": "Conhecimento Lendário", "Lesser Restoration": "Restauração Menor", "Levitate": "Levitação", "Lightning Bolt": "Relâmpago", "Locate Creature": "Localizar Criatura", "Locate Object": "Localizar Objeto", "Longstrider": "Passos Longos", "Mage Armor": "Armadura Arcana", "Mage Hand": "Mão de Mago", "Magic Circle": "Círculo Mágico", "Magic Jar": "Recipiente Arcano", "Magic Missile": "Mísseis Mágicos", "Magic Mouth": "Boca Mágica", "Magic Weapon": "Arma Mágica", "Magnificent Mansion": "Mansão Magnífica de Mordenkainen", "Major Image": "Imagem Maior", "Mass Cure Wounds": "Cura Completa em Massa", "Mass Heal": "Cura Completa", "Mass Healing Word": "Palavra de Cura em Massa", "Mass Suggestion": "Sugestão em Massa", "Maze": "Labirinto", "Mending": "Consertar", "Message": "Mensagem", "Meteor Swarm": "Chuva de Meteoros", "Mind Blank": "Limpar a Mente", "Minor Illusion": "Ilusão Menor", "Mirage Arcane": "Miragem Arcana", "Mirror Image": "Imagem Espelho", "Misty Step": "Passo Nebuloso", "Modify Memory": "Modificar Memória", "Moonbeam": "Raio Lunar", "Move Earth": "Mover Terra", "Nondetection": "Não-detecção", "Pass without Trace": "Passos Sem Pegadas", "Passwall": "Muralha de Passagem", "Phantasmal Killer": "Assassino Fantasmagórico", "Phantom Steed": "Montaria Fantasmagórica", "Planar Ally": "Aliado Planar", "Planar Binding": "Âncora Planar", "Plane Shift": "Deslocamento Planar", "Plant Growth": "Crescer Plantas", "Poison Spray": "Rajada de Veneno", "Polymorph": "Polimorfo", "Power Word Kill": "Palavra de Poder Matar", "Power Word Stun": "Palavra de Poder Atordoar", "Prayer of Healing": "Oração de Cura", "Prestidigitation": "Prestidigitação", "Prismatic Spray": "Borrifo Prismático", "Prismatic Wall": "Muralha Prismática", "Produce Flame": "Criar Chamas", "Programmed Illusion": "Ilusão Programada", "Project Image": "Projetar Imagem", "Protection from Energy": "Proteção contra Energia", "Protection from Evil and Good": "Proteção contra o Bem e o Mal", "Protection from Poison": "Proteção contra Veneno", "Purify Food and Drink": "Purificar Alimentos e Bebidas", "Raise Dead": "Reviver os Mortos", "Ray of Enfeeblement": "Raio do Enfraquecimento", "Ray of Frost": "Raio de Gelo", "Regenerate": "Regeneração", "Reincarnate": "Reencarnação", "Remove Curse": "Remover Maldição", "Resilient Sphere": "Esfera Resiliente de Otiluke", "Resistance": "Resistência", "Resurrection": "Ressurreição", "Reverse Gravity": "Inverter a Gravidade", "Revive": "Reviver", "Revivify": "Reviver os Mortos", "Rope Trick": "Truque de Corda", "Sacred Flame": "Chama Sagrada", "Sanctuary": "Santuário", "Scorching Ray": "Raio Ardente", "Scrying": "Vidência", "Secret Chest": "Arca Secreta de Leomund", "See Invisibility": "Ver o Invisível", "Sending": "Enviar Mensagem", "Sequester": "Sequestro", "Shapechange": "Alterar Forma", "Shatter": "Despedaçar", "Shield": "Escudo", "Shield of Faith": "Escudo da Fé", "Shillelagh": "Bordão", "Shocking Grasp": "Toque Chocante", "Silence": "Silêncio", "Silent Image": "Imagem Silenciosa", "Simulacrum": "Simulacro", "Sleep": "Sono", "Sleet Storm": "Nevasca", "Slow": "Lentidão", "Spare the Dying": "Poupar os Moribundos", "Speak with Animals": "Falar com Animais", "Speak with Dead": "Falar com os Mortos", "Speak with Plants": "Falar com Plantas", "Spider Climb": "Patas de Aranha", "Spike Growth": "Crescer Espinhos", "Spirit Guardians": "Guardiões Espirituais", "Spiritual Weapon": "Arma Espiritual", "Stinking Cloud": "Nuvem Fedorenta", "Stone Shape": "Moldar Rochas", "Stoneskin": "Pele de Pedra", "Storm of Vengeance": "Tempestade da Vingança", "Suggestion": "Sugestão", "Sunbeam": "Raio Solar", "Sunburst": "Explosão Solar", "Symbol": "Símbolo", "Telekinesis": "Telecinesia", "Telepathic Bond": "Vínculo Telepático de Rary", "Teleport": "Teletransporte", "Teleportation Circle": "Círculo de Teletransporte", "Thaumaturgy": "Taumaturgia", "Thunderwave": "Onda de Choque", "Time Stop": "Parar o Tempo", "Tiny Hut": "Cabana Pequena de Leomund", "Tongues": "Línguas", "Transport via Plants": "Transporte por Plantas", "Tree Stride": "Teletransporte por Árvores", "True Polymorph": "Metamorfose Verdadeira", "True Resurrection": "Ressurreição Verdadeira", "True Seeing": "Visão Verdadeira", "True Strike": "Ataque Certeiro", "Unseen Servant": "Servo Invisível", "Vampiric Touch": "Toque Vampírico", "Vicious Mockery": "Zombaria Viciosa", "Wall of Fire": "Muralha de Fogo", "Wall of Force": "Muro de Força", "Wall of Ice": "Muro de Gelo", "Wall of Stone": "Muro de Pedra", "Wall of Thorns": "Muralha de Espinhos", "Warding Bond": "Vínculo de Proteção", "Water Breathing": "Respirar na Água", "Water Walk": "Andar na Água", "Web": "Teia", "Weird": "Pesadelo", "Wind Walk": "Caminhar pelo Vento", "Wind Wall": "Muro de Vento", "Wish": "Desejo", "Word of Recall": "Palavra de Recordação", "Zone of Truth": "Zona de Verdade"
};
const apiSpell = (spell) => ({
  name: spellNameTranslations[spell.name] || spell.name,
  level: spell.level,
  school: englishSchoolNames[spell.school?.name] || spell.school?.name || "Magia",
  damage: spell.damage
    ? `${spell.damage.damage_at_slot_level?.[String(spell.level)] || spell.damage.damage_at_character_level?.["1"] || "variável"} ${spell.damage.damage_type?.name?.toLowerCase() || "mágico"}`
    : "—",
  detail: spell.desc?.[0] || "Uma magia descrita nas regras da 5e 2014.",
  range: spell.range,
  castingTime: spell.casting_time,
  components: spell.components?.join(", "),
  duration: spell.duration,
});
const mainAttribute = (main = "") =>
  main.includes("Força") ? "forca" : main.includes("Destreza") ? "destreza" : main.includes("Constituição") ? "constituicao" : main.includes("Inteligência") ? "inteligencia" : main.includes("Sabedoria") ? "sabedoria" : "carisma";
const proficiencyBonus = (level) => 2 + Math.floor((level - 1) / 4);
const backgroundSkillIds = (background) =>
  background?.prof
    ?.split(" e ")
    .map((label) => skills.find(([, name]) => name.toLowerCase() === label.toLowerCase())?.[0])
    .filter(Boolean) || [];
const grantedSkillIds = (character) => [
  ...(classProficiencies[character.classId] || []),
  ...backgroundSkillIds(backgrounds.find((item) => item.id === character.background)),
];
const levelHitPoints = (die, constitution, level) => {
  const first = die + modifier(constitution);
  const later = Math.ceil(die / 2) + 1 + modifier(constitution);
  return Math.max(1, first + Math.max(0, level - 1) * later);
};
const goldToCents = (gold) => Math.round(Number(gold || 0) * 100);
const centsToGold = (cents) => cents / 100;
const formatGold = (gold) => {
  const value = centsToGold(goldToCents(gold));
  return Number.isInteger(value) ? `${value} po` : `${value.toFixed(2).replace(/0$/, "")} po`;
};
const deriveCombat = (character, selectedClass, race) => {
  const bonuses = racialBonuses[character.race] || {};
  const constitution = (character.attrs.constituicao || 8) + (bonuses.constituicao || 0);
  const dexterity = (character.attrs.destreza || 8) + (bonuses.destreza || 0);
  const equipment = character.equipment || [];
  const hasShield = equipment.some((item) => item.name.toLowerCase().includes("escudo"));
  const armor = equipment.find((item) => /cota de malha|couro/.test(item.name.toLowerCase()));
  const armorClass = armor?.name.toLowerCase().includes("cota de malha")
    ? 16 + (hasShield ? 2 : 0)
    : 11 + modifier(dexterity) + (hasShield ? 2 : 0);
  const toughBonus = (character.feats || []).some((feat) => (typeof feat === "string" ? feat : feat.name) === "Resistente") ? character.level * 2 : 0;
  return {
    hp: selectedClass ? levelHitPoints(selectedClass.die, constitution, character.level) + toughBonus : 0,
    ac: Math.max(1, armorClass),
    speed: race?.speed || 9,
  };
};
const startingEquipment = (classId, backgroundId) =>
  [...new Set([...(classStartingItems[classId] || []), ...(backgroundStartingItems[backgroundId] || [])])]
    .map((name, index) => ({ id: `starting-${index}-${name}`, name, quantity: 1, price: 0, source: "Inicial" }));
const featSlots = (character) =>
  featLevels.filter((level) => character.level >= level).length +
  (character.classId === "guerreiro" && character.level >= 6 ? 1 : 0) +
  (character.classId === "guerreiro" && character.level >= 14 ? 1 : 0);
const fullCasterClasses = ["bardo", "clerigo", "druida", "feiticeiro", "mago", "bruxo"];
const spellKnownProgression = {
  bardo: [4, 5, 6, 8, 8, 10, 10, 11, 12, 14, 15, 15, 16, 18, 19, 19, 20, 22, 22, 22],
  feiticeiro: [2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 12, 13, 13, 14, 14, 15, 15, 15, 15],
  bruxo: [2, 3, 4, 5, 6, 7, 8, 9, 10, 10, 11, 11, 12, 12, 13, 13, 14, 14, 15, 15],
  patrulheiro: [0, 0, 2, 3, 3, 4, 4, 5, 5, 6, 6, 7, 7, 8, 8, 9, 9, 10, 10, 11],
};
const cantripProgression = {
  bardo: [2, 2, 2, 3, 3, 3, 3, 3, 3, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4],
  clerigo: [3, 3, 3, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 5, 5, 5, 5],
  druida: [2, 2, 2, 3, 3, 3, 3, 3, 3, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4],
  feiticeiro: [4, 4, 4, 5, 5, 5, 5, 5, 5, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6],
  mago: [3, 3, 3, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 5, 5, 5, 5],
  bruxo: [2, 2, 2, 3, 3, 3, 3, 3, 3, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4],
  patrulheiro: [0, 0, 2, 2, 2, 2, 2, 2, 2, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3],
};
const spellSelectionLimits = (character) => {
  const level = Math.max(1, Math.min(20, character.level));
  const classId = character.classId;
  const spellcastingAbility = classId === "mago" ? "inteligencia" : ["clerigo", "druida", "patrulheiro"].includes(classId) ? "sabedoria" : "carisma";
  const abilityModifier = modifier((character.attrs?.[spellcastingAbility] || 8) + (racialBonuses[character.race]?.[spellcastingAbility] || 0));
  let spells;
  if (spellKnownProgression[classId]) spells = spellKnownProgression[classId][level - 1];
  else if (classId === "mago") spells = 6 + (level - 1) * 2;
  else if (classId === "paladino") spells = Math.max(1, abilityModifier + Math.ceil(level / 2));
  else spells = Math.max(1, abilityModifier + level);
  return { cantrips: cantripProgression[classId]?.[level - 1] || 0, spells: Math.max(0, spells) };
};
const maxSpellLevel = (classId, level) => {
  if (fullCasterClasses.includes(classId)) return Math.min(9, Math.ceil(level / 2));
  if (["paladino", "patrulheiro"].includes(classId)) return Math.max(0, Math.min(5, Math.floor((level + 1) / 4)));
  return 0;
};
function Button({ children, variant = "secondary", icon: Icon, ...props }) {
  return (
    <button className={`button ${variant}`} {...props}>
      {Icon && <Icon size={16} />}
      {children}
    </button>
  );
}
function Card({ children, selected, onClick }) {
  return (
    <article
      className={`card ${selected ? "selected" : ""} ${onClick ? "clickable" : ""}`}
      onClick={onClick}
    >
      {children}
    </article>
  );
}
function Field({ label, value = "", onChange, ...props }) {
  return (
    <label className="field">
      <span>{label}</span>
      <input value={value} onChange={onChange} {...props} />
    </label>
  );
}

export default function App() {
  const [character, setCharacter] = useState(() => {
    try {
      const saved = JSON.parse(localStorage.getItem("ficha-dnd"));
      return {
        ...freshCharacter(),
        ...saved,
        attrs: { ...freshCharacter().attrs, ...(saved?.attrs || {}) },
        combat: { ...freshCharacter().combat, ...(saved?.combat || {}) },
        personality: { ...freshCharacter().personality, ...(saved?.personality || {}) },
        appearance: { ...freshCharacter().appearance, ...(saved?.appearance || {}) },
      };
    } catch {
      return freshCharacter();
    }
  });
  const [current, setCurrent] = useState(0);
  const [landing, setLanding] = useState(true);
  const [spellCatalog, setSpellCatalog] = useState(spells);
  useEffect(
    () => localStorage.setItem("ficha-dnd", JSON.stringify(character)),
    [character],
  );
  useEffect(() => {
    let active = true;
    fetch("https://www.dnd5eapi.co/api/2014/spells")
      .then((response) => response.json())
      .then(({ results }) => {
        if (!active) return;
        const localByName = new Map(spells.map((spell) => [spell.name.toLowerCase(), spell]));
        const basic = results.map(({ name, level }) => ({
          name: spellNameTranslations[name] || name,
          level,
          school: "Magia",
          damage: "—",
          detail: "Descrição detalhada carregando...",
        }));
        setSpellCatalog(basic.map((spell) => localByName.get(spell.name.toLowerCase()) || spell));
        return Promise.allSettled(results.map(({ url }) =>
          fetch(`https://www.dnd5eapi.co${url}`).then((response) => response.json())
        ));
      })
      .then((settled) => {
        if (!active || !settled) return;
        const localByName = new Map(spells.map((spell) => [spell.name.toLowerCase(), spell]));
        const complete = settled
          .filter((result) => result.status === "fulfilled")
          .map((result) => apiSpell(result.value))
          .map((spell) => localByName.get(spell.name.toLowerCase()) || spell);
        if (complete.length) setSpellCatalog(complete);
      })
      .catch(() => {});
    return () => { active = false; };
  }, []);
  const update = (patch) => setCharacter((old) => ({ ...old, ...patch }));
  const selectedClass = classes.find((item) => item.id === character.classId);
  const selectedRace = races.find((item) => item.id === character.race);
  const derivedCombat = deriveCombat(character, selectedClass, selectedRace);
  const availableSteps = steps.filter(([id]) => {
    if (id === "subclasse") return character.level >= (subclassLevels[character.classId] || 3) && Boolean(selectedClass);
    if (id === "magias") return Boolean(selectedClass?.caster);
    if (id === "talentos") return featSlots(character) > 0;
    return true;
  });
  const currentStep = availableSteps[current] || availableSteps[availableSteps.length - 1];
  const currentStepIndex = Math.max(0, availableSteps.findIndex(([id]) => id === currentStep[0]));
  const attributesSpent = Object.values(character.attrs).reduce(
    (sum, value) => sum + (pointCosts[value] ?? 0),
    0,
  );
  const canLeaveAttributes = attributesSpent === 27;
  const goToStep = (index) => {
    if (currentStep[0] === "atributos" && !canLeaveAttributes && index > currentStepIndex) return;
    setCurrent(Math.max(0, Math.min(availableSteps.length - 1, index)));
  };
  const reset = () => {
    setCharacter(freshCharacter());
    setCurrent(0);
    setLanding(false);
  };
  if (landing)
    return (
      <Landing
        hasProgress={Boolean(character.name)}
        onNew={reset}
        onContinue={() => setLanding(false)}
      />
    );
  const step = currentStep;
  return (
    <div className="shell">
      <AmbientDecor />
      <aside className="sidebar">
        <div className="brand">
          <Shield size={22} />
          <div>
            <strong>FICHA D&D</strong>
            <small>Livro do aventureiro</small>
          </div>
        </div>
        <div className="progress">
          <span>Progresso</span>
          <strong>{Math.round((currentStepIndex / (availableSteps.length - 1)) * 100)}%</strong>
          <i>
            <b style={{ width: `${(currentStepIndex / (availableSteps.length - 1)) * 100}%` }} />
          </i>
        </div>
        <nav>
          {availableSteps.map(([id, label, Icon], index) => (
            <button
              key={id}
              className={index === currentStepIndex ? "active" : ""}
              onClick={() => goToStep(index)}
            >
              <span>
                {index < currentStepIndex ? <Check size={14} /> : <Icon size={15} />}
              </span>
              {label}
            </button>
          ))}
        </nav>
        <button className="reset" onClick={reset}>
          Recomeçar ficha
        </button>
      </aside>
      <main className="main">
        <header className="mobile-header">
          <span className="eyebrow">
            Etapa {currentStepIndex + 1} de {availableSteps.length}
          </span>
          <strong>{step[1]}</strong>
        </header>
        <StepContent
          step={step[0]}
          character={character}
          update={update}
          selectedClass={selectedClass}
          combat={derivedCombat}
          spellCatalog={spellCatalog}
        />
        <footer className="navigation">
          {currentStepIndex > 0 ? (
            <Button
              icon={ArrowLeft}
              onClick={() => goToStep(currentStepIndex - 1)}
            >
              Voltar
            </Button>
          ) : (
            <span />
          )}
          {currentStepIndex < availableSteps.length - 1 && (
            <Button
              variant="primary"
              icon={ArrowRight}
              disabled={step[0] === "atributos" && !canLeaveAttributes}
              onClick={() => goToStep(currentStepIndex + 1)}
            >
              Continuar
            </Button>
          )}
        </footer>
      </main>
    </div>
  );
}
function Landing({ hasProgress, onNew, onContinue }) {
  return (
    <div className="landing">
      <AmbientDecor />
      <div className="landing-scenery" aria-hidden="true">
        <img className="tower-image" src={`${import.meta.env.BASE_URL}images/torre.png`} alt="" />
        <img className="landing-book" src={`${import.meta.env.BASE_URL}images/livro.png`} alt="" />
        <div className="cloud cloud-one"><Cloud size={90} /></div>
        <div className="cloud cloud-two"><Cloud size={128} /></div>
        <img className="tree tree-left" src={`${import.meta.env.BASE_URL}images/folhas.png`} alt="" />
        <img className="tree tree-right" src={`${import.meta.env.BASE_URL}images/folhas.png`} alt="" />
      </div>
      <div className="landing-mark">
        <img src={`${import.meta.env.BASE_URL}images/brasao.png`} alt="" />
        <span>5E</span>
      </div>
      <div className="landing-copy">
        <p className="eyebrow">GERADOR DE FICHAS D&D</p>
        <h1>
          Forje seu <em>aventureiro</em>
        </h1>
        <p className="lead">
          Monte uma ficha completa de Dungeons & Dragons 5ª Edição, do conceito
          à impressão.
        </p>
      </div>
      <div className="guide-grid">
        <article>
          <span>01</span>
          <h2>Escolha a ideia</h2>
          <p>
            Comece pelo nome, pronome e nível. Pense no que move seu personagem
            e qual história deseja contar.
          </p>
        </article>
        <article>
          <span>02</span>
          <h2>Defina a origem</h2>
          <p>
            Selecione raça, classe e antecedente. Essas escolhas determinam
            habilidades, proficiências e recursos iniciais.
          </p>
        </article>
        <article>
          <span>03</span>
          <h2>Distribua o poder</h2>
          <p>
            Use o point buy oficial: 27 pontos para valores entre 8 e 15, antes
            dos bônus da raça.
          </p>
        </article>
        <article>
          <span>04</span>
          <h2>Finalize a ficha</h2>
          <p>
            Complete perícias, talentos, itens, personalidade e história. No
            fim, imprima ou salve em PDF.
          </p>
        </article>
      </div>
      <div className="landing-actions">
        <Button variant="primary" icon={Swords} onClick={onNew}>
          Criar nova ficha
        </Button>
        {hasProgress && (
          <Button icon={ScrollText} onClick={onContinue}>
            Continuar ficha
          </Button>
        )}
      </div>
      <small className="saved">
        <Sparkles size={13} /> O progresso é salvo automaticamente neste
        navegador
      </small>
    </div>
  );
}
function AmbientDecor() {
  return (
    <div className="persistent-decor" aria-hidden="true">
      <img className="floating-leaf leaf-one" src={`${import.meta.env.BASE_URL}images/folhas.png`} alt="" />
      <img className="floating-leaf leaf-two" src={`${import.meta.env.BASE_URL}images/folhas.png`} alt="" />
      <img className="floating-leaf leaf-three" src={`${import.meta.env.BASE_URL}images/folhas.png`} alt="" />
      <img className="floating-leaf leaf-four" src={`${import.meta.env.BASE_URL}images/folhas.png`} alt="" />
      <img className="floating-leaf leaf-five" src={`${import.meta.env.BASE_URL}images/folhas.png`} alt="" />
      <img className="floating-leaf leaf-six" src={`${import.meta.env.BASE_URL}images/folhas.png`} alt="" />
    </div>
  );
}
function StepContent({ step, character, update, selectedClass, combat, spellCatalog }) {
  const titles = {
    conceito: [
      "O começo de uma lenda",
      "Dê um nome à ideia que você trouxe para a mesa.",
    ],
    raca: [
      "A herança do aventureiro",
      "Escolha uma raça e conheça seus traços, dons e história.",
    ],
    classe: [
      "Escolha seu caminho",
      "Sua classe define treinamento, resistência, perícias e magia.",
    ],
    subclasse: [
      "A especialização do herói",
      "A partir do nível 3, sua classe abre um caminho especializado.",
    ],
    magias: [
      "Magias e truques",
      "Escolha as opções disponíveis para sua classe e nível.",
    ],
    antecedente: [
      "De onde você veio",
      "Uma vida anterior deixa marcas, proficiências e recursos.",
    ],
    atributos: [
      "O poder em você",
      "Use o point buy oficial da 5e: 27 pontos, de 8 a 15 antes dos bônus.",
    ],
    pericias: [
      "Pericias",
      "Selecione apenas as proficiências permitidas pela sua classe.",
    ],
    talentos: [
      "Dons extraordinários",
      "Na 5e, talentos substituem um aumento de atributo nos níveis elegíveis.",
    ],
    equipamentos: [
      "Itens e Ouro",
      "Seu antecedente define o ouro inicial; escolha itens do catálogo básico.",
    ],
    personalidade: [
      "Além dos números",
      "As escolhas difíceis revelam quem está por trás da ficha.",
    ],
    aparencia: [
      "A imagem que o mundo vê",
      "Pequenos detalhes fazem um personagem ganhar vida.",
    ],
    historia: [
      "O passado ainda ecoa",
      "Toda grande jornada começa antes da primeira sessão.",
    ],
    revisao: [
      "Sua ficha está pronta",
      "Uma visão de ficha inspirada no formulário clássico da 5e.",
    ],
  }[step];
  return (
    <section className="content">
      <div className="page-heading">
        <span className="eyebrow">{step.toUpperCase()}</span>
        <h2>{titles[0]}</h2>
        <p>{titles[1]}</p>
      </div>
      {step === "conceito" && <Concept character={character} update={update} />}
      {step === "raca" && <Race character={character} update={update} />}
      {step === "classe" && <Class character={character} update={update} />}
      {step === "subclasse" && <Subclass character={character} update={update} selectedClass={selectedClass} />}
      {step === "magias" && <SpellSelection character={character} update={update} selectedClass={selectedClass} spellCatalog={spellCatalog} />}
      {step === "antecedente" && (
        <Background character={character} update={update} />
      )}
      {step === "atributos" && (
        <Attributes character={character} update={update} />
      )}
      {step === "pericias" && (
        <Skills
          character={character}
          update={update}
          selectedClass={selectedClass}
        />
      )}
      {step === "talentos" && <Feats character={character} update={update} />}
      {step === "equipamentos" && (
        <Equipment character={character} update={update} combat={combat} />
      )}
      {step === "personalidade" && (
        <Personality character={character} update={update} />
      )}
      {step === "aparencia" && (
        <Appearance character={character} update={update} />
      )}
      {step === "historia" && <Story character={character} update={update} />}
      {step === "revisao" && (
        <Review character={character} selectedClass={selectedClass} combat={combat} spellCatalog={spellCatalog} />
      )}
    </section>
  );
}
function Concept({ character, update }) {
  const setLevel = (value) => {
    const level = Math.max(1, Math.min(20, value));
    const slots = featSlots({ ...character, level });
    update({
      level,
      subclass: level >= (subclassLevels[character.classId] || 3) ? character.subclass : "",
      feats: (character.feats || []).slice(0, slots),
      spells: (character.spells || []).filter((name) => {
        const spell = spells.find((entry) => entry.name === name);
        return spell && spell.level <= maxSpellLevel(character.classId, level);
      }),
    });
  };
  return (
    <div className="form-grid">
      <Field
        label="Nome do personagem"
        placeholder="Ex.: Aelric Corvo-Negro"
        value={character.name}
        onChange={(e) => update({ name: e.target.value })}
      />
      <Field
        label="Nome do jogador"
        placeholder="Seu nome"
        value={character.player}
        onChange={(e) => update({ player: e.target.value })}
      />
      <Field
        label="Pronome (opcional)"
        placeholder="ele/dele, ela/dela..."
        value={character.pronoun}
        onChange={(e) => update({ pronoun: e.target.value })}
      />
      <div className="level-field">
        <span>Nível do personagem</span>
        <div className="level-stepper">
          <button
            type="button"
            aria-label="Diminuir nível"
            title="Diminuir nível"
            onClick={() => setLevel(character.level - 1)}
            disabled={character.level <= 1}
          >
            <FiMinus />
          </button>
          <div>
            <GiLevelThree size={21} />
            <strong>{character.level}</strong>
            <small>de 20</small>
          </div>
          <button
            type="button"
            aria-label="Aumentar nível"
            title="Aumentar nível"
            onClick={() => setLevel(character.level + 1)}
            disabled={character.level >= 20}
          >
            <FiPlus />
          </button>
        </div>
      </div>
      <div className="callout wide">
        <Sparkles size={18} />
        <span>
          O nível máximo é 20, como na 5e. Bônus de proficiência e espaços de
          talentos acompanham essa escolha. Nível {character.level}: {classFeatures[character.level] || "progressão de classe e aumento de recursos"}.
        </span>
      </div>
    </div>
  );
}
function Race({ character, update }) {
  const hasElement = ["draconato", "genasi"].includes(character.race);
  return (
    <div>
      <div className="cards-grid">
        {races.map((race) => (
          <Card
            key={race.id}
            selected={character.race === race.id}
            onClick={() => update({ race: race.id, element: "" })}
          >
            <img className="option-image" src={race.image} alt={`Ilustração de ${race.name}`} />
            <div className="card-body">
              <div className="card-title">
                <h3>{race.name}</h3>
                {character.race === race.id && <Check size={19} />}
              </div>
              <p>{race.text}</p>
              <div className="tags"><span>{race.bonus}</span><span>{race.speed} m</span></div>
            </div>
          </Card>
        ))}
      </div>
      {hasElement && (
        <div className="form-grid race-options">
          <label className="field">
            <span>Elemento</span>
            <select value={character.element} onChange={(event) => update({ element: event.target.value })}>
              <option value="">Escolha um elemento</option>
              {elementOptions.map((element) => <option key={element}>{element}</option>)}
            </select>
          </label>
        </div>
      )}
    </div>
  );
}
function Class({ character, update }) {
  return (
    <div className="cards-grid">
      {classes.map((item) => (
        <Card
          key={item.id}
          selected={character.classId === item.id}
          onClick={() =>
            update({
              classId: item.id,
              subclass: "",
              spells: [],
              equipment: character.goldRolled
                ? (character.equipment || []).filter((entry) => !entry.id?.toString().startsWith("starting-"))
                : [
                    ...startingEquipment(item.id, character.background),
                    ...(character.equipment || []).filter((entry) => !entry.id?.toString().startsWith("starting-")),
                  ],
            })
          }
        >
          <img
            className="option-image"
            src={item.image}
            alt={`Ilustração de ${item.name}`}
          />
          <div className="card-body">
            <div className="card-title">
              <h3>{item.name}</h3>
              {character.classId === item.id && <Check size={19} />}
            </div>
            <p>{item.text}</p>
            <div className="tags">
              <span>{item.category}</span>
              <span>d{item.die} de vida</span>
              <span>{item.main}</span>
              {item.caster && <span className="gold">Conjurador</span>}
            </div>
          </div>
        </Card>
      ))}
    </div>
  );
}
function Subclass({ character, update, selectedClass }) {
  const options = subclasses[character.classId] || [];
  const unlockLevel = subclassLevels[character.classId] || 3;
  const unlocked = character.level >= unlockLevel;
  return (
    <div className="cards-grid">
      {!selectedClass && <div className="callout wide">Escolha uma classe primeiro.</div>}
      {selectedClass && !unlocked && (
        <div className="callout wide">Subclasses são liberadas no nível {unlockLevel}.</div>
      )}
      {options.map((option) => (
        <Card
          key={option.name}
          selected={character.subclass === option.name}
          onClick={() => unlocked && update({ subclass: option.name })}
        >
          <img
            className="option-image"
            src={option.image}
            alt={`Ilustração de ${option.name}`}
            onError={(event) => { event.currentTarget.src = `${import.meta.env.BASE_URL}images/folhas.png`; }}
          />
          <div className="card-body">
            <div className="card-title">
              <h3>{option.name}</h3>
              {character.subclass === option.name && <Check size={19} />}
            </div>
            <p>{option.detail}</p>
            <div className="tags"><span>{unlocked ? "Disponível" : "Bloqueada"}</span></div>
          </div>
        </Card>
      ))}
    </div>
  );
}
function SpellSelection({ character, update, selectedClass, spellCatalog }) {
  const available = selectedClass?.caster ? spellCatalog.filter((spell) => spell.level === 0 || spell.level <= maxSpellLevel(character.classId, character.level)) : [];
  const selected = character.spells || [];
  const limits = spellSelectionLimits(character);
  const toggle = (spell) => {
    const has = selected.includes(spell.name);
    const category = spell.level === 0 ? "cantrips" : "spells";
    const current = selected.filter((name) => available.find((entry) => entry.name === name)?.level === 0 ? category === "cantrips" : category === "spells");
    if (!has && current.length >= limits[category]) return;
    update({ spells: has ? selected.filter((name) => name !== spell.name) : [...selected, spell.name] });
  };
  const levels = [...new Set(available.map((spell) => spell.level))].sort((a, b) => a - b);
  const chosenCantrips = available.filter((spell) => spell.level === 0 && selected.includes(spell.name)).length;
  const chosenSpells = available.filter((spell) => spell.level > 0 && selected.includes(spell.name)).length;
  return (
    <div className="spell-selection">
      {!selectedClass?.caster && <div className="callout wide">Esta classe não possui magias nesta ficha.</div>}
      {selectedClass?.caster && (
        <div className="section-title">
          <div><span className="eyebrow">Escolha geral</span><h3>Magias e truques selecionados</h3></div>
          <strong>Truques {chosenCantrips}/{limits.cantrips} · Magias {chosenSpells}/{limits.spells}</strong>
        </div>
      )}
      {levels.map((level) => {
        const levelSpells = available.filter((spell) => spell.level === level);
        const levelChosenCount = levelSpells.filter((spell) => selected.includes(spell.name)).length;
        return (
          <section className="spell-level" key={level}>
            <div className="section-title">
              <div><span className="eyebrow">{level === 0 ? "Cantrip" : `Círculo ${level}`}</span><h3>{level === 0 ? "Truques" : `Magias de nível ${level}`}</h3></div>
              <strong>{levelChosenCount} escolhida{levelChosenCount === 1 ? "" : "s"}</strong>
            </div>
            <div className="cards-grid feat-grid">
              {levelSpells.map((spell) => {
                const chosen = selected.includes(spell.name);
                const damage = spellDamage(spell.damage);
                return (
                  <Card key={spell.name} selected={chosen} onClick={() => toggle(spell)}>
                    <div className="card-body">
                      <div className="card-title"><h3>{spell.name}</h3>{chosen && <Check size={19} />}</div>
                      <p className="spell-effect"><strong>Como funciona:</strong> {spell.detail}</p>
                      {damage && <div className="damage-box"><span>Dano</span><strong>{damage.amount}</strong><small>{damage.type}</small></div>}
                      <div className="spell-meta"><span>Escola: {spell.school}</span><span>Custo: {spell.cost || "1 espaço"}</span><span>Alcance: {spell.range || "toque"}</span><span>Como faz: {spell.castingTime || "1 ação"}</span><span>Componentes: {spell.components || "V, S"}</span><span>Duração: {spell.duration || "Instantânea"}</span></div>
                    </div>
                  </Card>
                );
              })}
            </div>
          </section>
        );
      })}
    </div>
  );
}
function Background({ character, update }) {
  return (
    <div className="cards-grid">
      {backgrounds.map((item) => (
        <Card
          key={item.id}
          selected={character.background === item.id}
          onClick={() =>
            update({
              background: item.id,
              gold: character.goldRolled ? character.gold : item.gold,
              equipment: character.goldRolled
                ? (character.equipment || []).filter((entry) => !entry.id?.toString().startsWith("starting-"))
                : [
                    ...startingEquipment(character.classId, item.id),
                    ...(character.equipment || []).filter((entry) => !entry.id?.toString().startsWith("starting-")),
                  ],
            })
          }
        >
          <img
            className="option-image"
            src={item.image}
            alt={`Exemplo de ${item.name}`}
          />
          <div className="card-body">
            <div className="card-title">
              <h3>{item.name}</h3>
              {character.background === item.id && <Check size={19} />}
            </div>
            <p>{item.text}</p>
            <div className="tags">
              <span>{item.prof}</span>
              <span>{formatGold(item.gold)}</span>
            </div>
          </div>
        </Card>
      ))}
      <div className="wide alignments">
        <h3>Tendência</h3>
        {[
          "Leal e Bom",
          "Neutro e Bom",
          "Caótico e Bom",
          "Leal e Neutro",
          "Neutro",
          "Caótico e Neutro",
          "Leal e Mau",
          "Neutro e Mau",
          "Caótico e Mau",
        ].map((item) => (
          <button
            className={character.alignment === item ? "chosen" : ""}
            key={item}
            onClick={() => update({ alignment: item })}
          >
            {item}
          </button>
        ))}
      </div>
    </div>
  );
}
function Attributes({ character, update }) {
  const spent = Object.values(character.attrs).reduce(
    (sum, value) => sum + (pointCosts[value] ?? 0),
    0,
  );
  const racial =
    races.find((item) => item.id === character.race)?.bonus ||
    "Escolha uma raça para aplicar os bônus na ficha";
  const change = (key, raw) => {
    const value = Math.max(8, Math.min(15, Number(raw) || 8));
    const next = { ...character.attrs, [key]: value };
    if (
      Object.values(next).reduce((sum, entry) => sum + pointCosts[entry], 0) <=
      27
    )
      update({ attrs: next });
  };
  const roll = () => {
    let next;
    do {
      next = Object.fromEntries(
        attributes.map(([key]) => [
          key,
          Math.max(
            8,
            Math.min(
              15,
              Array.from({ length: 4 }, () => Math.ceil(Math.random() * 6))
                .sort((a, b) => a - b)
                .slice(1)
                .reduce((a, b) => a + b, 0),
            ),
          ),
        ]),
      );
    } while (
      Object.values(next).reduce((sum, value) => sum + pointCosts[value], 0) >
      27
    );
    update({ attrs: next });
  };
  return (
    <>
      <div className="attribute-tools">
        <div>
          <strong>{spent}/27 pontos usados</strong>
          <span>{27 - spent} pontos restantes · valores-base de 8 a 15</span>
        </div>
        <Button icon={Dices} onClick={roll}>
          Rolar 4d6 válido
        </Button>
      </div>
      <div className={`callout point-buy-guide ${spent === 27 ? "complete" : ""}`}>
        <Dices size={17} />
        <span>
          {spent === 27
            ? "Distribuição completa. Você já pode continuar para a próxima etapa."
            : "Distribua exatamente 27 pontos entre os seis atributos para desbloquear a próxima etapa."}
        </span>
      </div>
      <div className="callout racial">
        <Shield size={17} />
        <span>
          {racial}. Bônus raciais entram no cálculo final, sem consumir pontos
          do point buy.
        </span>
      </div>
      <div className="attributes">
        {attributes.map(([key, label]) => (
          <div className="attribute" key={key}>
            <span>
              {label}
              <small>Custo {pointCosts[character.attrs[key]]}</small>
            </span>
            <div className="attribute-control">
              <button type="button" aria-label={`Diminuir ${label}`} onClick={() => change(key, character.attrs[key] - 1)} disabled={character.attrs[key] <= 8}>−</button>
              <strong>{character.attrs[key]}</strong>
              <button type="button" aria-label={`Aumentar ${label}`} onClick={() => change(key, character.attrs[key] + 1)} disabled={character.attrs[key] >= 15 || spent >= 27}>+</button>
            </div>
            <strong>{signed(modifier(character.attrs[key]))}</strong>
          </div>
        ))}
      </div>
    </>
  );
}
function Skills({ character, update, selectedClass }) {
  const prof = (key) => Boolean(character.skills[key]);
  const max = selectedClass?.skills || 0;
  const classGranted = classProficiencies[character.classId] || [];
  const backgroundGranted = backgroundSkillIds(backgrounds.find((item) => item.id === character.background));
  const selected = Object.values(character.skills).filter(Boolean).length;
  const toggle = (key) => {
    if (classGranted.includes(key) || backgroundGranted.includes(key)) return;
    if (!prof(key) && selected >= max) return;
    update({ skills: { ...character.skills, [key]: !prof(key) } });
  };
  return (
    <div className="skills-panel">
      <div className="summary-row">
        <div>
          <span>Bônus de proficiência</span>
          <strong>+{proficiencyBonus(character.level)}</strong>
        </div>
        <div>
          <span>Escolhas usadas</span>
          <strong>
            {selected}/{max}
          </strong>
        </div>
      </div>
      {selectedClass && (
        <p className="hint">
          {selectedClass.name}: escolha até {max} perícias. Perícias concedidas
          pela classe ou antecedente ficam marcadas e não podem ser escolhidas novamente.
        </p>
      )}
      <div className="skill-list">
        {skills.map(([key, label, attr]) => (
          <button
            key={key}
            className={`${prof(key) ? "chosen" : ""} ${classGranted.includes(key) || backgroundGranted.includes(key) ? "locked" : ""}`}
            onClick={() => toggle(key)}
            disabled={classGranted.includes(key) || backgroundGranted.includes(key)}
          >
            <span>
              {classGranted.includes(key) || backgroundGranted.includes(key) ? <Check size={13} /> : prof(key) ? <Check size={13} /> : <i />}
              {label}
            </span>
            <small>
              {attr.slice(0, 3).toUpperCase()}{" "}
              {signed(
                modifier(character.attrs[attr]) +
                  (prof(key) ? 2 + Math.floor((character.level - 1) / 4) : 0),
              )}
            </small>
          </button>
        ))}
      </div>
    </div>
  );
}
function Feats({ character, update }) {
  const slots = featSlots(character);
  const selectedNames = character.feats.map((feat) =>
    typeof feat === "string" ? feat : feat.name,
  );
  const toggle = (feat) => {
    const has = selectedNames.includes(feat.name);
    if (!has && selectedNames.length >= slots) return;
    update({
      feats: has
        ? selectedNames.filter((item) => item !== feat.name)
        : [...selectedNames, feat.name],
    });
  };
  return (
    <>
      <div className="summary-row">
        <div>
          <span>Talentos disponíveis</span>
          <strong>
            {selectedNames.length}/{slots}
          </strong>
        </div>
        <div>
          <span>Regra 5e</span>
          <strong>{slots ? "Liberado" : "Nível 4"}</strong>
        </div>
      </div>
      {slots === 0 && (
        <div className="callout feat-rule">
          <Sparkles size={18} />
          <span>
            Na regra da 5e, o primeiro talento fica disponível no nível 4.
            Aumente o nível na etapa Conceito para liberar a seleção.
          </span>
        </div>
      )}
      <div className="cards-grid feat-grid">
        {feats.map((feat) => {
          const selected = selectedNames.includes(feat.name);
          return (
            <Card
              key={feat.name}
              selected={selected}
              onClick={() => toggle(feat)}
            >
              <div className="card-title">
                <h3>{feat.name}</h3>
                {selected && <Check size={19} />}
              </div>
              <p>{feat.text}</p>
              <div className="tags">
                <span>{feat.category}</span>
                <span>
                  {slots === 0 ? "Bloqueado até o nível 4" : "Disponível"}
                </span>
              </div>
            </Card>
          );
        })}
      </div>
    </>
  );
}
function Equipment({ character, update, combat }) {
  const [category, setCategory] = useState("Todos");
  const selectedBackground = backgrounds.find((item) => item.id === character.background);
  const goldRule = startingGoldByClass[character.classId];
  const rollGold = () => {
    if (character.goldRolled || !goldRule) return;
    const dice = Array.from({ length: goldRule.dice }, () => Math.floor(Math.random() * 4) + 1);
    const diceTotal = dice.reduce((sum, value) => sum + value, 0);
    const total = diceTotal * goldRule.multiplier;
    update({
      gold: total,
      goldRolled: true,
      goldRoll: { dice, diceTotal, multiplier: goldRule.multiplier, total },
      equipment: character.equipment.filter((item) => !item.id?.toString().startsWith("starting-")),
    });
  };
  const addCustom = () =>
    update({ equipment: [...character.equipment, { id: crypto.randomUUID(), name: "Novo item", quantity: 1, price: 0, source: "Manual" }] });
  const buy = (item) => {
    const balance = goldToCents(character.gold);
    const price = goldToCents(item.price);
    if (balance < price) return;
    update({
      gold: centsToGold(balance - price),
      equipment: [...character.equipment, { id: crypto.randomUUID(), name: item.name, quantity: 1, price: item.price, source: "Comprado" }],
    });
  };
  const buyPack = (pack) => buy({ name: pack.name, price: pack.price });
  const remove = (id) =>
    update({ equipment: character.equipment.filter((item) => item.id !== id) });
  const visibleItems = category === "Todos" ? itemCatalog : itemCatalog.filter((item) => item.category === category);
  const categories = ["Todos", "Armas", "Armaduras", "Diversos", "Kits e Pacotes"];
  return (
    <div className="equipment">
      <div className="combat-grid">
        <div className="summary-row"><div><span>Classe de armadura</span><strong>{combat.ac}</strong></div></div>
        <div className="summary-row"><div><span>Pontos de vida</span><strong>{combat.hp}</strong></div></div>
        <div className="summary-row"><div><span>Deslocamento</span><strong>{combat.speed} m</strong></div></div>
      </div>
      <div className="gold-box">
        <div>
          <span>Ouro disponível</span>
          <strong>{formatGold(character.gold)}</strong>
        </div>
        <div className="gold-roll">
          <Button
            variant="primary"
            icon={Dices}
            onClick={rollGold}
            disabled={character.goldRolled || !goldRule || !selectedBackground}
            title={!goldRule || !selectedBackground ? "Escolha uma classe e um antecedente primeiro" : "Esta rolagem só pode ser feita uma vez"}
          >
            Rolagem de Ouro
          </Button>
          <small>
            {character.goldRolled
              ? `Resultado: ${character.goldRoll?.dice?.join(" + ")} × ${character.goldRoll.multiplier} = ${formatGold(character.gold)}`
              : goldRule
                ? `${goldRule.dice}d4 × ${goldRule.multiplier} · substitui o equipamento padrão`
                : "Escolha classe e antecedente para liberar"}
          </small>
        </div>
      </div>
      <div className="catalog-tools">
        {categories.map((itemCategory) => (
          <button className={category === itemCategory ? "chosen" : ""} key={itemCategory} onClick={() => setCategory(itemCategory)}>
            {itemCategory}
          </button>
        ))}
      </div>
      <div className="catalog">
        {visibleItems.map((item) => (
          <button key={item.name} disabled={goldToCents(character.gold) < goldToCents(item.price)} onClick={() => buy(item)} title={`Comprar por ${formatGold(item.price)}`}>
            <Plus size={14} />
            {item.name} <small>{formatGold(item.price)}</small>
          </button>
        ))}
      </div>
      <div className="pack-list">
        <h3>Kits e Pacotes</h3>
        {equipmentPacks.map((pack) => (
          <button key={pack.name} disabled={goldToCents(character.gold) < goldToCents(pack.price)} onClick={() => buyPack(pack)} title={pack.detail}>
            <span><strong>{pack.name}</strong><small>{pack.detail}</small></span>
            <b>{formatGold(pack.price)}</b>
          </button>
        ))}
      </div>
      <div className="section-title">
        <h3>Inventário</h3>
        <Button icon={Plus} onClick={addCustom}>
          Adicionar item
        </Button>
      </div>
      {character.equipment.length === 0 ? (
        <div className="empty">
          <Backpack size={28} />
          <p>Selecione itens do catálogo para começar.</p>
        </div>
      ) : (
        character.equipment.map((item) => (
          <div className="inventory-row" key={item.id}>
            <input
              value={item.name}
              onChange={(e) =>
                update({
                  equipment: character.equipment.map((entry) =>
                    entry.id === item.id
                      ? { ...entry, name: e.target.value }
                      : entry,
                  ),
                })
              }
            />
            <small className="item-source">{item.source || "Manual"}{item.price ? ` · ${formatGold(item.price)}` : ""}</small>
            <input
              className="quantity"
              type="number"
              min="1"
              value={item.quantity}
              onChange={(e) =>
                update({
                  equipment: character.equipment.map((entry) =>
                    entry.id === item.id
                      ? {
                          ...entry,
                          quantity: Math.max(1, Number(e.target.value) || 1),
                        }
                      : entry,
                  ),
                })
              }
            />
            <button onClick={() => remove(item.id)} aria-label="Remover item">
              <Trash2 size={16} />
            </button>
          </div>
        ))
      )}
    </div>
  );
}
function Personality({ character, update }) {
  return (
    <div className="form-grid">
      {[
        [
          "traits",
          "Traços de personalidade",
          "Como seu personagem age e fala...",
        ],
        ["ideals", "Ideais", "O que guia suas decisões..."],
        ["bonds", "Ligações", "Pessoas, lugares ou objetos importantes..."],
        ["flaws", "Defeitos", "Fraquezas, vícios ou medos..."],
      ].map(([key, label, placeholder]) => (
        <label className="field textarea" key={key}>
          <span>{label}</span>
          <textarea
            rows="6"
            placeholder={placeholder}
            value={character.personality[key]}
            onChange={(e) =>
              update({
                personality: {
                  ...character.personality,
                  [key]: e.target.value,
                },
              })
            }
          />
        </label>
      ))}
    </div>
  );
}
function Appearance({ character, update }) {
  const set = (key, value) =>
    update({ appearance: { ...character.appearance, [key]: value } });
  return (
    <div className="form-grid">
      <Field
        label="Idade"
        value={character.appearance.age}
        onChange={(e) => set("age", e.target.value)}
      />
      <Field
        label="Altura"
        placeholder="1,78 m"
        value={character.appearance.height}
        onChange={(e) => set("height", e.target.value)}
      />
      <Field
        label="Olhos"
        value={character.appearance.eyes}
        onChange={(e) => set("eyes", e.target.value)}
      />
      <Field
        label="Cabelos"
        value={character.appearance.hair}
        onChange={(e) => set("hair", e.target.value)}
      />
      <label className="field textarea wide">
        <span>Descrição</span>
        <textarea
          rows="8"
          placeholder="Cicatrizes, vestimentas, postura, marcas distintivas..."
          value={character.appearance.description}
          onChange={(e) => set("description", e.target.value)}
        />
      </label>
    </div>
  );
}
function Story({ character, update }) {
  return (
    <label className="field textarea">
      <span>História do personagem</span>
      <textarea
        rows="14"
        placeholder="De onde ele veio, o que o move, o que busca..."
        value={character.story}
        onChange={(e) => update({ story: e.target.value })}
      />
    </label>
  );
}
function SheetField({ label, value }) {
  return (
    <div className="sheet-field">
      <span>{label}</span>
      <strong>{value || " "}</strong>
    </div>
  );
}
function SheetBox({ title, children, className = "" }) {
  return (
    <section className={`sheet-box ${className}`}>
      <h4>{title}</h4>
      {children}
    </section>
  );
}
function Review({ character, selectedClass, combat, spellCatalog }) {
  const race = races.find((item) => item.id === character.race);
  const background = backgrounds.find(
    (item) => item.id === character.background,
  );
  const bonuses = racialBonuses[character.race] || {};
  const proficiency = proficiencyBonus(character.level);
  const value = (key) => character.attrs[key] + (bonuses[key] || 0);
  const grantedSkills = grantedSkillIds(character);
  const skillValue = (key, attr) =>
    modifier(value(attr)) + (character.skills[key] || grantedSkills.includes(key) ? proficiency : 0);
  const selectedFeats = character.feats.map((feat) =>
    typeof feat === "string" ? feat : feat.name,
  );
  const abilityRows = attributes.map(([key, label]) => (
    <div className="ability-row" key={key}>
      <b>{label}</b>
      <span>{signed(modifier(value(key)))}</span>
      <strong>{value(key)}</strong>
    </div>
  ));
  const skillRows = skills.map(([key, label, attr]) => (
    <div className="skill-row" key={key}>
      <span className={character.skills[key] || grantedSkills.includes(key) ? "marked" : ""}>
        {character.skills[key] || grantedSkills.includes(key) ? "●" : "○"}
      </span>
      <b>{label}</b>
      <small>({attributes.find(([id]) => id === attr)?.[1].slice(0, 3)})</small>
      <strong>{signed(skillValue(key, attr))}</strong>
    </div>
  ));
  const spellLevels = [0, 1, 2];
  return (
    <div className="sheet-preview-frame">
      <div className="sheet-preview">
      <div className="sheet-page sheet-page-one">
        <header className="sheet-banner">
          <div>
            <span className="sheet-kicker">Dungeons & Dragons · 5ª Edição</span>
            <h3>{character.name || "NOME DO PERSONAGEM"}</h3>
          </div>
          <div className="sheet-banner-fields">
            <SheetField
              label="Classe e nível"
              value={`${selectedClass?.name || "—"} ${character.level}${character.subclass ? ` · ${character.subclass}` : ""}`}
            />
            <SheetField label="Antecedente" value={background?.name} />
            <SheetField label="Nome do jogador" value={character.player} />
            <SheetField label="Raça" value={race?.name} />
            <SheetField label="Tendência" value={character.alignment} />
            <SheetField label="Pontos de experiência" value="" />
          </div>
        </header>
        <div className="sheet-main-grid">
          <aside className="sheet-left">
            <div className="ability-stack">{abilityRows}</div>
            <SheetBox title="Testes de resistência" className="compact-box">
              {attributes.map(([key, label]) => (
                <div className="save-row" key={key}>
                  <span>○</span>
                  <b>{label}</b>
                  <strong>{signed(modifier(value(key)))}</strong>
                </div>
              ))}
            </SheetBox>
            <SheetBox title="Perícias" className="skills-box">
              {skillRows}
            </SheetBox>
            <SheetBox
              title="Sabedoria passiva (Percepção)"
              className="passive-box"
            >
              <strong>{10 + skillValue("percepcao", "sabedoria")}</strong>
            </SheetBox>
            <SheetBox
              title="Idiomas e outras proficiências"
              className="large-empty"
            >
              <p>
                {race?.bonus ||
                  "Preencha proficiências, idiomas e ferramentas."}
              </p>
            </SheetBox>
          </aside>
          <main className="sheet-center">
            <div className="combat-strip">
              <SheetField
                label="Classe de armadura"
                value={combat.ac}
              />
              <SheetField
                label="Iniciativa"
                value={signed(modifier(value("destreza")))}
              />
              <SheetField
                label="Deslocamento"
                value={`${combat.speed} m`}
              />
            </div>
            <SheetBox title="Pontos de vida">
              <div className="hp-total">{combat.hp || " "}</div>
              <div className="line-field">Pontos de vida atuais</div>
              <div className="line-field">Pontos de vida temporários</div>
            </SheetBox>
            <SheetBox title="Ataques e magias" className="attacks-box">
              <div className="attack-head">
                <span>Nome</span>
                <span>Bônus</span>
                <span>Dano / tipo</span>
              </div>
              {character.equipment.slice(0, 5).map((item) => (
                <div className="attack-line" key={item.id}>
                  <span>{item.name}</span>
                  <span>+{proficiency}</span>
                  <span>—</span>
                </div>
              ))}
            </SheetBox>
            <SheetBox title="Equipamento" className="equipment-box">
              <p>
                {character.equipment
                  .map((item) => `${item.name} (${item.quantity})`)
                  .join(" · ") || "Nenhum item selecionado."}
              </p>
            </SheetBox>
          </main>
          <aside className="sheet-right">
            <SheetBox title="Traços de personalidade">
              <p>{character.personality.traits}</p>
            </SheetBox>
            <SheetBox title="Ideais">
              <p>{character.personality.ideals}</p>
            </SheetBox>
            <SheetBox title="Ligações">
              <p>{character.personality.bonds}</p>
            </SheetBox>
            <SheetBox title="Defeitos">
              <p>{character.personality.flaws}</p>
            </SheetBox>
            <SheetBox
              title="Características e habilidades"
              className="tall-box"
            >
              <p>{selectedFeats.join(", ")}</p>
              <p>{selectedClass?.text}</p>
              <p>{classFeatures[character.level] || "Progressão de classe em andamento."}</p>
            </SheetBox>
          </aside>
        </div>
      </div>
      <div className="sheet-page sheet-page-two">
        <header className="sheet-banner">
          <div>
            <span className="sheet-kicker">Dungeons & Dragons · 5ª Edição</span>
            <h3>{character.name || "NOME DO PERSONAGEM"}</h3>
          </div>
          <div className="sheet-banner-fields">
            <SheetField label="Idade" value={character.appearance.age} />
            <SheetField label="Altura" value={character.appearance.height} />
            <SheetField label="Peso" value="" />
            <SheetField label="Olhos" value={character.appearance.eyes} />
            <SheetField label="Pele" value="" />
            <SheetField label="Cabelos" value={character.appearance.hair} />
          </div>
        </header>
        <div className="page-two-grid">
          <SheetBox title="Aparência do personagem" className="giant-box">
            <p>{character.appearance.description}</p>
          </SheetBox>
          <SheetBox title="História do personagem" className="giant-box">
            <p>{character.story}</p>
          </SheetBox>
          <SheetBox
            title="Outras características e habilidades"
            className="wide-box"
          >
            <p>{selectedFeats.join(", ")}</p>
          </SheetBox>
          <SheetBox title="Tesouro" className="wide-box">
            <p>{formatGold(character.gold)}</p>
          </SheetBox>
        </div>
      </div>
      <div className="sheet-page sheet-page-three">
        <header className="sheet-banner spell-banner">
          <div>
            <span className="sheet-kicker">Dungeons & Dragons · 5ª Edição</span>
            <h3>{selectedClass?.name || "Classe de conjurador"}</h3>
          </div>
          <div className="sheet-banner-fields">
            <SheetField label="Habilidade chave" value={selectedClass?.main} />
            <SheetField
              label="CD do TR"
              value={8 + proficiency + modifier(value(mainAttribute(selectedClass?.main)))}
            />
            <SheetField
              label="Bônus de ataque"
              value={signed(proficiency + modifier(value(mainAttribute(selectedClass?.main))))}
            />
          </div>
        </header>
        <div className="spell-grid">
          {spellLevels.map((level) => (
            <SheetBox
              key={level}
              title={
                level === 0
                  ? "Truques"
                  : `Nível ${level} · Espaços total / usados`
              }
              className="spell-box"
            >
              <div className="spell-lines">
                {spellCatalog
                  .filter((spell) => spell.level === level && (character.spells || []).includes(spell.name))
                  .map((spell) => (
                    <article className="spell-entry" key={spell.name}>
                      <div className="spell-entry-head">
                        <span>○</span>
                        <strong>{spell.name}</strong>
                        <em>{spell.damage}</em>
                      </div>
                      <small>{spell.school}</small>
                      <p>{spell.detail}</p>
                    </article>
                  ))}
              </div>
            </SheetBox>
          ))}
          <SheetBox
            title="Níveis 3 a 9 · Espaços total / usados"
            className="spell-box spell-summary"
          >
            <div className="spell-level-list">
              {[3, 4, 5, 6, 7, 8, 9].map((level) => (
                <div key={level}>
                  <strong>{level}</strong>
                  <span>Espaços: ___ / ___</span>
                </div>
              ))}
            </div>
          </SheetBox>
        </div>
      </div>
      </div>
      <div className="sheet-actions">
        <Button
          variant="primary"
          icon={Download}
          onClick={() => window.print()}
        >
          Imprimir ou salvar PDF
        </Button>
      </div>
    </div>
  );
}
