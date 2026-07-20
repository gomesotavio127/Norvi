/* ============================================
   NORVI - Autenticação (Cadastro / Login)
   - Checkbox "Manter-me conectado neste dispositivo"
     -> localStorage (persistente) vs sessionStorage
   - Modal de login acessível a partir do cadastro
   - Após cadastro: gera missões do diagnóstico e
     redireciona ao dashboard
   ============================================ */

let authMode = 'cadastro'; // 'cadastro' | 'login'

/* ---------- Utilidades ---------- */

function mostrarToastAuth(mensagem, sucesso) {
    const container = document.getElementById('toastContainer');
    if (!container) return;
    const toast = document.createElement('div');
    toast.className = 'toast' + (sucesso ? ' toast-success' : '');
    toast.innerHTML = `<i data-lucide="${sucesso ? 'check-circle' : 'alert-circle'}"></i> ${mensagem}`;
    container.appendChild(toast);
    if (window.lucide) lucide.createIcons();
    setTimeout(() => toast.remove(), 3500);
}

function emailValido(email) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

function nomeDoEmail(email) {
    const base = email.split('@')[0].replace(/[._-]+/g, ' ').trim();
    return base.charAt(0).toUpperCase() + base.slice(1);
}

function getContas() {
    try {
        return JSON.parse(localStorage.getItem('norvi_contas')) || {};
    } catch (e) {
        return {};
    }
}

function salvarContas(contas) {
    localStorage.setItem('norvi_contas', JSON.stringify(contas));
}

function criarSessao(email, manterConectado) {
    const sessao = JSON.stringify({ email, logado: true, desde: new Date().toISOString() });
    if (manterConectado) {
        localStorage.setItem('norvi_session', sessao);
    } else {
        sessionStorage.setItem('norvi_session', sessao);
    }
}

/* ---------- Modal de login ---------- */

function abrirModalLogin() {
    authMode = 'login';
    const modal = document.getElementById('modalLogin');
    modal.style.display = 'flex';
    if (window.lucide) lucide.createIcons();
}

function fecharModalLogin() {
    document.getElementById('modalLogin').style.display = 'none';
}

/* ---------- Fluxo principal ---------- */

function processarCadastro() {
    const email = document.getElementById('cadEmail').value.trim().toLowerCase();
    const senha = document.getElementById('cadSenha').value;
    const confirmar = document.getElementById('cadConfirmar').value;
    const manter = document.getElementById('cadManter').checked;

    if (!email || !senha || !confirmar) {
        mostrarToastAuth('Por favor, preencha todos os campos.');
        return;
    }
    if (!emailValido(email)) {
        mostrarToastAuth('Informe um e-mail válido.');
        return;
    }
    if (senha.length < 6) {
        mostrarToastAuth('A senha deve ter pelo menos 6 caracteres.');
        return;
    }
    if (senha !== confirmar) {
        mostrarToastAuth('As senhas não coincidem.');
        return;
    }

    const contas = getContas();
    if (contas[email]) {
        mostrarToastAuth('Este e-mail já possui uma conta. Faça login.');
        abrirModalLogin();
        document.getElementById('logEmail').value = email;
        return;
    }

    contas[email] = { senha, criadoEm: new Date().toISOString() };
    salvarContas(contas);

    // Perfil do usuário = dados do diagnóstico + nome derivado do e-mail
    const diag = JSON.parse(localStorage.getItem('norvi_diagnostico') || 'null');
    const usuario = {
        nome: nomeDoEmail(email),
        email,
        diagnostico: diag || null
    };
    localStorage.setItem('norvi_usuario', JSON.stringify(usuario));

    criarSessao(email, manter);
    mostrarToastAuth('Conta criada com sucesso!', true);

    setTimeout(() => {
        window.location.href = 'dashboard.html';
    }, 800);
}

function processarLogin() {
    const email = document.getElementById('logEmail').value.trim().toLowerCase();
    const senha = document.getElementById('logSenha').value;
    const manter = document.getElementById('logManter').checked;

    if (!email || !senha) {
        mostrarToastAuth('Preencha e-mail e senha.');
        return;
    }

    const contas = getContas();
    if (!contas[email] || contas[email].senha !== senha) {
        mostrarToastAuth('E-mail ou senha incorretos.');
        return;
    }

    // Recupera (ou recria) o perfil do usuário
    let usuario = JSON.parse(localStorage.getItem('norvi_usuario') || 'null');
    if (!usuario || usuario.email !== email) {
        const diag = JSON.parse(localStorage.getItem('norvi_diagnostico') || 'null');
        usuario = { nome: nomeDoEmail(email), email, diagnostico: diag || null };
        localStorage.setItem('norvi_usuario', JSON.stringify(usuario));
    }

    criarSessao(email, manter);
    mostrarToastAuth('Login realizado com sucesso!', true);

    setTimeout(() => {
        window.location.href = 'dashboard.html';
    }, 800);
}

/* ---------- Inicialização ---------- */

document.addEventListener('DOMContentLoaded', () => {
    // Já logado? Vai direto ao dashboard
    const sessao = localStorage.getItem('norvi_session') || sessionStorage.getItem('norvi_session');
    if (sessao) {
        window.location.href = 'dashboard.html';
        return;
    }

    document.getElementById('btnCriarConta').addEventListener('click', processarCadastro);
    document.getElementById('btnEntrar').addEventListener('click', processarLogin);
    document.getElementById('linkAbrirLogin').addEventListener('click', (e) => {
        e.preventDefault();
        abrirModalLogin();
    });
    document.getElementById('btnFecharModal').addEventListener('click', fecharModalLogin);
    document.getElementById('modalLogin').addEventListener('click', (e) => {
        if (e.target.id === 'modalLogin') fecharModalLogin();
    });

    // Enter submete os formulários
    document.getElementById('formCadastro').addEventListener('keydown', (e) => {
        if (e.key === 'Enter') { e.preventDefault(); processarCadastro(); }
    });
    document.getElementById('formLogin').addEventListener('keydown', (e) => {
        if (e.key === 'Enter') { e.preventDefault(); processarLogin(); }
    });

    if (window.lucide) lucide.createIcons();
});
