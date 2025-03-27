import { User } from "lucide-react"
import { useLanguage } from "../context/language-context"

export default function AboutMeSection() {
  const { t } = useLanguage()

  return (
    <div className="max-w-4xl mx-auto px-4 py-12">
      <h2 className="flex items-center gap-3 text-2xl font-bold text-primary dark:text-white mb-8">
        <div className="p-2 bg-violet-100 rounded-lg">
          <User className="w-5 h-5 text-primary" />
        </div>
        {t("about.title")}
      </h2>

      <div className="bg-white/80 dark:bg-slate-800/50 backdrop-blur-sm rounded-lg p-6 shadow-md">
        <p className="text-slate-700 dark:text-slate-300 mb-4 leading-relaxed">{t("about.p1")}</p>

        <p className="text-slate-700 dark:text-slate-300 mb-4 leading-relaxed">{t("about.p2")}</p>

        <p className="text-slate-700 dark:text-slate-300 leading-relaxed">{t("about.p3")}</p>
      </div>
    </div>
  )
}

