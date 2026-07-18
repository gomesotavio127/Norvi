function mostrarToast(mensagem, tipo = '') {
    const toast = document.createElement('div');
    toast.className = `toast ${tipo}`;
    toast.textContent = mensagem;
    document.body.appendChild(toast);
    setTimeout(() => toast.remove(), 3500);
}

function criarConfetes() {
    const container = document.getElementById('confete-container');
    const cores = ['#f9d423', '#ff4e50', '#00cec9', '#6c5ce7', '#fd79a8', '#00b894', '#ffd200'];

    for (let i = 0; i < 50; i++) {
        setTimeout(() => {
            const confete = document.createElement('div');
            confete.className = 'confete';
            confete.style.left = Math.random() * 100 + '%';
            confete.style.backgroundColor = cores[Math.floor(Math.random() * cores.length)];
            confete.style.animationDuration = (Math.random() * 1.5 + 1) + 's';
            confete.style.animationDelay = Math.random() * 0.5 + 's';
            confete.style.width = (Math.random() * 8 + 5) + 'px';
            confete.style.height = (Math.random() * 8 + 5) + 'px';
            container.appendChild(confete);
            setTimeout(() => confete.remove(), 2500);
        }, i * 30);
    }
}

function concluirMissao() {
    const dataHoje = getDataHoje();

    if (dados.historico[dataHoje]) {
        mostrarToast('🎉 Você já completou a missão de hoje!');
        return;
    }

    const missao = getMissaoHoje();

    if (missao.tempoMin === 0) {
        dados.historico[dataHoje] = true;
        dados.ultimaConclusao = dataHoje;
        dados.streak += 1;
        const xpBonus = dados.isVip ? 10 : 5;
        dados.xp += xpBonus;
        mostrarToast(`🧘 Dia de descanso! +${xpBonus} XP ${dados.isVip ? '⭐ (VIP)' : ''}`);
    } else {
        dados.historico[dataHoje] = true;
        dados.ultimaConclusao = dataHoje;
        dados.streak += 1;

        let xpGanho = Math.round(missao.tempoMin * 1.5);
        if (dados.isVip) xpGanho *= 2;
        dados.xp += xpGanho;

        while (dados.xp >= dados.nivel * 100) {
            dados.xp -= dados.nivel * 100;
            dados.nivel += 1;
            setTimeout(() => {
                mostrarToast(`🎊 SUBIU DE NÍVEL! Agora você é nível ${dados.nivel}!`, 'vip');
                criarConfetes();
            }, 300);
        }

        mostrarToast(`🔥 Missão concluída! +${xpGanho} XP ${dados.isVip ? '⭐ (VIP)' : ''}. Ofensiva: ${dados.streak} dias!`);
    }

    if (dados.streak === 3) { dados.conquistas[3] = true; mostrarToast('⭐ Conquista: 3 dias de ofensiva!'); }
    if (dados.streak === 7) { dados.conquistas[7] = true; mostrarToast('🌟 Conquista: 7 dias de ofensiva!'); }
    if (dados.streak === 30) { dados.conquistas[30] = true; mostrarToast('👑 Conquista: 30 dias de ofensiva!'); }
    if (dados.isVip && dados.streak >= 10 && !dados.conquistas.vip) {
        dados.conquistas.vip = true;
        mostrarToast('💎 Conquista VIP: 10 dias de ofensiva sendo VIP!', 'vip');
    }

    salvarDados();
    criarConfetes();
    atualizarUI();
}
