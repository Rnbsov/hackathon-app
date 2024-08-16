'use client'

import { ThemeProvider } from 'next-themes'
import React from 'react'

import SignUpContextProvider from './SignUpContextProvider'

type Props = {}

export default function Providers({ children }: { children: React.ReactNode }) {
  return (
    <ThemeProvider attribute='class' defaultTheme='system' enableSystem>
      <SignUpContextProvider>{children}</SignUpContextProvider>
    </ThemeProvider>
  )
}
