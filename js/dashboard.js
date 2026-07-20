/* ============================================
   NORVI - Dashboard
   Missões personalizadas (do diagnóstico), Chama
   da Consistência, XP e níveis, calendário,
   ranking semanal, perfil e tutorial guiado.
   ============================================ */

/* ---------- Proteção de rota ---------- */
const sessaoBruta = localStorage.getItem('norvi_session') || sessionStorage.getItem('norvi_session');
if (!sessaoBruta) {
    window.location.href = 'onboarding.html';
}

/* ---------- Estado ---------- */
const ESTADO_PADRAO = {
    xp: 0,
    streak: 0,
    diasCompletos: [],
    ultimoDiaCompleto: null,
    missoesConcluidasHoje: [],
    tarefasCustom: [],
    isVip: false,
    tutorialConcluido: false
};

let estado = { ...ESTADO_PADRAO };
let usuario = null;
let mesCalendario = new Date().getMonth();
let anoCalendario = new Date().getFullYear();

function carregarEstado() {
    try {
        const salvo = localStorage.getItem('norvi_estado');
        if (salvo) estado = { ...ESTADO_PADRAO, ...JSON.parse(salvo) };
    } catch (e) {
        estado = { ...ESTADO_PADRAO };
    }

    try {
        usuario = JSON.parse(localStorage.getItem('norvi_usuario') || 'null');
    } catch (e) {
        usuario = null;
    }

    // Novo dia: zera missões de hoje; verifica se a chama apagou
    const hoje = dataHoje();
    if (estado.ultimoDiaCompleto !== hoje && estado.missoesConcluidasHoje.length > 0) {
        const ontem = dataOntem();
        if (estado.ultimoDiaCompleto !== ontem && !estado.diasCompletos.includes(ontem)) {
            if (estado.streak > 0) {
                estado.streak = 0;
                mostrarToast('Sua Chama da Consistência se apagou. Reacenda hoje!');
            }
        }
        estado.missoesConcluidasHoje = [];
        estado.tarefasCustom = estado.tarefasCustom.filter(t => !t.concluida);
    }
    salvarEstado();
}

function salvarEstado() {
    localStorage.setItem('norvi_estado', JSON.stringify(estado));
}

function dataHoje() {
    return new Date().toISOString().split('T')[0];
}

function dataOntem() {
    return new Date(Date.now() - 86400000).toISOString().split('T')[0];
}

/* ---------- Missões geradas pelo diagnóstico ---------- */

const ICONES_MATERIA = {
    'Matemática': 'calculator', 'Cálculo': 'calculator', 'Estatística': 'bar-chart-2',
    'Português': 'book-open', 'Línguas': 'languages', 'Inglês': 'languages',
    'Ciências': 'flask-conical', 'Física': 'atom', 'Química': 'flask-conical',
    'Biologia': 'leaf', 'História': 'landmark', 'Geografia': 'globe',
    'Filosofia': 'brain', 'Sociologia': 'users', 'Arte': 'palette',
    'Programação': 'code', 'Metodologia': 'clipboard-list',
    'Métodos Quantitativos': 'bar-chart-2', 'Métodos Qualitativos': 'search',
    'Escrita Científica': 'pen-line', 'Revisão Bibliográfica': 'library', 'Ética': 'scale'
};

const ACOES_POR_ESTILO = {
    leitura: ['Ler e resumir um tópico de', 'Fazer anotações sobre'],
    exercicios: ['Resolver exercícios de', 'Praticar questões sobre'],
    visual: ['Montar um mapa mental de', 'Desenhar um esquema sobre'],
    guiado: ['Seguir uma explicação guiada de', 'Assistir e anotar um passo a passo de']
};

function gerarMissoes() {
    const diag = (usuario && usuario.diagnostico) || {};
    const dificuldades = diag.dificuldades && diag.dificuldades.length ? diag.dificuldades : ['Matemática'];
    const facilidades = diag.facilidades && diag.facilidades.length ? diag.facilidades : ['Português'];
    const estilo = diag.estilo || 'leitura';
    const tempoTotal = diag.tempoMinutos || 15;

    const materias = [dificuldades[0], facilidades[0]];
    const acoes = ACOES_POR_ESTILO[estilo] || ACOES_POR_ESTILO.leitura;
    const tempoPorMissao = Math.max(5, Math.round(tempoTotal / materias.length));

    return materias.map((materia, idx) => ({
        id: `m${idx + 1}`,
        materia,
        titulo: materia,
        descricao: `${acoes[idx % acoes.length]} ${materia}.`,
        tempo: tempoPorMissao,
        icone: ICONES_MATERIA[materia] || 'book-open'
    }));
}

