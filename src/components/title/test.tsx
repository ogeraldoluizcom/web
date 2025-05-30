import { render, screen } from '@testing-library/react'
import { Title } from '.'

describe('Title', () => {
  it('should be able renders title, subtitle and description correctly', () => {
    render(
      <Title
        title="Título Teste"
        subtitle="Subtítulo Teste"
        description="Descrição de exemplo"
      />
    )

    expect(screen.getByText('Título Teste')).toBeInTheDocument()
    expect(screen.getByText('Subtítulo Teste')).toBeInTheDocument()
    expect(screen.getByText('Descrição de exemplo')).toBeInTheDocument()
  })

  it('should be able do not render elements if props is null', () => {
    render(<Title title={null} subtitle={null} description={null} />)
    expect(screen.queryByRole('heading', { level: 2 })).not.toBeInTheDocument()
    expect(screen.queryByRole('heading', { level: 3 })).not.toBeInTheDocument()
    expect(screen.queryByText(/.+/)).not.toBeInTheDocument()
  })

  it('should be able apply left alignment', () => {
    const { container } = render(
      <Title title="A" subtitle="B" description="C" align="left" />
    )
    expect(container.firstChild).toHaveClass('items-start')
    expect(container.firstChild).toHaveClass('text-left')
  })

  it('should be able apply right alignment', () => {
    const { container } = render(
      <Title title="A" subtitle="B" description="C" align="right" />
    )
    expect(container.firstChild).toHaveClass('items-end')
    expect(container.firstChild).toHaveClass('text-right')
  })

  it('should be able apply center alignment by default', () => {
    const { container } = render(
      <Title title="A" subtitle="B" description="C" />
    )
    expect(container.firstChild).toHaveClass('items-center')
    expect(container.firstChild).toHaveClass('text-center')
  })
})
