import fs from 'node:fs/promises';
import path from 'node:path';

const root = path.resolve('/tmp/pha2030-aula');

const course = {
  slug: 'pha2030',
  emoji: '🧠',
  title: 'PHA 2030',
  subtitle: 'Da Capacitacao a Transformacao',
  description:
    'Curso completo para preparar pessoas, equipes e empresas para a era da inteligencia aplicada com clareza, criterio, capacidade e escala.',
  trails: [
    {
      id: 1,
      slug: 'trilha1',
      color: 'emerald',
      title: 'Fundamentos do PHA 2030',
      description:
        'Contexto de mercado, tese central, linguagem do PHA 2030 e posicionamento da proposta.',
      duration: '2h 20m',
      level: 'Essencial',
      modules: [
        makeModule(1, 1, 'O momento do mercado de IA', 'Como a IA saiu da fase de novidade e entrou na fase de adocao estruturada.', [
          topic('Ondas do mercado', 'A evolucao de prompts a enterprise', 'O mercado atravessou varias ondas, de prompts a solucoes enterprise. Cada camada ampliou acesso e reduziu a exclusividade tecnica.', 'Sem entender essa sequencia, a leitura de oportunidade fica superficial e presa a modismos.', 'prompts, GPTs, APIs, automacoes, agentes, apps, enterprise'),
          topic('Comoditizacao tecnica', 'Quando o acesso deixa de ser diferencial', 'O acesso as ferramentas ficou mais facil, mais barato e mais distribuido.', 'Isso explica por que vender apenas execucao tecnica tende a perder margem com o tempo.', 'acesso, facilidade, distribuicao, margem, diferencial'),
          topic('Nova fronteira de valor', 'Adocao melhor que fascinacao', 'A fronteira atual de valor esta na capacidade de adocao com metodo e criterio.', 'Quem domina a adocao cria impacto mais duradouro do que quem so demonstra tecnologia.', 'adocao, metodo, criterio, impacto, consistencia'),
          topic('Do hype a capacidade', 'Mudanca de foco do mercado', 'A conversa mais madura sobre IA sai do deslumbre e entra na construcao de capacidade.', 'Esse enquadramento reposiciona a aula como instrumento de evolucao real.', 'hype, capacidade, maturidade, enquadramento, evolucao'),
          topic('Problemas que persistem', 'Sobrecarga, lentidao e retrabalho', 'Mesmo com mais tecnologia disponivel, empresas seguem com excesso, confusao e baixa fluidez.', 'Nomear essas dores ajuda a conectar IA com operacao, e nao com abstracao.', 'sobrecarga, lentidao, retrabalho, dispersao, operacao'),
          topic('Leitura estrategica', 'Oportunidade para quem habilita', 'Quando a tecnologia se populariza, cresce o espaco para quem estrutura aprendizagem e mudanca.', 'Esse e o ponto de partida para o modelo PHA 2030.', 'popularizacao, aprendizagem, mudanca, oportunidade, estrategia'),
        ]),
        makeModule(1, 2, 'Educacao como porta de entrada', 'A capacitacao como inicio da relacao e nao como produto final.', [
          topic('Tese central', 'Educacao abre, transformacao consolida', 'No PHA 2030, a capacitacao gera entrada, confianca e contexto.', 'Essa leitura evita tratar a aula como fim e amplia o desenho comercial.', 'educacao, entrada, confianca, contexto, transformacao'),
          topic('Limite do treinamento isolado', 'Interesse rapido, pouco efeito duradouro', 'Treinamentos soltos geram entusiasmo, mas nem sempre mudam comportamento.', 'Entender essa limitacao ajuda a desenhar uma experiencia com continuidade.', 'entusiasmo, comportamento, continuidade, limitacao, desenho'),
          topic('Confianca antes de profundidade', 'Primeiro clareza, depois diagnostico', 'Uma boa sessao cria linguagem compartilhada e reduz friccao para conversas mais profundas.', 'Isso melhora a qualidade do discovery, da auditoria e da consultoria posterior.', 'clareza, linguagem, friccao, discovery, consultoria'),
          topic('Porta de entrada relacional', 'A aula como inicio de relacao', 'A capacitacao abre portas internas e cria alinhamento inicial entre lideranca e operacao.', 'Sem essa etapa, a execucao costuma entrar em contextos imaturos.', 'relacao, alinhamento, lideranca, operacao, maturidade'),
          topic('Capacitacao com direcao', 'Ensinar com destino definido', 'A aula precisa apontar para criterio, uso real e proximo passo.', 'Quando ha destino claro, o aluno sai orientado e nao apenas impressionado.', 'criterio, uso real, proximo passo, direcao, orientacao'),
          topic('Transformacao como desdobramento', 'Aprendizagem conectada a jornada', 'O ensino ganha valor quando desdobra em diagnostico, trilha, acompanhamento e cultura.', 'Esse encadeamento torna o PHA 2030 mais robusto do que um curso pontual.', 'jornada, diagnostico, trilha, acompanhamento, cultura'),
        ]),
        makeModule(1, 3, 'Potencial Humano Aumentado', 'O conceito central que desloca a conversa da ferramenta para a ampliacao de capacidade.', [
          topic('Definicao do PHA 2030', 'Capacidade humana no centro', 'Potencial Humano Aumentado significa ampliar repertorio, criterio e autonomia com IA.', 'Essa definicao muda o eixo do discurso comercial e pedagogico.', 'potencial, humano, repertorio, criterio, autonomia'),
          topic('Clareza sobre o que se transforma', 'Da curiosidade a performance', 'O PHA 2030 transforma confusao em clareza e uso pontual em cultura.', 'O aluno precisa enxergar a mudanca concreta prometida.', 'clareza, cultura, performance, curiosidade, mudanca'),
          topic('Uso com criterio', 'Quando usar e quando nao usar', 'Nao basta ensinar a ferramenta; e preciso ensinar limite, avaliacao e contexto.', 'Sem criterio, a adocao se torna improvisada e fragil.', 'criterio, limite, avaliacao, contexto, qualidade'),
          topic('Autonomia operacional', 'Menos dependencia de poucos especialistas', 'O objetivo e distribuir capacidade e reduzir gargalos de decisao e execucao.', 'Isso melhora a resiliencia da equipe e amplia a maturidade interna.', 'autonomia, gargalos, distribuicao, resiliencia, maturidade'),
          topic('Capacidade organizacional', 'Pessoa, equipe e empresa', 'O impacto nao para no individuo; ele avanca para fluxos, colaboracao e processos.', 'Essa leitura sustenta a narrativa de transformacao organizacional.', 'individuo, equipe, empresa, processos, colaboracao'),
          topic('Mensagem forte do posicionamento', 'Nao ensinamos so ferramentas', 'O discurso do PHA 2030 afirma que a proposta e preparar humanos para operar o futuro.', 'Essa frase organiza branding, proposta de valor e experiencia do curso.', 'posicionamento, proposta, branding, humanos, futuro'),
        ]),
        makeModule(1, 4, 'Por que habilitar vale mais que executar', 'Comparacao entre o modelo centrado em execucao e o modelo centrado em habilitacao.', [
          topic('Problema do modelo antigo', 'Execucao como dependencia', 'Quando o valor fica preso ao entregavel tecnico, o cliente delega, cobra e pouco aprende.', 'Essa relacao tende a gerar escopo confuso e manutencao pesada.', 'entregavel, dependencia, escopo, manutencao, fornecedor'),
          topic('Fornecedor versus referencia', 'Mudanca de posicionamento', 'Quem so executa tende a ser visto como fornecedor. Quem habilita ocupa espaco de orientacao.', 'Esse salto de posicionamento aumenta autoridade e profundidade de relacao.', 'fornecedor, referencia, autoridade, orientacao, relacao'),
          topic('Escala com menos desgaste', 'Modelo mais leve e recorrente', 'Habilitacao e acompanhamento escalam melhor do que projetos isolados com retrabalho alto.', 'Isso melhora sustentabilidade comercial e margem de operacao.', 'escala, recorrencia, desgaste, sustentabilidade, margem'),
          topic('Educar antes de executar', 'Preparacao melhora a implementacao', 'Clientes mais preparados definem melhor prioridades, expectativas e limites.', 'Isso aumenta a qualidade de qualquer consultoria ou implementacao posterior.', 'preparacao, prioridades, expectativas, limites, qualidade'),
          topic('Abertura de portas internas', 'Mais areas, mais conversas', 'Treinamentos bem conduzidos ampliam visibilidade e permitem acessar outras liderancas e equipes.', 'Isso favorece expansao natural da conta ou da relacao.', 'visibilidade, liderancas, equipes, expansao, conta'),
          topic('Tese comercial final', 'Habilitacao como ativo estrategico', 'A proposta do PHA 2030 transforma a aula em mecanismo de entrada, diagnostico e continuidade.', 'Essa e a base do modelo comercial do curso.', 'ativo, estrategico, entrada, diagnostico, continuidade'),
        ]),
      ],
    },
    {
      id: 2,
      slug: 'trilha2',
      color: 'blue',
      title: 'Diagnostico e Conducao da Sala',
      description:
        'Perfis humanos, discovery, aha moment e estrutura de experiencias de aprendizagem e alinhamento.',
      duration: '2h 30m',
      level: 'Aplicado',
      modules: [
        makeModule(2, 1, 'Os quatro perfis da sala', 'Como ler estados emocionais e niveis de abertura para mudanca.', [
          topic('Ceticos', 'Resistencia, medo e defesa', 'Ceticos podem resistir por receio de substituicao, qualidade ou hype exagerado.', 'Ler essa resistencia evita confronto improdutivo e melhora a conducao.', 'ceticos, medo, qualidade, resistencia, conducao'),
          topic('Champions', 'Aliados que puxam a mudanca', 'Champions ja acreditam no valor da IA e podem funcionar como multiplicadores.', 'Quando bem usados, ajudam a sustentar o avancar da sessao.', 'champions, aliados, multiplicadores, energia, apoio'),
          topic('Iniciantes empolgados', 'Curiosidade alta, estrutura baixa', 'Esse perfil quer aprender rapido, mas se frustra se a sessao pesar demais.', 'Criar vitorias rapidas ajuda a converter entusiasmo em confianca.', 'iniciantes, curiosidade, frustracao, confianca, vitorias'),
          topic('Sobrecarregados', 'Quem precisa de organizacao', 'Pessoas sobrecarregadas ja sabem que precisam aprender, mas estao perdidas em excesso de informacao.', 'Para elas, o valor esta em direcao simples e proximo passo claro.', 'sobrecarga, organizacao, direcao, simplicidade, passo'),
          topic('Conducao por perfil', 'Nao ensinar igual para todos', 'Uma boa sessao cria pontos de entrada diferentes sem perder unidade.', 'Essa habilidade aumenta aderencia e reduz rejeicao.', 'pontos de entrada, aderencia, unidade, rejeicao, didatica'),
          topic('Uso dos perfis na pratica', 'Ler a sala para ajustar o discurso', 'O facilitador precisa adaptar exemplos, ritmo e profundidade conforme o perfil predominante.', 'Sem essa leitura, a sessao pode parecer boa e ainda assim falhar.', 'ritmo, exemplos, profundidade, adaptacao, leitura'),
        ]),
        makeModule(2, 2, 'Discovery antes da entrega', 'As perguntas que precisam ser respondidas antes de qualquer workshop ou demonstracao.', [
          topic('Onde a maioria esta', 'Publico 101 ou 301', 'Mapear o nivel medio da sala evita erros de profundidade.', 'Isso protege a sessao de parecer basica demais ou distante demais.', 'nivel, maioria, profundidade, 101, 301'),
          topic('Grande aha moment', 'Qual demonstracao faria valer a sessao', 'O aha moment precisa ser reconhecivel e ligado a uma necessidade real.', 'Sem isso, a aula pode ficar bonita e irrelevante.', 'aha moment, relevancia, necessidade, valor, percepcao'),
          topic('Quem sao os ceticos', 'Tipo e origem da resistencia', 'Entender se a resistencia e tecnica, cultural ou emocional muda completamente a abordagem.', 'Essa leitura melhora a chance de destravar a adesao.', 'resistencia, tecnica, cultural, emocional, adesao'),
          topic('Tarefas mais dolorosas', 'A dor deve orientar a demo', 'As tarefas mais manuais, lentas ou confusas sao a melhor materia-prima para demonstracao.', 'A demo certa nasce da dor mais reconhecivel da sala.', 'dor, tarefas, demo, relevancia, reconhecimento'),
          topic('Sequencia do discovery', 'Entender antes de montar slides', 'O processo deve comecar pela investigacao, nao pela estetica da apresentacao.', 'Esse e um dos diferenciais metodologicos do PHA 2030.', 'investigacao, slides, metodo, sequencia, preparo'),
          topic('Saidas do discovery', 'Hipotese de sessao e proximo passo', 'O discovery bem feito gera recorte de publico, demonstracao priorizada e proposta de continuidade.', 'Ele e ponte entre conversa inicial e entrega relevante.', 'hipotese, publico, demonstracao, proposta, continuidade'),
        ]),
        makeModule(2, 3, 'Como criar o aha moment', 'Critrios para montar demonstracoes reconheciveis e realmente uteis.', [
          topic('Aha moment nao e show', 'Reconhecimento supera sofisticacao', 'O aha moment acontece quando a pessoa reconhece utilidade imediata e concreta.', 'Isso vale mais do que uma demo tecnicamente impressionante e distante.', 'reconhecimento, utilidade, demo, sofisticacao, distancia'),
          topic('Escolha da dor', 'Comecar pelo gargalo', 'A melhor demonstracao nasce do gargalo que mais incomoda a sala.', 'Essa decisao aumenta adesao e acelera entendimento do valor.', 'gargalo, sala, adesao, valor, decisao'),
          topic('Formato da demonstracao', 'Transformar caos em clareza', 'Boas demos resumem, estruturam, organizam e apoiam decisao.', 'Elas mostram como IA reduz friccao no trabalho real.', 'resumo, estrutura, decisao, friccao, clareza'),
          topic('Dosagem de complexidade', 'Simplicidade e melhor que excesso', 'A demo deve ser simples o bastante para ser replicavel e forte o bastante para parecer relevante.', 'Complexidade excessiva assusta e reduz transferencia.', 'simplicidade, replicacao, complexidade, transferencia, clareza'),
          topic('Narrativa da demo', 'Antes, durante e depois', 'Uma boa demonstracao enquadra o problema, mostra o uso e fecha com aplicacao pratica.', 'Essa narrativa ajuda a mover a pessoa da curiosidade para a capacidade.', 'narrativa, problema, uso, aplicacao, capacidade'),
          topic('Pos-demo', 'Conectar com criterio e proximo passo', 'Depois da demo, e preciso explicar onde usar, quando usar e como comecar.', 'Esse fechamento impede que o efeito morra no encantamento.', 'criterio, proximo passo, aplicacao, fechamento, encantamento'),
        ]),
        makeModule(2, 4, 'Estrutura de aula e workshop', 'Como organizar uma sessao de alto impacto do enquadramento ao fechamento.', [
          topic('Bloco de mentalidade', 'Reposicionar a conversa', 'A abertura mostra que IA nao e apenas hype nem ameaca automatica.', 'Esse enquadramento prepara o terreno para os blocos seguintes.', 'mentalidade, abertura, hype, ameaca, enquadramento'),
          topic('Bloco de diagnostico', 'Nomear a realidade atual', 'Sobrecarga, retrabalho e lentidao precisam ser reconhecidos pela turma.', 'Sem esse bloco, a sessao tende a ficar abstrata.', 'diagnostico, sobrecarga, retrabalho, lentidao, abstracao'),
          topic('Bloco de visao de futuro', 'Apresentar o outro lado do portal', 'Aqui o grupo enxerga como seria operar com mais clareza, autonomia e performance.', 'Essa visao cria contraste e desejo de avancar.', 'futuro, contraste, autonomia, performance, visao'),
          topic('Bloco de demo pratica', 'Provar valor', 'A demonstracao conecta a dor com uma aplicacao visivel e util.', 'Ela funciona como prova de possibilidade.', 'prova, possibilidade, dor, valor, aplicacao'),
          topic('Bloco de aplicacao', 'Onde usar e onde nao usar', 'Esse momento converte impacto em criterio.', 'Sem aplicacao orientada, a sessao perde transferibilidade.', 'aplicacao, criterio, transferibilidade, uso, limite'),
          topic('Bloco de proximos passos', 'Encerrar com direcao', 'A experiencia precisa terminar com um caminho claro para os proximos dias.', 'Esse passo reforca autonomia e continuidade.', 'direcao, continuidade, autonomia, fechamento, proximo passo'),
        ]),
      ],
    },
    {
      id: 3,
      slug: 'trilha3',
      color: 'purple',
      title: 'Jornada de Transformacao e Oferta',
      description:
        'Maturidade de adocao, desenho de continuidade e modelo comercial do PHA 2030.',
      duration: '2h 25m',
      level: 'Estrategico',
      modules: [
        makeModule(3, 1, 'Awareness ate Scale', 'A jornada de maturidade que move pessoas e empresas de curiosas para capazes.', [
          topic('Awareness', 'Contato inicial com o tema', 'Nesse estagio a pessoa ouviu falar, testou pouco e ainda nao confia.', 'Entender esse ponto ajuda a dosar linguagem e expectativa.', 'awareness, contato, curiosidade, expectativa, confianca'),
          topic('Aha moment', 'Percepcao concreta de valor', 'Aqui a pessoa reconhece algo util e entende por que a IA importa.', 'Esse e o gatilho que abre espaco para aprender de verdade.', 'aha moment, valor, utilidade, gatilho, reconhecimento'),
          topic('Capability', 'Uso com repeticao e seguranca', 'A capacidade surge quando o uso passa a ser repetido, orientado e melhor avaliado.', 'Esse e o momento em que a pessoa deixa de apenas testar.', 'capability, repeticao, seguranca, avaliacao, pratica'),
          topic('Independence', 'Autonomia operacional', 'Na independencia, a pessoa ou equipe consegue operar sem depender de conducoes constantes.', 'Esse estagio reduz atrito e aumenta fluidez.', 'independence, autonomia, fluidez, atrito, operacao'),
          topic('Scale', 'Cultura, processo e vantagem', 'A escala aparece quando a organizacao incorpora IA em fluxos, criterio e gestao.', 'Esse e o resultado mais maduro da jornada.', 'scale, cultura, processo, vantagem, organizacao'),
          topic('Uso pedagogico da jornada', 'Ensinar para mover de etapa', 'A aula precisa ser desenhada para deslocar o aluno ao menos um degrau na maturidade.', 'Isso da intencao real ao curso.', 'maturidade, deslocamento, intencao, jornada, ensino'),
        ]),
        makeModule(3, 2, 'O treinamento como entrada relacional', 'Como a primeira entrega abre caminho para conversas mais profundas e recorrentes.', [
          topic('Aula nao e produto final', 'Entrada e nao destino', 'No PHA 2030, a aula inicia a relacao e cria base para desdobramentos.', 'Sem essa visao, o potencial comercial e estrategico diminui.', 'entrada, relacao, desdobramento, base, potencial'),
          topic('Reducao de friccao comercial', 'Comecar leve para aprofundar melhor', 'Uma primeira experiencia bem desenhada reduz barreiras e aumenta confianca.', 'Isso facilita conversas sobre diagnostico e acompanhamento.', 'friccao, confianca, barreiras, diagnostico, acompanhamento'),
          topic('Linguagem compartilhada', 'A turma aprende a nomear o problema', 'Treinamentos estruturados criam vocabulario comum entre lideranca e operacao.', 'Essa clareza melhora a qualidade das decisoes seguintes.', 'linguagem, vocabulario, clareza, decisoes, alinhamento'),
          topic('Sinalizacao de maturidade', 'Quem esta pronto para aprofundar', 'A primeira entrega ajuda a identificar interesse, resistencia e prontidao.', 'Isso orienta a oferta seguinte com menos chute.', 'prontidao, interesse, resistencia, oferta, leitura'),
          topic('Confianca como ativo', 'Autoridade nasce de utilidade percebida', 'Confianca se acumula quando a experiencia gera clareza e valor reconhecido.', 'Esse ativo fortalece o posicionamento de parceiro.', 'confianca, autoridade, valor, parceiro, posicionamento'),
          topic('Encadeamento da jornada', 'Workshop, diagnostico, trilha e acompanhamento', 'A entrada relacional so faz sentido quando existe um fluxo coerente apos a sessao.', 'Esse encadeamento sustenta recorrencia e impacto.', 'workshop, diagnostico, trilha, acompanhamento, recorrencia'),
        ]),
        makeModule(3, 3, 'Do workshop a consultoria aplicada', 'Modelo de continuidade que conecta aprendizagem, diagnostico e implementacao.', [
          topic('Workshop ou palestra', 'Primeira ativacao', 'A experiencia inicial gera repertorio, alinhamento e visibilidade.', 'Ela funciona como ponto de partida para uma conversa mais concreta.', 'workshop, palestra, repertorio, alinhamento, visibilidade'),
          topic('Diagnostico ou auditoria', 'Ler maturidade e gargalos', 'Depois da sensibilizacao, o proximo passo e investigar realidade, risco e oportunidade.', 'Essa etapa organiza prioridades e reduz generalidade.', 'diagnostico, auditoria, maturidade, gargalos, prioridades'),
          topic('Trilha de capacitacao', 'Desenvolver capacidade por etapas', 'Com o diagnostico em maos, a capacitacao pode ser desenhada por area, perfil ou objetivo.', 'Isso aumenta relevancia e aderencia.', 'trilha, capacidade, area, perfil, aderencia'),
          topic('Acompanhamento estrategico', 'Garantir traducao para rotina', 'Acompanhamento serve para revisar uso, remover travas e sustentar comportamento novo.', 'Sem isso, a energia inicial pode se dissipar.', 'acompanhamento, rotina, travas, comportamento, sustentacao'),
          topic('Consultoria aplicada', 'Aprofundar quando fizer sentido', 'A consultoria entra melhor quando o cliente ja ganhou clareza e linguagem para priorizar.', 'Assim a execucao passa a ter mais qualidade e menos desgaste.', 'consultoria, clareza, linguagem, priorizacao, qualidade'),
          topic('Implementacao como ultima camada', 'Executar com contexto amadurecido', 'Implementacoes fazem mais sentido depois que o terreno humano e organizacional foi preparado.', 'Essa sequencia melhora retorno e reduz dependencia improdutiva.', 'implementacao, contexto, sequencia, retorno, dependencia'),
        ]),
        makeModule(3, 4, 'Aplicacao pratica e proximo passo', 'Ferramentas finais para consolidar o curso e orientar acao real.', [
          topic('Perguntas de reflexao', 'Ler o proprio contexto', 'O fechamento convida o aluno a localizar dores, maturidade e oportunidade no proprio ambiente.', 'Sem reflexao, o curso corre risco de ficar apenas inspiracional.', 'reflexao, contexto, dores, maturidade, oportunidade'),
          topic('Mini canvas final', 'Transformar ideia em plano', 'O canvas organiza realidade atual, oportunidade com IA e proxima acao.', 'Ele reduz a distancia entre entendimento e teste pratico.', 'canvas, plano, realidade, oportunidade, acao'),
          topic('Proxima acao em 7 dias', 'Fechamento orientado a movimento', 'A experiencia deve terminar com uma acao simples, testavel e datada.', 'Isso aumenta compromisso e transferencia.', '7 dias, movimento, teste, compromisso, transferencia'),
          topic('Leitura do contexto da equipe', 'Pessoa, time ou empresa', 'O plano final precisa considerar em qual camada a mudanca sera iniciada.', 'Essa distincao evita acao vaga e sem dono.', 'pessoa, time, empresa, camada, dono'),
          topic('Medida de sucesso', 'Como saber se funcionou', 'O aluno deve definir criterio simples para avaliar ganho de clareza, velocidade ou qualidade.', 'Isso ajuda a aprender com o teste e ajustar a rota.', 'medida, sucesso, clareza, velocidade, qualidade'),
          topic('Mensagem de encerramento', 'Preparar humanos para operar o futuro', 'O curso fecha reafirmando que IA so gera valor profundo quando amplia capacidade humana e organizacional.', 'Essa frase amarra a visao completa do PHA 2030.', 'encerramento, humanos, futuro, valor, visao'),
        ]),
      ],
    },
  ],
};

