import { Title } from '@/components/title'

export const SectionSoftSkills = () => {
  return (
    <section>
      <Title align="left" subtitle="Soft Skills" />
      <ul className="list-disc list-inside space-y-2">
        <li>
          Comunicação clara e colaboração ativa com stakeholders técnicos e não
          técnicos
        </li>
        <li>Pensamento estratégico voltado para resultados de negócio</li>
        <li>Foco em performance, escalabilidade e manutenção</li>
        <li>Curiosidade constante por novas tecnologias e boas práticas</li>
        <li>Compromisso com entregas de alto impacto e código limpo</li>
      </ul>
    </section>
  )
}
