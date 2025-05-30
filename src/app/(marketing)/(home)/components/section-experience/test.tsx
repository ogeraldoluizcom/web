import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'

import { SectionExperience } from '.'

const experiences = [
  { id: 1, title: 'Experience 1' },
  { id: 2, title: 'Experience 2' },
  { id: 3, title: 'Experience 3' },
  { id: 4, title: 'Experience 4' },
  { id: 5, title: 'Experience 5' }
]
jest.mock('@/lib/experience', () => ({
  experiences
}))

jest.mock('../section-experience-item', () => ({
  SectionExperienceItem: ({ title }: { title: string }) => <div>{title}</div>
}))

describe('SectionExperience', () => {
  it('should render the main texts correctly', () => {
    render(<SectionExperience />)

    expect(screen.getByText('Experiências')).toBeInTheDocument()

    expect(screen.getByText('Fortalecendo a criatividade')).toBeInTheDocument()

    expect(
      screen.getByText(
        'Atuando desde 2010 na área de desenvolvimento sendo a mesma adquirida na atuação em projetos de sistemas para empresas de médio e grande porte no ramo de tecnologia.'
      )
    ).toBeInTheDocument()
  })

  it('should render the experience list correctly', () => {
    render(<SectionExperience />)

    experiences.forEach((experience) => {
      expect(screen.getByText(experience.title)).toBeInTheDocument()
    })
  })
})
