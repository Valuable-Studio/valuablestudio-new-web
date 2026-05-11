import Footer from '@/components/layout/footer'
import Nav from '@/components/layout/nav'
import WorkDrawerProvider from '@/components/layout/work-drawer'
import '@/lib/styles/css/index.css'
import { fontsVariable } from '@/lib/styles/fonts'
import AppData from '@/package.json'
import type { Metadata, Viewport } from 'next'
import Script from 'next/script'

const APP_NAME = AppData.name
const APP_DEFAULT_TITLE =
  'Valuable Studio — Embedded design partner for early-stage startups '
const APP_TITLE_TEMPLATE = '%s — Valuable Studio'
const APP_DESCRIPTION = AppData.description
const APP_BASE_URL =
  process.env.NEXT_PUBLIC_BASE_URL ?? 'https://localhost:3000'

export const metadata: Metadata = {
  metadataBase: new URL(APP_BASE_URL),
  applicationName: APP_NAME,
  title: {
    default: APP_DEFAULT_TITLE,
    template: APP_TITLE_TEMPLATE,
  },
  description: APP_DESCRIPTION,
  alternates: {
    canonical: '/',
    languages: {
      'en-US': '/en-US',
    },
  },
  appleWebApp: {
    capable: true,
    statusBarStyle: 'default',
    title: APP_DEFAULT_TITLE,
  },
  formatDetection: { telephone: false },
  openGraph: {
    type: 'website',
    siteName: APP_NAME,
    title: {
      default: APP_DEFAULT_TITLE,
      template: APP_TITLE_TEMPLATE,
    },
    description: APP_DESCRIPTION,
    url: APP_BASE_URL,
    images: [
      {
        url: '/opengraph-image.jpg',
        width: 1200,
        height: 630,
        alt: APP_DEFAULT_TITLE,
      },
    ],
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: {
      default: APP_DEFAULT_TITLE,
      template: APP_TITLE_TEMPLATE,
    },
    description: APP_DESCRIPTION,
  },
  authors: [{ name: 'Valuable Studio', url: 'https://valuable.studio' }],
  other: {
    'fb:app_id': process.env.NEXT_PUBLIC_FACEBOOK_APP_ID || '',
  },
}

export const viewport: Viewport = {
  colorScheme: 'normal',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" dir="ltr" className={fontsVariable}>
      <body>
        <WorkDrawerProvider>
          <div className="layout-grid">
            <Nav />
            {children}
            <Footer />
          </div>
        </WorkDrawerProvider>

        {/* Plausible Analytics */}
        <Script
          src="https://plausible.io/js/pa-kwYtjswvvgetim_X-urKM.js"
          strategy="afterInteractive"
        />
        <Script id="plausible-init" strategy="afterInteractive">
          {`window.plausible=window.plausible||function(){(plausible.q=plausible.q||[]).push(arguments)},plausible.init=plausible.init||function(i){plausible.o=i||{}};plausible.init()`}
        </Script>
      </body>
    </html>
  )
}