function topic(title, subtitle, what, why, key) {
  return { title, subtitle, what, why, key };
}

function makeModule(trailId, moduleId, title, description, topics) {
  return {
    id: `${trailId}.${moduleId}`,
    file: `modulo-${trailId}-${moduleId}.html`,
    minutes: 35,
    title,
    description,
    topics,
  };
}

const colorMap = {
  emerald: {
    text: 'text-emerald-400',
    bg: 'bg-emerald-500/20',
    bg10: 'bg-emerald-500/10',
    border: 'border-emerald-500/30',
    grad: 'from-emerald-900/30',
    button: 'bg-emerald-600 hover:bg-emerald-500',
    light: '#059669',
    rgb: '5, 150, 105',
  },
  blue: {
    text: 'text-blue-400',
    bg: 'bg-blue-500/20',
    bg10: 'bg-blue-500/10',
    border: 'border-blue-500/30',
    grad: 'from-blue-900/30',
    button: 'bg-blue-600 hover:bg-blue-500',
    light: '#2563eb',
    rgb: '37, 99, 235',
  },
  purple: {
    text: 'text-purple-400',
    bg: 'bg-purple-500/20',
    bg10: 'bg-purple-500/10',
    border: 'border-purple-500/30',
    grad: 'from-purple-900/30',
    button: 'bg-purple-600 hover:bg-purple-500',
    light: '#7c3aed',
    rgb: '124, 58, 237',
  },
};

