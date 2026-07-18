const PERGUNTAS = [
    {
        id: 1,
        categoria: "Nível Acadêmico",
        pergunta: "Qual é o seu nível de escolaridade?",
        multipla: false,
        opcoes: [
            { texto: "1º ao 5º ano do Fundamental", valor: "fundamental_1" },
            { texto: "6º ao 9º ano do Fundamental", valor: "fundamental_2" },
            { texto: "Ensino Médio (1º ao 3º ano)", valor: "medio" },
            { texto: "Ensino Superior (Graduação)", valor: "superior" },
            { texto: "Pós-Graduação (Mestrado/Doutorado)", valor: "pos" }
        ]
    },
    {
        id: 2,
        categoria: "Área de Conhecimento",
        pergunta: "Qual é a sua área de conhecimento principal?",
        multipla: false,
        opcoes: [
            { texto: "Exatas (Matemática, Física, Química)", valor: "exatas" },
            { texto: "Humanas (História, Geografia, Filosofia)", valor: "humanas" },
            { texto: "Biológicas (Biologia, Ciências)", valor: "biologicas" },
            { texto: "Linguagens (Português, Literatura, Inglês)", valor: "linguagens" },
            { texto: "Interdisciplinar (várias áreas)", valor: "interdisciplinar" }
        ]
    },
    {
        id: 3,
        categoria: "Matérias com Dificuldade",
        pergunta: "Em quais matérias você tem MAIS dificuldade? (Escolha até 3)",
        multipla: true,
        maxSelecoes: 3,
        opcoes: [
            { texto: "Matemática", valor: "Matemática" },
            { texto: "Português", valor: "Português" },
            { texto: "História", valor: "História" },
            { texto: "Geografia", valor: "Geografia" },
            { texto: "Ciências/Biologia", valor: "Ciências" },
            { texto: "Física", valor: "Física" },
            { texto: "Química", valor: "Química" },
            { texto: "Inglês", valor: "Inglês" },
            { texto: "Filosofia", valor: "Filosofia" },
            { texto: "Sociologia", valor: "Sociologia" }
        ]
    },
    {
        id: 4,
        categoria: "Matérias com Facilidade",
        pergunta: "Em quais matérias você tem MENOS dificuldade? (Escolha até 2)",
        multipla: true,
        maxSelecoes: 2,
        opcoes: [
            { texto: "Matemática", valor: "Matemática" },
            { texto: "Português", valor: "Português" },
            { texto: "História", valor: "História" },
            { texto: "Geografia", valor: "Geografia" },
            { texto: "Ciências/Biologia", valor: "Ciências" },
            { texto: "Física", valor: "Física" },
            { texto: "Química", valor: "Química" },
            { texto: "Inglês", valor: "Inglês" },
            { texto: "Filosofia", valor: "Filosofia" },
            { texto: "Sociologia", valor: "Sociologia" }
        ]
    },
    {
        id: 5,
        categoria: "Estilo de Aprendizagem",
        pergunta: "Qual é o seu estilo de aprendizagem preferido?",
        multipla: false,
        opcoes: [
            { texto: "Leitura e resumos 📖", valor: "leitura" },
            { texto: "Exercícios práticos 📝", valor: "exercicios" },
            { texto: "Slides e esquemas visuais 🗺️", valor: "slides" },
            { texto: "Explicações passo-a-passo (guiado) 🧭", valor: "guiado" }
        ]
    },
    {
        id: 6,
        categoria: "Disponibilidade de Tempo",
        pergunta: "Quanto tempo por dia você consegue reservar para estudar?",
        multipla: false,
        opcoes: [
            { texto: "Menos de 15 minutos ⏱️", valor: "15min", tempoMinutos: 15 },
            { texto: "15 a 30 minutos", valor: "30min", tempoMinutos: 20 },
            { texto: "30 a 60 minutos", valor: "60min", tempoMinutos: 30 },
            { texto: "Mais de 1 hora", valor: "1h+", tempoMinutos: 45 }
        ]
    },
    {
        id: 7,
        categoria: "Frequência de Estudos",
        pergunta: "Com que frequência você ESTUDA atualmente?",
        multipla: false,
        opcoes: [
            { texto: "Raramente (menos de 1x por semana)", valor: "raramente" },
            { texto: "1 a 2 vezes por semana", valor: "1-2x" },
            { texto: "3 a 4 vezes por semana", valor: "3-4x" },
            { texto: "Todos os dias (ou quase)", valor: "diario" }
        ]
    },
    {
        id: 8,
        categoria: "Objetivo Principal",
        pergunta: "Qual é seu objetivo principal com os estudos?",
        multipla: false,
        opcoes: [
            { texto: "Passar de ano / Vestibular / Concurso", valor: "prova" },
            { texto: "Aprender um assunto específico", valor: "assunto" },
            { texto: "Criar o hábito de estudar regularmente", valor: "habito" },
            { texto: "Aprofundar conhecimento em uma área", valor: "aprofundar" }
        ]
    },
    {
        id: 9,
        categoria: "Maior Obstáculo",
        pergunta: "Qual é seu maior obstáculo para estudar?",
        multipla: false,
        opcoes: [
            { texto: "Dificuldade de concentração / Foco 😵", valor: "foco" },
            { texto: "Procrastinação - não consigo começar 😴", valor: "procrastinacao" },
            { texto: "Não sei o que estudar nem por onde começar 🤔", valor: "direcao" },
            { texto: "Cansaço mental ou físico 😩", valor: "cansaco" }
        ]
    },
    {
        id: 10,
        categoria: "Meta de Curto Prazo",
        pergunta: "Qual sua meta para o próximo mês?",
        multipla: false,
        opcoes: [
            { texto: "Criar o hábito (estudar pelo menos 3x/semana)", valor: "habito_3x" },
            { texto: "Finalizar um assunto específico", valor: "finalizar_assunto" },
            { texto: "Estudar pelo menos 5 dias por semana", valor: "estudar_5x" },
            { texto: "Manter uma ofensiva de 30 dias sem falhar", valor: "ofensiva_30d" }
        ]
    }
];

