import Image from 'next/image'
import React from 'react'
import { useState } from 'react'
import { useForm, SubmitHandler } from 'react-hook-form'

import styles from './login.module.css'
import HidePasswordBtn from '@/../public/icons/password-hide.png'
import ShowPasswordBtn from '@/../public/icons/password-view.png'

type Props = {
  isLogin: boolean
}

type Inputs = {
  email: string
  password: string
}

export default function Form({ isLogin }: Props) {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors }
  } = useForm<Inputs>()

  const [showSubmitBtn, setShowSubmitBtn] = useState(false)
  const [showPassword, setShowPassword] = useState(false)
  const [inputValue, setInputValue] = useState('')

  const onSubmit: SubmitHandler<Inputs> = (data) => console.log(data)

  const handleChange = (event: any) => {
    setInputValue(event.target.value)
  }

  const getDisplayedText = () => {
    const displayedText = 'NowYouSeeMe!!'.slice(0, inputValue.length)
    return displayedText
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className={styles['form--container']}>
      <div className={styles['form--field__container']}>
        <label
          className='font-semibold'
          style={{
            color: '#555'
          }}
        >
          Email:
        </label>
        <input
          {...register('email', {
            required: 'Email is required',
            pattern: {
              value: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
              message: 'Entered value does not match email format'
            }
          })}
          className={styles['input--container']}
          placeholder='Enter your email'
        />
        {errors.email && <p className={styles['error--message']}>{errors.email.message}</p>}
      </div>

      <div className={`mt-4 ${styles['form--field__container']}`}>
        <label
          className='font-semibold'
          style={{
            color: '#555'
          }}
        >
          Password:
        </label>
        <div className={styles['passward--container']}>
          <input
            {...register('password', { required: true })}
            type={showPassword ? 'text' : 'password'}
            className={styles['input--container']}
            placeholder='Enter your password'
            readOnly={showPassword}
            value={getDisplayedText()}
            onChange={handleChange}
          />
          <Image
            src={showPassword ? HidePasswordBtn : ShowPasswordBtn}
            alt='icon'
            className={styles['password--toggle__btn']}
            onClick={() => setShowPassword(!showPassword)}
          />
        </div>
        {errors.password && <p className={styles['error--message']}>This field is required</p>}
      </div>

      <button
        type='button'
        className={`mx-auto ${styles['form--btn']} mt-4 ${showSubmitBtn ? styles['fade-out'] : ''} ${styles['fake--btn']}`}
        onClick={() => setShowSubmitBtn(true)}
      >
        <svg>
          <defs>
            <linearGradient id='gradientStroke' x1='0%' y1='0%' x2='100%' y2='0%'>
              <stop offset='0%' style={{ stopColor: '#9b5de5', stopOpacity: 1 }} />
              <stop offset='100%' style={{ stopColor: '#f15bb5', stopOpacity: 1 }} />
            </linearGradient>
          </defs>
          <rect x='0' y='0' fill='none' width='100%' height='100%' />
        </svg>
        <p className='text-white font-semibold'>
          {showSubmitBtn ? 'Actually Dysfunctional' : isLogin ? 'Login' : 'Signup'}
        </p>
      </button>
      {showSubmitBtn && (
        <button
          type='submit'
          className={`mx-auto ${styles['form--btn']} ${showSubmitBtn ? styles['fade-in'] : ''} mt-4 ${styles['btn-flip']}`}
          data-back={isLogin ? 'Login' : 'Signup'}
          data-front={isLogin ? 'Login' : 'Signup'}
        >
          {/* <p className='text-sm text-white'>Submit</p> */}
        </button>
      )}
    </form>
  )
}
