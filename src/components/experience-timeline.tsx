import { Briefcase, Figma } from "lucide-react"
import { useLanguage } from "../context/language-context"
import '../app/globals.css';
import JavaScriptIcon from "./icons/JavaScriptIcon"
import ReactJsIcon from "./icons/ReactJsIcon"
import PhpIcon from "./icons/PhpIcon"
import ExcelIcon from "./icons/ExcelIcon";
import AdobeXdIcon from "./icons/AdobeXdIcon";
import FigmaIcon from "./icons/FigmaIcon";
import OfficeIcon from "./icons/OfficeIcon";
import { Html } from "next/document";
import Css3Icon from "./icons/CssIcon";
import HtmlIcon from "./icons/HtmlIcon";
import OutlookIcon from "./icons/OutlookIcon";
import MySqlIcon from "./icons/MySqlIcon";
import GitIcon from "./icons/GitIcon";
import DockerIcon from "./icons/DockerIcon";
import ReduxIcon from "./icons/Redux";
import SketchIcon from "./icons/SketchIcon";
import SupportIcon from "./icons/SupportIcon";
import WordPressIcon from "./icons/WordPressIcon";

export default function ExperienceTimeline() {
  const { t } = useLanguage()

  const renderDescription = (description: string) => {
    return description.split('\n').map((line, index) => (
      <li key={index} className="mb-2 text-base font-normal text-slate-600 dark:text-slate-400">
        {line}
      </li>
    ))
  }

  return (
    <div className="max-w-4xl mx-auto px-4 py-12">
      <h2 className="flex items-center gap-3 text-2xl font-bold text-primary mb-8">
        <div className="p-2 bg-violet-100 dark:bg-violet-900/30 rounded-lg">
          <Briefcase className="w-5 h-5 text-primary" />
        </div>
        {t("experience.title")}
      </h2>

      <ol className="relative border-l border-primary">
        {/* Experiencia 1 */}
        <li className="mb-10 ml-6">
          <span className="absolute flex items-center justify-center w-6 h-6 bg-violet-100 dark:bg-violet-900 rounded-full -left-3 ring-8 ring-white dark:ring-slate-900">
            <svg
              className="w-2.5 h-3 text-primary"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path d="M20 4a2 2 0 0 0-2-2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v2h20V4ZM0 18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8H0v10Zm5-8h10a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2Z" />
            </svg>
          </span>
          <div className="timeline-item p-4 pl-8 max-w-full bg-white dark:bg-slate-800 rounded-lg shadow-md hover:shadow-lg transition-all border-l-4 border-primary">
            <h3 className="flex items-center text-lg font-semibold text-slate-800 dark:text-white">
              {t("experience.job1.title")}
            </h3>
            <time className="block mb-2 text-sm font-normal leading-none text-primary dark:text-blue-400">
              {t("experience.job1.date")}
            </time>
            <ul className="list-disc pl-8 mb-5 mt-5">
              {renderDescription(t("experience.job1.description"))}
            </ul>
            <div className="flex flex-wrap gap-2 mb-4">
                <JavaScriptIcon/>
                <PhpIcon/>
                <ReactJsIcon/>
                <ReduxIcon/>
                <HtmlIcon/>
                <Css3Icon/>
                <MySqlIcon/>
                <GitIcon/>
                <DockerIcon/>
            </div>
          </div>
        </li>
        
        {/* Experiencia 2 */}
        <li className="mb-10 ml-6">
          <span className="absolute flex items-center justify-center w-6 h-6 bg-violet-100 dark:bg-violet-900 rounded-full -left-3 ring-8 ring-white dark:ring-slate-900">
            <svg
              className="w-2.5 h-3 text-primary"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path d="M20 4a2 2 0 0 0-2-2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v2h20V4ZM0 18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8H0v10Zm5-8h10a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2Z" />
            </svg>
          </span>
          <div className="timeline-item p-4 pl-8 max-w-full bg-white dark:bg-slate-800 rounded-lg shadow-md hover:shadow-lg transition-all border-l-4 border-primary">
            <h3 className="flex items-center text-lg font-semibold text-slate-800 dark:text-white">
              {t("experience.job2.title")}
            </h3>
            <time className="block mb-2 text-sm font-normal leading-none text-primary dark:text-green-400">
              {t("experience.job2.date")}
            </time>
            <ul className="list-disc pl-8 mb-5 mt-5">
              {renderDescription(t("experience.job2.description"))}
            </ul>
            <div className="flex flex-wrap gap-2 mb-4">
              <ExcelIcon/>
              <OutlookIcon/>
            </div>
          </div>
        </li>

        {/* Experiencia 3 */}
        <li className="mb-10 ml-6">
          <span className="absolute flex items-center justify-center w-6 h-6 bg-violet-100 dark:bg-violet-900 rounded-full -left-3 ring-8 ring-white dark:ring-slate-900">
            <svg
              className="w-2.5 h-3 text-primary"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path d="M20 4a2 2 0 0 0-2-2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v2h20V4ZM0 18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8H0v10Zm5-8h10a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2Z" />
            </svg>
          </span>
          <div className="timeline-item p-4 pl-8 max-w-full bg-white dark:bg-slate-800 rounded-lg shadow-md hover:shadow-lg transition-all border-l-4 border-primary">
            <h3 className="flex items-center text-lg font-semibold text-slate-800 dark:text-white">
              {t("experience.job3.title")}
            </h3>
            <time className="block mb-2 text-sm font-normal leading-none text-primary dark:text-purple-400">
              {t("experience.job3.date")}
            </time>
            <ul className="list-disc pl-8 mb-5 mt-5">
              {renderDescription(t("experience.job3.description"))}
            </ul>
            <div className="flex flex-wrap gap-2 mb-4">
              <HtmlIcon/>
              <Css3Icon/>
              <WordPressIcon/>
              <FigmaIcon/>
              <AdobeXdIcon/>
              <SketchIcon/>
            </div>
          </div>
        </li>

        {/* Experiencia 4 */}
        <li className="mb-10 ml-6">
          <span className="absolute flex items-center justify-center w-6 h-6 bg-violet-100 dark:bg-violet-900 rounded-full -left-3 ring-8 ring-white dark:ring-slate-900">
            <svg
              className="w-3 h-3 text-primary"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path d="M20 4a2 2 0 0 0-2-2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v2h20V4ZM0 18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8H0v10Zm5-8h10a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2Z" />
            </svg>
          </span>
          <div className="timeline-item p-4 pl-8 max-w-full bg-white dark:bg-slate-800 rounded-lg shadow-md hover:shadow-lg transition-all border-l-4 border-primary">
            <h3 className="flex items-center text-lg font-semibold text-slate-800 dark:text-white">
              {t("experience.job4.title")}
            </h3>
            <time className="block mb-2 text-sm font-normal leading-none text-primary dark:text-orange-400">
              {t("experience.job4.date")}
            </time>
            <ul className="list-disc pl-8 mb-5 mt-5">
              {renderDescription(t("experience.job4.description"))}
            </ul>
            <div className="flex flex-wrap gap-2 mb-4">
              <ExcelIcon/>
              <OfficeIcon/>
            </div>
          </div>
        </li>
      </ol>
    </div>
  )
}