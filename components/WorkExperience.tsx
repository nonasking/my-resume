import { workExperiences } from '@/data/resume'
import { SectionLabel } from '@/components/Introduction'

export default function WorkExperience() {
  return (
    <section id="experience" className="max-w-3xl mx-auto px-6 py-12">
      <SectionLabel>Work Experience</SectionLabel>
      <div className="space-y-8">
        {workExperiences.map((job) => (
          <div key={job.company} className="flex gap-4 md:gap-6">
            <div className="flex flex-col items-center">
              <div
                className={`mt-1 w-2.5 h-2.5 rounded-full shrink-0 ${
                  job.current ? 'bg-blue-500' : 'bg-slate-300'
                }`}
              />
              <div className="flex-1 w-px bg-slate-100 mt-2" />
            </div>
            <div className="pb-8 flex-1 min-w-0">
              <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-1 mb-1">
                <div>
                  <h3 className="text-base font-semibold text-slate-900">{job.company}</h3>
                  <p className="text-sm text-slate-500">
                    {job.team} · {job.role}
                  </p>
                </div>
                <span
                  className={`text-xs font-mono shrink-0 mt-0.5 ${
                    job.current ? 'text-blue-700' : 'text-slate-400'
                  }`}
                >
                  {job.period}
                </span>
              </div>
              <p className="mt-2 text-sm text-slate-600 leading-6">{job.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
