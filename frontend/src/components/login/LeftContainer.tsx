import React from 'react'

import styles from './login.module.css'

type Props = {}

export default function LeftContainer({}: Props) {
  return (
    <div className={styles['left--container']}>
      <h1 className='text-3xl text-center font-semibold'>Sign In</h1>
      <p className='text-center'>Welcome to something functionally dysfunctional</p>
    </div>
  )
}
