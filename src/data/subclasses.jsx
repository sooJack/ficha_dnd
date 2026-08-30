const subclassData = {
  artifice: [["Alquimista", "Especialização focada em cura, elixires e suporte de grupo, com magias de laboratório e reagentes arcanos."], ["Armeiro", "Transforma uma armadura mágica em uma extensão do corpo, permitindo defender aliados e atacar com tecnologia arcana."], ["Artilheiro", "Cria canhões e dispositivos de fogo mágico, oferecendo dano em área e proteção de campo."], ["Serralheiro de Batalha", "Luta ao lado de um defensor de ferro, combinando magia de suporte com ataques corporais robustos."]],
  barbaro: [["Caminho do Furioso", "Uma fúria agressiva que amplia ataques em troca de descontrole e exaustão ao final da fúria."], ["Caminho do Guerreiro Totêmico", "Você se conecta a espíritos animais e recebe resistências e bônus de utilidade conforme o totem escolhido."], ["Caminho do Guardião Ancestral", "Espíritos ancestrais protegem aliados e desviam a atenção dos inimigos para você."], ["Caminho do Arauto da Tormenta", "Sua fúria emite uma aura elemental que pune ou fortalece criaturas ao redor."], ["Caminho do Fanático", "Você usa fervor divino para continuar lutando e causar dano intenso mesmo quando a queda parece inevitável."], ["Caminho da Besta", "A forma bestial manifesta garras, presas e cauda, transformando o bárbaro em uma criatura monstruosa."], ["Caminho da Magia Selvagem", "A fúria desencadeia efeitos mágicos caóticos e imprevisíveis que você aprende a controlar."], ["Caminho do Gigante", "Você canaliza uma força titânica, cresce em presença e derruba inimigos com potência brutal."]],
  bardo: [["Colégio do Conhecimento", "Especializa o bardo em perícias, truques e palavras cortantes que atrapalham testes, ataques e danos."], ["Colégio da Bravura", "Combina música, coragem e armas marciais para inspirar aliados em combate e proteger o grupo."], ["Colégio do Glamour", "A magia feérica transforma a performance em encanto, beleza e domínio de presença e controle."], ["Colégio das Espadas", "Converte a arte em duelo, usando florecimentos de lâmina e agilidade para atacar em sequência."], ["Colégio dos Sussurros", "Usa segredos, medo e lâminas psíquicas para corroer a mente e a confiança do inimigo."], ["Colégio da Criação", "A Canção da Criação dá vida a objetos e transforma a criatividade em utilidade e proteção."], ["Colégio da Eloquência", "Sua oratória se torna um arsenal de persuasão, comando e manipulação de forças sociais e táticas."], ["Colégio dos Espíritos", "Histórias e espíritos orientam dano, cura e consequências sobrenaturais em batalha."]],
  clerigo: [["Domínio do Conhecimento", "Leva a fé para a erudição, concedendo idiomas, perícias e controle sobre segredos e verdades ocultas."], ["Domínio da Vida", "Amplia as curas e a presença divina, mantendo aliados vivos em praticamente qualquer situação crítica."], ["Domínio da Luz", "Canaliza energia radiante e fogo sagrado para iluminar, destruir e purificar ameaças."], ["Domínio da Natureza", "Conecta a fé a animais, plantas e magia primal, trazendo proteção e domínio sobre o ambiente."], ["Domínio da Tempestade", "Domina trovão e relâmpago, transformando o clérigo em um canal de energia atmosférica."], ["Domínio da Trapaça", "Usa ilusão e duplicidade para confundir o campo e reformular a linha de batalha."], ["Domínio da Guerra", "Faz o clérigo liderar a linha de frente com ataques, bônus táticos e presença de comando."], ["Domínio da Forja", "Trata metal, armas e armaduras como veículos da vontade divina, com poder ígneo e reforço defensivo."], ["Domínio da Ordem", "A autoridade do clérigo coordena aliados e cria um campo de disciplina e resposta rápida."], ["Domínio da Paz", "A fé se torna um escudo de proteção, compartilhando cura, firmeza e estabilidade ao grupo."], ["Domínio da Sepultura", "Protege a vida no limiar da morte e resiste à passagem da alma para além do corpo."], ["Domínio da Morte", "A energia necrótica destrói, desvia e enfraquece inimigos, dominando o ciclo da morte."], ["Domínio do Crepúsculo", "Medeia luz e sombra para dar visão, proteção e um domínio de mistério e vitalidade."], ["Domínio Arcano", "Une fé e magia arcana para expulsar ameaças extraplanares e ampliar a magia do clérigo."]],
  druida: [["Círculo da Terra", "Concentra o druida em biomas, recuperação e magia vinculada ao solo, às rochas e às forças naturais."], ["Círculo da Lua", "Estende a Forma Selvagem em feras mais perigosas, dando um poder bruto e selvagem de combate."], ["Círculo dos Sonhos", "Combina cura feérica e sonhos de proteção, criando certa liberdade e resistência em descanso e exploração."], ["Círculo do Pastor", "Faz o druida cuidar de aliados e invocações, transformando a natureza em um perímetro de apoio."], ["Círculo dos Esporos", "Usa fungos, decomposição e manutenção de vida em formas estranhas e resistentes."], ["Círculo das Estrelas", "Conecta o druida ao céu e à luz celeste, gerando cura, dano radiante e leitura do ambiente."], ["Círculo do Fogo Selvagem", "Um espírito ígneo transforma o druida em um agente de fervor destrutivo, cura e renascimento."]],
  feiticeiro: [["Linhagem Dracônica", "Uma herança dracônica fortalece a magia com resistência, dano elemental e presença imponente."], ["Magia Selvagem", "O caos mágico afeta a magia do feiticeiro com efeitos imprevisíveis e poder bruto."], ["Magia das Sombras", "A escuridão oferece ocultação, teleporte e uma relação íntima com o medo e a sombra."], ["Feitiçaria da Tormenta", "O poder do vento, dos relâmpagos e do trovão dá mobilidade e explosão atmosférica ao feiticeiro."], ["Alma Divina", "Uma fonte divina amplia curas, resistências e a capacidade de resistir ao dano da morte."], ["Mente Aberrante", "Poderes psíquicos permitem telepatia, mudança de mentalidade e manipulação de pensamentos."], ["Alma Relógio", "A ordem e a precisão do relógio ajudam a estabilizar o caos e a agir a partir do cálculo."], ["Magia Lunar", "As fases da lua alteram o uso da magia, os ataques e os efeitos de metamagia sob sua vontade."]],
  guerreiro: [["Campeão", "Especialização marcada por agressividade física e chance elevada de acerto crítico em combate."], ["Mestre de Batalha", "Coordena manobras táticas por meio de Dados de Superioridade e controle do campo de batalha."], ["Cavaleiro Arcano", "Combina treino militar e magia arcana, transformando o guerreiro em uma torre de combate versátil."], ["Cavaleiro", "Foco em proteção, posicionamento e controle na linha de frente em qualquer formação."], ["Arqueiro Arcano", "Transforma flechas e ataques à distância em projeções mágicas incongruentes e precisas."], ["Samurai", "Determinação, honra e disciplina concedem precisão, resistência e rotação tacticamente melhor."], ["Guerreiro Psiónico", "A mente entra em combate, criando proteção, empurrões e manipulação de espaço mental."], ["Cavaleiro Rúnico", "Ao aplicar runas ancestrais, o guerreiro amplifica seu corpo e sua presença no combate."], ["Eco Cavaleiro", "Um eco temporal atua como uma extensão da vontade do guerreiro em combate e defesa."]],
  ladino: [["Assassino", "Especialista em emboscadas, ataques silenciosos e críticos devastadores contra alvos desprevenidos."], ["Larápio", "Usa Ação Astuta e criatividade para invadir, manobrar e explorar com extremo controle e improviso."], ["Trapaceiro Arcano", "Faz uso de ilusão, encantamento e uma mão invisível para ludibriar, abrir passagem e surpreender."], ["Swashbuckler", "O ladino se torna um duelista ágil, movendo-se com carisma, graça e contraataques rápidos."], ["Inquisidor", "Estuda intenções, encontra fraquezas e transforma informação em vantagem superior no combate."], ["Mestre de Táticas", "Fortalece aliados com apoio estratégico, redirecionando ataques e criando oportunidades."], ["Fantasma", "Conecta-se a espíritos e ganha presença espectral, dano necrótico e mobilidade extra."], ["Lâmina Psiónica", "Nervos, mente e agilidade se fundem em golpes de energia psíquica e telepatia."], ["Batedor", "Sobrevive e lidera emboscadas em ambientes hostis, dando mobilidade e precisão em qualquer terreno."]],
  mago: [["Escola de Abjuração", "Cria barreiras arcanas e proteção defensiva que absorvem dano e sustentam o grupo."], ["Escola de Conjuração", "Manipula espaço e materialidade para invocar criaturas, objetos e transportes rápidos."], ["Escola de Adivinhação", "Usa Portento para ajustar e direcionar o destino, redefinindo resultados importantes."], ["Escola de Encantamento", "Controla mentes, emoções e vontade adversária para disarmar o inimigo sem violência direta."], ["Escola de Evocação", "Concentra energia para criar magias de área, dano e imobilização sem sacrificar aliados."], ["Escola de Ilusão", "Produz imagens, duplicatas e enganos quase reais que confundem percepção, ataques e ambição."], ["Escola de Necromancia", "Manipula a vida e a morte, fortalecendo a própria vitalidade e criando poder a partir do sofrimento."], ["Escola de Transmutação", "Altera matéria e corpo, mudando atributos físicos e criando objetos mágicos de uso prático."]],
  monge: [["Caminho da Mão Aberta", "Foca em golpes de impacto, empurrões e controle de espaço para interromper ações do inimigo."], ["Caminho das Sombras", "O monge usa ki para se mover nas sombras, disfarçar-se e agir sem ser visto."], ["Caminho dos Quatro Elementos", "Canaliza ki para fogo, água, terra e ar, criando técnicas de grande flexibilidade ofensiva."], ["Caminho do Mestre Bêbado", "Movimentos imprevisíveis confundem o alvo e criam uma mobilidade pouco convencional e difícil de prever."], ["Caminho do Kensei", "Armas selecionadas tornam-se extensões do corpo, permitindo um combate disciplinado e preciso."], ["Caminho da Longa Morte", "Foca em energia vital, presença ameaçadora e resistência em momentos de quase-morte."], ["Caminho do Sol Radiante", "Exibe ki radiante em explosões luminosas e rajadas de energia destrutiva."], ["Caminho da Misericórdia", "Erga a essência da própria vida para curar e também afligir, misturando ajuda e sofrimento."], ["Caminho do Eu Astral", "A energia espiritual amplia alcance, defesa e presença em combate contra criaturas do mundo material."], ["Caminho do Dragão Ascendente", "Golpes e baforadas se tornam manifestações dracônicas de força, presença e poder elemental."]],
  paladino: [["Juramento de Devoção", "Representa a honra e a luz, com proteção contra encanto e a capacidade de defender aliados com convicção."], ["Juramento dos Anciões", "A natureza e a vida da Terra se tornam um escudo, concedendo resistência e proteção em magias e ameaças naturais."], ["Juramento de Vingança", "O paladino se torna um caçador determinado, alvo por alvo, perseguindo e punindo em fúria por vingança."], ["Juramento da Conquista", "Faz o paladino militar e ameaçar com medo, impondo autoridade e domínio no campo de batalha."], ["Juramento da Redenção", "Combina defesa e martírio, refletindo violência e preservando aliados com sacrifício de si."], ["Juramento da Coroa", "A lei e o comando criam uma presença que prende inimigos, mantêm a ordem e protegem o grupo."], ["Juramento da Glória", "Exalta feitos heroicos e faz o paladino agir como inspiração para todos ao redor."], ["Juramento da Vigilância", "Cria um sentinela contra ameaças extraplanares, mantendo vigília constante e defesa espiritual."], ["Quebrador de Juramento", "Converte a fé em ambição e poder necrótico, rompendo a ordem para assumir domínio pessoal."]],
  patrulheiro: [["Caçador", "Foca em táticas contra inimigos feridos, múltiplos alvos e combate agressivo em qualquer terreno."], ["Mestre das Feras", "Luta em parceria com um companheiro animal, usando mobilidade e apoio de um aliado fiel."], ["Perseguidor das Sombras", "Especialista em emboscadas e ataques iniciais intensos, desferindo dano de surpresa em um primeiro golpe."], ["Andarilho do Horizonte", "Transforma o campo de batalha em um espaço de deslocamento, abordagem e energia planar."], ["Caçador de Monstros", "Analisa resistências, identifica magia e acompanha criaturas sobrenaturais com precisão mortal."], ["Guardião do Enxame", "Combina espíritos e proteção de grupo, criando apoio para aliados e controle de espaço."], ["Andarilho Feérico", "Ignora fronteiras comuns, usando charme, magia feérica e deslocamentos inesperados."], ["Guardião de Dragões", "Cria um companheiro dracônico, fortalecendo a mobilidade, proteção e presença aérea."]],
  bruxo: [["A Bruxa do Arquifada", "Uma entidade feérica concede ilusões, teleporte defensivo, encanto e presença que mistura medo e fascínio."], ["O Corruptor", "Um pacto infernal retribui a destruição de inimigos com vitalidade temporária e poder destrutivo."], ["O Grande Antigo", "A entidade cósmica abre caminhos mentais, línguas, telepatia e uma estranha relação com a própria consciência."], ["A Lâmina Maldita", "A arma da bruxa ganha personalidade e a própria energia maldita torna o combate corpo a corpo mortal."], ["O Celestial", "Uma presença divina ilumina o bruxo, ampliando cura, proteção e fogo sagrado em combate."], ["O Gênio", "Um ser elemental concede energia, abrigo e grande versatilidade em dano, movimento e proteção."], ["O Morto-Vivo", "A ligação com a morte transforma o bruxo em uma criatura aterrorizante, resistente e severa."], ["O Profundo", "A água e o abismo remetem ao bruxo um conjunto de tentáculos, inteligência líquida e controle profundo."], ["O Imortal", "A bruxa tende à sobrevivência, à escala do tempo e à recuperação continuada, com resistência à morte e à decadência."]],
};

const unlockLevels = { artifice: 3, barbaro: 3, bardo: 3, bruxo: 1, clerigo: 1, druida: 2, feiticeiro: 1, guerreiro: 3, ladino: 3, mago: 2, monge: 3, paladino: 3, patrulheiro: 3 };
const fallbackImages = { artifice: "artesao-da-guilda", barbaro: "barbaro", bardo: "bardo", bruxo: "bruxo", clerigo: "clerigo", druida: "druida", feiticeiro: "feiticeiro", guerreiro: "guerreiro", ladino: "ladino", mago: "mago", monge: "monge", paladino: "paladino", patrulheiro: "patrulheiro" };
const slug = (name) => name.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "").replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "");

