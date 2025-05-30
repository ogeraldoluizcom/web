import { experiences } from '@/lib/experience'

import { Title } from '@/components/title'
import { SectionExperienceItem } from '../section-experience-item'

export const SectionExperience = () => {
  return (
    <div className="py-10">
      <Title
        title="Experiências"
        subtitle="Fortalecendo a criatividade"
        description="Atuando desde 2010 na área de desenvolvimento sendo a mesma adquirida
          na atuação em projetos de sistemas para empresas de médio e grande
          porte no ramo de tecnologia."
      />
      <div className="space-y-8">
        {experiences.map((experience, index) => (
          <SectionExperienceItem key={index} {...experience} />
        ))}
      </div>
    </div>
  )
}
