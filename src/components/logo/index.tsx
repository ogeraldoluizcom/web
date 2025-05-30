import Image from 'next/image'
import Link from 'next/link'

export const Logo = () => (
  <Link href="/" passHref className="flex items-center">
    <Image
      src="/img/logo.svg"
      alt="Geraldo Luiz"
      width={80}
      height={80}
      className="rounded-full"
    />
  </Link>
)
