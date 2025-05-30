import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'

import { SectionAboutMe } from '.'

describe('<SectionAboutMe />', () => {
  it('renders all the expected paragraphs', () => {
    render(<SectionAboutMe />)

    expect(
      screen.getByText(
        /Como desenvolvedor especializado, meu objetivo é criar e implementar soluções digitais personalizadas/i
      )
    ).toBeInTheDocument()

    expect(
      screen.getByText(
        /Com sólida experiência em desenvolvimento frontend e um profundo conhecimento de SEO/i
      )
    ).toBeInTheDocument()

    expect(
      screen.getByText(
        /Aumento de Visibilidade: Estratégias robustas para posicionar sua marca/i
      )
    ).toBeInTheDocument()

    expect(
      screen.getByText(
        /Experiência do Usuário Otimizada: Produtos projetados para oferecer rapidez/i
      )
    ).toBeInTheDocument()
  })
})
