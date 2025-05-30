import { TypeAnimation } from 'react-type-animation'

const ROLES = [
  'Software Engineer',
  'Fullstack Developer',
  'Backend Developer',
  'Frontend Developer',
  'Devops Engineer',
  'Cloud Engineer'
]

export const SectionTyped = () => {
  return (
    <TypeAnimation
      sequence={ROLES}
      wrapper="p"
      speed={10}
      repeat={Infinity}
      className="text-[36px] font-bold text-indigo-500"
    />
  )
}