const allModules = course.trails.flatMap((trail) => trail.modules);
const totalTopics = allModules.reduce((sum, module) => sum + module.topics.length, 0);

await fs.mkdir(path.join(root, 'curso', 'trilha1'), { recursive: true });
await fs.mkdir(path.join(root, 'curso', 'trilha2'), { recursive: true });
await fs.mkdir(path.join(root, 'curso', 'trilha3'), { recursive: true });

await fs.writeFile(path.join(root, 'index.html'), renderLanding(), 'utf8');

for (const trail of course.trails) {
  await fs.writeFile(path.join(root, 'curso', trail.slug, 'index.html'), renderTrailPage(trail), 'utf8');
  for (const module of trail.modules) {
    await fs.writeFile(path.join(root, 'curso', trail.slug, module.file), renderModulePage(trail, module), 'utf8');
  }
}

function renderLanding() {
  const cards = course.trails
    .map((trail) => {
      const color = colorMap[trail.color];
      const topics = trail.modules.reduce((sum, module) => sum + module.topics.length, 0);
      return `
        <a href="curso/${trail.slug}/index.html" class="group block bg-dark-800 rounded-2xl border border-dark-600 hover:${color.border} transition-all p-8">
          <div class="flex items-center justify-between mb-4">
            <span class="px-3 py-1 rounded-full text-xs font-semibold ${color.text} ${color.bg} border ${color.border}">TRILHA ${trail.id}</span>
            <span class="text-neutral-500 text-sm">${trail.duration}</span>
          </div>
          <h2 class="text-2xl font-bold mb-3 group-hover:${color.text} transition-colors">${trail.title}</h2>
          <p class="text-neutral-400 mb-6">${trail.description}</p>
          <div class="grid grid-cols-3 gap-3 text-sm">
            <div class="bg-dark-700 rounded-xl p-4">
              <div class="text-neutral-500">Modulos</div>
              <div class="font-bold text-lg">${trail.modules.length}</div>
            </div>
            <div class="bg-dark-700 rounded-xl p-4">
              <div class="text-neutral-500">Topicos</div>
              <div class="font-bold text-lg">${topics}</div>
            </div>
            <div class="bg-dark-700 rounded-xl p-4">
              <div class="text-neutral-500">Nivel</div>
              <div class="font-bold text-lg">${trail.level}</div>
            </div>
          </div>
        </a>
      `;
    })
    .join('');

  return pageShell({
    title: `${course.title} | ${course.subtitle}`,
    activeTrailId: 0,
    trailColor: null,
    depth: '',
    body: `
      <header class="bg-gradient-to-br from-dark-900 via-dark-900 to-dark-800 border-b border-dark-600">
        <div class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <span class="inline-flex px-4 py-2 rounded-full bg-primary/10 border border-primary/40 text-primary text-sm font-semibold mb-6">CURSO COMPLETO</span>
          <h1 class="text-4xl sm:text-5xl font-bold mb-6">${course.title}</h1>
          <p class="text-2xl text-neutral-300 mb-4">${course.subtitle}</p>
          <p class="text-neutral-400 max-w-3xl text-lg mb-8">${course.description}</p>
          <div class="grid grid-cols-2 md:grid-cols-4 gap-4">
            ${statCard('Trilhas', String(course.trails.length))}
            ${statCard('Modulos', String(allModules.length))}
            ${statCard('Topicos', String(totalTopics))}
            ${statCard('Formato', 'INEMA.CLUB')}
          </div>
        </div>
      </header>

      <main class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <section class="mb-16">
          <div class="max-w-3xl mb-10">
            <h2 class="text-2xl font-bold mb-4">O que voce vai encontrar</h2>
            <p class="text-neutral-400">Uma jornada completa sobre contexto de mercado, leitura de perfis, discovery, desenho de workshops, maturidade de adocao e modelo de continuidade do PHA 2030.</p>
          </div>
          <div class="grid md:grid-cols-3 gap-6">
            ${cards}
          </div>
        </section>

        <section class="bg-dark-800 rounded-2xl border border-dark-600 p-8">
          <h2 class="text-2xl font-bold mb-4">Resultado esperado</h2>
          <div class="grid md:grid-cols-2 gap-4 text-neutral-300">
            <div class="bg-dark-700 rounded-xl p-5">Entender por que educacao e a porta e transformacao e o negocio real.</div>
            <div class="bg-dark-700 rounded-xl p-5">Reconhecer dores, perfis e maturidade de adocao em pessoas e equipes.</div>
            <div class="bg-dark-700 rounded-xl p-5">Estruturar discovery, aha moment e sequencia de sessao com criterio.</div>
            <div class="bg-dark-700 rounded-xl p-5">Conectar capacitacao a diagnostico, acompanhamento e consultoria.</div>
          </div>
        </section>
      </main>
    `,
  });
}

function renderTrailPage(trail) {
  const color = colorMap[trail.color];
  const topics = trail.modules.reduce((sum, module) => sum + module.topics.length, 0);

  const simpleCards = trail.modules
    .map(
      (module) => `
      <a href="${module.file}" class="block bg-dark-800 rounded-xl border border-dark-600 hover:${color.border} transition-all p-6">
        <div class="flex items-center justify-between mb-2">
          <span class="${color.text} font-bold">${module.id}</span>
          <span class="text-xs text-neutral-500">~${module.minutes} min</span>
        </div>
        <h3 class="text-2xl font-bold mb-2">${module.title}</h3>
        <p class="text-neutral-400 text-sm">${module.description}</p>
      </a>
    `
    )
    .join('');

  const detailedCards = trail.modules.map((module) => renderModuleCard(trail, module)).join('');

  return pageShell({
    title: `${trail.title} | ${course.title}`,
    activeTrailId: trail.id,
    trailColor: trail.color,
    depth: '../..',
    body: `
      ${trailHeader(trail, topics)}
      <main class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <section class="mb-16">
          <h2 class="text-2xl font-bold mb-6">Navegacao rapida</h2>
          <div class="grid md:grid-cols-2 gap-6">
            ${simpleCards}
          </div>
        </section>

        <section class="mb-12">
          <div class="flex items-center gap-4 mb-6">
            <div class="h-px flex-1 bg-dark-600"></div>
            <span class="text-sm uppercase tracking-[0.2em] text-neutral-500">Conteudo detalhado</span>
            <div class="h-px flex-1 bg-dark-600"></div>
          </div>
          ${detailedCards}
        </section>

        <section class="flex justify-start space-x-3">
          ${trail.id > 1 ? `<a href="../trilha${trail.id - 1}/index.html" class="px-4 py-2 text-sm bg-dark-700 hover:bg-dark-600 rounded-lg transition-colors">Trilha anterior</a>` : '<a href="../../index.html" class="px-4 py-2 text-sm bg-dark-700 hover:bg-dark-600 rounded-lg transition-colors">Voltar ao inicio</a>'}
          ${trail.id < course.trails.length ? `<a href="../trilha${trail.id + 1}/index.html" class="px-4 py-2 text-sm ${color.button} text-white rounded-lg transition-colors">Proxima trilha</a>` : '<a href="../../index.html" class="px-4 py-2 text-sm bg-primary text-dark-900 rounded-lg transition-colors">Rever curso</a>'}
        </section>
      </main>
      ${renderModals(trail)}
    `,
  });
}

