import { Title } from '@/components/title'

export const SectionStack = () => {
  return (
    <section>
      <Title align="left" subtitle="Stack Atual" />
      <ul className="list-disc list-inside space-y-2">
        <li>
          Frontend: HTML, CSS, JavaScript, ReactJS, Next.js, TypeScript, React
          Native, Styled Components, Tailwind CSS, Material-UI
        </li>
        <li>Backend: Node.js, NestJS, PHP (Laravel), GraphQL, Apollo, MVC</li>
        <li>
          Automações: N8N, Dify, integração de APIs e handlers personalizados
        </li>
        <li>Testes & Qualidade: Jest, Vitest, Testing Library, Storybook</li>
        <li>
          DevOps & Cloud: AWS, Azure, Digital Ocean, GitHub Actions, Docker,
          Kubernetes, práticas CI/CD
        </li>
        <li>Bancos de Dados: PostgreSQL, MySQL, MongoDB</li>
        <li>CMS: WordPress, Magento, ARCXP</li>
      </ul>
    </section>
  )
}
