import Link from 'next/link'
import { Button } from '../ui/button'

export const HeaderMobileLinks = () => {
  return (
    <div className="flex items-center justify-center flex-col space-y-5 mt-4">
      <Button asChild variant="link" className="w-full">
        <Link href="/">Home</Link>
      </Button>
      <Button asChild variant="link" className="w-full">
        <Link href="/about">Sobre</Link>
      </Button>
      <Button asChild variant="link" className="w-full">
        <Link href="/cases">Cases</Link>
      </Button>
      <Button asChild variant="link" className="w-full">
        <Link href="/contact">Contato</Link>
      </Button>
    </div>
  )
}
