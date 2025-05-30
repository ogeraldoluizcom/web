import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'

import { FaGithub } from 'react-icons/fa'

import { SocialButton } from '.'

describe('SocialButton', () => {
  it('should render the social button with correct props', () => {
    render(
      <SocialButton href="https://github.com/test" ariaLabel="github">
        <FaGithub data-testid="icon" />
      </SocialButton>
    )

    const link = screen.getByRole('link', { name: /github/i })
    expect(link).toBeInTheDocument()
    expect(link).toHaveAttribute('href', 'https://github.com/test')
    expect(link).toHaveAttribute('target', '_blank')
    expect(screen.getByTestId('icon')).toBeInTheDocument()
  })
})
