import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'

import { SectionExperienceItem } from '.'

describe('ExperienceItem', () => {
  it('should correctly render the provided data', () => {
    const props = {
      company: 'Tech Company',
      role: 'Software Engineer',
      type: 'Full-time',
      description: 'Desenvolvimento de aplicações web modernas.',
      duration: 'Jan 2020 - Dez 2023'
    }

    render(<SectionExperienceItem {...props} />)

    expect(screen.getByText(props.company)).toBeInTheDocument()

    expect(
      screen.getByText(`${props.role} (${props.duration})`)
    ).toBeInTheDocument()

    expect(screen.getByText(props.type)).toBeInTheDocument()

    expect(screen.getByText(props.description)).toBeInTheDocument()
  })

  it('should render correctly without the duration', () => {
    const props = {
      company: 'Tech Company',
      role: 'Software Engineer',
      type: 'Full-time',
      description: 'Desenvolvimento de aplicações web modernas.',
      duration: null
    }

    render(<SectionExperienceItem {...props} />)

    expect(screen.getByText(props.role)).toBeInTheDocument()
    expect(screen.queryByText(/\(/)).not.toBeInTheDocument()
  })
})
