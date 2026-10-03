/**
 * Contenu du site, en français et en anglais.
 *
 * Toute la copie du site vit ici : c'est le seul fichier à modifier pour
 * changer un texte. Les deux langues (`fr` et `en`) doivent garder la même
 * structure : le sélecteur de langue s'appuie dessus.
 */

export type Lang = "fr" | "en";

export const SITE = {
  name: "Tom Testu",
  email: "tom.testu@outlook.com",
  phone: "+33 6 81 19 49 96",
  phoneHref: "+33681194996",
  location: "Toulouse, France",
  github: "https://github.com/EvroAI",
  githubLabel: "github.com/EvroAI",
  linkedin: "https://www.linkedin.com/in/tomtestu",
  linkedinLabel: "linkedin.com/in/tomtestu",
  portfolio: "https://tom-testu.com",
  portfolioLabel: "tom-testu.com",
  applyUrl: "https://candidatures.alpha2omegaconsulting.com",
  // Clé publique logo.dev (utilisée pour les logos d'outils du workflow).
  // Clé publishable : conçue pour être exposée côté client.
  logoDevToken: "pk_Z5PnI7n6S6aXa_LZ6XPEYQ",
} as const;

export const content = {
  fr: {
    meta: {
      title: "Tom Testu · Candidature stage web, IA & gouvernance numérique",
      description:
        "Candidature de Tom Testu, étudiant en BUT Informatique à Toulouse, passionné d'IA et de vibecoding (agents, MCP, Skills, RAG), pour un stage en développement web, intelligence artificielle et gouvernance numérique chez Alpha to Omega.",
      htmlLang: "fr",
    },
    ui: {
      skipToContent: "Aller au contenu",
      theme: "Changer de thème",
      themeLight: "Passer au thème clair",
      themeDark: "Passer au thème sombre",
      langToggle: "Voir le site en anglais",
      langShort: "EN",
      external: "ouvre un nouvel onglet",
      onThisPage: "Sur cette page",
      backToTop: "Revenir en haut",
      primaryNav: "Navigation principale",
      tagline: "BUT Informatique · Toulouse",
    },
    nav: {
      about: "Profil",
      skills: "Compétences",
      projects: "Projets",
      journey: "Parcours",
      motivation: "Motivation",
      ai: "IA",
      workflow: "Workflow",
      contact: "Contact",
      menuOpen: "Ouvrir le menu",
      menuClose: "Fermer le menu",
    },
    hero: {
      eyebrow: "Candidature · Stage web, IA & gouvernance numérique",
      hello: "Bonjour, je suis",
      role: "Étudiant en BUT Informatique à Toulouse",
      lead: "Je conçois, développe et déploie des sites web, et je fais de l'IA mon terrain de jeu quotidien. Je pratique le vibecoding à fond, pour l'exécution comme pour le design, sans jamais lâcher la compréhension de ce que je produis.",
      ctaPrimary: "Découvrir mon workflow",
      ctaSecondary: "Me contacter",
      facts: [
        { label: "Localisation", value: "Toulouse · Rangueil" },
        { label: "Formation", value: "BUT Informatique · AGED" },
        { label: "Recherche", value: "Stage de 2 à 6 mois, dès que possible" },
        { label: "Mobilité", value: "Permis B · véhiculé" },
        { label: "IA & agents", value: "MCP · Skills · RAG · Hermès" },
        { label: "Vibecoding", value: "Exécution & design" },
      ],
      terminal: {
        title: "terminal · tom@toulouse",
        lines: [
          {
            cmd: "whoami",
            out: "tom.testu · étudiant en informatique, Toulouse",
          },
          {
            cmd: "cat objectif.txt",
            out: "stage web, IA & gouvernance numérique · 2 à 6 mois",
          },
          {
            cmd: "ls competences/",
            out: "java  kotlin  c  swift  html  css  js  react  sql  git  linux",
          },
          {
            cmd: "git log --oneline -1",
            out: "curiosité · autonomie · envie d'apprendre",
          },
        ],
        inputLabel: "Invite de commande",
        responses: {
          stage: "Je suis disponible en stage 🎓",
          contact: "Écris-moi : tom.testu@outlook.com",
          whoami: "tom.testu · étudiant en BUT Informatique, Toulouse",
          help: "Commandes : stage · contact · whoami · clear",
          unknown: "Je suis disponible en stage 🎓",
        },
      },
    },
    about: {
      title: "Profil",
      kicker: "Qui je suis",
      paragraphs: [
        "J'ai 19 ans et je suis en première année de BUT Informatique à l'IUT de Toulouse, parcours AGED (Administration, Gestion et Exploitation des Données). J'aime comprendre les choses de bout en bout : pas seulement écrire du code, mais aussi le déployer, le documenter et vérifier qu'il répond à un vrai besoin.",
        "Avant le BUT, j'ai obtenu un baccalauréat général avec les spécialités Mathématiques, NSI et Physique-Chimie, et l'option Mathématiques expertes. Ce goût pour la logique et la résolution de problèmes m'accompagne dans chaque projet.",
        "L'intelligence artificielle est bien plus qu'un outil pour moi : c'est une pratique quotidienne. En dehors des cours, je construis avec des agents (Codex, Claude Code, OpenCode), j'expérimente le MCP, les Skills et le RAG, et je pousse le vibecoding aussi bien pour l'exécution que pour le design. J'apprends vite, je teste beaucoup, et je garde toujours un regard critique sur ce qui est produit.",
      ],
      highlights: [
        { value: "BUT Info", label: "IUT de Toulouse, parcours AGED" },
        { value: "Bac général", label: "Maths · NSI · Physique-Chimie" },
        { value: "2026", label: "Premiers projets web & iOS" },
      ],
    },
    skills: {
      title: "Compétences",
      kicker: "Ce que je sais faire",
      intro:
        "Une base solide que j'entretiens en continu, avec une part d'apprentissage assumée : certaines technologies sont découvertes en cours de route, et je préfère le dire clairement.",
      groups: [
        {
          title: "Langages",
          items: ["Java", "Kotlin", "C", "Swift", "JavaScript", "PHP", "HTML / CSS"],
        },
        {
          title: "Web & front-end",
          items: ["React", "Sites responsive", "Accessibilité", "SEO technique"],
        },
        {
          title: "Développement iOS",
          items: ["SwiftUI", "Fonctionnalités natives", "Distribution App Store"],
        },
        {
          title: "Données & conception",
          items: ["SQL", "UML", "Modélisation"],
        },
        {
          title: "Outils & environnement",
          items: [
            "Git",
            "GitHub",
            "Linux (shell)",
            "Cloudflare",
            "Vercel",
            "Supabase",
          ],
        },
        {
          title: "IA & vibecoding",
          items: ["Codex", "Claude Code", "OpenCode", "MCP", "Skills", "RAG", "Hermès", "Vibecoding"],
        },
      ],
      learningTitle: "En cours d'apprentissage",
      learning: [
        {
          name: "Astro",
          note: "Découvert et mis en pratique pour construire ce site de candidature.",
        },
        {
          name: "Déploiement & CI/CD",
          note: "Cloudflare Pages, gestion de domaine et automatisations simples.",
        },
      ],
    },
    projects: {
      title: "Projets",
      kicker: "Ce que j'ai construit",
      intro:
        "Une sélection de projets universitaires et personnels qui montrent comment je travaille, seul et en équipe.",
      items: [
        {
          title: "Application desktop Java : vente de fromages",
          meta: "Universitaire · 2026 · En équipe",
          description:
            "Application desktop de vente : gestion du catalogue, des clients, des paniers et de la facturation. Interface graphique en Java Swing et données stockées en JSON.",
          tags: ["Java", "Swing", "JSON", "UML"],
        },
        {
          title: "Site vitrine : BUT Informatique, IUT de Toulouse",
          meta: "Universitaire · 2025 – 2026 · En équipe",
          description:
            "Site vitrine en HTML/CSS présentant la formation aux futurs étudiants : pages dédiées au diplôme, aux blocs de compétences et aux informations pratiques. Code vérifié conforme aux standards du W3C.",
          tags: ["HTML", "CSS", "W3C"],
        },
        {
          title: "Application iOS de suivi sportif",
          meta: "Personnel · 2026",
          description:
            "Application Swift/SwiftUI pour suivre ses séances de musculation : expérimentation de fonctionnalités natives et distribution sur l'App Store.",
          tags: ["Swift", "SwiftUI", "App Store"],
        },
        {
          title: "Algorithmique & programmation",
          meta: "Universitaire · 2025 – 2026",
          description:
            "Programmes en Kotlin et C : manipulation de structures de données et résolution de problèmes algorithmiques progressifs.",
          tags: ["Kotlin", "C", "Algorithmique"],
        },
        {
          title: "Ce site de candidature",
          meta: "Personnel · 2026",
          description:
            "Site développé avec l'aide de l'IA et déployé sur Cloudflare Pages. Astro, thèmes clair/sombre, bilingue français/anglais et attention portée à l'accessibilité.",
          tags: ["Astro", "Cloudflare Pages", "IA"],
        },
        {
          title: "Expérimentations IA & vibecoding",
          meta: "Personnel · en continu",
          description:
            "Construction de projets avec des agents IA (Codex, Claude Code, OpenCode) : serveurs MCP, skills réutilisables et pipelines RAG. Une pratique quotidienne du vibecoding, de l'exécution au design.",
          tags: ["Codex", "MCP", "Skills", "RAG", "Vibecoding"],
        },
      ],
      githubCta: "Voir tous mes dépôts sur GitHub",
      portfolioCta: "Visiter mon portfolio",
    },
    journey: {
      title: "Parcours",
      kicker: "Mon chemin",
      items: [
        {
          period: "Depuis 2025",
          title: "BUT Informatique · IUT de Toulouse",
          subtitle: "Parcours AGED · Administration, Gestion et Exploitation des Données",
          description:
            "Formation en développement, bases de données, systèmes et réseaux. Premiers projets menés en équipe, du cadrage à la livraison.",
        },
        {
          period: "2025",
          title: "Baccalauréat général · Lycée Blaise Pascal, Châteauroux",
          subtitle: "Spécialités Maths, NSI, Physique-Chimie · Option Maths expertes",
          description:
            "Un bac scientifique marqué par l'informatique et les mathématiques, à l'origine de mon envie de coder.",
        },
        {
          period: "Étés 2024 · 2025 · 2026",
          title: "Employé commercial · Intermarché, Écueillé",
          subtitle: "Relation client & commerce",
          description:
            "Relation client, gestion des rayons et de la caisse, travail en équipe. Une expérience qui m'a appris la rigueur et le sens du service.",
        },
      ],
    },
    motivation: {
      title: "Motivation",
      kicker: "Pourquoi ce stage, et ce que j'en ai compris",
      understood: {
        title: "Ce que j'ai compris du stage",
        items: [
          "Le fil conducteur est le web : participer à des sites sur mesure, du recueil du besoin jusqu'à la mise en ligne et aux évolutions.",
          "Le développement se fait avec Astro et Git/GitHub, avec une attention réelle portée à la performance, à l'accessibilité, au SEO technique et à la maintenabilité.",
          "Le travail ne s'arrête pas au code : déploiement, environnements, noms de domaine, DNS, certificats, Cloudflare, automatisations, CI/CD, lecture de logs et diagnostic d'incidents.",
          "Environ 25 % concernent la gouvernance numérique : recenser les applications et services, cartographier les données et dépendances, clarifier les comptes et droits d'accès, préparer les sujets RGPD et sécurité.",
          "L'IA est un outil de travail à part entière : elle aide à explorer, comprendre, générer et documenter, à condition de vérifier et de reprendre la main.",
        ],
      },
      why: {
        title: "Pourquoi ce stage m'intéresse",
        paragraphs: [
          "Ce stage relie exactement ce que j'aime : la technique et un résultat concret. Voir un projet passer de l'idée au site en ligne, et comprendre tout ce qu'il y a entre les deux (le besoin, le code, le déploiement, la maintenance), c'est ce qui me motive.",
          "Apprendre Astro, toucher au déploiement et découvrir la gouvernance numérique dans une même expérience, c'est pour moi la meilleure façon de progresser. Et comme j'utilise déjà l'IA pour apprendre et développer, rejoindre une entreprise qui en fait un pilier de sa méthode me paraît évident.",
        ],
      },
      bring: {
        title: "Ce que je peux apporter",
        items: [
          "Une pratique avancée de l'IA et du vibecoding : agents (Codex, Claude Code, OpenCode), MCP, Skills et RAG.",
          "Des bases en HTML, CSS, JavaScript et en logique de programmation (Java, Kotlin, C, Swift).",
          "L'habitude de Git, du terminal et de Linux au quotidien.",
          "De l'autonomie : je cherche, je teste et je documente avant d'attendre une solution toute faite.",
          "Un usage raisonné de l'IA : je m'en sers pour aller vite, mais je lis, je vérifie et je corrige ce qui est produit.",
          "De la curiosité pour les usages concrets de la technologie dans les organisations.",
        ],
      },
      learn: {
        title: "Ce que je souhaite apprendre",
        items: [
          "Astro et l'architecture de sites sur mesure.",
          "Le déploiement en conditions réelles : Cloudflare, DNS, certificats, CI/CD, logs et incidents.",
          "Les API et la connexion de services entre eux.",
          "La gouvernance numérique : inventaires, cartographies, gestion des accès, RGPD.",
          "La rigueur d'un travail documenté et expliqué simplement.",
        ],
      },
    },
    ai: {
      title: "IA & Vibecoding",
      kicker: "Mon terrain de jeu quotidien",
      intro:
        "L'intelligence artificielle n'est pas un sujet que je découvre en cours : c'est mon outil de travail de tous les jours et une passion que j'explore à fond en dehors de la formation. Je pratique le vibecoding (construire et concevoir avec l'IA) pour l'exécution comme pour le design.",
      toolsTitle: "Outils & approches que je pratique à fond",
      tools: [
        {
          name: "Codex · Claude Code",
          role: "Agents de codage en ligne de commande : génération, développement assisté et corrections.",
        },
        {
          name: "OpenCode",
          role: "Agents IA en terminal, mon environnement de travail principal.",
        },
        {
          name: "MCP",
          role: "Model Context Protocol : connecter les agents aux outils, API et données.",
        },
        {
          name: "Skills",
          role: "Compétences réutilisables pour étendre les agents.",
        },
        {
          name: "RAG",
          role: "Retrieval-Augmented Generation : interroger des documents et du code.",
        },
        {
          name: "Hermès",
          role: "Expérimentation d'agents et de modèles.",
        },
      ],
      vibecodingTitle: "Vibecoding : exécution et design",
      vibecoding: [
        {
          label: "Exécution",
          text: "Construire vite et bien : générer une base, l'intégrer, déboguer et itérer jusqu'à un résultat fonctionnel et propre.",
        },
        {
          label: "Design",
          text: "Concevoir avec l'IA : explorer des directions visuelles, soigner la mise en page, l'accessibilité et les détails d'interaction.",
        },
      ],
      usageTitle: "Comment ce site a été construit",
      steps: [
        {
          step: "Cadrage",
          detail:
            "Analyser le brief et en déduire la structure du site : sections, ordre de lecture et objectifs de chaque page.",
        },
        {
          step: "Contenus",
          detail:
            "Préparer et reformuler les textes à partir de mon CV, puis les traduire en anglais.",
        },
        {
          step: "Développement",
          detail:
            "Générer une première version des composants Astro, puis relire, comprendre et corriger le code produit.",
        },
        {
          step: "Design & finitions",
          detail:
            "Itérer sur la mise en page, les thèmes clair/sombre, le bilingue et les détails d'ergonomie.",
        },
        {
          step: "Déploiement",
          detail:
            "Préparer la configuration et mettre le site en ligne sur Cloudflare Pages.",
        },
      ],
      ownershipTitle: "Ce que je fais de mon côté",
      ownership:
        "Je ne me contente pas de copier-coller : je lis le code généré, je le teste dans le navigateur, je corrige les erreurs et j'adapte ce qui ne me convient pas. L'IA m'aide à aller plus vite et à apprendre, mais les choix, la vérification et la compréhension restent les miens.",
    },
    workflow: {
      title: "Mon workflow IA",
      kicker: "Ma méthode",
      intro:
        "Comment je transforme une idée en produit, en m'appuyant sur l'IA à chaque étape, et pas seulement au moment de coder.",
      stages: [
        { name: "IDEA", items: ["Idée", "Problème", "Objectif"] },
        { name: "PLAN", items: ["PRD", "Architecture", "System design"] },
        { name: "DESIGN", items: ["UX", "UI", "Figma", "Design system"] },
        { name: "BUILD", items: ["Figma MCP", "Développement", "Agents IA"] },
        { name: "SHIP", items: ["Tests", "Review", "CI/CD", "Production"] },
        {
          name: "ITERATE",
          items: ["Feedback", "Corrections", "Nouvelles versions"],
        },
      ],
    },
    contact: {
      title: "Contact",
      kicker: "Discutons de votre stage",
      lead: "Disponible pour échanger sur le stage et vous montrer mes projets. Vous pouvez me joindre directement ou candidater via le formulaire d'Alpha to Omega.",
      applyCta: "Postuler via Alpha to Omega",
    },
    footer: {
      eyebrow: "Candidature · stage web, IA & gouvernance numérique",
      wordmark: "Tom Testu",
      home: "Accueil",
      built: "Site conçu et développé par Tom Testu, avec l'aide de l'intelligence artificielle, puis déployé sur Cloudflare Pages.",
      rights: "Candidature réalisée pour Alpha to Omega.",
    },
  },

  en: {
    meta: {
      title: "Tom Testu · Web, AI & digital governance internship application",
      description:
        "Application of Tom Testu, computer science student in Toulouse and AI/vibecoding enthusiast (agents, MCP, Skills, RAG), for an internship in web development, artificial intelligence and digital governance at Alpha to Omega.",
      htmlLang: "en",
    },
    ui: {
      skipToContent: "Skip to content",
      theme: "Switch theme",
      themeLight: "Switch to light theme",
      themeDark: "Switch to dark theme",
      langToggle: "View the site in French",
      langShort: "FR",
      external: "opens in a new tab",
      onThisPage: "On this page",
      backToTop: "Back to top",
      primaryNav: "Main navigation",
      tagline: "CS student · Toulouse",
    },
    nav: {
      about: "Profile",
      skills: "Skills",
      projects: "Projects",
      journey: "Journey",
      motivation: "Motivation",
      ai: "AI",
      workflow: "Workflow",
      contact: "Contact",
      menuOpen: "Open menu",
      menuClose: "Close menu",
    },
    hero: {
      eyebrow: "Application · Web, AI & digital governance internship",
      hello: "Hi, I'm",
      role: "Computer science student in Toulouse",
      lead: "I design, build and deploy websites, and AI is my everyday playground. I practise vibecoding deeply, for execution as much as for design, while always keeping a clear understanding of what I produce.",
      ctaPrimary: "Discover my workflow",
      ctaSecondary: "Get in touch",
      facts: [
        { label: "Location", value: "Toulouse · Rangueil" },
        { label: "Studies", value: "Computer Science · AGED" },
        { label: "Looking for", value: "2 to 6 month internship, as soon as possible" },
        { label: "Mobility", value: "Driving licence · own car" },
        { label: "AI & agents", value: "MCP · Skills · RAG · Hermes" },
        { label: "Vibecoding", value: "Execution & design" },
      ],
      terminal: {
        title: "terminal · tom@toulouse",
        lines: [
          {
            cmd: "whoami",
            out: "tom.testu · computer science student, Toulouse",
          },
          {
            cmd: "cat goal.txt",
            out: "web, AI & digital governance internship · 2 to 6 months",
          },
          {
            cmd: "ls skills/",
            out: "java  kotlin  c  swift  html  css  js  react  sql  git  linux",
          },
          {
            cmd: "git log --oneline -1",
            out: "curiosity · autonomy · eagerness to learn",
          },
        ],
        inputLabel: "Command prompt",
        responses: {
          stage: "I'm available for an internship 🎓",
          contact: "Reach me: tom.testu@outlook.com",
          whoami: "tom.testu · computer science student, Toulouse",
          help: "Commands: stage · contact · whoami · clear",
          unknown: "I'm available for an internship 🎓",
        },
      },
    },
    about: {
      title: "Profile",
      kicker: "Who I am",
      paragraphs: [
        "I am 19 and in my first year of a Computer Science bachelor's degree (BUT Informatique) at the IUT de Toulouse, on the AGED track (Administration, Management and Data Operations). I like to understand things end to end: not just writing code, but also deploying it, documenting it and making sure it answers a real need.",
        "Before that, I earned a French general baccalaureate with Mathematics, Computer Science (NSI) and Physics-Chemistry, plus the Advanced Mathematics option. That taste for logic and problem solving follows me through every project.",
        "Artificial intelligence is much more than a tool to me: it is a daily practice. Outside of class, I build with agents (Codex, Claude Code, OpenCode), experiment with MCP, Skills and RAG, and push vibecoding for both execution and design. I learn fast, test a lot, and always keep a critical eye on what is produced.",
      ],
      highlights: [
        { value: "CS degree", label: "IUT de Toulouse, AGED track" },
        { value: "Baccalaureate", label: "Maths · CS · Physics-Chemistry" },
        { value: "2026", label: "First web & iOS projects" },
      ],
    },
    skills: {
      title: "Skills",
      kicker: "What I can do",
      intro:
        "A solid foundation I keep building on, with some honest work in progress: a few technologies are still being learned, and I would rather say so.",
      groups: [
        {
          title: "Languages",
          items: ["Java", "Kotlin", "C", "Swift", "JavaScript", "PHP", "HTML / CSS"],
        },
        {
          title: "Web & front-end",
          items: ["React", "Responsive sites", "Accessibility", "Technical SEO"],
        },
        {
          title: "iOS development",
          items: ["SwiftUI", "Native features", "App Store distribution"],
        },
        {
          title: "Data & design",
          items: ["SQL", "UML", "Data modelling"],
        },
        {
          title: "Tools & environment",
          items: [
            "Git",
            "GitHub",
            "Linux (shell)",
            "Cloudflare",
            "Vercel",
            "Supabase",
          ],
        },
        {
          title: "AI & vibecoding",
          items: ["Codex", "Claude Code", "OpenCode", "MCP", "Skills", "RAG", "Hermes", "Vibecoding"],
        },
      ],
      learningTitle: "Currently learning",
      learning: [
        {
          name: "Astro",
          note: "Discovered and put into practice to build this application site.",
        },
        {
          name: "Deployment & CI/CD",
          note: "Cloudflare Pages, domain management and simple automations.",
        },
      ],
    },
    projects: {
      title: "Projects",
      kicker: "What I have built",
      intro:
        "A selection of university and personal projects that show how I work, alone and in a team.",
      items: [
        {
          title: "Java desktop app: cheese shop",
          meta: "University · 2026 · Team",
          description:
            "A desktop sales application: catalogue, customers, baskets and invoicing. Graphical interface in Java Swing, data stored as JSON.",
          tags: ["Java", "Swing", "JSON", "UML"],
        },
        {
          title: "Showcase site: Computer Science, IUT de Toulouse",
          meta: "University · 2025 – 2026 · Team",
          description:
            "An HTML/CSS showcase website presenting the course to future students: pages dedicated to the degree, the skill blocks and practical information. Code checked against W3C standards.",
          tags: ["HTML", "CSS", "W3C"],
        },
        {
          title: "iOS fitness tracking app",
          meta: "Personal · 2026",
          description:
            "A Swift/SwiftUI app to track my workouts: experimenting with native features and distributing on the App Store.",
          tags: ["Swift", "SwiftUI", "App Store"],
        },
        {
          title: "Algorithms & programming",
          meta: "University · 2025 – 2026",
          description:
            "Programs in Kotlin and C: working with data structures and solving progressively harder algorithmic problems.",
          tags: ["Kotlin", "C", "Algorithms"],
        },
        {
          title: "This application site",
          meta: "Personal · 2026",
          description:
            "A site built with the help of AI and deployed on Cloudflare Pages. Astro, light/dark themes, French/English and a focus on accessibility.",
          tags: ["Astro", "Cloudflare Pages", "AI"],
        },
        {
          title: "AI & vibecoding experiments",
          meta: "Personal · ongoing",
          description:
            "Building projects with AI agents (Codex, Claude Code, OpenCode): MCP servers, reusable skills and RAG pipelines. A daily practice of vibecoding, from execution to design.",
          tags: ["Codex", "MCP", "Skills", "RAG", "Vibecoding"],
        },
      ],
      githubCta: "See all my repositories on GitHub",
      portfolioCta: "Visit my portfolio",
    },
    journey: {
      title: "Journey",
      kicker: "My path",
      items: [
        {
          period: "Since 2025",
          title: "Computer Science degree (BUT) · IUT de Toulouse",
          subtitle: "AGED track · Administration, Management and Data Operations",
          description:
            "Studies in development, databases, systems and networks. First team projects, from framing to delivery.",
        },
        {
          period: "2025",
          title: "General baccalaureate · Lycée Blaise Pascal, Châteauroux",
          subtitle: "Maths, Computer Science, Physics-Chemistry · Advanced Maths option",
          description:
            "A scientific baccalaureate shaped by computer science and mathematics, where my desire to code began.",
        },
        {
          period: "Summers 2024 · 2025 · 2026",
          title: "Sales assistant · Intermarché, Écueillé",
          subtitle: "Customer relations & retail",
          description:
            "Customer service, shelf and till management, teamwork. An experience that taught me rigour and a sense of service.",
        },
      ],
    },
    motivation: {
      title: "Motivation",
      kicker: "Why this internship, and what I understood from it",
      understood: {
        title: "What I understood about the internship",
        items: [
          "Web is the common thread: contributing to custom-built sites, from gathering the need all the way to going live and evolving them.",
          "Development happens with Astro and Git/GitHub, with genuine attention to performance, accessibility, technical SEO and maintainability.",
          "The work does not stop at code: deployment, environments, domains, DNS, certificates, Cloudflare, automations, CI/CD, reading logs and diagnosing incidents.",
          "About 25% is digital governance: listing applications and services, mapping data and dependencies, clarifying accounts and access rights, and preparing GDPR and security topics.",
          "AI is a work tool in its own right: it helps to explore, understand, generate and document, as long as you verify and stay in control.",
        ],
      },
      why: {
        title: "Why this internship interests me",
        paragraphs: [
          "This internship connects exactly what I love: technology and a concrete result. Watching a project go from an idea to a live site, and understanding everything in between (the need, the code, the deployment, the maintenance) is what drives me.",
          "Learning Astro, getting hands-on with deployment and discovering digital governance in a single experience is, to me, the best way to grow. And since I already use AI to learn and build, joining a company that makes it a pillar of its method feels obvious.",
        ],
      },
      bring: {
        title: "What I can bring",
        items: [
          "Advanced practice of AI and vibecoding: agents (Codex, Claude Code, OpenCode), MCP, Skills and RAG.",
          "Foundations in HTML, CSS, JavaScript and programming logic (Java, Kotlin, C, Swift).",
          "Everyday familiarity with Git, the terminal and Linux.",
          "Autonomy: I search, test and document before waiting for a ready-made answer.",
          "A reasoned use of AI: I use it to move fast, but I read, verify and fix what it produces.",
          "Curiosity about how technology is actually used inside organisations.",
        ],
      },
      learn: {
        title: "What I want to learn",
        items: [
          "Astro and the architecture of custom-built sites.",
          "Real-world deployment: Cloudflare, DNS, certificates, CI/CD, logs and incidents.",
          "APIs and connecting services together.",
          "Digital governance: inventories, mappings, access management, GDPR.",
          "The rigour of documented work explained in simple terms.",
        ],
      },
    },
    ai: {
      title: "AI & Vibecoding",
      kicker: "My everyday playground",
      intro:
        "Artificial intelligence is not something I am discovering in class: it is my everyday work tool and a passion I explore deeply outside my studies. I practise vibecoding (building and designing with AI) for execution as much as for design.",
      toolsTitle: "Tools & approaches I work with",
      tools: [
        {
          name: "Codex · Claude Code",
          role: "Command-line coding agents: generation, assisted development and fixes.",
        },
        {
          name: "OpenCode",
          role: "AI agents in the terminal, my main working environment.",
        },
        {
          name: "MCP",
          role: "Model Context Protocol: connecting agents to tools, APIs and data.",
        },
        {
          name: "Skills",
          role: "Reusable capabilities used to extend agents.",
        },
        {
          name: "RAG",
          role: "Retrieval-Augmented Generation: querying documents and code.",
        },
        {
          name: "Hermes",
          role: "Experimenting with agents and models.",
        },
      ],
      vibecodingTitle: "Vibecoding: execution and design",
      vibecoding: [
        {
          label: "Execution",
          text: "Building fast and clean: generating a base, integrating it, debugging and iterating until the result is functional and polished.",
        },
        {
          label: "Design",
          text: "Designing with AI: exploring visual directions, refining layout, accessibility and interaction details.",
        },
      ],
      usageTitle: "How this site was built",
      steps: [
        {
          step: "Framing",
          detail:
            "Analysing the brief and deriving the site structure: sections, reading order and the goal of each part.",
        },
        {
          step: "Content",
          detail:
            "Preparing and rewriting the copy from my CV, then translating it into English.",
        },
        {
          step: "Development",
          detail:
            "Generating a first version of the Astro components, then reading, understanding and fixing the code produced.",
        },
        {
          step: "Design & finishing touches",
          detail:
            "Iterating on layout, light/dark themes, the bilingual system and usability details.",
        },
        {
          step: "Deployment",
          detail:
            "Preparing the configuration and putting the site live on Cloudflare Pages.",
        },
      ],
      ownershipTitle: "What I do myself",
      ownership:
        "I do not just copy and paste: I read the generated code, test it in the browser, fix errors and adapt whatever does not suit me. AI helps me move faster and learn, but the choices, the verification and the understanding remain mine.",
    },
    workflow: {
      title: "My AI workflow",
      kicker: "My method",
      intro:
        "How I turn an idea into a product, leaning on AI at every step, not just when it is time to code.",
      stages: [
        { name: "IDEA", items: ["Idea", "Problem", "Goal"] },
        { name: "PLAN", items: ["PRD", "Architecture", "System design"] },
        { name: "DESIGN", items: ["UX", "UI", "Figma", "Design system"] },
        { name: "BUILD", items: ["Figma MCP", "Development", "AI agents"] },
        { name: "SHIP", items: ["Tests", "Review", "CI/CD", "Production"] },
        { name: "ITERATE", items: ["Feedback", "Fixes", "New versions"] },
      ],
    },
    contact: {
      title: "Contact",
      kicker: "Let's talk about your internship",
      lead: "Available to discuss the internship and show you my projects. You can reach me directly or apply through Alpha to Omega's form.",
      applyCta: "Apply through Alpha to Omega",
    },
    footer: {
      eyebrow: "Application · web, AI & digital governance internship",
      wordmark: "Tom Testu",
      home: "Home",
      built: "Site designed and built by Tom Testu, with the help of artificial intelligence, then deployed on Cloudflare Pages.",
      rights: "Application made for Alpha to Omega.",
    },
  },
} as const;

export type Content = (typeof content)["fr"];
