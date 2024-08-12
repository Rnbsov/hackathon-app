import React from 'react'

import styles from './login.module.css'

type Props = {}

export default function RightContainer({}: Props) {
  return (
    <div className={styles['right--container']}>
      <h1 className='text-3xl text-center font-semibold'>Hi Coder</h1>
      <p className='text-center'>Welcome to something functionally dysfunctional</p>
    </div>
  )
}
