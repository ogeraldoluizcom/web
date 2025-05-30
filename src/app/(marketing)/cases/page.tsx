import { Title } from '@/components/title'
import { CaseItem } from './components/case-item'

const Cases = () => {
  return (
    <section className="flex flex-col min-h-screen">
      <div className="space-y-4 p-8">
        <Title
          align="left"
          subtitle="Cases"
          description="Expore alguns dos cases de sucesso"
        />
        <CaseItem
          imageUrl="/img/cover-wongames.png"
          title="Won Games Store"
          description="Criação de um e-commerce de jogos, incluindo toda a parte de pagamentos."
          url="/cases/won-games"
        />
      </div>
    </section>
  )
}

export default Cases
