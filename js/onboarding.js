const PERGUNTAS = [
    {
        id: 1,
        categoria: "Disponibilidade de Tempo",
        pergunta: "Quantos minutos por dia você consegue reservar para estudar?",
        opcoes: [
            { texto: "Menos de 15 minutos ⏱️", pontos: 1 },
            { texto: "15 a 30 minutos", pontos: 2 },
            { texto: "30 a 60 minutos", pontos: 3 },
            { texto: "Mais de 1 hora", pontos: 4 }
        ]
    },
    {
        id: 2,
        categoria: "Consistência Atual",
        pergunta: "Com que frequência você ESTUDA atualmente?",
        opcoes: [
            { texto: "Raramente (menos de 1x por semana)", pontos: 1 },
            { texto: "1 a 2 vezes por semana", pontos: 2 },
            { texto: "3 a 4 vezes por semana", pontos: 3 },
            { texto: "Todos os dias (ou quase)", pontos: 4 }
        ]
    },
    {
        id: 3,
        categoria: "Clareza do Objetivo",
        pergunta: "Qual é seu objetivo principal com os estudos?",
        opcoes: [
            { texto: "Ainda estou explorando, sem meta definida", pontos: 1 },
            { texto: "Quero aprender um assunto específico (ex: matemática básica)", pontos: 2 },
            { texto: "Quero passar em uma prova ou concurso", pontos: 3 },
            { texto: "Tenho uma meta clara com prazo definido (ex: nota X no Enem)", pontos: 4 }
        ]
    },
    {
        id: 4,
        categoria: "Formato Preferido de Estudo",
        pergunta: "Como você prefere estudar? (sem vídeos, apenas opções textuais)",
        opcoes: [
            { texto: "Lendo resumos e textos explicativos 📖", pontos: 1 },
            { texto: "Resolvendo questões e exercícios 📝", pontos: 2 },
            { texto: "Criando mapas mentais e esquemas 🗺️", pontos: 3 },
            { texto: "Misturando leitura com exercícios 🔄", pontos: 4 }
        ]
    },
    {
        id: 5,
        categoria: "Maior Dificuldade",
        pergunta: "Qual é seu maior obstáculo para estudar?",
        opcoes: [
            { texto: "Dificuldade de concentração/foco 😵", pontos: 1 },
            { texto: "Procrastinação - não consigo começar 😴", pontos: 2 },
            { texto: "Não sei o que estudar nem por onde começar 🤔", pontos: 3 },
            { texto: "Cansaço mental ou físico 😩", pontos: 4 }
        ]
    },
    {
        id: 6,
        categoria: "Confiança no Aprendizado",
        pergunta: "Como você se sente ao aprender algo novo?",
        opcoes: [
            { texto: "Muito inseguro(a) - acho que não consigo", pontos: 1 },
            { texto: "Inseguro(a) - tenho dúvidas sobre minha capacidade", pontos: 2 },
            { texto: "Confiante - acredito que consigo com esforço", pontos: 3 },
            { texto: "Muito confiante - sei que aprendo bem", pontos: 4 }
        ]
    },
    {
        id: 7,
        categoria: "Método de Revisão",
        pergunta: "Como você revisa o conteúdo estudado?",
        opcoes: [
            { texto: "Não reviso, estudo e sigo em frente", pontos: 1 },
            { texto: "Reviso só quando vou fazer prova", pontos: 2 },
            { texto: "Reviso de forma aleatória, sem método", pontos: 3 },
            { texto: "Uso técnicas como resumos, flashcards ou questões de revisão", pontos: 4 }
        ]
    },
    {
        id: 8,
        categoria: "Fonte de Motivação",
        pergunta: "O que mais te motiva a estudar?",
        opcoes: [
            { texto: "Passar em uma prova ou vestibular 🎯", pontos: 1 },
            { texto: "Crescer profissionalmente ou conseguir um emprego 💼", pontos: 2 },
            { texto: "Satisfação pessoal e vontade de aprender 🤓", pontos: 3 },
            { texto: "Cobrança externa (família, trabalho, etc.) 😰", pontos: 4 }
        ]
    },
    {
        id: 9,
        categoria: "Ambiente de Estudo",
        pergunta: "Como é o local onde você estuda?",
        opcoes: [
            { texto: "Não tenho um lugar fixo para estudar", pontos: 1 },
            { texto: "Ambiente barulhento e com distrações", pontos: 2 },
            { texto: "Ambiente razoável, mas com algumas interrupções", pontos: 3 },
            { texto: "Ambiente silencioso, organizado e dedicado", pontos: 4 }
        ]
    },
    {
        id: 10,
        categoria: "Meta de Curto Prazo",
        pergunta: "Qual sua meta para o próximo mês?",
        opcoes: [
            { texto: "Criar o hábito de estudar regularmente", pontos: 1 },
            { texto: "Finalizar um assunto específico (ex: 'revisar funções')", pontos: 2 },
            { texto: "Estudar pelo menos 5 dias por semana", pontos: 3 },
            { texto: "Manter uma ofensiva de 30 dias sem falhar", pontos: 4 }
        ]
    }
];

