import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
import { Navbar } from './index'

jest.mock('next/navigation', () => ({
  usePathname: jest.fn()
}))

describe('<Navbar />', () => {
  const mockUsePathname = jest.requireMock('next/navigation').usePathname

  beforeEach(() => {
    jest.clearAllMocks()
  })

  it('renders all navigation items', () => {
    mockUsePathname.mockReturnValue('/')

    render(<Navbar />)

    expect(screen.getByText('Home')).toBeInTheDocument()
    expect(screen.getByText('Sobre')).toBeInTheDocument()
    expect(screen.getByText('Cases')).toBeInTheDocument()
    expect(screen.getByText('Contato')).toBeInTheDocument()
  })

  it('applies the active class to the correct navigation item', () => {
    mockUsePathname.mockReturnValue('/about')

    render(<Navbar />)

    const activeItem = screen.getByText('Sobre')
    expect(activeItem).toBeInTheDocument()
    // expect(activeItem).toHaveClass('border-b-4')

    const inactiveItems = ['Home', 'Cases', 'Contato']
    inactiveItems.forEach((item) => {
      const element = screen.getByText(item)
      expect(element).toBeInTheDocument()
      expect(element).not.toHaveClass('border-b-4')
    })
  })
})
