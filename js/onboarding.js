const PERGUNTAS_BASE = [
    {
        id: 1,
        categoria: "Nível Acadêmico",
        pergunta: {
            "pt-BR": "Qual é o seu nível de escolaridade?",
            "pt-PT": "Qual é o seu nível de escolaridade?",
            "en": "What is your level of education?",
            "es": "¿Cuál es tu nivel de escolaridad?",
            "fr": "Quel est votre niveau d'études?"
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
        categoria: "Área de Conhecimento",
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
        categoria: "Matérias com Dificuldade",
        pergunta: {
            "pt-BR": "Em quais matérias você tem MAIS dificuldade? (Escolha até 3)",
            "pt-PT": "Em quais disciplinas tem MAIS dificuldade? (Escolha até 3)",
            "en": "In which subjects do you have the MOST difficulty? (Choose up to 3)",
            "es": "¿En qué materias tienes MÁS dificultad? (Elige até 3)",
            "fr": "Dans quelles matières avez-vous le PLUS de difficultés? (Choisissez jusqu'à 3)"
        },
        multipla: true,
        maxSelecoes: 3,
        opcoes: [
            { texto: { "pt-BR": "Matemática", "pt-PT": "Matemática", "en": "Mathematics", "es": "Matemáticas", "fr": "Mathématiques" }, valor: "Matemática", niveis: ["fundamental_1", "fundamental_2", "medio", "superior", "pos"] },
            { texto: { "pt-BR": "Português", "pt-PT": "Português", "en": "Portuguese", "es": "Portugués", "fr": "Portugais" }, valor: "Português", niveis: ["fundamental_1", "fundamental_2", "medio", "superior", "pos"] },
            { texto: { "pt-BR": "História", "pt-PT": "História", "en": "History", "es": "Historia", "fr": "Histoire" }, valor: "História", niveis: ["fundamental_1", "fundamental_2", "medio", "superior", "pos"] },
            { texto: { "pt-BR": "Geografia", "pt-PT": "Geografia", "en": "Geography", "es": "Geografía", "fr": "Géographie" }, valor: "Geografia", niveis: ["fundamental_1", "fundamental_2", "medio", "superior", "pos"] },
            { texto: { "pt-BR": "Ciências/Biologia", "pt-PT": "Ciências/Biologia", "en": "Science/Biology", "es": "Ciencias/Biología", "fr": "Sciences/Biologie" }, valor: "Ciências", niveis: ["fundamental_1", "fundamental_2", "medio", "superior", "pos"] },
            { texto: { "pt-BR": "Física", "pt-PT": "Física", "en": "Physics", "es": "Física", "fr": "Physique" }, valor: "Física", niveis: ["medio", "superior", "pos"] },
            { texto: { "pt-BR": "Química", "pt-PT": "Química", "en": "Chemistry", "es": "Química", "fr": "Chimie" }, valor: "Química", niveis: ["medio", "superior", "pos"] },
            { texto: { "pt-BR": "Inglês", "pt-PT": "Inglês", "en": "English", "es": "Inglés", "fr": "Anglais" }, valor: "Inglês", niveis: ["fundamental_2", "medio", "superior", "pos"] },
            { texto: { "pt-BR": "Filosofia", "pt-PT": "Filosofia", "en": "Philosophy", "es": "Filosofía", "fr": "Philosophie" }, valor: "Filosofia", niveis: ["medio", "superior", "pos"] },
            { texto: { "pt-BR": "Sociologia", "pt-PT": "Sociologia", "en": "Sociology", "es": "Sociología", "fr": "Sociologie" }, valor: "Sociologia", niveis: ["medio", "superior", "pos"] }
        ]
    },
    {
        id: 4,
        categoria: "Matérias com Facilidade",
        pergunta: {
            "pt-BR": "Em quais matérias você tem MENOS dificuldade? (Escolha até 2)",
            "pt-PT": "Em quais disciplinas tem MENOS dificuldade? (Escolha até 2)",
            "en": "In which subjects do you have the LEAST difficulty? (Choose up to 2)",
            "es": "¿En qué materias tienes MENOS dificultad? (Elige até 2)",
            "fr": "Dans quelles matières avez-vous le MOINS de difficultés? (Choisissez jusqu'à 2)"
        },
        multipla: true,
        maxSelecoes: 2,
        opcoes: [
            { texto: { "pt-BR": "Matemática", "pt-PT": "Matemática", "en": "Mathematics", "es": "Matemáticas", "fr": "Mathématiques" }, valor: "Matemática", niveis: ["fundamental_1", "fundamental_2", "medio", "superior", "pos"] },
            { texto: { "pt-BR": "Português", "pt-PT": "Português", "en": "Portuguese", "es": "Portugués", "fr": "Portugais" }, valor: "Português", niveis: ["fundamental_1", "fundamental_2", "medio", "superior", "pos"] },
            { texto: { "pt-BR": "História", "pt-PT": "História", "en": "History", "es": "Historia", "fr": "Histoire" }, valor: "História", niveis: ["fundamental_1", "fundamental_2", "medio", "superior", "pos"] },
            { texto: { "pt-BR": "Geografia", "pt-PT": "Geografia", "en": "Geography", "es": "Geografía", "fr": "Géographie" }, valor: "Geografia", niveis: ["fundamental_1", "fundamental_2", "medio", "superior", "pos"] },
            { texto: { "pt-BR": "Ciências/Biologia", "pt-PT": "Ciências/Biologia", "en": "Science/Biology", "es": "Ciencias/Biología", "fr": "Sciences/Biologie" }, valor: "Ciências", niveis: ["fundamental_1", "fundamental_2", "medio", "superior", "pos"] },
            { texto: { "pt-BR": "Física", "pt-PT": "Física", "en": "Physics", "es": "Física", "fr": "Physique" }, valor: "Física", niveis: ["medio", "superior", "pos"] },
            { texto: { "pt-BR": "Química", "pt-PT": "Química", "en": "Chemistry", "es": "Química", "fr": "Chimie" }, valor: "Química", niveis: ["medio", "superior", "pos"] },
            { texto: { "pt-BR": "Inglês", "pt-PT": "Inglês", "en": "English", "es": "Inglés", "fr": "Anglais" }, valor: "Inglês", niveis: ["fundamental_2", "medio", "superior", "pos"] },
            { texto: { "pt-BR": "Filosofia", "pt-PT": "Filosofia", "en": "Philosophy", "es": "Filosofía", "fr": "Philosophie" }, valor: "Filosofia", niveis: ["medio", "superior", "pos"] },
            { texto: { "pt-BR": "Sociologia", "pt-PT": "Sociologia", "en": "Sociology", "es": "Sociología", "fr": "Sociologie" }, valor: "Sociologia", niveis: ["medio", "superior", "pos"] }
        ]
    },
    {
        id: 5,
        categoria: "Estilo de Aprendizagem",
        pergunta: {
            "pt-BR": "Qual é o seu estilo de aprendizagem preferido?",
            "pt-PT": "Qual é o seu estilo de aprendizagem preferido?",
            "en": "What is your preferred learning style?",
            "es": "¿Cuál es tu estilo de aprendizaje preferido?",
            "fr": "Quel est votre style d'apprentissage préféré?"
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
        id: 6,
        categoria: "Disponibilidade de Tempo",
        pergunta: {
            "pt-BR": "Quanto tempo por dia você consegue reservar para estudar?",
            "pt-PT": "Quanto tempo por dia consegue reservar para estudar?",
            "en": "How much time per day can you set aside to study?",
            "es": "¿Cuánto tiempo al día puedes reservar para estudiar?",
            "fr": "Combien de temps par jour pouvez-vous consacrer à l'étude?"
        },
        multipla: false,
        opcoes: [
            { texto: { "pt-BR": "Menos de 15 minutos ⏱️", "pt-PT": "Menos de 15 minutos ⏱️", "en": "Less than 15 minutes ⏱️", "es": "Menos de 15 minutos ⏱️", "fr": "Moins de 15 minutes ⏱️" }, valor: "15min", tempoMinutos: 15 },
            { texto: { "pt-BR": "15 a 30 minutos", "pt-PT": "15 a 30 minutos", "en": "15 to 30 minutes", "es": "15 a 30 minutos", "fr": "15 à 30 minutes" }, valor: "30min", tempoMinutos: 20 },
            { texto: { "pt-BR": "30 a 60 minutos", "pt-PT": "30 a 60 minutos", "en": "30 to 60 minutes", "es": "30 a 60 minutos", "fr": "30 à 60 minutes" }, valor: "60min", tempoMinutos: 30 },
            { texto: { "pt-BR": "Mais de 1 hora", "pt-PT": "Mais de 1 hora", "en": "More than 1 hour", "es": "Más de 1 hora", "fr": "Plus d'une heure" }, valor: "1h+", tempoMinutos: 45 }
        ]
    },
    {
        id: 7,
        categoria: "Frequência de Estudos",
        pergunta: {
            "pt-BR": "Com que frequência você ESTUDA atualmente?",
            "pt-PT": "Com que frequência ESTUDA atualmente?",
            "en": "How often do you currently STUDY?",
            "es": "¿Con qué frecuencia ESTUDIAS actualmente?",
            "fr": "À quelle fréquence ÉTUDIEZ-vous actuellement?"
        },
        multipla: false,
        opcoes: [
            { texto: { "pt-BR": "Raramente (menos de 1x por semana)", "pt-PT": "Raramente (menos de 1x por semana)", "en": "Rarely (less than once a week)", "es": "Raramente (menos de 1 vez por semana)", "fr": "Rarement (moins d'une fois par semaine)" }, valor: "raramente" },
            { texto: { "pt-BR": "1 a 2 vezes por semana", "pt-PT": "1 a 2 vezes por semana", "en": "1 to 2 times a week", "es": "1 a 2 veces por semana", "fr": "1 à 2 fois par semaine" }, valor: "1-2x" },
            { texto: { "pt-BR": "3 a 4 vezes por semana", "pt-PT": "3 a 4 vezes por semana", "en": "3 to 4 times a week", "es": "3 a 4 veces por semana", "fr": "3 à 4 fois par semaine" }, valor: "3-4x" },
            { texto: { "pt-BR": "Todos os dias (ou quase)", "pt-PT": "Todos os dias (ou quase)", "en": "Every day (or almost)", "es": "Todos los días (o casi)", "fr": "Tous les jours (ou presque)" }, valor: "diario" }
        ]
    },
    {
        id: 8,
        categoria: "Objetivo Principal",
        pergunta: {
            "pt-BR": "Qual é seu objetivo principal com os estudos?",
            "pt-PT": "Qual é o seu objetivo principal com os estudos?",
            "en": "What is your main goal with your studies?",
            "es": "¿Cuál es tu objetivo principal con los estudios?",
            "fr": "Quel est votre objectif principal avec vos études?"
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
        id: 9,
        categoria: "Maior Obstáculo",
        pergunta: {
            "pt-BR": "Qual é seu maior obstáculo para estudar?",
            "pt-PT": "Qual é o seu maior obstáculo para estudar?",
            "en": "What is your biggest obstacle to studying?",
            "es": "¿Cuál es tu mayor obstáculo para estudiar?",
            "fr": "Quel est votre plus grand obstacle à l'étude?"
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
        id: 10,
        categoria: "Meta de Curto Prazo",
        pergunta: {
            "pt-BR": "Qual sua meta para o próximo mês?",
            "pt-PT": "Qual é a sua meta para o próximo mês?",
            "en": "What is your goal for the next month?",
            "es": "¿Cuál es tu meta para el próximo mes?",
            "fr": "Quel est votre objectif pour le mois prochain?"
        },
        multipla: false,
        opcoes: [
            { texto: { "pt-BR": "Criar o hábito (estudar pelo menos 3x/semana)", "pt-PT": "Criar o hábito (estudar pelo menos 3x/semana)", "en": "Build the habit (study at least 3x/week)", "es": "Crear el hábito (estudiar al menos 3x/semana)", "fr": "Créer l'habitude (étudier au moins 3x/semaine)" }, valor: "habito_3x" },
            { texto: { "pt-BR": "Finalizar um assunto específico", "pt-PT": "Finalizar um assunto específico", "en": "Finish a specific subject", "es": "Finalizar un tema específico", "fr": "Terminer un sujet spécifique" }, valor: "finalizar_assunto" },
            { texto: { "pt-BR": "Estudar pelo menos 5 dias por semana", "pt-PT": "Estudar pelo menos 5 dias por semana", "en": "Study at least 5 days a week", "es": "Estudiar al menos 5 días por semana", "fr": "Étudier au moins 5 jours par semaine" }, valor: "estudar_5x" },
            { texto: { "pt-BR": "Manter uma ofensiva de 30 dias sem falhar", "pt-PT": "Manter uma ofensiva de 30 dias sem falhar", "en": "Keep a 30-day streak without failing", "es": "Mantener una racha de 30 días sin fallar", "fr": "Garder une série de 30 jours sans faillir" }, valor: "ofensiva_30d" }
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
            finalFrequencia: "📅 Frequência",
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
    function showToast(message) {
        const container = document.getElementById('toastContainer');
        const toast = document.createElement('div');
        toast.className = 'toast';
        toast.innerHTML = `<span>✨</span> ${message}`;
        container.appendChild(toast);
        setTimeout(() => toast.remove(), 3000);
    }

    function changeLanguage(lang) {
        currentLang = lang;
        localStorage.setItem("norvi_lang", lang);
        
        // Traduz elementos estáticos da Landing Page
        const texts = UI_TEXTS[lang];
        document.querySelector("#tela-inicial .logo").textContent = texts.logo;
        document.querySelector("#tela-inicial .subtitulo").innerHTML = texts.tagline;
        document.querySelector("#tela-inicial button").textContent = texts.btnComecar;

        // Traduz botões de navegação do diagnóstico
        document.getElementById("btn-voltar").textContent = texts.btnVoltar;
        document.getElementById("btn-proximo").textContent = texts.btnProximo;

        // Traduz tela de autenticação
        atualizarTextosAuth();

        // Se estiver no diagnóstico, re-renderiza a pergunta atual para atualizar o idioma
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
        for (let i = 1; i <= 10; i++) {
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

        // --- FILTRAGEM DINÂMICA DE MATÉRIAS (P3 e P4) ---
        // Se for a pergunta 3 ou 4, filtramos as opções com base no nível escolar selecionado na pergunta 1!
        let opcoesFiltradas = q.opcoes;
        if (q.id === 3 || q.id === 4) {
            const p1Idx = respostas[1] ? respostas[1][0] : null;
            if (p1Idx !== null) {
                const nivelEscolar = PERGUNTAS_BASE[0].opcoes[p1Idx].valor;
                opcoesFiltradas = q.opcoes.filter(opt => opt.niveis.includes(nivelEscolar));
            }
        }

        let opcoesHTML = "";
        opcoesFiltradas.forEach((opt, idx) => {
            // Acha o índice real na lista original para salvar a resposta corretamente
            const realIdx = q.opcoes.indexOf(opt);
            const isSel = selecionadas.includes(realIdx);
            const textoTraduzido = opt.texto[currentLang] || opt.texto["pt-BR"];
            
            opcoesHTML += `
                <div class="opcao ${isSel ? 'selecionada' : ''}" onclick="selecionarOpcao(${realIdx})">
                    <span>${textoTraduzido}</span>
                    ${q.multipla ? '<div class="opcao-checkbox"></div>' : ''}
                </div>
            `;
        });

        const perguntaTraduzida = q.pergunta[currentLang] || q.pergunta["pt-BR"];

        container.innerHTML = `
            <p style="color: var(--accent); font-weight: 700; font-size: 12px; text-transform: uppercase; margin-bottom: 4px;">${q.categoria}</p>
            <h3 style="font-size: 18px; font-weight: 800; margin-bottom: 16px; text-align: left;">${perguntaTraduzida}</h3>
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
        if (perguntaAtual < 10) {
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

        const p5Idx = respostas[5][0];
        const estilo = PERGUNTAS_BASE[4].opcoes[p5Idx].valor;

        const p6Idx = respostas[6][0];
        const tempoOpt = PERGUNTAS_BASE[5].opcoes[p6Idx];
        const tempoMinutos = tempoOpt.tempoMinutos;

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
            nome: emailToName(localStorage.getItem("auth_email") || "Estudante")
        };

        localStorage.setItem("usuario_estudos", JSON.stringify(plano));
        window.location.href = "index.html";
    }

    function emailToName(email) {
        const parts = email.split("@")[0];
        return parts.charAt(0).toUpperCase() + parts.slice(1);
    }

    // --- INICIALIZAÇÃO ---
    document.addEventListener("DOMContentLoaded", () => {
        // Aplica Dark Mode se estiver ativo
        const isDark = localStorage.getItem("norvi_dark_mode") === "true";
        if (isDark) {
            document.body.classList.add("dark-mode");
        }

        // Verifica sessão ativa
        const session = localStorage.getItem("norvi_session") || sessionStorage.getItem("norvi_session");
        if (session) {
            window.location.href = "index.html";
        }

        // Aplica idioma inicial
        changeLanguage(currentLang);
    });
    function toggleDarkMode() {
        const isDark = document.body.classList.toggle("dark-mode");
        localStorage.setItem("norvi_dark_mode", isDark);
        const text = document.getElementById("darkModeText");
        if (text) {
            text.textContent = isDark ? "Claro" : "Escuro";
        }
    }
