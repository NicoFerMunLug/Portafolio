import { ThemeProvider } from "./components/theme-provider"
import { LanguageProvider } from "./context/language-context"
import { ThemeToggle } from "./components/theme-toggle"
import { LanguageToggle } from "./components/language-toggle"
import ProfileSection from "./components/profile-section"
import AboutMeSection from "./components/about-me-section"
import ExperienceTimeline from "./components/experience-timeline"
import ProjectsSection from "./components/projects-section"
import TechStack from "./components/tech-stack"
import ContactSection from "./components/contact-section"

function App() {
  return (
    <ThemeProvider defaultTheme="system" storageKey="vite-ui-theme">
      <LanguageProvider>
        <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white dark:from-slate-950 dark:to-slate-900 pb-20">
          <ThemeToggle />
          <LanguageToggle />

          {/* Header/Profile Section */}
          <ProfileSection />

          <div className="max-w-4xl mx-auto">
            <div className="h-px bg-gradient-to-r from-transparent via-slate-300 dark:via-slate-700 to-transparent"></div>
          </div>

          {/* About Me Section */}
          <AboutMeSection />

          <div className="max-w-4xl mx-auto">
            <div className="h-px bg-gradient-to-r from-transparent via-slate-300 dark:via-slate-700 to-transparent"></div>
          </div>

          {/* Experience Timeline Section */}
          <ExperienceTimeline />

          <div className="max-w-4xl mx-auto">
            <div className="h-px bg-gradient-to-r from-transparent via-slate-300 dark:via-slate-700 to-transparent"></div>
          </div>

          {/* Projects Section */}
          <ProjectsSection />

          <div className="max-w-4xl mx-auto">
            <div className="h-px bg-gradient-to-r from-transparent via-slate-300 dark:via-slate-700 to-transparent"></div>
          </div>

          {/* Tech Stack Section */}
          <TechStack />

          <div className="max-w-4xl mx-auto">
            <div className="h-px bg-gradient-to-r from-transparent via-slate-300 dark:via-slate-700 to-transparent"></div>
          </div>

          {/* Contact Section */}
          <ContactSection />
        </div>
      </LanguageProvider>
    </ThemeProvider>
  )
}

export default App

