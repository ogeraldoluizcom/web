import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
import { Header } from '.'

jest.mock('../navbar', () => ({
  Navbar: () => <nav data-testid="navbar">Navbar</nav>
}))

jest.mock('../social', () => ({
  Social: () => <div data-testid="social">Social</div>
}))

describe('<Header />', () => {
  it('renders the Navbar component', () => {
    render(<Header />)

    const navbar = screen.getByTestId('navbar')
    expect(navbar).toBeInTheDocument()
    expect(navbar).toHaveTextContent('Navbar')
  })

  it('renders the Social component', () => {
    render(<Header />)

    const social = screen.getByTestId('social')
    expect(social).toBeInTheDocument()
    expect(social).toHaveTextContent('Social')
  })
})
