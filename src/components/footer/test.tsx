/* eslint-disable react/display-name */
import { render, screen, fireEvent } from '@testing-library/react'
import '@testing-library/jest-dom'

import { Footer } from '.'

describe('Footer', () => {
  it('should be able render text', () => {
    render(<Footer />)
    expect(screen.getByText('Construído com muito amor ❤️‍🔥')).toBeInTheDocument()
  })

  it('should have github and linkedin links', () => {
    render(<Footer />)
    expect(screen.getByLabelText('github')).toHaveAttribute(
      'href',
      'https://github.com/geraldobl58'
    )
    expect(screen.getByLabelText('linkedin')).toHaveAttribute(
      'href',
      'https://www.linkedin.com/in/geraldo-luiz-b626ab31/'
    )
  })

  it('should scroll to top when button is clicked', () => {
    window.scrollTo = jest.fn()
    render(<Footer />)
    const button = screen.getByLabelText('Voltar ao topo')
    fireEvent.click(button)
    expect(window.scrollTo).toHaveBeenCalledWith({ top: 0, behavior: 'smooth' })
  })
})
