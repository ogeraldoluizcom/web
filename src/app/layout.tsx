import type { Metadata } from 'next'
import { Montserrat } from 'next/font/google'
import Script from 'next/script'

import { RouteChangeProvider } from '@/providers/route-change-provider'

import './globals.css'

const font = Montserrat({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Geraldo Luiz',
  description: 'Geraldo Luiz - Criação e Desenvolvimento de Websites e Apps',
  keywords: ['web development', 'apps', 'sites', 'Next.js', 'Geraldo Luiz'],
  authors: [{ name: 'Geraldo Luiz', url: 'https://ogeraldoluiz.com' }],
  openGraph: {
    title: 'Geraldo Luiz',
    description: 'Criação e Desenvolvimento de Websites e Apps',
    url: 'https://ogeraldoluiz.com',
    siteName: 'Geraldo Luiz',
    images: [
      {
        url: 'https://ogeraldoluiz.com/img/avatar.png',
        width: 1200,
        height: 630,
        alt: 'Geraldo Luiz'
      }
    ],
    locale: 'pt_BR',
    type: 'website'
  },
  metadataBase: new URL('https://ogeraldoluiz.com')
}

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="pt-BR">
      <head>
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/manifest.json" />
        <meta
          name="google-site-verification"
          content="Qsl41poLAf14XJyN-hlRD-cV_HoW-wtEXUfTaLENsks"
        />
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-PMW9DWYSNX"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-PMW9DWYSNX');
          `}
        </Script>
        <Script id="google-tag-manager" strategy="afterInteractive">
          {`
            (function(w,d,s,l,i){
              w[l]=w[l]||[];
              w[l].push({'gtm.start': new Date().getTime(),event:'gtm.js'});
              var f=d.getElementsByTagName(s)[0],
              j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';
              j.async=true;
              j.src='https://www.googletagmanager.com/gtm.js?id='+i+dl;
              f.parentNode.insertBefore(j,f);
            })(window,document,'script','dataLayer','GTM-MRQFG3QD');
          `}
        </Script>
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-MRQFG3QD"
            height="0"
            width="0"
            style={{ display: 'none', visibility: 'hidden' }}
          />
        </noscript>
      </head>
      <body className={font.className}>
        <RouteChangeProvider>{children}</RouteChangeProvider>
      </body>
    </html>
  )
}