/* ---------- XP e níveis ---------- */

const XP_POR_NIVEL = 100;

function adicionarXP(qtd) {
    estado.xp += qtd;
    salvarEstado();
    atualizarGamificacao();
}

function getNivel() {
    return Math.floor(estado.xp / XP_POR_NIVEL) + 1;
}

/* ---------- Chama da Consistência ---------- */

const ESTAGIOS_CHAMA = [
    { min: 0, nome: 'Centelha' },
    { min: 3, nome: 'Brasa' },
    { min: 7, nome: 'Fogueira' },
    { min: 15, nome: 'Tocha' },
    { min: 30, nome: 'Sol' }
];

function getEstagioChama() {
    let estagio = ESTAGIOS_CHAMA[0];
    for (const e of ESTAGIOS_CHAMA) {
        if (estado.streak >= e.min) estagio = e;
    }
    return estagio;
}

/* ---------- Renderização: Hoje ---------- */

function renderizarMissoes() {
    const lista = document.getElementById('taskList');
    lista.innerHTML = '';

    const missoes = gerarMissoes();
    const diaConcluido = estado.diasCompletos.includes(dataHoje());

    missoes.forEach(missao => {
        lista.appendChild(criarItemTarefa({
            id: missao.id,
            titulo: missao.titulo,
            descricao: missao.descricao,
            tempo: missao.tempo,
            icone: missao.icone,
            concluida: estado.missoesConcluidasHoje.includes(missao.id) || diaConcluido,
            aoAlternar: (marcada) => alternarMissao(missao.id, marcada)
        }));
    });

    estado.tarefasCustom.forEach(tarefa => {
        lista.appendChild(criarItemTarefa({
            id: tarefa.id,
            titulo: tarefa.titulo,
            descricao: tarefa.descricao || 'Tarefa personalizada.',
            tempo: null,
            icone: 'flag',
            concluida: tarefa.concluida || diaConcluido,
            aoAlternar: (marcada) => alternarTarefaCustom(tarefa.id, marcada)
        }));
    });

    if (window.lucide) lucide.createIcons();
}

function criarItemTarefa({ id, titulo, descricao, tempo, icone, concluida, aoAlternar }) {
    const item = document.createElement('div');
    item.className = 'task-item' + (concluida ? ' concluida' : '');
    item.id = `task-${id}`;

    const checkbox = document.createElement('div');
    checkbox.className = 'task-checkbox' + (concluida ? ' marcado' : '');
    checkbox.innerHTML = concluida ? '<i data-lucide="check"></i>' : '';

    checkbox.addEventListener('click', (e) => {
        e.stopPropagation();
        aoAlternar(!checkbox.classList.contains('marcado'));
    });

    const content = document.createElement('div');
    content.className = 'task-content';
    content.innerHTML = `
        <div class="task-titulo"><i data-lucide="${icone}"></i> ${titulo}</div>
        <div class="task-desc">${descricao}</div>
        ${tempo ? `<div class="task-meta"><i data-lucide="clock"></i> ${tempo} min</div>` : ''}
    `;

    content.addEventListener('click', () => {
        aoAlternar(!checkbox.classList.contains('marcado'));
    });

    item.appendChild(checkbox);
    item.appendChild(content);
    return item;
}

function alternarMissao(id, marcada) {
    const idx = estado.missoesConcluidasHoje.indexOf(id);
    if (marcada && idx === -1) {
        estado.missoesConcluidasHoje.push(id);
        adicionarXP(10);
        mostrarToast('Missão concluída! +10 XP', true);
    } else if (!marcada && idx !== -1) {
        estado.missoesConcluidasHoje.splice(idx, 1);
        estado.xp = Math.max(0, estado.xp - 10);
    }
    salvarEstado();
    renderizarMissoes();
    atualizarGamificacao();
    atualizarBotaoConcluir();
}

