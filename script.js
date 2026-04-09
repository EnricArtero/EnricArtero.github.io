const revealElements = document.querySelectorAll(".reveal");
const cvLinks = document.querySelectorAll("[data-cv-link]");
const cvLabels = document.querySelectorAll("[data-cv-label]");
const languageTabs = document.querySelectorAll(".language-tab");
const translatableElements = document.querySelectorAll("[data-i18n]");
const pageTitle = document.querySelector("#page-title");
const metaDescription = document.querySelector("#meta-description");
const metaOgTitle = document.querySelector("#meta-og-title");
const metaOgDescription = document.querySelector("#meta-og-description");

const translations = {
  es: {
    meta: {
      title: "Enric Artero | Backend Engineer",
      description:
        "Portfolio de Enric Artero Gomis, ingeniero informático orientado al desarrollo backend con C#, SQL y trabajo en entornos ágiles.",
      ogTitle: "Enric Artero | Backend Engineer Portfolio",
      ogDescription: "Portfolio profesional con experiencia, stack técnico y CV descargable.",
    },
    cv: {
      label: "CV en castellano",
      helper: "Versión seleccionada: CV en castellano",
      file: "assets/CV_EnricArtero_ES.pdf",
      download: "CV_EnricArtero_ES.pdf",
    },
    nav: {
      proposal: "Propuesta",
      experience: "Experiencia",
      contact: "Contacto",
    },
    hero: {
      eyebrow: "Portfolio / Backend Engineer",
      title: "Construyo backend claro, mantenible y listo para crecer.",
      text:
        "Soy Enric Artero Gomis, ingeniero informático con experiencia en desarrollo backend con C#, SQL, automatización de procesos administrativos y trabajo en equipos Scrum. Busco seguir creciendo como profesional en entornos donde pueda aportar desde el primer día, aprender de perfiles con experiencia y seguir formándome de forma constante.",
    },
    language: {
      selectorLabel: "Portfolio y CV disponibles en tres idiomas",
      es: "Castellano",
      cat: "Català",
      en: "English",
    },
    actions: {
      viewCv: "Ver CV",
      downloadCv: "Descargar CV",
      openGithub: "Abrir GitHub",
    },
    stats: {
      csharp: "Backend y mantenimiento de servicios",
      sql: "Consultas relacionales y lógica de datos",
      scrum: "Trabajo ágil y coordinación técnica",
    },
    profile: {
      kicker: "Resumen rápido",
      title: "Perfil profesional",
      text:
        "Graduado en Ingeniería Informática, con una base sólida en backend, aprendizaje rápido y una forma de trabajar muy orientada a la resolución estructurada de problemas. Me interesa construir una trayectoria técnica sólida, con especial foco en backend, buenas prácticas y mejora continua.",
      location: "Ubicación",
      phone: "Teléfono",
      languagesLabel: "Idiomas",
      languagesValue: "Catalán y castellano nativo, inglés alto",
      profiles: "Perfiles",
    },
    proposal: {
      eyebrow: "Propuesta profesional",
      title: "Un perfil técnico con base sólida, actitud de aprendizaje y ambición de crecimiento.",
      cards: [
        {
          tag: "Lo que puedo aportar",
          title: "Trabajo con criterio, responsabilidad y orientación a la mejora",
          text:
            "Me implico en entender los problemas, mantener el código claro y buscar soluciones útiles para el negocio. Valoro el trabajo bien hecho, la constancia y la capacidad de evolucionar técnicamente con cada proyecto.",
        },
        {
          tag: "Objetivo profesional",
          title: "Seguir aprendiendo, crecer en equipo y ganar profundidad técnica",
          text:
            "Busco oportunidades donde desarrollar una base técnica cada vez más fuerte, asumir nuevos retos y seguir formándome en tecnologías, arquitectura y buenas prácticas de desarrollo.",
        },
        {
          tag: "Forma de trabajar",
          title: "Aprendizaje constante con mentalidad práctica",
          text:
            "Me adapto rápido a nuevas herramientas, disfruto aprendiendo y me motiva convertir ese aprendizaje en soluciones reales, mantenibles y bien comunicadas dentro del equipo.",
        },
      ],
    },
    strengths: {
      eyebrow: "Fortalezas",
      title: "La parte técnica y la parte humana van juntas.",
      items: [
        {
          title: "Backend con criterio",
          text: "Desarrollo y mantenimiento de servicios en C#, con foco en legibilidad, continuidad, automatización y mejora de procesos existentes.",
        },
        {
          title: "Análisis y resolución",
          text: "Me apoyo en un enfoque estructurado para encontrar soluciones eficientes y sostenibles, no solo rápidas.",
        },
        {
          title: "Trabajo en equipo",
          text: "Experiencia colaborando con metodología Scrum, participando en la coordinación diaria y en la comunicación técnica.",
        },
        {
          title: "Adaptación rápida",
          text: "Aprendo herramientas y entornos nuevos con facilidad, algo clave en equipos con producto vivo y prioridades cambiantes.",
        },
        {
          title: "Formación en ciberseguridad",
          text: "He realizado un pequeño curso de ciberseguridad, reforzando mi interés por desarrollar con una base más consciente en seguridad y buenas prácticas.",
        },
        {
          title: "Orientación al detalle",
          text: "Presto atención a la calidad de la implementación, la claridad del código y la consistencia general para construir soluciones más fiables.",
        },
        {
          title: "Visión práctica",
          text: "Me gusta conectar la parte técnica con la utilidad real de lo que se construye, priorizando soluciones que aporten valor y sean sostenibles.",
        },
        {
          title: "Actitud de crecimiento",
          text: "Afronto cada proyecto como una oportunidad para mejorar, adquirir criterio técnico y avanzar hacia perfiles de mayor responsabilidad.",
        },
      ],
    },
    experience: {
      eyebrow: "Experiencia",
      title: "Trayectoria reciente",
      items: [
        {
          date: "Abr 2025 - Ene 2026",
          title: "Desarrollador en prácticas · Easy Tech Global",
          text: "Desarrollo y mantenimiento de servicios backend con C#, implementación de nuevas funcionalidades, automatización de procesos administrativos para empresas y mejora de procesos existentes dentro de un equipo organizado con Scrum.",
        },
        {
          date: "Jul 2022 - Jun 2023",
          title: "Comercial interno y soporte de gestión · Tronik Parts Distribution",
          text: "Gestión de incidencias, coordinación logística y resolución de problemas operativos bajo presión, reforzando capacidad organizativa y comunicación con cliente.",
        },
        {
          date: "Jul 2023 - Oct 2023",
          title: "Asistente en sala · La Tagliatella",
          text: "Experiencia en atención al cliente en un entorno dinámico, consolidando adaptación, trabajo en equipo y habilidades comunicativas.",
        },
      ],
    },
    education: {
      eyebrow: "Educación",
      title: "Universidad de Barcelona",
      text: "Estudios en Ingeniería Informática, pendiente de entrega del TFG. Base sólida en programación, diseño orientado a objetos y resolución de problemas.",
    },
    skills: {
      eyebrow: "Stack y fortalezas",
      items: ["POO", "Buenas prácticas", "Ciberseguridad", "Análisis", "Comunicación", "Adaptabilidad", "Liderazgo"],
    },
    github: {
      title: "Proyectos personales y trabajo en evolución.",
      cards: [
        {
          tag: "Proyecto personal",
          text: "En GitHub tengo publicado mi proyecto personal <strong>java-vue-calculator</strong>, donde combino Java y Vue en un ejercicio práctico que refleja iniciativa personal, ganas de seguir aprendiendo y motivación por construir software publicable.",
        },
        {
          tag: "TFG",
          title: "Trabajo de Fin de Grado en proceso de publicación",
          text: "Estoy publicando mi TFG y, en cuanto esté completamente acabado, lo haré público para incorporarlo también como parte destacada de este portfolio y seguir mostrando mi evolución técnica con proyectos reales.",
        },
        {
          tag: "Enfoque",
          title: "GitHub como carta de presentación",
          text: "Mi objetivo es que el repositorio muestre no solo código funcional, sino también evolución, criterio técnico y capacidad para llevar una idea hasta una versión visible.",
        },
      ],
    },
    contact: {
      eyebrow: "Contacto",
      title: "Disponible para oportunidades donde aportar, aprender y crecer como desarrollador.",
      text: "Estoy especialmente interesado en seguir formándome dentro de equipos donde pueda mejorar mi base técnica, asumir responsabilidad progresiva y crecer con proyectos reales.",
      writeMe: "Escribirme",
    },
  },
  cat: {
    meta: {
      title: "Enric Artero | Enginyer Backend",
      description:
        "Portfolio d'Enric Artero Gomis, enginyer informàtic orientat al desenvolupament backend amb C#, SQL i treball en entorns àgils.",
      ogTitle: "Enric Artero | Portfolio Backend Engineer",
      ogDescription: "Portfolio professional amb experiència, stack tècnic i CV descarregable.",
    },
    cv: {
      label: "CV en català",
      helper: "Versió seleccionada: CV en català",
      file: "assets/CV_EnricArtero_CAT.pdf",
      download: "CV_EnricArtero_CAT.pdf",
    },
    nav: {
      proposal: "Proposta",
      experience: "Experiència",
      contact: "Contacte",
    },
    hero: {
      eyebrow: "Portfolio / Backend Engineer",
      title: "Construeixo backend clar, mantenible i preparat per créixer.",
      text:
        "Soc Enric Artero Gomis, enginyer informàtic amb experiència en desenvolupament backend amb C#, SQL, automatització de processos administratius i treball en equips Scrum. Busco continuar creixent com a professional en entorns on pugui aportar des del primer dia, aprendre de perfils amb experiència i continuar formant-me de manera constant.",
    },
    language: {
      selectorLabel: "Portfolio i CV disponibles en tres idiomes",
      es: "Castellano",
      cat: "Català",
      en: "English",
    },
    actions: {
      viewCv: "Veure CV",
      downloadCv: "Descarregar CV",
      openGithub: "Obrir GitHub",
    },
    stats: {
      csharp: "Backend i manteniment de serveis",
      sql: "Consultes relacionals i lògica de dades",
      scrum: "Treball àgil i coordinació tècnica",
    },
    profile: {
      kicker: "Resum ràpid",
      title: "Perfil professional",
      text:
        "Graduat en Enginyeria Informàtica, amb una base sòlida en backend, aprenentatge ràpid i una manera de treballar molt orientada a la resolució estructurada de problemes. M'interessa construir una trajectòria tècnica sòlida, amb especial focus en backend, bones pràctiques i millora contínua.",
      location: "Ubicació",
      phone: "Telèfon",
      languagesLabel: "Idiomes",
      languagesValue: "Català i castellà nadius, anglès alt",
      profiles: "Perfils",
    },
    proposal: {
      eyebrow: "Proposta professional",
      title: "Un perfil tècnic amb base sòlida, actitud d'aprenentatge i ambició de creixement.",
      cards: [
        {
          tag: "El que puc aportar",
          title: "Treball amb criteri, responsabilitat i orientació a la millora",
          text:
            "M'implico a entendre els problemes, mantenir el codi clar i buscar solucions útils per al negoci. Valoro la feina ben feta, la constància i la capacitat d'evolucionar tècnicament amb cada projecte.",
        },
        {
          tag: "Objectiu professional",
          title: "Continuar aprenent, créixer en equip i guanyar profunditat tècnica",
          text:
            "Busco oportunitats on desenvolupar una base tècnica cada cop més forta, assumir nous reptes i continuar formant-me en tecnologies, arquitectura i bones pràctiques de desenvolupament.",
        },
        {
          tag: "Forma de treballar",
          title: "Aprenentatge constant amb mentalitat pràctica",
          text:
            "M'adapto ràpidament a noves eines, gaudeixo aprenent i em motiva convertir aquest aprenentatge en solucions reals, mantenibles i ben comunicades dins de l'equip.",
        },
      ],
    },
    strengths: {
      eyebrow: "Fortaleses",
      title: "La part tècnica i la part humana van juntes.",
      items: [
        {
          title: "Backend amb criteri",
          text: "Desenvolupament i manteniment de serveis en C#, amb focus en llegibilitat, continuïtat, automatització i millora de processos existents.",
        },
        {
          title: "Anàlisi i resolució",
          text: "Em recolzo en un enfocament estructurat per trobar solucions eficients i sostenibles, no només ràpides.",
        },
        {
          title: "Treball en equip",
          text: "Experiència col·laborant amb metodologia Scrum, participant en la coordinació diària i en la comunicació tècnica.",
        },
        {
          title: "Adaptació ràpida",
          text: "Aprenc eines i entorns nous amb facilitat, quelcom clau en equips amb producte viu i prioritats canviants.",
        },
        {
          title: "Formació en ciberseguretat",
          text: "He fet un petit curs de ciberseguretat, reforçant el meu interès per desenvolupar amb una base més conscient en seguretat i bones pràctiques.",
        },
        {
          title: "Orientació al detall",
          text: "Presto atenció a la qualitat de la implementació, la claredat del codi i la consistència general per construir solucions més fiables.",
        },
        {
          title: "Visió pràctica",
          text: "M'agrada connectar la part tècnica amb la utilitat real del que es construeix, prioritzant solucions que aportin valor i siguin sostenibles.",
        },
        {
          title: "Actitud de creixement",
          text: "Afronto cada projecte com una oportunitat per millorar, adquirir criteri tècnic i avançar cap a perfils de més responsabilitat.",
        },
      ],
    },
    experience: {
      eyebrow: "Experiència",
      title: "Trajectòria recent",
      items: [
        {
          date: "Abr 2025 - Gen 2026",
          title: "Desenvolupador en pràctiques · Easy Tech Global",
          text: "Desenvolupament i manteniment de serveis backend amb C#, implementació de noves funcionalitats, automatització de processos administratius per a empreses i millora de processos existents dins d'un equip organitzat amb Scrum.",
        },
        {
          date: "Jul 2022 - Jun 2023",
          title: "Comercial intern i suport de gestió · Tronik Parts Distribution",
          text: "Gestió d'incidències, coordinació logística i resolució de problemes operatius sota pressió, reforçant capacitat organitzativa i comunicació amb client.",
        },
        {
          date: "Jul 2023 - Oct 2023",
          title: "Assistent de sala · La Tagliatella",
          text: "Experiència en atenció al client en un entorn dinàmic, consolidant adaptació, treball en equip i habilitats comunicatives.",
        },
      ],
    },
    education: {
      eyebrow: "Educació",
      title: "Universitat de Barcelona",
      text: "Estudis en Enginyeria Informàtica. Base sòlida en programació, disseny orientat a objectes i resolució de problemes.",
    },
    skills: {
      eyebrow: "Stack i fortaleses",
      items: ["POO", "Bones pràctiques", "Ciberseguretat", "Anàlisi", "Comunicació", "Adaptabilitat", "Lideratge"],
    },
    github: {
      title: "Projectes personals i treball en evolució.",
      cards: [
        {
          tag: "Projecte personal",
          text: "A GitHub tinc publicat el meu projecte personal <strong>java-vue-calculator</strong>, on combino Java i Vue en un exercici pràctic que reflecteix iniciativa personal, ganes de continuar aprenent i motivació per construir software publicable.",
        },
        {
          tag: "TFG",
          title: "Treball de Fi de Grau en procés de publicació",
          text: "Estic publicant el meu TFG i, tan bon punt estigui completament acabat, el faré públic per incorporar-lo també com a part destacada d'aquest portfolio i continuar mostrant la meva evolució tècnica amb projectes reals.",
        },
        {
          tag: "Enfocament",
          title: "GitHub com a carta de presentació",
          text: "El meu objectiu és que el repositori mostri no només codi funcional, sinó també evolució, criteri tècnic i capacitat per portar una idea fins a una versió visible.",
        },
      ],
    },
    contact: {
      eyebrow: "Contacte",
      title: "Disponible per a oportunitats on aportar, aprendre i créixer com a desenvolupador.",
      text: "Estic especialment interessat a continuar formant-me dins d'equips on pugui millorar la meva base tècnica, assumir responsabilitat progressiva i créixer amb projectes reals.",
      writeMe: "Escriu-me",
    },
  },
  en: {
    meta: {
      title: "Enric Artero | Backend Engineer",
      description:
        "Portfolio of Enric Artero Gomis, a software engineer focused on backend development with C#, SQL, and agile teamwork.",
      ogTitle: "Enric Artero | Backend Engineer Portfolio",
      ogDescription: "Professional portfolio with experience, technical stack, and downloadable resume.",
    },
    cv: {
      label: "CV in English",
      helper: "Selected version: CV in English",
      file: "assets/CV_EnricArtero_EN.pdf",
      download: "CV_EnricArtero_EN.pdf",
    },
    nav: {
      proposal: "Value",
      experience: "Experience",
      contact: "Contact",
    },
    hero: {
      eyebrow: "Portfolio / Backend Engineer",
      title: "I build clear, maintainable backend systems ready to grow.",
      text:
        "I am Enric Artero Gomis, a software engineer with experience in backend development using C#, SQL, administrative process automation, and Scrum teams. I am looking to keep growing as a professional in environments where I can contribute from day one, learn from experienced teammates, and keep developing my skills continuously.",
    },
    language: {
      selectorLabel: "Portfolio and CV available in three languages",
      es: "Castellano",
      cat: "Català",
      en: "English",
    },
    actions: {
      viewCv: "View CV",
      downloadCv: "Download CV",
      openGithub: "Open GitHub",
    },
    stats: {
      csharp: "Backend development and service maintenance",
      sql: "Relational queries and data logic",
      scrum: "Agile teamwork and technical coordination",
    },
    profile: {
      kicker: "Quick summary",
      title: "Professional profile",
      text:
        "Computer Engineering graduate with a solid backend foundation, fast learning skills, and a structured problem-solving mindset. I am interested in building a strong technical career with a clear focus on backend, good practices, and continuous improvement.",
      location: "Location",
      phone: "Phone",
      languagesLabel: "Languages",
      languagesValue: "Native Catalan and Spanish, advanced English",
      profiles: "Profiles",
    },
    proposal: {
      eyebrow: "Professional value",
      title: "A technical profile with strong fundamentals, a learning mindset, and ambition to grow.",
      cards: [
        {
          tag: "What I bring",
          title: "Thoughtful work, responsibility, and a strong improvement mindset",
          text:
            "I focus on understanding problems, keeping code clear, and building solutions that are useful for the business. I value quality work, consistency, and the ability to keep evolving technically with every project.",
        },
        {
          tag: "Career goal",
          title: "Keep learning, grow within a team, and deepen my technical skills",
          text:
            "I am looking for opportunities where I can strengthen my technical foundation, take on new challenges, and continue learning about technologies, architecture, and development best practices.",
        },
        {
          tag: "How I work",
          title: "Continuous learning with a practical mindset",
          text:
            "I adapt quickly to new tools, enjoy learning, and like turning that learning into real, maintainable solutions that are well communicated within the team.",
        },
      ],
    },
    strengths: {
      eyebrow: "Strengths",
      title: "Technical skills and human skills go hand in hand.",
      items: [
        {
          title: "Thoughtful backend work",
          text: "Backend development and maintenance in C#, focused on readability, continuity, automation, and process improvement.",
        },
        {
          title: "Analysis and problem-solving",
          text: "I rely on a structured approach to find efficient and sustainable solutions, not just quick ones.",
        },
        {
          title: "Teamwork",
          text: "Experience collaborating in Scrum environments, taking part in daily coordination and technical communication.",
        },
        {
          title: "Fast adaptation",
          text: "I learn new tools and environments quickly, which is essential in teams with evolving products and shifting priorities.",
        },
        {
          title: "Cybersecurity training",
          text: "I completed a short cybersecurity course, reinforcing my interest in building software with stronger security awareness and best practices.",
        },
        {
          title: "Attention to detail",
          text: "I care about implementation quality, code clarity, and overall consistency to build more reliable solutions.",
        },
        {
          title: "Practical mindset",
          text: "I like connecting technical work with real business usefulness, prioritizing solutions that deliver value and remain sustainable.",
        },
        {
          title: "Growth mindset",
          text: "I approach each project as an opportunity to improve, sharpen my technical judgment, and move toward roles with greater responsibility.",
        },
      ],
    },
    experience: {
      eyebrow: "Experience",
      title: "Recent background",
      items: [
        {
          date: "Apr 2025 - Jan 2026",
          title: "Backend Developer Intern · Easy Tech Global",
          text: "Backend service development and maintenance in C#, implementation of new features, automation of administrative processes for companies, and improvement of existing processes within a Scrum team.",
        },
        {
          date: "Jul 2022 - Jun 2023",
          title: "Internal Sales and Management Support · Tronik Parts Distribution",
          text: "Issue management, logistics coordination, and operational problem-solving under pressure, strengthening organizational skills and client communication.",
        },
        {
          date: "Jul 2023 - Oct 2023",
          title: "Restaurant Floor Assistant · La Tagliatella",
          text: "Customer-facing experience in a dynamic environment, strengthening adaptability, teamwork, and communication skills.",
        },
      ],
    },
    education: {
      eyebrow: "Education",
      title: "University of Barcelona",
      text: "Computer Engineering studies. Strong foundation in programming, object-oriented design, and problem-solving.",
    },
    skills: {
      eyebrow: "Stack and strengths",
      items: ["OOP", "Best practices", "Cybersecurity", "Analysis", "Communication", "Adaptability", "Leadership"],
    },
    github: {
      title: "Personal projects and work in progress.",
      cards: [
        {
          tag: "Personal project",
          text: "On GitHub I have published my personal project <strong>java-vue-calculator</strong>, where I combine Java and Vue in a practical exercise that reflects initiative, willingness to keep learning, and motivation to build publishable software.",
        },
        {
          tag: "Thesis",
          title: "Final Degree Project being prepared for publication",
          text: "I am publishing my final degree project and, once it is fully completed, I will make it public so it can also become a highlighted part of this portfolio and show my technical growth through real projects.",
        },
        {
          tag: "Approach",
          title: "GitHub as a professional showcase",
          text: "My goal is for the repository to show not only working code, but also progress, technical judgment, and the ability to bring an idea to a visible release.",
        },
      ],
    },
    contact: {
      eyebrow: "Contact",
      title: "Open to opportunities where I can contribute, learn, and grow as a developer.",
      text: "I am especially interested in continuing to grow within teams where I can strengthen my technical foundation, take on increasing responsibility, and learn through real projects.",
      writeMe: "Write me",
    },
  },
};

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) {
        return;
      }

      entry.target.classList.add("is-visible");
      observer.unobserve(entry.target);
    });
  },
  {
    threshold: 0.18,
  }
);

