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
            btnComecar: "Começar Diagnóstico",
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
            btnComecarEstudar: "🚀 COMEÇAR A ESTUDAR"
        },
        "pt-PT": {
            logo: "🧠",
            tagline: "Foque nos estudos. Construa hábitos.<br>A sua rotina de estudos simplificada.",
            btnComecar: "Começar Diagnóstico",
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
            finalFrequencia: "📅 Frecuencia",
            finalTempo: "⏱️ Tempo",
            finalMaterias: "📚 Disciplinas",
            finalMeta: "📝 Meta Diária",
            finalMissao: "🎯 A sua Missão de Hoje:",
            btnComecarEstudar: "🚀 COMEÇAR A ESTUDAR"
        },
        "en": {
            logo: "🧠",
            tagline: "Focus on your studies. Build habits.<br>Your simplified study routine.",
            btnComecar: "Start Diagnostic",
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
            btnComecarEstudar: "🚀 START STUDYING"
        },
        "es": {
            logo: "🧠",
            tagline: "Enfócate en tus estudios. Construye hábitos.<br>Tu rutina de estudios simplificada.",
            btnComecar: "Comenzar Diagnóstico",
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
            btnComecarEstudar: "🚀 EMPEZAR A ESTUDIAR"
        },
        "fr": {
            logo: "🧠",
            tagline: "Concentrez-vous sur vos études. Créez des habitudes.<br>Votre routine d'étude simplifiée.",
            btnComecar: "Commencer le Diagnostic",
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
            btnComecarEstudar: "🚀 COMMENCER À ÉTUDIER"
        }
    };
    function changeLanguage(lang) {
        currentLang = lang;
        localStorage.setItem("norvi_lang", lang);
        document.getElementById("langSelector").value = lang;
        
        const texts = UI_TEXTS[lang];
        document.querySelector("#tela-inicial .subtitulo").innerHTML = texts.tagline;
        document.querySelector("#tela-inicial button").textContent = texts.btnComecar;

        document.getElementById("btn-voltar").textContent = texts.btnVoltar;
        document.getElementById("btn-proximo").textContent = texts.btnProximo;

        atualizarTextosAuth();

        if (document.getElementById("tela-diagnostico").style.display === "block") {
            renderizarPergunta();
        }
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
        document.getElementById("tela-inicial").style.display = "none";
        document.getElementById("tela-diagnostico").style.display = "block";
        renderizarPergunta();
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
        container.innerHTML = "";

        const q = PERGUNTAS_BASE[perguntaAtual - 1];
        const selecionadas = respostas[perguntaAtual] || [];

        // --- FILTRAGEM DINÂMICA DE MATÉRIAS (P3) ---
        let opcoesFiltradas = q.opcoes;
        if (q.id === 3) {
            const p1Idx = respostas[1] ? respostas[1][0] : null;
            if (p1Idx !== null) {
                const nivelEscolar = PERGUNTAS_BASE[0].opcoes[p1Idx].valor;
                opcoesFiltradas = q.opcoes.filter(opt => opt.niveis.includes(nivelEscolar));
            }
        }

        let opcoesHTML = "";
        opcoesFiltradas.forEach((opt, idx) => {
            const realIdx = q.opcoes.indexOf(opt);
            const isSel = selecionadas.includes(realIdx);
            const textoTraduzido = opt.texto[currentLang] || opt.texto["pt-BR"];
            
            opcoesHTML += `
                <div class="opcao ${isSel ? 'selecionada' : ''}" onclick="selecionarOpcao(${realIdx})">
                    <span>${textoTraduzido}</span>
                    <span class="opcao-star">✧</span>
                </div>
            `;
        });

        const perguntaTraduzida = q.pergunta[currentLang] || q.pergunta["pt-BR"];

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
