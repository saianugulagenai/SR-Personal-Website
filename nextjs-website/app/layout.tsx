import './globals.css'
import type { Metadata } from 'next'
import { Navigation } from '@/components/Navigation'
import { Footer } from '@/components/Footer'

export const metadata: Metadata = {
  title: 'SaiRam Anugula | GTM Strategy & Revenue Operations Leader',
  description: '15+ years enabling revenue growth through data-driven GTM strategy, sales operations, and business analytics for Cloud, SaaS, and AI companies.',
  keywords: 'GTM Strategy, Revenue Operations, Business Analytics, Sales Operations, Cloud, SaaS, AI, Partner Strategy',
  authors: [{ name: 'SaiRam Anugula' }],
  openGraph: {
    title: 'SaiRam Anugula | GTM Strategy & Revenue Operations Leader',
    description: 'Architecting Revenue Growth Through Data-Driven GTM Excellence',
    url: 'https://sairamanugula.com',
    siteName: 'SaiRam Anugula',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'SaiRam Anugula - GTM Strategy Leader',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'SaiRam Anugula | GTM Strategy Leader',
    description: 'Architecting Revenue Growth Through Data-Driven GTM Excellence',
    images: ['/og-image.png'],
  },
  robots: {
    index: true,
    follow: true,
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="antialiased">
        <Navigation />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}
