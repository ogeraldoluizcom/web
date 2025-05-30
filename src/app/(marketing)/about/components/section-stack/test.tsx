import { render, screen } from '@testing-library/react'
import { SectionStack } from '.'

describe('SectionStack', () => {
  it('renders the title and all stack items', () => {
    render(<SectionStack />)

    expect(screen.getByText('Stack Atual')).toBeInTheDocument()
    expect(
      screen.getByText(
        /Frontend: HTML, CSS, JavaScript, ReactJS, Next\.js, TypeScript, React\s*Native, Styled Components, Tailwind CSS, Material-UI/i
      )
    ).toBeInTheDocument()
    expect(
      screen.getByText(
        /Backend: Node\.js, NestJS, PHP \(Laravel\), GraphQL, Apollo, MVC/i
      )
    ).toBeInTheDocument()
    expect(
      screen.getByText(
        /Automações: N8N, Dify, integração de APIs e handlers personalizados/i
      )
    ).toBeInTheDocument()
    expect(
      screen.getByText(
        /Testes & Qualidade: Jest, Vitest, Testing Library, Storybook/i
      )
    ).toBeInTheDocument()
    expect(
      screen.getByText(
        /DevOps & Cloud: AWS, Azure, Digital Ocean, GitHub Actions, Docker, Kubernetes, práticas CI\/CD/i
      )
    ).toBeInTheDocument()
    expect(
      screen.getByText(/Bancos de Dados: PostgreSQL, MySQL, MongoDB/i)
    ).toBeInTheDocument()
    expect(
      screen.getByText(/CMS: WordPress, Magento, ARCXP/i)
    ).toBeInTheDocument()
  })
})