function renderModuleCard(trail, module) {
  const color = colorMap[trail.color];
  const topics = module.topics
    .map(
      (item, index) => `
      <div class="topic-item">
        <button onclick="toggleTopic(this)" class="w-full px-6 py-4 flex items-center space-x-3 hover:bg-dark-700/50 transition-colors text-left">
          <span class="w-6 h-6 rounded-full ${color.bg} ${color.text} text-sm font-bold flex items-center justify-center flex-shrink-0">${index + 1}</span>
          <span class="text-lg">•</span>
          <div>
            <span class="font-medium">${item.title}</span>
            <span class="text-neutral-500 text-sm ml-2">- ${item.subtitle}</span>
          </div>
        </button>
        <div class="topic-explanation hidden px-6 pb-4">
          <div class="bg-dark-700/50 rounded-lg p-4 space-y-3 ml-9">
            <div>
              <span class="${color.text} font-semibold">O que e:</span>
              <p class="text-neutral-300 text-sm">${item.what}</p>
            </div>
            <div>
              <span class="${color.text} font-semibold">Por que aprender:</span>
              <p class="text-neutral-300 text-sm">${item.why}</p>
            </div>
            <div>
              <span class="${color.text} font-semibold">Conceitos-chave:</span>
              <p class="text-neutral-300 text-sm">${item.key}</p>
            </div>
          </div>
        </div>
      </div>
    `
    )
    .join('');

  return `
    <div class="bg-dark-800 rounded-xl border border-dark-600 mb-6">
      <div class="p-6 border-b border-dark-600">
        <div class="flex items-center justify-between mb-2">
          <span class="${color.text} font-bold">${module.id}</span>
          <span class="text-xs text-neutral-500">~${module.minutes} min</span>
        </div>
        <h3 class="text-2xl font-bold mb-2">${module.title}</h3>
        <p class="text-neutral-400 text-sm">${module.description}</p>
      </div>
      <div class="divide-y divide-dark-600">
        ${topics}
      </div>
      <div class="p-4 bg-dark-700/30 flex justify-start space-x-3">
        <button onclick="openModal('modal-${module.id.replace('.', '-')}')" class="px-4 py-2 text-sm bg-dark-600 hover:bg-dark-700 rounded-lg transition-colors">Ver em Modal</button>
        <a href="${module.file}" class="px-4 py-2 text-sm ${color.button} text-white rounded-lg transition-colors">Ver Completo</a>
      </div>
    </div>
  `;
}

function renderModals(trail) {
  return trail.modules
    .map(
      (module) => `
      <div id="modal-${module.id.replace('.', '-')}" class="fixed inset-0 z-[60] hidden">
        <div class="absolute inset-0 bg-black/70" onclick="closeModal('modal-${module.id.replace('.', '-')}')"></div>
        <div class="relative max-w-6xl mx-auto mt-10 h-[85vh] px-4">
          <div class="bg-dark-900 border border-dark-600 rounded-2xl h-full overflow-hidden">
            <div class="flex items-center justify-between px-4 py-3 border-b border-dark-600">
              <div>
                <div class="text-sm text-neutral-500">Modulo ${module.id}</div>
                <div class="font-semibold">${module.title}</div>
              </div>
              <button onclick="closeModal('modal-${module.id.replace('.', '-')}')" class="px-3 py-2 text-sm bg-dark-700 hover:bg-dark-600 rounded-lg">Fechar</button>
            </div>
            <iframe src="${module.file}" class="w-full h-[calc(85vh-57px)] bg-white"></iframe>
          </div>
        </div>
      </div>
    `
    )
    .join('');
}

function renderModulePage(trail, module) {
  const color = colorMap[trail.color];
  const moduleIndex = trail.modules.findIndex((item) => item.id === module.id);
  const nextModule = trail.modules[moduleIndex + 1];
  const moduleNarrative = getModuleNarrative(module.id);

  const sections = module.topics
    .map((item, index) => {
      const detail = buildTopicDetail(trail, module, item, index);
      return `
      <section id="topico-${index + 1}" class="mb-16">
        <div class="flex items-start gap-4 mb-6">
          <span class="flex items-center justify-center w-12 h-12 rounded-full ${color.bg} ${color.text} font-bold text-xl">${index + 1}</span>
          <div>
            <h2 class="text-2xl font-bold mb-2">${item.title}</h2>
            <p class="text-neutral-400">${detail.opening}</p>
          </div>
        </div>

        <div class="space-y-6">
          <div class="rounded-2xl border ${color.border} bg-gradient-to-br ${color.grad} to-transparent p-6">
            <h3 class="text-lg font-semibold ${color.text} mb-2">Conceito principal</h3>
            <p class="text-neutral-300 mb-4">${detail.core[0]}</p>
            <p class="text-neutral-300">${detail.core[1]}</p>
          </div>

          <div class="rounded-2xl border border-blue-500/30 bg-blue-500/10 p-6">
            <h3 class="text-lg font-semibold text-blue-400 mb-2">Leitura aprofundada</h3>
            <p class="text-neutral-300 mb-4">${detail.context[0]}</p>
            <p class="text-neutral-300">${detail.context[1]}</p>
          </div>

          <div class="rounded-2xl border border-primary/40 bg-primary/10 p-6">
            <h3 class="text-lg font-semibold text-primary mb-2">Exemplo orientado</h3>
            <p class="text-neutral-300 mb-4">${detail.example[0]}</p>
            <p class="text-neutral-300">${detail.example[1]}</p>
          </div>

          <div class="rounded-2xl border border-dark-600 bg-dark-800 p-6">
            <h3 class="text-lg font-semibold mb-3">Como ensinar ou aplicar este topico</h3>
            <div class="space-y-4 text-neutral-300">
              ${detail.steps.map((step, stepIndex) => `<div><span class="${color.text} font-semibold">${stepIndex + 1}.</span> ${step}</div>`).join('')}
            </div>
          </div>

          <div class="rounded-2xl border border-dark-600 bg-dark-800 p-6">
            <h3 class="text-lg font-semibold mb-3">Explicacao detalhada</h3>
            <div class="space-y-4 text-neutral-300">
              ${detail.deepDive.map((paragraph) => `<p>${paragraph}</p>`).join('')}
            </div>
          </div>

          <div class="grid md:grid-cols-2 gap-6">
            <div class="rounded-2xl border border-emerald-500/30 bg-emerald-500/10 p-6">
              <h3 class="text-lg font-semibold text-emerald-400 mb-3">Fazer</h3>
              <ul class="space-y-2 text-neutral-300">
                <li>Conectar o tema a dores reconheciveis.</li>
                <li>Usar linguagem clara e operacional.</li>
                <li>Transformar o conceito em proximo passo.</li>
              </ul>
            </div>
            <div class="rounded-2xl border border-red-500/30 bg-red-500/10 p-6">
              <h3 class="text-lg font-semibold text-red-400 mb-3">Evitar</h3>
              <ul class="space-y-2 text-neutral-300">
                ${detail.avoid.map((itemText) => `<li>${itemText}</li>`).join('')}
              </ul>
            </div>
          </div>

          <div class="rounded-2xl border border-dark-600 bg-dark-800 p-6">
            <h3 class="text-lg font-semibold mb-3">Perguntas de reflexao</h3>
            <div class="space-y-3 text-neutral-300">
              ${detail.reflection.map((question) => `<p>${question}</p>`).join('')}
            </div>
          </div>

          <div class="rounded-2xl border border-dark-600 bg-dark-800 p-6">
            <h3 class="text-lg font-semibold mb-3">Conceitos-chave para memorizar</h3>
            <p class="text-neutral-300 mb-4">${item.key}</p>
            <p class="text-neutral-300">${detail.closing}</p>
          </div>
        </div>
      </section>
    `;
    })
    .join('');

  return pageShell({
    title: `Modulo ${module.id} | ${course.title}`,
    activeTrailId: trail.id,
    trailColor: trail.color,
    depth: '../..',
    body: `
      <div class="border-b border-dark-600 bg-dark-900/70">
        <div class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-4 text-sm text-neutral-400">
          <a href="../../index.html" class="hover:text-neutral-300">Inicio</a>
          <span class="mx-2">/</span>
          <a href="index.html" class="hover:text-neutral-300">Trilha ${trail.id}</a>
          <span class="mx-2">/</span>
          <span class="${color.text}">Modulo ${module.id}</span>
        </div>
      </div>

      <header class="bg-gradient-to-br ${color.grad} via-dark-900 to-dark-800 border-b border-dark-600">
        <div class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <span class="inline-flex px-4 py-2 rounded-full text-xs font-semibold ${color.text} ${color.bg} border ${color.border} mb-6">MODULO ${module.id}</span>
          <h1 class="text-4xl font-bold mb-4">${module.title}</h1>
          <p class="text-neutral-400 max-w-3xl text-lg mb-8">${module.description}</p>
          <div class="grid grid-cols-2 md:grid-cols-4 gap-4">
            ${statCard('Topicos', String(module.topics.length))}
            ${statCard('Minutos', `~${module.minutes}`)}
            ${statCard('Nivel', trail.level)}
            ${statCard('Tipo', 'Modulo')}
          </div>
        </div>
      </header>

      <main class="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        ${moduleNarrative?.intro ? `
        <section class="mb-16 rounded-2xl border ${color.border} bg-dark-800 p-8">
          <h2 class="text-2xl font-bold mb-4">Leitura de abertura</h2>
          <div class="space-y-4 text-neutral-300">
            ${moduleNarrative.intro.map((paragraph) => `<p>${paragraph}</p>`).join('')}
          </div>
        </section>` : ''}
        ${sections}

        <section class="rounded-2xl border ${color.border} bg-gradient-to-br ${color.grad} to-transparent p-8">
          <h2 class="text-2xl font-bold mb-4">Resumo final</h2>
          <div class="grid md:grid-cols-2 gap-4 mb-6">
            ${module.topics
              .slice(0, 4)
              .map((item) => `<div class="bg-dark-800 rounded-xl p-4 text-neutral-300">✓ ${item.title}</div>`)
              .join('')}
          </div>
          <p class="text-neutral-300 mb-6">O objetivo deste modulo e transformar repertorio em capacidade aplicada. Use os topicos como roteiro de conversa, aula, workshop ou proposta comercial.</p>
          <div class="flex justify-start space-x-3">
            <a href="index.html" class="px-4 py-2 text-sm bg-dark-700 hover:bg-dark-600 rounded-lg transition-colors">Voltar para Trilha</a>
            ${nextModule ? `<a href="${nextModule.file}" class="px-4 py-2 text-sm ${color.button} text-white rounded-lg transition-colors">Proximo Modulo</a>` : '<a href="../../index.html" class="px-4 py-2 text-sm bg-primary text-dark-900 rounded-lg transition-colors">Voltar ao curso</a>'}
          </div>
        </section>
      </main>
    `,
  });
}

