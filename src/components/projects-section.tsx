import { Star, ExternalLink, Github, Code, Zap, Layers } from "lucide-react"
import { Button } from "./ui/button"
import { Badge } from "./ui/badge"
import { Card, CardContent } from "./ui/card"
import { useLanguage } from "../context/language-context"
import WordPressIcon from "./icons/WordPressIcon"
import FigmaIcon from "./icons/FigmaIcon"
import { Html } from "next/document"
import HtmlIcon from "./icons/HtmlIcon"
import Css3Icon from "./icons/CssIcon"
import JavaScriptIcon from "./icons/JavaScriptIcon"
import AdobeXdIcon from "./icons/AdobeXdIcon"

export default function ProjectsSection() {
  const { t } = useLanguage()

  return (
    <div className="max-w-4xl mx-auto px-4 py-12">
      <h2 className="flex items-center gap-3 text-2xl font-bold text-slate-800 dark:text-slate-200 mb-8">
        <div className="p-2 bg-indigo-100 dark:bg-indigo-900/30 rounded-lg">
          <Star className="w-5 h-5 text-indigo-600 dark:text-indigo-400" />
        </div>
        {t("projects.title")}
      </h2>

      <div className="grid grid-cols-12 gap-4">
        {/* Featured Project - Large Card */}
        <Card className="col-span-12 md:col-span-8 overflow-hidden border-none shadow-md dark:shadow-slate-900/50 bg-white/80 dark:bg-slate-800/50 backdrop-blur-sm hover:shadow-lg transition-all group">
          <div className="relative h-64 overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent z-10"></div>
            <img
              src="/placeholder.svg?height=300&width=600"
              alt="Project thumbnail"
              className="w-full h-full object-cover transition-transform group-hover:scale-105"
            />
            <div className="absolute bottom-4 left-4 z-20">
              <Badge className="bg-indigo-500 hover:bg-indigo-600 text-white border-none">
                {t("projects.featured")}
              </Badge>
            </div>
          </div>
          <CardContent className="p-6">
            <h3 className="text-xl font-semibold text-slate-800 dark:text-slate-200 mb-2">
              {t("projects.1.title")}
            </h3>
            <p className="text-slate-600 dark:text-slate-400 mb-4">{t("projects.ecommerce.description")}</p>
            <div className="flex flex-wrap gap-2 mb-4">
              <WordPressIcon/>
              <FigmaIcon/>
              <AdobeXdIcon/>
              <HtmlIcon/>
              <Css3Icon/>
              <JavaScriptIcon/>
            </div>
            <div className="flex gap-3">
              <Button
                variant="outline"
                className="border-slate-300 dark:border-slate-700 text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-md flex items-center gap-2"
              >
                <Github className="w-4 h-4" />
                {t("projects.button.code")}
              </Button>
              <Button className="bg-indigo-600 hover:bg-indigo-700 text-white rounded-md flex items-center gap-2">
                {t("projects.button.live")}
                <ExternalLink className="w-4 h-4" />
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* Smaller Project Card */}
        <Card className="col-span-12 md:col-span-4 overflow-hidden border-none shadow-md dark:shadow-slate-900/50 bg-white/80 dark:bg-slate-800/50 backdrop-blur-sm hover:shadow-lg transition-all group">
          <div className="relative h-40 overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent z-10"></div>
            <img
              src="/placeholder.svg?height=200&width=300"
              alt="Project thumbnail"
              className="w-full h-full object-cover transition-transform group-hover:scale-105"
            />
          </div>
          <CardContent className="p-4">
            <h3 className="text-lg font-semibold text-slate-800 dark:text-slate-200 mb-2">
              {t("projects.task.title")}
            </h3>
            <p className="text-slate-600 dark:text-slate-400 mb-3 text-sm">{t("projects.task.description")}</p>
            <div className="flex flex-wrap gap-1 mb-3">
              <Badge
                variant="outline"
                className="bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 text-xs"
              >
                React
              </Badge>
              <Badge
                variant="outline"
                className="bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 text-xs"
              >
                Firebase
              </Badge>
            </div>
            <div className="flex gap-2">
              <Button
                variant="outline"
                size="sm"
                className="border-slate-300 dark:border-slate-700 text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-md flex items-center gap-1"
              >
                <Github className="w-3 h-3" />
                {t("projects.button.code")}
              </Button>
              <Button
                size="sm"
                className="bg-indigo-600 hover:bg-indigo-700 text-white rounded-md flex items-center gap-1"
              >
                {t("projects.button.live")}
                <ExternalLink className="w-3 h-3" />
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* Medium Project Card */}
        <Card className="col-span-12 md:col-span-6 overflow-hidden border-none shadow-md dark:shadow-slate-900/50 bg-white/80 dark:bg-slate-800/50 backdrop-blur-sm hover:shadow-lg transition-all group">
          <div className="relative h-48 overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent z-10"></div>
            <img
              src="/placeholder.svg?height=200&width=400"
              alt="Project thumbnail"
              className="w-full h-full object-cover transition-transform group-hover:scale-105"
            />
          </div>
          <CardContent className="p-5">
            <h3 className="text-lg font-semibold text-slate-800 dark:text-slate-200 mb-2">{t("projects.ai.title")}</h3>
            <p className="text-slate-600 dark:text-slate-400 mb-3">{t("projects.ai.description")}</p>
            <div className="flex flex-wrap gap-1 mb-3">
              <Badge variant="outline" className="bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300">
                Next.js
              </Badge>
              <Badge variant="outline" className="bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300">
                OpenAI
              </Badge>
              <Badge variant="outline" className="bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300">
                Vercel
              </Badge>
            </div>
            <div className="flex gap-2">
              <Button
                variant="outline"
                size="sm"
                className="border-slate-300 dark:border-slate-700 text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-md flex items-center gap-1"
              >
                <Github className="w-3 h-3" />
                {t("projects.button.code")}
              </Button>
              <Button
                size="sm"
                className="bg-indigo-600 hover:bg-indigo-700 text-white rounded-md flex items-center gap-1"
              >
                {t("projects.button.live")}
                <ExternalLink className="w-3 h-3" />
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* Small Feature Card */}
        <Card className="col-span-12 md:col-span-6 overflow-hidden border-none shadow-md dark:shadow-slate-900/50 bg-gradient-to-br from-violet-500 to-purple-700 text-white backdrop-blur-sm hover:shadow-lg transition-all group">
          <CardContent className="p-6">
            <div className="flex items-center gap-3 mb-4">
              <div className="p-2 bg-white/20 rounded-lg">
                <Zap className="w-5 h-5" />
              </div>
              <h3 className="text-xl font-semibold">{t("projects.opensource.title")}</h3>
            </div>
            <p className="mb-4 text-white/90">{t("projects.opensource.description")}</p>
            <Button className="bg-white/20 hover:bg-white/30 text-white border-none flex items-center gap-2">
              {t("projects.opensource.button")}
              <ExternalLink className="w-4 h-4" />
            </Button>
          </CardContent>
        </Card>

        {/* Small Project Card */}
        <Card className="col-span-12 md:col-span-4 overflow-hidden border-none shadow-md dark:shadow-slate-900/50 bg-white/80 dark:bg-slate-800/50 backdrop-blur-sm hover:shadow-lg transition-all group">
          <div className="relative h-40 overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent z-10"></div>
            <img
              src="/placeholder.svg?height=200&width=300"
              alt="Project thumbnail"
              className="w-full h-full object-cover transition-transform group-hover:scale-105"
            />
          </div>
          <CardContent className="p-4">
            <h3 className="text-lg font-semibold text-slate-800 dark:text-slate-200 mb-2">
              {t("projects.weather.title")}
            </h3>
            <p className="text-slate-600 dark:text-slate-400 mb-3 text-sm">{t("projects.weather.description")}</p>
            <div className="flex flex-wrap gap-1 mb-3">
              <Badge
                variant="outline"
                className="bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 text-xs"
              >
                JavaScript
              </Badge>
              <Badge
                variant="outline"
                className="bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 text-xs"
              >
                Chart.js
              </Badge>
            </div>
            <div className="flex gap-2">
              <Button
                variant="outline"
                size="sm"
                className="border-slate-300 dark:border-slate-700 text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-md flex items-center gap-1"
              >
                <Github className="w-3 h-3" />
                {t("projects.button.code")}
              </Button>
              <Button
                size="sm"
                className="bg-indigo-600 hover:bg-indigo-700 text-white rounded-md flex items-center gap-1"
              >
                {t("projects.button.live")}
                <ExternalLink className="w-3 h-3" />
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* Small Feature Card */}
        <Card className="col-span-12 md:col-span-4 overflow-hidden border-none shadow-md dark:shadow-slate-900/50 bg-gradient-to-br from-blue-500 to-cyan-600 text-white backdrop-blur-sm hover:shadow-lg transition-all group">
          <CardContent className="p-5">
            <div className="flex items-center gap-2 mb-3">
              <div className="p-2 bg-white/20 rounded-lg">
                <Code className="w-4 h-4" />
              </div>
              <h3 className="text-lg font-semibold">{t("projects.blog.title")}</h3>
            </div>
            <p className="mb-3 text-white/90 text-sm">{t("projects.blog.description")}</p>
            <Button size="sm" className="bg-white/20 hover:bg-white/30 text-white border-none flex items-center gap-1">
              {t("projects.blog.button")}
              <ExternalLink className="w-3 h-3" />
            </Button>
          </CardContent>
        </Card>

        {/* Small Feature Card */}
        <Card className="col-span-12 md:col-span-4 overflow-hidden border-none shadow-md dark:shadow-slate-900/50 bg-gradient-to-br from-amber-500 to-orange-600 text-white backdrop-blur-sm hover:shadow-lg transition-all group">
          <CardContent className="p-5">
            <div className="flex items-center gap-2 mb-3">
              <div className="p-2 bg-white/20 rounded-lg">
                <Layers className="w-4 h-4" />
              </div>
              <h3 className="text-lg font-semibold">{t("projects.ui.title")}</h3>
            </div>
            <p className="mb-3 text-white/90 text-sm">{t("projects.ui.description")}</p>
            <Button size="sm" className="bg-white/20 hover:bg-white/30 text-white border-none flex items-center gap-1">
              {t("projects.ui.button")}
              <ExternalLink className="w-3 h-3" />
            </Button>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}

