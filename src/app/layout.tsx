import { ReactNode } from 'react'
import '../styles/globals.css'
import { Libre_Baskerville as Libre, DM_Sans as DMSans } from 'next/font/google'
import { Providers } from '@/components/Provider'
import { Header } from '@/components/layout/Header'

const libre = Libre({
  subsets: ['latin'],
  weight: ['400', '700'],
  variable: '--font-libre',
})

const dmSans = DMSans({
  subsets: ['latin'],
  weight: ['400', '500', '700'],
  variable: '--font-dm-sans',
})

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body
        className={`${libre.variable} ${dmSans.variable} h-screen bg-zinc-50 text-zinc-900 dark:bg-zinc-900 dark:text-zinc-100`}
      >
        <Providers>
          <Header />
          <div className="flex flex-1">{children}</div>
        </Providers>
      </body>
    </html>
  )
}
