'use client'

import { ThemeProvider } from 'next-themes'
import React from 'react'

import LoginContextProvider from './LoginContextProvider'

type Props = {}

export default function Provider({ children }: { children: React.ReactNode }) {
  return (
    <ThemeProvider attribute='class' defaultTheme='system' enableSystem>
      <LoginContextProvider>{children}</LoginContextProvider>
    </ThemeProvider>
  )
}
