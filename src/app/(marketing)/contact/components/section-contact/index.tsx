import { Title } from '@/components/title'
import { SectionAnimation } from '../section-animation'

export const SectionContact = () => {
  return (
    <div className="space-y-4 p-8">
      <Title
        align="left"
        subtitle="Contato"
        description="Entre em contato e vamos conversar sobre o seu projeto."
      />
      <div className="rounded-md p-4 bg-indigo-500">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <Title
            align="left"
            subtitle="Bora conversar?"
            description="Vamos trocar uma ideia sobre o seu projeto, tirar dúvidas ou até mesmo tomar um café virtual. Estou aqui para ajudar!"
          />
          <SectionAnimation />
        </div>
      </div>
    </div>
  )
}