const getValueFromPath = (obj, path) =>
  path.split(".").reduce((value, key) => (value ? value[key] : undefined), obj);

const applyTranslations = (language) => {
  const content = translations[language];

  if (!content) {
    return;
  }

  document.documentElement.lang = language === "cat" ? "ca" : language;
  document.title = content.meta.title;
  pageTitle.textContent = content.meta.title;
  metaDescription.setAttribute("content", content.meta.description);
  metaOgTitle.setAttribute("content", content.meta.ogTitle);
  metaOgDescription.setAttribute("content", content.meta.ogDescription);

  translatableElements.forEach((element) => {
    const key = element.dataset.i18n;
    const value = getValueFromPath(content, key);

    if (typeof value === "string") {
      element.innerHTML = value;
    }
  });

  cvLabels.forEach((label) => {
    label.textContent = content.cv.helper;
  });

  cvLinks.forEach((link) => {
    link.href = content.cv.file;

    if (link.dataset.cvLink === "download") {
      link.setAttribute("download", content.cv.download);
    }
  });

  languageTabs.forEach((tab) => {
    const isActive = tab.dataset.lang === language;
    tab.classList.toggle("is-active", isActive);
    tab.setAttribute("aria-selected", String(isActive));
  });
};

revealElements.forEach((element) => observer.observe(element));

languageTabs.forEach((tab) => {
  tab.addEventListener("click", () => applyTranslations(tab.dataset.lang));
});

applyTranslations("cat");