function buildTopicDetail(trail, module, item, index) {
  const customTopic = getModuleNarrative(module.id)?.topics?.[index];
  if (customTopic) {
    return customTopic;
  }

  const keywords = item.key.split(',').map((value) => value.trim()).filter(Boolean);
  const subject = topicApplicationSubject(trail);
  const opening = `${item.subtitle}. ${item.what} Neste modulo, o foco e transformar esse conceito em criterio pratico para ${subject}.`;

  const core = [
    `${item.what} Em termos de curso, isso significa sair da definicao rapida e explicar como o tema afeta comportamento, leitura de contexto e qualidade de decisao.`,
    `Quando o aluno entende ${item.title.toLowerCase()} com profundidade, ele deixa de repetir frases de efeito e passa a enxergar onde esse assunto aparece no cotidiano de pessoas, equipes e liderancas.`,
  ];

  const context = [
    `${item.why} O erro mais comum aqui e tratar o topico como algo teorico demais ou generico demais. No PHA 2030, cada assunto precisa ser conectado a uma dor reconhecivel, a uma conversa real ou a um movimento de maturidade.`,
    `Na pratica, este ponto influencia a forma como uma sessao e preparada, como uma lideranca percebe valor e como uma equipe traduz interesse inicial em uso consistente. Por isso, a leitura de contexto precisa ser mais explicativa do que apenas inspiracional.`,
  ];

  const example = [
    topicExampleLine(trail, module, item, subject),
    `Depois do exemplo, o papel do facilitador e explicitar o raciocinio: qual era o problema inicial, por que esse topico ajudou a organizar melhor a situacao e que proximo passo concreto passa a fazer sentido a partir daqui.`,
  ];

  const steps = [
    `Comece definindo o problema em linguagem simples, sem jargao tecnico e sem correr para ferramenta. O aluno precisa primeiro reconhecer a situacao antes de admirar a solucao.`,
    `Mostre como ${item.title.toLowerCase()} altera a leitura do caso. Explique o antes, o durante e o depois, deixando claro o ganho de clareza, velocidade, criterio ou autonomia.`,
    `Feche com uma transferencia direta para o contexto do aluno: qual tarefa, reuniao, discovery, workshop ou conversa comercial pode ser melhor conduzida usando este raciocinio.`,
  ];

  const deepDive = [
    `Se este topico fosse tratado como um capitulo de livro, a primeira tarefa seria desmontar a superficialidade. ${item.title} nao deve aparecer como slogan. Ele precisa ser mostrado como uma lente que ajuda a interpretar o momento atual do mercado, o comportamento das pessoas e as decisoes que fazem uma entrega gerar ou nao gerar transformacao real.`,
    `O segundo passo e aprofundar a implicacao pratica. Em muitos contextos, a equipe ja ouviu falar sobre o assunto, mas ainda nao o converteu em rotina, criterio ou linguagem compartilhada. E por isso que o PHA 2030 insiste tanto em explicacao detalhada: uma organizacao so muda de patamar quando consegue nomear melhor o problema, reconhecer melhor a oportunidade e agir de modo mais intencional.`,
    `Tambem e importante mostrar tensao e limite. ${item.title} nao resolve tudo sozinho. Ele ganha forca quando entra no desenho maior do modulo ${module.id}, conversa com os outros topicos da trilha ${trail.id} e ajuda a deslocar o aluno de curiosidade para capacidade. Essa costura entre capitulos e o que faz o curso parecer uma obra completa, e nao apenas uma colecao de slides expandidos.`,
    `Por fim, esse assunto precisa terminar com clareza operacional. O aluno deve sair sabendo como observar ${keywords.slice(0, 3).join(', ')}, como explicar isso para outra pessoa e como usar essa leitura para melhorar aula, workshop, discovery, diagnostico ou proposta. Esse fechamento e o que transforma conteudo em instrumento de trabalho.`,
  ];

  const avoid = [
    `Reduzir ${item.title.toLowerCase()} a um comentario rapido sem explorar implicacoes reais.`,
    'Explicar o tema de forma abstrata, sem caso, sem contexto e sem conexao com a dor da sala.',
    'Encerrar o assunto sem traduzir o que muda na pratica para o aluno, equipe ou empresa.',
  ];

  const reflection = [
    `Como este topico aparece hoje no meu contexto de forma mal explicada, fragmentada ou superficial?`,
    `Que tipo de decisao melhora quando eu passo a enxergar ${item.title.toLowerCase()} com mais profundidade?`,
    `Se eu fosse ensinar este assunto amanha, que exemplo real usaria para que a turma reconhecesse valor imediato?`,
  ];

  const closing = `Memorize este ponto assim: ${item.title} so ganha valor completo quando sai do resumo e entra na explicacao. O objetivo do modulo nao e apenas informar, mas dar repertorio suficiente para analisar, ensinar e aplicar o tema com seguranca.`;

  return { opening, core, context, example, steps, deepDive, avoid, reflection, closing };
}