function alternarTarefaCustom(id, marcada) {
    const tarefa = estado.tarefasCustom.find(t => t.id === id);
    if (!tarefa) return;
    tarefa.concluida = marcada;
    if (marcada) {
        adicionarXP(5);
        mostrarToast('Tarefa concluída! +5 XP', true);
    } else {
        estado.xp = Math.max(0, estado.xp - 5);
    }
    salvarEstado();
    renderizarMissoes();
    atualizarGamificacao();
}

/* ---------- Adicionar tarefa personalizada ---------- */

function abrirFormTarefa() {
    document.getElementById('addTaskForm').classList.add('aberto');
    document.getElementById('addTaskTrigger').style.display = 'none';
    document.getElementById('taskInputTitulo').focus();
}

function fecharFormTarefa() {
    document.getElementById('addTaskForm').classList.remove('aberto');
    document.getElementById('addTaskTrigger').style.display = 'flex';
    document.getElementById('taskInputTitulo').value = '';
    document.getElementById('taskInputDesc').value = '';
}

function adicionarTarefa() {
    const titulo = document.getElementById('taskInputTitulo').value.trim();
    const descricao = document.getElementById('taskInputDesc').value.trim();

    if (!titulo) {
        mostrarToast('Dê um nome para a tarefa.');
        return;
    }

    estado.tarefasCustom.push({
        id: `c${Date.now()}`,
        titulo,
        descricao,
        concluida: false
    });

    salvarEstado();
    fecharFormTarefa();
    renderizarMissoes();
    mostrarToast('Tarefa adicionada ao seu dia.', true);
}

/* ---------- Concluir dia ---------- */

function atualizarBotaoConcluir() {
    const btn = document.getElementById('btnConcluirDia');
    const diaConcluido = estado.diasCompletos.includes(dataHoje());

    if (diaConcluido) {
        btn.disabled = true;
        btn.innerHTML = '<i data-lucide="check-circle"></i> Dia de estudos concluído';
    } else {
        btn.disabled = false;
        btn.innerHTML = '<i data-lucide="flag"></i> Concluir dia de estudos';
    }
    if (window.lucide) lucide.createIcons();
}

function concluirDia() {
    const hoje = dataHoje();
    if (estado.diasCompletos.includes(hoje)) return;

    const totalMissoes = gerarMissoes().length;
    if (estado.missoesConcluidasHoje.length < totalMissoes) {
        mostrarToast('Conclua todas as missões antes de fechar o dia.');
        return;
    }

    estado.diasCompletos.push(hoje);
    estado.ultimoDiaCompleto = hoje;
    estado.streak += 1;

    const bonus = estado.isVip ? 40 : 20;
    estado.xp += bonus;

    salvarEstado();
    atualizarGamificacao();
    atualizarBotaoConcluir();
    renderizarMissoes();
    renderizarCalendario();

    abrirModal(
        'flame',
        'Mais um dia de consistência!',
        `Sua chama agora está no estágio "${getEstagioChama().nome}" com ${estado.streak} dia(s) seguidos. +${bonus} XP${estado.isVip ? ' (bônus VIP em dobro)' : ''}.`
    );
}

/* ---------- Gamificação (cabeçalho) ---------- */

function atualizarGamificacao() {
    const nivel = getNivel();
    const xpNoNivel = estado.xp % XP_POR_NIVEL;
    const estagio = getEstagioChama();

    document.getElementById('chamaDias').textContent = `${estado.streak} ${estado.streak === 1 ? 'dia' : 'dias'}`;
    document.getElementById('chamaEstagio').textContent = estagio.nome;
    document.getElementById('nivelDisplay').textContent = `Nível ${nivel}`;
    document.getElementById('xpTexto').textContent = `${xpNoNivel}/${XP_POR_NIVEL} XP`;
    document.getElementById('xpPreenchimento').style.width = `${xpNoNivel}%`;

    const metaDias = usuario && usuario.diagnostico ? usuario.diagnostico.metaDias : 7;
    const diaAtual = Math.min(estado.streak + 1, metaDias);
    document.getElementById('metaTexto').textContent = `Dia ${diaAtual} de ${metaDias} da sua meta de disciplina`;
    document.getElementById('metaPreenchimento').style.width = `${(estado.streak / metaDias) * 100}%`;
}

/* ---------- Calendário ---------- */

const MESES = ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho', 'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro'];