let perguntaAtual = 0;
let respostas = {}; // Guarda o índice da opção selecionada para cada pergunta (1 a 10)
let nomeUsuario = "";

function renderizarProgresso() {
    const progresso = document.getElementById("progresso");
    progresso.innerHTML = "";

    // Se estamos na pergunta do nome, não mostra progresso de 10 pontos
    if (perguntaAtual === 0) return;

    for (let i = 1; i <= 10; i++) {
        const ponto = document.createElement("div");
        ponto.className = "ponto";
        if (i < perguntaAtual) ponto.classList.add("feito");
        else if (i === perguntaAtual) ponto.classList.add("ativo");
        progresso.appendChild(ponto);
    }
}

function renderizarPergunta() {
    const container = document.getElementById("perguntas-container");
    container.innerHTML = "";

    if (perguntaAtual === 0) {
        // Pergunta do Nome
        container.innerHTML = `
            <div class="pergunta ativa">
                <h3>👋 Qual é o seu nome?</h3>
                <p>Vamos te chamar assim durante os estudos!</p>
                <input type="text" id="nome-input" placeholder="Digite seu nome..." maxlength="30" value="${nomeUsuario}" oninput="validarNome(this.value)">
            </div>
        `;
        document.getElementById("btn-voltar").disabled = true;
        document.getElementById("btn-proximo").disabled = !nomeUsuario.trim();
        renderizarProgresso();
        return;
    }

    const q = PERGUNTAS[perguntaAtual - 1];
    const selecionada = respostas[perguntaAtual] !== undefined;

    let opcoesHTML = "";
    q.opcoes.forEach((opt, idx) => {
        const isSel = respostas[perguntaAtual] === idx;
        opcoesHTML += `
            <div class="opcao ${isSel ? 'selecionada' : ''}" onclick="selecionarOpcao(${idx})">
                <span class="nome">${opt.texto}</span>
            </div>
        `;
    });

    container.innerHTML = `
        <div class="pergunta ativa">
            <p style="color: var(--purple-light); font-weight: 700; font-size: 12px; text-transform: uppercase; margin-bottom: 4px;">${q.categoria}</p>
            <h3>${q.pergunta}</h3>
            <p>Escolha a opção que melhor descreve você:</p>
            <div class="opcoes">
                ${opcoesHTML}
            </div>
        </div>
    `;

    document.getElementById("btn-voltar").disabled = false;
    document.getElementById("btn-proximo").disabled = !selecionada;
    renderizarProgresso();
}

function validarNome(val) {
    nomeUsuario = val.trim();
    document.getElementById("btn-proximo").disabled = !nomeUsuario;
}

function selecionarOpcao(idx) {
    respostas[perguntaAtual] = idx;
    renderizarPergunta();
}

function proximaPergunta() {
    if (perguntaAtual === 0) {
        const input = document.getElementById("nome-input");
        if (input) nomeUsuario = input.value.trim();
        if (!nomeUsuario) return;
    }

    if (perguntaAtual < 10) {
        perguntaAtual++;
        renderizarPergunta();
    } else {
        finalizarDiagnostico();
    }
}

function voltarPergunta() {
    if (perguntaAtual > 0) {
        perguntaAtual--;
        renderizarPergunta();
    }
}

