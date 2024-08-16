import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import Script from 'next/script'

import Providers from '@/components/signup/Providers'

const inter = Inter({ subsets: ['latin'] })

declare global {
  namespace JSX {
    interface IntrinsicElements {
      'chatlio-widget': any
    }
  }
}

export const metadata: Metadata = {
  title: 'Signup',
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
        <Providers>{children}</Providers>
      </body>
    </html>
  )
}