function renderizarCalendario() {
    const grid = document.getElementById('calGrid');
    grid.innerHTML = '';

    document.getElementById('calTitulo').textContent = `${MESES[mesCalendario]} ${anoCalendario}`;

    const primeiroDia = new Date(anoCalendario, mesCalendario, 1).getDay();
    const totalDias = new Date(anoCalendario, mesCalendario + 1, 0).getDate();
    const hoje = dataHoje();

    for (let i = 0; i < primeiroDia; i++) {
        const vazio = document.createElement('div');
        vazio.className = 'cal-dia vazio';
        grid.appendChild(vazio);
    }

    for (let dia = 1; dia <= totalDias; dia++) {
        const dataStr = `${anoCalendario}-${String(mesCalendario + 1).padStart(2, '0')}-${String(dia).padStart(2, '0')}`;
        const celula = document.createElement('div');
        celula.className = 'cal-dia';
        celula.textContent = dia;
        if (dataStr === hoje) celula.classList.add('hoje');
        if (estado.diasCompletos.includes(dataStr)) celula.classList.add('estudado');
        grid.appendChild(celula);
    }

    // Resumo
    const total = estado.diasCompletos.length;
    const semanaAtras = new Date(Date.now() - 7 * 86400000).toISOString().split('T')[0];
    const naSemana = estado.diasCompletos.filter(d => d >= semanaAtras).length;
    const prefixoMes = `${anoCalendario}-${String(mesCalendario + 1).padStart(2, '0')}`;
    const noMes = estado.diasCompletos.filter(d => d.startsWith(prefixoMes)).length;

    document.getElementById('diasTotal').textContent = `${total} ${total === 1 ? 'dia' : 'dias'}`;
    document.getElementById('diasSemana').textContent = `${naSemana} ${naSemana === 1 ? 'dia' : 'dias'}`;
    document.getElementById('diasMes').textContent = `${noMes} ${noMes === 1 ? 'dia' : 'dias'}`;
}

function mudarMes(delta) {
    mesCalendario += delta;
    if (mesCalendario < 0) { mesCalendario = 11; anoCalendario--; }
    if (mesCalendario > 11) { mesCalendario = 0; anoCalendario++; }
    renderizarCalendario();
}

/* ---------- Ranking semanal ---------- */

function renderizarRanking() {
    const lista = document.getElementById('rankingList');
    const nomeUsuario = usuario ? usuario.nome : 'Você';

    const ficticios = [
        { nome: 'Mariana S.', xp: 320 },
        { nome: 'Lucas P.', xp: 275 },
        { nome: 'Beatriz R.', xp: 240 },
        { nome: 'Rafael T.', xp: 180 },
        { nome: 'Camila M.', xp: 120 }
    ];

    const todos = [...ficticios, { nome: nomeUsuario, xp: estado.xp, usuario: true }]
        .sort((a, b) => b.xp - a.xp);

    lista.innerHTML = todos.map((p, idx) => {
        let classePos = '';
        if (idx === 0) classePos = 'ouro';
        else if (idx === 1) classePos = 'prata';
        else if (idx === 2) classePos = 'bronze';

        return `
            <div class="ranking-item ${p.usuario ? 'usuario' : ''}">
                <div class="rank-pos ${classePos}">${idx + 1}</div>
                <div class="rank-nome">${p.usuario ? '<i data-lucide="user"></i>' : ''} ${p.nome}${p.usuario ? ' (você)' : ''}</div>
                <div class="rank-xp">${p.xp} XP</div>
            </div>
        `;
    }).join('');

    if (window.lucide) lucide.createIcons();
}

/* ---------- Perfil ---------- */

function renderizarPerfil() {
    const diag = usuario && usuario.diagnostico ? usuario.diagnostico : {};

    document.getElementById('perfilNome').textContent = usuario ? usuario.nome : '—';
    document.getElementById('perfilEmail').textContent = usuario ? usuario.email : '—';
    document.getElementById('perfilEscolaridade').textContent = diag.escolaridadeTexto || 'Não informado';
    document.getElementById('perfilTempo').textContent = diag.tempoMinutos ? `${diag.tempoMinutos} min/dia` : '—';
    document.getElementById('perfilMeta').textContent = diag.metaDias ? `${diag.metaDias} dias seguidos` : '—';

    document.getElementById('statXP').textContent = estado.xp;
    document.getElementById('statNivel').textContent = getNivel();
    document.getElementById('statDias').textContent = estado.diasCompletos.length;
    document.getElementById('statChama').textContent = getEstagioChama().nome;
    document.getElementById('statStreak').textContent = `${estado.streak} ${estado.streak === 1 ? 'dia' : 'dias'}`;
    document.getElementById('statTarefas').textContent = estado.tarefasCustom.length;
}

