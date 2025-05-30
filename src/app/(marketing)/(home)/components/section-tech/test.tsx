import { render, screen } from '@testing-library/react'
import { SectionTech } from '.'

describe('SectionTech', () => {
  it('renderiza o título principal', () => {
    render(<SectionTech />)
    expect(screen.getByText('Tecnologias')).toBeInTheDocument()
    expect(
      screen.getByText('Ferramentas e frameworks que utilizo')
    ).toBeInTheDocument()
    expect(
      screen.getByText(
        /Tecnologias que trabalho e que me ajudam a criar soluções inovadoras e impactantes./i
      )
    ).toBeInTheDocument()
  })

  it('renderiza todas as seções de tecnologia', () => {
    render(<SectionTech />)
    expect(screen.getByText('Frontend Developer')).toBeInTheDocument()
    expect(screen.getByText('Backend Developer')).toBeInTheDocument()
    expect(screen.getByText('Devops')).toBeInTheDocument()
    expect(screen.getByText('Testes')).toBeInTheDocument()
    expect(screen.getByText('Agentes IA & Automações')).toBeInTheDocument()
  })
})
