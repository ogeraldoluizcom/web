'use client'

import Link from 'next/link'

interface SocialButtonProps {
  href: string
  ariaLabel: string
  children: React.ReactNode
}

export const SocialButton = ({
  href,
  ariaLabel,
  children
}: SocialButtonProps) => {
  return (
    <Link
      aria-label={ariaLabel}
      target="_blank"
      href={href}
      className="
        bg-indigo-500
        rounded-lg
        shadow-lg
        border
        border-indigo-700
        p-2
        transition-transform
        duration-300
        scale-105
        hover:scale-110
        hover:shadow-xl
      "
    >
      {children}
    </Link>
  )
}
