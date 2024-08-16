import React from 'react'

type Props = {}

type ContextType = {
  isLogin: boolean
  setIsLogin: React.Dispatch<React.SetStateAction<boolean>>
}

export const LoginContext = React.createContext<ContextType>({
  isLogin: false,
  setIsLogin: () => {}
})

export default function SignUpContextProvider({ children }: { children: React.ReactNode }) {
  const [isLogin, setIsLogin] = React.useState(false)

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
