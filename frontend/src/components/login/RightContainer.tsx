import Link from 'next/link'
import { useRouter } from 'next/navigation'
import React from 'react'

import styles from './login.module.css'

type Props = {
  isLogin: boolean
}

export default function RightContainer({ isLogin }: Props) {
  return (
    <div className={styles['right--container']}>
      <h1 className='text-center font-semibold'>Hi Coder</h1>
      <div>
        <p className='text-center text-sm'>Welcome to something functional</p>
        <p className='text-center text-sm'>and dysfunctional 🎉</p>
      </div>

      <Link href={isLogin ? '/auth/signup' : '/auth/login'}>
        <button className={styles['right--container__btn']}>
          <svg>
            <defs>
              <linearGradient id='gradientStroke' x1='0%' y1='0%' x2='100%' y2='0%'>
                <stop offset='0%' style={{ stopColor: '#9b5de5', stopOpacity: 1 }} />
                <stop offset='100%' style={{ stopColor: '#f15bb5', stopOpacity: 1 }} />
              </linearGradient>
            </defs>
            <rect x='0' y='0' fill='none' width='100%' height='100%' />
          </svg>
          <p className='font-semibold'>{isLogin ? 'Sign Up' : 'Login'}</p>
        </button>
      </Link>
    </div>
  )
}
