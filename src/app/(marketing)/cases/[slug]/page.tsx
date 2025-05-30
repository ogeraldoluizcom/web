import Image from 'next/image'
import { CircleCheck } from 'lucide-react'

import { Title } from '@/components/title'

const Single = () => {
  return (
    <section className="flex flex-col min-h-screen">
      <div className="space-y-4 p-8">
        <Title
          align="left"
          subtitle="Won Games"
          description="Criação de um e-commerce de jogos, incluindo toda a parte de pagamentos."
        />
        <div className="flex flex-col gap-4 mt-8">
          <p>
            Criação de um e-commerce de jogos, incluindo toda a parte de
            pagamentos e área do cliente. Os clientes poderão fazer buscas,
            filtrar, adicionar ao carrinho e comprar seus jogos favoritos.
          </p>
          <p>
            Aqui um CMS completamente customizado para que os administradores
            possam adicionar produtos, categorias, plataformas, criar promoções,
            editar partes do site, além de e-mails automatizados para às vendas
            de cada produto.
          </p>
          <p>
            Para tudo isso, utilizei ferramentas muito famosas no mercado de
            trabalho, como ReactJS, Next, Apollo e outras coisas mais. Sempre
            prezando pela qualidade do código, ou seja, testes em tudo!
          </p>
          <ul className="space-y-4">
            <li className="flex items-center gap-2">
              <CircleCheck className="size-6 text-indigo-500" />
              <strong>Next.js</strong>
            </li>
            <li className="flex items-center gap-2">
              <CircleCheck className="size-6 text-indigo-500" />
              <strong>React</strong>
            </li>
            <li className="flex items-center gap-2">
              <CircleCheck className="size-6 text-indigo-500" />
              <strong>TypeScript</strong>
            </li>
            <li className="flex items-center gap-2">
              <CircleCheck className="size-6 text-indigo-500" />
              <strong>GraphQL</strong>
            </li>
            <li className="flex items-center gap-2">
              <CircleCheck className="size-6 text-indigo-500" />
              <strong>Strapi</strong>
            </li>
            <li className="flex items-center gap-2">
              <CircleCheck className="size-6 text-indigo-500" />
              <strong>Apollo</strong>
            </li>
            <li className="flex items-center gap-2">
              <CircleCheck className="size-6 text-indigo-500" />
              <strong>Jest</strong>
            </li>
            <li className="flex items-center gap-2">
              <CircleCheck className="size-6 text-indigo-500" />
              <strong>Testing Library</strong>
            </li>
            <li className="flex items-center gap-2">
              <CircleCheck className="size-6 text-indigo-500" />
              <strong>Storybook</strong>
            </li>
            <li className="flex items-center gap-2">
              <CircleCheck className="size-6 text-indigo-500" />
              <strong>Cypress</strong>
            </li>
            <li className="flex items-center gap-2">
              <CircleCheck className="size-6 text-indigo-500" />
              <strong>Styled Components</strong>
            </li>
          </ul>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4">
            <div className="bg-indigo-900 shadow-lg rounded-lg p-4">
              <Image
                src="/img/cover-wongames.png"
                alt="Won Games Store"
                width={500}
                height={500}
                quality={100}
                priority
                className="rounded-lg mb-4 w-full"
              />
            </div>
            <div className="bg-indigo-900 shadow-lg rounded-lg p-4">
              <Image
                src="/img/explore-wongames.png"
                alt="Won Games Store"
                width={500}
                height={500}
                quality={100}
                priority
                className="rounded-lg mb-4 w-full"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Single