function getModuleNarrative(moduleId) {
  const moduleNarratives = {
    '1.1': {
    intro: [
      'Este modulo precisa funcionar como uma virada de chave. A maior parte das pessoas ainda chega ao tema da IA com uma leitura muito concentrada em ferramenta, novidade ou produtividade imediata. O PHA 2030 comeca em outro lugar: primeiro explicando o momento historico que estamos vivendo, depois mostrando por que o valor mais robusto ja nao esta apenas em construir com tecnologia, mas em preparar gente e organizacao para usar essa tecnologia com inteligencia, criterio e direcao.',
      'Por isso, o modulo 1.1 nao deve soar como uma cronologia superficial do mercado. Ele precisa mostrar que cada onda da IA ampliou o acesso e, ao mesmo tempo, reduziu a vantagem competitiva de quem vende apenas a camada tecnica do momento. O argumento central e simples: quando o acesso se populariza, o diferencial deixa de ser acesso e passa a ser capacidade de uso, capacidade de adocao e capacidade de transformar aprendizagem em rotina.',
      'Se essa base ficar clara, o restante do curso se organiza melhor. A tese da educacao como porta, a ideia de Potencial Humano Aumentado e o posicionamento de habilitacao em vez de execucao deixam de parecer slogans isolados e passam a ser consequencias naturais do novo contexto do mercado.',
    ],
    topics: [
      {
        opening: 'A evolucao de prompts a enterprise. Este topico abre o modulo mostrando que o mercado de IA nao andou em linha reta e que cada onda mudou tanto o tipo de oportunidade quanto o tipo de diferenciacao possivel.',
        core: [
          'Quando falamos em ondas do mercado, nao estamos apenas listando novidades tecnologicas. Estamos descrevendo mudancas sucessivas de acesso, expectativa e maturidade. Primeiro veio o encantamento com prompts e interacoes diretas. Depois surgiram GPTs personalizados, integrações por API, automações, agentes, aplicativos criados com grande velocidade e, por fim, a busca por escala em ambiente empresarial.',
          'O ponto decisivo e que nenhuma dessas ondas anulou a anterior. O que aconteceu foi um empilhamento de camadas. Quanto mais o mercado amadureceu, mais o uso deixou de ser exclusivo de especialistas e passou a entrar na rotina de profissionais, equipes e empresas inteiras.',
        ],
        context: [
          'Muita gente interpreta essas ondas como modismos desconectados. Essa leitura e fraca. O que elas realmente mostram e um movimento de democratizacao: aquilo que antes parecia raro, tecnico e inacessivel vai ficando mais simples, mais barato e mais distribuido. Quando isso acontece, o jogo competitivo muda.',
          'E exatamente aqui que o PHA 2030 encontra espaco. Se o conhecimento tecnico puro tende a se espalhar, a nova vantagem esta em ajudar pessoas e organizacoes a entender onde usar, como usar, com que criterio usar e como transformar isso em comportamento e processo.',
        ],
        example: [
          'Pense em uma empresa que, em 2023, ficou impressionada com prompts. Em 2024, descobriu automacoes. Em 2025, passou a pedir agentes. Em cada fase, ela acreditou estar olhando para a grande novidade definitiva. Mas o problema de fundo permaneceu: a equipe seguia sem linguagem comum, sem criterio de uso e sem um caminho claro de adocao.',
          'Nesse caso, o facilitador nao deveria responder apenas mostrando a proxima ferramenta da moda. O mais valioso seria explicar a sequencia das ondas e mostrar que o desafio real nao e correr atras da ultima camada tecnica, mas construir capacidade organizacional para atravessar qualquer nova camada que surgir.',
        ],
        steps: [
          'Apresente as ondas como um mapa de maturidade do mercado, e nao como uma lista de buzzwords.',
          'Explique o que cada onda ampliou em termos de acesso e o que ela reduziu em termos de exclusividade tecnica.',
          'Feche reforcando que quem entende a evolucao do mercado consegue reposicionar melhor sua oferta, seu curso e sua conversa comercial.',
        ],
        deepDive: [
          'Em formato de livro, este topico precisa ensinar a ler tempo e contexto. O erro mais comum e olhar para a IA como se ela tivesse explodido de uma vez e como se todas as oportunidades valessem igual. Nao valem. Cada fase reorganizou o mercado e mudou a natureza da vantagem competitiva.',
          'Na fase inicial do entusiasmo, bastava conhecer melhor a ferramenta do que a media. Isso gerava aura de novidade e capturava atencao. Mas, conforme novas interfaces apareceram e o uso se simplificou, o mercado começou a punir quem construiu posicionamento apenas em cima da ultima camada tecnica. O que ontem parecia diferencial, hoje ja parece requisito minimo.',
          'Essa leitura ajuda o aluno a abandonar uma ansiedade comum: a de achar que precisa dominar toda nova onda antes de conseguir gerar valor. O modulo mostra o contrario. O valor mais estavel nao nasce de correr atras de cada nova ferramenta. Nasce de entender o padrao por tras delas e de saber conduzir pessoas por esse padrao com mais clareza do que a concorrencia.',
          'Por isso, ondas do mercado nao e um topico acessorio. Ele prepara terreno para a tese inteira do PHA 2030. Quando o aluno entende a sequencia, ele percebe por que educacao, habilitacao e adocao estruturada deixam de ser discurso bonito e passam a ser leitura estrategica do momento.',
        ],
        avoid: [
          'Transformar as ondas em um desfile de nomes e siglas sem explicar o que mudou na dinamica de valor.',
          'Dar a entender que cada nova onda substitui completamente a anterior.',
          'Usar a cronologia apenas para impressionar, sem conectar isso ao reposicionamento do curso ou da oferta.',
        ],
        reflection: [
          'Em qual onda eu ainda estou mentalmente preso ao tentar explicar IA para clientes ou alunos?',
          'O que no meu discurso ainda depende demais da novidade tecnica do momento?',
          'Como eu explicaria essa evolucao para mostrar que o diferencial atual esta menos em ferramenta e mais em adocao?',
        ],
        closing: 'Memorize assim: as ondas mudam a superficie do mercado, mas revelam um mesmo movimento de fundo. Quanto mais o acesso se democratiza, mais valor ganha quem organiza aprendizagem, criterio e adocao.',
      },
      {
        opening: 'Quando o acesso deixa de ser diferencial. Aqui o modulo mostra por que a popularizacao das ferramentas altera o jogo comercial e enfraquece propostas centradas apenas na execucao tecnica.',
        core: [
          'Comoditizacao tecnica significa que aquilo que antes gerava vantagem apenas por ser dificil, raro ou inacessivel passa a ficar disponivel para muito mais gente. Isso nao quer dizer que a tecnologia perdeu valor. Quer dizer que o valor deixou de estar concentrado somente em saber mexer nela.',
          'No contexto da IA, esse processo e visivel. Ferramentas ficaram mais intuitivas, integrações se multiplicaram, tutoriais se espalharam e o repertorio minimo de uso se disseminou com velocidade. O acesso aumentou e, com ele, a necessidade de reposicionar a proposta de valor.',
        ],
        context: [
          'Muitos profissionais sentem essa mudanca como perda. Na verdade, ela e uma mudanca de camada. Se voce insiste em vender apenas implementacao ou execucao da tecnologia do momento, sua margem tende a cair e sua posicao tende a se tornar mais tática.',
          'Mas, se voce entende a comoditizacao como um sinal de maturidade do mercado, enxerga outra oportunidade: ajudar clientes a sair do improviso e entrar em uso orientado, aprendizado estruturado e decisao melhor.',
        ],
        example: [
          'Imagine dois profissionais. O primeiro vende "automacao com IA" como produto final. O segundo entra ensinando a equipe a reconhecer gargalos, avaliar onde IA realmente faz sentido e desenhar uma jornada de adocao. Quando a ferramenta muda ou fica comum, o primeiro perde diferencial mais rapido. O segundo segue relevante porque vende leitura, criterio e capacidade.',
          'Esse exemplo mostra por que o PHA 2030 nao reage a comoditizacao com medo, mas com reposicionamento. O acesso popularizado nao mata oportunidade. Ele desloca a oportunidade para outro lugar.',
        ],
        steps: [
          'Explique ao aluno a diferenca entre perda de raridade tecnica e perda de valor real.',
          'Mostre como a comoditizacao pressiona modelos de execucao isolada e favorece modelos de habilitacao.',
          'Conclua com a pergunta central: se a ferramenta ficou mais acessivel, onde exatamente eu vou concentrar meu valor daqui para frente?',
        ],
        deepDive: [
          'Em um capitulo mais aprofundado, comoditizacao tecnica precisa ser tratada sem dramatizacao. O mercado de tecnologia sempre fez isso: transforma diferencial raro em capacidade mais comum. O problema nao e a comoditizacao em si. O problema e insistir em um posicionamento que dependia de escassez tecnica para continuar parecendo valioso.',
          'No caso da IA, o que esta se tornando comum nao e o impacto potencial da tecnologia, mas o acesso a interfaces, modelos e experimentacoes basicas. Isso exige uma resposta madura. Em vez de tentar proteger o valor por meio de complexidade artificial, o caminho mais robusto e deslocar o centro da proposta para criterio, metodo, treinamento bem conduzido e capacidade de decisao.',
          'Esse movimento tambem muda a relacao com o cliente. Antes, bastava vender o entregavel. Agora, faz mais sentido vender clareza, confianca e maturidade de uso. O cliente continua precisando de ajuda, mas a ajuda mais valiosa ja nao e apenas tecnica. Ela passa a ser educativa, diagnostica e estrategica.',
          'Essa e uma das ideias mais importantes do curso: a comoditizacao nao elimina o profissional relevante. Ela elimina o profissional que parou na camada errada de valor.',
        ],
        avoid: [
          'Tratar a comoditizacao como se significasse que qualquer pessoa faz tudo com a mesma qualidade.',
          'Responder a popularizacao tentando aumentar artificialmente a complexidade da proposta.',
          'Explicar o tema sem conectar sua implicacao direta no posicionamento comercial.',
        ],
        reflection: [
          'Em que parte da minha oferta eu ainda dependo de raridade tecnica para parecer valioso?',
          'Se o cliente hoje acessa a ferramenta sozinho, por que ele ainda precisaria de mim?',
          'Que parte do meu valor eu poderia reposicionar para criterio, treinamento e transformacao?',
        ],
        closing: 'Memorize assim: quando a tecnica se espalha, o valor nao desaparece. Ele sobe de camada e premia quem organiza capacidade, e nao apenas quem opera ferramenta.',
      },
      {
        opening: 'Adocao melhor que fascinacao. Este topico desloca a atencao do brilho da tecnologia para a capacidade de gerar uso consistente, criterio e transformacao.',
        core: [
          'A nova fronteira de valor nao esta em impressionar com o que a IA consegue fazer em laboratorio ou em palco. Ela esta em ajudar pessoas e empresas a usar a IA de forma repetivel, segura e conectada a problemas reais.',
          'Isso muda a natureza da entrega. A pergunta central deixa de ser "o que a ferramenta faz?" e passa a ser "como isso entra de forma util, pratica e sustentavel no trabalho, na decisao e no processo?"',
        ],
        context: [
          'Mercados imaturos valorizam fascinacao. Mercados mais maduros valorizam integracao. Quando a IA estava em fase de deslumbre, demonstracao sofisticada bastava para capturar atencao. Agora, atencao sem adocao tem vida curta.',
          'O PHA 2030 se apoia justamente nessa transicao. Em vez de vender encantamento passageiro, ele vende caminho de capacidade. Isso explica por que a proposta do curso se conecta tao bem a diagnostico, auditoria, trilha e acompanhamento.',
        ],
        example: [
          'Pense em duas demos. A primeira e brilhante, rapida e tecnicamente impressionante, mas nao conversa com nenhuma dor clara da sala. A segunda e simples: resume informacoes dispersas, organiza um plano e ajuda a decidir o proximo passo. A segunda costuma gerar mais valor porque e reconhecivel.',
          'Esse contraste ensina uma regra de ouro do PHA 2030: a melhor entrega nao e a mais sofisticada. E a que ajuda o aluno a sair da abstracao e enxergar um uso pratico que ele conseguiria incorporar depois.',
        ],
        steps: [
          'Mostre que fascinacao atrai, mas nao sustenta comportamento.',
          'Explique que adocao exige repeticao, clareza de uso, contexto e criterio.',
          'Leve o aluno a perceber que propostas mais fortes sao as que reduzem distancia entre descobrir e incorporar.',
        ],
        deepDive: [
          'Como capitulo, este topico precisa combater um erro cultural importante: confundir demonstracao com transformacao. Demonstracao bem feita pode gerar entusiasmo. Transformacao exige algo a mais: continuidade, traducao para a rotina e ganho concreto percebido pelo aluno ou pela equipe.',
          'Em muitos ambientes, a IA ainda entra como espetaculo. Ela aparece em lives, palestras, cases isolados e promessas grandiosas. Isso produz fascinio, mas tambem pode produzir cansaco. A pessoa sai impressionada e, ao mesmo tempo, sem saber o que fazer na segunda-feira.',
          'A fronteira nova de valor aparece exatamente nesse ponto de friccao. Quem sabe traduzir possibilidade em uso reconhecivel ocupa um lugar muito mais estrategico. Essa pessoa consegue diminuir medo, reduzir excesso de informacao e construir confianca real.',
          'Por isso, a palavra-chave aqui e adocao. Adocao e a ponte entre repertorio e resultado. Sem ela, a IA vira curiosidade. Com ela, a IA passa a ser capacidade.',
        ],
        avoid: [
          'Construir o topico como defesa vaga de consultoria sem mostrar a mudanca concreta de valor.',
          'Opor tecnica e adocao como se uma anulasse a outra.',
          'Manter o discurso no campo da inspiracao sem mostrar o que muda no desenho da entrega.',
        ],
        reflection: [
          'Minhas entregas hoje geram fascinacao ou adocao?',
          'Onde os alunos ou clientes costumam travar depois de entender o potencial da IA?',
          'O que eu preciso mudar para diminuir a distancia entre interesse inicial e uso recorrente?',
        ],
        closing: 'Memorize assim: fascinacao abre olhos, mas adocao muda comportamento. A nova fronteira de valor esta em conduzir essa passagem.',
      },
      {
        opening: 'Mudanca de foco do mercado. Este topico mostra como a conversa sobre IA precisa sair do hype e entrar na construcao de capacidade humana e organizacional.',
        core: [
          'Do hype a capacidade e uma mudanca de enquadramento. O mercado passou por uma fase em que bastava provar que a IA era impressionante. Hoje, o desafio mais relevante e provar que ela pode ser incorporada com metodo, limite e impacto reconhecivel.',
          'Esse deslocamento muda aula, workshop, reuniao comercial e proposta de valor. Em todos esses contextos, a pergunta certa deixa de ser "como impressionar?" e passa a ser "como mover a pessoa de curiosa para capaz?"',
        ],
        context: [
          'O hype teve utilidade: ele chamou atencao e acelerou a curiosidade do mercado. Mas, se a conversa para ai, a organizacao fica cheia de expectativa e pobre em capacidade. O resultado costuma ser dispersao, teste sem direcao e pouco efeito estrutural.',
          'O PHA 2030 entra justamente para fazer essa virada. Ele nao nega o potencial da tecnologia. Ele organiza esse potencial dentro de uma jornada de aprendizagem, criterio, autonomia e cultura.',
        ],
        example: [
          'Imagine uma lideranca que pede um evento sobre IA porque "todo mundo esta falando disso". Uma resposta baseada em hype tentaria inflar medo ou deslumbramento. Uma resposta baseada em capacidade mostraria onde a equipe perde tempo, onde a informacao se dispersa e como IA pode ser usada para ampliar clareza e autonomia.',
          'Nesse segundo caso, a conversa fica menos teatral e muito mais estrategica. Ela deixa de depender da moda do momento e passa a se apoiar em dores reais e resultados observaveis.',
        ],
        steps: [
          'Reconheca que o hype existiu e explique por que ele foi insuficiente.',
          'Conecte capacidade a repeticao, criterio, autonomia e melhoria de processo.',
          'Feche deixando claro que a missao do curso e ensinar uso inteligente, e nao apenas entusiasmo tecnologico.',
        ],
        deepDive: [
          'Como texto de livro, este topico precisa ter firmeza conceitual. A transicao do hype para a capacidade e uma mudanca de maturidade de mercado. Isso quer dizer que as perguntas mais importantes tambem mudaram. Em vez de perguntar apenas se a tecnologia funciona, passamos a perguntar para quem ela funciona, em que processo, com qual limite e com qual efeito real.',
          'Quando essa transicao nao acontece, a organizacao vive um tipo de fadiga: muita conversa sobre IA, pouca traducao para a rotina e quase nenhuma melhoria sustentada. O hype gera expectativa, mas a falta de criterio gera frustracao. E uma empresa frustrada tende a concluir que a tecnologia foi superestimada, quando na verdade o que faltou foi metodo de adocao.',
          'O PHA 2030 corrige esse erro ao colocar capacidade no centro. Capacidade significa repertorio, confianca, avaliacao de qualidade, clareza sobre quando usar e sobre quando nao usar. Em outras palavras, capacidade e o oposto de improviso.',
          'Por isso, este topico nao e apenas sobre linguagem. Ele e sobre arquitetura de mudanca. Quando o mercado troca hype por capacidade, o profissional que ensina e conduz bem passa a valer mais do que o profissional que apenas repete novidades.',
        ],
        avoid: [
          'Ridicularizar o hype sem reconhecer que ele ajudou a abrir o mercado.',
          'Usar a palavra capacidade como conceito vago, sem definir o que ela envolve.',
          'Tratar maturidade como algo automatico, sem trabalho pedagógico e organizacional.',
        ],
        reflection: [
          'Que sinais de hype sem capacidade eu vejo no meu contexto hoje?',
          'Como eu explicaria capacidade de um jeito concreto para uma equipe nao tecnica?',
          'Onde minha entrega ainda estimula mais curiosidade do que mudanca real?',
        ],
        closing: 'Memorize assim: hype chama atencao, mas capacidade sustenta resultado. O mercado esta premiando cada vez mais quem entende essa diferenca.',
      },
      {
        opening: 'Sobrecarga, lentidao e retrabalho. Aqui o modulo traz a conversa de volta para a realidade cotidiana e mostra por que a IA precisa ser conectada a dores reconheciveis, nao a abstracoes.',
        core: [
          'Mesmo com toda a evolucao tecnica, muitas empresas continuam operando sob excesso de informacao, retrabalho, lentidao de decisao e dependencia de poucas pessoas. Isso e importante porque impede uma leitura romantizada da IA.',
          'Se o curso nao nomeia essas dores, ele flutua. O aluno pode ate concordar intelectualmente com a importancia do tema, mas nao reconhece onde aquilo entra no seu trabalho, na sua equipe ou na sua organizacao.',
        ],
        context: [
          'Nomear problemas persistentes e o que tira a conversa da propaganda e coloca no terreno da utilidade. O mercado nao precisa apenas de mais discurso sobre futuro. Ele precisa de traducao entre tecnologia e friccao real.',
          'E justamente por isso que o PHA 2030 insiste tanto em diagnostico, discovery e demonstração conectada a dor. A melhor conversa sobre IA nao comeca na ferramenta. Ela comeca na friccao.',
        ],
        example: [
          'Pense em uma equipe que perde horas consolidando informacoes espalhadas, revendo arquivos duplicados e esperando validacoes para seguir. Se a aula fala apenas sobre agentes e automacoes, pode soar distante. Se ela parte dessa dor e mostra como IA ajuda a resumir, organizar e acelerar decisao, o valor fica concreto.',
          'A dor reconhecivel faz duas coisas ao mesmo tempo: reduz ceticismo e aumenta aderencia. A pessoa para de ouvir a partir do discurso geral e comeca a escutar a partir do proprio problema.',
        ],
        steps: [
          'Mapeie quais dores aparecem com mais frequencia na sala ou na empresa.',
          'Traduza cada dor em um tipo de uso possivel para IA, sem prometer milagre.',
          'Mostre que o ganho nao e apenas produtividade; e tambem clareza, autonomia e qualidade de decisao.',
        ],
        deepDive: [
          'Como capitulo, este topico precisa ter um papel de aterrissagem. Ate aqui, o modulo explicou ondas, comoditizacao, nova fronteira de valor e mudanca do hype para capacidade. Agora ele precisa responder: tudo isso conversa com qual dor concreta? A resposta e simples: conversa com o trabalho real das pessoas.',
          'Sobrecarga nao e apenas excesso de tarefa. Ela e excesso de contexto mal organizado. Lentidao nao e apenas falta de vontade. Muitas vezes ela e resultado de informacao espalhada, dependencia decisoria e baixa clareza. Retrabalho nao e apenas falha de execucao. Frequentemente ele e sintoma de processo ruim, comunicacao fraca e falta de criterio.',
          'Quando a IA entra nesse quadro com inteligencia, ela ajuda a reduzir friccao. Mas o curso precisa ser honesto: ela nao entra sozinha. Ela depende de problema bem nomeado, de pergunta bem formulada e de acompanhamento minimo para virar pratica consistente. Esse e um ponto central do PHA 2030.',
          'Por isso, este topico tambem prepara o aluno para discovery. Quem nao sabe nomear dor nao sabe escolher demo. Quem nao sabe escolher demo nao consegue gerar aha moment. E quem nao gera aha moment dificilmente cria abertura para transformacao.',
        ],
        avoid: [
          'Falar de dores genéricas sem mostrar como elas aparecem no cotidiano da operação.',
          'Prometer que IA resolve toda sobrecarga automaticamente.',
          'Separar problema de demonstração, como se fossem etapas independentes.',
        ],
        reflection: [
          'Quais dores sao mais reconheciveis no meu contexto hoje?',
          'Que problema real eu usaria como porta de entrada para falar de IA sem soar abstrato?',
          'Onde eu ainda falo mais da tecnologia do que da friccao que justifica seu uso?',
        ],
        closing: 'Memorize assim: o valor da IA aparece melhor quando encontra uma dor reconhecivel. Sem dor clara, a conversa fica bonita. Com dor clara, ela ganha relevancia.',
      },
      {
        opening: 'Oportunidade para quem habilita. O fechamento do modulo mostra por que todo esse contexto desemboca em uma oportunidade estrategica: preparar pessoas e organizacoes para adotar IA melhor do que a media.',
        core: [
          'Se as ondas democratizaram o acesso, se a tecnica ficou menos exclusiva, se a adocao passou a valer mais que a fascinacao e se as empresas seguem cheias de dor operacional, entao a oportunidade mais robusta esta em habilitar. Habilitar significa ensinar, diagnosticar, organizar caminho e sustentar mudanca.',
          'Esse topico fecha o raciocinio do modulo 1.1 ligando contexto de mercado a posicionamento. Ele prepara o aluno para entender por que o PHA 2030 nao e uma empresa de curso no sentido estreito, mas uma proposta de Potencial Humano Aumentado.',
        ],
        context: [
          'Muita gente ainda olha para educacao como produto de entrada de baixo valor. O PHA 2030 inverte essa leitura. A educacao e valiosa porque ela abre a conversa certa, cria confianca, reduz friccao, revela gargalos e prepara terreno para diagnostico, auditoria, acompanhamento e consultoria.',
          'Quando voce entende isso, seu lugar no mercado muda. Em vez de disputar apenas por execucao, voce passa a disputar por clareza, condução e capacidade de transformar tecnologia em maturidade real.',
        ],
        example: [
          'Imagine dois caminhos comerciais. No primeiro, voce oferece construir algo para o cliente imediatamente. No segundo, voce entra com uma sessao de capacitacao bem orientada, identifica dores, mapeia maturidade e desenha continuidade. O segundo caminho tende a gerar mais confianca, relacao mais profunda e implementacao posterior de melhor qualidade.',
          'Esse exemplo nao significa que execucao perdeu valor. Significa que a execucao ganha muito mais valor quando vem depois da habilitacao, e nao no lugar dela.',
        ],
        steps: [
          'Amarre os topicos anteriores em uma tese unica de mercado.',
          'Mostre por que habilitar nao e um detalhe pedagogico, mas uma posicao estrategica.',
          'Feche o modulo preparando o aluno para a grande tese seguinte: educacao e a porta, transformacao e o negocio real.',
        ],
        deepDive: [
          'Como encerramento de capitulo, este topico precisa produzir convergencia. Tudo o que foi apresentado ate aqui aponta para uma mesma conclusao: o mercado de IA esta premiando menos quem apenas opera tecnologia e mais quem consegue transformar acesso em uso, uso em capacidade e capacidade em cultura.',
          'Essa conclusao muda a forma de olhar para o proprio negocio. Em vez de pensar "como vendo mais uma solucao?", a pergunta passa a ser "como preparo melhor essa empresa para usar IA com inteligencia?". Esse ajuste de pergunta muda a postura comercial, a didatica e a profundidade da relacao com o cliente.',
          'Tambem muda o lugar do ensino. O treinamento deixa de ser visto como evento solto e passa a ser visto como mecanismo de entrada relacional e estrategica. E por isso que o PHA 2030 usa a educacao como porta. A aula abre a conversa. O diagnostico aprofunda. O acompanhamento sustenta. A consultoria organiza. A implementacao entra quando faz sentido.',
          'Esse e o verdadeiro fechamento do modulo 1.1: o contexto do mercado nao e apenas uma analise externa. Ele e o argumento que justifica toda a arquitetura do curso e toda a proposta do PHA 2030.',
        ],
        avoid: [
          'Apresentar habilitacao como ideia vaga, sem ligar isso ao contexto de mercado explicado antes.',
          'Falar de transformacao sem mostrar o papel concreto da educacao na entrada da jornada.',
          'Criar oposicao simplista entre ensinar e executar, como se fossem mundos separados.',
        ],
        reflection: [
          'Que oportunidade eu perco quando vendo apenas execucao e nao habilitacao?',
          'Como eu explicaria para um cliente que a educacao nao e o fim, mas o melhor comeco?',
          'O que no contexto do mercado atual reforca que esse posicionamento faz sentido agora?',
        ],
        closing: 'Memorize assim: quem entende o novo contexto percebe que habilitar nao e uma etapa menor. E a resposta mais estrategica para um mercado em que o acesso se espalhou e a maturidade virou diferencial.',
      },
    ],
    },
  };

  return moduleNarratives[moduleId] || null;
}

