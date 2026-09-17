import type { Metadata, Viewport } from 'next'
import { IntroGate } from '@/components/intro/IntroGate'
import { Footer } from '@/components/layout/Footer'
import { Header } from '@/components/layout/Header'
import { Providers } from '@/components/Providers'
import { site } from '@/config'
import { fontVariables } from '@/lib/fonts'
import '@/styles/globals.css'

const title = `${site.name} — ${site.role}`
const description = `${site.role} based in ${site.location.city}, ${site.location.country}. Available worldwide.`

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title,
  description,
  applicationName: site.name,
  authors: [{ name: site.name, url: site.url }],
  creator: site.name,
  keywords: [
    site.name,
    'software engineer',
    'full-stack developer',
    'react',
    'next.js',
    'node.js',
    'typescript',
    'são paulo',
    'remote',
  ],
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: site.url,
    siteName: site.name,
    title,
    description,
  },
  twitter: { card: 'summary_large_image', title, description },
  robots: { index: true, follow: true },
}

export const viewport: Viewport = {
  // Ink is the default theme, so the browser chrome matches it.
  themeColor: '#08080a',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${fontVariables} font-sans`}>
        <Providers>
          <IntroGate>
            <div className="flex min-h-dvh flex-col">
              <Header />
              <main id="top" className="flex-1">
                {children}
              </main>
              <Footer />
            </div>
          </IntroGate>
        </Providers>
      </body>
    </html>
  )
}
