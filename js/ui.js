function atualizarUI() {
    const missao = getMissaoHoje();
    const dataHoje = getDataHoje();
    const concluidoHoje = dados.historico[dataHoje];

    // Nível e XP
    document.getElementById('nivel').textContent = dados.nivel;
    document.getElementById('xp-atual').textContent = dados.xp;
    const xpMax = dados.nivel * 100;
    document.getElementById('xp-total').textContent = xpMax;
    document.getElementById('xp-fill').style.width = Math.min((dados.xp / xpMax * 100), 100) + '%';

    // Streak
    document.getElementById('streak-dias').textContent = dados.streak;
    const emojis = { 30: '👑', 7: '🌟', 3: '⭐', 1: '🔥', 0: '💤' };
    const emojiKey = dados.streak >= 30 ? 30 : dados.streak >= 7 ? 7 : dados.streak >= 3 ? 3 : dados.streak >= 1 ? 1 : 0;
    document.getElementById('streak-emoji').textContent = emojis[emojiKey];

    // VIP Badge
    const badge = document.getElementById('vipBadge');
    badge.textContent = dados.isVip ? '⭐ VIP ATIVO' : '⭐ ASSINAR VIP';
    badge.className = dados.isVip ? 'vip-badge' : 'vip-badge nao-assinante';

    // Missão
    document.getElementById('semana-tag').textContent = 'Semana ' + dados.semanaAtual;
    const nomeDia = (missao.dia === 'Sábado' || missao.dia === 'Domingo') ? missao.dia : missao.dia + '-feira';
    document.getElementById('missao-dia').textContent = nomeDia;
    document.getElementById('missao-badges').innerHTML = missao.materias
        .map(m => `<span class="badge-materia ${dados.isVip ? 'vip' : ''}">${m}</span>`).join(' ');
    document.getElementById('missao-descricao').innerHTML = missao.descricao;
    document.getElementById('missao-tempo').textContent = '⏱️ ' + missao.tempo + (dados.isVip ? ' ⭐ (XP x2)' : '');

    // Destaque VIP na missão
    document.getElementById('dailyMission').classList.toggle('vip-exclusivo', dados.isVip);

    // Botão concluir
    const btn = document.getElementById('btn-concluir');
    btn.textContent = concluidoHoje ? '✅ MISSÃO CUMPRIDA!' : '✅ CONCLUIR MISSÃO';
    btn.disabled = !!concluidoHoje;
    btn.classList.toggle('concluido', !!concluidoHoje);

    // Features VIP
    document.getElementById('vipFeatures').classList.toggle('visible', dados.isVip);

    // Calendário
    renderizarCalendario();

    // Conquistas
    document.getElementById('conquista-3').classList.toggle('desbloqueada', dados.conquistas[3]);
    document.getElementById('conquista-7').classList.toggle('desbloqueada', dados.conquistas[7]);
    document.getElementById('conquista-30').classList.toggle('desbloqueada', dados.conquistas[30]);

    const conquistaVip = document.getElementById('conquista-vip');
    conquistaVip.classList.toggle('desbloqueada', !!(dados.isVip && dados.conquistas.vip));
    conquistaVip.classList.toggle('vip-lock', !dados.isVip);

    salvarDados();
}

function renderizarCalendario() {
    const diasNome = ['Seg', 'Ter', 'Qua', 'Qui', 'Sex', 'Sáb', 'Dom'];
    const hojeData = new Date(hoje.getFullYear(), hoje.getMonth(), hoje.getDate());
    const diaAtual = hojeData.getDay();
    const segundaAtual = new Date(hojeData);
    segundaAtual.setDate(hojeData.getDate() - (diaAtual === 0 ? 6 : diaAtual - 1));

    function renderSemana(containerId, segunda) {
        const container = document.getElementById(containerId);
        container.innerHTML = '';
        for (let i = 0; i < 7; i++) {
            const data = new Date(segunda);
            data.setDate(segunda.getDate() + i);
            const dataStr = data.getFullYear() + '-' +
                String(data.getMonth() + 1).padStart(2, '0') + '-' +
                String(data.getDate()).padStart(2, '0');
            const feito = dados.historico[dataStr];
            const ehHoje = dataStr === getDataHoje();
            const div = document.createElement('div');
            div.className = 'dia-item';
            div.innerHTML = `
                <div class="dia-nome">${diasNome[i]}</div>
                <div class="dia-bolinha ${feito ? 'feito' : ''}" style="${ehHoje ? 'border: 2px solid #f9d423;' : ''}">
                    ${feito ? '✅' : ''}
                </div>`;
            container.appendChild(div);
        }
    }

    renderSemana('dias-semana-atual', segundaAtual);
    const segundaPassada = new Date(segundaAtual);
    segundaPassada.setDate(segundaAtual.getDate() - 7);
    renderSemana('dias-semana-passada', segundaPassada);
}
