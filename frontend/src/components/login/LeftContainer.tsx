import React from 'react'
import { useContext } from 'react'

import Form from './Form'
import { LoginContext } from './LoginContextProvider'
import styles from './login.module.css'

type Props = { isLogin: boolean }

export default function LeftContainer({ isLogin }: Props) {
  return (
    <div className={styles['left--container']}>
      <h1 className='text-center font-semibold'>{isLogin ? 'Sign In' : 'Sign Up'}</h1>
      <Form isLogin={isLogin} />
    </div>
  )
}
