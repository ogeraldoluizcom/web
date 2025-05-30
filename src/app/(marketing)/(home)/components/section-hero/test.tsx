import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
import { SectionHero } from '.'

describe('<SectionHero />', () => {
  it('renders without crashing', () => {
    render(<SectionHero />)

    expect(
      screen.getByText((content, element) => {
        const hasText = (node: Element) =>
          node.textContent?.includes('👋 Olá, eu sou Geraldo Luiz') || false
        const elementHasText = element ? hasText(element) : false
        const childrenDontHaveText = Array.from(element?.children || []).every(
          (child) => !hasText(child)
        )
        return elementHasText && childrenDontHaveText
      })
    ).toBeInTheDocument()

    expect(
      screen.getByRole('link', { name: /Entre em contato/i })
    ).toBeInTheDocument()
  })
})
