import React from 'react'

import styles from './login.module.css'

type Props = {}

export default function RightContainer({}: Props) {
  return (
    <div className={styles['right--container']}>
      <h1 className='text-center font-semibold'>Hi Coder</h1>
      <div>
        <p className='text-center text-sm'>Welcome to something functional</p>
        <p className='text-center text-sm'>and dysfunctional 🎉</p>
      </div>
    </div>
  )
}