function topicApplicationSubject(trail) {
  if (trail.id === 1) return 'explicar a tese do PHA 2030 com profundidade';
  if (trail.id === 2) return 'ler salas, perfis e sessoes com mais criterio';
  return 'desenhar jornadas de transformacao e continuidade com mais maturidade';
}

function topicExampleLine(trail, module, item, subject) {
  if (trail.id === 1) {
    return `Imagine uma reuniao em que a empresa pede apenas "um treinamento sobre IA". Em vez de responder com um catalogo de ferramentas, voce usa ${item.title.toLowerCase()} para explicar o momento do mercado, reposicionar a conversa e mostrar por que o verdadeiro valor esta em ${subject}.`;
  }

  if (trail.id === 2) {
    return `Imagine uma turma heterogenea, com gente resistente, curiosa e sobrecarregada. Ao usar ${item.title.toLowerCase()} como lente, voce consegue ajustar ritmo, exemplo e profundidade, evitando que a sessao pareca boa no slide e irrelevante na experiencia real.`;
  }

  return `Imagine um cliente que saiu de um workshop inspirado, mas ainda sem proximo passo claro. Ao aplicar ${item.title.toLowerCase()}, voce mostra como a conversa pode evoluir para diagnostico, trilha, acompanhamento e uma mudanca mais sustentada do que uma entrega isolada.`;
}

