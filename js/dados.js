const plano = {
    semana2: [
        { dia: "Segunda", materias: ["📐 Matemática", "📖 História"], descricao: "📐 Conjuntos numéricos: revisar ℕ, ℤ, ℚ, ℝ e dar 1 exemplo de cada.<br>📖 Ler 1 parágrafo sobre a Grécia Antiga — foco em 'pólis'.", tempo: "10 minutos", tempoMin: 10 },
        { dia: "Terça", materias: ["📐 Matemática", "📝 Português"], descricao: "📐 Intervalos numéricos: desenhar reta e marcar intervalo aberto e fechado.<br>📝 Ler 1 estrofe do Romantismo (Gonçalves Dias).", tempo: "10 minutos", tempoMin: 10 },
        { dia: "Quarta", materias: ["📐 Matemática", "🌍 Geografia"], descricao: "📐 Função: entender conceito de 'máquina'. Testar f(x)=2x com x=1,2,3.<br>🌍 Observar mapa-múndi e localizar 4 tipos de clima.", tempo: "10 minutos", tempoMin: 10 },
        { dia: "Quinta", materias: ["📐 Matemática", "🗣️ Inglês"], descricao: "📐 Função afim: f(x)=ax+b. Entender coeficiente angular e linear.<br>🗣️ Aprender 3 verbos irregulares: to be, to have, to go.", tempo: "10 minutos", tempoMin: 10 },
        { dia: "Sexta", materias: ["📐 Matemática", "🧬 Biologia"], descricao: "📐 Revisão: 1 exercício de função afim (ex: f(x)=3x−2, calcule f(4)).<br>🧬 Célula animal: identificar membrana, citoplasma e núcleo.", tempo: "10 minutos", tempoMin: 10 },
        { dia: "Sábado", materias: ["📐 Matemática"], descricao: "📐 Revisão livre da semana: refazer 1 exercício que achou difícil.", tempo: "10 minutos", tempoMin: 10 },
        { dia: "Domingo", materias: ["🧘 Descanso"], descricao: "🎉 Dia livre! Se quiser, revise 3 palavras-chave da semana em 2 minutos.", tempo: "0 minutos", tempoMin: 0 }
    ],
    semana3: [
        { dia: "Segunda", materias: ["📐 Matemática", "📖 História"], descricao: "📐 Função quadrática: f(x)=x², testar com x=-2,-1,0,1,2. Observar parábola.<br>📖 Democracia ateniense: quem podia votar?", tempo: "15 minutos", tempoMin: 15 },
        { dia: "Terça", materias: ["⚛️ Física", "📝 Português"], descricao: "⚛️ Cinemática: Vm=distância/tempo. Calcular: carro percorre 100km em 2h.<br>📝 Figuras de linguagem: metáfora e comparação.", tempo: "15 minutos", tempoMin: 15 },
        { dia: "Quarta", materias: ["⚗️ Química", "🌍 Geografia"], descricao: "⚗️ Tabela periódica: símbolos H, O, Fe, Na, Cl.<br>🌍 Fusos horários: 24 fusos de 15°. Londres 12h → Brasília 9h.", tempo: "15 minutos", tempoMin: 15 },
        { dia: "Quinta", materias: ["🧬 Biologia", "🗣️ Inglês"], descricao: "🧬 Cadeia alimentar: produtor → consumidor 1º → consumidor 2º.<br>🗣️ Simple Present: I play / She plays.", tempo: "15 minutos", tempoMin: 15 },
        { dia: "Sexta", materias: ["🔄 Revisão"], descricao: "🔄 Revisão livre: escolha a matéria mais difícil da semana e refaça 1 exercício.", tempo: "15 minutos", tempoMin: 15 },
        { dia: "Sábado", materias: ["⚛️ Física"], descricao: "⚛️ Revisar velocidade média com 1 exercício extra.", tempo: "10 minutos", tempoMin: 10 },
        { dia: "Domingo", materias: ["🧘 Descanso"], descricao: "🎉 Dia livre! Se quiser, revise 3 palavras-chave da semana.", tempo: "0 minutos", tempoMin: 0 }
    ],
    semana4: [
        { dia: "Segunda", materias: ["📐 Matemática", "⚛️ Física"], descricao: "📐⚛️ Conexão: função horária S=S₀+v·t é uma função afim! Escrever a relação.<br>Revisar História: O que era a pólis grega?", tempo: "20 minutos", tempoMin: 20 },
        { dia: "Terça", materias: ["⚗️ Química", "🧬 Biologia"], descricao: "⚗️🧬 Conexão: átomos (C,H,O,N) formam moléculas da vida. Carboidrato = C+H+O.<br>Revisar Biologia: Desenhar cadeia alimentar.", tempo: "20 minutos", tempoMin: 20 },
        { dia: "Quarta", materias: ["📝 Português", "📖 História"], descricao: "📝📖 Conexão: ler trecho de 'Iracema' e identificar Romantismo no contexto do Brasil Império.<br>Revisar Geografia: Explicar fusos horários.", tempo: "20 minutos", tempoMin: 20 },
        { dia: "Quinta", materias: ["📐 Matemática", "⚗️ Química"], descricao: "📐⚗️ Conexão: balanceamento químico usa regra de três. Balancear H₂+O₂→H₂O.<br>Revisar Matemática: Fórmula da função quadrática.", tempo: "20 minutos", tempoMin: 20 },
        { dia: "Sexta", materias: ["🗣️ Inglês", "🌍 Geografia"], descricao: "🗣️🌍 Conexão: países de língua inglesa e seus climas. Ex: Reino Unido, Austrália, Canadá.<br>Escrever 1 frase sobre o que aprendeu na semana.", tempo: "20 minutos", tempoMin: 20 },
        { dia: "Sábado", materias: ["📐 Matemática"], descricao: "📐 Revisão: conexão entre funções e fórmulas da Física/Química.", tempo: "15 minutos", tempoMin: 15 },
        { dia: "Domingo", materias: ["🧘 Descanso"], descricao: "🎉 Dia livre! Recapitule mentalmente as conexões que aprendeu.", tempo: "0 minutos", tempoMin: 0 }
    ]
};

