import { ReactNode } from 'react'
import '../styles/globals.css'
import { Rubik, Karla } from 'next/font/google'
import { Providers } from '@/components/Provider'
import { Header } from '@/components/layout/Header'

const rubik = Rubik({
  subsets: ['latin'],
  variable: '--font-rubik',
})

const karla = Karla({
  subsets: ['latin'],
  variable: '--font-karla',
})

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body className={`${rubik.variable} ${karla.variable}`}>
        <Providers>
          <Header />
          <div className="flex flex-1">{children}</div>
        </Providers>
      </body>
    </html>
  )
}