let perguntaAtual = 1;
let respostas = {}; // Guarda as respostas selecionadas
let authMode = "cadastro"; // "cadastro" ou "login"

function showToast(message) {
    const container = document.getElementById('toastContainer');
    const toast = document.createElement('div');
    toast.className = 'toast';
    toast.innerHTML = `<span>✨</span> ${message}`;
    container.appendChild(toast);
    setTimeout(() => toast.remove(), 3000);
}

function iniciarDiagnostico() {
    document.getElementById("tela-inicial").style.display = "none";
    document.getElementById("tela-diagnostico").style.display = "block";
    renderizarPergunta();
}

function renderizarProgresso() {
    const progresso = document.getElementById("progresso");
    progresso.innerHTML = "";
    for (let i = 1; i <= 10; i++) {
        const ponto = document.createElement("div");
        ponto.className = "ponto";
        if (i < perguntaAtual) ponto.classList.add("feito");
        else if (i === perguntaAtual) ponto.classList.add("ativo");
        progresso.appendChild(ponto);
    }
}

function renderizarPergunta() {
    const container = document.getElementById("pergunta-container");
    container.innerHTML = "";

    const q = PERGUNTAS[perguntaAtual - 1];
    const selecionadas = respostas[perguntaAtual] || [];

    let opcoesHTML = "";
    q.opcoes.forEach((opt, idx) => {
        const isSel = selecionadas.includes(idx);
        opcoesHTML += `
            <div class="opcao ${isSel ? 'selecionada' : ''}" onclick="selecionarOpcao(${idx})">
                <span>${opt.texto}</span>
                ${q.multipla ? '<div class="opcao-checkbox"></div>' : ''}
            </div>
        `;
    });

    container.innerHTML = `
        <p style="color: var(--accent); font-weight: 700; font-size: 12px; text-transform: uppercase; margin-bottom: 4px;">${q.categoria}</p>
        <h3 style="font-size: 18px; font-weight: 800; margin-bottom: 16px; text-align: left;">${q.pergunta}</h3>
        <div class="opcoes">
            ${opcoesHTML}
        </div>
    `;

    document.getElementById("btn-voltar").disabled = perguntaAtual === 1;
    document.getElementById("btn-proximo").disabled = selecionadas.length === 0;
    renderizarProgresso();
}

function selecionarOpcao(idx) {
    const q = PERGUNTAS[perguntaAtual - 1];
    if (!respostas[perguntaAtual]) respostas[perguntaAtual] = [];

    if (q.multipla) {
        const index = respostas[perguntaAtual].indexOf(idx);
        if (index === -1) {
            if (respostas[perguntaAtual].length < q.maxSelecoes) {
                respostas[perguntaAtual].push(idx);
            } else {
                showToast(`Você pode escolher no máximo ${q.maxSelecoes} opções!`);
            }
        } else {
            respostas[perguntaAtual].splice(index, 1);
        }
    } else {
        respostas[perguntaAtual] = [idx];
    }

    renderizarPergunta();
}

