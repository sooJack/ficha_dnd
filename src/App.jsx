import { useEffect, useRef, useState } from "react";
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
  Languages,
  Plus,
  ScrollText,
  Shield,
  Sparkles,
  Swords,
  Target,
  Trash2,
  Upload,
  Users,
} from "lucide-react";
import { FiMinus, FiPlus } from "react-icons/fi";
import { GiLevelThree } from "react-icons/gi";
import { image } from "./data/imageNames";
import { spells as spellData } from "./data/spells";
import { classes as classCatalog, classProficiencies, classStartingItems, startingGoldByClass } from "./data/classes";
import { subclasses as subclassCatalog, subclassAbilities as abilityCatalog, subclassLevels as subclassLevelData } from "./data/subclasses";
import allSpellTranslations from "./data/allSpellTranslations.js";
import ExternalAttributes from "./components/attributes";
import ExternalBackground from "./components/background";
import ExternalEquipment from "./components/equipment";
import ExternalFeats from "./components/feats";
import ExternalSkills from "./components/skills";
import ExternalSpells from "./components/spells";
import ClassSelection from "./components/class-selection";
import SubclassSelection from "./components/subclass-selection";
import { Card, StepButton } from "./components/ui";
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
const _legacyClasses = [
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
  barbaro: [["Caminho do Furioso", "Sua fúria se torna um frenesi agressivo, capaz de ampliar seus ataques ao custo de exaustão."], ["Caminho do Guerreiro Totêmico", "Você se liga a espíritos animais e escolhe dons do totem, como a resistência do Urso."], ["Caminho do Guardião Ancestral", "Espíritos ancestrais protegem seus aliados e desviam a atenção dos inimigos."], ["Caminho do Arauto da Tormenta", "Uma aura elemental acompanha sua fúria e fortalece ou prejudica criaturas próximas."], ["Caminho do Fanático", "Seu fervor concede dano extra e torna mais fácil retornar à luta depois de cair."], ["Caminho da Besta", "Sua forma bestial manifesta garras, presas e cauda para adaptar seus ataques."], ["Caminho da Magia Selvagem", "A fúria desperta efeitos mágicos aleatórios que você aprende a controlar."], ["Caminho do Gigante", "Você canaliza o poder dos gigantes, cresce e arremessa criaturas e objetos."]],
  bardo: [["Colégio do Conhecimento", "Domina segredos, perícias e Palavras Cortantes para atrapalhar inimigos e ampliar sua versatilidade."], ["Colégio da Bravura", "Inspira aliados no combate e combina armaduras, armas marciais e música heroica."], ["Colégio do Glamour", "A magia feérica envolve sua performance em encanto, majestade e movimento."], ["Colégio das Espadas", "Transforma performances em florescimentos de lâmina e duelos acrobáticos."], ["Colégio dos Sussurros", "Usa medo, segredos e lâminas psíquicas para destruir inimigos por dentro."], ["Colégio da Criação", "A Canção da Criação anima objetos e manifesta matéria útil para o grupo."], ["Colégio da Eloquência", "Sua oratória torna testes sociais confiáveis e enfraquece resistências inimigas."], ["Colégio dos Espíritos", "Histórias de espíritos canalizadas por um foco guiam dano, cura e destinos improváveis."]],
  bruxo: [["A Bruxa do Arquifada", "Um patrono feérico concede ilusões, teleporte defensivo, invisibilidade e encantamento."], ["O Corruptor", "Um pacto infernal recompensa a queda de inimigos com vitalidade temporária e poder destrutivo."], ["O Grande Antigo", "Uma entidade cósmica desperta talentos mentais e comunicação telepática."]],
  clerigo: [["Domínio do Conhecimento", "A fé em deuses da erudição concede idiomas, perícias e recursos para descobrir segredos."], ["Domínio da Vida", "Aprimora curas e canaliza energia divina para manter aliados vivos."], ["Domínio da Luz", "Usa luz e fogo sagrado para revelar ameaças e punir inimigos."], ["Domínio da Natureza", "Recebe dons druídicos e influência sobre animais e plantas."], ["Domínio da Tempestade", "Controla trovão e relâmpago, maximizando o dano de descargas divinas."], ["Domínio da Trapaça", "Cria uma duplicata ilusória e usa engano para reposicionar e confundir o campo."], ["Domínio da Guerra", "Lidera a linha de frente e concede ataques e bônus táticos aos aliados."]],
  druida: [["Círculo da Terra", "Um bioma escolhido amplia suas magias e permite recuperar energia mágica durante descansos."], ["Círculo da Lua", "Aprimora a Forma Selvagem para assumir feras mais perigosas e lutar na linha de frente."], ["Círculo dos Sonhos", "A magia feérica acelera curas, protege descansos e abre caminhos ocultos."], ["Círculo do Pastor", "Totens e espíritos fortalecem criaturas invocadas e aliados próximos."], ["Círculo dos Esporos", "Fungos e necromancia transformam decomposição em defesa, dano e lacaios."], ["Círculo das Estrelas", "Constelações oferecem cura, dano radiante e previsibilidade durante a concentração."], ["Círculo do Fogo Selvagem", "Um espírito ígneo destrói inimigos e renova aliados no ciclo de destruição e renascimento."]],
  feiticeiro: [["Linhagem Dracônica", "Uma herança dracônica fortalece sua defesa, vitalidade e dano do elemento ancestral."], ["Magia Selvagem", "O caos mágico pode provocar surtos imprevisíveis quando você conjura."], ["Magia das Sombras", "A escuridão oferece teleporte, resistência e uma forma quase incorpórea."], ["Feitiçaria da Tormenta", "Vento, trovão e relâmpago dão mobilidade e respostas elétricas ao feiticeiro."], ["Alma Divina", "Uma fonte divina amplia sua lista de magias e permite curar e resistir à morte."], ["Mente Aberrante", "Poderes psíquicos permitem telepatia, conjuração silenciosa e metamorfose aberrante."], ["Alma Relógio", "A ordem de Mecanus anula vantagens, protege aliados e estabiliza resultados."], ["Magia Lunar", "Fases lunares alternam magias, custos de metamagia e fenômenos celestiais."]],
  guerreiro: [["Campeão", "Aperfeiçoa o corpo e amplia a chance de acertos críticos com armas."], ["Mestre de Batalha", "Usa Dados de Superioridade para executar manobras táticas durante os ataques."], ["Cavaleiro Arcano", "Combina combate marcial com magias de Abjuração e Evocação."]],
  ladino: [["Assassino", "Especialista em infiltração e ataques contra inimigos desprevenidos, com críticos devastadores."], ["Larápio", "Usa a Ação Astuta para interagir com objetos e se move com facilidade por telhados e superfícies."], ["Trapaceiro Arcano", "Usa Ilusão, Encantamento e uma Mão de Mago invisível para seus golpes e crimes."], ["Swashbuckler", "Um duelista ágil usa carisma, iniciativa e passos fluidos para bater e correr."], ["Inquisidor", "Lê intenções, encontra fraquezas e garante Ataque Furtivo contra alvos estudados."], ["Mestre de Táticas", "Ajuda aliados à distância e redireciona ataques com estratégia e intriga."], ["Fantasma", "Espíritos concedem perícias, dano necrótico e uma forma espectral."], ["Lâmina Psiónica", "Adagas mentais, telepatia e dados psiónicos tornam seus golpes imprevisíveis."], ["Batedor", "Sobrevive na natureza, move-se com agilidade e lidera emboscadas."]],
  mago: [["Escola de Abjuração", "Cria barreiras arcanas para absorver dano e proteger o grupo."], ["Escola de Conjuração", "Invoca criaturas e objetos e pode trocar de posição em situações de perigo."], ["Escola de Adivinhação", "Usa Portento para substituir rolagens por resultados guardados no início do dia."], ["Escola de Encantamento", "Controla mentes e redireciona ataques contra alvos próximos."], ["Escola de Evocação", "Molda magias de área para preservar aliados e maximizar sua destruição."], ["Escola de Ilusão", "Altera ilusões e cria duplicatas para enganar sentidos e ataques."], ["Escola de Necromancia", "Manipula energia vital, recupera vida e fortalece lacaios mortos-vivos."], ["Escola de Transmutação", "Altera matéria e cria uma Pedra de Transmutação com benefícios escolhidos."]],
  monge: [["Caminho da Mão Aberta", "Aprimora a Rajada de Golpes para empurrar, derrubar ou impedir reações."], ["Caminho das Sombras", "Usa ki para conjurar efeitos furtivos e viajar entre áreas de sombra."], ["Caminho dos Quatro Elementos", "Canaliza ki para moldar terra, água, fogo e ar em técnicas de combate."], ["Caminho do Mestre Bêbado", "Movimentos imprevisíveis permitem desengajar, redirecionar golpes e atacar vários alvos."], ["Caminho do Kensei", "Armas escolhidas tornam-se extensões marciais do corpo e do ki."], ["Caminho da Longa Morte", "Absorve energia vital, espalha medo e recusa-se a morrer."], ["Caminho do Sol Radiante", "Rajadas de ki radiante criam ataques à distância e explosões solares."], ["Caminho da Misericórdia", "Uma máscara canaliza energia vital para curar aliados ou adoecer inimigos."], ["Caminho do Eu Astral", "Braços, rosto e corpo de energia ampliam alcance e defesa."], ["Caminho do Dragão Ascendente", "Golpes, baforadas e auras assumem aspectos de um dragão elemental."]],
  paladino: [["Juramento de Devoção", "Um cavaleiro sagrado canaliza honra, luz divina e uma aura contra encantamento."], ["Juramento dos Anciões", "Protege a luz natural e concede resistência a dano de magias aos aliados próximos."], ["Juramento de Vingança", "Foca um inimigo e obtém vantagem persistente para persegui-lo e derrotá-lo."], ["Juramento da Conquista", "O medo absoluto paralisa inimigos e mantém a linha de frente sob controle."], ["Juramento da Redenção", "Escudos e sacrifício protegem aliados enquanto a violência é refletida."], ["Juramento da Coroa", "Um defensor da lei prende inimigos por perto e absorve danos do grupo."], ["Juramento da Glória", "Feitos heroicos aumentam velocidade, resistência e o potencial dos aliados."], ["Juramento da Vigilância", "Protege o Plano Material contra ameaças extraplanares e fortalece a iniciativa."], ["Quebrador de Juramento", "Poder necrótico e controle de mortos-vivos substituem votos por ambição."]],
  patrulheiro: [["Caçador", "Escolhe táticas para punir inimigos feridos ou atacar múltiplos alvos."], ["Mestre das Feras", "Luta em parceria com um companheiro animal treinado e leal."], ["Perseguidor das Sombras", "Emboscadas, visão umbral e mobilidade tornam a primeira rodada letal."], ["Andarilho do Horizonte", "Teleporta-se entre golpes e transforma ataques em energia planar."], ["Caçador de Monstros", "Identifica resistências, sabota conjurações e persegue alvos sobrenaturais."], ["Guardião do Enxame", "Espíritos empurram inimigos, movem você e criam cobertura viva."], ["Andarilho Feérico", "Charme feérico e teletransportes tornam o patrulheiro um guia imprevisível."], ["Guardião de Dragões", "Um Drake elemental cresce até se tornar companheiro e montaria aérea."]],
};
const subclassSlug = (name) => name.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "").replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "");
const _legacySubclassFallbackImages = { artifice: "artesao-da-guilda", barbaro: "barbaro", bardo: "bardo", bruxo: "bruxo", clerigo: "clerigo", druida: "druida", feiticeiro: "feiticeiro", guerreiro: "guerreiro", ladino: "ladino", mago: "mago", monge: "monge", paladino: "paladino", patrulheiro: "patrulheiro" };
const subclasses = Object.fromEntries(Object.entries(subclassData).map(([classId, options]) => [classId, options.map(([name, detail]) => ({
  name,
  detail,
  classId,
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
const subclassFeatureNames = {
  artifice: ["Especialidade do artífice", "Aprimoramento da especialidade", "Recurso avançado da especialidade", "Maestria da especialidade"],
  barbaro: ["Habilidade do caminho", "Habilidade do caminho", "Habilidade do caminho", "Habilidade do caminho"],
  bardo: ["Habilidade do colégio", "Habilidade do colégio", "Habilidade do colégio", "Habilidade do colégio"],
  bruxo: ["Dádiva do patrono", "Dádiva do patrono", "Dádiva do patrono", "Dádiva do patrono"],
  clerigo: ["Domínio e magias", "Canalizar Divindade", "Aprimoramento do domínio", "Poder maior do domínio"],
  druida: ["Dons do círculo", "Dons do círculo", "Dons do círculo", "Dons do círculo"],
  feiticeiro: ["Magia da origem", "Magia da origem", "Magia da origem", "Magia da origem"],
  guerreiro: ["Habilidade do arquétipo", "Habilidade do arquétipo", "Habilidade do arquétipo", "Habilidade do arquétipo"],
  ladino: ["Habilidade do arquétipo", "Habilidade do arquétipo", "Habilidade do arquétipo", "Habilidade do arquétipo"],
  mago: ["Savante e recurso da escola", "Recurso da escola", "Recurso da escola", "Maestria da escola"],
  monge: ["Técnica do caminho", "Técnica do caminho", "Técnica do caminho", "Técnica do caminho"],
  paladino: ["Magias e Canalizar Divindade", "Aura do juramento", "Recurso do juramento", "Forma suprema do juramento"],
  patrulheiro: ["Magias e recurso do arquétipo", "Recurso do arquétipo", "Recurso do arquétipo", "Recurso do arquétipo"],
};
const _legacySubclassAbilities = Object.fromEntries(
  Object.entries(subclasses).map(([classId, options]) => [
    classId,
    Object.fromEntries(options.map((option) => [
      option.name,
      [subclassLevels[classId], 6, 10, 14].map((level, index) => ({
        level,
        name: subclassFeatureNames[classId][index],
        detail: option.detail,
      })),
    ])),
  ]),
);
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
  // ARMADURAS LEVES
  { name: "Armadura Acolchoada", price: 5, category: "Armaduras", description: "Roupas acolchoadas com camadas de algodão ou lã.", damage: "—", ac: 11 },
  { name: "Armadura de Couro", price: 10, category: "Armaduras", description: "Couro que cobre o corpo, flexível e confortável.", damage: "—", ac: 11 },
  { name: "Armadura de Couro Batido", price: 45, category: "Armaduras", description: "Couro trabalhado com acertos de metal, mais resistente.", damage: "—", ac: 12 },
  // ARMADURAS MÉDIAS
  { name: "Gibão de Peles", price: 10, category: "Armaduras", description: "Gibão de couro e pelo de animal, oferece boa proteção.", damage: "—", ac: 12 },
  { name: "Camisão de Malha", price: 50, category: "Armaduras", description: "Camiseta de elos de metal entrelaçados.", damage: "—", ac: 13 },
  { name: "Brunea", price: 50, category: "Armaduras", description: "Couro com escamas de metal sobrepostas, muito resistente.", damage: "—", ac: 14 },
  { name: "Peitoral", price: 400, category: "Armaduras", description: "Placa de metal que cobre o tórax e costas.", damage: "—", ac: 14 },
  { name: "Meia-Armadura", price: 750, category: "Armaduras", description: "Placas de metal acopladas a um gibão acolchoado.", damage: "—", ac: 15 },
  // ARMADURAS PESADAS
  { name: "Cota de Anéis", price: 30, category: "Armaduras", description: "Anéis de metal costurados em couro ou pano de linho.", damage: "—", ac: 14 },
  { name: "Cota de Malha", price: 75, category: "Armaduras", description: "Rede de anéis de metal entrelaçados que protegem bem.", damage: "—", ac: 16 },
  { name: "Cota de Talas", price: 200, category: "Armaduras", description: "Fitas de metal sobrepostas pregadas a um suporte de couro.", damage: "—", ac: 17 },
  { name: "Armadura de Placas", price: 1500, category: "Armaduras", description: "Armadura completa de placas de metal unidas, a melhor proteção.", damage: "—", ac: 18 },
  { name: "Escudo", price: 10, category: "Armaduras", description: "Escudo de madeira e metal que concede +2 na CA.", damage: "—", ac: 2 },
  
  // ARMAS SIMPLES - CORPO A CORPO
  { name: "Adaga", price: 2, category: "Armas", description: "Lâmina curta e afiada, fácil de usar e ocultar.", damage: "1d4", type: "Perfurante" },
  { name: "Clava", price: 0.1, category: "Armas", description: "Bastão simples, improvável arma de improviso.", damage: "1d4", type: "Concussão" },
  { name: "Foice", price: 0.2, category: "Armas", description: "Foice adaptada ao combate, com lâmina em ângulo agudo.", damage: "1d4", type: "Cortante" },
  { name: "Lança", price: 1, category: "Armas", description: "Longa haste com ponta afiada, usada para atacar à distância ou corpo a corpo.", damage: "1d6", type: "Perfurante" },
  { name: "Lança de Montaria", price: 10, category: "Armas", description: "Lança pesada com ponta larga, usada apenas a cavalo.", damage: "1d12", type: "Perfurante" },
  { name: "Maça", price: 5, category: "Armas", description: "Cabo de madeira com cabeça esférica de metal.", damage: "1d6", type: "Concussão" },
  { name: "Martelo Leve", price: 2, category: "Armas", description: "Martelo pequeno e leve, versátil em combate.", damage: "1d4", type: "Concussão" },
  { name: "Bordão", price: 0.2, category: "Armas", description: "Bastão de madeira robusto, comum entre monges.", damage: "1d6", type: "Concussão" },
  { name: "Machadinha", price: 5, category: "Armas", description: "Machado pequeno e leve, pode ser arremessado.", damage: "1d6", type: "Cortante" },
  
  // ARMAS SIMPLES - À DISTÂNCIA
  { name: "Arco Curto", price: 25, category: "Armas", description: "Arco de madeira simples com alcance de até 24m.", damage: "1d6", type: "Perfurante" },
  { name: "Besta Leve", price: 25, category: "Armas", description: "Mecanismo de mola que dispara parafusos, poderosa à distância.", damage: "1d8", type: "Perfurante" },
  { name: "Azagaia", price: 0.5, category: "Armas", description: "Lança curta e leve, pode ser arremessada.", damage: "1d6", type: "Perfurante" },
  { name: "Funda", price: 0.01, category: "Armas", description: "Pano tecido que arremessa pedras ou bolotas.", damage: "1d4", type: "Concussão" },
  
  // ARMAS MARCIAIS - CORPO A CORPO
  { name: "Espada Curta", price: 10, category: "Armas", description: "Espada versátil e rápida, ideal para combate corpo a corpo.", damage: "1d6", type: "Perfurante" },
  { name: "Espada Longa", price: 15, category: "Armas", description: "Espada grande e pesada, a arma favorita de heróis.", damage: "1d8", type: "Cortante/Perfurante" },
  { name: "Espada Grande", price: 50, category: "Armas", description: "Espada gigantesca de duas mãos, devastadora no combate.", damage: "2d6", type: "Cortante" },
  { name: "Rapieira", price: 25, category: "Armas", description: "Lâmina fina e elegante, perfeita para ataques precisos.", damage: "1d8", type: "Perfurante" },
  { name: "Cimitarra", price: 25, category: "Armas", description: "Lâmina larga e curva, ótima para cortes rápidos.", damage: "1d6", type: "Cortante" },
  { name: "Machado de Batalha", price: 10, category: "Armas", description: "Machado de uma mão com lâmina larga e afiada.", damage: "1d8", type: "Cortante" },
  { name: "Machado Grande", price: 30, category: "Armas", description: "Machado gigantesco de duas mãos, arma mais brutal.", damage: "1d12", type: "Cortante" },
  { name: "Alabarda", price: 20, category: "Armas", description: "Lança com lâmina de machado na ponta, versátil e poderosa.", damage: "1d10", type: "Cortante/Perfurante" },
  { name: "Malho", price: 10, category: "Armas", description: "Martelo grande de duas mãos com cabeça de ferro.", damage: "2d6", type: "Concussão" },
  { name: "Mangual", price: 15, category: "Armas", description: "Cabo com bola de metal corrente, ataca de forma impredizível.", damage: "1d8", type: "Concussão" },
  { name: "Picareta de Guerra", price: 25, category: "Armas", description: "Picareta de mineração adaptada, perfura armaduras.", damage: "1d6", type: "Perfurante" },
  { name: "Martelo de Guerra", price: 15, category: "Armas", description: "Martelo de uma mão, versátil e confiável.", damage: "1d8", type: "Concussão" },
  
  // ARMAS MARCIAIS - À DISTÂNCIA
  { name: "Arco Longo", price: 50, category: "Armas", description: "Arco grande e poderoso com alcance de até 48m.", damage: "1d8", type: "Perfurante" },
  { name: "Besta Pesada", price: 50, category: "Armas", description: "Besta maior e mais potente que a versão leve.", damage: "1d10", type: "Perfurante" },
  { name: "Besta de Mão", price: 75, category: "Armas", description: "Besta pequena que pode ser usada em uma só mão.", damage: "1d6", type: "Perfurante" },
  
  // FOCOS ARCANOS
  { name: "Cajado Arcano", price: 5, category: "Focos Arcanos", description: "Bastão de madeira ou metal trabalhada que substitui componentes materiais de magias.", damage: "—" },
  { name: "Varinha Arcana", price: 10, category: "Focos Arcanos", description: "Haste curta e leve, excelente para direcionar feitiços de ataque.", damage: "—" },
  { name: "Cristal Arcano", price: 10, category: "Focos Arcanos", description: "Gema ou mineral lapidado que canaliza o poder bruto do conjurador.", damage: "—" },
  { name: "Orbe Arcana", price: 20, category: "Focos Arcanos", description: "Esfera de vidro ou cristal que cabe na palma da mão, concentra poder mágico.", damage: "—" },
  { name: "Bastão Arcano", price: 5, category: "Focos Arcanos", description: "Cetro curto feito de metal ou ferro, muito comum entre Bruxos.", damage: "—" },
  { name: "Bolsa de Componentes", price: 25, category: "Focos Arcanos", description: "Bolsa de couro que contém magicamente todos os componentes pequenos para soltar magias.", damage: "—" },
  
  // LIVROS E ESCRITA
  { name: "Grimório", price: 50, category: "Livros", description: "Livro sagrado do Mago com 100 páginas em branco para copiar e estudar magias.", damage: "—" },
  { name: "Livro", price: 25, category: "Livros", description: "Livro encadernado com conhecimento variado, ótimo para pesquisa.", damage: "—" },
  { name: "Tinta e Pena", price: 10, category: "Livros", description: "Tinta de calígrafo e caneta para registrar novas magias ou documentar eventos.", damage: "—" },
  { name: "Folhas de Pergaminho", price: 0.1, category: "Livros", description: "Pergaminho para anotações rápidas, mapas ou pequenos textos.", damage: "—" },
  
  // CONSUMÍVEIS E UTILITÁRIOS MÁGICOS
  { name: "Poção de Cura", price: 50, category: "Consumíveis", description: "Restaura 2d4+2 pontos de vida quando consumida. Indispensável para aventureiros.", damage: "2d4+2" },
  { name: "Água Benta", price: 25, category: "Consumíveis", description: "Água sagrada que causa 1d6 dano radiante a mortos-vivos e demônios.", damage: "1d6" },
  { name: "Fogo Alquímico", price: 50, category: "Consumíveis", description: "Frasco que quebra e incendeia causando 1d4 dano por fogo, persiste por turnos.", damage: "1d4" },
  { name: "Ácido", price: 25, category: "Consumíveis", description: "Frasco de líquido corrosivo que causa 1d6 dano de ácido ou derrete materiais.", damage: "1d6" },
  
  // ILUMINAÇÃO E INVESTIGAÇÃO
  { name: "Lanterna Olho de Boi", price: 15, category: "Iluminação", description: "Ilumina um cone de 18 metros de alcance, ideal para exploração.", damage: "—" },
  { name: "Lanterna Simples", price: 5, category: "Iluminação", description: "Lanterna de mão que ilumina 6 metros em todas as direções.", damage: "—" },
  { name: "Óleo de Lanterna", price: 0.1, category: "Iluminação", description: "Combustível para lanternas, dura 6 horas por frasco. Também cria poças inflamáveis.", damage: "—" },
  { name: "Tocha", price: 0.01, category: "Iluminação", description: "Vela de madeira que ilumina 6 metros, dura 1 hora.", damage: "—" },
  { name: "Lupa", price: 100, category: "Iluminação", description: "Dá bônus +1 para examinar objetos pequenos ou decifrar runas minúsculas.", damage: "—" },
  
  // KITS E FERRAMENTAS
  { name: "Kit de Curandeiro", price: 5, category: "Kits", description: "Estabiliza companheiros caídos sem precisar de teste de Medicina.", damage: "—" },
  { name: "Ferramentas de Ladrão", price: 25, category: "Kits", description: "Essencial para desarmar armadilhas e abrir fechaduras.", damage: "—" },
  { name: "Kit de Escalada", price: 25, category: "Kits", description: "Contém corda, pitons e equipamento necessário para escaladas seguras.", damage: "—" },
  { name: "Kit de Herbalismo", price: 5, category: "Kits", description: "Contém ervas, lâminas e frascos para preparar poções e venenos.", damage: "—" },
  { name: "Kit de Disfarce", price: 25, category: "Kits", description: "Roupas, maquiagem e acessórios para se disfarçar de outra pessoa.", damage: "—" },
  { name: "Ferramentas de Artesão", price: 10, category: "Kits", description: "Ferramentas especializadas para criar objetos de madeira, metal ou couro.", damage: "—" },
  { name: "Símbolo Sagrado", price: 5, category: "Kits", description: "Amuleto sagrado que substitui componentes materiais de magias divinas para Clérigos.", damage: "—" },
  { name: "Instrumento Musical", price: 2, category: "Kits", description: "Instrumento que foca a magia do Bardo e amplifica suas performances.", damage: "—" },
  
  // AVENTURA E CAMPING
  { name: "Mochila", price: 2, category: "Aventura", description: "Mochila de viagem para carregar equipamentos, comporta 15 itens.", damage: "—" },
  { name: "Saco de Dormir", price: 1, category: "Aventura", description: "Saco acolchoado para dormir em segurança durante acampamentos.", damage: "—" },
  { name: "Corda de Cânhamo (15 m)", price: 1, category: "Aventura", description: "Corda resistente de 15 metros, suporta até 300 kg.", damage: "—" },
  { name: "Rações (1 dia)", price: 0.5, category: "Aventura", description: "Rações secas que alimentam uma pessoa por um dia." , damage: "—" },
  { name: "Cantil", price: 0.2, category: "Aventura", description: "Recipiente para água ou bebidas, comporta 1 litro.", damage: "—" },
  { name: "Pederneira", price: 0.5, category: "Aventura", description: "Pederneira e aço para acender fogo em 1 minuto.", damage: "—" },
  { name: "Pé de Cabra", price: 2, category: "Aventura", description: "Ferramenta que facilita abrir caixas, portas e outros objetos.", damage: "—" },
  { name: "Cobertor", price: 0.5, category: "Aventura", description: "Cobertor de lã para se aquecer durante acampamentos.", damage: "—" },
  { name: "Estacas de Madeira", price: 0.05, category: "Aventura", description: "10 estacas de madeira afiadas para acampar ou defesa.", damage: "—" },
  
  // ROUPAS
  { name: "Roupas Comuns", price: 0.5, category: "Roupas", description: "Roupas simples do dia a dia, apropriadas para viajantes.", damage: "—" },
  { name: "Roupas de Viajante", price: 2, category: "Roupas", description: "Roupas reforçadas apropriadas para aventuras e viagens.", damage: "—" },
  { name: "Roupas Finas", price: 15, category: "Roupas", description: "Roupas elegantes e bem-acabadas, apropriadas para nobres.", damage: "—" },
  { name: "Disfarce", price: 1, category: "Roupas", description: "Roupas e acessórios para se passar por alguém diferente.", damage: "—" },
  
  // DIVERSOS
  { name: "Pé de Cabra", price: 2, category: "Diversos", description: "Ferramenta de metal para abrir fechaduras e forçar portas.", damage: "—" },
  { name: "Anel de Sinete", price: 5, category: "Diversos", description: "Anel sigilo de uma família nobre para autenticar documentos.", damage: "—" },
  { name: "Dados", price: 0.1, category: "Diversos", description: "Dados de 20 faces para sortes, apuestas ou rolagens de mesa.", damage: "—" },
  { name: "Pequena Faca", price: 0.2, category: "Diversos", description: "Faca de bolso útil para diversas tarefas.", damage: "—" },
  { name: "Armadilha de Caça", price: 5, category: "Diversos", description: "Armadilha para capturar pequenos animais vivos.", damage: "—" },
  { name: "Pá", price: 2, category: "Diversos", description: "Pá de metal para cavar, útil em explorações.", damage: "—" },
];

const equipmentPacks = [
  ["Pacote de Artista", 40, "Mochila, saco de dormir, duas fantasias, velas, rações, cantil e kit de disfarce."],
  ["Pacote de Diplomata", 39, "Baú, caixas para mapas, roupas finas, tinta, pena, lâmpada, óleo, papel, perfume, parafina e sabão."],
  ["Pacote de Estudioso", 40, "Mochila, livro de estudo, tinta, pena, pergaminho, areia e pequena faca."],
  ["Pacote de Explorador", 10, "Mochila, saco de dormir, kit de refeição, caixa de fogo, tochas, rações, cantil e 15 m de corda."],
  ["Pacote de Sacerdote", 19, "Mochila, cobertor, velas, caixa de fogo, caixa de esmolas, incenso, incensário, vestes, rações e cantil."],
].map(([name, price, detail]) => ({ name, price, detail }));
const spells = spellData;
const steps = [
  ["conceito", "Conceito", ScrollText],
  ["raca", "Raça", Users],
  ["classe", "Classe", Swords],
  ["subclasse", "Subclasse", Shield],
  ["magias", "Magias e Truques", Sparkles],
  ["antecedente", "Antecedente", BookOpen],
  ["idiomas", "Idioma", Languages],
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
const languageCatalog = [
  { id: "comum", label: "Comum", group: "Padrão" },
  { id: "anão", label: "Anão", group: "Padrão" },
  { id: "elfico", label: "Élfico", group: "Padrão" },
  { id: "gnomico", label: "Gnômico", group: "Padrão" },
  { id: "halfling", label: "Halfling", group: "Padrão" },
  { id: "dracônico", label: "Dracônico", group: "Padrão" },
  { id: "orc", label: "Orc", group: "Padrão" },
  { id: "celestial", label: "Celestial", group: "Exótico" },
  { id: "abyssal", label: "Abyssal", group: "Exótico" },
  { id: "infernal", label: "Infernal", group: "Exótico" },
  { id: "primordial", label: "Primordial", group: "Exótico" },
  { id: "silvestre", label: "Silvestre", group: "Exótico" },
  { id: "subterrâneo", label: "Subterrâneo", group: "Exótico" },
  { id: "profundo", label: "Profundo", group: "Secreto" },
  { id: "telepatico", label: "Telepático", group: "Secreto" },
  { id: "cantor-dos-ladinos", label: "Canto dos Ladinos", group: "Secreto" },
  { id: "druidico", label: "Druídico", group: "Secreto" },
];
const raceLanguages = {
  humano: "comum",
  elfo: "elfico",
  "alto-elfo": "elfico",
  "elfo-da-floresta": "elfico",
  drow: "elfico",
  anao: "anão",
  "anao-da-colina": "anão",
  "anao-da-montanha": "anão",
  halfling: "halfling",
  "halfling-pes-leves": "halfling",
  "halfling-robusto": "halfling",
  draconato: "dracônico",
  gnomo: "gnomico",
  "gnomo-da-floresta": "gnomico",
  "gnomo-das-rochas": "gnomico",
  "meio-elfo": "comum",
  "meio-orc": "orc",
  tiefling: "infernal",
  aasimar: "celestial",
  goblin: "goblin",
  bugbear: "goblin",
  kobold: "dracônico",
  "homem-lagarto": "dracônico",
  tabaxi: "tabaxi",
  tortle: "aquático",
  firbolg: "silvestre",
  genasi: "primordial",
  golias: "comum",
  kenku: "aurano",
  tritao: "aquático",
  "yuan-ti": "abyssal",
};
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
  languages: [],
  combat: { ac: 10, hp: 0, speed: 9 },
  spells: [],
  personality: { traits: "", ideals: "", bonds: "", flaws: "" },
  appearance: { age: "", height: "", eyes: "", hair: "", description: "", image: "" },
  story: "",
});
const normalizeText = (value = "") => value
  .normalize("NFD")
  .replace(/[\u0300-\u036f]/g, "")
  .toLowerCase()
  .replace(/\s+/g, " ")
  .trim();
const pickKnownOption = (rawValue, options) => {
  const value = normalizeText(rawValue || "");
  if (!value) return "";
  const exact = options.find((option) => normalizeText(option.name) === value || normalizeText(option.text || option.name) === value);
  if (exact) return exact.id || exact.value || exact.name;
  const contains = options.find((option) => {
    const optionText = normalizeText(option.text || option.name);
    return value.includes(optionText) || optionText.includes(value);
  });
  if (contains) return contains.id || contains.value || contains.name;
  return "";
};
const findLabelValue = (text, labels, maxLength = 80) => {
  const pattern = new RegExp(`(?:${labels.join("|")})\\s*[:\\-]?\\s*([A-Za-zÀ-ÖØ-Ý0-9'’ .\-/()]{1,${maxLength}})`, "iu");
  const match = text.match(pattern);
  if (!match) return "";
  return match[1].replace(/\s{2,}/g, " ").trim();
};
const parseCharacterPdf = (rawText) => {
  const text = rawText.replace(/\s+/g, " ").trim();
  const normalized = normalizeText(text);
  const name = findLabelValue(text, ["nome do personagem", "nome", "character name", "personagem"]) || "";
  const player = findLabelValue(text, ["jogador", "player"]) || "";
  const level = Number(findLabelValue(text, ["nivel", "level"])?.match(/(\d{1,2})/)?.[1] || 1);
  const raceValue = findLabelValue(text, ["raça", "raca", "race"]) || "";
  const classValue = findLabelValue(text, ["classe", "class"]) || "";
  const backgroundValue = findLabelValue(text, ["antecedente", "background"]) || "";
  const alignmentValue = findLabelValue(text, ["tendência", "tendencia", "alignment"]) || "";
  const race = pickKnownOption(raceValue, [...races, ...additionalRaces]);
  const classId = pickKnownOption(classValue, classCatalog);
  const background = pickKnownOption(backgroundValue, backgrounds);
  const subclassCatalogOptions = Object.entries(subclassCatalog).flatMap(([classIdKey, list]) =>
    list.map((option) => ({ id: option.name, classId: classIdKey, name: option.name, text: option.name, value: option.name })),
  );
  const subclassValue = findLabelValue(text, ["subclasse", "subclass"]) || "";
  const subclass = classId ? pickKnownOption(subclassValue || classValue, subclassCatalogOptions.filter((item) => item.classId === classId)) || "" : "";
  const attrs = { ...freshCharacter().attrs };
  const attrPatterns = [
    ["forca", /(?:força|strength)\s*[:\-]?\s*(\d{1,2})/iu],
    ["destreza", /(?:destreza|dexterity)\s*[:\-]?\s*(\d{1,2})/iu],
    ["constituicao", /(?:constituic[ãa]o|constitution)\s*[:\-]?\s*(\d{1,2})/iu],
    ["inteligencia", /(?:intelig[eê]ncia|intelligence)\s*[:\-]?\s*(\d{1,2})/iu],
    ["sabedoria", /(?:sabedoria|wisdom)\s*[:\-]?\s*(\d{1,2})/iu],
    ["carisma", /(?:carisma|charisma)\s*[:\-]?\s*(\d{1,2})/iu],
  ];
  attrPatterns.forEach(([key, regex]) => {
    const match = text.match(regex);
    if (match) attrs[key] = Number(match[1]);
  });
  const parsed = {
    name: name || "",
    player: player || "",
    level: Number.isFinite(level) ? level : 1,
    race,
    classId,
    background,
    subclass,
    alignment: alignmentValue || "",
    attrs,
  };
  return Object.values(parsed).some((value) => typeof value === "string" ? Boolean(value) : Number.isFinite(value)) ? parsed : null;
};
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
  "Acid Arrow": "Flecha Ácida",
  "Acid Splash": "Borrifo Ácido",
  "Aid": "Auxílio",
  "Alarm": "Alarme",
  "Alter Self": "Alterar-se",
  "Animal Friendship": "Amizade Animal",
  "Animal Messenger": "Mensageiro Animal",
  "Animal Shapes": "Formas Animais",
  "Animate Dead": "Animar Mortos",
  "Animate Objects": "Animar Objetos",
  "Antilife Shell": "Concha Antivida",
  "Antimagic Field": "Campo Antimagia",
  "Antipathy/Sympathy": "Antipatia/Simpatia",
  "Arcane Eye": "Olho Arcano",
  "Arcane Hand": "Mão de Bigby",
  "Arcane Lock": "Tranca Arcana",
  "Arcane Sword": "Espada Arcana",
  "Arcanist's Magic Aura": "Aura Mágica do Arcanista",
  "Astral Projection": "Projeção Astral",
  "Augury": "Augúrio",
  "Awaken": "Despertar",
  "Bane": "Perdição",
  "Banishment": "Banimento",
  "Barkskin": "Pele de Árvore",
  "Beacon of Hope": "Farol de Esperança",
  "Bestow Curse": "Amaldiçoar",
  "Black Tentacles": "Tentáculos Negros de Evard",
  "Blade Barrier": "Barreira de Lâminas",
  "Bless": "Abençoar",
  "Blight": "Definhar",
  "Blindness/Deafness": "Cegueira/Surdez",
  "Blink": "Piscar",
  "Blur": "Reflexos",
  "Branding Smite": "Marca da Punição",
  "Burning Hands": "Mãos Flamejantes",
  "Call Lightning": "Convocar Relâmpagos",
  "Calm Emotions": "Acalmar Emoções",
  "Chain Lightning": "Corrente de Relâmpagos",
  "Charm Person": "Enfeitiçar Pessoa",
  "Chill Touch": "Toque Arrepiante",
  "Circle of Death": "Círculo da Morte",
  "Clairvoyance": "Clarividência",
  "Clone": "Clone",
  "Cloudkill": "Névoa Mortal",
  "Color Spray": "Leque de Cores",
  "Command": "Comando",
  "Commune": "Comunhão",
  "Commune With Nature": "Comunhão com a Natureza",
  "Commune with Nature": "Comunhão com a Natureza",
  "Comprehend Languages": "Compreender Idiomas",
  "Compulsion": "Compulsão",
  "Cone of Cold": "Cone de Frio",
  "Confusion": "Confusão",
  "Conjure Animals": "Conjurar Animais",
  "Conjure Celestial": "Conjurar Celestial",
  "Conjure Elemental": "Conjurar Elemental",
  "Conjure Fey": "Conjurar Fadas",
  "Conjure Minor Elementals": "Conjurar Elementais Menores",
  "Conjure Woodland Beings": "Conjurar Seres da Floresta",
  "Contact Other Plane": "Contactar Outro Plano",
  "Contagion": "Contágio",
  "Contingency": "Contingência",
  "Continual Flame": "Chama Contínua",
  "Create or Destroy Water": "Criar ou Destruir Água",
  "Creation": "Criação",
  "Find the Path": "Encontrar o Caminho",
  "Floating Disk": "Disco Flutuante",
  "Forbiddance": "Proibição",
  "Instant Summons": "Convocação Instantânea",
  "Irresistible Dance": "Dança Irresistível",
  "Light": "Luz",
  "Locate Animals or Plants": "Localizar Animais ou Plantas",
  "Meld Into Stone": "Fundir-se na Pedra",
  "Mislead": "Iludir",
  "Pass Without Trace": "Passar sem Rastro",
  "Private Sanctum": "Santuário Particular",
  "Protection From Energy": "Proteção contra Energia",
  "Seeming": "Semblante",
  "Wish": "Desejo",
  "Word of Recall": "Palavra de Recordação",
  "Zone of Truth": "Zona de Verdade",
  "Fire Bolt": "Raio de Fogo",
  "Mage Hand": "Mão Mágica",
  "Ray of Frost": "Raio de Gelo",
  "Shocking Grasp": "Toque Chocante",
  "Prestidigitation": "Prestidigitação",
  "Minor Illusion": "Ilusão Menor",
  "True Strike": "Ataque Verdadeiro",
  "Blade Ward": "Guardião de Lâmina",
  "Friends": "Amigos",
  "Guidance": "Orientação",
  "Resistance": "Resistência",
  "Mending": "Reparar",
  "Message": "Mensagem",
  "Dancing Lights": "Luzes Dançantes",
  "Sacred Flame": "Chama Sagrada",
  "Thaumaturgy": "Taumaturgia",
  "Poison Spray": "Spray de Veneno",
  "Produce Flame": "Produzir Chamas",
  "Shape Water": "Moldar Água",
  "Gust": "Rajada",
  "Spare the Dying": "Poupar os Moribundos",
  "Vicious Mockery": "Zombaria Cruel",
  "Hex": "Maldição",
  "Vampiric Touch": "Toque Vampírico",
  "Sleet Storm": "Tempestade de Granizo",
  "Wall of Stone": "Parede de Pedra",
  "Heat Metal": "Calor do Metal",
  "Melf's Acid Arrow": "Flecha Ácida de Melf",
  "Magic Missile": "Mísseis Mágicos",
  "Magic Weapon": "Arma Mágica",
  "Dispel Magic": "Dispersar Magia",
  "Counterspell": "Contra-magia",
  "Fireball": "Bola de Fogo",
  "Fly": "Voo",
  "Hold Person": "Segurar Pessoa",
  "Greater Invisibility": "Invisibilidade Maior",
  "Dimension Door": "Porta Dimensional",
  "Web": "Teia",
  "Silvery Barbs": "Barbas Prateadas",
  "Control Water": "Controlar Água",
  "Create Food and Water": "Criar Comida e Água",
  "Fire Shield": "Escudo de Fogo",
  "Water Walk": "Andar na Água",
  "Plant Growth": "Crescimento de Plantas",
  "Wall of Fire": "Parede de Fogo",
  "Wall of Ice": "Parede de Gelo",
  "Wall of Force": "Parede de Força",
  "Water Breathing": "Respiração Aquática",
  "Reverse Gravity": "Inverter a Gravidade",
  "Greater Invisibility": "Invisibilidade Maior",
  "Stoneskin": "Pele de Pedra",
  "Cone of Cold": "Cone de Frio",
  "Darkness": "Trevas",
  "Daylight": "Luz do Dia",
  "Detect Magic": "Detectar Magia",
  "Dispel Magic": "Dissipar Magia",
  "Guardian of Faith": "Guardião da Fé",
  "Holy Weapon": "Arma Sagrada",
  "Spirit Guardians": "Guardiões Espirituais",
  "Summon Beast": "Convocar Besta",
  "Summon Fey": "Convocar Fadas",
  "Summon Undead": "Convocar Mortos-Vivos",
};
const normalizeSpellName = (name = "") =>
  String(name)
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/[^a-zA-Z0-9]/g, "")
    .toLowerCase();
const spellNameWordTranslations = {
  acid: "ácido",
  arrow: "flecha",
  splash: "salpico",
  aid: "auxílio",
  alarm: "alarme",
  alter: "alterar",
  self: "si mesmo",
  animal: "animal",
  friendship: "amizade",
  messenger: "mensageiro",
  shapes: "formas",
  animate: "animar",
  dead: "mortos",
  objects: "objetos",
  antilife: "antivida",
  shell: "concha",
  antimagic: "antimagia",
  field: "campo",
  antipathy: "antipatia",
  sympathy: "simpatia",
  arcane: "arcano",
  eye: "olho",
  hand: "mão",
  lock: "tranca",
  sword: "espada",
  aura: "aura",
  astral: "astral",
  projection: "projeção",
  augury: "augúrio",
  awaken: "despertar",
  bane: "perdição",
  banishment: "banimento",
  barkskin: "pele de árvore",
  beacon: "farol",
  hope: "esperança",
  bestow: "outorgar",
  curse: "maldição",
  black: "negro",
  tentacles: "tentáculos",
  blade: "lâmina",
  barrier: "barreira",
  bless: "abençoar",
  blight: "apodrecimento",
  blindness: "cegueira",
  deafness: "surdez",
  blink: "piscar",
  blur: "reflexos",
  branding: "marca",
  smite: "punição",
  burning: "chamas",
  call: "convocar",
  lightning: "relâmpagos",
  calm: "acalmar",
  emotions: "emoções",
  chain: "corrente",
  charm: "encantar",
  person: "pessoa",
  chill: "gelado",
  touch: "toque",
  circle: "círculo",
  clairvoyance: "clarividência",
  cloudkill: "névoa mortal",
  color: "cor",
  spray: "spray",
  command: "comando",
  commune: "comunhão",
  with: "com",
  nature: "natureza",
  comprehend: "compreender",
  languages: "idiomas",
  compulsion: "compulsão",
  cone: "cone",
  cold: "frio",
  confusion: "confusão",
  conjure: "conjurar",
  celestial: "celestial",
  elemental: "elemental",
  fey: "fada",
  minor: "menor",
  elementals: "elementais",
  woodland: "florestal",
  beings: "seres",
  contact: "contato",
  other: "outro",
  plane: "plano",
  contagion: "contágio",
  contingency: "contingência",
  continual: "contínua",
  flame: "chama",
  create: "criar",
  destroy: "destruir",
  water: "água",
  creation: "criação",
  find: "encontrar",
  path: "caminho",
  floating: "flutuante",
  disk: "disco",
  forbiddance: "proibição",
  instant: "instantânea",
  summons: "convocação",
  irresistible: "irresistível",
  dance: "dança",
  light: "luz",
  locate: "localizar",
  meld: "fundir",
  into: "em",
  stone: "pedra",
  mislead: "iludir",
  pass: "passar",
  trace: "rastro",
  private: "particular",
  sanctum: "santuário",
  protection: "proteção",
  from: "contra",
  energy: "energia",
  seeming: "semblante",
  wish: "desejo",
  recall: "recordação",
  truth: "verdade",
  bolt: "raio",
  frost: "gelo",
  grasp: "agarra",
  magic: "mágica",
  missile: "mísseis",
  weapon: "arma",
  dispel: "dissipar",
  counter: "contra",
  fire: "fogo",
  ball: "bola",
  fly: "voo",
  hold: "segurar",
  greater: "maior",
  invisibility: "invisibilidade",
  dimension: "dimensional",
  door: "porta",
  web: "teia",
  silvery: "prateadas",
  barbs: "barbas",
  control: "controlar",
  weather: "clima",
  undying: "não-morto",
  undead: "mortos-vivos",
  cure: "curar",
  wounds: "ferimentos",
  darkness: "trevas",
  darkvision: "visão no escuro",
  daylight: "luz do dia",
  ward: "proteção",
  death: "morte",
  delayed: "adiada",
  blast: "explosão",
  demiplane: "semiplano",
  detect: "detectar",
  evil: "mal",
  good: "bem",
  poison: "veneno",
  disease: "doença",
  thoughts: "pensamentos",
  disguise: "disfarçar",
  disintegrate: "desintegrar",
  reveal: "revelar",
  divine: "divino",
  favor: "favor",
  word: "palavra",
  dominate: "dominar",
  beast: "besta",
  monster: "monstro",
  dream: "sonho",
  druidcraft: "magia druidica",
  earthquake: "terremoto",
  eldritch: "etéreo",
  enhance: "melhorar",
  ability: "habilidade",
  enlarge: "aumentar",
  reduce: "reduzir",
  entangle: "emaranhar",
  enthrall: "encantar",
  etherealness: "etéreo",
  expeditious: "expedita",
  retreat: "retirada",
  eyebite: "mordida ocular",
  fabricate: "fabricar",
  faerie: "feérico",
  faithful: "fiel",
  hound: "cão",
  false: "falsa",
  life: "vida",
  fear: "medo",
  feather: "pena",
  fall: "queda",
  feeblemind: "mente fraca",
  familiar: "familiar",
  steed: "montaria",
  traps: "armadilhas",
  finger: "dedos",
  shield: "escudo",
  storm: "tempestade",
  flame: "chama",
  blade: "lâmina",
  strike: "impacto",
  flaming: "chama",
  sphere: "esfera",
  flesh: "carne",
  to: "para",
  fog: "névoa",
  cloud: "nuvem",
  forcecage: "jaula de força",
  foresight: "previsão",
  freedom: "liberdade",
  movement: "movimento",
  freezing: "gelada",
  gaseous: "gasoso",
  gate: "portal",
  geas: "geas",
  gentle: "gentil",
  repose: "repouso",
  giant: "gigante",
  insect: "inseto",
  glibness: "fluência",
  globe: "globo",
  invulnerability: "inviolabilidade",
  glyph: "glifo",
  warding: "guardião",
  goodberry: "boa baga",
  grease: "graxa",
  restoration: "restauração",
  guardian: "guardião",
  guards: "guarda",
  guiding: "guiado",
  gust: "rajada",
  hallow: "consagrar",
  hallucinatory: "alucinatório",
  terrain: "terreno",
  harm: "dano",
  haste: "aceleração",
  heal: "cura",
  healing: "cura",
  hellish: "infernal",
  rebuke: "repreensão",
  heroes: "heróis",
  feast: "banquete",
  heroism: "heroísmo",
  hideous: "horrível",
  laughter: "riso",
  monster: "monstro",
  holy: "santo",
  aura: "aura",
  hunter: "caçador",
  mark: "marca",
  hypnotic: "hipnótico",
  pattern: "padrão",
  ice: "gelo",
  identify: "identificar",
  script: "escrita",
  imprisonment: "prisão",
  incendiary: "incendiário",
  cloud: "nuvem",
  inflict: "infligir",
  insect: "inseto",
  plague: "praga",
  jump: "salto",
  knock: "abrir",
  legend: "lenda",
  lore: "conhecimento",
  levitate: "levitar",
  lightning: "relâmpago",
  locate: "localizar",
  creature: "criatura",
  object: "objeto",
  longstrider: "passo longo",
  armor: "armadura",
  circle: "círculo",
  jar: "jarro",
  mouth: "boca",
  mansion: "mansão",
  image: "imagem",
  mass: "múltipla",
  maze: "labirinto",
  meteor: "meteoro",
  swarm: "nuvem",
  mind: "mente",
  blank: "vazia",
  mirage: "miragem",
  mirror: "espelho",
  misty: "névoa",
  step: "passo",
  modify: "modificar",
  memory: "memória",
  moonbeam: "raio lunar",
  move: "mover",
  earth: "terra",
  nondetection: "não detecção",
  passwall: "passagem na parede",
  phantasmal: "fantasmagórico",
  killer: "assassino",
  phantom: "fantasma",
  steed: "cavalo",
  planar: "planar",
  ally: "aliado",
  binding: "ligação",
  shift: "mudança",
  plant: "planta",
  growth: "crescimento",
  polymorph: "polimorfia",
  power: "poder",
  word: "palavra",
  kill: "matar",
  stun: "atordoar",
  prayer: "oração",
  healing: "cura",
  prismatic: "prismático",
  spray: "spray",
  wall: "parede",
  programmed: "programada",
  illusion: "ilusão",
  project: "projetar",
  protection: "proteção",
  evil: "mal",
  good: "bem",
  from: "contra",
  poison: "veneno",
  purify: "purificar",
  drink: "bebida",
  raise: "ressuscitar",
  dead: "mortos",
  ray: "raio",
  enfeeblement: "enfraquecimento",
  regenerate: "regenerar",
  reincarnate: "reencarnar",
  remove: "remover",
  resilient: "resistente",
  sphere: "esfera",
  resurrection: "ressurreição",
  reverse: "inverter",
  gravity: "gravidade",
  revivify: "reviver",
  rope: "corda",
  trick: "truque",
  sanctuary: "refúgio",
  scorching: "abrasador",
  scrying: "adivinhação",
  secret: "segredo",
  chest: "baú",
  see: "ver",
  unseen: "invisível",
  servant: "servo",
  wall: "parede",
  force: "força",
  ice: "gelo",
  thorns: "espinhos",
  warding: "guardião",
  bond: "vínculo",
  breathing: "respiração",
  walk: "andar",
  weird: "estranho",
  wind: "vento",
  thorns: "espinhos",
  control: "controlar",
  water: "água",
  create: "criar",
  food: "comida",
  and: "e",
  walk: "andar",
  plant: "planta",
  growth: "crescimento",
  shield: "escudo",
  force: "força",
  breathing: "respiração",
  wall: "parede",
  ice: "gelo",
  fire: "fogo",
  earth: "terra",
  darkness: "trevas",
  daylight: "luz do dia",
  magic: "mágica",
  detect: "detectar",
  summon: "convocar",
  undead: "mortos-vivos",
  guards: "guarda",
  guardians: "guardiões",
  blessing: "abençoamento",
  spirit: "espírito",
  spirits: "espíritos",
  guardian: "guardião",
  faith: "fé",
  holy: "santo",
  weapon: "arma",
  reverse: "inverter",
  gravity: "gravidade",
};
const translateEnglishSpellName = (name = "") => {
  const cleaned = String(name).trim().replace(/[’']/g, " ").replace(/[-/]/g, " ");
  if (!cleaned) return "";
  const words = cleaned.split(/\s+/).filter(Boolean).map((word) => {
    const lower = word.toLowerCase().replace(/[^a-z]/g, "");
    return spellNameWordTranslations[lower] ?? word;
  });
  const translated = words.join(" ");
  return translated.charAt(0).toUpperCase() + translated.slice(1);
};
const translateSpellName = (name = "") => {
  const key = String(name).trim();
  if (!key) return "";
  if (spellNameTranslations[key]) return spellNameTranslations[key];
  const normalized = normalizeSpellName(key);
  if (!normalized) return key;
  const exactAlias = Object.entries(spellNameTranslations).find(([entryKey]) => normalizeSpellName(entryKey) === normalized);
  if (exactAlias) return exactAlias[1];
  const partialAlias = Object.entries(spellNameTranslations).find(
    ([entryKey]) =>
      normalizeSpellName(entryKey).includes(normalized) ||
      normalized.includes(normalizeSpellName(entryKey)),
  );
  if (partialAlias) return partialAlias[1];
  const fallbackAliases = {
    controlwater: "Controlar Água",
    createfoodandwater: "Criar Comida e Água",
    fireshield: "Escudo de Fogo",
    waterwalk: "Andar na Água",
    plantgrowth: "Crescimento de Plantas",
    walloffire: "Parede de Fogo",
    wallofice: "Parede de Gelo",
    wallofforce: "Parede de Força",
    waterbreathing: "Respiração Aquática",
    reversegravity: "Inverter a Gravidade",
    greaterinvisibility: "Invisibilidade Maior",
    stoneskin: "Pele de Pedra",
    coneofcold: "Cone de Frio",
    detectmagic: "Detectar Magia",
    dispelmagic: "Dissipar Magia",
    guardianoffaith: "Guardião da Fé",
    holyweapon: "Arma Sagrada",
    spiritguardians: "Guardiões Espirituais",
    summonbeast: "Convocar Besta",
    summonfey: "Convocar Fadas",
    summonundead: "Convocar Mortos-Vivos",
  };
  if (fallbackAliases[normalized]) return fallbackAliases[normalized];
  return translateEnglishSpellName(key);
};
const spellDescriptionTranslations = {
  "Acid Arrow": "Você dispara uma flecha cintilante de ácido contra um alvo em alcance. Faça um ataque à distância com magia contra o alvo. Em um acerto, o alvo sofre 4d4 de dano de ácido imediatamente e 2d4 no fim do próximo turno dele. Em um erro, a flecha respinga ácido no alvo, causando metade do dano inicial e nenhum dano no fim do próximo turno.",
  "Acid Splash": "Você arremessa uma bolha de ácido. Escolha uma criatura dentro do alcance, ou duas criaturas dentro do alcance que estejam a 5 pés uma da outra. Um alvo deve realizar um teste de resistência de Destreza ou sofre 1d6 de dano ácido.",
  "Aid": "Você fortalece seus aliados com vigor e determinação. Escolha até três criaturas dentro do alcance. O máximo de pontos de vida e os pontos de vida atuais de cada alvo aumentam em 5 pela duração.",
  "Alarm": "Você cria um alarme contra intrusão indesejada. Escolha uma porta, uma janela ou uma área em alcance que não seja maior que um cubo de 20 pés. Até a magia terminar, um alarme avisa você sempre que uma criatura Minúscula ou maior tocar ou entrar na área protegida. Quando você lança a magia, pode designar criaturas que não irão disparar o alarme. Você também escolhe se o alarme é mental ou audível.",
  "Alter Self": "Você assume uma forma diferente. Quando você lança a magia, escolha uma das opções a seguir, cujos efeitos duram pela duração da magia. Enquanto a magia durar, você pode encerrar uma opção como ação para obter os benefícios de outra.",
  "Animal Friendship": "Esta magia permite que você convença uma besta de que não pretende lhe fazer mal. Escolha uma besta que você possa ver dentro do alcance. Ela deve ver e ouvir você. Se a Inteligência da besta for 4 ou superior, a magia falha. Caso contrário, a besta deve realizar um teste de resistência de Sabedoria ou ficar encantada por você pela duração da magia. Se você ou um de seus aliados ferirem o alvo, a magia termina.",
  "Animal Messenger": "Por meio desta magia, você usa um animal para entregar uma mensagem. Escolha uma besta Minúscula que você possa ver dentro do alcance, como um esquilo, um azulão ou um morcego. Você especifica um local que já tenha visitado e um destinatário que corresponda a uma descrição geral, como “um homem ou mulher vestido com o uniforme da guarda da cidade” ou “um anão ruivo usando um chapéu pontudo”. Você também fala uma mensagem com até vinte e cinco palavras. A besta alvo viaja pela duração da magia em direção ao local especificado, percorrendo cerca de 50 milhas por 24 horas se for um mensageiro voador, ou 25 milhas para outros animais.",
  "Animal Shapes": "Sua magia transforma outros em bestas. Escolha qualquer número de criaturas dispostas que você possa ver dentro do alcance. Você transforma cada alvo na forma de uma besta Grande ou menor com nível de desafio 4 ou inferior. Nos turnos seguintes, você pode usar sua ação para transformar criaturas afetadas em novas formas.",
  "Burning Hands": "Uma onda de chamas se espalha em cone a partir de suas mãos. Cada criatura na área deve realizar um teste de resistência de Destreza. Uma criatura sofre dano de fogo se falhar no teste e metade do dano se passar.",
  "Charm Person": "Quando você lança esta magia, escolhe uma criatura humanoide que você possa ver dentro do alcance. Ela deve realizar um teste de resistência de Sabedoria ou ficar encantada por você pela duração. A criatura encantada não percebe que foi encantada e considera você um aliado amigável.",
  "Fire Bolt": "Você lança um projétil de fogo em uma criatura ou objeto dentro do alcance. Faça um ataque à distância com magia contra o alvo. Em um acerto, o alvo sofre 1d10 de dano de fogo.",
  "Mage Hand": "Uma mão espectral, flutuante, surge em um ponto dentro do alcance. A mão dura pela duração e se move de acordo com sua vontade. Pode manipular objetos leves, abrir portas ou recipientes não trancados e transportar itens para você ou para outros lugares dentro do alcance.",
  "Mending": "Este truque corrige uma quebra, rasgo ou dano simples de um objeto que você tocar. Pode consertar objetos feitos de metal, tecido, madeira, couro ou outros materiais. Não pode reparar itens mágicos ou criaturas.",
  "Minor Illusion": "Você cria um som ou imagem de um objeto dentro do alcance que dura pela duração. A imagem não pode conter som e não pode mudar de forma. Ela é completamente ilusória e você pode usá-la para distrair, enganar ou mascarar a verdade.",
  "Prestidigitation": "Você cria pequenos efeitos mágicos, como acender uma vela, limpar ou sujar um objeto, criar pequenos ruídos, aromas e sinais ou alterar a aparência de uma superfície por um curto tempo.",
  "Ray of Frost": "Você cria um raio gelado e atira em uma criatura dentro do alcance. Faça um ataque à distância com magia contra o alvo. Em um acerto, o alvo sofre 1d8 de dano de frio e seu deslocamento é reduzido pela metade até o fim do próximo turno.",
  "Shocking Grasp": "A eletricidade corre por sua mão e provoca a destruição de um alvo. Faça um ataque corpo a corpo com magia contra a criatura. Em um acerto, o alvo sofre 1d8 de dano elétrico e não pode fazer reações até o fim do próximo turno.",
  "True Strike": "Você refina sua mira e faz um ataque extraordinário. Na próxima vez que você fazer um ataque com arma contra uma criatura ao longo da duração, você terá vantagem no primeiro ataque e a magia acaba automaticamente quando o ataque for realizado.",
  "Druidcraft": "Sussurrando aos espíritos da natureza, você cria um dos seguintes efeitos dentro do alcance: você cria um pequeno efeito sensorial inofensivo que prenuncia fenômeno climático dentro de 1 milha e é válido pela duração. A mudança aparece 1 minuto antes de chegar. Você faz com que uma flor brote, uma semente germine ou uma folha amadureça, instantaneamente. Você cria um efeito sensorial inofensivo instantâneo, como folhas caindo, um sopro de vento, o som de um pequeno animal ou o suave odor de um repolho.",
  "Eldritch Blast": "Um feixe de energia cintilante dispara em direção a uma criatura dentro do alcance. Faça um ataque à distância com magia contra o alvo. Em um acerto, o alvo sofre 1d10 de dano de força. A magia cria mais de um feixe quando você atinge níveis mais altos: dois feixes no 5º nível, três feixes no 11º nível e quatro feixes no 17º nível. Você pode direcionar os feixes ao mesmo alvo ou a diferentes.",
  "Poison Spray": "Você estende sua mão em direção a uma criatura que você pode ver dentro do alcance e projeta um jato de gás nocivo de sua palma. A criatura deve realizar um teste de resistência de Constituição ou sofre 1d12 de dano de veneno.",
  "Produce Flame": "Uma chama tremeluzente aparece em sua mão. A chama permanece ali pela duração e não prejudica você nem seu equipamento. A chama emite luz brilhante em um raio de 3 metros e luz fraca por mais 3 metros. A magia termina se você a dispensar como ação ou se lançar novamente.",
  "Shillelagh": "A madeira de um bordão ou de um quarterstaff que você está segurando é imbuída com o poder da natureza. Pela duração, você pode usar sua habilidade de conjuração em vez de Força para as jogadas de ataque e dano de ataques corpo a corpo usando essa arma, e o dado de dano da arma se torna d8. A arma também se torna mágica, se não o for. A magia termina se você lançá-la novamente ou se soltar a arma.",
  "Spare the Dying": "Você toca uma criatura viva que tenha 0 pontos de vida. A criatura se torna estável. Esta magia não tem efeito em mortos-vivos ou constructos.",
  "Bless": "Você abençoa até três criaturas de sua escolha dentro do alcance. Sempre que um alvo fizer uma jogada de ataque ou um teste de resistência antes de a magia terminar, o alvo pode rolar um d4 e adicionar o número obtido à jogada de ataque ou teste de resistência.",
  "Color Spray": "Uma série deslumbrante de luzes coloridas cintilantes surge de sua mão. Role 6d10; o total é quantos pontos de vida de criaturas esta magia pode afetar. Criaturas em um cone de 4,5 metros originando de você são afetadas em ordem crescente de seus pontos de vida atuais (ignorando criaturas inconscientes e criaturas que não conseguem ver).",
  "Detect Good and Evil": "Pela duração, você sabe se há uma aberração, celestial, elemental, fada, fiend ou morto-vivo a 9 metros de você, bem como onde uma criatura está localizada. De maneira similar, você sabe se há um local ou objeto a 9 metros de você que foi magicamente consagrado ou profanado.",
  "Disguise Self": "Você faz com que você - incluindo suas roupas, armadura, armas e outros pertences em sua pessoa - pareça diferente até a magia terminar ou até você usar sua ação para dispensá-la. Você pode parecer 30 centímetros mais baixo ou mais alto e pode aparecer fino, gordo ou entre os dois. Você não pode mudar seu tipo de corpo, então deve adotar uma forma que tenha o mesmo arranjo básico de membros. Caso contrário, a extensão da ilusão depende de você.",
  "Divine Favor": "Sua oração o fortalece com radiance divina. Até a magia terminar, seus ataques com armas causam 1d4 de dano radiante adicional em um acerto.",
  "Entangle": "Ervas e vinhas agarradoras brotam do solo em um quadrado de 6 metros começando em um ponto dentro do alcance. Pela duração, essas plantas transformam o solo na área em terreno difícil.",
  "Find Familiar": "Você ganha o serviço de um familiar, um espírito que assume uma forma animal de sua escolha: morcego, gato, caranguejo, sapo (sapo), falcão, lagarto, polvo, coruja, cobra venenosa, peixe (peixe-agulha), rato, corvo, cavalo-marinho, aranha ou doninha. Aparecendo em um espaço desocupado dentro do alcance, o familiar tem as estatísticas da forma escolhida, embora seja um celestial, fada ou fiend (sua escolha) em vez de uma besta.",
  "Longstrider": "Você toca uma criatura. A velocidade do alvo aumenta em 3 metros até a magia terminar.",
  "Mage Armor": "Você toca uma criatura disposta que não está usando armadura, e uma força mágica protetora a rodeia até a magia terminar. A CA base do alvo se torna 13 + seu modificador de Destreza. A magia termina se o alvo usar armadura ou se você dispensar a magia como ação.",
  "Protection from Good and Evil": "Até a magia terminar, uma criatura disposta que você toque é protegida contra certos tipos de criaturas: aberrações, celestiais, elementais, fadas, fiends e mortos-vivos.",
  "Purify Food and Drink": "Todo alimento e bebida não mágica dentro de uma esfera de 1,5 metro de raio centrada em um ponto de sua escolha dentro do alcance é purificado e tornado livre de veneno e doença.",
  "Sanctuary": "Você protege uma criatura dentro do alcance contra ataque. Até a magia terminar, qualquer criatura que ataque a criatura protegida ou lance um feitiço prejudicial nela deve primeiro realizar um teste de resistência de Sabedoria. Em um teste falho, a criatura deve escolher um novo alvo ou perder o ataque ou feitiço. Esta magia não protege a criatura protegida de efeitos de área, como a explosão de uma bola de fogo.",
  "Shield of Faith": "Um campo cintilante aparece e rodeia uma criatura de sua escolha dentro do alcance, concedendo-lhe um bônus +2 à CA pela duração.",
  "Silent Image": "Você cria a imagem de um objeto, uma criatura ou algum outro fenômeno visível que não seja maior que um cubo de 4,5 metros. A imagem aparece em um local dentro do alcance e dura pela duração. A imagem é puramente visual; não é acompanhada por som, cheiro ou outros efeitos sensoriais.",
  "Sleep": "Esta magia envia criaturas para um sono mágico. Role 5d8; o total é quantos pontos de vida de criaturas esta magia pode afetar. Criaturas a 6 metros de um ponto que você escolheu dentro do alcance são afetadas em ordem crescente de seus pontos de vida atuais (ignorando criaturas inconscientes).",
  "Speak with Animals": "Você ganha a habilidade de compreender e se comunicar verbalmente com bestas pela duração. O conhecimento e a consciência de muitas bestas são limitados por sua inteligência, mas no mínimo, as bestas podem fornecer informações sobre locais próximos e monstros, incluindo tudo o que podem perceber ou perceberam no dia anterior. Você pode ser capaz de persuadir uma besta a fazer um pequeno favor para você, a critério do GM.",
  "Nystul's Magic Aura": "Você coloca uma ilusão em uma criatura ou objeto que toca para que feitiços de adivinhação revelem informações falsas sobre ela. O alvo pode ser uma criatura disposta ou um objeto que não está sendo carregado ou usado por outra criatura.",
  "Find Steed": "Você invoca um espírito que assume a forma de um cavalomontaria extraordinariamente inteligente, forte e leal, criando um vínculo duradouro com ele. Aparecendo em um espaço desocupado dentro do alcance, a montaria assume a forma que você escolher, como um cavalo de guerra, um pônei, um camelo, um alce ou um mastim. A montaria tem as estatísticas da forma escolhida, embora seja um celestial, fada ou fiend (sua escolha) em vez de seu tipo normal.",
  "Knock": "Escolha um objeto que você possa ver dentro do alcance. O objeto pode ser uma porta, uma caixa, um baú, um par de algemas, um cadeado ou outro objeto que contenha um meio mundano ou mágico que impeça o acesso.",
  "Magic Mouth": "Você planta uma mensagem para um objeto no alcance da magia. A mensagem é verbalizada quando as condições de acionamento são atendidas. Escolha um objeto que você veja e que não seja usado ou carregado por outra criatura. Depois diga a mensagem, que não deve exceder 25 palavras, mas ouvir pode levar até 10 minutos. Finalmente, estabeleça as circunstâncias que acionam a magia para entregar sua mensagem.",
  "Mirror Image": "Três duplicatas ilusórias de você aparecem em seu espaço. Até a magia terminar, as duplicatas se movem com você e imitam suas ações, mudando de posição para que seja impossível rastrear qual imagem é real. Você pode usar sua ação para dispensar as duplicatas ilusórias.",
  "Misty Step": "Brevemente cercado por neblina prateada, você se teletransporta até 9 metros para um espaço desocupado que você possa ver.",
  "Pass Without Trace": "Um véu de sombras e silêncio irradia de você, mascarando você e seus companheiros da detecção. Pela duração, cada criatura que você escolher a 9 metros de você (incluindo você) tem bônus +10 em testes de Destreza (Furtividade) e não pode ser rastreada exceto por meios mágicos. Uma criatura que recebe este bônus não deixa rastros ou outros sinais de sua passagem.",
  "Prayer of Healing": "Até seis criaturas de sua escolha que você possa ver dentro do alcance recuperam pontos de vida iguais a 2d8 + seu modificador de habilidade de conjuração. Esta magia não tem efeito em mortos-vivos ou constructos.",
  "Ray of Enfeeblement": "Um raio preto de energia enervante salta de seu dedo em direção a uma criatura dentro do alcance. Faça um ataque à distância com magia contra o alvo. Em um acerto, o alvo causa apenas metade do dano com ataques com armas que usam Força até a magia terminar.",
  "Rope Trick": "Você toca um comprimento de corda que tem até 18 metros. Uma extremidade da corda então sobe para o ar até toda a corda ficar perpendicular ao chão. Na extremidade superior da corda, uma entrada invisível se abre para um espaço extradimensional que dura até a magia terminar.",
  "Scorching Ray": "Você cria três raios de fogo e os arremessa em alvos dentro do alcance. Você pode arremessá-los em um alvo ou em vários.",
};
const translateSpellDescription = (spellName, description = "") => {
  if (spellName && allSpellTranslations[spellName]) {
    return allSpellTranslations[spellName];
  }
  return description || "Uma magia descrita nas regras da 5e 2014.";
};
const apiSpell = (spell) => ({
  name: translateSpellName(spell.name),
  level: spell.level,
  school: englishSchoolNames[spell.school?.name] || spell.school?.name || "Magia",
  damage: spell.damage
    ? `${spell.damage.damage_at_slot_level?.[String(spell.level)] || spell.damage.damage_at_character_level?.["1"] || "variável"} ${spell.damage.damage_type?.name?.toLowerCase() || "mágico"}`
    : "—",
  detail: translateSpellDescription(spell.name, spell.desc?.[0]),
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
const Button = StepButton;
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
  const fileInputRef = useRef(null);
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
          name: translateSpellName(name),
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
  const selectedClass = classCatalog.find((item) => item.id === character.classId);
  const selectedRace = races.find((item) => item.id === character.race);
  const derivedCombat = deriveCombat(character, selectedClass, selectedRace);
  const availableSteps = steps.filter(([id]) => {
    if (id === "subclasse") return character.level >= (subclassLevelData[character.classId] || 3) && Boolean(selectedClass);
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
  const handlePdfImport = async (event) => {
    const file = event.target.files?.[0];
    if (!file) return;
    event.target.value = "";
    try {
      const pdfjsLib = await import("pdfjs-dist");
      pdfjsLib.GlobalWorkerOptions.workerSrc = new URL("pdfjs-dist/build/pdf.worker.min.mjs", import.meta.url).toString();
      const buffer = await file.arrayBuffer();
      const pdf = await pdfjsLib.getDocument({ data: buffer }).promise;
      let text = "";
      for (let pageIndex = 1; pageIndex <= pdf.numPages; pageIndex += 1) {
        const page = await pdf.getPage(pageIndex);
        const pageText = await page.getTextContent();
        text += pageText.items.map((item) => item.str).join(" ") + "\n";
      }
      const parsed = parseCharacterPdf(text);
      if (!parsed) {
        alert("Não foi possível identificar os dados da ficha no PDF enviado.");
        return;
      }
      setCharacter((previous) => ({
        ...freshCharacter(),
        ...previous,
        ...parsed,
      }));
      setCurrent(0);
      setLanding(false);
    } catch (error) {
      console.error(error);
      alert("Não foi possível ler este PDF. Tente outro arquivo ou insira os dados manualmente.");
    }
  };
  if (landing)
    return (
      <Landing
        hasProgress={Boolean(character.name)}
        onNew={reset}
        onContinue={() => setLanding(false)}
        onImport={handlePdfImport}
        fileInputRef={fileInputRef}
      />
    );
  const step = currentStep;
  return (
    <div className="shell">
      <AmbientDecor />
      <aside className="sidebar">
        <div className="brand">
          <img src="/brasao.png" alt="Brasão de Dungeons & Dragons" />
          <div>
            <strong>Dungeons & Dragons</strong>
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
function Landing({ hasProgress, onNew, onContinue, onImport, fileInputRef }) {
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
        <input
          ref={fileInputRef}
          type="file"
          accept="application/pdf"
          onChange={onImport}
          style={{ display: "none" }}
        />
        <Button icon={Upload} onClick={() => fileInputRef?.current?.click()}>
          Adicionar Ficha
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
    idiomas: [
      "Idiomas do personagem",
      "Marque os idiomas que seu personagem conhece, começando pelo idioma nativo da raça ou do antecedente.",
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
      {step === "classe" && <ClassSelection character={character} update={update} classCatalog={classCatalog} startingEquipment={startingEquipment} />}
      {step === "subclasse" && <SubclassSelection character={character} update={update} selectedClass={selectedClass} subclassCatalog={subclassCatalog} subclassLevelData={subclassLevelData} abilityCatalog={abilityCatalog} />}
      {step === "magias" && <ExternalSpells character={character} update={update} selectedClass={selectedClass} spellCatalog={spellCatalog} maxSpellLevel={maxSpellLevel} spellSelectionLimits={spellSelectionLimits} spellDamage={spellDamage} />}
      {step === "antecedente" && (
        <ExternalBackground character={character} update={update} backgrounds={backgrounds} formatGold={formatGold} startingEquipment={startingEquipment} />
      )}
      {step === "idiomas" && <LanguageSelection character={character} update={update} />}
      {step === "atributos" && (
        <ExternalAttributes character={character} update={update} attributes={attributes} pointCosts={pointCosts} races={races} modifier={modifier} />
      )}
      {step === "pericias" && (
        <ExternalSkills
          character={character}
          update={update}
          selectedClass={selectedClass}
          skills={skills}
          classProficiencies={classProficiencies}
          backgroundSkillIds={backgroundSkillIds}
          background={backgrounds.find((item) => item.id === character.background)}
          proficiencyBonus={proficiencyBonus}
          modifier={modifier}
        />
      )}
      {step === "talentos" && <ExternalFeats character={character} update={update} feats={feats} featSlots={featSlots} />}
      {step === "equipamentos" && (
        <ExternalEquipment character={character} update={update} combat={combat} itemCatalog={itemCatalog} equipmentPacks={equipmentPacks} startingGoldByClass={startingGoldByClass} backgrounds={backgrounds} formatGold={formatGold} goldToCents={goldToCents} centsToGold={centsToGold} />
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
function LanguageSelection({ character, update }) {
  const nativeLanguage = raceLanguages[character.race];
  const selected = new Set(character.languages || []);
  
  // Auto-select native language when component mounts or race changes
  const [initialized, setInitialized] = useState(false);
  useEffect(() => {
    if (nativeLanguage && !initialized) {
      if (!selected.has(nativeLanguage)) {
        selected.add(nativeLanguage);
        update({ languages: [...selected] });
      }
      setInitialized(true);
    }
  }, [nativeLanguage]);
  
  const toggleLanguage = (languageId) => {
    if (languageId === nativeLanguage) return; // Cannot deselect native language
    const next = new Set(selected);
    if (next.has(languageId)) {
      next.delete(languageId);
    } else {
      next.add(languageId);
    }
    update({ languages: [...next] });
  };

  return (
    <div className="language-panel">
      {nativeLanguage && (
        <div className="language-group">
          <h3>Idioma Nativo</h3>
          <div className="language-list">
            <label className="language-option checked" style={{ opacity: 0.8 }}>
              <input type="checkbox" checked={true} disabled />
              <span>{languageCatalog.find(l => l.id === nativeLanguage)?.label || nativeLanguage}</span>
              <small>Automático da raça</small>
            </label>
          </div>
        </div>
      )}
      {['Padrão', 'Exótico', 'Secreto'].map((group) => (
        <div className="language-group" key={group}>
          <h3>{group}</h3>
          <div className="language-list">
            {languageCatalog
              .filter((language) => language.group === group)
              .map((language) => (
                <label
                  key={language.id}
                  className={`language-option ${selected.has(language.id) ? "checked" : ""}`}
                  style={{ opacity: language.id === nativeLanguage ? 0.5 : 1 }}
                >
                  <input
                    type="checkbox"
                    checked={selected.has(language.id)}
                    disabled={language.id === nativeLanguage}
                    onChange={() => toggleLanguage(language.id)}
                  />
                  <span>{language.label}</span>
                </label>
              ))}
          </div>
        </div>
      ))}
    </div>
  );
}
function Concept({ character, update }) {
  const setLevel = (value) => {
    const level = Math.max(1, Math.min(20, value));
    const slots = featSlots({ ...character, level });
    update({
      level,
      subclass: level >= (subclassLevelData[character.classId] || 3) ? character.subclass : "",
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
function _LegacySpellSelection({ character, update, selectedClass, spellCatalog }) {
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
function _LegacyBackground({ character, update }) {
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
function _LegacyAttributes({ character, update }) {
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
function _LegacySkills({ character, update, selectedClass }) {
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
function _LegacyFeats({ character, update }) {
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
function LegacyEquipment({ character, update, combat }) {
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
const _legacyEquipmentReference = LegacyEquipment;
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

  const handleImageUpload = (event) => {
    const file = event.target.files?.[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = () => set("image", reader.result || "");
    reader.readAsDataURL(file);
  };

  return (
    <div className="form-grid appearance-layout">
      <div className="appearance-portrait-panel wide">
        <label className="field image-upload-field">
          <span>Imagem do personagem</span>
          <input
            type="file"
            accept="image/*"
            onChange={handleImageUpload}
          />
        </label>

        <div className="portrait-preview" aria-label="Pré-visualização da imagem do personagem">
          {character.appearance.image ? (
            <img src={character.appearance.image} alt="Imagem do personagem" />
          ) : (
            <div className="portrait-placeholder">
              <Eye size={24} />
              <span>Adicionar imagem 1:1</span>
            </div>
          )}
        </div>
      </div>

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
function Abilities({ character, selectedClass }) {
  const selectedSubclass = subclassCatalog[character.classId]?.find((item) => item.name === character.subclass);
  const subclassRows = abilityCatalog[character.classId]?.[character.subclass] || [];
  const classRows = Object.entries(classFeatures).map(([level, detail]) => ({
    level: Number(level),
    name: "Classe",
    detail,
  }));
  const rows = [...classRows, ...subclassRows].sort((first, second) => first.level - second.level);
  return (
    <section className="abilities-panel">
      <div className="section-title">
        <div><span className="eyebrow">Progressão</span><h3>Habilidades</h3></div>
        <strong>Nível {character.level}</strong>
      </div>
      {!selectedClass || !selectedSubclass ? (
        <div className="callout wide">Escolha uma classe e uma subclasse para ver as habilidades da ficha.</div>
      ) : (
        <>
          <div className="ability-identity">
            <img src={selectedSubclass.image} alt={`Ilustração de ${selectedSubclass.name}`} onError={(event) => { event.currentTarget.src = `${import.meta.env.BASE_URL}images/${selectedSubclass.fallback}.jpg`; }} />
            <div><strong>{selectedClass.name} · {selectedSubclass.name}</strong><p>{selectedSubclass.detail}</p></div>
          </div>
          <div className="ability-list">
            {rows.map((ability, index) => {
              const active = ability.level <= character.level;
              return <article className={`ability-item ${active ? "active" : "future"}`} key={`${ability.level}-${ability.name}-${index}`}>
                <span className="ability-level">Nível {ability.level}</span>
                <div><strong>{ability.name}</strong><p>{ability.detail}</p></div>
                <small>{active ? "Ativa" : "Próxima"}</small>
              </article>;
            })}
          </div>
        </>
      )}
    </section>
  );
}
function Review({ character, selectedClass, combat, spellCatalog }) {
  const race = races.find((item) => item.id === character.race);
  const background = backgrounds.find(
    (item) => item.id === character.background,
  );
  const selectedLanguages = (character.languages || ["nato"]).map(
    (id) => languageCatalog.find((language) => language.id === id)?.label || id,
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
      <Abilities character={character} selectedClass={selectedClass} />
      <div className="sheet-preview">
      <div className="sheet-page sheet-page-one">
        <header className="sheet-banner">
          <div className="sheet-banner-identity">
            <div className="sheet-portrait-image">
              {character.appearance?.image ? (
                <img src={character.appearance.image} alt="Imagem do personagem" />
              ) : (
                <div className="sheet-portrait-placeholder">?</div>
              )}
            </div>
            <div>
              <span className="sheet-kicker">Dungeons & Dragons · 5ª Edição</span>
              <h3>{character.name || "NOME DO PERSONAGEM"}</h3>
            </div>
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
                {selectedLanguages.length ? selectedLanguages.join(", ") : "Preencha proficiências, idiomas e ferramentas."}
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
