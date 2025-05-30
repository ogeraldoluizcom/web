import { SectionHero } from '@/app/(marketing)/(home)/components/section-hero'
import { SectionExperience } from '@/app/(marketing)/(home)/components/section-experience'
import { SectionTech } from '@/app/(marketing)/(home)/components/section-tech'
import { CasePortfolio } from './cases/components/case-portfolio'

const Home = () => {
  return (
    <div className="px-4 space-y-8">
      <section>
        <SectionHero />
      </section>
      <section>
        <SectionExperience />
      </section>
      <section>
        <SectionTech />
      </section>
      <section>
        <CasePortfolio />
      </section>
    </div>
  )
}

export default Home
