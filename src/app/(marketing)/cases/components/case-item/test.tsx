import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
import { CaseItem } from '.'

// eslint-disable-next-line @next/next/no-img-element
jest.mock('next/image', () => {
  const MockNextImage = (props: React.ImgHTMLAttributes<HTMLImageElement>) => (
    // eslint-disable-next-line @next/next/no-img-element
    <img {...props} alt={props.alt || ''} />
  )
  MockNextImage.displayName = 'MockNextImage'
  return MockNextImage
})
jest.mock('next/link', () => {
  const MockLink = ({
    children,
    href,
    ...rest
  }: React.PropsWithChildren<{ href: string }>) => {
    return (
      <a href={href} {...rest}>
        {children}
      </a>
    )
  }
  MockLink.displayName = 'MockLink'
  return MockLink
})

describe('CaseItem', () => {
  const props = {
    imageUrl: '/test.jpg',
    title: 'Test Project',
    description: 'A test project description',
    url: 'https://example.com'
  }

  it('renders the title, description, and image', () => {
    render(<CaseItem {...props} />)
    expect(screen.getByText(props.title)).toBeInTheDocument()
    expect(screen.getByText(props.description)).toBeInTheDocument()
    expect(screen.getByAltText(props.title)).toHaveAttribute(
      'src',
      props.imageUrl
    )
  })

  it('renders a link with the correct URL', () => {
    render(<CaseItem {...props} />)
    const link = screen.getByRole('link')
    expect(link).toHaveAttribute('href', props.url)
  })
})
