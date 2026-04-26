import { introduction } from '@/data/resume'

export default function Introduction() {
  const paragraphs = introduction.split('\n\n')

  return (
    <section id="introduction" className="max-w-3xl mx-auto px-6 py-12">
      <SectionLabel>Introduction</SectionLabel>
      <div className="space-y-4">
        {paragraphs.map((paragraph, i) => (
          <p key={i} className="text-base text-slate-600 leading-7">
            {paragraph}
          </p>
        ))}
      </div>
    </section>
  )
}

export function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <p className="text-xs font-mono font-semibold text-blue-700 uppercase tracking-widest mb-6">
      {children}
    </p>
  )
}
