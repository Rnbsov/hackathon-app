import React from 'react'
import { createContext, useState } from 'react'

type Props = {}

type ContextType = {
  isLogin: boolean
  setIsLogin: React.Dispatch<React.SetStateAction<boolean>>
}

export const LoginContext = createContext<ContextType>({
  isLogin: true,
  setIsLogin: () => {}
})

export default function LoginContextProvider({ children }: { children: React.ReactNode }) {
  const [isLogin, setIsLogin] = useState(true)

  return (
    <LoginContext.Provider
      value={{
        isLogin,
        setIsLogin
      }}
    >
      {children}
    </LoginContext.Provider>
  )
}
