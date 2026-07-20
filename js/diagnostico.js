/* ============================================
   NORVI - Diagnóstico Adaptativo (10 perguntas)
   P1 define o nível de escolaridade; P2, P3, P4,
   P7 e P9 adaptam textos/opções conforme o nível.
   ============================================ */

const MATERIAS_POR_NIVEL = {
    fundamental_i: ['Matemática', 'Português', 'Ciências', 'História', 'Geografia', 'Arte'],
    fundamental_ii: ['Matemática', 'Português', 'Ciências', 'História', 'Geografia', 'Inglês', 'Arte'],
    ensino_medio: ['Matemática', 'Português', 'Física', 'Química', 'Biologia', 'História', 'Geografia', 'Filosofia', 'Sociologia', 'Inglês'],
    graduacao: ['Cálculo', 'Estatística', 'Física', 'Química', 'Programação', 'Metodologia', 'Línguas'],
    pos_graduacao: ['Métodos Quantitativos', 'Métodos Qualitativos', 'Escrita Científica', 'Revisão Bibliográfica', 'Ética']
};

const NIVEIS = [
    { valor: 'fundamental_i', texto: 'Ensino Fundamental I (1º ao 5º ano)' },
    { valor: 'fundamental_ii', texto: 'Ensino Fundamental II (6º ao 9º ano)' },
    { valor: 'ensino_medio', texto: 'Ensino Médio' },
    { valor: 'graduacao', texto: 'Graduação (Ensino Superior)' },
    { valor: 'pos_graduacao', texto: 'Pós-Graduação (Mestrado/Doutorado)' }
];

const TOTAL_PERGUNTAS = 10;

let perguntaAtual = 1;
let respostas = {};

/* ---------- Definição das perguntas ---------- */

function getNivel() {
    return respostas[1] ? respostas[1][0] : null;
}

function getNivelTexto() {
    const nivel = getNivel();
    const encontrado = NIVEIS.find(n => n.valor === nivel);
    return encontrado ? encontrado.texto : '';
}

function ehInfantil() {
    const nivel = getNivel();
    return nivel === 'fundamental_i' || nivel === 'fundamental_ii';
}

function ehAvancado() {
    const nivel = getNivel();
    return nivel === 'graduacao' || nivel === 'pos_graduacao';
}

function opcoesMaterias() {
    const nivel = getNivel() || 'ensino_medio';
    return (MATERIAS_POR_NIVEL[nivel] || []).map(m => ({ valor: m, texto: m }));
}

