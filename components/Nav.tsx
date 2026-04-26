'use client'

import { useEffect, useState } from 'react'
import { profile } from '@/data/resume'

const NAV_LINKS = [
  { href: '#introduction', label: '소개' },
  { href: '#skills', label: '스킬' },
  { href: '#experience', label: '경력' },
  { href: '#projects', label: '프로젝트' },
  { href: '#education', label: '학력' },
]

export default function Nav() {
  const [scrolled, setScrolled] = useState(false)

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
      <div className="max-w-3xl mx-auto px-6 h-14 flex items-center justify-between">
        <a href="#" className="text-sm font-semibold text-slate-900 tracking-tight">
          {profile.name}
        </a>
        <ul className="flex items-center gap-1 overflow-x-auto">
          {NAV_LINKS.map(({ href, label }) => (
            <li key={href}>
              <a
                href={href}
                className="px-3 py-1.5 text-sm text-slate-500 hover:text-slate-900 hover:bg-slate-50 rounded-md transition-colors whitespace-nowrap"
              >
                {label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  )
}
