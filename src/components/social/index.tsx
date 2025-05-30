import { FaGithub, FaLinkedin } from 'react-icons/fa'

import { SocialButton } from '@/components/social-button'

export const Social = () => {
  return (
    <div className="flex items-center space-x-2 mr-2">
      <SocialButton href="https://github.com/geraldobl58" ariaLabel="github">
        <FaGithub className="size-4" />
      </SocialButton>
      <SocialButton
        href="https://www.linkedin.com/in/geraldo-luiz-b626ab31/"
        ariaLabel="linkedin"
      >
        <FaLinkedin className="size-4" />
      </SocialButton>
    </div>
  )
}