function getPergunta(numero) {
    switch (numero) {
        case 1:
            return {
                etapa: 'Ponto de Partida',
                titulo: 'Qual é o seu nível de escolaridade?',
                multipla: false,
                opcoes: NIVEIS.map(n => ({ valor: n.valor, texto: n.texto }))
            };
        case 2:
            return {
                etapa: 'Seus Desafios',
                titulo: 'Quais matérias você tem mais dificuldade?',
                multipla: true,
                max: 3,
                opcoes: opcoesMaterias()
            };
        case 3:
            return {
                etapa: 'Seus Pontos Fortes',
                titulo: 'Quais matérias você tem mais facilidade?',
                multipla: true,
                max: 3,
                opcoes: opcoesMaterias()
            };
        case 4:
            return {
                etapa: 'Seu Estilo',
                titulo: ehInfantil() ? 'Como você mais gosta de aprender?' : 'Como você prefere aprender?',
                multipla: false,
                opcoes: ehInfantil() ? [
                    { valor: 'leitura', texto: 'Lendo historinhas e fazendo resumos' },
                    { valor: 'exercicios', texto: 'Brincando com jogos e exercícios' },
                    { valor: 'visual', texto: 'Vendo figuras, mapas e desenhos' },
                    { valor: 'guiado', texto: 'Com um guia explicando passo a passo' }
                ] : [
                    { valor: 'leitura', texto: 'Leitura aprofundada e resumos' },
                    { valor: 'exercicios', texto: 'Exercícios práticos e questões' },
                    { valor: 'visual', texto: 'Mapas mentais e esquemas visuais' },
                    { valor: 'guiado', texto: 'Explicações guiadas passo a passo' }
                ]
            };
        case 5:
            return {
                etapa: 'Seu Tempo',
                titulo: 'Quanto tempo por dia você pode dedicar aos estudos?',
                multipla: false,
                opcoes: [
                    { valor: 10, texto: '10 minutos (micro-hábitos)' },
                    { valor: 15, texto: '15 minutos' },
                    { valor: 20, texto: '20 minutos' },
                    { valor: 30, texto: '30 minutos' },
                    { valor: 45, texto: '45 minutos' },
                    { valor: 60, texto: '60 minutos ou mais' }
                ]
            };
        case 6:
            return {
                etapa: 'Sua Frequência',
                titulo: 'Com que frequência você pretende estudar?',
                multipla: false,
                opcoes: [
                    { valor: 'diariamente', texto: 'Todos os dias, sem falta' },
                    { valor: 'semana', texto: 'Dias de semana (segunda a sexta)' },
                    { valor: 'alternado', texto: 'Dias alternados' },
                    { valor: 'livre', texto: 'Quando conseguir encaixar na rotina' }
                ]
            };
        case 7:
            return {
                etapa: 'Seu Objetivo',
                titulo: ehInfantil()
                    ? 'O que você mais quer conquistar com os estudos?'
                    : 'Qual é o seu objetivo principal?',
                multipla: false,
                opcoes: ehInfantil() ? [
                    { valor: 'prova', texto: 'Passar de ano com boas notas' },
                    { valor: 'aprender', texto: 'Aprender coisas novas e curiosas' },
                    { valor: 'habito', texto: 'Estudar um pouquinho todos os dias' },
                    { valor: 'destaque', texto: 'Ficar muito bom em uma matéria' }
                ] : ehAvancado() ? [
                    { valor: 'prova', texto: 'Concursos, exames ou certificações' },
                    { valor: 'aprender', texto: 'Dominar um assunto específico' },
                    { valor: 'habito', texto: 'Consolidar o hábito de estudar' },
                    { valor: 'destaque', texto: 'Publicar, pesquisar ou me especializar' }
                ] : [
                    { valor: 'prova', texto: 'Vestibular, ENEM ou provas da escola' },
                    { valor: 'aprender', texto: 'Aprender matérias que considero difíceis' },
                    { valor: 'habito', texto: 'Criar uma rotina sólida de estudos' },
                    { valor: 'destaque', texto: 'Me destacar em uma área específica' }
                ]
            };
        case 8:
            return {
                etapa: 'Seu Obstáculo',
                titulo: 'Qual é o seu maior obstáculo hoje?',
                multipla: false,
                opcoes: [
                    { valor: 'foco', texto: 'Dificuldade de concentração e foco' },
                    { valor: 'procrastinacao', texto: 'Procrastinação — não consigo começar' },
                    { valor: 'direcao', texto: 'Não sei o que estudar nem por onde começar' },
                    { valor: 'cansaco', texto: 'Cansaço mental ou físico' }
                ]
            };
        case 9:
            return {
                etapa: 'Sua Meta',
                titulo: ehInfantil()
                    ? 'Qual é a sua meta para o próximo mês?'
                    : 'Qual é a sua meta de disciplina para 1 mês?',
                multipla: false,
                opcoes: [
                    { valor: 3, texto: ehInfantil() ? 'Estudar 3 dias seguidos' : 'Estudar 3 dias seguidos (começo suave)' },
                    { valor: 7, texto: 'Estudar 7 dias seguidos (1 semana)' },
                    { valor: 15, texto: 'Estudar 15 dias seguidos (2 semanas)' },
                    { valor: 30, texto: ehInfantil() ? 'Estudar todos os dias do mês' : 'Estudar 30 dias seguidos (1 mês completo)' }
                ]
            };
        case 10:
            return { etapa: 'Confirmação', titulo: 'Seu plano está pronto. Confira e confirme.' };
        default:
            return null;
    }
}

/* ---------- Renderização ---------- */

function renderizarProgresso() {
    const container = document.getElementById('diagProgresso');
    container.innerHTML = '';
    for (let i = 1; i <= TOTAL_PERGUNTAS; i++) {
        const ponto = document.createElement('div');
        ponto.className = 'ponto';
        if (i < perguntaAtual) ponto.classList.add('feito');
        else if (i === perguntaAtual) ponto.classList.add('ativo');
        container.appendChild(ponto);
    }
}

