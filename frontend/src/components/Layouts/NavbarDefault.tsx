import { Navbar, MobileNav, Typography, Button, IconButton } from '@material-tailwind/react'
import React from 'react'

export function NavbarDefault() {

  return (
    <Navbar className='mx-auto px-4 py-2 lg:px-8 lg:py-4 bg-bgprimary rounded-none max-w-full border-none hidden md:block fixed'>
      <div className='container mx-auto flex items-center justify-between text-white max-w-full'>
        <div className='flex flex-auto gap-5'>
          <Typography
            as='a'
            href='#'
            className='mr-4 cursor-pointer py-1.5 flex flex-row gap-2 font-semibold hover:text-white transition'
          >
            <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='currentColor' className='size-6'>
              <path
                fillRule='evenodd'
                d='M1.5 7.125c0-1.036.84-1.875 1.875-1.875h6c1.036 0 1.875.84 1.875 1.875v3.75c0 1.036-.84 1.875-1.875 1.875h-6A1.875 1.875 0 0 1 1.5 10.875v-3.75Zm12 1.5c0-1.036.84-1.875 1.875-1.875h5.25c1.035 0 1.875.84 1.875 1.875v8.25c0 1.035-.84 1.875-1.875 1.875h-5.25a1.875 1.875 0 0 1-1.875-1.875v-8.25ZM3 16.125c0-1.036.84-1.875 1.875-1.875h5.25c1.036 0 1.875.84 1.875 1.875v2.25c0 1.035-.84 1.875-1.875 1.875h-5.25A1.875 1.875 0 0 1 3 18.375v-2.25Z'
                clipRule='evenodd'
              />
            </svg>
            Dashboard
          </Typography>
          <Typography
            as='a'
            href='#'
            className='mr-4 cursor-pointer py-1.5 flex flex-row gap-2 font-semibold text-gray-600 hover:text-white transition'
          >
            <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='currentColor' className='size-5'>
              <path d='M7.5 3.375c0-1.036.84-1.875 1.875-1.875h.375a3.75 3.75 0 0 1 3.75 3.75v1.875C13.5 8.161 14.34 9 15.375 9h1.875A3.75 3.75 0 0 1 21 12.75v3.375C21 17.16 20.16 18 19.125 18h-9.75A1.875 1.875 0 0 1 7.5 16.125V3.375Z' />
              <path d='M15 5.25a5.23 5.23 0 0 0-1.279-3.434 9.768 9.768 0 0 1 6.963 6.963A5.23 5.23 0 0 0 17.25 7.5h-1.875A.375.375 0 0 1 15 7.125V5.25ZM4.875 6H6v10.125A3.375 3.375 0 0 0 9.375 19.5H16.5v1.125c0 1.035-.84 1.875-1.875 1.875h-9.75A1.875 1.875 0 0 1 3 20.625V7.875C3 6.839 3.84 6 4.875 6Z' />
            </svg>
            Collections
          </Typography>
        </div>
        <div className='flex items-center gap-x-4'>
          <Button
            variant='filled'
            color='blue-gray'
            size='sm'
            className='flex items-center gap-1 rounded-xl py-0.5 px-2.5 bg-gradient-to-r from-purple-500 to-pink-500 text-white font-bold text-md'
          >
            +
          </Button>
          <Button
            variant='filled'
            color='blue-gray'
            size='sm'
            className='flex items-center gap-1 rounded-full py-2 px-3 bg-blue-gray-700 hover:bg-blue-gray-800 text-white'
          >
            A
          </Button>
        </div>
        {/* <IconButton
          variant='text'
          className='ml-auto h-6 w-6 text-inherit hover:bg-transparent focus:bg-transparent active:bg-transparent lg:hidden'
          ripple={false}
          onClick={() => setOpenNav(!openNav)}
        >
          {openNav ? (
            <svg
              xmlns='http://www.w3.org/2000/svg'
              fill='none'
              className='h-6 w-6'
              viewBox='0 0 24 24'
              stroke='currentColor'
              strokeWidth={2}
            >
              <path strokeLinecap='round' strokeLinejoin='round' d='M6 18L18 6M6 6l12 12' />
            </svg>
          ) : (
            <svg
              xmlns='http://www.w3.org/2000/svg'
              className='h-6 w-6'
              fill='none'
              stroke='currentColor'
              strokeWidth={2}
            >
              <path strokeLinecap='round' strokeLinejoin='round' d='M4 6h16M4 12h16M4 18h16' />
            </svg>
          )}
        </IconButton> */}
      </div>
      {/* <MobileNav open={openNav}>
        <div className='container mx-auto'>
          <div className='flex items-center gap-x-1'>
            <Button fullWidth variant='text' size='sm' className=''>
              <span>Log In</span>
            </Button>
            <Button fullWidth variant='gradient' size='sm' className=''>
              <span>Sign in</span>
            </Button>
          </div>
        </div>
      </MobileNav> */}
    </Navbar>
  )
}