export const subclassLevels = unlockLevels;
export const subclasses = Object.fromEntries(Object.entries(subclassData).map(([classId, options]) => [classId, options.map(([name, detail]) => ({ name, detail, classId, fallback: fallbackImages[classId], image: `${import.meta.env.BASE_URL}images/subclasses/${classId}-${slug(name)}.jpg` }))]));
const exactSubclassFeatures = {
  "artifice": {
    "Alquimista": [
      {
        "level": 3,
        "name": "Ferramentas Próprias",
        "detail": "Proficiência com suprimentos de alquimista."
      },
      {
        "level": 3,
        "name": "Magias do Alquimista",
        "detail": "Sempre tem preparadas magias como *Palavra Curativa* (Nvl 3), *Esfera Flamejante* (Nvl 5), *Palavra Curativa em Massa* (Nvl 9) e *Névoa Mortal* (Nvl 15)."
      },
      {
        "level": 3,
        "name": "Elixir Experimental",
        "detail": "Ao fim de um descanso longo, cria um elixir aleatório. Pode gastar espaços de magia para criar mais elixires escolhendo o efeito (Cura, Velocidade, Resiliência, Audácia, Voo ou Transformação)."
      },
      {
        "level": 5,
        "name": "Alquimista Alquímico",
        "detail": "Adiciona seu modificador de Inteligência ao dano de magias de ácido, fogo, necrótico ou veneno, ou à cura de suas magias."
      },
      {
        "level": 9,
        "name": "Elixir Restaurador",
        "detail": "Seus elixires experimentais agora concedem 2d6 + mod. Int de pontos de vida temporários. Você pode conjurar *Restauração Menor* de graça algumas vezes por dia."
      },
      {
        "level": 15,
        "name": "Maestria Química",
        "detail": "Ganha resistência a dano de ácido e veneno, e imunidade à condição envenenado. Pode conjurar *Restauração Maior* e *Cura Completa* de graça uma vez por descanso longo."
      }
    ],
    "Armeiro": [
      {
        "level": 3,
        "name": "Ferramentas Próprias",
        "detail": "Proficiência com ferramentas de ferreiro e armaduras pesadas."
      },
      {
        "level": 3,
        "name": "Magias do Armeiro",
        "detail": "Sempre tem preparadas magias como *Mísseis Mágicos* (Nvl 3), *Estilhaçar* (Nvl 5), *Relâmpago* (Nvl 9) e *Muralha de Força* (Nvl 15)."
      },
      {
        "level": 3,
        "name": "Armadura Arcana",
        "detail": "Sua armadura se funde ao seu corpo, ignora requisitos de Força e serve como foco conjurador. Você escolhe entre dois modelos (trocáveis em descansos):\n- Guardião: Focado em corpo a corpo. Ganha manoplas que dão soco elétrico (provoca desvantagem no inimigo se ele atacar outros) e pode ganhar vida temporária com uma ação bônus.\n- Infiltrador: Focado em furtividade e distância. Aumenta seu deslocamento, anula desvantagem em Furtividade de armaduras pesadas e ganha um laser de gemas no peito/mão (dano elétrico)."
      },
      {
        "level": 5,
        "name": "Ataque Extra",
        "detail": "Você pode atacar duas vezes por turno."
      },
      {
        "level": 9,
        "name": "Modificações de Armadura",
        "detail": "Sua Armadura Arcana conta como 4 itens separados para fins de Infusões Artificiais (peitoral, botas, elmo e arma). Ganha +2 infusões máximas."
      },
      {
        "level": 15,
        "name": "Armadura Perfeita",
        "detail": "Melhora seus modelos de armadura:\n- Guardião: Quando uma criatura termina o turno perto de você, você pode puxá-la magneticamente em sua direção e atacá-la como reação.\n- Infiltrador: O laser de gemas deixa o alvo \"marcado\". O próximo ataque contra ele dá mais dano e ele tem desvantagem para atacar você."
      }
    ],
    "Artilheiro": [
      {
        "level": 3,
        "name": "Ferramentas Próprias",
        "detail": "Proficiência com ferramentas de entalhador."
      },
      {
        "level": 3,
        "name": "Magias do Artilheiro",
        "detail": "Sempre tem preparadas magias como *Mãos Flamejantes* (Nvl 3), *Raio Ardente* (Nvl 5), *Bola de Fogo* (Nvl 9) e *Muralha de Fogo* (Nvl 15)."
      },
      {
        "level": 3,
        "name": "Canhão Eldritch",
        "detail": "Cria um canhão mágico pequeno ou minúsculo. Com uma ação bônus, você ativa o canhão para disparar. Modelos:\n- Lança-chamas: Cone de fogo (dano de fogo).\n- Balista de Força: Tiro de energia a distância que empurra o inimigo para trás.\n- Protetor: Emite uma aura que concede pontos de vida temporários para os aliados."
      },
      {
        "level": 5,
        "name": "Arma de Fogo Arcana",
        "detail": "Você transforma uma varinha, cajado ou cetro em uma arma de fogo. Quando conjura uma magia de artífice através dela, rola 1d8 adicional de dano."
      },
      {
        "level": 9,
        "name": "Canhão Detonante",
        "detail": "O dano de todos os seus canhões aumenta em 1d8. Como ação, você pode autodestruir seu canhão para explodir e causar muito dano de força ao redor."
      },
      {
        "level": 15,
        "name": "Posição Fortificada",
        "detail": "Você pode ter dois canhões ativos ao mesmo tempo. Além disso, seus canhões emitem um campo de energia que dá meia-cobertura (+2 na CA e testes de Reflexos) para você e seus aliados próximos."
      }
    ],
    "Serralheiro de Batalha": [
      {
        "level": 3,
        "name": "Ferramentas Próprias",
        "detail": "Proficiência com ferramentas de ferreiro."
      },
      {
        "level": 3,
        "name": "Magias do Batalhador de Aço",
        "detail": "Sempre tem preparadas magias como *Destruição Heroica* (Nvl 3), *Vínculo Protetor* (Nvl 5), *Aura de Vitalidade* (Nvl 9) e *Banimento* (Nvl 15)."
      },
      {
        "level": 3,
        "name": "Prontidão para o Combate",
        "detail": "Ganha proficiência com armas marciais. Quando ataca com uma arma mágica, você pode usar seu modificador de Inteligência no acerto e no dano (em vez de Força ou Destreza)."
      },
      {
        "level": 3,
        "name": "Defensor de Ferro",
        "detail": "Você cria um companion robótico quadrúpede. Ele age logo após o seu turno. Pode atacar com a sua ação bônus e tem uma reação para impor desvantagem em ataques inimigos contra aliados próximos."
      },
      {
        "level": 5,
        "name": "Ataque Extra",
        "detail": "Você pode atacar duas vezes por turno."
      },
      {
        "level": 9,
        "name": "Jorro Arcano",
        "detail": "Quando você ou seu Defensor de Ferro acertam um ataque, você pode canalizar energia para causar +2d6 de dano de força ou curar 2d6 de vida de um aliado próximo (pode usar um número de vezes igual ao seu mod. de Int)."
      },
      {
        "level": 15,
        "name": "Defensor Aperfeiçoado",
        "detail": "O Jorro Arcano aumenta para 4d6 (tanto o dano quanto a cura). O Defensor de Ferro ganha +2 na CA e, quando usa sua reação para proteger alguém, reflete dano de força no atacante."
      }
    ]
  },
  "barbaro": {
    "Caminho do Furioso": [
      {
        "level": 3,
        "name": "Frenesi (*****Frenzy*****)",
        "detail": "Quando entra em fúria, você pode fazer um ataque adicional com uma ação bônus em cada um de seus turnos. Quando a fúria termina, você sofre um nível de Exaustão."
      },
      {
        "level": 6,
        "name": "Fúria Sem Mente (*****Mindless Rage*****)",
        "detail": "Você se torna imune às condições Enfeitiçado e Amedrontado enquanto estiver em fúria. Se já estiver sob esses efeitos ao entrar em fúria, eles são suspensos."
      },
      {
        "level": 10,
        "name": "Presença Intimidante (*****Intimidating Presence*****)",
        "detail": "Usa sua ação para aterrorizar uma criatura a até 9 metros. Se o alvo falhar num teste de resistência de Sabedoria, fica Amedrontado até o fim do seu próximo turno. Pode usar sua ação em turnos seguintes para estender o efeito."
      },
      {
        "level": 14,
        "name": "Retaliação (*****Retaliation*****)",
        "detail": "Quando você sofre dano de uma criatura que está a até 1,5 metro de você, você pode usar sua reação para fazer um ataque de arma corpo a corpo contra ela."
      }
    ],
    "Caminho do Guerreiro Totêmico": [
      {
        "level": 3,
        "name": "Buscador Espiritual",
        "detail": "Você ganha a habilidade de conjurar as magias *Falar com Animais* e *Sentido Bestial* como rituais."
      },
      {
        "level": 3,
        "name": "Espírito Totêmico (Escolha um)",
        "detail": "- Urso: Enquanto estiver em fúria, você ganha resistência a todos os tipos de dano, exceto dano psíquico.\n- Águia: Inimigos têm desvantagem em ataques de oportunidade contra você, e você pode usar Disparar (*Dash*) como ação bônus em fúria.\n- Lobo: Enquanto estiver em fúria, seus aliados ganham vantagem em ataques corpo a corpo contra inimigos a até 1,5 metro de você.\n- Alce / Tigre (SCAG/XGtE): O Alce aumenta sua velocidade em +4,5m em fúria; o Tigre aumenta a distância de seus saltos."
      },
      {
        "level": 6,
        "name": "Aspecto da Besta (Escolha um)",
        "detail": "Ganha bônus passivos (fora da fúria). O Urso dobra sua capacidade de carga; a Águia permite enxergar perfeitamente a quilômetros; o Lobo permite rastrear criaturas em ritmo acelerado; Alce/Tigre dão bônus de viagem ou perícias extras."
      },
      {
        "level": 10,
        "name": "Caminhante Espiritual",
        "detail": "Você pode conjurar a magia *Comunhão com a Natureza* como um ritual."
      },
      {
        "level": 14,
        "name": "Sintonização Totêmica (Escolha um em fúria)",
        "detail": "O Urso impõe desvantagem em inimigos que tentarem atacar seus aliados; a Águia te dá deslocamento de voo igual ao seu deslocamento terrestre (mas cai se terminar o turno no ar); o Lobo permite derrubar um inimigo no chão usando uma ação bônus após acertá-lo."
      }
    ],
    "Caminho do Guardião Ancestral": [
      {
        "level": 3,
        "name": "Protetores Ancestrais",
        "detail": "O primeiro inimigo que você acertar no seu turno enquanto estiver em fúria fica marcado pelos espíritos. Esse inimigo tem desvantagem para atacar qualquer um que não seja você, e se ele acertar um aliado, o aliado ganha resistência àquele dano."
      },
      {
        "level": 6,
        "name": "Escudo Espiritual",
        "detail": "Quando um aliado visível a até 9 metros sofre dano, você pode usar sua reação para reduzir o dano sofrido por ele em 2d6. Esse valor aumenta nos níveis 10 (3d6) e 14 (4d6)."
      },
      {
        "level": 10,
        "name": "Consultar os Ancestrais",
        "detail": "Você pode conjurar as magias *Augúrio* ou *Clarividência* sem gastar espaços de magia para pedir conselhos aos seus espíritos (1 vez por descanso curto ou longo)."
      },
      {
        "level": 14,
        "name": "Vingança Ancestral",
        "detail": "Quando você usa seu *Escudo Espiritual* (reação do nvl 6) para reduzir o dano de um aliado, o atacante sofre dano de força igual à quantidade de dano que você reduziu."
      }
    ],
    "Caminho do Arauto da Tormenta": [],
    "Caminho do Fanático": [
      {
        "level": 3,
        "name": "Fúria Divina (*****Divine Fury*****)",
        "detail": "O primeiro oponente que você acertar com uma arma no seu turno enquanto estiver em fúria sofre 1d6 + metade do seu nível de bárbaro de dano adicional (você escolhe se o dano é Radiante ou Necrótico)."
      },
      {
        "level": 3,
        "name": "Guerreiro dos Deuses (*****Warrior of the Gods*****)",
        "detail": "Se uma magia for usada para reviver você dos mortos (como *Revivificar*), quem conjurar a magia não precisa gastar nenhum componente material de diamante."
      },
      {
        "level": 6,
        "name": "Foco Fanático (*****Fanatical Focus*****)",
        "detail": "Se falhar em um teste de resistência enquanto estiver em fúria, você pode rolar o dado novamente (1 uso por fúria)."
      },
      {
        "level": 10,
        "name": "Clamor Fanático (*****Zealous Presence*****)",
        "detail": "Com uma ação bônus, você solta um grito de guerra. Até 4 aliados a até 18 metros ganham vantagem em jogadas de ataque e testes de resistência até o início do seu próximo turno (1 vez por descanso longo)."
      },
      {
        "level": 14,
        "name": "Fúria Além da Morte (*****Rage Beyond Death*****)",
        "detail": "Enquanto estiver em fúria, ter 0 pontos de vida não deixa você inconsciente. Você continua lutando e fazendo testes de morte normalmente. Você só morre se a fúria acabar e você ainda estiver com 0 pontos de vida e tiver falhado nos testes de morte."
      }
    ],
    "Caminho da Besta": [],
    "Caminho da Magia Selvagem": [
      {
        "level": 3,
        "name": "Consciência Mágica",
        "detail": "Com uma ação, você percebe a presença de magias ou itens mágicos a até 18 metros (igual ao sentido do Paladino, baseado em Carisma)."
      },
      {
        "level": 3,
        "name": "Surtos de Magia Selvagem",
        "detail": "Sempre que entrar em fúria, você rola em uma tabela de 1d8 para gerar um efeito mágico contínuo (teletransportar com ação bônus, atirar raios de luz, invocar espíritos de flores que explodem, criar terreno difícil para inimigos, etc.)."
      },
      {
        "level": 6,
        "name": "Infusão de Bolso (*****Bolstering Magic*****)",
        "detail": "Você toca uma criatura (ou você mesmo) e concede um bônus: ou adiciona 1d3 em testes de ataque e habilidade por 10 minutos, ou recupera um espaço de magia de nível 1, 2 ou 3 (usos limitados por Proficiência)."
      },
      {
        "level": 10,
        "name": "Retaliação Instável",
        "detail": "Se você sofrer dano ou falhar num teste de resistência em fúria, você pode usar sua reação para rolar imediatamente um novo efeito na tabela de Magia Selvagem, substituindo o efeito anterior."
      },
      {
        "level": 14,
        "name": "Onda de Caos (*****Controlled Surge*****)",
        "detail": "Sempre que rolar na tabela de Magia Selvagem, você rola dois dados e escolhe qual dos dois efeitos quer ativar. Se tirar números iguais, você escolhe qualquer efeito da lista."
      }
    ],
    "Caminho do Gigante": [
      {
        "level": 3,
        "name": "Armadura de Espinhos (*****Battlerager Armor*****)",
        "detail": "Quando usa uma armadura com espinhos, você pode usar uma ação bônus em fúria para dar um ataque de espinhos (1d4 + Força). Se agarrar alguém, causa 3 de dano extra."
      },
      {
        "level": 6,
        "name": "Abatimento Imprudente (*****Reckless Abandon*****)",
        "detail": "Quando você usa o seu *Ataque Imprudente* (habilidade básica de Bárbaro de dar vantagem para ganhar vantagem), você ganha pontos de vida temporários iguais ao seu modificador de Constituição."
      },
      {
        "level": 10,
        "name": "Investida de Espinhos (*****Battlerager Charge*****)",
        "detail": "Você pode usar a ação de Disparar (*Dash*) como uma ação bônus enquanto estiver em fúria."
      },
      {
        "level": 14,
        "name": "Retaliação de Espinhos (*****Spiked Retribution*****)",
        "detail": "Quando uma criatura a até 1,5 metro te acerta com um ataque corpo a corpo, ela sofre 3 de dano de perfuração automático se você estiver em fúria e de armadura de espinhos."
      }
    ]
  },
  "bardo": {
    "Colégio do Conhecimento": [
      {
        "level": 3,
        "name": "Perícias Adicionais",
        "detail": "Você ganha proficiência em três perícias quaisquer à sua escolha."
      },
      {
        "level": 3,
        "name": "Palavras Cortantes (*****Cutting Words*****)",
        "detail": "Quando uma criatura visível a até 18 metros faz uma jogada de ataque, teste de habilidade ou rolagem de dano, você pode gastar uma Inspiração Bárdica como reação. Role o dado e subtraia o resultado da jogada do inimigo."
      },
      {
        "level": 6,
        "name": "Segredos Mágicos Adicionais",
        "detail": "Você aprende duas magias de qualquer outra classe (como *Bola de Fogo* do Mago ou *Espíritos Guardiões* do Clérigo). Elas devem ser de um nível que você possa conjurar e contam como magias de bardo."
      },
      {
        "level": 14,
        "name": "Habilidade Inigualável (*****Peerless Skill*****)",
        "detail": "Quando você fizer um teste de habilidade (como Iniciativa ou Furtividade) e falhar, você pode gastar um dado de Inspiração Bárdica, rolá-lo e somar o resultado ao seu teste."
      }
    ],
    "Colégio da Bravura": [
      {
        "level": 3,
        "name": "Proficiências Adicionais",
        "detail": "Ganha proficiência com armas marciais, armaduras médias e escudos."
      },
      {
        "level": 3,
        "name": "Inspiração de Combate",
        "detail": "Um aliado com sua Inspiração Bárdica pode rolar o dado para adicionar ao dano de um ataque com arma, ou usar a reação para adicionar o resultado à sua própria Classe de Armadura (CA) ao ser atacado."
      },
      {
        "level": 6,
        "name": "Ataque Extra",
        "detail": "Você pode atacar duas vezes por turno quando usa a ação de Ataque."
      },
      {
        "level": 14,
        "name": "Magia de Batalha (*****Battle Magic*****)",
        "detail": "Quando você usa sua ação para conjurar uma magia de bardo, você pode fazer um ataque com arma como uma ação bônus no mesmo turno."
      }
    ],
    "Colégio do Glamour": [
      {
        "level": 3,
        "name": "Manto de Inspiração (*****Mantle of Inspiration*****)",
        "detail": "Com uma ação bônus, gaste uma Inspiração Bárdica para assumir uma aparência magnífica. Até 5 aliados que você possa ver ganham 5 pontos de vida temporários (sobe com os níveis) e podem usar a reação deles para se mover imediatamente sem provocar ataques de oportunidade."
      },
      {
        "level": 3,
        "name": "Performance Enfeitiçante",
        "detail": "Se você se apresentar por pelo menos 1 minuto, pode forçar os ouvintes a um teste de Sabedoria. Se falharem, ficam Enfeitiçados por 1 hora, idolatrando você."
      },
      {
        "level": 6,
        "name": "Manto de Majestade (*****Mantle of Majesty*****)",
        "detail": "Com uma ação bônus, você assume uma presença feérica por 1 minuto. Durante esse tempo, você pode conjurar a magia *Comando* (*Command*) como uma ação bônus em cada um de seus turnos sem gastar espaços de magia. Alvos enfeitiçados por você falham automaticamente."
      },
      {
        "level": 14,
        "name": "Majestade Inabalável (*****Unbreakable Majesty*****)",
        "detail": "Você adquire um aspecto permanentemente belo e intimidador. Quando uma criatura te ataca pela primeira vez no turno, ela deve fazer um teste de Carisma. Se falhar, não pode te atacar e deve escolher outro alvo (se passar, ataca com desvantagem)."
      }
    ],
    "Colégio das Espadas": [
      {
        "level": 3,
        "name": "Proficiências Adicionais",
        "detail": "Ganha proficiência com armaduras médias e a cimitarra."
      },
      {
        "level": 3,
        "name": "Estilo de Luta",
        "detail": "Escolha entre Duas Armas (soma modificador no dano do segundo ataque) ou Duelismo (+2 de dano se usar apenas uma arma de uma mão)."
      },
      {
        "level": 3,
        "name": "Florescimento de Lâminas (*****Blade Flourish*****)",
        "detail": "Quando usa a ação de Ataque, seu deslocamento aumenta em 3 metros. Se acertar um ataque, pode gastar uma Inspiração Bárdica para aplicar um efeito:\n- Florescimento Defensivo: Causa o dano do dado de inspiração extra e soma o resultado na sua CA até o seu próximo turno.\n- Florescimento de Empurrão: Causa dano extra e empurra o alvo para trás, permitindo que você se teletransporte até ele usando sua reação.\n- Florescimento de Varredura: Causa dano extra ao alvo e o mesmo dano extra a outro inimigo adjacente."
      },
      {
        "level": 6,
        "name": "Ataque Extra",
        "detail": "Você pode atacar duas vezes por turno."
      },
      {
        "level": 14,
        "name": "Florescimento Mestre",
        "detail": "Sempre que usar um *Florescimento de Lâminas*, você pode rolar um 1d6 em vez de gastar um dado de Inspiração Bárdica da sua reserva."
      }
    ],
    "Colégio dos Sussurros": [
      {
        "level": 3,
        "name": "Lâminas Psíquicas (*****Psychic Blades*****)",
        "detail": "Quando você acerta uma criatura com um ataque de arma, pode gastar uma Inspiração Bárdica para causar 2d6 de dano psíquico adicional. Esse dano aumenta nos níveis 5 (3d6), 10 (5d6) e 15 (8d6)."
      },
      {
        "level": 3,
        "name": "Palavras Terríveis",
        "detail": "Se você falar com alguém a sós por 1 minuto, planta uma paranoia na mente da pessoa. Ela faz um teste de Sabedoria; se falhar, fica Amedrontada por você (ou por outra criatura que você escolher) por 1 hora."
      },
      {
        "level": 6,
        "name": "Capturar Sombra (*****Mantle of Whispers*****)",
        "detail": "Quando uma criatura morre a até 9 metros de você, você pode capturar a sombra dela. Você pode usar essa sombra para se disfarçar perfeitamente como a pessoa morta, ganhando acesso a memórias superficiais dela para não ser descoberto. Dura até você descansar ou usar."
      },
      {
        "level": 14,
        "name": "Lore Sombrio (*****Shadow Lore*****)",
        "detail": "Com uma ação, você sussurra uma frase que apenas uma criatura a até 9 metros ouve. Ela deve fazer um teste de Carisma. Se falhar, fica Enfeitiçada por você por 8 horas, acreditando que você sabe o pior segredo da vida dela e obedecendo a todos os seus comandos com medo de ser exposta."
      }
    ],
    "Colégio da Criação": [
      {
        "level": 3,
        "name": "Nota de Potencial",
        "detail": "Quando você dá uma Inspiração Bárdica a alguém, a nota flutua como um pequeno objeto ao redor do aliado. Dependendo de como ele usa o dado, ganha um bônus:\n- Teste de Habilidade: O aliado rola o dado de inspiração com vantagem.\n- Jogada de Ataque: O alvo do ataque e inimigos a até 1,5m sofrem dano sônico igual ao número rolado.\n- Teste de Resistência: O aliado ganha pontos de vida temporários iguais ao número rolado + seu Modificador de Carisma."
      },
      {
        "level": 3,
        "name": "Performance da Criação",
        "detail": "Com uma ação, você pode criar magicamente um item não-mágico em um espaço livre (como um carrinho, uma espada ou uma corda). O valor do item não pode exceder 20 vezes o seu nível de bardo, e ele desaparece após algumas horas."
      },
      {
        "level": 6,
        "name": "Performance de Animação",
        "detail": "Com uma ação, você dá vida a um objeto não-mágico de tamanho Grande ou menor. O objeto vira um aliado combatente (*Item Animado*) dançante que obedece seus comandos por 1 hora e tem uma aura que aumenta a velocidade de aliados próximos."
      },
      {
        "level": 14,
        "name": "Alquimia Divina (*****Creative Crescendo*****)",
        "detail": "Quando você usa sua *Performance da Criação*, você pode criar múltiplos itens de uma vez (número igual ao seu modificador de Carisma) e não há mais limite de valor em moedas de ouro para o item criado."
      }
    ],
    "Colégio da Eloquência": [
      {
        "level": 3,
        "name": "Língua de Prata (*****Silver Tongue*****)",
        "detail": "Sempre que você rolar um teste de Carisma (Persuasão ou Enganação), qualquer resultado no d20 que for 9 ou menor conta como um 10."
      },
      {
        "level": 3,
        "name": "Palavras Inquietantes (*****Unsettling Words*****)",
        "detail": "Com uma ação bônus, gaste uma Inspiração Bárdica contra uma criatura a até 18 metros. Ela deve subtrair o valor rolado no dado do próximo teste de resistência que ela fizer antes do início do seu próximo turno (combo perfeito para usar antes de uma magia forte)."
      },
      {
        "level": 6,
        "name": "Inspiração Infalível (*****Unfailing Inspiration*****)",
        "detail": "Quando um aliado adiciona seu dado de Inspiração Bárdica a uma jogada e o teste ainda assim falha, o aliado não perde o dado; ele o mantém para usar outra hora."
      },
      {
        "level": 6,
        "name": "Fala Universal",
        "detail": "Com uma ação, você se faz ser entendido por qualquer criatura por 1 hora, mesmo que ela não fale idioma nenhum, desde que ela seja capaz de compreender pelo menos um idioma falado."
      },
      {
        "level": 14,
        "name": "Inspiração Infecciosa",
        "detail": "Quando um aliado usa sua Inspiração Bárdica e passa no teste com sucesso, você pode usar sua reação para dar um dado de Inspiração Bárdica para *outro* aliado a até 18 metros sem gastar nenhum uso da sua reserva (pode fazer isso vezes igual ao mod. Carisma por descanso longo)."
      }
    ],
    "Colégio dos Espíritos": [
      {
        "level": 3,
        "name": "Orientação Espiritual",
        "detail": "Você aprende o truque *Orientação* (*Guidance*) com alcance aumentado para 18 metros."
      },
      {
        "level": 3,
        "name": "Foco Espiritual",
        "detail": "Você pode usar objetos como velas, tabuleiros ou cartas como foco de conjuração. No nível 5, quando conjura uma magia de bardo que causa dano ou cura através desse foco, rola 1d6 adicional para o efeito."
      },
      {
        "level": 3,
        "name": "Contos do Além (*****Tales from Beyond*****)",
        "detail": "Com uma ação bônus, você gasta uma Inspiração Bárdica para rolar em uma tabela de Espíritos (1d12 baseado no seu dado de inspiração disponível). Você guarda a história de um espírito (como o Espírito do Duelista, do Fantasma ou do Dragão) e pode usá-la como ação para causar danos específicos, teletransportar aliados ou dar buffs."
      },
      {
        "level": 6,
        "name": "Apelo Espiritual (*****Spirit Session*****)",
        "detail": "Você conduz um ritual de 1 hora com seus aliados para contatar os mortos. Você pode aprender temporariamente uma magia de Necromancia ou Divinação de qualquer classe (de nível compatível) que dura até o seu próximo descanso longo."
      },
      {
        "level": 14,
        "name": "Conexão Mística (*****Mystical Connection*****)",
        "detail": "Sempre que rolar na tabela de *Contos do Além*, você rola dois dados e escolhe qual efeito quer manifestar. Se tirar números repetidos, você pode escolher qualquer conto da tabela livremente."
      }
    ]
  },
  "clerigo": {
    "Domínio do Conhecimento": [
      {
        "level": 1,
        "name": "Bênção do Conhecimento",
        "detail": "Aprende dois idiomas extras. Ganha proficiência e Especialização (dobra o bônus de proficiência) em duas perícias de intelecto (Arcanismo, História, Natureza ou Religião)."
      },
      {
        "level": 2,
        "name": "Canalizar Divindade (Conhecimento das Eras)",
        "detail": "Com uma ação, você ganha magicamente proficiência em qualquer perícia ou ferramenta que escolher por 10 minutos."
      },
      {
        "level": 6,
        "name": "Canalizar Divindade (Ler Pensamentos)",
        "detail": "Lê os pensamentos superficiais de uma criatura. Pode conjurar a magia *Sugestão* nela sem gastar espaços de magia, e o alvo falha automaticamente."
      },
      {
        "level": 8,
        "name": "Conjuração Potente",
        "detail": "Adiciona seu modificador de Sabedoria ao dano de seus truques de clérigo."
      },
      {
        "level": 17,
        "name": "Visões do Passado",
        "detail": "Você medita para ler os segredos e eventos passados associados a um objeto que esteja segurando ou a uma área de até 15 metros ao seu redor."
      }
    ],
    "Domínio da Vida": [
      {
        "level": 1,
        "name": "Proficiências",
        "detail": "Armaduras pesadas."
      },
      {
        "level": 1,
        "name": "Discípulo da Vida",
        "detail": "Sempre que usar uma magia de nível 1 ou maior para curar alguém, o alvo recupera vida adicional igual a 2 + o nível da magia."
      },
      {
        "level": 2,
        "name": "Canalizar Divindade (Preservar a Vida)",
        "detail": "Cura aliados a até 9 metros distribuindo uma quantidade de pontos de vida igual a 5 vezes seu nível de clérigo (só cura até metade da vida total do alvo)."
      },
      {
        "level": 6,
        "name": "Cura Abençoada",
        "detail": "Quando você conjura uma magia de cura em outra criatura, você também se cura em uma quantidade igual a 2 + o nível da magia."
      },
      {
        "level": 8,
        "name": "Golpe Divino",
        "detail": "Seus ataques com armas causam +1d8 de dano radiante."
      },
      {
        "level": 17,
        "name": "Cura Suprema",
        "detail": "Quando você rola dados para curar alguém com uma magia, você não rola os dados; aplica diretamente o valor máximo em cada dado."
      }
    ],
    "Domínio da Luz": [
      {
        "level": 1,
        "name": "Resplendor Protetor",
        "detail": "Quando atacado por alguém a até 9 metros, você usa sua reação para emitir luz e impor desvantagem no ataque do inimigo (vezes igual ao mod. Sab)."
      },
      {
        "level": 2,
        "name": "Canalizar Divindade (Radiação do Sol)",
        "detail": "Dissipa qualquer escuridão mágica a até 9 metros e causa 2d10 + nível de clérigo de dano radiante em todos os inimigos na área (teste de Constituição reduz à metade)."
      },
      {
        "level": 6,
        "name": "Clarão Melhorado",
        "detail": "Você pode usar o seu *Resplendor Protetor (do nível 1)* para proteger um aliado que esteja sendo atacado a até 9 metros de você."
      },
      {
        "level": 8,
        "name": "Conjuração Potente",
        "detail": "Adiciona seu modificador de Sabedoria ao dano de seus truques de clérigo."
      },
      {
        "level": 17,
        "name": "Corona de Luz",
        "detail": "Com uma ação, você emite uma aura de luz solar de 18 metros por 1 minuto. Inimigos na aura têm desvantagem em testes de resistência contra magias que causem dano de fogo ou radiante."
      }
    ],
    "Domínio da Natureza": [
      {
        "level": 1,
        "name": "Proficiências",
        "detail": "Armaduras pesadas e uma perícia (Adestrar Animais, Natureza ou Sobrevivência)."
      },
      {
        "level": 1,
        "name": "Acólito da Natureza",
        "detail": "Você aprende um truque (*cantrip*) de Druida à sua escolha."
      },
      {
        "level": 2,
        "name": "Canalizar Divindade (Enfeitiçar Animais e Plantas)",
        "detail": "Força bestas e plantas a até 9 metros a passarem num teste de Sabedoria. Se falharem, ficam Enfeitiçadas por 1 minuto e amigáveis a você."
      },
      {
        "level": 6,
        "name": "Amortecer Elementos",
        "detail": "Quando você ou um aliado visível a até 9 metros sofre dano de Ácido, Fogo, Gelo, Eletricidade ou Trovão, você usa sua reação para dar resistência contra aquele ataque."
      },
      {
        "level": 8,
        "name": "Golpe Divino",
        "detail": "Seus ataques com armas causam +1d8 de dano à sua escolha (Fogo, Gelo ou Eletricidade, escolhido no momento do acerto)."
      },
      {
        "level": 17,
        "name": "Mestre da Natureza",
        "detail": "Você pode usar uma ação bônus para comandar as criaturas enfeitiçadas pelo seu *Canalizar Divindade do nível 2*."
      }
    ],
    "Domínio da Tempestade": [
      {
        "level": 1,
        "name": "Proficiências",
        "detail": "Armaduras pesadas e armas marciais."
      },
      {
        "level": 1,
        "name": "Ira da Tempestade",
        "detail": "Quando sofre ataque de quem está a até 1,5m, usa sua reação para dar 2d8 de dano elétrico ou de trovão (metade se passarem num teste de Reflexos)."
      },
      {
        "level": 2,
        "name": "Canalizar Divindade (Ira Destrutiva)",
        "detail": "Quando rolar dano elétrico ou de trovão, você não rola os dados; você aplica diretamente o dano máximo possível."
      },
      {
        "level": 6,
        "name": "Empuxo de Relâmpago",
        "detail": "Quando você causa dano elétrico a uma criatura Média ou menor, você também a empurra 3 metros para trás."
      },
      {
        "level": 8,
        "name": "Golpe Divino",
        "detail": "Seus ataques com armas causam +1d8 de dano elétrico."
      },
      {
        "level": 17,
        "name": "Nascido na Tempestade",
        "detail": "Ganha deslocamento de voo igual ao seu deslocamento terrestre sempre que não estiver subterrâneo ou em ambientes fechados."
      }
    ],
    "Domínio da Trapaça": [],
    "Domínio da Guerra": [
      {
        "level": 1,
        "name": "Proficiências",
        "detail": "Armaduras pesadas e armas marciais."
      },
      {
        "level": 1,
        "name": "Sacerdote da Guerra",
        "detail": "Quando ataca com uma arma, pode fazer um ataque extra com ação bônus (vezes igual ao mod. Sab)."
      },
      {
        "level": 2,
        "name": "Canalizar Divindade (Ataque Guiado)",
        "detail": "Dá +10 de bônus em uma jogada de ataque sua (pode usar após ver o dado)."
      },
      {
        "level": 6,
        "name": "Canalizar Divindade (Bênção do Deus da Guerra)",
        "detail": "Você usa sua reação para dar o bônus de +10 no ataque de um aliado próximo."
      },
      {
        "level": 8,
        "name": "Golpe Divino",
        "detail": "Seus ataques com armas causam +1d8 de dano do mesmo tipo da arma (sobe para 2d8 no nvl 14)."
      },
      {
        "level": 17,
        "name": "Resiliência Avatar",
        "detail": "Ganha resistência a danos físicos não-mágicos (concussão, perfuração e cortante)."
      }
    ],
    "Domínio da Forja": [
      {
        "level": 1,
        "name": "Proficiências",
        "detail": "Armaduras pesadas e ferramentas de ferreiro."
      },
      {
        "level": 1,
        "name": "Bênção da Forja",
        "detail": "Ao fim de um descanso, transforma uma arma ou armadura comum em um item mágico +1 até o próximo descanso."
      },
      {
        "level": 2,
        "name": "Canalizar Divindade (Bênção do Artesão)",
        "detail": "Conduz um ritual de 1 hora para criar um item não-mágico feito de metal (como armas, armaduras ou chaves) sacrificando moedas ou metais de valor equivalente."
      },
      {
        "level": 6,
        "name": "Alma da Forja",
        "detail": "Ganha resistência a dano de fogo. Enquanto estiver de armadura pesada, ganha +1 na CA."
      },
      {
        "level": 8,
        "name": "Golpe Divino",
        "detail": "Seus ataques com armas causam +1d8 de dano de fogo."
      },
      {
        "level": 17,
        "name": "Santo da Forja e do Fogo",
        "detail": "Ganha imunidade a dano de fogo. Se estiver usando armadura pesada, ganha resistência a danos físicos não-mágicos."
      }
    ],
    "Domínio da Ordem": [
      {
        "level": 1,
        "name": "Proficiências",
        "detail": "Armaduras pesadas e a perícia Intimidação ou Persuasão."
      },
      {
        "level": 1,
        "name": "Voz da Autoridade",
        "detail": "Quando você conjura uma magia de nível 1 ou maior que alveje um aliado (como uma cura), esse aliado pode usar a reação dele para fazer um ataque de arma imediatamente."
      },
      {
        "level": 2,
        "name": "Canalizar Divindade (Demanda do Ditador)",
        "detail": "Força inimigos a até 9 metros a passarem num teste de Sabedoria. Quem falhar sofre 1d6 de dano psíquico e fica caído e largado (larga o que estiver segurando)."
      },
      {
        "level": 6,
        "name": "Incorporar a Lei",
        "detail": "Quando conjura uma magia de Encantamento de nível 1 ou maior, você pode conjurá-la como uma ação bônus em vez de ação (vezes igual ao mod. Sab)."
      },
      {
        "level": 8,
        "name": "Golpe Divino",
        "detail": "Seus ataques com armas causam +1d8 de dano psíquico."
      },
      {
        "level": 17,
        "name": "Ira da Ordem",
        "detail": "Uma vez por turno, quando você amaldiçoa um inimigo com seu Golpe Divino, seus aliados causam +2d6 de dano extra contra aquele alvo até o seu próximo turno."
      }
    ],
    "Domínio da Paz": [
      {
        "level": 1,
        "name": "Vínculo Implementado",
        "detail": "Cria um elo telepático entre criaturas (número igual à sua Proficiência). Uma vez por turno, os vinculados podem adicionar 1d4 a uma jogada de ataque, teste de habilidade ou teste de resistência se estiverem a até 9m de distância um do outro."
      },
      {
        "level": 2,
        "name": "Canalizar Divindade (Bálsamo da Paz)",
        "detail": "Você pode andar pelo campo sem provocar ataques de oportunidade. Cada aliado que você passar a até 1,5m é curado em 2d6 + mod. Sab."
      },
      {
        "level": 6,
        "name": "Vínculo Protetor",
        "detail": "Quando uma criatura afetada pelo seu vínculo do nível 1 estiver prestes a sofrer dano, outro aliado vinculado a até 9m pode usar a reação para se teletransportar e absorver o dano no lugar dela."
      },
      {
        "level": 8,
        "name": "Conjuração Potente",
        "detail": "Adiciona seu modificador de Sabedoria ao dano de seus truques de clérigo."
      },
      {
        "level": 17,
        "name": "Conexão Expansiva",
        "detail": "O alcance do seu vínculo aumenta para 18 metros. Quando um aliado usa a reação para absorver o dano pelo outro, ele ganha resistência contra aquele dano."
      }
    ],
    "Domínio da Sepultura": [
      {
        "level": 1,
        "name": "Círculo de Mortalidade",
        "detail": "Quando você cura alguém que está com 0 pontos de vida, você não rola os dados de cura; aplica o valor máximo. Você também aprende o truque *Poupar os Moribundos* com ação bônus e alcance de 9 metros."
      },
      {
        "level": 1,
        "name": "Olhos da Sepultura",
        "detail": "Com uma ação, você detecta a localização exata de qualquer criatura do tipo Morto-Vivo a até 18 metros que não esteja atrás de cobertura total (vezes igual ao mod. Sab)."
      },
      {
        "level": 2,
        "name": "Canalizar Divindade (Caminho para a Sepultura)",
        "detail": "Amaldiçoa um inimigo. O próximo ataque que acertar esse inimigo causará o dobro de dano (vulnerabilidade a todas as fontes daquele ataque)."
      },
      {
        "level": 6,
        "name": "Sentinela nos Portões da Morte",
        "detail": "Quando você ou um aliado visível a até 9 metros sofre um Acerto Crítico, você usa sua reação para cancelar o crítico, transformando-o em um ataque normal (vezes igual ao mod. Sab)."
      },
      {
        "level": 8,
        "name": "Conjuração Potente",
        "detail": "Adiciona seu modificador de Sabedoria ao dano de seus truques de clérigo."
      },
      {
        "level": 17,
        "name": "Guardião das Almas",
        "detail": "Quando um inimigo morre a até 9 metros de você, você capta a energia vital dele e cura a si mesmo ou a um aliado em uma quantidade de pontos de vida igual ao número de Dados de Vida do inimigo morto."
      }
    ],
    "Domínio da Morte": [
      {
        "level": 1,
        "name": "Proficiências",
        "detail": "Armas marciais."
      },
      {
        "level": 1,
        "name": "Foice Ceifeira",
        "detail": "Você aprende um truque de Necromancia de qualquer classe. Quando conjura um truque de Necromancia focado em um alvo, ele pode afetar duas criaturas se elas estiverem adjacentes."
      },
      {
        "level": 2,
        "name": "Canalizar Divindade (Toque da Morte)",
        "detail": "Quando você acerta um inimigo com ataque corpo a corpo, causa 5 + (2 vezes seu nível de clérigo) de dano necrótico extra."
      },
      {
        "level": 6,
        "name": "Destruição Inescapável",
        "detail": "Seus danos do tipo Necrótico (de magias ou habilidades) ignoram a resistência a dano necrótico das criaturas."
      },
      {
        "level": 8,
        "name": "Golpe Divino",
        "detail": "Seus ataques com armas causam +1d8 de dano necrótico."
      },
      {
        "level": 17,
        "name": "Ceifador Melhorado",
        "detail": "Quando você conjura uma magia de Necromancia de nível 1 a 5 direcionada a apenas um alvo, ela pode alvejar duas criaturas que estejam a até 1,5m uma da outra."
      }
    ],
    "Domínio do Crepúsculo": [
      {
        "level": 1,
        "name": "Proficiências",
        "detail": "Armaduras pesadas e armas marciais."
      },
      {
        "level": 1,
        "name": "Olhos da Noite",
        "detail": "Ganha Visão no Escuro de 90 metros. Você pode compartilhar essa visão com aliados voluntários por 1 hora."
      },
      {
        "level": 1,
        "name": "Bênção da Vigilância",
        "detail": "Concede vantagem no próximo teste de Iniciativa para você ou para um aliado que você tocar."
      },
      {
        "level": 2,
        "name": "Canalizar Divindade (Santuário do Crepúsculo)",
        "detail": "Cria uma aura de penumbra de 9 metros ao seu redor por 1 minuto. No final do turno de qualquer aliado na área, ele ganha 1d6 + nível de clérigo de pontos de vida temporários ou encerra o efeito de *Amedrontado* ou *Enfeitiçado*."
      },
      {
        "level": 6,
        "name": "Passos do Crepúsculo",
        "detail": "Com uma ação bônus, você ganha deslocamento de voo igual ao seu deslocamento terrestre por 1 minuto se estiver em penumbra ou escuridão (vezes igual à Proficiência)."
      },
      {
        "level": 8,
        "name": "Golpe Divino",
        "detail": "Seus ataques com armas causam +1d8 de dano radiante."
      },
      {
        "level": 17,
        "name": "Mortalha Noturna",
        "detail": "A penumbra criada pelo seu *Santuário do Crepúsculo (Nvl 2)* passa a conceder meia-cobertura (+2 na CA) para todos os seus aliados dentro dela."
      }
    ],
    "Domínio Arcano": [
      {
        "level": 1,
        "name": "Iniciado Arcano",
        "detail": "Ganha proficiência na perícia Arcanismo e aprende dois truques de Mago à sua escolha (contam como magias de clérigo)."
      },
      {
        "level": 2,
        "name": "Canalizar Divindade (Abjuração Arcana)",
        "detail": "Funciona como o Afastar Mortos-Vivos, mas afeta criaturas do tipo Aberração, Celestial, Elemental ou Feérico. No nível 5+, se a criatura falhar e tiver um ND baixo, ela é banida."
      },
      {
        "level": 6,
        "name": "Rompedor de Magia",
        "detail": "Quando você cura um aliado com uma magia de nível 1 ou maior, você também encerra uma magia de nível igual ou menor que esteja afetando negativamente aquele aliado."
      },
      {
        "level": 8,
        "name": "Conjuração Potente",
        "detail": "Adiciona seu modificador de Sabedoria ao dano de seus truques de clérigo."
      },
      {
        "level": 17,
        "name": "Mestre Arcano",
        "detail": "Você escolhe quatro magias de Mago (uma de nível 6, uma de 7, uma de 8 e uma de 9). Elas são adicionadas à sua lista de magias de clérigo e ficam sempre preparadas."
      }
    ]
  },
  "druida": {
    "Círculo da Terra": [
      {
        "level": 2,
        "name": "Truque Adicional",
        "detail": "Você aprende um truque (*cantrip*) de druida extra."
      },
      {
        "level": 2,
        "name": "Recuperação Natural",
        "detail": "Durante um descanso curto, você pode recuperar espaços de magia gastos cujo nível somado seja igual ou menor que metade do seu nível de druida."
      },
      {
        "level": 2,
        "name": "Magias do Círculo",
        "detail": "Você escolhe um bioma (Ártico, Costa, Deserto, Floresta, Montanha, Pântano, Planície ou Subterrâneo). Você ganha magias preparadas fixas desse bioma nos níveis 3, 5, 7 e 9."
      },
      {
        "level": 6,
        "name": "Passada da Terra",
        "detail": "Terreno difícil não-mágico não reduz seu deslocamento. Você passa por plantas não-mágicas sem sofrer dano e tem vantagem em testes contra plantas criadas magicamente."
      },
      {
        "level": 10,
        "name": "Proteção da Natureza",
        "detail": "Você não pode ser envenenado ou assustado por elementais ou feéricos, e se torna imune a venenos e doenças."
      },
      {
        "level": 14,
        "name": "Santuário da Natureza",
        "detail": "Criaturas da natureza hesitam em te atacar. Bestas e plantas que tentarem te atacar devem passar num teste de Sabedoria; se falharem, mudam o alvo ou erram o ataque."
      }
    ],
    "Círculo da Lua": [
      {
        "level": 2,
        "name": "Forma Selvagem de Combate",
        "detail": "Você pode usar a Forma Selvagem com uma ação bônus (em vez de ação). Enquanto transformado, pode gastar um espaço de magia com uma ação bônus para curar 1d8 de vida por nível da magia gasta."
      },
      {
        "level": 2,
        "name": "Formas do Círculo",
        "detail": "Você ignora a tabela normal de ND de feras. Pode se transformar em feras de ND 1 logo de início. No nível 6+, o limite de ND vira seu nível de druida dividido por 3 (ex: ND 2 no nível 6, ND 3 no nível 9, etc.)."
      },
      {
        "level": 6,
        "name": "Golpes Primitivos",
        "detail": "Seus ataques na forma de besta contam como mágicos para superar resistências e imunidades."
      },
      {
        "level": 10,
        "name": "Forma Selvagem Elemental",
        "detail": "Você pode gastar dois usos de Forma Selvagem simultaneamente para se transformar em um Elemental da Água, Ar, Fogo ou Terra."
      },
      {
        "level": 14,
        "name": "Alterar Forma",
        "detail": "Você ganha a habilidade de conjurar a magia *Alterar-se* (*Alter Self*) à vontade, sem gastar espaços de magia."
      }
    ],
    "Círculo dos Sonhos": [
      {
        "level": 2,
        "name": "Bálsamo da Corte de Verão",
        "detail": "Você ganha uma reserva de energia em dados d6 (igual ao seu nível de druida). Com uma ação bônus, pode gastar até metade desses dados para curar um aliado a até 36 metros e dar a ele pontos de vida temporários."
      },
      {
        "level": 6,
        "name": "Lar de Penumbra e Sombra",
        "detail": "Ao iniciar um descanso curto ou longo, você cria uma aura mágica de 9 metros. Ela esconde o grupo (+10 em Furtividade) e anula qualquer luz gerada por fogueiras comuns para evitar emboscadas."
      },
      {
        "level": 10,
        "name": "Caminhos Ocultos",
        "detail": "Com uma ação bônus, você pode se teletransportar por até 18 metros para um espaço visível. Você também pode usar essa habilidade para teletransportar um aliado voluntário a até 9 metros de você. (Usos iguais ao mod. de Sabedoria)."
      },
      {
        "level": 14,
        "name": "Luz do Alvorecer Feérico",
        "detail": "Quando você termina um descanso curto, pode escolher ganhar o efeito da magia *Vidência* sem gastar componentes. Além disso, quando conjura uma magia de teletransporte, pode emitir um flash que choca ou derruba inimigos."
      }
    ],
    "Círculo do Pastor": [
      {
        "level": 2,
        "name": "Fala da Floresta",
        "detail": "Você aprende o idioma Silvestre e consegue conversar e entender todas as bestas e animais comuns."
      },
      {
        "level": 2,
        "name": "Totem Espiritual",
        "detail": "Com uma ação bônus, você invoca uma aura de espírito animal de 9 metros por 1 minuto:\n- Urso: Dá vida temporária para os aliados na área e vantagem em testes de Força.\n- Falcão: Dá vantagem em testes de Percepção e você pode usar sua reação para dar vantagem no ataque de um aliado.\n- Unicórnio: Dá vantagem para detectar criaturas e, se você conjurar uma magia de cura, todos os aliados na aura recebem cura extra."
      },
      {
        "level": 6,
        "name": "Invocador Poderoso",
        "detail": "Criaturas que você invoca ganham +2 pontos de vida por Dado de Vida que possuem e seus ataques físicos contam como mágicos."
      },
      {
        "level": 10,
        "name": "Espírito Guardião",
        "detail": "Quando uma criatura invocada por você termina o turno dentro do seu *Totem Espiritual*, ela recupera pontos de vida."
      },
      {
        "level": 14,
        "name": "Fiel em Apuros",
        "detail": "Se você for reduzido a 0 pontos de vida ou ficar incapacitado contra sua vontade, a natureza invoca automaticamente 4 feras guardiãs (como na magia *Conjurar Animais*) ao seu redor para te proteger por 1 hora."
      }
    ],
    "Círculo dos Esporos": [
      {
        "level": 2,
        "name": "Magias do Círculo",
        "detail": "Sempre tem preparadas magias como *Toque Chocante*, *Animar Mortos*, *Besta de Carga* e *Névoa Mortal*."
      },
      {
        "level": 2,
        "name": "Halo de Esporos",
        "detail": "Você é rodeado por esporos invisíveis. Quando uma criatura se move para um espaço a até 3 metros de você, você usa sua reação para causar dano necrótico nela (rola d4, sobe até d10)."
      },
      {
        "level": 2,
        "name": "Entidade Simbiótica",
        "detail": "Em vez de virar um animal, você gasta sua Forma Selvagem para despertar seus esporos: ganha 4 de vida temporária por nível de druida, dobra o dano do seu *Halo de Esporos* e seus ataques corpo a corpo dão +1d6 de dano necrótico."
      },
      {
        "level": 6,
        "name": "Infestação Fúngica",
        "detail": "Se uma criatura viva Pequena ou Média morrer a até 9 metros de você, você usa sua reação para reanimar o cadáver como um Zumbi com 1 ponto de vida. Ele obedece seus comandos por 1 hora."
      },
      {
        "level": 10,
        "name": "Esporos Espalhados",
        "detail": "Enquanto sua *Entidade Simbiótica* estiver ativa, você pode lançar uma nuvem de esporos a até 9 metros de distância. Quem estiver nela sofre o dano do seu *Halo de Esporos* todo turno."
      },
      {
        "level": 14,
        "name": "Corpo Fúngico",
        "detail": "Os esporos alteram seu organismo. Você se torna imune a acertos críticos, à condição de cego, surdo, amedrontado, envenenado e a qualquer efeito de veneno."
      }
    ],
    "Círculo das Estrelas": [
      {
        "level": 2,
        "name": "Mapa Estelar",
        "detail": "Você cria um mapa astral. Ele serve como foco conjurador, te dá o truque *Orientação* (*Guidance*) e permite conjurar a magia *Raio de Guia* (*Guiding Bolt*) de graça algumas vezes por dia (igual à Proficiência)."
      },
      {
        "level": 2,
        "name": "Forma Estelar",
        "detail": "Em vez de virar animal, você gasta sua Forma Selvagem para brilhar como uma constelação, escolhendo uma forma:\n- Arqueiro: Permite dar um tiro de luz com a ação bônus (1d8 + mod. Sab de dano radiante).\n- Caldeirão: Sempre que curar alguém, cura +1d8 + mod. Sab adicionais na mesma criatura ou em outra próxima.\n- Dragão: Garante que qualquer teste de Inteligência, Sabedoria ou teste para manter Concentração de magia que der 9 ou menos no d20 vire um 10 automático."
      },
      {
        "level": 6,
        "name": "Augúrio Cósmico",
        "detail": "Ao fim de um descanso, rola um dado. Se der ímpar (Sorrow), você usa sua reação para subtrair 1d6 de uma jogada de um inimigo. Se der par (Weal), você usa sua reação para somar 1d6 na jogada de um aliado."
      },
      {
        "level": 10,
        "name": "Cintilação Estelar",
        "detail": "O dano do Arqueiro e a cura do Caldeirão sobem para 2d8. O Dragão te concede deslocamento de voo de 6 metros. Você também pode trocar de constelação no início de cada um dos seus turnos."
      },
      {
        "level": 14,
        "name": "Corpo Celestial",
        "detail": "Enquanto estiver em sua *Forma Estelar*, você ganha resistência a danos físicos (concussão, perfuração e cortante)."
      }
    ],
    "Círculo do Fogo Selvagem": [
      {
        "level": 2,
        "name": "Magias do Círculo",
        "detail": "Sempre tem preparadas magias de fogo e cura, como *Mãos Flamejantes*, *Raio Ardente*, *Cura Celestial* e *Muralha de Fogo*."
      },
      {
        "level": 2,
        "name": "Invocar Espírito do Fogo Selvagem",
        "detail": "Você gasta um uso de Forma Selvagem para manifestar um espírito elemental de fogo Pequeno. Quando ele aparece, explode causando dano de fogo ao redor. Ele voa, ataca com sua ação bônus e obedece seus comandos."
      },
      {
        "level": 6,
        "name": "Vínculo Ardente",
        "detail": "Enquanto seu espírito de fogo estiver ativo, qualquer magia sua que cause dano de fogo ou recupere vida ganha +1d8 de bônus no efeito. Suas magias também podem ser conjuradas saindo do corpo do espírito."
      },
      {
        "level": 10,
        "name": "Cascata Calcinante",
        "detail": "Quando uma criatura morre perto de você ou do seu espírito, uma chama mágica surge no cadáver. Se um aliado passar ali, ela explode em cura; se um inimigo passar, ela explode em dano de fogo (usos iguais à Proficiência)."
      },
      {
        "level": 14,
        "name": "Retorno Regenerativo",
        "detail": "Se você cair a 0 pontos de vida enquanto seu espírito estiver ativo, o espírito se sacrifica e desaparece imediatamente. Você recupera metade dos seus pontos de vida máximos e se levanta instantaneamente."
      }
    ]
  },
  "feiticeiro": {
    "Linhagem Dracônica": [
      {
        "level": 1,
        "name": "Ancestral Dracônico",
        "detail": "Você escolhe um tipo de dragão (Cromatismo ou Metálico). Isso define o seu tipo de dano associado (Fogo, Gelo, Ácido, Eletricidade ou Veneno) e permite que você fale o idioma Dracônico."
      },
      {
        "level": 1,
        "name": "Resiliência Dracônica",
        "detail": "Seu máximo de pontos de vida aumenta em 1 para cada nível de feiticeiro que você possuir. Além disso, quando não estiver usando armadura, sua CA base se torna 13 + modificador de Destreza."
      },
      {
        "level": 6,
        "name": "Afinidade Elemental",
        "detail": "Quando você conjura uma magia que causa o tipo de dano do seu Ancestral Dracônico, você adiciona seu modificador de Carisma ao dano. Você também pode gastar 1 Ponto de Feitiçaria para ganhar resistência a esse tipo de dano por 1 hora."
      },
      {
        "level": 14,
        "name": "Asas Dracônicas",
        "detail": "Com uma ação bônus, você manifesta um par de asas dracônicas nas suas costas, ganhando deslocamento de voo igual ao seu deslocamento terrestre. Elas duram até você dispensá-las (não funcionam se sua roupa ou armadura não forem feitas para acomodá-las)."
      },
      {
        "level": 18,
        "name": "Presença Dracônica",
        "detail": "Você gasta 5 Pontos de Feitiçaria para emanar uma aura de terror ou deslumbramento de 18 metros por 1 minuto. Inimigos na área que falharem num teste de Sabedoria ficam Amedrontados ou Enfeitiçados por você."
      }
    ],
    "Magia Selvagem": [
      {
        "level": 1,
        "name": "Surto de Magia Selvagem",
        "detail": "Sempre que você conjurar uma magia de nível 1 ou maior, o Mestre pode pedir para você rolar um d20. Se tirar 1, você deve rolar na tabela de Surtos de Magia Selvagem (1d100) para gerar um efeito aleatório (como explodir uma *Bola de Fogo* em si mesmo, ficar invisível ou virar uma planta)."
      },
      {
        "level": 1,
        "name": "Marés de Caos (*****Tides of Chaos*****)",
        "detail": "Você pode ganhar vantagem em uma jogada de ataque, teste de habilidade ou teste de resistência. Você recupera essa habilidade após um descanso longo ou após o Mestre forçar um Surto de Magia Selvagem automático no seu próximo feitiço."
      },
      {
        "level": 6,
        "name": "Dobrar a Sorte (*****Bend Luck*****)",
        "detail": "Quando outra criatura que você possa ver fizer uma jogada de ataque, teste de habilidade ou de resistência, você pode gastar 2 Pontos de Feitiçaria e usar sua reação para rolar 1d4 e somar ou subtrair do resultado dela."
      },
      {
        "level": 14,
        "name": "Caos Controlado (*****Controlled Chaos*****)",
        "detail": "Sempre que você rolar na tabela de Surtos de Magia Selvagem, você rola duas vezes e escolhe qual dos dois efeitos quer manifestar."
      },
      {
        "level": 18,
        "name": "Bombardeio Selvagem (*****Spell Bombardment*****)",
        "detail": "Uma vez por turno, quando você rola o dano de uma magia e um dos dados cai no valor máximo, você pode pegar aquele dado e rolá-lo novamente, somando o novo resultado ao dano total."
      }
    ],
    "Magia das Sombras": [
      {
        "level": 1,
        "name": "Olhos da Escuridão",
        "detail": "Você ganha Visão no Escuro de 36 metros. No nível 3, você aprende a magia *Escuridão* (*Darkness*). Se você a conjurar gastando 2 Pontos de Feitiçaria, você consegue enxergar perfeitamente através dela."
      },
      {
        "level": 1,
        "name": "Força do Além (*****Strength of the Grave*****)",
        "detail": "Quando você sofre dano que reduziria seus pontos de vida a 0, você pode fazer um teste de resistência de Carisma (CD 5 + dano sofrido). Se passar, você cai para 1 ponto de vida em vez disso (não funciona se o dano for radiante ou acerto crítico; 1 vez por descanso longo)."
      },
      {
        "level": 6,
        "name": "Cão do Agouro (*****Hound of Ill Omen*****)",
        "detail": "Com uma ação bônus, você gasta 3 Pontos de Feitiçaria para invocar um lobo feito de sombras que persegue um alvo específico. Enquanto o lobo estiver a até 1,5m do alvo, o alvo tem desvantagem em testes de resistência contra as suas magias."
      },
      {
        "level": 14,
        "name": "Passo das Sombras",
        "detail": "Quando você estiver em penumbra ou escuridão, você pode usar uma ação bônus para se teletransportar por até 36 metros para outro espaço que também esteja em penumbra ou escuridão."
      },
      {
        "level": 18,
        "name": "Forma de Sombra",
        "detail": "Você gasta 6 Pontos de Feitiçaria para se transformar em uma forma sombria por 1 minuto. Você ganha resistência a todos os danos (exceto dano radiante e de força) e pode atravessar criaturas e objetos sólidos como se fossem terreno difícil."
      }
    ],
    "Feitiçaria da Tormenta": [
      {
        "level": 1,
        "name": "Fala da Tormenta",
        "detail": "Você aprende a ler, falar e escrever o idioma Primordial (e seus dialetos)."
      },
      {
        "level": 1,
        "name": "Magia Tempestuosa (*****Tempestuous Magic*****)",
        "detail": "Sempre que você conjurar uma magia de nível 1 ou maior, você pode usar uma ação bônus para permitir que o vento te eleve, voando por até 3 metros sem provocar ataques de oportunidade."
      },
      {
        "level": 6,
        "name": "Coração da Tempestade",
        "detail": "Ganha resistência a dano Elétrico e de Trovão. Sempre que você conjurar uma magia de nível 1 ou maior que cause esses danos, você cria uma lufada que causa dano elétrico ou de trovão automático igual a metade do seu nível de feiticeiro a inimigos escolhidos a até 3 metros."
      },
      {
        "level": 6,
        "name": "Guia do Clima",
        "detail": "Você pode alterar sutilmente o clima ao seu redor: se estiver chovendo, pode fazer a chuva parar em um raio de 6m; se houver vento, pode ditar a direção dele."
      },
      {
        "level": 14,
        "name": "Fúria da Tormenta",
        "detail": "Quando você sofre um ataque corpo a corpo, você pode usar sua reação para causar dano de trovão igual ao seu nível de feiticeiro ao atacante e forçá-lo a um teste de Força; se falhar, ele é empurrado 6 metros para trás."
      },
      {
        "level": 18,
        "name": "Alma da Tormenta",
        "detail": "Ganha imunidade a dano Elétrico e de Trovão. Você também ganha deslocamento de voo de 18 metros. Além disso, você pode reduzir o deslocamento de voo de aliados próximos ou remover a resistência a trovão/eletricidade de inimigos ao seu redor."
      }
    ],
    "Alma Divina": [
      {
        "level": 1,
        "name": "Afinidade Divina",
        "detail": "Você escolhe a tendência da sua fonte divina (Bem, Mal, Ordem, Caos ou Neutralidade). Você aprende uma magia de clérigo extra com base nisso (ex: *Cura de Ferimentos* para o Bem, *Infringir Ferimentos* para o Mal) e ela não conta no seu limite de magias conhecidas."
      },
      {
        "level": 1,
        "name": "Favorecido pelos Deuses (*****Favored by the Gods*****)",
        "detail": "Se você falhar em uma jogada de ataque ou teste de resistência, você pode rolar 2d4 e somar ao resultado, podendo transformar a falha em sucesso (1 vez por descanso curto ou longo)."
      },
      {
        "level": 6,
        "name": "Cura Fortalecida (*****Empowered Healing*****)",
        "detail": "Sempre que você ou um aliado próximo rolar dados para curar pontos de vida, você pode gastar 1 Ponto de Feitiçaria para escolher e rerrolar qualquer número desses dados de cura."
      },
      {
        "level": 14,
        "name": "Asas Angelicais",
        "detail": "Com uma ação bônus, você manifesta um par de asas (de anjo, morcego ou libélula, dependendo da sua tendência divina), ganhando deslocamento de voo igual ao seu deslocamento terrestre."
      },
      {
        "level": 18,
        "name": "Recuperação Inabalável (*****Unearthly Recovery*****)",
        "detail": "Com uma ação bônus, se você estiver com menos da metade dos seus pontos de vida máximos, você pode curar instantaneamente metade da sua vida total (1 vez por descanso longo)."
      }
    ],
    "Mente Aberrante": [
      {
        "level": 1,
        "name": "Magias Psiónicas",
        "detail": "Ganha uma lista de magias extras focadas em mente e teletransporte (como *Braços de Hadar*, *Dissonância Sussurrante*, *Detectar Pensamentos* e *Enviar Mensagem*). Você pode trocar essas magias por outras de Encantamento ou Divinação de Mago/Bruxo."
      },
      {
        "level": 1,
        "name": "Fala Telepática",
        "detail": "Com uma ação, você cria um elo telepático com uma criatura visível a até 9 metros. Vocês conseguem conversar mentalmente mesmo sem falar o mesmo idioma, desde que ela entenda pelo menos uma língua (o alcance vira quilômetros se vocês já estiverem vinculados)."
      },
      {
        "level": 6,
        "name": "Feitiçaria Psiónica",
        "detail": "Quando você conjura uma das suas magias psiónicas, você pode gastar Pontos de Feitiçaria iguais ao nível da magia para conjurá-la. Se fizer isso, a magia não exige nenhum componente verbal, somático ou material não-consumível (conjuração 100% invisível e impossível de sofrer *Contramagia*)."
      },
      {
        "level": 14,
        "name": "Defesa Psíquica",
        "detail": "Ganha resistência a dano psíquico e imunidade à condição de Enfeitiçado e Amedrontado."
      },
      {
        "level": 14,
        "name": "Revelação em Carne",
        "detail": "Você gasta 1 ou mais Pontos de Feitiçaria para transformar temporariamente seu corpo por 10 minutos (pode virar uma gosma para passar em frestas e ver o invisível, ganhar guelras e nadar rápido, ou flutuar no ar)."
      },
      {
        "level": 18,
        "name": "Implosão Espacial (*****Warping Implosion*****)",
        "detail": "Com uma ação, você se teletransporta por até 36 metros. No ponto onde você estava antes, abre-se uma fenda gravitacional que puxa todos os inimigos próximos para o centro, causando 3d10 de dano de força e deixando-os caídos."
      }
    ],
    "Alma Relógio": [
      {
        "level": 1,
        "name": "Magias do Relógio",
        "detail": "Ganha uma lista de magias focadas em ordem e proteção (como *Alarme*, *Proteção contra o Bem e Mal*, *Trancar*, *Dissipar Magia* e *Muralha de Força*). Você pode trocar essas magias por outras de Abjuração ou Transmutação de Mago/Bruxo."
      },
      {
        "level": 1,
        "name": "Restaurar o Equilíbrio (*****Restore Balance*****)",
        "detail": "Quando uma criatura visível a até 18 metros estiver prestes a rolar um dado com vantagem ou desvantagem, você usa sua reação para anular essa vantagem ou desvantagem, forçando uma rolagem normal (usos iguais à Proficiência)."
      },
      {
        "level": 6,
        "name": "Manifestação da Ordem (*****Bastion of Law*****)",
        "detail": "Com uma ação, você gasta de 1 a 5 Pontos de Feitiçaria para criar uma barreira protetora ao redor de si ou de um aliado. A barreira ganha dados d8 iguais aos pontos gastos; quando o alvo sofre dano, ele gasta esses dados para reduzir o dano sofrido."
      },
      {
        "level": 14,
        "name": "Transe Relojoeiro (*****Clockwork Cavalcade*****)",
        "detail": "Com uma ação bônus, você entra num estado de ordem perfeita por 1 minuto. Durante esse tempo, qualquer jogada de ataque, teste de habilidade ou de resistência que você fizer que der 9 ou menos no d20 vira um 10 automático."
      },
      {
        "level": 18,
        "name": "Alinhamento das Engrenagens",
        "detail": "Você invoca espíritos de engrenagens para consertar o campo ao seu redor: cura até 100 pontos de vida divididos entre os aliados, encerra instantaneamente todas as magias de nível 6 ou menor em inimigos escolhidos e repara qualquer objeto quebrado na área."
      }
    ],
    "Magia Lunar": [
      {
        "level": 1,
        "name": "Magias da Lua",
        "detail": "Você ganha acesso a uma tabela imensa de magias dividida pelas 3 fases lunares. Ao fim de um descanso longo, você escolhe qual fase está ativa (Cheia, Nova ou Minguante), o que te dá magias preparadas e reduz o custo de Pontos de Feitiçaria de escolas de magia específicas."
      },
      {
        "level": 1,
        "name": "Fogo Lunar",
        "detail": "Você aprende o truque *Chama Sagrada* (*Sacred Flame*). Quando o conjura, ele pode alvejar duas criaturas que estejam a até 1,5m uma da outra."
      },
      {
        "level": 6,
        "name": "Incorporação Lunar",
        "detail": "Você pode usar uma ação bônus e gastar 1 Ponto de Feitiçaria para mudar manualmente a sua fase lunar atual no meio do dia. Além disso, uma vez por dia, você pode usar uma Metamagia em uma magia da sua fase ativa de graça."
      },
      {
        "level": 14,
        "name": "Portos Lunares",
        "detail": "Você ganha uma habilidade especial ativada com ação bônus dependendo da sua fase atual: a Lua Cheia cega um inimigo e teletransporta um aliado; a Lua Nova te deixa invisível por 1 turno após se teletransportar; a Lua Minguante causa dano necrótico e reduz a velocidade de quem estiver perto."
      },
      {
        "level": 18,
        "name": "Fenômeno Celestial",
        "detail": "Uma vez por fase lunar (Cheia, Nova ou Minguante), você pode usar uma grande ação que drena energia cósmica: causa muito dano radiante/necrótico em área, impõe desvantagem em ataques inimigos ou cura aliados necessitados em grande escala."
      }
    ]
  },
  "guerreiro": {
    "Campeão": [
      {
        "level": 3,
        "name": "Crítico Aprimorado",
        "detail": "Suas jogadas de ataque com armas conseguem um Acerto Crítico com um resultado 19 ou 20 no d20."
      },
      {
        "level": 7,
        "name": "Atleta Notável",
        "detail": "Você adiciona metade do seu bônus de proficiência (arredondado para cima) em qualquer teste de Força, Destreza ou Constituição que você já não possua proficiência. Além disso, a distância do seu salto longo aumenta."
      },
      {
        "level": 10,
        "name": "Estilo de Luta Adicional",
        "detail": "Você pode escolher um segundo Estilo de Luta da lista da classe Guerreiro."
      },
      {
        "level": 15,
        "name": "Crítico Superior",
        "detail": "Suas jogadas de ataque com armas conseguem um Acerto Crítico com um resultado 18, 19 ou 20 no d20."
      },
      {
        "level": 18,
        "name": "Sobrevivente",
        "detail": "No início de cada um dos seus turnos em combate, se você estiver com menos da metade dos seus pontos de vida máximos, você recupera pontos de vida iguais a 5 + seu modificador de Constituição. Não funciona se estiver com 0 de vida."
      }
    ],
    "Mestre de Batalha": [
      {
        "level": 3,
        "name": "Superioridade em Combate",
        "detail": "Você ganha 4 Dados de Superioridade (d8). Você pode gastá-los para ativar Manobras (você escolhe 3 no nível 3). O dado é somado ao dano ou efeito. Você recupera todos os dados em um descanso curto ou longo."
      },
      {
        "level": 3,
        "name": "Estudante da Guerra",
        "detail": "Você ganha proficiência com um tipo de ferramenta de artesão à sua escolha."
      },
      {
        "level": 7,
        "name": "Conheça seu Inimigo",
        "detail": "Se você observar ou interagir com uma criatura por pelo menos 1 minuto fora de combate, o Mestre lhe diz se o alvo é igual, superior ou inferior a você em dois atributos físicos, CA, vida atual ou níveis de classe."
      },
      {
        "level": 10,
        "name": "Superioridade Aprimorada",
        "detail": "Seus Dados de Superioridade aumentam de d8 para d10. Você também aprende duas manobras adicionais."
      },
      {
        "level": 15,
        "name": "Implacável",
        "detail": "Quando você rolar iniciativa para começar um combate e não tiver nenhum Dado de Superioridade restante, você recupera 1 Dado de Superioridade automaticamente."
      },
      {
        "level": 18,
        "name": "Superioridade Suprema",
        "detail": "Seus Dados de Superioridade aumentam de d10 para d12. Você aprende mais duas manobras."
      }
    ],
    "Cavaleiro Arcano": [
      {
        "level": 3,
        "name": "Conjuração",
        "detail": "Você ganha espaços de magia e aprende truques e magias de Mago (baseadas em Inteligência)."
      },
      {
        "level": 3,
        "name": "Vínculo com Arma",
        "detail": "Você realiza um ritual de 1 hora para se vincular a até duas armas. Se ela estiver no mesmo plano de existência, você pode usar uma ação bônus para teletransportar a arma diretamente para sua mão. Você não pode ser desarmado dela."
      },
      {
        "level": 7,
        "name": "Magia de Guerra",
        "detail": "Quando você usa sua ação para conjurar um truque (*cantrip*), você pode fazer um ataque com arma como uma ação bônus no mesmo turno."
      },
      {
        "level": 10,
        "name": "Golpe Místico",
        "detail": "Quando você acerta uma criatura com um ataque de arma, o alvo tem desvantagem no próximo teste de resistência que fizer contra uma magia conjurada por você até o final do seu próximo turno."
      },
      {
        "level": 15,
        "name": "Investida Arcana",
        "detail": "Quando você usa o seu *Surto de Ação*, você pode se teletransportar por até 9 metros antes ou depois do ataque extra para um espaço livre visível."
      },
      {
        "level": 18,
        "name": "Magia de Guerra Aprimorada",
        "detail": "Quando você usa sua ação para conjurar uma magia de nível 1 ou maior, você pode fazer um ataque com arma como uma ação bônus no mesmo turno."
      }
    ],
    "Cavaleiro": [
      {
        "level": 3,
        "name": "Destreza Nascida na Sela",
        "detail": "Você ganha vantagem em testes para evitar cair da sua montaria. Montar ou desmontar gasta apenas 1,5 metro do seu deslocamento (em vez de metade dele). Ganha proficiência em uma perícia social ou idioma."
      },
      {
        "level": 3,
        "name": "Marca do Combate",
        "detail": "Quando você acerta uma criatura corpo a corpo, você pode marcá-la até o fim do seu próximo turno. Se ela atacar qualquer um que não seja você, ela ataca com desvantagem. Se ela causar dano a um aliado, você ganha um ataque bônus especial contra ela no seu turno com vantagem e dano extra."
      },
      {
        "level": 7,
        "name": "Manobra Defensiva",
        "detail": "Se você ou um aliado a até 1,5m sofrer um ataque, você rola 1d8 como reação e adiciona o resultado à CA do alvo. Se o ataque ainda acertar, o alvo ganha resistência a esse dano. (Usos iguais ao mod. de Constituição)."
      },
      {
        "level": 10,
        "name": "Linha de Frente Segura",
        "detail": "Inimigos provocam ataques de oportunidade de você mesmo se usarem a ação Desengajar. Se você acertar um ataque de oportunidade, o deslocamento do inimigo cai para 0 naquele turno."
      },
      {
        "level": 15,
        "name": "Investida Feroz",
        "detail": "Se você se mover pelo menos 3 metros em linha reta antes de atacar uma criatura e acertá-la, você pode forçá-la a um teste de Força. Se falhar, ela fica Caída (*Prone*)."
      },
      {
        "level": 18,
        "name": "Defensor Vigilante",
        "detail": "Você ganha uma reação especial em cada turno de cada criatura em combate, que só pode ser usada para fazer ataques de oportunidade."
      }
    ],
    "Arqueiro Arcano": [
      {
        "level": 3,
        "name": "Lore do Arqueiro Arcano",
        "detail": "Ganha proficiência na perícia Natureza ou Arcanismo, e aprende o truque *Prestidigitação* ou *Giro de Graveto*."
      },
      {
        "level": 3,
        "name": "Disparo Arcano",
        "detail": "Você pode infundir flechas com efeitos mágicos. Você ganha 2 usos de Disparo Arcano por descanso curto/longo e conhece duas opções de disparo (como a Flecha de Banimento, Flecha Perfurante ou Flecha Sombria). O dano extra aumenta no nível 18."
      },
      {
        "level": 7,
        "name": "Flechas Mágicas",
        "detail": "Qualquer flecha disparada por você de um arco curto ou longo passa a contar como uma arma mágica para superar resistências e imunidades."
      },
      {
        "level": 7,
        "name": "Tiro Curvado",
        "detail": "Se você fizer um ataque com seu arco e errar, você pode usar uma ação bônus para redirecionar aquela flecha para outro alvo a até 18 metros do alvo original, rolando um novo ataque."
      },
      {
        "level": 15,
        "name": "Tiros Prontos",
        "detail": "Se você rolar iniciativa para começar um combate e não tiver nenhum uso de *Disparo Arcano* restante, você recupera 1 uso imediatamente."
      },
      {
        "level": 18,
        "name": "Disparos Aprimorados",
        "detail": "O dano adicional de todas as suas opções de *Disparo Arcano* aumenta (geralmente adicionando +2d6 ou +4d6 de dano elemental/mágico)."
      }
    ],
    "Samurai": [
      {
        "level": 3,
        "name": "Espírito de Luta",
        "detail": "Com uma ação bônus, você ganha vantagem em todas as jogadas de ataque com armas até o fim do turno atual e recebe 5 pontos de vida temporários (sobe para 10 no nível 10, e 15 no nível 15). Pode usar 3 vezes por descanso longo."
      },
      {
        "level": 3,
        "name": "Cortesão Elegante",
        "detail": "Você ganha proficiência na perícia Persuasão (ou História/Perspicácia). Quando faz um teste de Persuasão, você adiciona seu modificador de Sabedoria ao teste além do Carisma."
      },
      {
        "level": 7,
        "name": "Mente Elegante",
        "detail": "Você ganha proficiência em testes de resistência de Sabedoria. Se já tiver, ganha em Inteligência ou Carisma."
      },
      {
        "level": 10,
        "name": "Espírito Incansável",
        "detail": "Quando você rolar iniciativa e não tiver nenhum uso de *Espírito de Luta* restante, você recupera 1 uso automaticamente."
      },
      {
        "level": 15,
        "name": "Ataque Rápido",
        "detail": "Se você fizer um ataque com vantagem no seu turno, você pode abdicar da vantagem daquele ataque para fazer um ataque adicional como parte da mesma ação."
      },
      {
        "level": 18,
        "name": "Força Antes da Morte",
        "detail": "Se você sofrer dano que reduziria seus pontos de vida a 0, você pode usar sua reação para adiar a inconsciência/morte e ganhar um turno extra completo imediatamente. Durante esse turno, sofrer dano causa falhas em testes de morte. Quando o turno acaba, você cai se ainda estiver com 0 de vida."
      }
    ],
    "Guerreiro Psiónico": [
      {
        "level": 3,
        "name": "Energia Psiónica",
        "detail": "Você ganha uma reserva de Dados de Energia Psiónica (d6) igual ao dobro do seu bônus de proficiência. Eles são usados em suas habilidades e se recuperam em descansos. O dado aumenta com os níveis (d8 no nvl 7, d10 no nvl 11, d12 no nvl 17)."
      },
      {
        "level": 3,
        "name": "Poderes Psiónicos",
        "detail": "Você ganha três habilidades:\n- Golpe Psiónico: Uma vez por turno, causa dano de força extra igual a 1 Dado Psiónico + mod. Inteligência ao acertar um inimigo.\n- Campo Telecinético: Usa sua reação para reduzir o dano sofrido por você ou um aliado próximo em 1 Dado Psiónico + mod. Inteligência.\n- Movimento Telecinético: Como ação, move um objeto ou aliado voluntário por até 9 metros mentalmente (1 vez de graça por descanso curto/longo)."
      },
      {
        "level": 7,
        "name": "Salto Telecinético",
        "detail": "Com uma ação bônus, você ganha deslocamento de voo igual ao dobro do seu deslocamento terrestre até o final do turno atual (1 vez de graça por descanso curto/longo)."
      },
      {
        "level": 10,
        "name": "Mente Protegida",
        "detail": "Se você começar seu turno sob o efeito de *Enfeitiçado* ou *Amedrontado*, você pode gastar 1 Dado Psiónico para remover a condição imediatamente. Ganha resistência a dano psíquico."
      },
      {
        "level": 15,
        "name": "Baluarte Córneo",
        "detail": "Com uma ação bônus, você cria escudos psíquicos ao redor de criaturas escolhidas (até seu mod. de Inteligência). Elas ganham meia-cobertura (+2 na CA) e vantagem em testes de Destreza por 1 minuto."
      },
      {
        "level": 18,
        "name": "Mestre de Telecinese",
        "detail": "Você aprende a magia *Telecinese* sem componentes materiais. Sua Inteligência é o atributo de conjuração. Você pode usá-la gastando Dados Psiónicos adicionais."
      }
    ],
    "Cavaleiro Rúnico": [
      {
        "level": 3,
        "name": "Proficiências Extras",
        "detail": "Ganha proficiência com ferramentas de ferreiro e aprende o idioma Gigante."
      },
      {
        "level": 3,
        "name": "Magia Rúnica",
        "detail": "Você aprende a entalhar duas runas de gigante em seus equipamentos (como a Runa do Fogo ou da Nuvem). Elas dão bônus passivos e um efeito ativo poderoso por descanso curto (ex: redirecionar um ataque inimigo para outro alvo)."
      },
      {
        "level": 3,
        "name": "Poder Gigante (*****Giant Might*****)",
        "detail": "Com uma ação bônus, você se transforma magicamente, ficando de tamanho Grande por 1 minuto. Enquanto estiver transformado, tem vantagem em testes de Força e causa +1d6 de dano extra uma vez por turno em seus ataques. (Usos iguais à Proficiência)."
      },
      {
        "level": 7,
        "name": "Escudo Rúnico",
        "detail": "Quando uma criatura visível a até 18 metros é acertada por um ataque, você usa sua reação para forçar o atacante a rerrolar o d20 (usos iguais à Proficiência)."
      },
      {
        "level": 10,
        "name": "Grande Estatura",
        "detail": "Sua altura permanente aumenta em até 3d4 polegadas. O dano adicional do seu *Poder Gigante* aumenta para 1d8. Você aprende uma nova runa."
      },
      {
        "level": 15,
        "name": "Mestre das Runas",
        "detail": "Você passa a poder usar a habilidade ativa de cada uma das suas runas entalhadas duas vezes por descanso curto (em vez de apenas uma)."
      },
      {
        "level": 18,
        "name": "Processão Titânica",
        "detail": "O dano adicional do seu *Poder Gigante* aumenta para 1d10. Quando ativa a transformação, seu tamanho pode se tornar Enorme, e seu alcance de ataque aumenta em 1,5 metro."
      }
    ],
    "Eco Cavaleiro": [
      {
        "level": 3,
        "name": "Manifestar Eco",
        "detail": "Com uma ação bônus, você manifesta um Eco (um clone translúcido com 1 de vida e CA base alta) a até 4,5m. Você pode mover o Eco, atacar a partir da posição dele, usar sua reação para fazer ataques de oportunidade através dele e se teletransportar trocando de lugar com ele."
      },
      {
        "level": 3,
        "name": "Avatar do Eco (*****Unleash Incarnation*****)",
        "detail": "Quando você usa a ação de Ataque, você pode fazer um ataque adicional a partir da posição do seu Eco (usos iguais ao mod. de Constituição por descanso longo)."
      },
      {
        "level": 7,
        "name": "Eco de Vigilância",
        "detail": "Com uma ação, você pode transferir sua mente para o Eco por até 10 minutos, enxergando e ouvindo através dele. O alcance máximo para ele se afastar de você aumenta para até 300 metros."
      },
      {
        "level": 10,
        "name": "Mártir de Sombra",
        "detail": "Se um aliado visível estiver prestes a sofrer um ataque, você usa sua reação para teletransportar seu Eco para a frente do aliado, fazendo com que o Eco receba o ataque no lugar dele."
      },
      {
        "level": 15,
        "name": "Potencializar Eco",
        "detail": "Quando seu Eco é destruído por sofrer dano, você ganha 2d6 + mod. de Constituição de pontos de vida temporários se não tiver nenhum ponto de vida temporário ativo."
      },
      {
        "level": 18,
        "name": "Legião de Ecos",
        "detail": "Você passa a poder manifestar dois Ecos simultaneamente usando sua ação bônus. Se usar habilidades que gastem o Eco, você escolhe qual deles aplica o efeito."
      }
    ]
  },
  "ladino": {
    "Assassino": [
      {
        "level": 3,
        "name": "Proficiências Extras",
        "detail": "Ganha proficiência com o kit de disfarces e o kit de envenenador."
      },
      {
        "level": 3,
        "name": "Assassinato (*****Assassinate*****)",
        "detail": "Você tem vantagem em jogadas de ataque contra qualquer criatura que ainda não tenha agido no combate (na primeira rodada). Além disso, qualquer ataque que você acertar contra uma criatura Surpresa é um Acerto Crítico automático."
      },
      {
        "level": 9,
        "name": "Especialista em Infiltração",
        "detail": "Você pode criar identidades falsas falsificando documentos e criando disfarces perfeitos. O processo leva 7 dias e custa 25 po, mas depois disso ninguém desconfia da sua identidade falsa a menos que você dê motivos."
      },
      {
        "level": 13,
        "name": "Impostor",
        "detail": "Você consegue imitar o comportamento, a escrita e a fala de outra pessoa perfeitamente se estudá-la por pelo menos 3 horas. Outras criaturas têm desvantagem em testes para notar que você é um impostor."
      },
      {
        "level": 17,
        "name": "Golpe da Morte (*****Death Strike*****)",
        "detail": "Quando você ataca e acerta uma criatura Surpresa, ela deve fazer um teste de resistência de Constituição. Se falhar, o dano do seu ataque contra ela é dobrado (acumula com o crítico do nível 3)."
      }
    ],
    "Larápio": [],
    "Trapaceiro Arcano": [
      {
        "level": 3,
        "name": "Conjuração",
        "detail": "Você aprende truques e magias de Mago (baseadas em Inteligência)."
      },
      {
        "level": 3,
        "name": "Legerdemain com Mãos Mágicas",
        "detail": "Quando você conjura o truque *Mãos Mágicas*, a mão fica invisível. Você pode usar sua Ação Astuta (ação bônus) para controlar a mão para: guardar/retirar itens da mochila de alguém, ou usar suas ferramentas de ladrão para abrir fechaduras/desarmar armadilhas à distância."
      },
      {
        "level": 9,
        "name": "Emboscada Mágica",
        "detail": "Se você estiver escondido de uma criatura quando conjurar uma magia nela, o alvo tem desvantagem em testes de resistência contra essa magia naquele turno."
      },
      {
        "level": 13,
        "name": "Trapaceiro Versátil",
        "detail": "Você pode usar uma ação bônus para designar uma criatura a até 1,5m da sua *Mão Mágica invisível*. Você ganha vantagem em todas as jogadas de ataque contra essa criatura até o final do turno."
      },
      {
        "level": 17,
        "name": "Ladrão de Magia",
        "detail": "Quando uma criatura conjura uma magia que alveja você ou te inclui na área, você pode usar sua reação para forçá-la a um teste do atributo de conjuração dela. Se falhar, você anula o efeito da magia em você, rouba o conhecimento da magia (pode conjurá-la pelas próximas 8 horas) e o inimigo não pode conjurá-la nesse período."
      }
    ],
    "Swashbuckler": [
      {
        "level": 3,
        "name": "Passos Fluidos (*****Fancy Footwork*****)",
        "detail": "Quando você faz um ataque corpo a corpo contra uma criatura, ela não pode fazer ataques de oportunidade contra você pelo resto do turno, mesmo se você errar o ataque."
      },
      {
        "level": 3,
        "name": "Audácia Audaz (*****Audacious \\_Glance / \\_Audacity*****)",
        "detail": "Você adiciona seu modificador de Carisma na sua iniciativa. Além disso, você ganha uma nova forma de usar o *Ataque Furtivo*: você pode aplicá-lo se estiver a até 1,5m do alvo, nenhuma outra criatura estiver a até 1,5m de você, e você não tiver desvantagem (não precisa de aliado perto)."
      },
      {
        "level": 9,
        "name": "Panache",
        "detail": "Você usa sua ação para fazer um teste de Persuasão contra a Intuição do alvo. Se o alvo for hostil, ele fica frustrado e tem desvantagem para atacar qualquer um que não seja você por 1 minuto. Se for amigável, ele fica Enfeitiçado por você por 1 minuto."
      },
      {
        "level": 13,
        "name": "Manobra Elegante",
        "detail": "Você pode usar uma ação bônus para ganhar vantagem no próximo teste de Atletismo ou Acrobacia que fizer no mesmo turno."
      },
      {
        "level": 17,
        "name": "Mestre das Lâminas",
        "detail": "Se você errar uma jogada de ataque, você pode usar sua reação para rolar o ataque novamente com vantagem (1 vez por descanso curto ou longo)."
      }
    ],
    "Inquisidor": [
      {
        "level": 3,
        "name": "Olho para Detalhes",
        "detail": "Você pode usar uma ação bônus para fazer um teste de Percepção para procurar algo, ou um teste de Investigação para encontrar pistas."
      },
      {
        "level": 3,
        "name": "Perspicácia de Combate (*****Insightful Fighting*****)",
        "detail": "Com uma ação bônus, faz um teste de Intuição contra a Enganação de um inimigo visível. Se vencer, você pode usar seu Ataque Furtivo contra ele em todos os turnos pelos próximos 1 minuto, mesmo se não tiver vantagem ou aliados por perto."
      },
      {
        "level": 9,
        "name": "Olho Firme",
        "detail": "Você tem vantagem em testes de Percepção ou Investigação se não se mover mais do que metade do seu deslocamento no mesmo turno."
      },
      {
        "level": 13,
        "name": "Mestre do Engano",
        "detail": "Seus pensamentos não podem ser lidos por telepatia ou magia a menos que você permita. Além disso, você ganha vantagem em testes para detectar ilusões e mentiras."
      },
      {
        "level": 17,
        "name": "Olho Clínico (*****Eye for Weakness*****)",
        "detail": "O dano do seu *Ataque Furtivo* aumenta em +3d6 contra qualquer criatura que esteja sob o efeito da sua habilidade *Perspicácia de Combate (Nvl 3)*."
      }
    ],
    "Mestre de Táticas": [
      {
        "level": 3,
        "name": "Mestre das Intrigas",
        "detail": "Ganha proficiência com o kit de disfarces, kit de falsificação e um jogo de tabuleiro. Aprende dois idiomas extras. Você consegue imitar o sotaque perfeito de uma região se ouvir alguém falando por 1 minuto."
      },
      {
        "level": 3,
        "name": "Mestre das Táticas",
        "detail": "Você pode usar a ação Ajudar (*Help*) como uma ação bônus. Além disso, quando usa essa ação bônus para ajudar um aliado a atacar, o alcance da sua ajuda aumenta para 9 metros (em vez de precisar estar colado no inimigo)."
      },
      {
        "level": 9,
        "name": "Olhar Penetrante",
        "detail": "Se você interagir com uma criatura por pelo menos 1 minuto fora de combate, você descobre se os atributos de Inteligência, Sabedoria ou Carisma dela são maiores, menores ou iguais aos seus."
      },
      {
        "level": 13,
        "name": "Desvio Desonesto (*****Misdirection*****)",
        "detail": "Quando você está servindo de cobertura para um aliado e sofre um ataque, você pode usar sua reação para fazer com que o ataque acerte o aliado que está te dando cobertura (o ataque deve superar a CA do aliado)."
      },
      {
        "level": 17,
        "name": "Alma de Esponja / Purificada",
        "detail": "Seus pensamentos e intenções não podem ser lidos por magia. Se for forçado a falar a verdade por magias (como *Zona da Verdade*), você pode mentir livremente sem que a magia detecte."
      }
    ],
    "Fantasma": [
      {
        "level": 3,
        "name": "Sussurros dos Mortos",
        "detail": "Ao fim de um descanso curto ou longo, você escolhe uma perícia ou ferramenta. Você ganha proficiência temporária nela através dos espíritos que te guiam até escolher outra no próximo descanso."
      },
      {
        "level": 3,
        "name": "Lamentos do Alvoroço (*****Wails from the Grave*****)",
        "detail": "Quando você aplica seu Ataque Furtivo, você pode canalizar o lamento da morte para causar dano necrótico extra a uma segunda criatura a até 9 metros. O dano é igual a metade dos seus dados de Ataque Furtivo (usos iguais à Proficiência)."
      },
      {
        "level": 9,
        "name": "Símbolos de Almas",
        "detail": "Quando uma criatura morre a até 9 metros de você, você usa sua reação para capturar a alma dela em uma pequena bugiganga (pode ter até seu bônus de Proficiência). Ter a bugiganga te dá vantagem em testes de resistência contra a morte. Você pode destruir a bugiganga para usar os *Lamentos do Alvoroço* sem gastar usos ou fazer uma pergunta para o espírito morto."
      },
      {
        "level": 13,
        "name": "Caminho Fantasma",
        "detail": "Com uma ação bônus, você assume uma forma espectral por 10 minutos. Você ganha deslocamento de voo flutuante de 3 metros, pode atravessar paredes/criaturas e inimigos atacam você com desvantagem. (1 uso de graça ou destruindo um Símbolo de Alma)."
      },
      {
        "level": 17,
        "name": "Amigo da Morte",
        "detail": "Quando você usa seus *Lamentos do Alvoroço*, o dano necrótico passa a afetar tanto o alvo original quanto o secundário. Além disso, se iniciar um descanso longo sem nenhum *Símbolo de Alma*, um espírito aparece e se voluntaria, te dando uma bugiganga de graça."
      }
    ],
    "Lâmina Psiónica": [
      {
        "level": 3,
        "name": "Dados de Energia Psiónica",
        "detail": "Você ganha uma reserva de Dados Psiónicos (d6) igual ao dobro da sua Proficiência. Eles aumentam de tamanho com o nível (d8 no nvl 5, d10 no nvl 11, d12 no nvl 17). Seus dados não somem se você falhar no teste em habilidades específicas."
      },
      {
        "level": 3,
        "name": "Habilidades Psiónicas",
        "detail": "- Talento Inato: Se falhar em um teste de perícia na qual tenha proficiência, você rola um Dado Psiónico e soma ao resultado. Se ainda assim falhar, o dado não é gasto.\n- Rede Telepática: Você gasta um Dado Psiónico para criar um elo telepático com aliados (número igual à Proficiência) a até 1,5 km por algumas horas."
      },
      {
        "level": 3,
        "name": "Lâminas Psíquicas",
        "detail": "Quando você vai atacar (e tem as mãos livres), você manifesta magicamente uma adaga de energia psíquica. Ela causa 1d6 de dano psíquico + mod. atributo e some após o ataque (permite Ataque Furtivo). Se tiver a ação bônus livre, pode manifestar uma segunda lâmina para um ataque extra (causa 1d4 de dano)."
      },
      {
        "level": 9,
        "name": "Lâminas Aprontadas",
        "detail": "Seus ataques com as Lâminas Psíquicas ganham novos usos gastando Dados Psiónicos:\n- Ataque Guiado: Se errar um ataque com as lâminas, rola o dado psiónico e adiciona ao acerto. Se acertar, gasta o dado.\n- Salto Psiónico: Você usa uma ação bônus para arremessar uma lâmina e se teletransportar para onde ela cair (distância igual a metros rolados no dado x 3)."
      },
      {
        "level": 13,
        "name": "Véu Psíquico",
        "detail": "Com uma ação, você fica completamente Invisível por 1 hora (junto com suas roupas). Termina mais cedo se você atacar ou forçar alguém a um teste de resistência. (1 vez de graça por descanso longo, ou gastando 1 Dado Psiónico)."
      },
      {
        "level": 17,
        "name": "Mente Dilacerada (*****Rend Mind*****)",
        "detail": "Quando você dá um Ataque Furtivo com suas Lâminas Psíquicas, você pode forçar o alvo a um teste de resistência de Sabedoria. Se falhar, ele fica Atordoado (*Stunned*) por 1 minuto. Ele pode repetir o teste no fim dos turnos dele. (1 vez de graça por descanso longo, ou gastando 3 Dados Psiónicos)."
      }
    ],
    "Batedor": [
      {
        "level": 3,
        "name": "Sobrevivente",
        "detail": "Você ganha proficiência e Especialização (dobra o bônus) nas perícias Natureza e Sobrevivência."
      },
      {
        "level": 3,
        "name": "Escaramuça (*****Skirmisher*****)",
        "detail": "Você pode se mover com incrível agilidade como reação. Quando um inimigo termina o turno dele a até 1,5m de você, você pode usar sua reação para se mover por até metade do seu deslocamento sem provocar ataques de oportunidade."
      },
      {
        "level": 9,
        "name": "Mobilidade Superior",
        "detail": "Seu deslocamento terrestre aumenta em +3 metros. Se você tiver deslocamento de escalada ou natação, eles também aumentam em +3 metros."
      },
      {
        "level": 13,
        "name": "Mestre da Emboscada",
        "detail": "Você é mestre em liderar ataques. No primeiro turno de qualquer combate, você ganha vantagem em testes de iniciativa. Além disso, o primeiro ataque que você acertar contra um inimigo dá vantagem para todos os seus aliados atacarem aquele mesmo inimigo até o início do seu próximo turno."
      },
      {
        "level": 17,
        "name": "Ataque Súbito",
        "detail": "Se você usar a ação de Ataque no seu turno, você pode fazer um ataque adicional com arma como uma ação bônus. Esse ataque bônus pode se beneficiar do seu Ataque Furtivo mesmo se você já tiver usado o Furtivo no seu ataque normal, desde que o alvo do ataque bônus seja uma criatura diferente."
      }
    ]
  },
  "mago": {
    "Escola de Abjuração": [
      {
        "level": 2,
        "name": "Savante de Abjuração",
        "detail": "Copiar magias de Abjuração custa metade do tempo e ouro."
      },
      {
        "level": 2,
        "name": "Égide Arcana (*****Arcane Ward*****)",
        "detail": "Quando conjura uma magia de Abjuração de nível 1 ou maior, você cria uma barreira com pontos de vida iguais a (dobro do nível de mago) + mod. Inteligência. Ela absorve o dano por você e recupera vida sempre que você conjura mais Abjurações."
      },
      {
        "level": 6,
        "name": "Égide Projetada",
        "detail": "Quando um aliado visível a até 9 metros sofre dano, você usa sua reação para fazer com que a sua *Égide Arcana* absorva o dano no lugar dele."
      },
      {
        "level": 10,
        "name": "Abjuração Potente",
        "detail": "Quando você conjura magias que exigem um teste de atributo para funcionar (como *Dissipar Magia* ou *Contramagia*), você adiciona seu bônus de Proficiência ao teste."
      },
      {
        "level": 14,
        "name": "Resistência Arcana",
        "detail": "Você ganha vantagem em todos os testes de resistência contra magias. Além disso, você tem resistência a danos causados por magias."
      }
    ],
    "Escola de Conjuração": [
      {
        "level": 2,
        "name": "Savante de Conjuração",
        "detail": "Copiar magias de Conjuração custa metade do tempo e ouro."
      },
      {
        "level": 2,
        "name": "Conjuração Menor",
        "detail": "Com uma ação, você cria um objeto não-mágico na sua mão ou espaço visível (até 90cm de lado e 5kg). O objeto brilha sutilmente e desaparece após 1 hora ou se sofrer qualquer dano."
      },
      {
        "level": 6,
        "name": "Transposição Benigna",
        "detail": "Com uma ação, você se teletransporta por até 9 metros para um espaço livre visível, ou troca de lugar com um aliado voluntário nessa distância. Você recupera essa habilidade após conjurar uma Conjuração de nível 1+."
      },
      {
        "level": 10,
        "name": "Conjuração Focada",
        "detail": "Enquanto você estiver mantendo Concentração em uma magia da escola de Conjuração, a sua concentração não pode ser quebrada por sofrer dano."
      },
      {
        "level": 14,
        "name": "Invocações Duráveis",
        "detail": "Qualquer criatura que você invocar ou criar com uma magia de Conjuração ganha 30 pontos de vida temporários adicionais automaticamente."
      }
    ],
    "Escola de Adivinhação": [],
    "Escola de Encantamento": [
      {
        "level": 2,
        "name": "Savante de Encantamento",
        "detail": "Copiar magias de Encantamento custa metade do tempo e ouro."
      },
      {
        "level": 2,
        "name": "Olhar Hipnótico",
        "detail": "Com uma ação, escolhe um inimigo a até 1,5m. Se ele falhar num teste de Sabedoria, fica Incapacitado e com deslocamento 0 enquanto você mantiver o olhar parado usando sua ação nos turnos seguintes."
      },
      {
        "level": 6,
        "name": "Desviar Encanto (*****Instinctive Charm*****)",
        "detail": "Quando uma criatura visível a até 9 metros te ataca, você usa sua reação para forçá-la a um teste de Sabedoria. Se falhar, ela deve atacar a criatura mais próxima dela em vez de você."
      },
      {
        "level": 10,
        "name": "Encantamento Dividido",
        "detail": "Quando você conjura uma magia de Encantamento de nível 1 ou maior direcionada a apenas uma criatura, você pode fazer com que ela alveje duas criaturas simultaneamente."
      },
      {
        "level": 14,
        "name": "Alterar Memórias",
        "detail": "Quando você conjura uma magia de Encantamento para enfeitiçar uma criatura, você pode fazer com que ela esqueça completamente que foi enfeitiçada por você ao fim da magia, e pode fazê-la ganhar um lapso de memória do tempo em que esteve sob o feitiço."
      }
    ],
    "Escola de Evocação": [
      {
        "level": 2,
        "name": "Savante de Evocação",
        "detail": "Copiar magias de Evocação custa metade do tempo e ouro."
      },
      {
        "level": 2,
        "name": "Esculpir Magias (*****Sculpt Spells*****)",
        "detail": "Quando conjura uma magia de Evocação em área, você pode escolher aliados para passarem automaticamente no teste de resistência e não sofrerem nenhum dano da sua magia (número de aliados igual a 1 + nível da magia)."
      },
      {
        "level": 6,
        "name": "Truque Potente",
        "detail": "Quando uma criatura passa no teste de resistência contra um dos seus truques (*cantrips*), ela ainda sofre metade do dano do truque (em vez de nenhum)."
      },
      {
        "level": 10,
        "name": "Evocação Potente",
        "detail": "Você adiciona seu modificador de Inteligência ao dano de qualquer magia de Evocação de mago que você conjurar."
      },
      {
        "level": 14,
        "name": "Sobrecarga (*****Overchannel*****)",
        "detail": "Quando conjura uma magia de mago de nível 1 a 5 que cause dano, você pode aplicar diretamente o dano máximo possível. Usar mais de uma vez por dia sem um descanso longo causa muito dano necrótico em você mesmo."
      }
    ],
    "Escola de Ilusão": [
      {
        "level": 2,
        "name": "Savante de Ilusão",
        "detail": "Copiar magias de Ilusão custa metade do tempo e ouro."
      },
      {
        "level": 2,
        "name": "Ilusão Menor Aprimorada",
        "detail": "Você aprende o truque *Ilusão Menor*. Se já souber, ganha outro. Quando conjura esse truque, ele pode criar um som e uma imagem visual ao mesmo tempo (normalmente é apenas um dos dois)."
      },
      {
        "level": 6,
        "name": "Ilusões Maleáveis",
        "detail": "Quando conjura uma magia de Ilusão com duração de 1 minuto ou mais, você pode usar sua ação para mudar a natureza da ilusão em tempo real, sem precisar conjurá-la de novo."
      },
      {
        "level": 10,
        "name": "Autoimagem Ilusória",
        "detail": "Quando uma criatura te ataca, você usa sua reação para criar uma cópia ilusória instantânea de si mesmo. O ataque inimigo erra você automaticamente atingindo a ilusão, que se desfaz. (1 vez por descanso curto/longo)."
      },
      {
        "level": 14,
        "name": "Realidade Ilusória",
        "detail": "Com uma ação bônus, você pode tecer fios de magia de sombra em uma ilusão que você criou para tornar um objeto não-mágico dela 100% real e sólido por 1 minuto (o objeto não pode causar dano direto)."
      }
    ],
    "Escola de Necromancia": [
      {
        "level": 2,
        "name": "Savante de Necromancia",
        "detail": "Copiar magias de Necromancia custa metade do tempo e ouro."
      },
      {
        "level": 2,
        "name": "Colheita Sombria (*****Grim Harvest*****)",
        "detail": "Uma vez por turno, quando você mata uma criatura com uma magia de nível 1 ou maior, você recupera pontos de vida iguais ao dobro do nível da magia (ou o triplo se for uma magia de Necromancia)."
      },
      {
        "level": 6,
        "name": "Mortos Animatronicos",
        "detail": "Você adiciona a magia *Animar Mortos* ao seu grimório. Quando a conjura, você pode erguer um morto-vivo extra, e todas as suas criaturas invocadas ganham pontos de vida adicionais e adicionam seu bônus de proficiência ao dano."
      },
      {
        "level": 10,
        "name": "Inured to Death (Habituado à Morte)",
        "detail": "Você ganha resistência a dano necrótico e o seu total de pontos de vida máximos não pode ser reduzido por nenhuma habilidade ou magia inimiga."
      },
      {
        "level": 14,
        "name": "Comandar Mortos-Vivos",
        "detail": "Com uma ação, você força um morto-vivo visível a um teste de Carisma. Se falhar, ele cai sob o seu controle absoluto e obedece seus comandos (se o morto-vivo tiver Inteligência alta, ele repete o teste para tentar se libertar)."
      }
    ],
    "Escola de Transmutação": [
      {
        "level": 2,
        "name": "Savante de Transmutação",
        "detail": "Copiar magias de Transmutação custa metade do tempo e ouro."
      },
      {
        "level": 2,
        "name": "Alquimia Menor",
        "detail": "Você passa 10 minutos alterando temporariamente a composição física de um objeto não-mágico de madeira, pedra, ferro, cobre ou prata, transformando-o em outro desses materiais por até 1 hora."
      },
      {
        "level": 6,
        "name": "Pedra do Transmutador",
        "detail": "Você gasta 8 horas criando uma pedra mágica. Quem estiver segurando a pedra ganha um bônus à sua escolha: Visão no Escuro (18m), +3m de velocidade, resistência a um elemento ou proficiência em testes de resistência de Constituição (perfeito para manter concentração). Você pode mudar o bônus ao conjurar Transmutações."
      },
      {
        "level": 10,
        "name": "Metamorfo",
        "detail": "Você adiciona a magia *Metamorfose* (*Polymorph*) ao seu grimório. Você pode conjurá-la em si mesmo sem gastar espaços de magia, mas limitando-se a virar uma besta de ND 1 ou menor (1 vez por descanso longo)."
      },
      {
        "level": 14,
        "name": "Mestre Transmutador",
        "detail": "Você pode destruir sua *Pedra do Transmutador* para ativar um grande efeito instantâneo: transmutar um objeto em outro permanentemente, curar todas as doenças e feridas de alguém, reviver os mortos (como na magia *Ressurreição*) ou rejuvenescer a idade aparente de uma criatura."
      }
    ]
  },
  "monge": {
    "Caminho da Mão Aberta": [
      {
        "level": 3,
        "name": "Técnica da Mão Aberta",
        "detail": "Quando você acerta um inimigo com a sua *Rajada de Golpes* (*Flurry of Blows*), você pode aplicar um dos seguintes efeitos no alvo:\n- Forçar um teste de Destreza; se falhar, fica Caído (*Prone*).\n- Forçar um teste de Força; se falhar, é empurrado até 4,5 metros para longe de você.\n- Tirar as reações do alvo até o final do seu turno atual (perfeito para fugir sem desengajar)."
      },
      {
        "level": 6,
        "name": "Integridade Corporal (*****Wholeness of Body*****)",
        "detail": "Com uma ação, você pode meditar e curar instantaneamente uma quantidade de pontos de vida igual a 3 vezes o seu nível de monge (1 vez por descanso longo)."
      },
      {
        "level": 11,
        "name": "Tranquilidade",
        "detail": "Ao fim de um descanso longo, você ganha o efeito permanente da magia *Santuário* (*Sanctuary*). Se um inimigo tentar te atacar, deve passar num teste de Sabedoria. O efeito cai se você atacar ou conjurar magias."
      },
      {
        "level": 17,
        "name": "Palma Vibratória (*****Quivering Palm*****)",
        "detail": "Quando acerta um ataque, você gasta 3 pontos de Ki para criar vibrações letais no corpo do alvo. Em turnos seguintes (em até um número de dias igual ao seu nível), você usa sua ação para forçar um teste de Constituição. Se o alvo falhar, ele cai para 0 pontos de vida imediatamente. Se passar, sofre 10d10 de dano de força."
      }
    ],
    "Caminho das Sombras": [
      {
        "level": 3,
        "name": "Artes Sombrias",
        "detail": "Você pode gastar 2 pontos de Ki para conjurar as seguintes magias sem componentes materiais: *Escuridão*, *Visão no Escuro*, *Passos Sem Pegadas* ou *Silêncio*. Você também aprende o truque *Ilusão Menor*."
      },
      {
        "level": 6,
        "name": "Passo das Sombras (*****Shadow Step*****)",
        "detail": "Quando você estiver em penumbra ou escuridão, pode usar uma ação bônus para se teletransportar por até 18 metros para outro espaço que também esteja em penumbra ou escuridão. Você ganha vantagem no seu primeiro ataque corpo a corpo feito antes do fim do turno."
      },
      {
        "level": 11,
        "name": "Capa de Sombras",
        "detail": "Quando você estiver em penumbra ou escuridão, você pode usar sua ação para ficar completamente Invisível. A invisibilidade acaba se você atacar, conjurar uma magia ou se mover para uma área de luz plena."
      },
      {
        "level": 17,
        "name": "Emboscada Sombria (*****Opportunist*****)",
        "detail": "Sempre que uma criatura a até 1,5 metro de você for acertada por um ataque feito por outra criatura (como um aliado seu), você pode usar sua reação para fazer um ataque corpo a corpo contra o alvo afetado."
      }
    ],
    "Caminho dos Quatro Elementos": [
      {
        "level": 3,
        "name": "Discípulo dos Elementos",
        "detail": "Você aprende a sintonizar suas energias. Você ganha a habilidade *Sintonia Elemental* (efeitos ambientais simples) e escolhe uma disciplina elemental que gasta pontos de Ki para conjurar magias (como o *Chicote de Água* ou o *Punho do Ar Alvoroçado*). Você aprende novas disciplinas nos níveis 6, 11 e 17, e pode trocar as antigas."
      },
      {
        "level": 6,
        "name": "Disciplinas de Nível 6",
        "detail": "Permite escolher poderes que imitam magias de nível 2 (como *Esfera Flamejante* ou *Lâmina de Gelo* gastando Ki)."
      },
      {
        "level": 11,
        "name": "Disciplinas de Nível 11",
        "detail": "Permite escolher poderes que imitam magias de nível 3 (como *Bola de Fogo* ou *Gaseificar* gastando Ki)."
      },
      {
        "level": 17,
        "name": "Disciplinas de Nível 17",
        "detail": "Permite escolher poderes que imitam magias de nível 4 (como *Muralha de Pedra* ou *Voar* gastando Ki)."
      }
    ],
    "Caminho do Mestre Bêbado": [
      {
        "level": 3,
        "name": "Proficiências Extras",
        "detail": "Ganha proficiência na perícia Performance e com as ferramentas de cervejeiro."
      },
      {
        "level": 3,
        "name": "Técnica do Bêbado",
        "detail": "Sempre que você usar a sua *Rajada de Golpes*, você ganha automaticamente os benefícios da ação Desengajar e o seu deslocamento terrestre aumenta em +3 metros até o final do turno atual."
      },
      {
        "level": 6,
        "name": "Salto Cambaleante (*****Tipsy Sway*****)",
        "detail": "Quando você estiver caído no chão (*Prone*), levantar gasta apenas 1,5 metro do seu deslocamento (em vez de metade dele). Além disso, quando um inimigo errar um ataque corpo a corpo contra você, você pode gastar 1 ponto de Ki como reação para fazer com que o ataque acerte outra criatura inimiga a até 1,5m de você."
      },
      {
        "level": 11,
        "name": "Conduta Sortuda",
        "detail": "Quando você fizer um teste de habilidade, jogada de ataque ou teste de resistência com desvantagem, você pode gastar 2 pontos de Ki para anular totalmente essa desvantagem naquela rolagem."
      },
      {
        "level": 17,
        "name": "Frenesi Ébrio",
        "detail": "Quando você usa a sua *Rajada de Golpes*, você pode fazer até 5 ataques no total (em vez de apenas 2 bônus), desde que cada um dos ataques da rajada alveje uma criatura diferente."
      }
    ],
    "Caminho do Kensei": [
      {
        "level": 3,
        "name": "Caminho do Kensei",
        "detail": "Você escolhe duas armas (uma corpo a corpo e uma à distância) para serem suas Armas de Kensei. Elas contam como armas de monge para você. Você ganha habilidades com elas:\n- Defesa Ágil: Se fizer um ataque desarmado no seu turno segurando uma Arma de Kensei corpo a corpo, ganha +2 na CA até o seu próximo turno.\n- Disparo Kensei: Usa sua ação bônus para fazer com que seus ataques à distância causem +1d4 de dano extra naquele turno.\n- Pincel do Kensei: Ganha proficiência com ferramentas de calígrafo ou pintor."
      },
      {
        "level": 6,
        "name": "Um com a Arma",
        "detail": "Suas Armas de Kensei contam como mágicas. Além disso, quando acerta um ataque com elas, pode gastar 1 ponto de Ki para causar dano extra igual ao seu dado de artes marciais (*Ataque de Ki Preciso*). Você escolhe outra arma de Kensei."
      },
      {
        "level": 11,
        "name": "Afiar a Lâmina",
        "detail": "Com uma ação bônus, você gasta de 1 a 3 pontos de Ki para imbuir sua arma de Kensei. Ela ganha um bônus mágico de ataque e dano igual ao número de pontos gastos (até +3) por 1 minuto (não acumula se a arma já tiver bônus mágicos fixos). Você escolhe outra arma de Kensei."
      },
      {
        "level": 17,
        "name": "Precisão Inabalável",
        "detail": "Se você errar uma jogada de ataque com uma arma de monge no seu turno, você pode simplesmente rerrolar a jogada de ataque (1 vez por turno)."
      }
    ],
    "Caminho da Longa Morte": [],
    "Caminho do Sol Radiante": [
      {
        "level": 3,
        "name": "Rajada de Sol Radiante",
        "detail": "Quando faz a ação de Ataque, você pode substituir seus ataques normais por disparos de energia radiante com alcance de 9 metros. Eles causam dano igual ao seu dado de artes marciais + mod. Destreza. Se usar a ação bônus, pode gastar 1 ponto de Ki para dar dois tiros extras (funciona como a Rajada de Golpes a distância)."
      },
      {
        "level": 6,
        "name": "Golpe do Arco Radiante",
        "detail": "Imediatamente após fazer a ação de Ataque no seu turno, você pode gastar 2 pontos de Ki para conjurar a magia *Mãos Flamejantes* (*Burning Hands*) como uma ação bônus. O dano dela aumenta se você gastar mais Ki."
      },
      {
        "level": 11,
        "name": "Explosão Solar Searing",
        "detail": "Com uma ação, você cria uma esfera de luz a até 45 metros. Criaturas na área de 6m de raio devem passar num teste de Constituição ou sofrem 2d6 de dano radiante. Você pode gastar pontos de Ki para aumentar o dano em +1d6 por ponto gasto (até um máximo de 3 Ki)."
      },
      {
        "level": 17,
        "name": "Escudo de Sol Radiante",
        "detail": "Você emana uma aura de luz de 9 metros. Com uma reação, quando você sofre um ataque corpo a corpo de uma criatura na aura, você causa dano radiante automático nela igual a 5 + seu modificador de Sabedoria."
      }
    ],
    "Caminho da Misericórdia": [
      {
        "level": 3,
        "name": "Implementos de Misericórdia",
        "detail": "Ganha proficiência nas perícias Medicina, Intuição e com o kit de herbalismo. Você recebe uma máscara especial."
      },
      {
        "level": 3,
        "name": "Mão da Cura",
        "detail": "Você pode gastar 1 ponto de Ki para tocar uma criatura e curá-la em um valor igual a uma rolagem do seu dado de artes marciais + mod. Sabedoria. Se usar a *Rajada de Golpes*, pode substituir um dos socos por essa cura sem gastar Ki extra."
      },
      {
        "level": 3,
        "name": "Mão do Danos (*****Hand of Harm*****)",
        "detail": "Uma vez por turno, quando você acerta uma criatura com um ataque desarmado, você pode gastar 1 ponto de Ki para causar dano necrótico extra igual a uma rolagem do seu dado de artes marciais + mod. Sabedoria."
      },
      {
        "level": 6,
        "name": "Toque Médico",
        "detail": "Quando você usa a sua *Mão da Cura*, você também remove uma das seguintes condições do alvo: Cego, Surdo, Paralisado, Envenenado ou Atordoado. Quando usa a *Mão do Dano*, o alvo fica automaticamente Envenenado até o final do seu próximo turno, sem direito a teste de resistência."
      },
      {
        "level": 11,
        "name": "Rajada de Misericórdia",
        "detail": "Sempre que você usar a sua *Rajada de Golpes*, você pode substituir tanto o primeiro quanto o segundo ataque bônus pelas habilidades *Mão da Cura* ou *Mão do Dano* sem precisar gastar pontos de Ki adicionais por elas."
      },
      {
        "level": 17,
        "name": "Toque do Retorno (*****Hand of Ultimate Mercy*****)",
        "detail": "Com uma ação, você toca o cadáver de uma criatura que morreu nas últimas 24 horas. Você gasta 5 pontos de Ki. A criatura retorna à vida com 1 ponto de vida e livre de quaisquer condições prejudiciais (1 vez por descanso longo)."
      }
    ],
    "Caminho do Eu Astral": [
      {
        "level": 3,
        "name": "Braços do Eu Astral",
        "detail": "Com uma ação bônus, gasta 1 ponto de Ki para invocar braços espectrais. Criaturas próximas sofrem dano de força se falharem num teste de Destreza. Por 10 minutos, os braços te dão: alcance de +1,5m em ataques desarmados, causam dano de força e permitem usar seu modificador de Sabedoria no acerto e dano (em vez de Força ou Destreza)."
      },
      {
        "level": 6,
        "name": "Visagem do Eu Astral",
        "detail": "Com uma ação bônus (ou junto com os braços), gasta 1 ponto de Ki para invocar um elmo espectral por 10 minutos. Ele te dá: enxergar perfeitamente no escuro mágico e normal por 36m, vantagem em testes de Intuição e Percepção, e permite projetar sua voz para ser ouvido a quilômetros."
      },
      {
        "level": 11,
        "name": "Corpo do Eu Astral",
        "detail": "Quando você tem os braços e o elmo ativos ao mesmo tempo, você ganha novos bônus:\n- Deflexão de Energia: Usa sua reação para reduzir danos de Fogo, Gelo, Ácido, Eletricidade ou Trovão sofridos em um valor igual a 1d10 + mod. Sabedoria.\n- Armadura Astral: Uma vez por turno, quando acerta um ataque com seus braços astráticos, causa o dano do seu dado de artes marciais extra."
      },
      {
        "level": 17,
        "name": "Eu Astral Desperto",
        "detail": "Com uma ação bônus, gasta 5 pontos de Ki para invocar a armadura astral completa por 10 minutos. Você ganha +2 na CA, ganha 3 ataques no total sempre que usar a ação de Ataque no seu turno (em vez de 2), e se uma criatura morrer perto de você, você recupera Ki."
      }
    ],
    "Caminho do Dragão Ascendente": [
      {
        "level": 3,
        "name": "Discípulo Dracônico",
        "detail": "Sempre que acertar um ataque desarmado, você pode mudar o tipo de dano para Ácido, Fogo, Gelo, Eletricidade ou Veneno. Aprende a falar Dracônico."
      },
      {
        "level": 3,
        "name": "Baforada do Dragão",
        "detail": "Quando faz a ação de Ataque, você pode substituir um dos seus ataques por uma baforada em cone de 6m ou linha de 9m. Alvos fazem teste de Destreza e sofrem dano do elemento escolhido igual a duas rolagens do seu dado de artes marciais (usos iguais à Proficiência; pode recarregar gastando 2 Ki)."
      },
      {
        "level": 6,
        "name": "Asas Desfraldadas (*****Wings Unfurled*****)",
        "detail": "Sempre que você usar o seu *Passo Passo* (*Step of the Wind* - ação bônus de Ki para disparar/pular), você ganha deslocamento de voo igual ao seu deslocamento terrestre até o final do turno atual (usos iguais à Proficiência)."
      },
      {
        "level": 11,
        "name": "Aspecto Dracônico",
        "detail": "Com uma ação bônus, você cria uma aura de 9 metros por 1 minuto. Você e aliados ganham resistência a um elemento escolhido. Além disso, se um inimigo te acertar na aura, sofre dano elemental (1 vez de graça por descanso longo, ou gastando 3 Ki)."
      },
      {
        "level": 17,
        "name": "Fúria Dracônica",
        "detail": "Suas baforadas do nível 3 aumentam de tamanho e causam mais dano. Além disso, quando você ativa seu *Aspecto Dracônico (Nvl 11)*, você cria uma grande explosão elemental ao seu redor causando muito dano aos inimigos na área."
      }
    ]
  },
  "paladino": {
    "Juramento de Devoção": [
      {
        "level": 3,
        "name": "Magias do Juramento",
        "detail": "*Proteção contra o Bem e Mal*, *Santuário*, *Zona da Verdade*, *Luz Alva*, etc."
      },
      {
        "level": 3,
        "name": "Canalizar Divindade (Duas Opções)",
        "detail": "- Arma Sagrada: Com uma ação bônus, adiciona seu modificador de Carisma nas jogadas de ataque com sua arma por 1 minuto e ela emite luz solar.\n- Afastar o Profano: Força mortos-vivos e corruptores (*fiends*) a até 9m a fugirem se falharem num teste de Sabedoria."
      },
      {
        "level": 7,
        "name": "Aura de Devoção",
        "detail": "Você e aliados a até 3 metros se tornam imunes à condição Enfeitiçado (*Charmed*)."
      },
      {
        "level": 15,
        "name": "Pureza de Espírito",
        "detail": "Você fica sob o efeito permanente da magia *Proteção contra o Bem e Mal* (inimigos como aberrações, corruptores e mortos-vivos atacam você com desvantagem)."
      },
      {
        "level": 20,
        "name": "Halo Sagrado",
        "detail": "Com uma ação, você brilha como o sol por 1 minuto. Você emana luz solar que causa 10 de dano radiante automático por turno a inimigos próximos e ganha vantagem em testes de resistência contra magias de corruptores ou mortos-vivos."
      }
    ],
    "Juramento dos Anciões": [
      {
        "level": 3,
        "name": "Magias do Juramento",
        "detail": "*Falar com Animais*, *Enredar*, *Passo Nebuloso*, *Pele de Árvore*, *Tempestade de Gelo*, etc."
      },
      {
        "level": 3,
        "name": "Canalizar Divindade (Duas Opções)",
        "detail": "- Ira da Natureza: Usa sua ação para fazer com que videiras brotem do chão e deixem um inimigo a até 3m Agarrado (*Restrained*) se ele falhar em Força ou Destreza.\n- Afastar os Infiéis: Força criaturas do tipo Feérico (*Fey*) e Corruptor a fugirem se falharem num teste de Sabedoria."
      },
      {
        "level": 7,
        "name": "Aura de Proteção de Feitiços",
        "detail": "Você e aliados a até 3 metros ganham resistência a danos causados por magias (reduz qualquer dano de magia pela metade)."
      },
      {
        "level": 15,
        "name": "Sentinela Imorrível",
        "detail": "Quando você for reduzido a 0 pontos de vida, você pode escolher cair para 1 ponto de vida em vez disso (1 vez por descanso longo). Além disso, você não sofre os efeitos colaterais da velhice e não pode ser envelhecido magicamente."
      },
      {
        "level": 20,
        "name": "Campeão Ancião",
        "detail": "Com uma ação bônus, você assume uma forma de árvore/folhas por 1 minuto. Você recupera 10 de vida no início de cada turno, pode conjurar magias de paladino com a ação bônus (em vez de ação) e inimigos próximos têm desvantagem contra suas magias."
      }
    ],
    "Juramento de Vingança": [
      {
        "level": 3,
        "name": "Magias do Juramento",
        "detail": "*Marca do Caçador*, *Bane*, *Passo Nebuloso*, *Imobilizar Pessoa*, *Velocidade*, *Banimento*, etc."
      },
      {
        "level": 3,
        "name": "Canalizar Divindade (Duas Opções)",
        "detail": "- Abjurar Inimigo: Assusta um inimigo a até 18m. Se ele falhar em Sabedoria, fica Amedrontado e seu deslocamento cai para 0.\n- Voto de Encrenca (*Vow of Enmity*): Com uma ação bônus, escolhe um inimigo a até 10 metros. Você ganha vantagem em todas as jogadas de ataque contra ele por 1 minuto ou até ele morrer."
      },
      {
        "level": 7,
        "name": "Vingador Relentless",
        "detail": "Quando você acerta um ataque de oportunidade, você pode se mover por até metade do seu deslocamento imediatamente como parte da mesma reação, sem provocar ataques de oportunidade do inimigo."
      },
      {
        "level": 15,
        "name": "Alma da Vingança",
        "detail": "Quando o alvo do seu *Voto de Encrenca (Nvl 3)* faz um ataque, você pode usar sua reação para fazer um ataque de arma corpo a corpo contra ele se ele estiver ao seu alcance."
      },
      {
        "level": 20,
        "name": "Anjo da Vingança",
        "detail": "Com uma ação, você ganha asas e uma aura de terror por 1 hora. Você ganha deslocamento de voo de 18 metros e inimigos que começarem o turno perto de você ficam amedrontados e dão vantagem para seus aliados atacarem."
      }
    ],
    "Juramento da Conquista": [
      {
        "level": 3,
        "name": "Magias do Juramento",
        "detail": "*Armadura de Agathys*, *Comando*, *Segurar Pessoa*, *Medo*, *Praga de Insetos*, etc."
      },
      {
        "level": 3,
        "name": "Canalizar Divindade (Duas Opções)",
        "detail": "- Presença Conquistadora: Força todas as criaturas à sua escolha a até 9m a passarem num teste de Sabedoria ou ficam Amedrontadas por 1 minuto.\n- Golpe Guiado: Dá +10 de bônus em uma jogada de ataque sua (pode decidir usar após ver o resultado do dado)."
      },
      {
        "level": 7,
        "name": "Aura de Conquista",
        "detail": "Inimigos que estiverem Amedrontados por você e entrarem a até 3m de você têm o deslocamento reduzido para 0 e sofrem dano psíquico automático igual a metade do seu nível de paladino no início do turno deles."
      },
      {
        "level": 15,
        "name": "Represália Macabra (*****Scornful Rebuke*****)",
        "detail": "Sempre que uma criatura te acertar com um ataque, ela sofre dano psíquico automático igual ao seu modificador de Carisma (passivo, sem gastar ações ou reações)."
      },
      {
        "level": 20,
        "name": "Invencível Conquistador",
        "detail": "Com uma ação, vira um avatar de batalha por 1 minuto. Você ganha resistência a todos os danos, pode fazer um ataque adicional sempre que usar a ação de Ataque no seu turno, e seus ataques marciais conseguem acerto crítico com resultado 19 ou 20."
      }
    ],
    "Juramento da Redenção": [
      {
        "level": 3,
        "name": "Magias do Juramento",
        "detail": "*Santuário*, *Sono*, *Pele de Árvore*, *Invisibilidade*, *Contra-Heitiço*, *Destruição Estonteante*, etc."
      },
      {
        "level": 3,
        "name": "Canalizar Divindade (Duas Opções)",
        "detail": "- Emissário da Paz: Dá +5 de bônus em todos os seus testes de Carisma (Persuasão) pelos próximos 10 minutos.\n- Rebater Violência (*Rebuke the Violent*): Quando um inimigo a até 9m causa dano a um aliado seu, você usa sua reação para forçá-lo a um teste de Sabedoria. Se falhar, ele sofre dano radiante igual ao dano exato que ele causou ao seu aliado (metade se passar)."
      },
      {
        "level": 7,
        "name": "Aura do Sacrifício",
        "detail": "Quando um aliado a até 3 metros de você sofre dano, você pode usar sua reação para absorver magicamente todo o dano no lugar dele. Esse dano não pode ser reduzido por nenhuma resistência sua."
      },
      {
        "level": 15,
        "name": "Espírito Protetor",
        "detail": "No final do seu turno em combate, se você estiver com menos da metade dos seus pontos de vida máximos, você recupera vida igual a 1d6 + metade do seu nível de paladino. Não funciona se estiver com 0 de vida."
      },
      {
        "level": 20,
        "name": "Emissário da Redenção",
        "detail": "Você ganha resistência permanente a todos os danos causados por outras criaturas. Sempre que um inimigo te acertar com um ataque, ele sofre dano de força igual a metade do dano que te causou. (Esses benefícios somem contra uma criatura específica se você atacá-la ou conjurar uma magia nociva nela)."
      }
    ],
    "Juramento da Coroa": [
      {
        "level": 3,
        "name": "Magias do Juramento",
        "detail": "*Desafio Compelido*, *Comando*, *Vínculo Protetor*, *Espíritos Guardiões*, etc."
      },
      {
        "level": 3,
        "name": "Canalizar Divindade (Duas Opções)",
        "detail": "- Desafio do Campeão: Emite um brado. Inimigos a até 9m fazem teste de Sabedoria; se falharem, não podem se afastar mais do que 9 metros de você.\n- Maré de Energia: Cura criaturas aliadas à sua escolha a até 9m em uma quantidade igual a 1d6 + mod. Carisma (só afeta aliados com menos da metade da vida total)."
      },
      {
        "level": 7,
        "name": "Aliança Divina (*****Divine Allegiance*****)",
        "detail": "Quando um aliado a até 1,5 metro de você sofre dano, você usa sua reação para absorver magicamente todo o dano no lugar dele (o dano não pode ser reduzido)."
      },
      {
        "level": 15,
        "name": "Coragem Inabalável",
        "detail": "Você ganha vantagem em testes de resistência para evitar ficar Paralisado ou Atordoado."
      },
      {
        "level": 20,
        "name": "Campeão Lendário",
        "detail": "Com uma ação, vira o defensor supremo por 1 hora. Você ganha resistência a danos físicos não-mágicos, seus aliados ganham vantagem em testes de resistência contra a morte a até 9m de você, e você ganha vantagem em testes de resistência de Sabedoria."
      }
    ],
    "Juramento da Glória": [
      {
        "level": 3,
        "name": "Magias do Juramento",
        "detail": "*Auxílio*, *Guiar Ataque*, *Aumentar Atributo*, *Velocidade*, *Compulsão*, etc."
      },
      {
        "level": 3,
        "name": "Canalizar Divindade (Duas Opções)",
        "detail": "- Atleta Inigualável: Com uma ação bônus, você dobra sua capacidade de carga, ganha vantagem em Atletismo/Acrobacia e aumenta a distância de seus saltos em 3 metros por 10 minutos.\n- Golpe Inspirador: Quando você causa dano a um alvo com seu *Destruição Divina* (*Divine Smite*), você distribui 2d8 + nível de paladino de pontos de vida temporários entre aliados a até 9 metros."
      },
      {
        "level": 7,
        "name": "Aura de Alacridade",
        "detail": "O seu deslocamento terrestre e o de qualquer aliado que começar o turno a até 1,5 metro de você aumenta em +3 metros naquele turno (o alcance da aura sobe para 3 metros no nível 18)."
      },
      {
        "level": 15,
        "name": "Defesa Gloriosa",
        "detail": "Quando você ou um aliado próximo sofre um ataque, você usa sua reação para rolar 1d8 e somar na CA do alvo. Se o ataque errar por causa disso, você pode fazer um ataque de arma contra o atacante como parte da mesma reação."
      },
      {
        "level": 20,
        "name": "Lenda Viva",
        "detail": "Com uma ação bônus, você entra no ápice heroico por 1 minuto. Você ganha vantagem em todos os testes de Carisma, pode transformar um ataque que errou em um acerto automático uma vez por turno, e se falhar num teste de resistência, pode usar sua reação para rolar de novo."
      }
    ],
    "Juramento da Vigilância": [
      {
        "level": 3,
        "name": "Magias do Juramento",
        "detail": "*Alarme*, *Detectar Magia*, *Passo Nebuloso*, *Ver o Invisível*, *Contra-Feitiço*, *Banimento*, etc."
      },
      {
        "level": 3,
        "name": "Canalizar Divindade (Duas Opções)",
        "detail": "- Vontade do Vigilante: Com uma ação, concede vantagem em testes de resistência de Inteligência, Sabedoria e Carisma para você e aliados (até seu mod. de Carisma) por 1 minuto.\n- Abjurar o Extraplanar: Força aberrações, celestiais, elementais, feéricos e corruptores a fugirem se falharem num teste de Sabedoria."
      },
      {
        "level": 7,
        "name": "Aura do Sentinela",
        "detail": "Você e aliados a até 3 metros ganham um bônus permanente na Iniciativa igual ao seu bônus de Proficiência."
      },
      {
        "level": 15,
        "name": "Retaliação Vigilante",
        "detail": "Quando você ou um aliado próximo passa com sucesso em um teste de resistência contra uma magia ou habilidade, você usa sua reação para causar 2d8 + mod. Carisma de dano de força automático no conjurador inimigo."
      },
      {
        "level": 20,
        "name": "Baluarte Mortal",
        "detail": "Com uma ação, assume uma forma protetora por 1 minuto. Você ganha Visão Verdadeira (*Truesight*) de 36 metros, ganha vantagem em todas as jogadas de ataque contra extraplanares, e quando bane uma criatura com uma magia, ela sofre dano de força massivo."
      }
    ],
    "Quebrador de Juramento": [
      {
        "level": 3,
        "name": "Magias do Juramento",
        "detail": "*Repreensão Infernal*, *Infringir Ferimentos*, *Coroa da Loucura*, *Animar Mortos*, *Besta de Carga*, etc."
      },
      {
        "level": 3,
        "name": "Canalizar Divindade (Duas Opções)",
        "detail": "- Controlar Morto-Vivo: Força um morto-vivo visível (com ND menor que seu nível de paladino) a um teste de Sabedoria; se falhar, ele obedece todos os seus comandos pelas próximas 24 horas.\n- Aspecto Terrível: Força todas as criaturas à sua escolha a até 9m a passarem num teste de Sabedoria ou ficam Amedrontadas por 1 minuto."
      },
      {
        "level": 7,
        "name": "Aura de Ódio",
        "detail": "Você, além de qualquer morto-vivo ou corruptor a até 3 metros de você, adiciona seu modificador de Carisma como dano bônus em todos os ataques corpo a corpo com armas. (Cuidado: afeta monstros inimigos desses tipos também!)."
      },
      {
        "level": 15,
        "name": "Fuga Sobrenatural",
        "detail": "Você ganha resistência a danos físicos não-mágicos (concussão, perfuração e cortante)."
      },
      {
        "level": 20,
        "name": "Senhor do Pavor",
        "detail": "Com uma ação, emana uma aura de sombras de 9 metros por 1 minuto. Inimigos na área têm o ataque reduzido pela metade se falharem em Sabedoria, sofrem 4d10 de dano necrótico automático por turno, e mortos-vivos aliados atacam com vantagem."
      }
    ]
  },
  "patrulheiro": {
    "Caçador": [
      {
        "level": 3,
        "name": "Presa do Caçador (Escolha uma opção permanente)",
        "detail": "- Matador de Colossos: Uma vez por turno, quando você acerta uma criatura com um ataque de arma e ela está com menos do que a vida máxima, você causa +1d8 de dano extra.\n- Cortador de Hordas: Uma vez por turno, quando você faz um ataque com arma, pode fazer um ataque extra com a mesma arma contra uma segunda criatura adjacente ao alvo original.\n- Matador de Gigantes: Quando uma criatura Grande ou maior erra um ataque contra você a até 1,5m, você usa sua reação para atacá-la imediatamente."
      },
      {
        "level": 7,
        "name": "Táticas Defensivas (Escolha uma opção permanente)",
        "detail": "Ganha um bônus defensivo contra ataques de oportunidade, vantagem contra ser amedrontado, ou faz com que ataques subsequentes do mesmo inimigo contra você no mesmo turno tenham -4 de penalidade."
      },
      {
        "level": 11,
        "name": "Ataque Multiplo (Escolha uma opção permanente)",
        "detail": "- Ataque de Salva: Usa sua ação para disparar uma flecha contra qualquer número de criaturas dentro de um círculo de 3 metros de raio a distância.\n- Ataque Giratório: Usa sua ação para fazer um ataque corpo a corpo contra qualquer número de criaturas a até 1,5 metro de você."
      },
      {
        "level": 15,
        "name": "Defesa do Caçador (Escolha uma opção permanente)",
        "detail": "Ganha a habilidade *Evasão* (não sofre dano se passar em testes de Reflexos contra áreas como *Bola de Fogo*), esquiva misteriosa para reduzir danos pela metade, ou impõe desvantagem no ataque do inimigo usando sua reação."
      }
    ],
    "Mestre das Feras": [
      {
        "level": 3,
        "name": "Companheiro Primal",
        "detail": "Você invoca magicamente o espírito de uma fera que assume uma forma física: Besta da Terra (tanque/investida), Besta do Mar (nadadora/constritora) ou Besta do Ar (voadora/bater e correr). Ela age logo após o seu turno. Você pode gastar um de seus ataques para ordenar que ela ataque, ou usar uma ação bônus para comandá-la."
      },
      {
        "level": 7,
        "name": "Treinamento Excepcional",
        "detail": "Os ataques da sua fera passam a contar como armas mágicas. Além disso, se você não ordenar que ela ataque, você pode usar sua ação bônus para fazer com que ela use as ações Disparar (*Dash*), Desengajar ou Ajudar no turno dela."
      },
      {
        "level": 11,
        "name": "Fúria da Fera",
        "detail": "Quando você ordena que seu companheiro animal use a ação de Ataque, ele passa a fazer dois ataques em vez de apenas um."
      },
      {
        "level": 15,
        "name": "Compartilhar Magias",
        "detail": "Quando você conjura uma magia que alveja a si mesmo (como uma cura ou buff), você pode fazer com que a magia afete também o seu companheiro animal simultaneamente, desde que ele esteja a até 9 metros de você."
      }
    ],
    "Perseguidor das Sombras": [
      {
        "level": 3,
        "name": "Magias",
        "detail": "*Disparar em Longa Distância*, *Truque de Corda*, *Medo*, *Movimentação Livre*, *Aparência Enganosa*."
      },
      {
        "level": 3,
        "name": "Emboscada de Alacridade (*****Dread Ambusher*****)",
        "detail": "Você adiciona seu modificador de Sabedoria na sua iniciativa. Na primeira rodada de qualquer combate, seu deslocamento aumenta em +3 metros e, se usar a ação de Ataque, você faz um ataque extra que causa +1d8 de dano adicional."
      },
      {
        "level": 3,
        "name": "Vista Umbral (*****Umbral Sight*****)",
        "detail": "Você ganha Visão no Escuro de 18 metros (se já tiver, ela aumenta em +9m). Além disso, enquanto você estiver na escuridão total, você fica completamente Invisível para qualquer criatura que dependa de Visão no Escuro para te enxergar."
      },
      {
        "level": 7,
        "name": "Mente de Ferro",
        "detail": "Você ganha proficiência em testes de resistência de Sabedoria. Se já possuir, ganha em Inteligência ou Carisma (à sua escolha)."
      },
      {
        "level": 11,
        "name": "Flurry do Conjurador (*****Stalker's Flurry*****)",
        "detail": "Uma vez em cada um dos seus turnos, se você fizer um ataque com arma e errar a jogada, você pode simplesmente fazer outro ataque com arma como parte da mesma ação."
      },
      {
        "level": 15,
        "name": "Esquiva Sombria",
        "detail": "Quando uma criatura te ataca e não tem vantagem na jogada, você usa sua reação para impor desvantagem no ataque do inimigo antes de ver o resultado."
      }
    ],
    "Andarilho do Horizonte": [
      {
        "level": 3,
        "name": "Magias",
        "detail": "*Proteção contra o Bem e Mal*, *Passo Nebuloso*, *Acelerar*, *Banimento*, *Passo Estelar*."
      },
      {
        "level": 3,
        "name": "Sentido Planar",
        "detail": "Com uma ação, você detecta magicamente a localização exata de qualquer portal planar que esteja a até 1,5 quilômetro de você por 1 minuto."
      },
      {
        "level": 3,
        "name": "Força Planar (*****Planar Warrior*****)",
        "detail": "Com uma ação bônus, você escolhe um inimigo a até 9 metros. O próximo ataque que você acertar nele no mesmo turno tem todo o dano transformado em Dano de Força e causa +1d8 de dano extra (sobe para 2d8 no nível 11)."
      },
      {
        "level": 7,
        "name": "Passo Etéreo",
        "detail": "Com uma ação bônus, você conjura a magia *Passeio Etéreo* (*Etherealness*) sem gastar espaços de magia, mas ela termina no final do seu turno atual (perfeito para atravessar paredes ou escapar de armadilhas)."
      },
      {
        "level": 11,
        "name": "Golpe Distante (*****Distant Strike*****)",
        "detail": "Quando você usa a ação de Ataque, você ganha a habilidade de se teletransportar por até 3 metros antes de cada um dos seus ataques. Se você atacar duas criaturas diferentes com essa ação, você ganha um terceiro ataque adicional contra uma terceira criatura."
      },
      {
        "level": 15,
        "name": "Defesa Astral",
        "detail": "Quando você sofre dano de um ataque, você usa sua reação para ganhar resistência a todos os danos daquele ataque específico, reduzindo o dano sofrido pela metade."
      }
    ],
    "Caçador de Monstros": [
      {
        "level": 3,
        "name": "Magias",
        "detail": "*Proteção contra o Bem e Mal*, *Zona da Verdade*, *Círculo de Proteção*, *Banimento*, *Retenção de Monstro*."
      },
      {
        "level": 3,
        "name": "Sentido do Caçador",
        "detail": "Com uma ação, olha para uma criatura a até 18m. O Mestre lhe diz instantaneamente se o alvo possui imunidades, resistências ou vulnerabilidades a danos e quais são elas (usos iguais à Sabedoria)."
      },
      {
        "level": 3,
        "name": "Presa do Matador (*****Slayer's Prey*****)",
        "detail": "Com uma ação bônus, designa uma criatura a até 18m. O primeiro ataque que você acertar nela em cada um dos seus turnos causa +1d6 de dano extra."
      },
      {
        "level": 7,
        "name": "Defesa Sobrenatural",
        "detail": "Quando o alvo da sua *Presa do Matador* te força a fazer um teste de resistência ou tenta te agarrar, você rola um 1d6 extra e adiciona o resultado ao seu teste de salvamento ou fuga."
      },
      {
        "level": 11,
        "name": "Nêmesis do Conjurador",
        "detail": "Quando uma criatura visível a até 18m tenta se teletransportar ou conjurar uma magia, você usa sua reação para forçá-la a um teste de Sabedoria. Se ela falhar, a magia ou o teletransporte dela é anulado e falha automaticamente (1 vez por descanso curto/longo)."
      },
      {
        "level": 15,
        "name": "Contra-ataque do Matador",
        "detail": "Se o alvo da sua *Presa do Matador* te forçar a fazer um teste de resistência, você usa sua reação para fazer um ataque de arma imediato contra ele antes de rolar o teste. Se o seu ataque acertar, você passa automaticamente no teste de resistência."
      }
    ],
    "Guardião do Enxame": [
      {
        "level": 3,
        "name": "Magias",
        "detail": "*Mãos Mágicas* (truque), *Fada do Fogo*, *Teia*, *Forma Gaseificada*, *Olho Arcano*, *Praga de Insetos*."
      },
      {
        "level": 3,
        "name": "Enxame Coletivo",
        "detail": "Uma vez por turno, ao acertar uma criatura com um ataque de arma, você comanda seu enxame para aplicar um efeito:\n- O alvo sofre +1d6 de dano de força extra.\n- O alvo faz teste de Força; se falhar, é empurrado 4,5 metros em linha reta.\n- O enxame te arrasta, te movendo 1,5 metro para qualquer espaço livre sem provocar ataques de oportunidade."
      },
      {
        "level": 7,
        "name": "Deslocamento Fretado",
        "detail": "Você ganha deslocamento de voo flutuante de 3 metros e pode pairar no ar. Dura por 1 minuto e pode usar um número de vezes igual ao seu bônus de Proficiência por descanso longo."
      },
      {
        "level": 11,
        "name": "Tempestade do Enxame",
        "detail": "O dano de força do seu enxame aumenta para 1d8. Quando ele empurra um inimigo, o alvo também fica Caído (*Prone*). Além disso, você pode explodir seu enxame em uma nuvem de 3m que deixa inimigos cegos e dá cobertura para aliados."
      },
      {
        "level": 15,
        "name": "Dispersão do Enxame",
        "detail": "Quando você sofre dano, você usa sua reação para se desmaterializar temporariamente no seu enxame. Você ganha resistência contra aquele dano e se teletransporta por até 9 metros para um espaço livre visível."
      }
    ],
    "Andarilho Feérico": [],
    "Guardião de Dragões": [
      {
        "level": 3,
        "name": "Magias e Habilidades",
        "detail": "Aprende o truque *Taumaturgia* e o idioma Dracônico."
      },
      {
        "level": 3,
        "name": "Invocar Dragão Companheiro",
        "detail": "Com uma ação, invoca um Drake Pequeno. Você escolhe a essência elemental dele (Ácido, Fogo, Gelo, Eletricidade ou Veneno). Ele ataca com sua ação bônus e, como reação, infunde o ataque de um aliado próximo com +1d6 de dano do elemento escolhido."
      },
      {
        "level": 7,
        "name": "Vínculo de Escamas",
        "detail": "O seu Drake cresce para o tamanho Médio e ganha dentes elementais (+1d6 de dano no soco). Você pode usá-lo como montaria terrestre. Além disso, você ganha resistência permanente ao tipo de elemento atual do seu dragão."
      },
      {
        "level": 11,
        "name": "Sopro do Dragão",
        "detail": "Você ou o seu dragão podem usar uma ação para disparar uma baforada em cone de 9m ou linha de 18m. Alvos sofrem 8d6 de dano elemental (Fogo, Gelo, Ácido, etc.) se falharem num teste de Destreza (1 vez de graça ou gastando espaço de magia de nvl 3+)."
      },
      {
        "level": 15,
        "name": "Vínculo Perfeito",
        "detail": "O seu Drake cresce para o tamanho Grande, ganha deslocamento de voo de 12 metros e você pode montá-lo no ar. O dano da reação dele aumenta para +2d6 e, se você ou o dragão sofrerem dano a até 9m um do outro, você usa sua reação para dar resistência a esse dano para o alvo afetado."
      }
    ]
  },
  "bruxo": {
    "A Bruxa do Arquifada": [
      {
        "level": 1,
        "name": "Presença Feérica",
        "detail": "Com uma ação, força criaturas em um cubo de 3 metros a passarem num teste de Sabedoria ou ficam Enfeitiçadas ou Amedrontadas por você até o fim do seu próximo turno (1 vez por descanso curto/longo)."
      },
      {
        "level": 6,
        "name": "Fuga Nebulosa",
        "detail": "Quando você sofre dano, você usa sua reação para ficar Invisível e se teletransportar por até 18 metros. A invisibilidade dura até o início do seu próximo turno (1 vez por descanso curto/longo)."
      },
      {
        "level": 10,
        "name": "Defesa Beguiling",
        "detail": "Você se torna imune à condição Enfeitiçado. Se uma criatura tentar te enfeitiçar e falhar, você usa sua reação para redirecionar o efeito, forçando-a a ficar enfeitiçada por você por 1 minuto."
      },
      {
        "level": 14,
        "name": "Delírio Sombrio",
        "detail": "Com uma ação, você prende uma criatura em uma ilusão mental de 1 minuto. O alvo fica Amedrontado ou Enfeitiçado por você (à sua escolha) e enxerga a si mesmo preso em um cenário ilusório, ficando incapacitado para o mundo real."
      }
    ],
    "O Corruptor": [
      {
        "level": 1,
        "name": "Bênção do Obscuro",
        "detail": "Ganha pontos de vida temporários sempre que reduzir uma criatura hostil a 0 pontos de vida."
      },
      {
        "level": 6,
        "name": "Sorte do Corruptor",
        "detail": "Adiciona 1d10 a um teste de habilidade ou resistência (1 vez por descanso curto/longo)."
      },
      {
        "level": 10,
        "name": "Resiliência Infernal",
        "detail": "Escolha um tipo de dano após um descanso; você ganha resistência a ele até mudar no próximo descanso."
      },
      {
        "level": 14,
        "name": "Enviado pelo Inferno (*****Hurl Through Hell*****)",
        "detail": "Ao acertar um ataque, bane o alvo temporariamente pelos infernos. Ele some por 1 turno e retorna sofrendo 10d10 de dano psíquico."
      }
    ],
    "O Grande Antigo": [
      {
        "level": 1,
        "name": "Despertar da Mente",
        "detail": "Você pode se comunicar telepaticamente com qualquer criatura visível a até 9 metros, mesmo que não compartilhem um idioma."
      },
      {
        "level": 6,
        "name": "Proteção Entrópica",
        "detail": "Quando uma criatura te ataca, você usa sua reação para impor desvantagem no ataque dela. Se ela errar, sua próxima jogada de ataque contra ela ganha vantagem (1 vez por descanso curto/longo)."
      },
      {
        "level": 10,
        "name": "Escudo do Pensamento",
        "detail": "Sua mente não pode ser lida por telepatia. Você ganha resistência a dano psíquico e, sempre que sofrer dano psíquico, o atacante sofre a mesma quantidade de dano automaticamente."
      },
      {
        "level": 14,
        "name": "Criar Servo",
        "detail": "Você pode usar sua ação para tocar uma criatura incapacitada. Ela fica Enfeitiçada por você permanentemente e uma ligação telepática é criada entre vocês em qualquer distância, até que uma magia remova a maldição."
      }
    ],
    "A Lâmina Maldita": [
      {
        "level": 1,
        "name": "Proficiências Extras",
        "detail": "Ganha proficiência com armaduras médias, escudos e armas marciais."
      },
      {
        "level": 1,
        "name": "Maldição da Lâmina Maldita (*****Hexblade's Curse*****)",
        "detail": "Com uma ação bônus, amaldiçoa um alvo por 1 minuto: você adiciona seu bônus de Proficiência no dano contra ele, seus ataques conseguem crítico com 19 ou 20 no d20, e se ele morrer, você recupera vida (1 vez por descanso curto/longo)."
      },
      {
        "level": 1,
        "name": "Guerreiro Hex",
        "detail": "Permite que você use seu modificador de Carisma nas jogadas de acerto e dano com uma arma de uma mão (em vez de Força ou Destreza)."
      },
      {
        "level": 6,
        "name": "Espectro Amaldiçoado",
        "detail": "Quando você mata uma criatura humanoide, você pode aprisionar a alma dela para erguer um Espectro aliado. O espectro obedece seus comandos e some no seu próximo descanso longo (1 vez por descanso longo)."
      },
      {
        "level": 10,
        "name": "Armadura de Linhas Temporais",
        "detail": "Quando o alvo da sua *Maldição* te acerta com um ataque, você rola um d6 como reação; se tirar 4 ou mais, o ataque inimigo erra você automaticamente, errando o golpe na armadura fantasma."
      },
      {
        "level": 14,
        "name": "Mestre das Maldições",
        "detail": "Você passa a poder transferir a sua Maldição para um novo alvo visível a até 9 metros sempre que o alvo atual morrer, permitindo mantê-la ativa por vários combates sem gastar novos usos."
      }
    ],
    "O Celestial": [
      {
        "level": 1,
        "name": "Truques Adicionais",
        "detail": "Você aprende os truques *Chama Sagrada* (*Sacred Flame*) e *Luz* de graça."
      },
      {
        "level": 1,
        "name": "Luz Curativa (*****Healing Light*****)",
        "detail": "Você ganha uma reserva de dados d6 (igual a 1 + seu nível de bruxo). Com uma ação bônus, pode gastar até o seu modificador de Carisma em dados para curar um aliado visível a até 18 metros. Recupera tudo num descanso longo."
      },
      {
        "level": 6,
        "name": "Alma Radiante",
        "detail": "Ganha resistência a dano radiante. Além disso, quando você conjura uma magia que causa dano de fogo ou radiante, você adiciona seu modificador de Carisma ao dano contra um dos alvos."
      },
      {
        "level": 10,
        "name": "Vingança Celestial",
        "detail": "Ao fim de um descanso curto ou longo, você e até 5 aliados ganham pontos de vida temporários. Você ganha vida igual ao seu nível de bruxo + mod. Carisma, e os aliados ganham metade disso."
      },
      {
        "level": 14,
        "name": "Resplandecência Intocável",
        "detail": "Se você cair a 0 pontos de vida e precisar fazer um teste contra a morte, você explode em luz. Você se levanta instantaneamente com metade da sua vida máxima, cega inimigos próximos e causa 2d8 + mod. Carisma de dano radiante neles (1 vez por descanso longo)."
      }
    ],
    "O Gênio": [
      {
        "level": 1,
        "name": "Recipiente do Gênio",
        "detail": "Você ganha um objeto minúsculo (como um anel ou lâmpada). Ele te dá dois poderes:\n- Ira do Gênio: Uma vez por turno, ao acertar um ataque, causa dano elemental extra igual ao seu bônus de Proficiência (o tipo depende do elemento do gênio: Fogo, Gelo, Terra/Ácido ou Ar/Trovão).\n- Respiradouro do Gênio: Com uma ação, você se teletransporta para dentro do seu objeto, encontrando uma sala luxuosa onde pode descansar ou guardar itens."
      },
      {
        "level": 6,
        "name": "Presente Elemental",
        "detail": "Ganha resistência ao dano do elemento do seu gênio. Além disso, com uma ação bônus, você ganha deslocamento de voo de 9 metros por 10 minutos (usos iguais à Proficiência)."
      },
      {
        "level": 10,
        "name": "Santuário do Recipiente",
        "detail": "Quando você entra no seu *Recipiente do Gênio*, você pode levar até 5 aliados junto com você. Se o grupo passar 10 minutos descansando lá dentro, todos ganham os benefícios de um descanso curto completo de forma acelerada."
      },
      {
        "level": 14,
        "name": "Desejo Limitado (*****Limited Wish*****)",
        "detail": "Você pede um desejo menor ao seu gênio. Você escolhe qualquer magia de nível 1 a 5 de qualquer classe do jogo; você a conjura instantaneamente usando uma única ação, ignorando o tempo de conjuração original e sem gastar componentes materiais (1 vez por descanso longo)."
      }
    ],
    "O Morto-Vivo": [
      {
        "level": 1,
        "name": "Forma de Pavor (*****Form of Dread*****)",
        "detail": "Com uma ação bônus, você assume um aspecto aterrorizante por 1 minuto. Você ganha pontos de vida temporários, fica imune a ser amedrontado e, uma vez por turno, ao acertar um inimigo, força um teste de Sabedoria; se ele falhar, fica Amedrontado por você (usos iguais à Proficiência)."
      },
      {
        "level": 6,
        "name": "Toque do Túmulo",
        "detail": "Você não precisa mais comer, beber ou respirar. Além disso, uma vez por turno, quando você causa dano a alguém enquanto está na sua *Forma de Pavor*, você pode transformar o dano do ataque em Dano Necrótico e rolar um dado de dano extra."
      },
      {
        "level": 10,
        "name": "Necrose Inabalável",
        "detail": "Ganha resistência a dano necrótico (vira imunidade se estiver na Forma de Pavor). Se você for reduzido a 0 pontos de vida, você pode explodir seu corpo: cai para 1 de vida em vez disso, e causa 2d10 + nível de bruxo de dano necrótico a criaturas próximas, mas ganha 1 nível de exaustão."
      },
      {
        "level": 14,
        "name": "Projeção Espiritual",
        "detail": "Com uma ação, sua alma se desliga do seu corpo físico por 1 hora. Seu corpo fica paralisado, mas sua alma voa, atravessa paredes, ganha resistência a danos físicos, e sempre que causa dano necrótico, você se cura em uma quantidade igual a metade do dano causado."
      }
    ],
    "O Profundo": [
      {
        "level": 1,
        "name": "Tentáculo das Profundezas",
        "detail": "Com uma ação bônus, invoca um tentáculo de água de 3 metros por 1 minuto. Você usa sua ação bônus em turnos seguintes para mover o tentáculo e atacar inimigos a distância, causando dano de gelo e reduzindo o deslocamento do alvo em 3 metros (usos iguais à Proficiência)."
      },
      {
        "level": 1,
        "name": "Dádiva do Oceano",
        "detail": "Você ganha deslocamento de natação de 12 metros e a habilidade de respirar debaixo d'água perfeitamente."
      },
      {
        "level": 6,
        "name": "Alma Oceânica",
        "detail": "Ganha resistência a dano de gelo. Além disso, quando você ou um aliado próximo sofre dano, você usa a reação do seu *Tentáculo das Profundezas* para erguer um escudo líquido e reduzir o dano sofrido em 1d10 (sobe para 2d10 no nível 10)."
      },
      {
        "level": 10,
        "name": "Amparo de Grasping",
        "detail": "Você aprende a magia *Evard's Black Tentacles* sem gastar espaço de magia. Sempre que a mantiver ativa, você ganha pontos de vida temporários e sua concentração não pode ser quebrada por sofrer dano."
      },
      {
        "level": 14,
        "name": "Mergulho Abissal",
        "detail": "Você abre portais de água concentrada. Com uma ação, você e até 5 aliados voluntários a até 9 metros se dissolvem em água e se teletransportam por até 1,5 quilômetro para qualquer corpo de água que você já tenha visto antes (1 vez por descanso longo)."
      }
    ],
    "O Imortal": [
      {
        "level": 1,
        "name": "Entre os Mortos",
        "detail": "Você aprende o truque *Poupar os Moribundos*. Mortos-vivos hesitam em te atacar: eles devem passar num teste de Sabedoria ou precisam escolher outro alvo (se passarem, ficam imunes pelo dia)."
      },
      {
        "level": 6,
        "name": "Desafiar a Morte",
        "detail": "Sempre que você passar com sucesso em um teste de resistência contra a morte, ou usar o truque *Poupar os Moribundos* para estabilizar um aliado, você recupera pontos de vida iguais a 1d8 + seu modificador de Constituição (1 vez por descanso longo)."
      },
      {
        "level": 10,
        "name": "Natureza Imorredoura",
        "detail": "Você envelhece de forma extremamente lenta (para cada 10 anos passados, seu corpo envelhece apenas 1 ano). Você se torna imune a doenças e não precisa mais respirar, comer ou dormir para sobreviver."
      },
      {
        "level": 14,
        "name": "Retorno Indestrutível",
        "detail": "No seu turno, você pode usar uma ação bônus para curar a si mesmo em uma quantidade de pontos de vida igual a 1d8 + seu nível de bruxo. Você também pode recolocar membros decepados do seu corpo se segurá-los no lugar enquanto usa essa habilidade (1 vez por descanso curto/longo)."
      }
    ]
  }
};

export const subclassAbilities = Object.fromEntries(Object.entries(subclasses).map(([classId, options]) => [classId, Object.fromEntries(options.map((option) => [option.name, (exactSubclassFeatures[classId]?.[option.name] || []).map(({ level, name, detail }) => ({ level, name, detail }))]))]));