const hoje = new Date();
const diaSemana = hoje.getDay();
const diaSemanaAjustado = diaSemana === 0 ? 6 : diaSemana - 1;

let dados = JSON.parse(localStorage.getItem('estudos_gamificados_vip')) || {
    streak: 0,
    ultimaConclusao: null,
    xp: 0,
    nivel: 1,
    semanaAtual: 2,
    historico: {},
    conquistas: { 3: false, 7: false, 30: false, vip: false },
    isVip: false,
    dataAssinatura: null,
    plano: null
};

// Verificar expiração VIP
if (dados.isVip && dados.dataAssinatura) {
    const diffDias = Math.floor((new Date() - new Date(dados.dataAssinatura)) / (1000 * 60 * 60 * 24));
    const limite = dados.plano === 'anual' ? 365 : 30;
    if (diffDias > limite) {
        dados.isVip = false;
        dados.plano = null;
        dados.dataAssinatura = null;
        salvarDados();
    }
}

// Verificar ofensiva quebrada
if (dados.ultimaConclusao) {
    const ultimaData = new Date(dados.ultimaConclusao + 'T00:00:00');
    const hojeData = new Date(hoje.getFullYear(), hoje.getMonth(), hoje.getDate());
    const diffDias = Math.floor((hojeData - ultimaData) / (1000 * 60 * 60 * 24));
    if (diffDias > 1) {
        dados.streak = 0;
        salvarDados();
    }
}

function salvarDados() {
    localStorage.setItem('estudos_gamificados_vip', JSON.stringify(dados));
}

function getDataHoje() {
    return hoje.getFullYear() + '-' +
        String(hoje.getMonth() + 1).padStart(2, '0') + '-' +
        String(hoje.getDate()).padStart(2, '0');
}

function getMissaoHoje() {
    const semanaKey = 'semana' + dados.semanaAtual;
    const missoes = plano[semanaKey] || plano.semana2;
    return missoes[diaSemanaAjustado] || missoes[0];
}
