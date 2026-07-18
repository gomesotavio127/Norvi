let planoSelecionado = 'mensal';

function abrirModalVIP() {
    document.getElementById('vipModal').classList.add('visible');
    document.body.style.overflow = 'hidden';
}

function fecharModalVIP() {
    document.getElementById('vipModal').classList.remove('visible');
    document.body.style.overflow = 'auto';
}

function selecionarPlano(plano) {
    planoSelecionado = plano;
    const planos = document.querySelectorAll('.vip-plan');
    planos.forEach(p => p.style.borderColor = 'rgba(255,215,0,0.3)');
    planos[plano === 'mensal' ? 0 : 1].style.borderColor = '#ffd200';
}

function processarAssinatura() {
    const btn = document.getElementById('btnAssinar');
    btn.disabled = true;
    btn.textContent = '⏳ Processando...';

    setTimeout(() => {
        dados.isVip = true;
        dados.plano = planoSelecionado;
        dados.dataAssinatura = new Date().toISOString();
        salvarDados();
        atualizarUI();
        fecharModalVIP();
        criarConfetes();
        mostrarToast('🎉 ASSINATURA VIP ATIVADA! Aproveite todos os benefícios!', 'vip');
        btn.disabled = false;
        btn.textContent = '🚀 ASSINAR AGORA';
    }, 2000);
}

document.getElementById('vipModal').addEventListener('click', function(e) {
    if (e.target === this) fecharModalVIP();
});
