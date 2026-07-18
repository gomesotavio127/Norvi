const usuario = { nome: '', ensino: '', estilo: '', tempo: '', materia: '' };
let stepAtual = 0;

const traducoes = {
    ensino: { fundamental: 'Ensino Fundamental', medio: 'Ensino Médio', superior: 'Ensino Superior' },
    estilo: { leitura: '📖 Leitura', videos: '🎬 Vídeos', exercicios: '✏️ Exercícios', misto: '🔄 Misto' },
    tempo: { '30min': '🌱 30 minutos', '1h': '🌿 1 hora', '2h': '🌳 2 horas', '3h+': '🔥 3 horas ou mais' },
    materia: { matematica: '📐 Matemática', portugues: '📝 Português', historia: '📖 História', geografia: '🌍 Geografia', ciencias: '🔬 Ciências', ingles: '🗣️ Inglês' }
};

function selecionar(elemento, categoria) {
    elemento.parentElement.querySelectorAll('.opcao').forEach(op => op.classList.remove('selecionada'));
    elemento.classList.add('selecionada');
    usuario[categoria] = elemento.dataset.valor;
    const btn = document.getElementById(`btn-proximo-${stepAtual}`);
    if (btn) btn.disabled = false;
}

function proximo(step) {
    if (step === 0) {
        const nome = document.getElementById('nome').value.trim();
        if (!nome) { alert('Por favor, digite seu nome!'); return; }
        usuario.nome = nome;
    }
    document.querySelectorAll('.pergunta').forEach(p => p.classList.remove('ativa'));
    stepAtual = step + 1;
    if (stepAtual < 5) {
        document.querySelector(`.pergunta[data-step="${stepAtual}"]`).classList.add('ativa');
        atualizarProgresso();
    }
}

function voltar(step) {
    document.querySelectorAll('.pergunta').forEach(p => p.classList.remove('ativa'));
    stepAtual = step - 1;
    document.querySelector(`.pergunta[data-step="${stepAtual}"]`).classList.add('ativa');
    atualizarProgresso();
}

function atualizarProgresso() {
    document.querySelectorAll('.progresso .ponto').forEach((p, i) => {
        p.classList.remove('ativo', 'feito');
        if (i < stepAtual) p.classList.add('feito');
        else if (i === stepAtual) p.classList.add('ativo');
    });
}

function finalizar() {
    if (!usuario.materia) { alert('Por favor, escolha sua matéria favorita!'); return; }

    document.querySelectorAll('.pergunta').forEach(p => p.classList.remove('ativa'));
    document.getElementById('tela-final').classList.add('ativo');

    document.getElementById('res-nome').textContent = usuario.nome;
    document.getElementById('res-ensino').textContent = traducoes.ensino[usuario.ensino];
    document.getElementById('res-estilo').textContent = traducoes.estilo[usuario.estilo];
    document.getElementById('res-tempo').textContent = traducoes.tempo[usuario.tempo];
    document.getElementById('res-materia').textContent = traducoes.materia[usuario.materia];

    localStorage.setItem('usuario_estudos', JSON.stringify(usuario));
}

function iniciarApp() {
    window.location.href = 'index.html';
}

// Pula onboarding se já tiver dados
if (localStorage.getItem('usuario_estudos')) {
    window.location.href = 'index.html';
}

// Enter na primeira pergunta
document.getElementById('nome').addEventListener('keyup', function(e) {
    if (e.key === 'Enter' && this.value.trim()) {
        usuario.nome = this.value.trim();
        proximo(0);
    }
});