/* ---------- VIP ---------- */

function atualizarVIP() {
    const cardAssinar = document.getElementById('vipAssinar');
    const bannerAtivo = document.getElementById('vipAtivo');

    if (estado.isVip) {
        cardAssinar.style.display = 'none';
        bannerAtivo.style.display = 'flex';
    } else {
        cardAssinar.style.display = 'block';
        bannerAtivo.style.display = 'none';
    }
}

/* ---------- Abas ---------- */

function switchTab(nome) {
    document.querySelectorAll('.tab-content').forEach(t => t.classList.remove('ativo'));
    document.querySelectorAll('.menu-item').forEach(m => m.classList.remove('ativo'));

    document.getElementById(`tab-${nome}`).classList.add('ativo');
    const btn = document.getElementById(`menu-${nome}`);
    if (btn) btn.classList.add('ativo');

    if (nome === 'ranking') renderizarRanking();
    if (nome === 'perfil') renderizarPerfil();
    if (nome === 'calendario') renderizarCalendario();
    if (nome === 'vip') atualizarVIP();

    if (window.innerWidth <= 820) {
        document.getElementById('sidebar').classList.remove('aberto');
    }
}

/* ---------- Modal e toast ---------- */

function abrirModal(icone, titulo, descricao) {
    document.getElementById('modalIcone').innerHTML = `<i data-lucide="${icone}"></i>`;
    document.getElementById('modalTitulo').textContent = titulo;
    document.getElementById('modalDesc').textContent = descricao;
    document.getElementById('modalGenerico').style.display = 'flex';
    if (window.lucide) lucide.createIcons();
}

function fecharModal() {
    document.getElementById('modalGenerico').style.display = 'none';
}

function mostrarToast(mensagem, sucesso) {
    const container = document.getElementById('toastContainer');
    const toast = document.createElement('div');
    toast.className = 'toast' + (sucesso ? ' toast-success' : '');
    toast.innerHTML = `<i data-lucide="${sucesso ? 'check-circle' : 'alert-circle'}"></i> ${mensagem}`;
    container.appendChild(toast);
    if (window.lucide) lucide.createIcons();
    setTimeout(() => toast.remove(), 3500);
}

/* ---------- Sessão ---------- */

function sair() {
    localStorage.removeItem('norvi_session');
    sessionStorage.removeItem('norvi_session');
    window.location.href = 'index.html';
}

function refazerDiagnostico() {
    localStorage.removeItem('norvi_diagnostico');
    window.location.href = 'index.html#diagnostico';
}

/* ---------- Tutorial guiado ---------- */

const PASSOS_TUTORIAL = [
    { elemento: 'sidebar', texto: 'Bem-vindo ao Norvi. Este é o seu menu lateral: aqui você navega entre Hoje, Calendário, Ranking, VIP e Perfil.' },
    { elemento: 'gamificacaoBar', texto: 'Esta é a sua Chama da Consistência. Estude todos os dias para ela crescer de Centelha até Sol — e acompanhe seu XP e nível.' },
    { elemento: 'taskList', texto: 'Suas missões de hoje, geradas a partir do seu diagnóstico. Marque cada uma ao concluir e ganhe XP.' },
    { elemento: 'addTaskContainer', texto: 'Quer ir além? Adicione suas próprias tarefas personalizadas ao dia.' },
    { elemento: 'btnConcluirDia', texto: 'Ao terminar todas as missões, clique aqui para fechar o dia e alimentar sua chama. Pequenas vitórias diárias constroem grandes resultados.' }
];

let passoTutorial = 0;

function iniciarTutorial() {
    if (estado.tutorialConcluido) return;
    passoTutorial = 0;
    document.getElementById('tutorialOverlay').style.display = 'flex';
    mostrarPassoTutorial();
}

