import { Footer } from '@/components/footer'
import { Header } from '@/components/header'
import { HeaderMobile } from '@/components/header-mobile'
import { Logo } from '@/components/logo'

interface MarketingLayout {
  children: React.ReactNode
}

const MarketingLayout = ({ children }: MarketingLayout) => {
  return (
    <>
      <div className="flex flex-col min-h-screen max-w-screen-xl mx-auto">
        <div className="hidden md:block">
          <Header />
        </div>
        <div className="md:hidden flex items-center justify-between px-4 py-2">
          <Logo />
          <HeaderMobile />
        </div>
        <main>{children}</main>
      </div>
      <footer className="p-4 bg-indigo-900 text-white w-full">
        <Footer />
      </footer>
    </>
  )
}

export default MarketingLayout
