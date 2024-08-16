'use client'

import React from 'react'

import Card from '../login/Card'
import styles from '../login/login.module.css'

type Props = {}

export default function SignUp({}: Props) {
  return (
    <main className={`bg-bgsecondary ${styles['login--container']}`}>
      <Card isLogin={false} />
    </main>
  )
}
