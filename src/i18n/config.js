import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

// Traduzioni Italiano
const it = {
  translation: {
    // Navbar
    nav: {
      home: 'Home',
      about: 'Chi Sono',
      projects: 'Progetti',
      gallery: 'Galleria',
      contact: 'Contatti'
    },

    // Ruoli professionali
    roles: {
      discord_dev: 'Discord Bot Developer',
      fullstack_dev: 'Full Stack Developer',
      game_admin: 'Game Server Admin',
      community_manager: 'Community Manager',
      modpack_creator: 'Modpack Creator'
    },

    // Sezioni principali
    sections: {
      timeline: 'Il Mio Percorso',
      projects: 'Progetti Principali',
      gallery: 'Galleria Lavori',
      skills: 'Competenze Tecniche',
      stats: 'Statistiche'
    },

    // Competenze
    skills: {
      title: 'Competenze Tecniche',
      expert: 'Esperto',
      advanced: 'Avanzato',
      intermediate: 'Intermedio',
      beginner: 'Base'
    },

    // Timeline eventi
    timeline: {
      start: {
        title: 'Inizio del Percorso',
        desc: 'Primi passi nella programmazione e scoperta delle community online di sviluppatori'
      },
      discord: {
        title: 'Discord Bot Development',
        desc: 'Specializzazione nella creazione di bot Discord professionali per gestione server e community'
      },
      fullstack: {
        title: 'Full Stack Development',
        desc: 'Espansione delle competenze verso lo sviluppo web completo con React e Node.js'
      },
      gameserver: {
        title: 'Game Server Management',
        desc: 'Gestione di server di gioco Minecraft e creazione di modpack personalizzati su larga scala'
      },
      community: {
        title: 'Community Manager',
        desc: 'Gestione di community online, moderazione e progetti collaborativi con migliaia di utenti'
      },
      future: {
        title: 'Espansione Progetti',
        desc: 'Sviluppo di progetti più ambiziosi e collaborazioni internazionali nel campo tech'
      }
    },

    // Discord integration
    discord: {
      activity: 'Attività Discord',
      loading: 'Caricamento...',
      offline: 'Offline',
      idle: 'Nessuna attività',
      status: {
        online: 'Online',
        idle: 'Assente',
        dnd: 'Non disturbare',
        offline: 'Offline'
      }
    },

    // Links e Social
    links: {
      title: 'Collegamenti',
      github: 'Progetti GitHub',
      discord: 'Profilo Discord',
      fiverr: 'Servizi Fiverr',
      portfolio: 'Portfolio Web'
    },

    // Progetti
    projects: {
      viewAll: 'Visualizza Tutti',
      viewCode: 'Codice Sorgente',
      viewDemo: 'Anteprima Live',
      status: {
        active: 'Attivo',
        development: 'In Sviluppo',
        completed: 'Completato',
        archived: 'Archiviato'
      }
    },

    // Galleria
    gallery: {
      viewAll: 'Visualizza Tutto',
      categories: {
        all: 'Tutti',
        development: 'Sviluppo',
        design: 'Design',
        infrastructure: 'Infrastruttura',
        community: 'Community',
        gaming: 'Gaming'
      },
      protected: 'Immagine protetta da copyright',
      watermark: '© D4vide106'
    },

    // Footer
    footer: {
      tagline: 'Discord Bot Developer & Full Stack Developer specializzato in soluzioni innovative',
      quickLinks: 'Link Rapidi',
      followMe: 'Seguimi',
      contact: 'Contatti',
      rights: 'Tutti i diritti riservati.',
      privacy: 'Privacy Policy',
      terms: 'Termini di Servizio',
      cookies: 'Cookie Policy'
    },

    // Buttons e UI
    ui: {
      learnMore: 'Scopri di Più',
      getInTouch: 'Contattami',
      downloadCV: 'Scarica CV',
      backToTop: 'Torna Su',
      close: 'Chiudi',
      next: 'Avanti',
      previous: 'Indietro',
      loading: 'Caricamento...',
      error: 'Errore di caricamento',
      retry: 'Riprova'
    },

    // Meta descriptions
    meta: {
      description: 'Portfolio professionale di D4vide106 - Discord Bot Developer, Full Stack Developer e Game Server Administrator. Progetti, competenze e servizi di sviluppo.',
      keywords: 'Discord Bot, Developer, Full Stack, React, Node.js, Game Server, Minecraft, Modpack, Community Management'
    }
  }
};

