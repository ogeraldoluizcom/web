import { render, screen } from '@testing-library/react'
import { SectionContact } from '.'

describe('SectionContact', () => {
  it('renders the main title with subtitle and description', () => {
    render(<SectionContact />)
    expect(screen.getByText('Contato')).toBeInTheDocument()
    expect(
      screen.getByText(
        'Entre em contato e vamos conversar sobre o seu projeto.'
      )
    ).toBeInTheDocument()
  })

  it('renders the inner title with subtitle and description', () => {
    render(<SectionContact />)
    expect(screen.getByText('Bora conversar?')).toBeInTheDocument()
    expect(
      screen.getByText(
        /Vamos trocar uma ideia sobre o seu projeto, tirar dúvidas ou até mesmo tomar um café virtual. Estou aqui para ajudar!/i
      )
    ).toBeInTheDocument()
  })

  it('renders the SectionAnimation component', () => {
    render(<SectionContact />)
    expect(screen.getByText('Desenvolvendo soluções')).toBeInTheDocument()
    // Check for SVG element
    expect(document.querySelector('svg')).toBeInTheDocument()
  })
})
