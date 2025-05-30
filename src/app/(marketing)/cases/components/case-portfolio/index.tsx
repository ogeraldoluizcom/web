import { Title } from '@/components/title'
import { CaseItem } from '../case-item'

export const CasePortfolio = () => {
  return (
    <div className="py-10">
      <Title
        title="Portfolio"
        subtitle="Transformando ideias em soluções"
        description="Abaixo estão alguns dos meus projetos mais recentes, onde apliquei minhas habilidades."
      />
      <CaseItem
        imageUrl="/img/cover-wongames.png"
        title="Won Games Store"
        description="Criação de um e-commerce de jogos, incluindo toda a parte de pagamentos."
        url="/cases/won-games"
      />
    </div>
  )
}
