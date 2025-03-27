"use client"

import { Mail, Send, Copy } from "lucide-react"
import { Button } from "./ui/button"
import { Input } from "./ui/input"
import { Textarea } from "./ui/textarea"
import { useState } from "react"
import { useLanguage } from "../context/language-context"

export default function ContactSection() {
  const { t } = useLanguage()
  const [email, setEmail] = useState("nicofermunlug@gmail.com")
  const [copied, setCopied] = useState(false)

  const copyEmail = () => {
    navigator.clipboard.writeText(email)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  const sendEmail = () => {
    window.location.href = `mailto:${email}`
  }

  return (
    <div className="max-w-4xl mx-auto px-4 py-12">
      <h2 className="flex items-center gap-3 text-2xl font-bold text-slate-800 dark:text-slate-200 mb-8">
        <div className="p-2 bg-blue-100 dark:bg-blue-900/30 rounded-lg">
          <Mail className="w-5 h-5 text-blue-600 dark:text-blue-400" />
        </div>
        {t("contact.title")}
      </h2>

      <div className="grid md:grid-cols-2 gap-8">
        {/* Email Contact */}
        <div className="bg-slate-900 text-white rounded-lg p-6 shadow-md">
          <h3 className="text-xl font-semibold mb-4">{t("contact.email.title")}</h3>
          <p className="text-slate-300 mb-6">{t("contact.email.description")}</p>

          <div className="flex items-center bg-slate-800/50 rounded-md mb-4">
            <Input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="border-0 bg-transparent text-white focus-visible:ring-0 focus-visible:ring-offset-0"
            />
            <Button
              variant="ghost"
              size="icon"
              className="text-slate-300 hover:text-white hover:bg-slate-700"
              onClick={copyEmail}
            >
              {copied ? (
                <span className="text-green-400 text-xs font-medium">Copied!</span>
              ) : (
                <Copy className="h-4 w-4" />
              )}
            </Button>
            <Button
              variant="ghost"
              size="icon"
              className="text-slate-300 hover:text-white hover:bg-slate-700 mr-1"
              onClick={sendEmail}
            >
              <Send className="h-4 w-4" />
            </Button>
          </div>
        </div>

        {/* Contact Form */}
        <div className="bg-white/80 dark:bg-slate-800/50 backdrop-blur-sm rounded-lg p-6 shadow-md">
          <h3 className="text-xl font-semibold text-slate-800 dark:text-slate-200 mb-4">{t("contact.form.title")}</h3>

          <form className="space-y-4">
            <div>
              <Input
                type="text"
                placeholder={t("contact.form.name")}
                className="bg-transparent border-slate-300 dark:border-slate-700"
              />
            </div>
            <div>
              <Input
                type="email"
                placeholder={t("contact.form.email")}
                className="bg-transparent border-slate-300 dark:border-slate-700"
              />
            </div>
            <div>
              <Textarea
                placeholder={t("contact.form.message")}
                className="bg-transparent border-slate-300 dark:border-slate-700 min-h-[120px]"
              />
            </div>
            <Button className="w-full bg-gradient-to-r from-blue-600 to-violet-600 hover:from-blue-700 hover:to-violet-700">
              {t("contact.form.button")}
            </Button>
          </form>
        </div>
      </div>
    </div>
  )
}

