'use client'

import Link from 'next/link'

import { cn } from '@/lib/utils'

export const NavItem = ({
  name,
  href,
  isActive
}: {
  name: string
  href: string
  isActive: boolean
}) => {
  return (
    <li>
      <Link
        href={href}
        passHref
        className={cn(
          `
            uppercase
            font-medium
            hover:bg-indigo-500
            hover:border-b-4
            hover:border-indigo-500
            hover:text-white
            hover:shadow-lg
            hover:shadow-indigo-500/50
            hover:transition-all
            hover:duration-300
            hover:ease-in-out
            hover:scale-105
            hover:font-medium
            rounded-lg
            p-3
            text-[12px]
          `,
          isActive ? 'border-b-4 bg-indigo-500' : ''
        )}
      >
        {name}
      </Link>
    </li>
  )
}
