"use client"
import { useLanguage } from "../context/language-context"
import { Button } from "./ui/button"

export function LanguageToggle() {
  const { language, setLanguage } = useLanguage()

  return (
    <Button
      variant="outline"
      size="sm"
      onClick={() => setLanguage(language === "es" ? "en" : "es")}
      className="fixed top-4 left-4 z-50 rounded-full bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm border border-slate-200 dark:border-slate-700 shadow-md"
      aria-label="Toggle language"
    >
      {language === "es" ? "EN" : "ES"}
    </Button>
  )
}