function mostrarPassoTutorial() {
    document.querySelectorAll('.tutorial-destaque').forEach(el => el.classList.remove('tutorial-destaque'));

    const passo = PASSOS_TUTORIAL[passoTutorial];
    const el = document.getElementById(passo.elemento);
    if (el) {
        el.classList.add('tutorial-destaque');
        if (passo.elemento === 'sidebar' && window.innerWidth <= 820) {
            el.classList.add('aberto');
        }
    }

    document.getElementById('tutorialPasso').textContent = `Passo ${passoTutorial + 1} de ${PASSOS_TUTORIAL.length}`;
    document.getElementById('tutorialTexto').textContent = passo.texto;
    document.getElementById('btnTutorialProximo').textContent =
        passoTutorial === PASSOS_TUTORIAL.length - 1 ? 'Começar jornada' : 'Próximo';
}

function proximoPassoTutorial() {
    if (passoTutorial < PASSOS_TUTORIAL.length - 1) {
        passoTutorial++;
        mostrarPassoTutorial();
    } else {
        finalizarTutorial();
    }
}

function finalizarTutorial() {
    document.querySelectorAll('.tutorial-destaque').forEach(el => el.classList.remove('tutorial-destaque'));
    document.getElementById('tutorialOverlay').style.display = 'none';
    if (window.innerWidth <= 820) {
        document.getElementById('sidebar').classList.remove('aberto');
    }
    estado.tutorialConcluido = true;
    salvarEstado();
    mostrarToast('Sua jornada de disciplina começou!', true);
}

/* ---------- Inicialização ---------- */

document.addEventListener('DOMContentLoaded', () => {
    carregarEstado();

    // Usuário no cabeçalho/sidebar
    if (usuario) {
        document.getElementById('usuarioNome').textContent = usuario.nome;
        document.getElementById('usuarioEmail').textContent = usuario.email;
        document.getElementById('usuarioAvatar').textContent = usuario.nome.charAt(0).toUpperCase();
    }

    // Data atual
    const diasSemana = ['domingo', 'segunda-feira', 'terça-feira', 'quarta-feira', 'quinta-feira', 'sexta-feira', 'sábado'];
    const meses = ['janeiro', 'fevereiro', 'março', 'abril', 'maio', 'junho', 'julho', 'agosto', 'setembro', 'outubro', 'novembro', 'dezembro'];
    const agora = new Date();
    document.getElementById('dataAtual').textContent =
        `${diasSemana[agora.getDay()]}, ${agora.getDate()} de ${meses[agora.getMonth()]}`;

    // Listeners
    document.querySelectorAll('.menu-item[data-tab]').forEach(btn => {
        btn.addEventListener('click', () => switchTab(btn.dataset.tab));
    });
    document.getElementById('btnConcluirDia').addEventListener('click', concluirDia);
    document.getElementById('addTaskTrigger').addEventListener('click', abrirFormTarefa);
    document.getElementById('btnAddSalvar').addEventListener('click', adicionarTarefa);
    document.getElementById('btnAddCancelar').addEventListener('click', fecharFormTarefa);
    document.getElementById('btnSair').addEventListener('click', sair);
    document.getElementById('btnRefazer').addEventListener('click', refazerDiagnostico);
    document.getElementById('btnCalPrev').addEventListener('click', () => mudarMes(-1));
    document.getElementById('btnCalNext').addEventListener('click', () => mudarMes(1));
    document.getElementById('btnModalOk').addEventListener('click', fecharModal);
    document.getElementById('chamaContainer').addEventListener('click', () => {
        abrirModal('flame', 'Chama da Consistência',
            `Estágio atual: ${getEstagioChama().nome}. Mantenha a chama acesa estudando todos os dias — se ficar um dia sem concluir suas missões, ela apaga e a contagem recomeça.`);
    });
    document.getElementById('btnAssinarVip').addEventListener('click', () => {
        window.location.href = 'checkout.html';
    });
    document.getElementById('btnHamburger').addEventListener('click', () => {
        document.getElementById('sidebar').classList.toggle('aberto');
    });
    document.getElementById('btnTutorialProximo').addEventListener('click', proximoPassoTutorial);
    document.getElementById('btnTutorialPular').addEventListener('click', finalizarTutorial);

    // Render inicial
    renderizarMissoes();
    atualizarGamificacao();
    atualizarBotaoConcluir();
    renderizarCalendario();
    iniciarTutorial();

    if (window.lucide) lucide.createIcons();
});