function renderizarPergunta() {
    const container = document.getElementById('diagConteudo');
    const pergunta = getPergunta(perguntaAtual);

    if (perguntaAtual === 10) {
        renderizarResumo(container, pergunta);
    } else {
        renderizarOpcoes(container, pergunta);
    }

    document.getElementById('btnVoltar').disabled = perguntaAtual === 1;
    atualizarBotaoProximo();
    renderizarProgresso();

    if (window.lucide) lucide.createIcons();
}

function renderizarOpcoes(container, pergunta) {
    const selecionadas = respostas[perguntaAtual] || [];
    const opcoesHTML = pergunta.opcoes.map((opcao, idx) => {
        const selecionada = selecionadas.includes(opcao.valor);
        return `
            <div class="diag-opcao ${selecionada ? 'selecionada' : ''}" data-idx="${idx}">
                <span>${opcao.texto}</span>
                <span class="check-indicador">${selecionada ? '<i data-lucide="check"></i>' : ''}</span>
            </div>
        `;
    }).join('');

    container.innerHTML = `
        <div class="diag-etapa">Pergunta ${perguntaAtual} de ${TOTAL_PERGUNTAS} · ${pergunta.etapa}</div>
        <div class="diag-pergunta">${pergunta.titulo}</div>
        <div class="diag-opcoes">${opcoesHTML}</div>
    `;

    container.querySelectorAll('.diag-opcao').forEach(el => {
        el.addEventListener('click', () => {
            const opcao = pergunta.opcoes[Number(el.dataset.idx)];
            selecionarOpcao(pergunta, opcao.valor);
        });
    });
}

function renderizarResumo(container, pergunta) {
    const dificuldades = (respostas[2] || []).join(', ') || '—';
    const facilidades = (respostas[3] || []).join(', ') || '—';
    const estilo = textoOpcao(4, respostas[4]);
    const tempo = respostas[5] ? `${respostas[5][0]} minutos/dia` : '—';
    const frequencia = textoOpcao(6, respostas[6]);
    const objetivo = textoOpcao(7, respostas[7]);
    const obstaculo = textoOpcao(8, respostas[8]);
    const meta = respostas[9] ? `${respostas[9][0]} dias seguidos` : '—';

    container.innerHTML = `
        <div class="diag-etapa">Pergunta ${perguntaAtual} de ${TOTAL_PERGUNTAS} · ${pergunta.etapa}</div>
        <div class="diag-pergunta">${pergunta.titulo}</div>
        <div class="diag-resumo">
            <div class="diag-resumo-linha"><span class="rotulo">Escolaridade</span><span class="valor">${getNivelTexto()}</span></div>
            <div class="diag-resumo-linha"><span class="rotulo">Dificuldades</span><span class="valor">${dificuldades}</span></div>
            <div class="diag-resumo-linha"><span class="rotulo">Facilidades</span><span class="valor">${facilidades}</span></div>
            <div class="diag-resumo-linha"><span class="rotulo">Estilo</span><span class="valor">${estilo}</span></div>
            <div class="diag-resumo-linha"><span class="rotulo">Tempo diário</span><span class="valor">${tempo}</span></div>
            <div class="diag-resumo-linha"><span class="rotulo">Frequência</span><span class="valor">${frequencia}</span></div>
            <div class="diag-resumo-linha"><span class="rotulo">Objetivo</span><span class="valor">${objetivo}</span></div>
            <div class="diag-resumo-linha"><span class="rotulo">Obstáculo</span><span class="valor">${obstaculo}</span></div>
            <div class="diag-resumo-linha"><span class="rotulo">Meta</span><span class="valor">${meta}</span></div>
        </div>
    `;
}

function textoOpcao(numeroPergunta, valoresSelecionados) {
    if (!valoresSelecionados || valoresSelecionados.length === 0) return '—';
    const pergunta = getPergunta(numeroPergunta);
    const encontrada = (pergunta.opcoes || []).find(o => o.valor === valoresSelecionados[0]);
    return encontrada ? encontrada.texto : '—';
}

/* ---------- Seleção e navegação ---------- */

