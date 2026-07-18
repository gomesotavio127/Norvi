// Redireciona para onboarding se não tiver dados do usuário
if (!localStorage.getItem('usuario_estudos')) {
    window.location.href = 'onboarding.html';
}

// Saudação personalizada
const usuarioSalvo = JSON.parse(localStorage.getItem('usuario_estudos') || '{}');
if (usuarioSalvo.nome) {
    console.log(`👋 Bem-vindo de volta, ${usuarioSalvo.nome}!`);
}

// Inicialização
atualizarUI();

// Funções utilitárias via console
window.avancarSemana = function() {
    if (dados.semanaAtual < 4) {
        dados.semanaAtual += 1;
        salvarDados();
        atualizarUI();
        mostrarToast('📅 Avançou para a Semana ' + dados.semanaAtual + '!');
    } else {
        mostrarToast('⚠️ Você já está na última semana.');
    }
};

window.resetarTudo = function() {
    if (confirm('Tem certeza que deseja resetar TODO o progresso?')) {
        localStorage.removeItem('estudos_gamificados_vip');
        location.reload();
    }
};

window.forcarVIP = function() {
    dados.isVip = true;
    dados.plano = 'mensal';
    dados.dataAssinatura = new Date().toISOString();
    salvarDados();
    atualizarUI();
    mostrarToast('⭐ VIP ativado (modo teste)!', 'vip');
};

console.log('🔥 Estuda Aí VIP carregado!');
console.log('👑 VIP:', dados.isVip ? 'ATIVO' : 'INATIVO');
console.log('💡 Comandos: avancarSemana() | resetarTudo() | forcarVIP()');
