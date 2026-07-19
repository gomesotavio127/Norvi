const PERGUNTAS_BASE = [
    {
        id: 1,
        categoria: "Seu Ponto de Partida",
        pergunta: {
            "pt-BR": "Conte-nos um pouco sobre sua jornada acadêmica.",
            "pt-PT": "Conte-nos um pouco sobre a sua jornada académica.",
            "en": "Tell us a bit about your academic journey.",
            "es": "Cuéntanos un poco sobre tu trayectoria académica.",
            "fr": "Parlez-nous un peu de votre parcours académique."
        },
        multipla: false,
        opcoes: [
            { texto: { "pt-BR": "1º ao 5º ano do Fundamental", "pt-PT": "1º ao 5º ano do Ensino Básico", "en": "1st to 5th grade (Elementary)", "es": "1º a 5º grado (Primaria)", "fr": "1ère à 5ème année (Primaire)" }, valor: "fundamental_1" },
            { texto: { "pt-BR": "6º ao 9º ano do Fundamental", "pt-PT": "6º ao 9º ano do Ensino Básico", "en": "6th to 9th grade (Middle School)", "es": "6º a 9º grado (Secundaria)", "fr": "6ème à 9ème année (Collège)" }, valor: "fundamental_2" },
            { texto: { "pt-BR": "Ensino Médio (1º ao 3º ano)", "pt-PT": "Ensino Secundário", "en": "High School", "es": "Bachillerato / Preparatoria", "fr": "Lycée" }, valor: "medio" },
            { texto: { "pt-BR": "Ensino Superior (Graduação)", "pt-PT": "Ensino Superior (Licenciatura)", "en": "Higher Education (Bachelor's)", "es": "Educación Superior (Grado)", "fr": "Enseignement Supérieur (Licence)" }, valor: "superior" },
            { texto: { "pt-BR": "Pós-Graduação (Mestrado/Doutorado)", "pt-PT": "Pós-Graduação (Mestrado/Doutoramento)", "en": "Postgraduate (Master's/PhD)", "es": "Posgrado (Maestría/Doctorado)", "fr": "Troisième Cycle (Master/Doctorat)" }, valor: "pos" }
        ]
    },
    {
        id: 2,
        categoria: "O Que Te Move",
        pergunta: {
            "pt-BR": "Qual é a sua área de conhecimento principal?",
            "pt-PT": "Qual é a sua área de conhecimento principal?",
            "en": "What is your main area of knowledge?",
            "es": "¿Cuál es tu área de conocimiento principal?",
            "fr": "Quel est votre principal domaine de connaissances?"
        },
        multipla: false,
        opcoes: [
            { texto: { "pt-BR": "Exatas (Matemática, Física, Química)", "pt-PT": "Exatas (Matemática, Física, Química)", "en": "Exact Sciences (Math, Physics, Chemistry)", "es": "Exactas (Matemáticas, Física, Química)", "fr": "Sciences Exactes (Maths, Physique, Chimie)" }, valor: "exatas" },
            { texto: { "pt-BR": "Humanas (História, Geografia, Filosofia)", "pt-PT": "Humanas (História, Geografia, Filosofia)", "en": "Humanities (History, Geography, Philosophy)", "es": "Humanas (Historia, Geografía, Filosofía)", "fr": "Sciences Humaines (Histoire, Géographie, Philosophie)" }, valor: "humanas" },
            { texto: { "pt-BR": "Biológicas (Biologia, Ciências)", "pt-PT": "Biológicas (Biologia, Ciências)", "en": "Biological Sciences (Biology, Science)", "es": "Biológicas (Biología, Ciencias)", "fr": "Sciences Biologiques (Biologie, Sciences)" }, valor: "biologicas" },
            { texto: { "pt-BR": "Linguagens (Português, Literatura, Inglês)", "pt-PT": "Línguas (Português, Literatura, Inglês)", "en": "Languages (Portuguese, Literature, English)", "es": "Lenguajes (Portugués, Literatura, Inglés)", "fr": "Langues (Portugais, Littérature, Anglais)" }, valor: "linguagens" },
            { texto: { "pt-BR": "Interdisciplinar (várias áreas)", "pt-PT": "Interdisciplinar (várias áreas)", "en": "Interdisciplinary (multiple areas)", "es": "Interdisciplinar (varias áreas)", "fr": "Interdisciplinaire (plusieurs domaines)" }, valor: "interdisciplinar" }
        ]
    },
    {
        id: 3,
        categoria: "Desafios do Caminho",
        pergunta: {
            "pt-BR": "Onde você sente que pode usar uma mão amiga? (Escolha até 3)",
            "pt-PT": "Onde sente que pode usar uma mão amiga? (Escolha até 3)",
            "en": "Where do you feel you could use a helping hand? (Choose up to 3)",
            "es": "¿Dónde sientes que te vendría bien una ayuda? (Elige até 3)",
            "fr": "Où sentez-vous que vous auriez besoin d'un coup de main? (Choisissez jusqu'à 3)"
        },
        multipla: true,
        maxSelecoes: 3,
        opcoes: [
            // Fundamental I
            { texto: { "pt-BR": "Matemática", "pt-PT": "Matemática", "en": "Mathematics", "es": "Matemáticas", "fr": "Mathématiques" }, valor: "Matemática", niveis: ["fundamental_1", "fundamental_2", "medio", "superior", "pos"] },
            { texto: { "pt-BR": "Português", "pt-PT": "Português", "en": "Portuguese", "es": "Portugués", "fr": "Portugais" }, valor: "Português", niveis: ["fundamental_1", "fundamental_2", "medio", "superior", "pos"] },
            { texto: { "pt-BR": "Ciências da Natureza", "pt-PT": "Ciências da Natureza", "en": "Natural Sciences", "es": "Ciencias de la Naturaleza", "fr": "Sciences de la Nature" }, valor: "Ciências", niveis: ["fundamental_1"] },
            { texto: { "pt-BR": "História", "pt-PT": "História", "en": "History", "es": "Historia", "fr": "Histoire" }, valor: "História", niveis: ["fundamental_1", "fundamental_2", "medio", "superior", "pos"] },
            { texto: { "pt-BR": "Geografia", "pt-PT": "Geografia", "en": "Geography", "es": "Geografía", "fr": "Géographie" }, valor: "Geografia", niveis: ["fundamental_1", "fundamental_2", "medio", "superior", "pos"] },
            { texto: { "pt-BR": "Arte", "pt-PT": "Arte", "en": "Art", "es": "Arte", "fr": "Art" }, valor: "Arte", niveis: ["fundamental_1"] },
            { texto: { "pt-BR": "Educação Física", "pt-PT": "Educação Física", "en": "Physical Education", "es": "Educación Física", "fr": "Éducation Physique" }, valor: "Educação Física", niveis: ["fundamental_1"] },
            
            // Fundamental II
            { texto: { "pt-BR": "Ciências", "pt-PT": "Ciências", "en": "Science", "es": "Ciencias", "fr": "Sciences" }, valor: "Ciências", niveis: ["fundamental_2"] },
            { texto: { "pt-BR": "Inglês", "pt-PT": "Inglês", "en": "English", "es": "Inglés", "fr": "Anglais" }, valor: "Inglês", niveis: ["fundamental_2", "medio", "superior", "pos"] },

            // Ensino Médio
            { texto: { "pt-BR": "Física", "pt-PT": "Física", "en": "Physics", "es": "Física", "fr": "Physique" }, valor: "Física", niveis: ["medio", "superior", "pos"] },
            { texto: { "pt-BR": "Química", "pt-PT": "Química", "en": "Chemistry", "es": "Química", "fr": "Chimie" }, valor: "Química", niveis: ["medio", "superior", "pos"] },
            { texto: { "pt-BR": "Biologia", "pt-PT": "Biologia", "en": "Biology", "es": "Biología", "fr": "Biologie" }, valor: "Biologia", niveis: ["medio"] },
            { texto: { "pt-BR": "Filosofia", "pt-PT": "Filosofia", "en": "Philosophy", "es": "Filosofía", "fr": "Philosophie" }, valor: "Filosofia", niveis: ["medio", "superior", "pos"] },
            { texto: { "pt-BR": "Sociologia", "pt-PT": "Sociologia", "en": "Sociology", "es": "Sociología", "fr": "Sociologie" }, valor: "Sociologia", niveis: ["medio", "superior", "pos"] },

            // Graduação
            { texto: { "pt-BR": "Cálculo", "pt-PT": "Cálculo", "en": "Calculus", "es": "Cálculo", "fr": "Calcul" }, valor: "Cálculo", niveis: ["superior"] },
            { texto: { "pt-BR": "Estatística", "pt-PT": "Estatística", "en": "Statistics", "es": "Estadística", "fr": "Statistiques" }, valor: "Estatística", niveis: ["superior"] },
            { texto: { "pt-BR": "Programação", "pt-PT": "Programação", "en": "Programming", "es": "Programación", "fr": "Programmation" }, valor: "Programação", niveis: ["superior"] },
            { texto: { "pt-BR": "Metodologia Científica", "pt-PT": "Metodologia Científica", "en": "Scientific Methodology", "es": "Metodología Científica", "fr": "Méthodologie Scientifique" }, valor: "Metodologia", niveis: ["superior"] },

            // Pós-Graduação
            { texto: { "pt-BR": "Métodos Quantitativos", "pt-PT": "Métodos Quantitativos", "en": "Quantitative Methods", "es": "Métodos Cuantitativos", "fr": "Méthodes Quantitatives" }, valor: "Métodos Quantitativos", niveis: ["pos"] },
            { texto: { "pt-BR": "Escrita Científica", "pt-PT": "Escrita Científica", "en": "Scientific Writing", "es": "Escrita Científica", "fr": "Écriture Scientifique" }, valor: "Escrita Científica", niveis: ["pos"] },
            { texto: { "pt-BR": "Revisão Bibliográfica", "pt-PT": "Revisão Bibliográfica", "en": "Literature Review", "es": "Revisión Bibliográfica", "fr": "Revue de la Littérature" }, valor: "Revisão Bibliográfica", niveis: ["pos"] },
            { texto: { "pt-BR": "Ética na Pesquisa", "pt-PT": "Ética na Pesquisa", "en": "Research Ethics", "es": "Ética en la Investigación", "fr": "Éthique de la Recherche" }, valor: "Ética", niveis: ["pos"] }
        ]
    },
    {
        id: 4,
        categoria: "Seu Ritmo",
        pergunta: {
            "pt-BR": "Como você gosta de aprender?",
            "pt-PT": "Como gosta de aprender?",
            "en": "How do you like to learn?",
            "es": "¿Cómo te gusta aprender?",
            "fr": "Comment aimez-vous apprendre?"
        },
        multipla: false,
        opcoes: [
            { texto: { "pt-BR": "Leitura e resumos 📖", "pt-PT": "Leitura e resumos 📖", "en": "Reading and summaries 📖", "es": "Lectura y resúmenes 📖", "fr": "Lecture et résumés 📖" }, valor: "leitura" },
            { texto: { "pt-BR": "Exercícios práticos 📝", "pt-PT": "Exercícios práticos 📝", "en": "Practical exercises 📝", "es": "Ejercicios prácticos 📝", "fr": "Exercices pratiques 📝" }, valor: "exercicios" },
            { texto: { "pt-BR": "Slides e esquemas visuais 🗺️", "pt-PT": "Slides e esquemas visuais 🗺️", "en": "Slides and visual diagrams 🗺️", "es": "Diapositivas y esquemas visuales 🗺️", "fr": "Diapositives et schémas visuels 🗺️" }, valor: "slides" },
            { texto: { "pt-BR": "Explicações passo-a-passo (guiado) 🧭", "pt-PT": "Explicações passo-a-passo (guiado) 🧭", "en": "Step-by-step explanations (guided) 🧭", "es": "Explicaciones paso a paso (guiado) 🧭", "fr": "Explications étape par étape (guidé) 🧭" }, valor: "guiado" }
        ]
    },
    {
        id: 5,
        categoria: "Sua Agenda",
        pergunta: {
            "pt-BR": "Quanto tempo você quer dedicar a essa jornada por dia?",
            "pt-PT": "Quanto tempo quer dedicar a esta jornada por dia?",
            "en": "How much time do you want to dedicate to this journey per day?",
            "es": "¿Cuánto tiempo quieres dedicar a este viaje por día?",
            "fr": "Combien de temps voulez-vous consacrer à ce voyage par jour?"
        },
        multipla: false,
        opcoes: [
            { texto: { "pt-BR": "10 minutos (Foco em Micro-Hábitos) ⏱️", "pt-PT": "10 minutos (Foco em Micro-Hábitos) ⏱️", "en": "10 minutes (Micro-Habits Focus) ⏱️", "es": "10 minutos (Enfoque en Microhábitos) ⏱️", "fr": "10 minutes (Focus Micro-Habitudes) ⏱️" }, valor: "10min", tempoMinutos: 10 },
            { texto: { "pt-BR": "15 minutos", "pt-PT": "15 minutos", "en": "15 minutes", "es": "15 minutos", "fr": "15 minutes" }, valor: "15min", tempoMinutos: 15 },
            { texto: { "pt-BR": "20 minutos", "pt-PT": "20 minutos", "en": "20 minutes", "es": "20 minutos", "fr": "20 minutes" }, valor: "20min", tempoMinutos: 20 },
            { texto: { "pt-BR": "30 minutos", "pt-PT": "30 minutos", "en": "30 minutes", "es": "30 minutos", "fr": "30 minutes" }, valor: "30min", tempoMinutos: 30 },
            { texto: { "pt-BR": "45 minutos", "pt-PT": "45 minutos", "en": "45 minutes", "es": "45 minutos", "fr": "45 minutes" }, valor: "45min", tempoMinutos: 45 },
            { texto: { "pt-BR": "60 minutos", "pt-PT": "60 minutos", "en": "60 minutes", "es": "60 minutos", "fr": "60 minutes" }, valor: "60min", tempoMinutos: 60 }
        ]
    },
    {
        id: 6,
        categoria: "Compromisso Diário",
        pergunta: {
            "pt-BR": "Qual horário do dia você pretende estudar?",
            "pt-PT": "Qual horário do dia pretende estudar?",
            "en": "What time of day do you plan to study?",
            "es": "¿A qué hora del día piensas estudiar?",
            "fr": "À quelle heure de la journée prévoyez-vous d'étudier?"
        },
        multipla: false,
        opcoes: [
            { texto: { "pt-BR": "Pela manhã (ex: 08:00) 🌅", "pt-PT": "Pela manhã (ex: 08:00) 🌅", "en": "In the morning (e.g., 08:00) 🌅", "es": "Por la mañana (ej: 08:00) 🌅", "fr": "Le matin (ex: 08:00) 🌅" }, valor: "08:00" },
            { texto: { "pt-BR": "À tarde (ex: 14:00) ☀️", "pt-PT": "À tarde (ex: 14:00) ☀️", "en": "In the afternoon (e.g., 14:00) ☀️", "es": "Por la tarde (ej: 14:00) ☀️", "fr": "L'après-midi (ex: 14:00) ☀️" }, valor: "14:00" },
            { texto: { "pt-BR": "No início da noite (ex: 19:00) 🌆", "pt-PT": "No início da noite (ex: 19:00) 🌆", "en": "In the early evening (e.g., 19:00) 🌆", "es": "Al principio de la noche (ej: 19:00) 🌆", "fr": "En début de soirée (ex: 19:00) 🌆" }, valor: "19:00" },
            { texto: { "pt-BR": "Mais tarde da noite (ex: 21:00) 🌙", "pt-PT": "Mais tarde da noite (ex: 21:00) 🌙", "en": "Later at night (e.g., 21:00) 🌙", "es": "Más tarde en la noche (ej: 21:00) 🌙", "fr": "Plus tard dans la soirée (ex: 21:00) 🌙" }, valor: "21:00" }
        ]
    },
    {
        id: 7,
        categoria: "Seu Objetivo Final",
        pergunta: {
            "pt-BR": "Qual é o seu grande 'porquê'?",
            "pt-PT": "Qual é o seu grande 'porquê'?",
            "en": "What is your big 'why'?",
            "es": "¿Cuál es tu gran 'por qué'?",
            "fr": "Quel est votre grand 'pourquoi'?"
        },
        multipla: false,
        opcoes: [
            { texto: { "pt-BR": "Passar de ano / Vestibular / Concurso", "pt-PT": "Passar de ano / Exames / Concurso", "en": "Pass exams / College entrance", "es": "Pasar de año / Selectividad / Concurso", "fr": "Réussir les examens / Concours" }, valor: "prova" },
            { texto: { "pt-BR": "Aprender um assunto específico", "pt-PT": "Aprender um assunto específico", "en": "Learn a specific subject", "es": "Aprender un tema específico", "fr": "Apprendre un sujet spécifique" }, valor: "assunto" },
            { texto: { "pt-BR": "Criar o hábito de estudar regularmente", "pt-PT": "Criar o hábito de estudar regularmente", "en": "Build a regular study habit", "es": "Crear el hábito de estudiar regularmente", "fr": "Créer l'habitude d'étudier régulièrement" }, valor: "habito" },
            { texto: { "pt-BR": "Aprofundar conhecimento em uma área", "pt-PT": "Aprofundar conhecimento numa área", "en": "Deepen knowledge in an area", "es": "Profundizar conocimiento en un área", "fr": "Approfondir ses connaissances dans un domaine" }, valor: "aprofundar" }
        ]
    },
    {
        id: 8,
        categoria: "O Que Te Atrapalha",
        pergunta: {
            "pt-BR": "O que costuma te tirar do foco?",
            "pt-PT": "O que costuma tirar-lhe o foco?",
            "en": "What usually takes away your focus?",
            "es": "¿Qué suele quitarte el enfoque?",
            "fr": "Qu'est-ce qui vous distrait le plus?"
        },
        multipla: false,
        opcoes: [
            { texto: { "pt-BR": "Dificuldade de concentração / Foco 😵", "pt-PT": "Dificuldade de concentração / Foco 😵", "en": "Difficulty concentrating / Focus 😵", "es": "Dificultad de concentración / Enfoque 😵", "fr": "Difficulté de concentration / Focus 😵" }, valor: "foco" },
            { texto: { "pt-BR": "Procrastinação - não consigo começar 😴", "pt-PT": "Procrastinação - não consigo começar 😴", "en": "Procrastination - can't get started 😴", "es": "Procrastinación - no puedo empezar 😴", "fr": "Procrastination - je n'arrive pas à commencer 😴" }, valor: "procrastinacao" },
            { texto: { "pt-BR": "Não sei o que estudar nem por onde começar 🤔", "pt-PT": "Não sei o que estudar nem por onde começar 🤔", "en": "Don't know what to study or where to start 🤔", "es": "No sé qué estudiar ni por dónde empezar 🤔", "fr": "Je ne sais pas quoi étudier ni par où commencer 🤔" }, valor: "direcao" },
            { texto: { "pt-BR": "Cansaço mental ou físico 😩", "pt-PT": "Cansaço mental ou físico 😩", "en": "Mental or physical fatigue 😩", "es": "Cansancio mental o físico 😩", "fr": "Fatigue mentale ou physique 😩" }, valor: "cansaco" }
        ]
    },
    {
        id: 9,
        categoria: "Sua Primeira Meta",
        pergunta: {
            "pt-BR": "Qual é sua meta inicial de disciplina?",
            "pt-PT": "Qual é a sua meta inicial de disciplina?",
            "en": "What is your initial discipline goal?",
            "es": "¿Cuál es tu meta inicial de disciplina?",
            "fr": "Quel est votre objectif initial de discipline?"
        },
        multipla: false,
        opcoes: [
            { texto: { "pt-BR": "Estudar 3 dias seguidos 🎯", "pt-PT": "Estudar 3 dias seguidos 🎯", "en": "Study 3 days in a row 🎯", "es": "Estudiar 3 días seguidos 🎯", "fr": "Étudier 3 jours de suite 🎯" }, valor: "3d", dias: 3 },
            { texto: { "pt-BR": "Estudar 7 dias seguidos (1 semana) 🔥", "pt-PT": "Estudar 7 dias seguidos (1 semana) 🔥", "en": "Study 7 days in a row (1 week) 🔥", "es": "Estudiar 7 días seguidos (1 semana) 🔥", "fr": "Étudier 7 jours de suite (1 semaine) 🔥" }, valor: "7d", dias: 7 },
            { texto: { "pt-BR": "Estudar 15 dias seguidos (2 semanas) ⚡", "pt-PT": "Estudar 15 dias seguidos (2 semanas) ⚡", "en": "Study 15 days in a row (2 weeks) ⚡", "es": "Estudiar 15 días seguidos (2 semanas) ⚡", "fr": "Étudier 15 jours de suite (2 semaines) ⚡" }, valor: "15d", dias: 15 },
            { texto: { "pt-BR": "Estudar 30 dias seguidos (1 mês) 👑", "pt-PT": "Estudar 30 dias seguidos (1 mês) 👑", "en": "Study 30 days in a row (1 month) 👑", "es": "Estudiar 30 días seguidos (1 mes) 👑", "fr": "Étudier 30 jours de suite (1 mois) 👑" }, valor: "30d", dias: 30 }
        ]
    }
];
    let perguntaAtual = 1;
    let respostas = {}; // Guarda as respostas selecionadas
    let authMode = "cadastro"; // "cadastro" ou "login"
    let currentLang = localStorage.getItem("norvi_lang") || "pt-BR";

    const UI_TEXTS = {
        "pt-BR": {
            logo: "🧠",
            tagline: "Foque nos estudos. Construa hábitos.<br>Sua rotina de estudos simplificada.",
            btnComecar: "Começar Jornada",
            btnVoltar: "⬅ Voltar",
            btnProximo: "Próximo ➡",
            btnCriarConta: "Criar Conta",
            btnEntrar: "Entrar",
            labelEmail: "E-mail",
            labelSenha: "Senha",
            labelConfirmar: "Confirmar Senha",
            labelManter: "Manter-me conectado neste dispositivo",
            toggleTextCadastro: "Já tem uma conta?",
            toggleLinkCadastro: "Entrar",
            toggleTextLogin: "Não tem uma conta?",
            toggleLinkLogin: "Criar Conta",
            authTituloCadastro: "Crie sua conta",
            authSubtituloCadastro: "Salve seu progresso e acesse seu plano personalizado.",
            authTituloLogin: "Entrar na sua conta",
            authSubtituloLogin: "Acesse seu progresso e continue seus estudos.",
            toastPreencha: "Por favor, preencha todos os campos!",
            toastSenhasDiferentes: "As senhas não coincidem!",
            toastContaCriada: "Conta criada com sucesso!",
            toastLoginIncorreto: "E-mail ou senha incorretos!",
            toastLoginSucesso: "Login realizado com sucesso!",
            toastMaxSelecoes: "Você pode escolher no máximo {max} opções!",
            finalTitulo: "Seu Plano de Estudos está Pronto!",
            finalSubtitulo: "Com base no seu perfil, estruturamos a rotina ideal para você:",
            finalNome: "👤 Nome",
            finalPontos: "📊 Pontuação",
            finalFrequencia: "📅 Frequência",
            finalTempo: "⏱️ Tempo",
            finalMaterias: "📚 Matérias",
            finalMeta: "📝 Meta Diária",
            finalMissao: "🎯 Sua Missão de Hoje:",
            btnComecarEstudar: "🚀 COMEÇAR A ESTUDAR",
            problemaTitulo: "Por que é tão difícil manter a disciplina?",
            solucaoTitulo: "A disciplina não é um dom, é um hábito",
            solucaoTexto1: "A disciplina não é um dom com o qual você nasce.",
            solucaoTexto2: "É um hábito que você constrói, um dia de cada vez.",
            solucaoTexto3: "Norvi é o seu companheiro nessa jornada.",
            vantagensTitulo: "Vantagens Únicas",
            vantagem1Titulo: "Rotina Personalizada",
            vantagem1Desc: "O Norvi cria um plano de estudos que se ajusta ao seu dia a dia, não o contrário.",
            vantagem2Titulo: "A Chama da Consistência",
            vantagem2Desc: "Cada dia de estudo alimenta uma chama que cresce com você. Não quebre a corrente.",
            vantagem3Titulo: "Acompanhamento Silencioso",
            vantagem3Desc: "O Norvi não te cobra. Ele te lembra que você é capaz.",
            vantagem4Titulo: "Conteúdo Adaptativo",
            vantagem4Desc: "Do fundamental à pós-graduação, o conteúdo é adaptado ao seu nível.",
            depoimentosTitulo: "O que dizem nossos estudantes",
            depoimento1: "O Norvi mudou completamente minha relação com os estudos. A chama me mantém focado todos os dias!",
            depoimento1Autor: "Mariana, Ensino Médio",
            depoimento2: "A personalização por nível escolar é fantástica. Como estudante de graduação, sinto que os conteúdos são exatamente o que preciso.",
            depoimento2Autor: "Lucas, Engenharia",
            depoimento3: "Finalmente consegui criar um hábito consistente de estudos. O design limpo e sem distrações é maravilhoso.",
            depoimento3Autor: "Beatriz, Concurseira"
        },
        "pt-PT": {
            logo: "🧠",
            tagline: "Foque nos estudos. Construa hábitos.<br>A sua rotina de estudos simplificada.",
            btnComecar: "Começar Jornada",
            btnVoltar: "⬅ Voltar",
            btnProximo: "Seguinte ➡",
            btnCriarConta: "Criar Conta",
            btnEntrar: "Entrar",
            labelEmail: "E-mail",
            labelSenha: "Palavra-passe",
            labelConfirmar: "Confirmar Palavra-passe",
            labelManter: "Manter-me conectado neste dispositivo",
            toggleTextCadastro: "Já tem uma conta?",
            toggleLinkCadastro: "Entrar",
            toggleTextLogin: "Não tem uma conta?",
            toggleLinkLogin: "Criar Conta",
            authTituloCadastro: "Crie a sua conta",
            authSubtituloCadastro: "Guarde o seu progresso e aceda ao seu plano personalizado.",
            authTituloLogin: "Entrar na sua conta",
            authSubtituloLogin: "Aceda ao seu progresso e continue os seus estudos.",
            toastPreencha: "Por favor, preencha todos os campos!",
            toastSenhasDiferentes: "As palavras-passe não coincidem!",
            toastContaCriada: "Conta criada com sucesso!",
            toastLoginIncorreto: "E-mail ou palavra-passe incorretos!",
            toastLoginSucesso: "Login realizado com sucesso!",
            toastMaxSelecoes: "Pode escolher no máximo {max} opções!",
            finalTitulo: "O seu Plano de Estudos está Pronto!",
            finalSubtitulo: "Com base no seu perfil, estruturámos a rotina ideal para si:",
            finalNome: "👤 Nome",
            finalPontos: "📊 Pontuação",
            finalFrequencia: "📅 Frequência",
            finalTempo: "⏱️ Tempo",
            finalMaterias: "📚 Disciplinas",
            finalMeta: "📝 Meta Diária",
            finalMissao: "🎯 A sua Missão de Hoje:",
            btnComecarEstudar: "🚀 COMEÇAR A ESTUDAR",
            problemaTitulo: "Porque é que é tão difícil manter a disciplina?",
            solucaoTitulo: "A disciplina não é um dom, é um hábito",
            solucaoTexto1: "A disciplina não é um dom com o qual nasce.",
            solucaoTexto2: "É um hábito que constrói, um dia de cada vez.",
            solucaoTexto3: "O Norvi é o seu companheiro nesta jornada.",
            vantagensTitulo: "Vantagens Únicas",
            vantagem1Titulo: "Rotina Personalizada",
            vantagem1Desc: "O Norvi cria um plano de estudos que se ajusta ao seu dia a dia, não o contrário.",
            vantagem2Titulo: "A Chama da Consistência",
            vantagem2Desc: "Cada dia de estudo alimenta uma chama que cresce consigo. Não quebre a corrente.",
            vantagem3Titulo: "Acompanhamento Silencioso",
            vantagem3Desc: "O Norvi não lhe cobra. Ele lembra-lhe que é capaz.",
            vantagem4Titulo: "Conteúdo Adaptativo",
            vantagem4Desc: "Do básico ao pós-doutoramento, o conteúdo é adaptado ao seu nível.",
            depoimentosTitulo: "O que dizem os nossos estudantes",
            depoimento1: "O Norvi mudou completamente a minha relação com os estudos. A chama mantém-me focado todos os dias!",
            depoimento1Autor: "Mariana, Ensino Secundário",
            depoimento2: "A personalização por nível escolar é fantástica. Como estudante do ensino superior, sinto que os conteúdos são exatamente o que preciso.",
            depoimento2Autor: "Lucas, Engenharia",
            depoimento3: "Finalmente consegui criar um hábito consistente de estudos. O design limpo e sem distrações é maravilhoso.",
            depoimento3Autor: "Beatriz, Concurseira"
        },
        "en": {
            logo: "🧠",
            tagline: "Focus on your studies. Build habits.<br>Your simplified study routine.",
            btnComecar: "Start Journey",
            btnVoltar: "⬅ Back",
            btnProximo: "Next ➡",
            btnCriarConta: "Create Account",
            btnEntrar: "Sign In",
            labelEmail: "Email",
            labelSenha: "Password",
            labelConfirmar: "Confirm Password",
            labelManter: "Keep me signed in on this device",
            toggleTextCadastro: "Already have an account?",
            toggleLinkCadastro: "Sign In",
            toggleTextLogin: "Don't have an account?",
            toggleLinkLogin: "Create Account",
            authTituloCadastro: "Create your account",
            authSubtituloCadastro: "Save your progress and access your personalized plan.",
            authTituloLogin: "Sign in to your account",
            authSubtituloLogin: "Access your progress and continue your studies.",
            toastPreencha: "Please fill in all fields!",
            toastSenhasDiferentes: "Passwords do not match!",
            toastContaCriada: "Account created successfully!",
            toastLoginIncorreto: "Incorrect email or password!",
            toastLoginSucesso: "Login successful!",
            toastMaxSelecoes: "You can choose a maximum of {max} options!",
            finalTitulo: "Your Study Plan is Ready!",
            finalSubtitulo: "Based on your profile, we have structured the ideal routine for you:",
            finalNome: "👤 Name",
            finalPontos: "📊 Score",
            finalFrequencia: "📅 Frequency",
            finalTempo: "⏱️ Time",
            finalMaterias: "📚 Subjects",
            finalMeta: "📝 Daily Goal",
            finalMissao: "🎯 Your Mission Today:",
            btnComecarEstudar: "🚀 START STUDYING",
            problemaTitulo: "Why is it so hard to maintain discipline?",
            solucaoTitulo: "Discipline is not a gift, it's a habit",
            solucaoTexto1: "Discipline is not a gift you are born with.",
            solucaoTexto2: "It's a habit you build, one day at a time.",
            solucaoTexto3: "Norvi is your companion on this journey.",
            vantagensTitulo: "Unique Advantages",
            vantagem1Titulo: "Personalized Routine",
            vantagem1Desc: "Norvi creates a study plan that adjusts to your daily life, not the other way around.",
            vantagem2Titulo: "The Flame of Consistency",
            vantagem2Desc: "Each day of study feeds a flame that grows with you. Don't break the chain.",
            vantagem3Titulo: "Silent Support",
            vantagem3Desc: "Norvi doesn't pressure you. It reminds you that you are capable.",
            vantagem4Titulo: "Adaptive Content",
            vantagem4Desc: "From elementary school to PhD, the content is adapted to your level.",
            depoimentosTitulo: "What our students say",
            depoimento1: "Norvi completely changed my relationship with studies. The flame keeps me focused every day!",
            depoimento1Autor: "Mariana, High School",
            depoimento2: "The personalization by school level is fantastic. As a college student, I feel the content is exactly what I need.",
            depoimento2Autor: "Lucas, Engineering",
            depoimento3: "I finally managed to build a consistent study habit. The clean, distraction-free design is wonderful.",
            depoimento3Autor: "Beatriz, Candidate"
        },
        "es": {
            logo: "🧠",
            tagline: "Enfócate en tus estudios. Construye hábitos.<br>Tu rutina de estudios simplificada.",
            btnComecar: "Comenzar Jornada",
            btnVoltar: "⬅ Volver",
            btnProximo: "Siguiente ➡",
            btnCriarConta: "Crear Cuenta",
            btnEntrar: "Iniciar Sesión",
            labelEmail: "Correo electrónico",
            labelSenha: "Contraseña",
            labelConfirmar: "Confirmar Contraseña",
            labelManter: "Mantener mi sesión iniciada en este dispositivo",
            toggleTextCadastro: "¿Ya tienes una cuenta?",
            toggleLinkCadastro: "Iniciar Sesión",
            toggleTextLogin: "¿No tienes una cuenta?",
            toggleLinkLogin: "Crear Cuenta",
            authTituloCadastro: "Crea tu cuenta",
            authSubtituloCadastro: "Guarda tu progreso y accede a tu plan personalizado.",
            authTituloLogin: "Inicia sesión en tu cuenta",
            authSubtituloLogin: "Accede a tu progreso y continúa tus estudios.",
            toastPreencha: "¡Por favor, completa todos los campos!",
            toastSenhasDiferentes: "¡Las contraseñas no coinciden!",
            toastContaCriada: "¡Cuenta creada con éxito!",
            toastLoginIncorreto: "¡Correo electrónico o contraseña incorrectos!",
            toastLoginSucesso: "¡Inicio de sesión exitoso!",
            toastMaxSelecoes: "¡Puedes elegir un máximo de {max} opciones!",
            finalTitulo: "¡Tu Plan de Estudios está Listo!",
            finalSubtitulo: "Basado en tu perfil, hemos estructurado la rutina ideal para ti:",
            finalNome: "👤 Nombre",
            finalPontos: "📊 Puntuación",
            finalFrequencia: "📅 Frecuencia",
            finalTempo: "⏱️ Tiempo",
            finalMaterias: "📚 Materias",
            finalMeta: "📝 Meta Diaria",
            finalMissao: "🎯 Tu Misión de Hoy:",
            btnComecarEstudar: "🚀 EMPEZAR A ESTUDIAR",
            problemaTitulo: "¿Por qué es tan difícil mantener la disciplina?",
            solucaoTitulo: "La disciplina no es un don, es un hábito",
            solucaoTexto1: "La disciplina no es un don con el que naces.",
            solucaoTexto2: "Es un hábito que construyes, un día a la vez.",
            solucaoTexto3: "Norvi es tu compañero en este viaje.",
            vantagensTitulo: "Ventajas Únicas",
            vantagem1Titulo: "Rutina Personalizada",
            vantagem1Desc: "Norvi crea un plan de estudios que se ajusta a tu día a día, no al revés.",
            vantagem2Titulo: "La Llama de la Consistencia",
            vantagem2Desc: "Cada día de estudio alimenta una llama que crece contigo. No rompas la cadena.",
            vantagem3Titulo: "Acompañamiento Silencioso",
            vantagem3Desc: "Norvi no te presiona. Te recuerda que eres capaz.",
            vantagem4Titulo: "Contenido Adaptativo",
            vantagem4Desc: "Desde la primaria hasta el posgrado, el contenido se adapta a tu nivel.",
            depoimentosTitulo: "Lo que dicen nuestros estudiantes",
            depoimento1: "¡Norvi cambió por completo mi relación con los estudios. La llama me mantiene enfocado todos los días!",
            depoimento1Autor: "Mariana, Bachillerato",
            depoimento2: "La personalización por nivel escolar es fantástica. Como estudiante universitario, siento que los contenidos son exactamente lo que necesito.",
            depoimento2Autor: "Lucas, Ingeniería",
            depoimento3: "Finalmente logré crear un hábito de estudio constante. El diseño limpio y sin distracciones es maravilloso.",
            depoimento3Autor: "Beatriz, Opositora"
        },
        "fr": {
            logo: "🧠",
            tagline: "Concentrez-vous sur vos études. Créez des habitudes.<br>Votre routine d'étude simplifiée.",
            btnComecar: "Commencer la Journée",
            btnVoltar: "⬅ Retour",
            btnProximo: "Suivant ➡",
            btnCriarConta: "Créer un Compte",
            btnEntrar: "Se Connecter",
            labelEmail: "E-mail",
            labelSenha: "Mot de passe",
            labelConfirmar: "Confirmer le Mot de passe",
            labelManter: "Rester connecté sur cet appareil",
            toggleTextCadastro: "Vous avez déjà un compte?",
            toggleLinkCadastro: "Se Connecter",
            toggleTextLogin: "Vous n'avez pas de compte?",
            toggleLinkLogin: "Créer un Compte",
            authTituloCadastro: "Créez votre compte",
            authSubtituloCadastro: "Sauvegardez vos progrès et accédez à votre plan personnalisé.",
            authTituloLogin: "Connectez-vous à votre compte",
            authSubtituloLogin: "Accédez à vos progrès et continuez vos études.",
            toastPreencha: "Veuillez remplir tous les champs!",
            toastSenhasDiferentes: "Les mots de passe ne correspondent pas!",
            toastContaCriada: "Compte créé avec succès!",
            toastLoginIncorreto: "E-mail ou mot de passe incorrect!",
            toastLoginSucesso: "Connexion réussie!",
            toastMaxSelecoes: "Vous pouvez choisir un maximum de {max} options!",
            finalTitulo: "Votre Plan d'Études est Prêt!",
            finalSubtitulo: "Sur la base de votre profil, nous avons structuré la routine idéale pour vous:",
            finalNome: "👤 Nom",
            finalPontos: "📊 Score",
            finalFrequencia: "📅 Fréquence",
            finalTempo: "⏱️ Temps",
            finalMaterias: "📚 Matières",
            finalMeta: "📝 Objectif Quotidien",
            finalMissao: "🎯 Votre Mission d'Aujourd'hui:",
            btnComecarEstudar: "🚀 COMMENCER À ÉTUDIER",
            problemaTitulo: "Pourquoi est-il si difficile de rester discipliné ?",
            solucaoTitulo: "La discipline n'est pas un don, c'est une habitude",
            solucaoTexto1: "La discipline n'est pas un don avec lequel on naît.",
            solucaoTexto2: "C'est une habitude que l'on construit, un jour à la fois.",
            solucaoTexto3: "Norvi est votre compagnon dans ce voyage.",
            vantagensTitulo: "Avantages Uniques",
            vantagem1Titulo: "Routine Personnalisée",
            vantagem1Desc: "Norvi crée un plan d'études qui s'adapte à votre quotidien, et non l'inverse.",
            vantagem2Titulo: "La Flamme de la Constance",
            vantagem2Desc: "Chaque jour d'étude alimente une flamme qui grandit avec vous. Ne rompez pas la chaîne.",
            vantagem3Titulo: "Accompagnement Silencieux",
            vantagem3Desc: "Norvi ne vous met pas la pression. Il vous rappelle que vous êtes capable.",
            vantagem4Titulo: "Contenu Adaptatif",
            vantagem4Desc: "De l'école primaire au doctorat, le contenu est adapté à votre niveau.",
            depoimentosTitulo: "Ce que disent nos étudiants",
            depoimento1: "Norvi a complètement changé ma relation avec les études. La flamme me permet de rester concentrée chaque jour !",
            depoimento1Autor: "Mariana, Lycée",
            depoimento2: "La personnalisation par niveau scolaire est fantastique. En tant qu'étudiant universitaire, j'ai l'impression que le contenu correspond exactement à mes besoins.",
            depoimento2Autor: "Lucas, Ingénierie",
            depoimento3: "J'ai enfin réussi à créer une habitude d'étude régulière. Le design épuré et sans distraction est merveilleux.",
            depoimento3Autor: "Beatriz, Candidate"
        }
    };
    function changeLanguage(lang) {
        currentLang = lang;
        localStorage.setItem("norvi_lang", lang);
        document.getElementById("langSelector").value = lang;
        
        atualizarTextosLandingPage();
        atualizarTextosAuth();
        renderizarPergunta();
    }
    function atualizarTextosLandingPage() {
        const texts = UI_TEXTS[currentLang];
        if (!texts) return;

        // Hero
        const heroSub = document.querySelector("#tela-inicial .subtitulo");
        if (heroSub) heroSub.innerHTML = texts.tagline;
        const heroBtn = document.querySelector("#tela-inicial .btn-primary");
        if (heroBtn) heroBtn.textContent = texts.btnComecar;

        // Problema
        const probTitle = document.querySelector("#problema .titulo-secao");
        if (probTitle) probTitle.textContent = texts.problemaTitulo;
        
        // Solução
        const solTitle = document.querySelector("#solucao .titulo-secao");
        if (solTitle) solTitle.textContent = texts.solucaoTitulo;
        const solT1 = document.querySelector("#solucao .solucao-t1");
        if (solT1) solT1.textContent = texts.solucaoTexto1;
        const solT2 = document.querySelector("#solucao .solucao-t2");
        if (solT2) solT2.textContent = texts.solucaoTexto2;
        const solT3 = document.querySelector("#solucao .solucao-t3");
        if (solT3) solT3.textContent = texts.solucaoTexto3;

        // Vantagens
        const vantTitle = document.querySelector("#vantagens .titulo-secao");
        if (vantTitle) vantTitle.textContent = texts.vantagensTitulo;
        const v1T = document.querySelector("#vantagem-1 .vantagem-titulo");
        if (v1T) v1T.textContent = texts.vantagem1Titulo;
        const v1D = document.querySelector("#vantagem-1 .vantagem-desc");
        if (v1D) v1D.textContent = texts.vantagem1Desc;
        const v2T = document.querySelector("#vantagem-2 .vantagem-titulo");
        if (v2T) v2T.textContent = texts.vantagem2Titulo;
        const v2D = document.querySelector("#vantagem-2 .vantagem-desc");
        if (v2D) v2D.textContent = texts.vantagem2Desc;
        const v3T = document.querySelector("#vantagem-3 .vantagem-titulo");
        if (v3T) v3T.textContent = texts.vantagem3Titulo;
        const v3D = document.querySelector("#vantagem-3 .vantagem-desc");
        if (v3D) v3D.textContent = texts.vantagem3Desc;
        const v4T = document.querySelector("#vantagem-4 .vantagem-titulo");
        if (v4T) v4T.textContent = texts.vantagem4Titulo;
        const v4D = document.querySelector("#vantagem-4 .vantagem-desc");
        if (v4D) v4D.textContent = texts.vantagem4Desc;

        // Depoimentos
        const depTitle = document.querySelector("#depoimentos .titulo-secao");
        if (depTitle) depTitle.textContent = texts.depoimentosTitulo;
        const d1 = document.querySelector("#depoimento-1 .depoimento-texto");
        if (d1) d1.textContent = texts.depoimento1;
        const d1A = document.querySelector("#depoimento-1 .depoimento-autor");
        if (d1A) d1A.textContent = texts.depoimento1Autor;
        const d2 = document.querySelector("#depoimento-2 .depoimento-texto");
        if (d2) d2.textContent = texts.depoimento2;
        const d2A = document.querySelector("#depoimento-2 .depoimento-autor");
        if (d2A) d2A.textContent = texts.depoimento2Autor;
        const d3 = document.querySelector("#depoimento-3 .depoimento-texto");
        if (d3) d3.textContent = texts.depoimento3;
        const d3A = document.querySelector("#depoimento-3 .depoimento-autor");
        if (d3A) d3A.textContent = texts.depoimento3Autor;
    }
    function getPerguntaAdaptada(q, nivelEscolar, lang) {
        let texto = q.pergunta[lang] || q.pergunta["pt-BR"];
        let opcoes = [...q.opcoes];

        if (!nivelEscolar) {
            return { texto, opcoes };
        }

        if (q.id === 4) {
            // Seu Ritmo (Estilo de aprendizagem) - adapt icons/text
            if (nivelEscolar === "fundamental_1" || nivelEscolar === "fundamental_2") {
                opcoes = [
                    { texto: { "pt-BR": "Lendo livrinhos e fazendo resumos 📖", "pt-PT": "Lendo livrinhos e fazendo resumos 📖", "en": "Reading books and making summaries 📖", "es": "Leyendo libritos y haciendo resúmenes 📖", "fr": "Lire des petits livres et faire des résumés 📖" }, valor: "leitura" },
                    { texto: { "pt-BR": "Fazendo joguinhos e exercícios 📝", "pt-PT": "Fazendo joguinhos e exercícios 📝", "en": "Playing games and exercises 📝", "es": "Jugando juegos y ejercicios 📝", "fr": "Jouer à des jeux et faire des exercices 📝" }, valor: "exercicios" },
                    { texto: { "pt-BR": "Vendo figuras e desenhos coloridos 🗺️", "pt-PT": "Vendo figuras e desenhos coloridos 🗺️", "en": "Seeing pictures and colorful drawings 🗺️", "es": "Viendo dibujos y esquemas de colores 🗺️", "fr": "Voir des images et des dessins colorés 🗺️" }, valor: "slides" },
                    { texto: { "pt-BR": "Com ajuda passo a passo de um guia 🧭", "pt-PT": "Com ajuda passo a passo de um guia 🧭", "en": "With step-by-step help from a guide 🧭", "es": "Con ayuda paso a paso de un guía 🧭", "fr": "Avec l'aide étape par étape d'un guide 🧭" }, valor: "guiado" }
                ];
            }
        } else if (q.id === 7) {
            // Seu Objetivo Final
            if (nivelEscolar === "fundamental_1" || nivelEscolar === "fundamental_2") {
                texto = {
                    "pt-BR": "O que você mais quer com os estudos?",
                    "pt-PT": "O que mais queres com os estudos?",
                    "en": "What do you want most from your studies?",
                    "es": "¿Qué es lo que más quieres con tus estudios?",
                    "fr": "Que veux-tu le plus de tes études?"
                }[lang] || "O que você mais quer com os estudos?";
                opcoes = [
                    { texto: { "pt-BR": "Passar de ano na escola 🎒", "pt-PT": "Passar de ano na escola 🎒", "en": "Pass my school grade 🎒", "es": "Pasar de año en la escuela 🎒", "fr": "Passer en classe supérieure 🎒" }, valor: "prova" },
                    { texto: { "pt-BR": "Aprender coisas novas e curiosas 🧠", "pt-PT": "Aprender coisas novas e curiosas 🧠", "en": "Learn new and curious things 🧠", "es": "Aprender cosas nuevas y curiosas 🧠", "fr": "Apprendre des choses nouvelles et curieuses 🧠" }, valor: "assunto" },
                    { texto: { "pt-BR": "Criar o hábito de estudar todo dia 📅", "pt-PT": "Criar o hábito de estudar todo dia 📅", "en": "Build a habit of studying every day 📅", "es": "Crear el hábito de estudiar todos los días 📅", "fr": "Créer l'habitude d'étudier tous les jours 📅" }, valor: "habito" },
                    { texto: { "pt-BR": "Ficar muito inteligente em uma matéria 🌟", "pt-PT": "Ficar muito inteligente numa matéria 🌟", "en": "Get really smart in a subject 🌟", "es": "Volverme muy inteligente en una materia 🌟", "fr": "Devenir très intelligent dans une matière 🌟" }, valor: "aprofundar" }
                ];
            } else if (nivelEscolar === "medio") {
                texto = {
                    "pt-BR": "Qual é o seu grande objetivo com os estudos?",
                    "pt-PT": "Qual é o teu grande objetivo com os estudos?",
                    "en": "What is your main goal with your studies?",
                    "es": "¿Cuál es tu gran objetivo con los estudios?",
                    "fr": "Quel est ton grand objectif avec tes études?"
                }[lang] || "Qual é o seu grande objetivo com os estudos?";
                opcoes = [
                    { texto: { "pt-BR": "Passar no Vestibular / ENEM / Provas 🎓", "pt-PT": "Passar nos Exames / Provas 🎓", "en": "Pass college entrance exams 🎓", "es": "Pasar el examen de ingreso / Selectividad 🎓", "fr": "Réussir le Bac / Concours d'entrée 🎓" }, valor: "prova" },
                    { texto: { "pt-BR": "Aprender matérias difíceis e complexas 📚", "pt-PT": "Aprender matérias difíceis e complexas 📚", "en": "Learn difficult and complex subjects 📚", "es": "Aprender materias difíciles y complejas 📚", "fr": "Apprendre des matières difficiles et complexes 📚" }, valor: "assunto" },
                    { texto: { "pt-BR": "Criar uma rotina sólida de estudos ⏰", "pt-PT": "Criar uma rotina sólida de estudos ⏰", "en": "Build a solid study routine ⏰", "es": "Crear una rutina sólida de estudios ⏰", "fr": "Créer une routine d'études solide ⏰" }, valor: "habito" },
                    { texto: { "pt-BR": "Aprofundar conhecimento em uma área específica 🔍", "pt-PT": "Aprofundar conhecimento numa área específica 🔍", "en": "Deepen knowledge in a specific area 🔍", "es": "Profundizar conocimiento en un área específica 🔍", "fr": "Approfondir ses connaissances dans un domaine spécifique 🔍" }, valor: "aprofundar" }
                ];
            } else {
                texto = {
                    "pt-BR": "Qual é o seu principal objetivo acadêmico ou profissional?",
                    "pt-PT": "Qual é o seu principal objetivo académico ou profissional?",
                    "en": "What is your main academic or professional goal?",
                    "es": "¿Cuál es tu principal objetivo académico o profesional?",
                    "fr": "Quel est votre principal objectif académique ou professionnel?"
                }[lang] || "Qual é o seu principal objetivo acadêmico ou profissional?";
                opcoes = [
                    { texto: { "pt-BR": "Crescimento profissional / Concursos públicos 💼", "pt-PT": "Crescimento profissional / Concursos públicos 💼", "en": "Professional growth / Public exams 💼", "es": "Crecimiento profesional / Oposiciones 💼", "fr": "Évolution professionnelle / Concours publics 💼" }, valor: "prova" },
                    { texto: { "pt-BR": "Aprofundar conhecimento na minha área de atuação 🔬", "pt-PT": "Aprofundar conhecimento na minha área de atuação 🔬", "en": "Deepen knowledge in my field of work 🔬", "es": "Profundizar conocimiento en mi área de trabajo 🔬", "fr": "Approfondir mes connaissances dans mon domaine d'activité 🔬" }, valor: "assunto" },
                    { texto: { "pt-BR": "Criar o hábito de estudar regularmente 🕯️", "pt-PT": "Criar o hábito de estudar regularmente 🕯️", "en": "Build a habit of studying regularly 🕯️", "es": "Crear el hábito de estudiar regularmente 🕯️", "fr": "Créer l'habitude d'étudier régulièrement 🕯️" }, valor: "habito" },
                    { texto: { "pt-BR": "Publicar artigos / Preparar tese ou dissertação 📝", "pt-PT": "Publicar artigos / Preparar tese ou dissertação 📝", "en": "Publish papers / Prepare thesis or dissertation 📝", "es": "Publicar artículos / Preparar tesis o tesina 📝", "fr": "Publier des articles / Préparer une thèse ou un mémoire 📝" }, valor: "aprofundar" }
                ];
            }
        } else if (q.id === 8) {
            // O Que Te Atrapalha (Maior obstáculo)
            if (nivelEscolar === "fundamental_1" || nivelEscolar === "fundamental_2") {
                texto = {
                    "pt-BR": "O que mais te atrapalha na hora de estudar?",
                    "pt-PT": "O que mais te atrapalha na hora de estudar?",
                    "en": "What gets in your way the most when studying?",
                    "es": "¿Qué es lo que más te distrae al estudiar?",
                    "fr": "Qu'est-ce qui te dérange le plus quand tu étudies?"
                }[lang] || "O que mais te atrapalha na hora de estudar?";
                opcoes = [
                    { texto: { "pt-BR": "Fico com preguiça ou me distraio fácil 🧸", "pt-PT": "Fico com preguiça ou me distraio fácil 🧸", "en": "I get lazy or easily distracted 🧸", "es": "Me da pereza o me distraigo fácil 🧸", "fr": "Je suis paresseux ou je me distrais facilement 🧸" }, valor: "foco" },
                    { texto: { "pt-BR": "Não consigo começar a estudar sozinho 💤", "pt-PT": "Não consigo começar a estudar sozinho 💤", "en": "I can't start studying by myself 💤", "es": "No puedo empezar a estudiar solo 💤", "fr": "Je n'arrive pas à commencer à étudier tout seul 💤" }, valor: "procrastinacao" },
                    { texto: { "pt-BR": "Não sei por onde começar ou o que fazer 🤷", "pt-PT": "Não sei por onde começar ou o que fazer 🤷", "en": "I don't know where to start or what to do 🤷", "es": "No sé por dónde empezar o qué hacer 🤷", "fr": "Je ne sais pas par où commencer ni quoi faire 🤷" }, valor: "direcao" },
                    { texto: { "pt-BR": "Fico muito cansado depois da escola 🥱", "pt-PT": "Fico muito cansado depois da escola 🥱", "en": "I get very tired after school 🥱", "es": "Me canso mucho después de la escuela 🥱", "fr": "Je suis très fatigué après l'école 🥱" }, valor: "cansaco" }
                ];
            }
        } else if (q.id === 9) {
            // Sua Primeira Meta
            if (nivelEscolar === "fundamental_1" || nivelEscolar === "fundamental_2") {
                texto = {
                    "pt-BR": "Qual sua meta para o próximo mês?",
                    "pt-PT": "Qual a tua meta para o próximo mês?",
                    "en": "What is your goal for the next month?",
                    "es": "¿Cuál es tu meta para el próximo mes?",
                    "fr": "Quel est ton objectif pour le mois prochain?"
                }[lang] || "Qual sua meta para o próximo mês?";
                opcoes = [
                    { texto: { "pt-BR": "Estudar 3 dias seguidos 🎯", "pt-PT": "Estudar 3 dias seguidos 🎯", "en": "Study 3 days in a row 🎯", "es": "Estudiar 3 días seguidos 🎯", "fr": "Étudier 3 jours de suite 🎯" }, valor: "3d", dias: 3 },
                    { texto: { "pt-BR": "Estudar 7 dias seguidos (1 semana) 🔥", "pt-PT": "Estudar 7 dias seguidos (1 semana) 🔥", "en": "Study 7 days in a row (1 week) 🔥", "es": "Estudiar 7 días seguidos (1 semana) 🔥", "fr": "Étudier 7 jours de suite (1 semaine) 🔥" }, valor: "7d", dias: 7 },
                    { texto: { "pt-BR": "Estudar 15 dias seguidos (2 semanas) ⚡", "pt-PT": "Estudar 15 dias seguidos (2 semanas) ⚡", "en": "Study 15 days in a row (2 weeks) ⚡", "es": "Estudiar 15 días seguidos (2 semanas) ⚡", "fr": "Étudier 15 jours de suite (2 semaines) ⚡" }, valor: "15d", dias: 15 },
                    { texto: { "pt-BR": "Estudar todos os dias sem faltar 👑", "pt-PT": "Estudar todos os dias sem faltar 👑", "en": "Study every single day 👑", "es": "Estudiar todos los días sin falta 👑", "fr": "Étudier tous les jours sans faute 👑" }, valor: "30d", dias: 30 }
                ];
            }
        }

        return { texto, opcoes };
    }
    function atualizarTextosAuth() {
        const texts = UI_TEXTS[currentLang];
        const emailLabel = document.querySelector("label[for='auth-email']");
        const senhaLabel = document.querySelector("label[for='auth-senha']");
        const confirmarLabel = document.querySelector("label[for='auth-confirmar']");
        const manterSpan = document.querySelector(".checkbox-group span");

        if (emailLabel) emailLabel.textContent = texts.labelEmail;
        if (senhaLabel) senhaLabel.textContent = texts.labelSenha;
        if (confirmarLabel) confirmarLabel.textContent = texts.labelConfirmar;
        if (manterSpan) manterSpan.textContent = texts.labelManter;

        const titulo = document.querySelector("#tela-auth .titulo");
        const subtitulo = document.querySelector("#tela-auth .subtitulo");
        const btnAction = document.getElementById("btn-auth-action");
        const toggleText = document.getElementById("auth-toggle-text");
        const toggleLink = document.getElementById("auth-toggle-link");

        if (authMode === "login") {
            titulo.textContent = texts.authTituloLogin;
            subtitulo.textContent = texts.authSubtituloLogin;
            btnAction.textContent = texts.btnEntrar;
            toggleText.textContent = texts.toggleTextLogin;
            toggleLink.textContent = texts.toggleLinkLogin;
        } else {
            titulo.textContent = texts.authTituloCadastro;
            subtitulo.textContent = texts.authSubtituloCadastro;
            btnAction.textContent = texts.btnCriarConta;
            toggleText.textContent = texts.toggleTextCadastro;
            toggleLink.textContent = texts.toggleLinkCadastro;
        }
    }

    function toggleAuthMode() {
        authMode = authMode === "cadastro" ? "login" : "cadastro";
        atualizarTextosAuth();
        const groupConfirmar = document.getElementById("group-confirmar");
        if (authMode === "login") {
            groupConfirmar.style.display = "none";
        } else {
            groupConfirmar.style.display = "block";
        }
    }

    function iniciarDiagnostico() {
        const target = document.getElementById("diagnostico");
        if (target) {
            target.scrollIntoView({ behavior: "smooth" });
        }
    }

    function renderizarProgresso() {
        const progresso = document.getElementById("progresso");
        progresso.innerHTML = "";
        for (let i = 1; i <= 9; i++) { // Temos 9 etapas agora
            const ponto = document.createElement("div");
            ponto.className = "ponto";
            if (i < perguntaAtual) ponto.classList.add("feito");
            else if (i === perguntaAtual) ponto.classList.add("ativo");
            progresso.appendChild(ponto);
        }
    }
    function renderizarPergunta() {
        const container = document.getElementById("pergunta-container");
        if (!container) return;
        container.innerHTML = "";
        const q = PERGUNTAS_BASE[perguntaAtual - 1];
        const selecionadas = respostas[perguntaAtual] || [];

        const p1Idx = respostas[1] ? respostas[1][0] : null;
        const nivelEscolar = p1Idx !== null ? PERGUNTAS_BASE[0].opcoes[p1Idx].valor : null;

        const adaptada = getPerguntaAdaptada(q, nivelEscolar, currentLang);
        const perguntaTraduzida = adaptada.texto;
        let opcoesFiltradas = adaptada.opcoes;

        // --- FILTRAGEM DINÂMICA DE MATÉRIAS (P3) ---
        if (q.id === 3 && nivelEscolar) {
            opcoesFiltradas = q.opcoes.filter(opt => opt.niveis.includes(nivelEscolar));
        }

        let opcoesHTML = "";
        opcoesFiltradas.forEach((opt, idx) => {
            const realIdx = q.opcoes.indexOf(opt);
            const isSel = selecionadas.includes(realIdx);
            const textoTraduzido = opt.texto[currentLang] || opt.texto["pt-BR"];
            
            opcoesHTML += `
                <div class="opcao ${isSel ? 'selecionada' : ''}" onclick="selecionarOpcao(${realIdx})">
                    <span>${textoTraduzido}</span>
                    <span class="opcao-star">✦</span>
                </div>
            `;
        });
        let etapaNome = `Etapa ${perguntaAtual}`;
        if (currentLang === "en") etapaNome = `Step ${perguntaAtual}`;
        else if (currentLang === "es") etapaNome = `Etapa ${perguntaAtual}`;
        else if (currentLang === "fr") etapaNome = `Étape ${perguntaAtual}`;
        container.innerHTML = `
            <p style="color: var(--accent); font-weight: 700; font-size: 12px; text-transform: uppercase; margin-bottom: 4px;">${etapaNome} - ${q.categoria}</p>
            <h3 style="font-size: 18px; font-weight: 800; margin-bottom: 16px; text-align: left; font-family: 'Playfair Display', serif;">${perguntaTraduzida}</h3>
            <div class="opcoes">
                ${opcoesHTML}
            </div>
        `;
        document.getElementById("btn-voltar").disabled = perguntaAtual === 1;
        document.getElementById("btn-proximo").disabled = selecionadas.length === 0;
        renderizarProgresso();
    }

        document.getElementById("btn-voltar").disabled = perguntaAtual === 1;
        document.getElementById("btn-proximo").disabled = selecionadas.length === 0;
        renderizarProgresso();
    }

    function selecionarOpcao(realIdx) {
        const q = PERGUNTAS_BASE[perguntaAtual - 1];
        if (!respostas[perguntaAtual]) respostas[perguntaAtual] = [];

        if (q.multipla) {
            const index = respostas[perguntaAtual].indexOf(realIdx);
            if (index === -1) {
                if (respostas[perguntaAtual].length < q.maxSelecoes) {
                    respostas[perguntaAtual].push(realIdx);
                } else {
                    const msg = UI_TEXTS[currentLang].toastMaxSelecoes.replace("{max}", q.maxSelecoes);
                    showToast(msg);
                }
            } else {
                respostas[perguntaAtual].splice(index, 1);
            }
        } else {
            respostas[perguntaAtual] = [realIdx];
        }

        renderizarPergunta();
    }

    function proximaPergunta() {
        if (perguntaAtual < 9) { // Temos 9 etapas agora
            perguntaAtual++;
            renderizarPergunta();
        } else {
            document.getElementById("tela-diagnostico").style.display = "none";
            document.getElementById("tela-auth").style.display = "block";
            atualizarTextosAuth();
        }
    }

    function voltarPergunta() {
        if (perguntaAtual > 1) {
            perguntaAtual--;
            renderizarPergunta();
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
        const texts = UI_TEXTS[currentLang];

        if (!email || !senha) {
            showToast(texts.toastPreencha);
            return;
        }

        if (authMode === "cadastro") {
            if (senha !== confirmar) {
                showToast(texts.toastSenhasDiferentes);
                return;
            }

            localStorage.setItem("auth_email", email);
            localStorage.setItem("auth_senha", senha);
            showToast(texts.toastContaCriada);
        } else {
            const emailSalvo = localStorage.getItem("auth_email");
            const senhaSalva = localStorage.getItem("auth_senha");

            if (email !== emailSalvo || senha !== senhaSalva) {
                showToast(texts.toastLoginIncorreto);
                return;
            }
            showToast(texts.toastLoginSucesso);
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
        const escolaridade = PERGUNTAS_BASE[0].opcoes[p1Idx].valor;
        const escolaridadeTexto = PERGUNTAS_BASE[0].opcoes[p1Idx].texto[currentLang] || PERGUNTAS_BASE[0].opcoes[p1Idx].texto["pt-BR"];

        const p3Indices = respostas[3] || [];
        const dificuldades = p3Indices.map(idx => PERGUNTAS_BASE[2].opcoes[idx].valor);

        const p5Idx = respostas[4][0]; // Ritmo de Aprendizagem é a pergunta 4 agora
        const estilo = PERGUNTAS_BASE[3].opcoes[p5Idx].valor;

        const p6Idx = respostas[5][0]; // Agenda (Tempo) é a pergunta 5 agora
        const tempoOpt = PERGUNTAS_BASE[4].opcoes[p6Idx];
        const tempoMinutos = tempoOpt.tempoMinutos;

        const p7Idx = respostas[6][0]; // Compromisso Diário (Horário) é a pergunta 6 agora
        const horarioEstudo = PERGUNTAS_BASE[5].opcoes[p7Idx].valor;

        const p9Idx = respostas[9][0]; // Meta de Disciplina é a pergunta 9 agora
        const metaDisciplinaOpt = PERGUNTAS_BASE[8].opcoes[p9Idx];
        const metaDisciplinaDias = metaDisciplinaOpt.dias;

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
            horarioEstudo: horarioEstudo,
            metaDisciplinaDias: metaDisciplinaDias,
            nome: emailToName(localStorage.getItem("auth_email") || "Estudante")
        };

        localStorage.setItem("usuario_estudos", JSON.stringify(plano));
        window.location.href = "index.html";
    }

    function emailToName(email) {
        const parts = email.split("@")[0];
        return parts.charAt(0).toUpperCase() + parts.slice(1);
    }

    function toggleDarkMode() {
        const isDark = document.body.classList.toggle("dark-mode");
        localStorage.setItem("norvi_dark_mode", isDark);
        
        const text = document.getElementById("darkModeText");
        if (text) {
            text.textContent = isDark ? "Claro" : "Escuro";
        }
    }

    // --- INICIALIZAÇÃO ---
    document.addEventListener("DOMContentLoaded", () => {
        const isDark = localStorage.getItem("norvi_dark_mode") === "true";
        if (isDark) {
            document.body.classList.add("dark-mode");
            const text = document.getElementById("darkModeText");
            if (text) text.textContent = "Claro";
        }

        const session = localStorage.getItem("norvi_session") || sessionStorage.getItem("norvi_session");
        if (session) {
            window.location.href = "index.html";
        }

        changeLanguage(currentLang);
    });
