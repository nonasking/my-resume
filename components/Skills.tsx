'use client'

import { useResumeData } from '@/hooks/useResumeData'
import { SectionLabel } from '@/components/Introduction'

export default function Skills() {
  const { skills } = useResumeData()

  return (
    <section id="skills" className="max-w-3xl mx-auto px-6 py-12">
      <SectionLabel>Skill</SectionLabel>
      <div className="space-y-6">
        <SkillGroup
          title="Back-End"
          main={skills.backend.main}
          sub={skills.backend.sub}
        />
        <SkillGroup
          title="Database"
          main={skills.database.main}
          sub={skills.database.sub}
        />
        <div>
          <h3 className="text-sm font-semibold text-slate-700 mb-3">Collaboration Tools</h3>
          <div className="flex flex-wrap gap-2">
            {skills.collaboration.map((tool) => (
              <Tag key={tool}>{tool}</Tag>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

function SkillGroup({
  title,
  main,
  sub,
}: {
  title: string
  main: string[]
  sub: string[]
}) {
  return (
    <div>
      <h3 className="text-sm font-semibold text-slate-700 mb-3">{title}</h3>
      <div className="space-y-2">
        <div className="flex flex-wrap items-center gap-2">
          <span className="text-xs text-slate-400 w-8">Main</span>
          {main.map((item) => (
            <Tag key={item} variant="main">{item}</Tag>
          ))}
        </div>
        <div className="flex flex-wrap items-center gap-2">
          <span className="text-xs text-slate-400 w-8">Sub</span>
          {sub.map((item) => (
            <Tag key={item}>{item}</Tag>
          ))}
        </div>
      </div>
    </div>
  )
}

function Tag({
  children,
  variant = 'default',
}: {
  children: React.ReactNode
  variant?: 'main' | 'default'
}) {
  const base = 'px-2.5 py-1 rounded-md text-xs font-mono font-medium'
  const variants = {
    main: `${base} bg-blue-50 text-blue-700`,
    default: `${base} bg-slate-100 text-slate-600`,
  }
  return <span className={variants[variant]}>{children}</span>
}

export { Tag }
