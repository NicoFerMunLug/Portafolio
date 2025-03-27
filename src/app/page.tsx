"use client"

import { ThemeToggle } from "@/components/theme-toggle"
import { LanguageToggle } from "@/components/language-toggle"
import ExperienceTimeline from "@/components/experience-timeline"
import ProfileSection from "@/components/profile-section"
import ProjectsSection from "@/components/projects-section"
import TechStack from "@/components/tech-stack"
import AboutMeSection from "@/components/about-me-section"
import ContactSection from "@/components/contact-section"
import MainNav from "@/components/main-nav"

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white dark:from-slate-950 dark:to-slate-900 pb-20">
      <MainNav />
      <ThemeToggle />
      <LanguageToggle />

      {/* Profile Section */}
      <section id="profile">
        <ProfileSection />
      </section>

      <div className="max-w-4xl mx-auto">
        <div className="h-px bg-gradient-to-r from-transparent via-slate-300 dark:via-slate-700 to-transparent"></div>
      </div>

      {/* About Me Section */}
      <section id="about">
        <AboutMeSection />
      </section>

      <div className="max-w-4xl mx-auto">
        <div className="h-px bg-gradient-to-r from-transparent via-slate-300 dark:via-slate-700 to-transparent"></div>
      </div>

      {/* Experience Timeline Section */}
      <section id="experience">
        <ExperienceTimeline />
      </section>

      <div className="max-w-4xl mx-auto">
        <div className="h-px bg-gradient-to-r from-transparent via-slate-300 dark:via-slate-700 to-transparent"></div>
      </div>

      {/* Projects Section */}
      <section id="projects">
        <ProjectsSection />
      </section>

      <div className="max-w-4xl mx-auto">
        <div className="h-px bg-gradient-to-r from-transparent via-slate-300 dark:via-slate-700 to-transparent"></div>
      </div>

      {/* Tech Stack Section */}
      <section id="tech-stack">
        <TechStack />
      </section>

      <div className="max-w-4xl mx-auto">
        <div className="h-px bg-gradient-to-r from-transparent via-slate-300 dark:via-slate-700 to-transparent"></div>
      </div>

      {/* Contact Section */}
      <section id="contact">
        <ContactSection />
      </section>
    </div>
  )
}