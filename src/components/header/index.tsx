import { Logo } from '../logo'
import { Navbar } from '../navbar'
import { Social } from '../social'

export const Header = () => {
  return (
    <header className="flex items-center justify-between px-4 py-4">
      <div>
        <Logo />
      </div>
      <div className="flex items-center gap-6">
        <Navbar />
        <Social />
      </div>
    </header>
  )
}
