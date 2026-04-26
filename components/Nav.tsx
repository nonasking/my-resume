'use client'

import { useEffect, useState } from 'react'
import { useLanguage } from '@/contexts/LanguageContext'
import { useResumeData } from '@/hooks/useResumeData'

const NAV_LINKS = {
  ko: [
    { href: '#introduction', label: '소개' },
    { href: '#skills', label: '스킬' },
    { href: '#experience', label: '경력' },
    { href: '#projects', label: '프로젝트' },
    { href: '#education', label: '학력' },
  ],
  en: [
    { href: '#introduction', label: 'About' },
    { href: '#skills', label: 'Skills' },
    { href: '#experience', label: 'Experience' },
    { href: '#projects', label: 'Projects' },
    { href: '#education', label: 'Education' },
  ],
}

export default function Nav() {
  const [scrolled, setScrolled] = useState(false)
  const { lang, setLang } = useLanguage()
  const { profile } = useResumeData()

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <nav
      className={`sticky top-0 z-50 bg-white transition-shadow duration-200 ${
        scrolled ? 'shadow-sm' : 'border-b border-slate-100'
      }`}
    >
      <div className="max-w-3xl mx-auto px-6 h-14 flex items-center gap-2">
        <a href="#" className="text-sm font-semibold text-slate-900 tracking-tight shrink-0">
          {profile.name}
        </a>
        <ul className="flex items-center gap-1 overflow-x-auto flex-1 min-w-0 scrollbar-none">
          {NAV_LINKS[lang].map(({ href, label }) => (
            <li key={href} className="shrink-0">
              <a
                href={href}
                className="px-3 py-1.5 text-sm text-slate-500 hover:text-slate-900 hover:bg-slate-50 rounded-md transition-colors whitespace-nowrap block"
              >
                {label}
              </a>
            </li>
          ))}
        </ul>
        <div className="flex items-center shrink-0 pl-2 border-l border-slate-200">
          <button
            onClick={() => setLang('ko')}
            className={`px-2 py-1 text-xs rounded transition-colors ${
              lang === 'ko'
                ? 'font-semibold text-slate-900'
                : 'text-slate-400 hover:text-slate-600'
            }`}
          >
            KO
          </button>
          <button
            onClick={() => setLang('en')}
            className={`px-2 py-1 text-xs rounded transition-colors ${
              lang === 'en'
                ? 'font-semibold text-slate-900'
                : 'text-slate-400 hover:text-slate-600'
            }`}
          >
            EN
          </button>
        </div>
      </div>
    </nav>
  )
}