// Traduzioni Inglese
const en = {
  translation: {
    // Navbar
    nav: {
      home: 'Home',
      about: 'About',
      projects: 'Projects',
      gallery: 'Gallery',
      contact: 'Contact'
    },

    // Professional roles
    roles: {
      discord_dev: 'Discord Bot Developer',
      fullstack_dev: 'Full Stack Developer',
      game_admin: 'Game Server Admin',
      community_manager: 'Community Manager',
      modpack_creator: 'Modpack Creator'
    },

    // Main sections
    sections: {
      timeline: 'My Journey',
      projects: 'Main Projects',
      gallery: 'Work Gallery',
      skills: 'Technical Skills',
      stats: 'Statistics'
    },

    // Skills
    skills: {
      title: 'Technical Skills',
      expert: 'Expert',
      advanced: 'Advanced',
      intermediate: 'Intermediate',
      beginner: 'Beginner'
    },

    // Timeline events
    timeline: {
      start: {
        title: 'Journey Beginning',
        desc: 'First steps in programming and discovering online developer communities'
      },
      discord: {
        title: 'Discord Bot Development',
        desc: 'Specialization in creating professional Discord bots for server and community management'
      },
      fullstack: {
        title: 'Full Stack Development',
        desc: 'Expansion of skills towards complete web development with React and Node.js'
      },
      gameserver: {
        title: 'Game Server Management',
        desc: 'Managing Minecraft game servers and creating large-scale custom modpacks'
      },
      community: {
        title: 'Community Manager',
        desc: 'Managing online communities, moderation and collaborative projects with thousands of users'
      },
      future: {
        title: 'Project Expansion',
        desc: 'Development of more ambitious projects and international collaborations in tech field'
      }
    },

    // Discord integration
    discord: {
      activity: 'Discord Activity',
      loading: 'Loading...',
      offline: 'Offline',
      idle: 'No activity',
      status: {
        online: 'Online',
        idle: 'Away',
        dnd: 'Do Not Disturb',
        offline: 'Offline'
      }
    },

    // Links and Social
    links: {
      title: 'Links',
      github: 'GitHub Projects',
      discord: 'Discord Profile',
      fiverr: 'Fiverr Services',
      portfolio: 'Web Portfolio'
    },

    // Projects
    projects: {
      viewAll: 'View All',
      viewCode: 'Source Code',
      viewDemo: 'Live Preview',
      status: {
        active: 'Active',
        development: 'In Development',
        completed: 'Completed',
        archived: 'Archived'
      }
    },

    // Gallery
    gallery: {
      viewAll: 'View All',
      categories: {
        all: 'All',
        development: 'Development',
        design: 'Design',
        infrastructure: 'Infrastructure',
        community: 'Community',
        gaming: 'Gaming'
      },
      protected: 'Image protected by copyright',
      watermark: '© D4vide106'
    },

    // Footer
    footer: {
      tagline: 'Discord Bot Developer & Full Stack Developer specialized in innovative solutions',
      quickLinks: 'Quick Links',
      followMe: 'Follow Me',
      contact: 'Contact',
      rights: 'All rights reserved.',
      privacy: 'Privacy Policy',
      terms: 'Terms of Service',
      cookies: 'Cookie Policy'
    },

    // Buttons and UI
    ui: {
      learnMore: 'Learn More',
      getInTouch: 'Get In Touch',
      downloadCV: 'Download CV',
      backToTop: 'Back to Top',
      close: 'Close',
      next: 'Next',
      previous: 'Previous',
      loading: 'Loading...',
      error: 'Loading error',
      retry: 'Retry'
    },

    // Meta descriptions
    meta: {
      description: 'Professional portfolio of D4vide106 - Discord Bot Developer, Full Stack Developer and Game Server Administrator. Projects, skills and development services.',
      keywords: 'Discord Bot, Developer, Full Stack, React, Node.js, Game Server, Minecraft, Modpack, Community Management'
    }
  }
};

// Configurazione i18n
i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources: {
      it,
      en
    },
    lng: 'it', // Lingua di default
    fallbackLng: 'it',
    
    interpolation: {
      escapeValue: false
    },
    
    detection: {
      order: ['localStorage', 'navigator', 'htmlTag'],
      lookupLocalStorage: 'i18nextLng',
      caches: ['localStorage']
    }
  });

export default i18n;