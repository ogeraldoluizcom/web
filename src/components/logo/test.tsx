import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'

import { Logo } from '.'

describe('Logo Component', () => {
  it('renders the logo image with correct attributes', () => {
    render(<Logo />)

    const logoImage = screen.getByAltText('Geraldo Luiz')
    expect(logoImage).toBeInTheDocument()
    expect(logoImage).toHaveAttribute('src', '/img/logo.svg')
    expect(logoImage).toHaveAttribute('width', '80')
    expect(logoImage).toHaveAttribute('height', '80')
  })

  it('renders the title with correct text', () => {
    render(<Logo />)
  })

  it('renders the link with correct href', () => {
    render(<Logo />)

    const linkElement = screen.getByRole('link')
    expect(linkElement).toBeInTheDocument()
    expect(linkElement).toHaveAttribute('href', '/')
  })
})
