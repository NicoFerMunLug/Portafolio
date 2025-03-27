"use client"

import { createContext, useContext, useState, type ReactNode } from "react"

type Language = "es" | "en"

interface LanguageContextType {
  language: Language
  setLanguage: (language: Language) => void
  t: (key: string) => string
}

const translations = {
  es: {
    // Perfil
    "profile.name": "Soy Nicolás Fernando Muñoz Lugo",
    "profile.title": "Desarrollador Frontend & Diseñador UI/UX",
    "profile.button": "Descargar CV",

    // Sobre mi
    "about.title": "Sobre Mí",
    "about.p1":
      "Estudiante de 7 semestres de ingeniería de sistemas, con habilidad en la resolución de problemas y automatización de procesos, diseño y desarrollo web, diseño UI.",
    "about.p2":
      "Con 2 años y 8 meses de experiencia que abarca desde el desarrollo web hasta el soporte técnico, lo que me ha permitido adquirir una visión integral de los sistemas tecnológicos en entornos dinámicos y de alto rendimiento.",
    "about.p3":
      "Me apasiona crear soluciones que impacten directamente en la experiencia del usuario, facilitando el uso de aplicativos o páginas web y en la eficiencia operativa de las empresas.",

    // Experiencia
    "experience.title": "Experiencia",
    "experience.job1.title": "Analista de Mesa de Ayuda",
    "experience.job1.date": "Mayo 2024 - Presente",
    "experience.job1.description":
      "Desarrollo y ajustes en software propio con HTML, PHP, React y JavaScript. \nAutomatización de procesos para optimizar la operación del área. \n Mantenimiento y mejora de bases de datos en MySQL. \n Implementación de contenedores y despliegue con Docker. \n Gestión de código con Git, GitHub y GitLab. \n Soporte y supervisión de robots RPA en UiPath y Selenium.",

    "experience.job2.title": "Auxiliar técnico",
    "experience.job2.date": "Marzo 2020 - Diciembre 2021",
    "experience.job2.description":
      "Configuración e integración de sistemas de seguridad con DVR, NVR y switches. \n Uso de software de monitoreo como iVMS-4200. \n Elaboración de reportes técnicos y documentación de instalaciones.",

    "experience.job3.title": "Desarrollador web ",
    "experience.job3.date": "Abril 2023 - Octubre 2023",
    "experience.job3.description":
      "Diseño y desarrollo del sitio web con HTML, WordPress e integración de sistemas. \n Creación de mockups en Figma para la arquitectura del sitio. \n Evaluación y optimización del rendimiento web. \n Mejora en la gestión de documentación interna.",

    "experience.job4.title": "Practicante de soporte IT",
    "experience.job4.date": "Diciembre 2022 - Junio 2023 ",
    "experience.job4.description":
      "Gestión y solución de incidencias con sistema de tickets. \n Mantenimiento preventivo y correctivo de equipos y redes. \n Generación de reportes y optimización de procesos internos con Office.",

    // Proyectos
    "projects.title": "Proyectos",
    "projects.featured": "Destacado",
    "projects.ecommerce.title": "Plataforma E-Commerce",
    "projects.ecommerce.description":
      "Una experiencia de compra moderna con filtrado avanzado, gestión de inventario en tiempo real e integración de pagos segura.",
    "projects.button.code": "Código",
    "projects.button.live": "Demo",

    "projects.task.title": "App de Gestión de Tareas",
    "projects.task.description": "Una herramienta de productividad con colaboración en tiempo real.",

    "projects.ai.title": "Generador de Contenido IA",
    "projects.ai.description": "Genera posts de blog, contenido para redes sociales y más con IA.",

    "projects.opensource.title": "Contribuciones Open Source",
    "projects.opensource.description":
      "Soy un contribuidor activo en varios proyectos de código abierto, ayudando a construir herramientas que los desarrolladores aman.",
    "projects.opensource.button": "Ver Contribuciones",

    "projects.weather.title": "Dashboard del Clima",
    "projects.weather.description": "Visualización de datos meteorológicos en tiempo real.",

    "projects.blog.title": "Blog Técnico",
    "projects.blog.description": "Escribo sobre desarrollo web, mejores prácticas y nuevas tecnologías.",
    "projects.blog.button": "Leer Artículos",

    "projects.ui.title": "Librería de Componentes UI",
    "projects.ui.description": "Una colección de componentes UI reutilizables construidos con React y Tailwind.",
    "projects.ui.button": "Explorar Librería",

    // Stack tecnologico
    "tech.title": "Stack Tecnológico",
    "tech.frontend": "Frontend",
    "tech.backend": "Backend",
    "tech.design": "Herramientas de Diseño",
    "tech.devops": "DevOps y Herramientas",

    // Contacto
    "contact.title": "Contáctame",
    "contact.email.title": "Envíame un Email",
    "contact.email.description": "No dudes en contactarme si tienes alguna pregunta o quieres trabajar juntos.",
    "contact.form.title": "Enviar un Mensaje",
    "contact.form.name": "Tu Nombre",
    "contact.form.email": "Tu Email",
    "contact.form.message": "Tu Mensaje",
    "contact.form.button": "Enviar Mensaje",
  },
  en: {
    // Profile
    "profile.name": "I'm Nicolas Fernando Muñoz Lugo",
    "profile.title": "Frontend Developer & UI/UX Designer",
    "profile.button": "Download CV",

    // About
    "about.title": "About Me",
    "about.p1":
      "Student of 7 semester of systems engineering, with skills in problem solving and process automation, web design and development, UX/UI design.",
    "about.p2":
      "With 2 years and 8 months of experience ranging from web development to technical support, which has allowed me to acquire an integral vision of technological systems in dynamic and high-performance environments.",
    "about.p3":
      "I am passionate about creating solutions that directly impact the user experience, facilitating the use of applications or websites and in the operational efficiency of companies.",

    // Experience
    "experience.title": "Experience",
    "experience.job1.title": "Help Desk Analyst",
    "experience.job1.date": "May 2024 - Present",
    "experience.job1.description":
      "Development and adjustments in own software with HTML, PHP, React and JavaScript. \n Automatization of processes to optimize the operation of the area. \n Maintenance and improvement of databases in MySQL. \n Container deployment and deployment with Docker. \n Code management with Git, GitHub and GitLab. \n Support and monitoring of RPA robots in UiPath and Selenium.",

    "experience.job2.title": "Technical Assistant",
    "experience.job2.date": "March 2020 - December 2021",
    "experience.job2.description":
      "Configuration and integration of security systems with DVR, NVR and switches. \n Use monitoring software such as iVMS-4200. \n Preparation of technical reports and documentation of installations.",

    "experience.job3.title": "Web Developer",
    "experience.job3.date": "April 2023 - October 2023",
    "experience.job3.description":
      "Website design and development with HTML, WordPress and system integration. \n Creation of mockups in Figma for the site architecture. \n Evaluation and optimisation of web performance. \n Improvement in internal documentation management.",

    "experience.job4.title": "IT Support Trainee",
    "experience.job4.date": "December 2022 - June 2023",
    "experience.job4.description":
      "Management and resolution of incidents with the ticket system. \n Preventive and corrective maintenance of equipment and networks. \n Reporting and optimization of internal processes with Office.",

    // Projects
    "projects.title": "Projects",
    "projects.featured": "Featured",
    "projects.ecommerce.title": "E-Commerce Platform",
    "projects.ecommerce.description":
      "A modern shopping experience with advanced filtering, real-time inventory management, and secure payment integration.",
    "projects.button.code": "Code",
    "projects.button.live": "Live",

    "projects.task.title": "Task Management App",
    "projects.task.description": "A productivity tool with real-time collaboration.",

    "projects.ai.title": "AI Content Generator",
    "projects.ai.description": "Generate blog posts, social media content, and more with AI.",

    "projects.opensource.title": "Open Source Contributions",
    "projects.opensource.description":
      "I'm an active contributor to several open source projects, helping build tools that developers love.",
    "projects.opensource.button": "View Contributions",

    "projects.weather.title": "Weather Dashboard",
    "projects.weather.description": "Real-time weather data visualization.",

    "projects.blog.title": "Technical Blog",
    "projects.blog.description": "I write about web development, best practices, and new technologies.",
    "projects.blog.button": "Read Articles",

    "projects.ui.title": "UI Component Library",
    "projects.ui.description": "A collection of reusable UI components built with React and Tailwind.",
    "projects.ui.button": "Explore Library",

    // Tech Stack
    "tech.title": "Technology Stack",
    "tech.frontend": "Frontend",
    "tech.backend": "Backend",
    "tech.design": "Design Tools",
    "tech.devops": "DevOps & Tools",

    // Contact
    "contact.title": "Contact Me",
    "contact.email.title": "Email Me",
    "contact.email.description": "Feel free to reach out if you have any questions or want to work together.",
    "contact.form.title": "Send a Message",
    "contact.form.name": "Your Name",
    "contact.form.email": "Your Email",
    "contact.form.message": "Your Message",
    "contact.form.button": "Send Message",
  },
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined)

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState<Language>("es")

  const t = (key: string): string => {
    return translations[language][key as keyof (typeof translations)[typeof language]] || key
  }

  return <LanguageContext.Provider value={{ language, setLanguage, t }}>{children}</LanguageContext.Provider>
}

export function useLanguage() {
  const context = useContext(LanguageContext)
  if (context === undefined) {
    throw new Error("useLanguage must be used within a LanguageProvider")
  }
  return context
}

