import { SectionAboutMe } from './components/section-about-me'
import { SectionStack } from './components/section-stack'
import { SectionSoftSkills } from './components/section-soft-skills'

const About = () => {
  return (
    <section className="flex flex-col min-h-screen">
      <div className="space-y-4 p-8">
        <SectionAboutMe />
        <SectionStack />
        <SectionSoftSkills />
      </div>
    </section>
  )
}

export default About
