'use client'

import { useLanguage } from '@/contexts/LanguageContext'
import * as ko from '@/data/resume'
import * as en from '@/data/resume.en'

export function useResumeData() {
  const { lang } = useLanguage()
  return lang === 'en' ? en : ko
}
