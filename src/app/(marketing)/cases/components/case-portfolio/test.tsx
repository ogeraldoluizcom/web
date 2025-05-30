import { render, screen } from '@testing-library/react'
import { CasePortfolio } from '.'

describe('CasePortfolio', () => {
  it('should render the title, subtitle, description and portfolio item', () => {
    render(<CasePortfolio />)

    expect(screen.getByText('Portfolio')).toBeInTheDocument()
    expect(
      screen.getByText('Transformando ideias em soluções')
    ).toBeInTheDocument()
    expect(
      screen.getByText(
        'Abaixo estão alguns dos meus projetos mais recentes, onde apliquei minhas habilidades.'
      )
    ).toBeInTheDocument()
    expect(screen.getByText('Won Games Store')).toBeInTheDocument()
    expect(
      screen.getByText(
        'Criação de um e-commerce de jogos, incluindo toda a parte de pagamentos.'
      )
    ).toBeInTheDocument()
  })
})