function calcularPerfil() {
    let totalPontos = 0;
    for (let i = 1; i <= 10; i++) {
        const q = PERGUNTAS[i - 1];
        const optIdx = respostas[i];
        totalPontos += q.opcoes[optIdx].pontos;
    }

    let perfil = "";
    let plano = {};
    let emoji = "";

    if (totalPontos >= 10 && totalPontos <= 16) {
        perfil = "🐢 Iniciante";
        emoji = "🐢";
        plano = {
            frequencia: "3 dias por semana",
            tempo: "15 minutos por sessão",
            materias: "Matemática (foco em conjuntos)",
            meta: "3 questões por dia",
            missao: "Resolver 3 questões sobre conjuntos numéricos em 15 min",
            tempoMinutos: 15
        };
    } else if (totalPontos >= 17 && totalPontos <= 24) {
        perfil = "🦊 Intermediário";
        emoji = "🦊";
        plano = {
            frequencia: "4 dias por semana",
            tempo: "20 minutos por sessão",
            materias: "Matemática + História (alternadas)",
            meta: "5 questões por dia",
            missao: "Resolver 5 questões sobre conjuntos numéricos em 20 min",
            tempoMinutos: 20
        };
    } else if (totalPontos >= 25 && totalPontos <= 32) {
        perfil = "🦅 Avançado";
        emoji = "🦅";
        plano = {
            frequencia: "5 dias por semana",
            tempo: "30 minutos por sessão",
            materias: "Matemática + História + Geografia",
            meta: "8 questões por dia",
            missao: "Resolver 8 questões sobre conjuntos numéricos em 30 min",
            tempoMinutos: 30
        };
    } else {
        perfil = "🏆 Master";
        emoji = "🏆";
        plano = {
            frequencia: "Diário",
            tempo: "45 minutos por sessão",
            materias: "Ciclo completo de matérias",
            meta: "12+ questões por dia",
            missao: "Resolver 12 questões sobre conjuntos numéricos em 45 min",
            tempoMinutos: 45
        };
    }

    return { totalPontos, perfil, plano, emoji };
}

function finalizarDiagnostico() {
    const { totalPontos, perfil, plano, emoji } = calcularPerfil();

    document.getElementById("diagnostico").style.display = "none";
    document.getElementById("progresso").style.display = "none";
    document.getElementById("tela-final").classList.add("ativo");

    document.getElementById("final-emoji").textContent = emoji;
    document.getElementById("final-titulo").textContent = `Seu Perfil: ${perfil}`;

    const resumo = document.getElementById("resumo-final");
    resumo.innerHTML = `
        <div><span class="label">👤 Nome</span><span class="valor">${nomeUsuario}</span></div>
        <div><span class="label">📊 Pontuação</span><span class="valor">${totalPontos} pontos</span></div>
        <div><span class="label">📅 Frequência</span><span class="valor">${plano.frequencia}</span></div>
        <div><span class="label">⏱️ Tempo</span><span class="valor">${plano.tempo}</span></div>
        <div><span class="label">📚 Matérias</span><span class="valor">${plano.materias}</span></div>
        <div><span class="label">📝 Meta Diária</span><span class="valor">${plano.meta}</span></div>
        <div style="flex-direction: column; align-items: flex-start; gap: 4px; border: none; background: rgba(124, 58, 237, 0.1); padding: 10px; border-radius: 8px; margin-top: 10px;">
            <span class="label" style="color: var(--purple-light); font-weight: bold;">🎯 Sua Missão de Hoje:</span>
            <span style="font-size: 13px; font-weight: 600; color: #fff;">"${plano.missao}"</span>
        </div>
    `;

    // Salva no LocalStorage para o index.html ler
    const dadosEstudos = {
        nome: nomeUsuario,
        perfil: perfil,
        plano: plano,
        totalPontos: totalPontos
    };
    localStorage.setItem("usuario_estudos", JSON.stringify(dadosEstudos));
}

function iniciarApp() {
    window.location.href = "index.html";
}

// Pula onboarding se já tiver dados
if (localStorage.getItem("usuario_estudos")) {
    window.location.href = "index.html";
}

document.addEventListener("DOMContentLoaded", () => {
    renderizarPergunta();
});
