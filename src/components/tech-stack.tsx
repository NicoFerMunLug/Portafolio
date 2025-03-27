import { Code, Database, Palette, Power, Terminal } from "lucide-react"
import { useLanguage } from "../context/language-context"
import AdobeXdIcon from "./icons/AdobeXdIcon"
import Css3Icon from "./icons/CssIcon"
import DockerIcon from "./icons/DockerIcon"
import GitHubIcon from "./icons/GitHubIcon"
import GitIcon from "./icons/GitIcon"
import GitLabIcon from "./icons/GitLabIcon"
import HtmlIcon from "./icons/HtmlIcon"
import JavaScriptIcon from "./icons/JavaScriptIcon"
import MySqlIcon from "./icons/MySqlIcon"
import NodeJsIcon from "./icons/NodeJsIcon"
import PhpIcon from "./icons/PhpIcon"
import FigmaIcon from "./icons/FigmaIcon"
import PythonIcon from "./icons/HikvisionIcon"
import ReactJsIcon from "./icons/ReactJsIcon"
import ReduxIcon from "./icons/Redux"
import WordPressIcon from "./icons/WordPressIcon"
import SketchIcon from "./icons/SketchIcon"
import PhotoshopIcon from "./icons/Photoshop"
import IllustratorIcon from "./icons/Illustrator"
import TypescriptIcon from "./icons/TypeScript"
import TailwindIcon from "./icons/Tailwind"
import NextjsIcon from "./icons/NextJs"
import JavaIcon from "./icons/Java"
import OracleIcon from "./icons/Oracle"
import PowershellIcon from "./icons/PowerShell"
import AWS from "./icons/AWS"
import AwsIcon from "./icons/AWS"

export default function TechStack() {
  const { t } = useLanguage()

  return (
    <div className="max-w-4xl mx-auto px-4 py-12">
      <h2 className="text-2xl font-bold text-slate-800 dark:text-slate-200 mb-8 text-center">{t("tech.title")}</h2>

      <div className="grid md:grid-cols-2 gap-6">
        {/* Frontend Technologies */}
        <div className="bg-white dark:bg-slate-800 rounded-lg p-6 shadow-md hover:shadow-lg transition-all border-t-4 border-blue-500">
          <div className="flex items-center gap-3 mb-4">
            <div className="p-2 bg-blue-100 dark:bg-blue-900/30 rounded-lg">
              <Code className="w-5 h-5 text-blue-600 dark:text-blue-400" />
            </div>
            <h3 className="text-xl font-semibold text-slate-800 dark:text-slate-200">{t("tech.frontend")}</h3>
          </div>
          <div className="flex flex-wrap gap-2">
            <HtmlIcon/>
            <Css3Icon/>
            <JavaScriptIcon/>
            <ReactJsIcon/>
            <ReduxIcon/>
            <TypescriptIcon/>
            <TailwindIcon/>
            <NextjsIcon/>
          </div>
        </div>

        {/* Backend Technologies */}
        <div className="bg-white dark:bg-slate-800 rounded-lg p-6 shadow-md hover:shadow-lg transition-all border-t-4 border-green-500">
          <div className="flex items-center gap-3 mb-4">
            <div className="p-2 bg-green-100 dark:bg-green-900/30 rounded-lg">
              <Database className="w-5 h-5 text-green-600 dark:text-green-400" />
            </div>
            <h3 className="text-xl font-semibold text-slate-800 dark:text-slate-200">{t("tech.backend")}</h3>
          </div>
          <div className="flex flex-wrap gap-2">
            <PythonIcon/>
            <PhpIcon/>
            <JavaScriptIcon/>
            <JavaIcon/>
            <NodeJsIcon/>
            <MySqlIcon/>
            <OracleIcon/>
          </div>
        </div>

        {/* Design Tools */}
        <div className="bg-white dark:bg-slate-800 rounded-lg p-6 shadow-md hover:shadow-lg transition-all border-t-4 border-purple-500">
          <div className="flex items-center gap-3 mb-4">
            <div className="p-2 bg-purple-100 dark:bg-purple-900/30 rounded-lg">
              <Palette className="w-5 h-5 text-purple-600 dark:text-purple-400" />
            </div>
            <h3 className="text-xl font-semibold text-slate-800 dark:text-slate-200">{t("tech.design")}</h3>
          </div>
          <div className="flex flex-wrap gap-2">
            <FigmaIcon/>
            <SketchIcon/>
            <AdobeXdIcon/>
            <PhotoshopIcon/>
            <IllustratorIcon/>
          </div>
        </div>

        {/* DevOps & Tools */}
        <div className="bg-white dark:bg-slate-800 rounded-lg p-6 shadow-md hover:shadow-lg transition-all border-t-4 border-orange-500">
          <div className="flex items-center gap-3 mb-4">
            <div className="p-2 bg-orange-100 dark:bg-orange-900/30 rounded-lg">
              <Terminal className="w-5 h-5 text-orange-600 dark:text-orange-400" />
            </div>
            <h3 className="text-xl font-semibold text-slate-800 dark:text-slate-200">{t("tech.devops")}</h3>
          </div>
          <div className="flex flex-wrap gap-2">
            <GitIcon/>
            <GitHubIcon/>
            <GitLabIcon/>
            <DockerIcon/>
            <WordPressIcon/>
            <PowershellIcon/>
            <AwsIcon/>
          </div>
        </div>
      </div>
    </div>
  )
}

