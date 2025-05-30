'use client'

import Link from 'next/link'

import { ArrowRightIcon } from 'lucide-react'

import { SectionTyped } from '@/app/(marketing)/(home)/components/section-typed'
import { Button } from '@/components/ui/button'
import { SectionAboutMe } from '../section-about-me'

export const SectionHero = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      <div className="space-y-2">
        <h1 className="text-2xl sm:text-4xl  font-bold text-muted-foreground">
          👋 Olá, eu sou <b className="text-indigo-500">Geraldo Luiz</b>
        </h1>
        <div className="hidden md:block">
          <SectionTyped />
        </div>
        <SectionAboutMe />
        <Button asChild size="lg" className="w-full">
          <Link href="/contact">
            Entre em contato <ArrowRightIcon className="ml-2 size-4" />
          </Link>
        </Button>
      </div>
      <div
        className="
          bg-[url('/img/avatar.png')]
          bg-cover
          bg-center
          bg-no-repeat
          w-full
          h-[650px]
          rounded-lg
          hidden
          md:block
        "
      />
    </div>
  )
}