function pageShell({ title, activeTrailId, trailColor, depth, body }) {
  return `<!DOCTYPE html>
<html lang="pt-BR" class="dark">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>${title}</title>
  <script src="https://cdn.tailwindcss.com"></script>
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&display=swap" rel="stylesheet">
  <script>
    tailwind.config = {
      theme: {
        extend: {
          colors: {
            dark: {
              900: '#111827',
              800: '#1f2937',
              700: '#374151',
              600: '#4b5563',
              500: '#6b7280'
            },
            primary: '#FACC15'
          }
        }
      }
    };
  </script>
  <style>
    body { font-family: 'Inter', sans-serif; }
    .topic-explanation.hidden { display: none; }
    .topic-explanation { display: block; }
    html:not(.dark) body { background-color: #f8fafc; }
    html:not(.dark) .bg-dark-900 { background-color: #ffffff; }
    html:not(.dark) .bg-dark-800 { background-color: #f9fafb; }
    html:not(.dark) .bg-dark-700 { background-color: #f3f4f6; }
    html:not(.dark) .bg-dark-600 { background-color: #e5e7eb; }
    html:not(.dark) .text-neutral-100 { color: #111827; }
    html:not(.dark) .text-neutral-300 { color: #4b5563; }
    html:not(.dark) .text-neutral-400 { color: #6b7280; }
    html:not(.dark) .text-neutral-500 { color: #9ca3af; }
    html:not(.dark) .border-dark-600 { border-color: #d1d5db; }
    html:not(.dark) .border-dark-700 { border-color: #e5e7eb; }
    ${trailColor ? accentCss(trailColor) : landingAccentCss()}
    html:not(.dark) [class*="bg-gradient-to"] { background-image: none !important; }
    html:not(.dark) .text-primary { color: #a16207; }
    html:not(.dark) .bg-primary\\/10 { background-color: rgba(161, 98, 7, 0.08); }
    html:not(.dark) .border-primary\\/40 { border-color: rgba(161, 98, 7, 0.25); }
    html:not(.dark) .text-sky-400 { color: #0369a1; }
    html:not(.dark) .text-yellow-400 { color: #a16207; }
    html:not(.dark) .hover\\:text-sky-300:hover { color: #0284c7; }
    html:not(.dark) .hover\\:text-yellow-300:hover { color: #854d0e; }
    html:not(.dark) .bg-dark-900\\/95 { background-color: rgba(255, 255, 255, 0.95); }
  </style>
</head>
<body class="bg-dark-900 text-neutral-100 min-h-screen">
  ${nav(depth, activeTrailId)}
  ${body}
  <footer class="border-t border-dark-600 py-8 mt-10">
    <div class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-sm text-neutral-500">
      PHA 2030 | Preparar humanos para operar o futuro.
    </div>
  </footer>
  <script>
    function toggleTopic(button) {
      const current = button.parentElement;
      const container = current.parentElement;
      const explanation = current.querySelector('.topic-explanation');
      const items = container.querySelectorAll('.topic-item .topic-explanation');
      items.forEach((item) => {
        if (item !== explanation) item.classList.add('hidden');
      });
      explanation.classList.toggle('hidden');
    }

    function openModal(id) {
      const modal = document.getElementById(id);
      if (modal) modal.classList.remove('hidden');
      document.body.style.overflow = 'hidden';
    }

    function closeModal(id) {
      const modal = document.getElementById(id);
      if (modal) modal.classList.add('hidden');
      document.body.style.overflow = '';
    }

    document.addEventListener('keydown', (event) => {
      if (event.key === 'Escape') {
        document.querySelectorAll('[id^="modal-"]').forEach((modal) => modal.classList.add('hidden'));
        document.body.style.overflow = '';
      }
    });

    const themeToggleBtn = document.getElementById('theme-toggle');
    const themeToggleDarkIcon = document.getElementById('theme-toggle-dark-icon');
    const themeToggleLightIcon = document.getElementById('theme-toggle-light-icon');
    const isDark = () => document.documentElement.classList.contains('dark');
    const syncIcons = () => {
      themeToggleDarkIcon.classList.toggle('hidden', !isDark());
      themeToggleLightIcon.classList.toggle('hidden', isDark());
    };
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'light') document.documentElement.classList.remove('dark');
    if (savedTheme === 'dark') document.documentElement.classList.add('dark');
    syncIcons();
    themeToggleBtn.addEventListener('click', () => {
      document.documentElement.classList.toggle('dark');
      localStorage.setItem('theme', isDark() ? 'dark' : 'light');
      syncIcons();
    });
  </script>
</body>
</html>`;
}

function nav(depth, activeTrailId) {
  const prefix = depth ? `${depth}/` : '';
  const links = course.trails
    .map((trail) => {
      const color = colorMap[trail.color];
      const active = trail.id === activeTrailId;
      const href = `${prefix}curso/${trail.slug}/index.html`.replace('/curso/', activeTrailId ? '../' : 'curso/');
      return `<a href="${activeTrailId ? `../trilha${trail.id}/index.html` : `curso/${trail.slug}/index.html`}" class="px-3 py-1.5 rounded-lg text-sm font-semibold ${active ? `${color.text} ${color.bg10}` : `text-neutral-400 hover:${color.text} hover:${color.bg10} transition-colors`}"><span class="sm:hidden">T${trail.id}</span><span class="hidden sm:inline">${trail.title}</span></a>`;
    })
    .join('');

  return `
    <nav class="sticky top-0 z-50 bg-dark-900/95 backdrop-blur-sm border-b border-dark-600">
      <div class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="flex justify-between items-center h-14">
          <div class="flex items-center space-x-4">
            <a href="${activeTrailId ? '../../index.html' : 'index.html'}" class="flex items-center space-x-2 text-yellow-400 hover:text-yellow-300">
              <span class="text-2xl">${course.emoji}</span>
              <span class="font-bold text-lg hidden sm:inline">${course.title}</span>
            </a>
            <span class="text-neutral-600">|</span>
            <a href="https://inema.club" target="_blank" class="text-sky-400 hover:text-sky-300 text-sm font-medium">INEMA.CLUB</a>
          </div>
          <div class="flex items-center space-x-1 sm:space-x-2">
            ${links}
            <button id="theme-toggle" class="p-2 rounded-lg bg-dark-700 hover:bg-dark-600 transition-colors ml-2">
              <svg id="theme-toggle-dark-icon" class="hidden w-5 h-5 text-neutral-300" fill="currentColor" viewBox="0 0 20 20">
                <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z"></path>
              </svg>
              <svg id="theme-toggle-light-icon" class="hidden w-5 h-5 text-neutral-300" fill="currentColor" viewBox="0 0 20 20">
                <path d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z" fill-rule="evenodd" clip-rule="evenodd"></path>
              </svg>
            </button>
          </div>
        </div>
      </div>
    </nav>
  `;
}

function trailHeader(trail, topics) {
  const color = colorMap[trail.color];
  return `
    <header class="bg-gradient-to-br ${color.grad} via-dark-900 to-dark-800 border-b border-dark-600">
      <div class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <span class="inline-flex px-4 py-2 rounded-full text-xs font-semibold ${color.text} ${color.bg} border ${color.border} mb-6">TRILHA ${trail.id}</span>
        <h1 class="text-4xl font-bold mb-4">${trail.title}</h1>
        <p class="text-neutral-400 max-w-3xl text-lg mb-8">${trail.description}</p>
        <div class="grid grid-cols-2 md:grid-cols-4 gap-4">
          ${statCard('Modulos', String(trail.modules.length))}
          ${statCard('Topicos', String(topics))}
          ${statCard('Duracao', trail.duration)}
          ${statCard('Nivel', trail.level)}
        </div>
      </div>
    </header>
  `;
}

function statCard(label, value) {
  return `
    <div class="bg-dark-800 rounded-xl border border-dark-600 p-4">
      <div class="text-neutral-500 text-sm">${label}</div>
      <div class="font-bold text-lg">${value}</div>
    </div>
  `;
}

function accentCss(colorName) {
  const color = colorMap[colorName];
  return `
    html:not(.dark) .text-${colorName}-400 { color: ${color.light}; }
    html:not(.dark) .bg-${colorName}-500\\/20 { background-color: rgba(${color.rgb}, 0.12); }
    html:not(.dark) .bg-${colorName}-500\\/10 { background-color: rgba(${color.rgb}, 0.08); }
    html:not(.dark) .border-${colorName}-500\\/30 { border-color: rgba(${color.rgb}, 0.25); }
  `;
}

function landingAccentCss() {
  return Object.keys(colorMap)
    .map((key) => {
      const color = colorMap[key];
      return `
        html:not(.dark) .hover\\:text-${key}-400:hover { color: ${color.light}; }
        html:not(.dark) .hover\\:bg-${key}-500\\/10:hover { background-color: rgba(${color.rgb}, 0.08); }
        html:not(.dark) .group:hover .group-hover\\:text-${key}-400 { color: ${color.light}; }
      `;
    })
    .join('');
}
