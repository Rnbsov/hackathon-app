'use client'

import React from 'react'
import styles from './login.module.css'
import Card from './Card'

type Props = {}

export default function Login({}: Props) {
  return (
    <main className={styles['login--container']}><Card/></main>
  )
}