function proximaPergunta() {
    if (perguntaAtual < 10) {
        perguntaAtual++;
        renderizarPergunta();
    } else {
        document.getElementById("tela-diagnostico").style.display = "none";
        document.getElementById("tela-auth").style.display = "block";
    }
}

function voltarPergunta() {
    if (perguntaAtual > 1) {
        perguntaAtual--;
        renderizarPergunta();
    }
}

function toggleAuthMode() {
    authMode = authMode === "cadastro" ? "login" : "cadastro";
    const titulo = document.querySelector("#tela-auth .titulo");
    const subtitulo = document.querySelector("#tela-auth .subtitulo");
    const groupConfirmar = document.getElementById("group-confirmar");
    const btnAction = document.getElementById("btn-auth-action");
    const toggleText = document.getElementById("auth-toggle-text");
    const toggleLink = document.getElementById("auth-toggle-link");

    if (authMode === "login") {
        titulo.textContent = "Entrar na sua conta";
        subtitulo.textContent = "Acesse seu progresso e continue seus estudos.";
        groupConfirmar.style.display = "none";
        btnAction.textContent = "Entrar";
        toggleText.textContent = "Não tem uma conta?";
        toggleLink.textContent = "Criar Conta";
    } else {
        titulo.textContent = "Crie sua conta";
        subtitulo.textContent = "Salve seu progresso e acesse seu plano personalizado.";
        groupConfirmar.style.display = "block";
        btnAction.textContent = "Criar Conta";
        toggleText.textContent = "Já tem uma conta?";
        toggleLink.textContent = "Entrar";
    }
}

function toggleManterConectado() {
    const checkbox = document.getElementById("auth-manter");
    checkbox.checked = !checkbox.checked;
}

function processarAuth() {
    const email = document.getElementById("auth-email").value.trim();
    const senha = document.getElementById("auth-senha").value.trim();
    const confirmar = document.getElementById("auth-confirmar").value.trim();
    const manter = document.getElementById("auth-manter").checked;

    if (!email || !senha) {
        showToast("Por favor, preencha todos os campos!");
        return;
    }

    if (authMode === "cadastro") {
        if (senha !== confirmar) {
            showToast("As senhas não coincidem!");
            return;
        }

        localStorage.setItem("auth_email", email);
        localStorage.setItem("auth_senha", senha);
        showToast("Conta criada com sucesso!");
    } else {
        const emailSalvo = localStorage.getItem("auth_email");
        const senhaSalva = localStorage.getItem("auth_senha");

        if (email !== emailSalvo || senha !== senhaSalva) {
            showToast("E-mail ou senha incorretos!");
            return;
        }
        showToast("Login realizado com sucesso!");
    }

    const sessionData = { email, logado: true };
    if (manter) {
        localStorage.setItem("norvi_session", JSON.stringify(sessionData));
    } else {
        sessionStorage.setItem("norvi_session", JSON.stringify(sessionData));
    }

    gerarPerfilEstudos();
}

function gerarPerfilEstudos() {
    const p1Idx = respostas[1][0];
    const escolaridade = PERGUNTAS[0].opcoes[p1Idx].valor;
    const escolaridadeTexto = PERGUNTAS[0].opcoes[p1Idx].texto;

    const p3Indices = respostas[3] || [];
    const dificuldades = p3Indices.map(idx => PERGUNTAS[2].opcoes[idx].valor);

    const p5Idx = respostas[5][0];
    const estilo = PERGUNTAS[4].opcoes[p5Idx].valor;

    const p6Idx = respostas[6][0];
    const tempoOpt = PERGUNTAS[5].opcoes[p6Idx];
    const tempoMinutos = tempoOpt.tempoMinutos;

    let perfil = "Iniciante";
    let complexidade = "Baixa";
    if (escolaridade === "superior" || escolaridade === "pos") {
        perfil = "Avançado";
        complexidade = "Alta";
    } else if (escolaridade === "medio") {
        perfil = "Intermediário";
        complexidade = "Média";
    }

    const plano = {
        escolaridade: escolaridadeTexto,
        perfil: perfil,
        complexidade: complexidade,
        dificuldades: dificuldades,
        estilo: estilo,
        tempoMinutos: tempoMinutos,
        nome: emailToName(localStorage.getItem("auth_email") || "Estudante")
    };

    localStorage.setItem("usuario_estudos", JSON.stringify(plano));
    window.location.href = "index.html";
}

function emailToName(email) {
    const parts = email.split("@")[0];
    return parts.charAt(0).toUpperCase() + parts.slice(1);
}

const session = localStorage.getItem("norvi_session") || sessionStorage.getItem("norvi_session");
if (session) {
    window.location.href = "index.html";
}
