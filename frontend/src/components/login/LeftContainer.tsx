import React from 'react'

import Form from './Form'
import styles from './login.module.css'

type Props = {}

export default function LeftContainer({}: Props) {
  return (
    <div className={styles['left--container']}>
      <h1 className='text-center font-semibold'>Sign In</h1>
      <Form />
    </div>
  )
}
