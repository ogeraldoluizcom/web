import { render, screen } from '@testing-library/react'
import { SectionTechSection } from '.'
import { FaReact } from 'react-icons/fa'

describe('TechSection', () => {
  it('renders the title', () => {
    render(<SectionTechSection title="Frontend" icons={[]} />)
    expect(screen.getByText('Frontend')).toBeInTheDocument()
  })

  it('renders all icons', () => {
    const icons = [
      <FaReact data-testid="icon" key="1" />,
      <FaReact data-testid="icon" key="2" />
    ]
    render(<SectionTechSection title="Frontend" icons={icons} />)
    expect(screen.getAllByTestId('icon')).toHaveLength(2)
  })
})
