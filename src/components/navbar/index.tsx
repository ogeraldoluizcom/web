'use client'

import { usePathname } from 'next/navigation'

import { NavItem } from '../nav-item'

export const Navbar = () => {
  const pathname = usePathname()

  const routes = [
    {
      name: 'Home',
      href: '/',
      active: pathname === '/'
    },
    {
      name: 'Sobre',
      href: '/about',
      active: pathname === '/about'
    },
    {
      name: 'Cases',
      href: '/cases',
      active: pathname === '/cases'
    },
    {
      name: 'Contato',
      href: '/contact',
      active: pathname === '/contact'
    }
  ]

  return (
    <nav>
      <ul className="flex space-x-4">
        {routes.map(({ name, href }) => (
          <NavItem
            key={name}
            name={name}
            href={href}
            isActive={pathname === href}
          />
        ))}
      </ul>
    </nav>
  )
}
