import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import Script from 'next/script'

import Provider from '@/components/login/Provider'

const inter = Inter({ subsets: ['latin'] })

declare global {
  namespace JSX {
    interface IntrinsicElements {
      'chatlio-widget': any
    }
  }
}

export const metadata: Metadata = {
  title: 'Login',
  description: 'Chaotic todo app'
}

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang='en'>
      <body className={inter.className}>
        <Provider>{children}</Provider>
      </body>
    </html>
  )
}
