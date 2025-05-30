import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger
} from '@/components/ui/sheet'

import { Menu } from 'lucide-react'

import { Logo } from '@/components/logo'
import { HeaderMobileLinks } from '@/components/header-mobile-links'

export const HeaderMobile = () => {
  return (
    <Sheet>
      <SheetTrigger className="md:hidden">
        <Menu />
      </SheetTrigger>
      <SheetContent side="left" aria-describedby="sidebar-description">
        <SheetHeader>
          <SheetTitle>
            <Logo />
          </SheetTitle>
        </SheetHeader>
        <HeaderMobileLinks />
      </SheetContent>
    </Sheet>
  )
}
