'use client'

import React from 'react'

import Card from './Card'
import styles from './login.module.css'

type Props = {}

export default function Login({}: Props) {
  return (
    <main className={`bg-bgsecondary ${styles['login--container']}`}>
      <Card />
    </main>
  )
}
