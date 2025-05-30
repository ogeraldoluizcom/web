import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
import { NavItem } from './index'

// Mock da função `cn` caso necessário
jest.mock('@/lib/utils', () => ({
  cn: jest.fn((...classes) => classes.filter(Boolean).join(' '))
}))

describe('<NavItem />', () => {
  it('renders the NavItem with the correct name and href', () => {
    const name = 'Home'
    const href = '/home'
    const isActive = false

    render(<NavItem name={name} href={href} isActive={isActive} />)

    const linkElement = screen.getByText(name)
    expect(linkElement).toBeInTheDocument()

    expect(linkElement).toHaveAttribute('href', href)

    expect(linkElement).not.toHaveClass('border-b-4')
  })

  it('applies the active class when isActive is true', () => {
    const name = 'About'
    const href = '/about'
    const isActive = true

    render(<NavItem name={name} href={href} isActive={isActive} />)

    const linkElement = screen.getByText(name)
    expect(linkElement).toBeInTheDocument()

    expect(linkElement).toHaveClass('border-b-4')
  })
})
