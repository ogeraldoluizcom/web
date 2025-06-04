import { render, screen } from '@testing-library/react'
import { SectionAnimation } from '.'

describe('SectionAnimation', () => {
  it('renders the circular text in the SVG', () => {
    render(<SectionAnimation />)
    expect(
      screen.getByText(/Fullstack.*Frontend.*Backend.*Devops.*Automação/i)
    ).toBeInTheDocument()
  })

  it('renders the "Desenvolvendo soluções" text', () => {
    render(<SectionAnimation />)
    expect(screen.getByText('Desenvolvendo soluções')).toBeInTheDocument()
  })
})
