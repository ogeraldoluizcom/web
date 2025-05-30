import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
import { Social } from '.'

describe('<Social />', () => {
  it('should render the social links with correct icons and attributes', () => {
    render(<Social />)

    const githubLink = screen.getByRole('link', { name: /github/i })
    const linkedinLink = screen.getByRole('link', { name: /linkedin/i })

    expect(githubLink).toBeInTheDocument()
    expect(linkedinLink).toBeInTheDocument()

    expect(githubLink).toHaveAttribute('href', 'https://github.com/geraldobl58')
    expect(linkedinLink).toHaveAttribute(
      'href',
      'https://www.linkedin.com/in/geraldo-luiz-b626ab31/'
    )

    expect(githubLink).toContainHTML('svg')
    expect(linkedinLink).toContainHTML('svg')
  })
})