function selecionarOpcao(pergunta, valor) {
    if (!respostas[perguntaAtual]) respostas[perguntaAtual] = [];

    if (pergunta.multipla) {
        const idx = respostas[perguntaAtual].indexOf(valor);
        if (idx === -1) {
            if (respostas[perguntaAtual].length >= pergunta.max) {
                mostrarToastDiag(`Você pode escolher no máximo ${pergunta.max} opções.`);
                return;
            }
            respostas[perguntaAtual].push(valor);
        } else {
            respostas[perguntaAtual].splice(idx, 1);
        }
    } else {
        respostas[perguntaAtual] = [valor];
    }

    renderizarPergunta();
}

function atualizarBotaoProximo() {
    const btn = document.getElementById('btnProximo');
    if (perguntaAtual === 10) {
        btn.disabled = false;
        btn.innerHTML = 'Confirmar e criar conta <i data-lucide="arrow-right"></i>';
    } else {
        const respondida = (respostas[perguntaAtual] || []).length > 0;
        btn.disabled = !respondida;
        btn.innerHTML = 'Próximo <i data-lucide="arrow-right"></i>';
    }
    if (window.lucide) lucide.createIcons();
}

function proximaPergunta() {
    if (perguntaAtual < TOTAL_PERGUNTAS) {
        perguntaAtual++;
        renderizarPergunta();
    } else {
        finalizarDiagnostico();
    }
}

function voltarPergunta() {
    if (perguntaAtual > 1) {
        perguntaAtual--;
        renderizarPergunta();
    }
}

/* ---------- Finalização ---------- */

function finalizarDiagnostico() {
    const perfil = {
        escolaridade: getNivel(),
        escolaridadeTexto: getNivelTexto(),
        dificuldades: respostas[2] || [],
        facilidades: respostas[3] || [],
        estilo: respostas[4] ? respostas[4][0] : 'leitura',
        tempoMinutos: respostas[5] ? respostas[5][0] : 15,
        frequencia: respostas[6] ? respostas[6][0] : 'diariamente',
        objetivo: respostas[7] ? respostas[7][0] : 'habito',
        obstaculo: respostas[8] ? respostas[8][0] : 'foco',
        metaDias: respostas[9] ? respostas[9][0] : 7
    };

    localStorage.setItem('norvi_diagnostico', JSON.stringify(perfil));
    window.location.href = 'onboarding.html';
}

function mostrarToastDiag(mensagem) {
    const container = document.getElementById('toastContainer');
    if (!container) return;
    const toast = document.createElement('div');
    toast.className = 'toast';
    toast.innerHTML = `<i data-lucide="alert-circle"></i> ${mensagem}`;
    container.appendChild(toast);
    if (window.lucide) lucide.createIcons();
    setTimeout(() => toast.remove(), 3500);
}

/* ---------- Animação de digitação (seção Problema) ---------- */

function iniciarDigitacao() {
    const alvo = document.getElementById('textoDigitacao');
    if (!alvo) return;

    const texto = 'Você começa animado, compra cadernos novos, monta um cronograma perfeito... e em duas semanas está abandonado. Não é falta de inteligência. É falta de método. A disciplina não nasce pronta: ela é construída, um dia de cada vez.';

    let indice = 0;
    let iniciou = false;

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting && !iniciou) {
                iniciou = true;
                digitar();
            }
        });
    }, { threshold: 0.4 });

    observer.observe(alvo);

    function digitar() {
        if (indice <= texto.length) {
            alvo.innerHTML = texto.slice(0, indice) + '<span class="cursor-digitacao"></span>';
            indice++;
            setTimeout(digitar, 22);
        }
    }
}

/* ---------- Animações de scroll (reveal) ---------- */

function iniciarReveals() {
    const elementos = document.querySelectorAll('.reveal');
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visivel');
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.15 });

    elementos.forEach(el => observer.observe(el));
}

/* ---------- Inicialização ---------- */

document.addEventListener('DOMContentLoaded', () => {
    // Se já está logado e tem diagnóstico, vai direto ao dashboard
    const sessao = localStorage.getItem('norvi_session') || sessionStorage.getItem('norvi_session');
    const diag = localStorage.getItem('norvi_diagnostico');
    if (sessao && diag) {
        window.location.href = 'dashboard.html';
        return;
    }

    renderizarPergunta();
    iniciarDigitacao();
    iniciarReveals();

    document.getElementById('btnProximo').addEventListener('click', proximaPergunta);
    document.getElementById('btnVoltar').addEventListener('click', voltarPergunta);

    if (window.lucide) lucide.createIcons();
});
