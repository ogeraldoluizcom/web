import { AiOutlineOpenAI } from 'react-icons/ai'
import { BiLogoTypescript } from 'react-icons/bi'
import {
  FaAws,
  FaCss3Alt,
  FaDigitalOcean,
  FaDocker,
  FaGithub,
  FaHtml5,
  FaNodeJs
} from 'react-icons/fa'
import { GrGraphQl, GrReactjs } from 'react-icons/gr'
import {
  RiJavascriptFill,
  RiNextjsFill,
  RiTailwindCssFill
} from 'react-icons/ri'
import {
  SiApachekafka,
  SiApollographql,
  SiArgo,
  SiCypress,
  SiFastify,
  SiGithubactions,
  SiJest,
  SiKubernetes,
  SiMake,
  SiN8N,
  SiNestjs,
  SiPrisma,
  SiRabbitmq,
  SiStorybook,
  SiTestinglibrary,
  SiTypeorm,
  SiVite,
  SiVitest,
  SiZapier
} from 'react-icons/si'
import { TbBrandAnsible, TbBrandTerraform } from 'react-icons/tb'

import { Title } from '@/components/title'
import { SectionTechSection } from '../section-tech-section'

export const SectionTech = () => {
  return (
    <div className="py-10">
      <Title
        title="Tecnologias"
        subtitle="Ferramentas e frameworks que utilizo"
        description="Tecnologias que trabalho e que me ajudam a criar soluções inovadoras e impactantes."
      />
      <SectionTechSection
        title="Frontend Developer"
        icons={[
          <GrReactjs key="reactjs" className="text-4xl" size={40} />,
          <RiNextjsFill key="nextjs" className="text-4xl" size={40} />,
          <RiTailwindCssFill key="tailwind" className="text-4xl" size={40} />,
          <BiLogoTypescript key="typescript" className="text-4xl" size={40} />,
          <RiJavascriptFill key="javascript" className="text-4xl" size={40} />,
          <FaHtml5 key="html5" className="text-4xl" size={40} />,
          <FaCss3Alt key="css3" className="text-4xl" size={40} />,
          <SiVite key="vite" className="text-4xl" size={40} />,
          <SiStorybook key="storybook" className="text-4xl" size={40} />
        ]}
      />
      <SectionTechSection
        title="Backend Developer"
        icons={[
          <FaNodeJs key="nodejs" className="text-4xl" size={40} />,
          <SiNestjs key="nestjs" className="text-4xl" size={40} />,
          <GrGraphQl key="graphql" className="text-4xl" size={40} />,
          <SiApollographql
            key="apollographql"
            className="text-4xl"
            size={40}
          />,
          <SiFastify key="fastify" className="text-4xl" size={40} />,
          <SiTypeorm key="typeorm" className="text-4xl" size={40} />,
          <SiPrisma key="prisma" className="text-4xl" size={40} />,
          <SiApachekafka key="apachekafka" className="text-4xl" size={40} />,
          <SiRabbitmq key="rabbitmq" className="text-4xl" size={40} />
        ]}
      />
      <SectionTechSection
        title="Devops"
        icons={[
          <FaDocker key="docker" className="text-4xl" size={40} />,
          <SiKubernetes key="kubernetes" className="text-4xl" size={40} />,
          <SiArgo key="argo" className="text-4xl" size={40} />,
          <TbBrandTerraform key="terraform" className="text-4xl" size={40} />,
          <TbBrandAnsible key="ansible" className="text-4xl" size={40} />,
          <FaGithub key="github" className="text-4xl" size={40} />,
          <SiGithubactions
            key="githubactions"
            className="text-4xl"
            size={40}
          />,
          <FaAws key="aws" className="text-4xl" size={40} />,
          <FaDigitalOcean key="digitalocean" className="text-4xl" size={40} />
        ]}
      />
      <SectionTechSection
        title="Testes"
        icons={[
          <SiJest key="jest" className="text-4xl" size={40} />,
          <SiVitest key="vitest" className="text-4xl" size={40} />,
          <SiTestinglibrary
            key="testinglibrary"
            className="text-4xl"
            size={40}
          />,
          <SiCypress key="cypress" className="text-4xl" size={40} />
        ]}
      />
      <SectionTechSection
        title="Agentes IA & Automações"
        icons={[
          <SiN8N key="n8n" className="text-4xl" size={40} />,
          <AiOutlineOpenAI key="openai" className="text-4xl" size={40} />,
          <SiZapier key="zapier" className="text-4xl" size={40} />,
          <SiMake key="make" className="text-4xl" size={40} />
        ]}
      />
    </div>
  )
}
