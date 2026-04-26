import Nav from '@/components/Nav'
import Header from '@/components/Header'
import Introduction from '@/components/Introduction'
import Skills from '@/components/Skills'
import WorkExperience from '@/components/WorkExperience'
import Projects from '@/components/Projects'
import Education from '@/components/Education'

export default function Home() {
  return (
    <>
      <Nav />
      <main>
        <Header />
        <Divider />
        <Introduction />
        <Divider />
        <Skills />
        <Divider />
        <WorkExperience />
        <Divider />
        <Projects />
        <Divider />
        <Education />
      </main>
      <footer className="max-w-3xl mx-auto px-6 py-10 mt-4">
        <p className="text-xs text-slate-400 text-center">
          © 2026 강민성 · Built with Next.js & Tailwind CSS
        </p>
      </footer>
    </>
  )
}

function Divider() {
  return <div className="max-w-3xl mx-auto px-6"><div className="border-t border-slate-100" /></div>
}
