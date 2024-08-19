import { LayoutDashboardIcon, NotebookTabsIcon, PlusIcon } from 'lucide-react'
import { usePathname } from 'next/navigation'
import React from 'react'

import { useStore } from '@/stores/store'

const BottomNavigation = () => {
  const pathname = usePathname()

  const handleOpen = () => {
    useStore.setState((prevState) => ({
      tasksModalToggle: !prevState.tasksModalToggle
    }))
  }

  return (
    <>
      <div className='fixed bottom-0 left-0 z-50 w-full bg-bgsecondary border-t border-gray-800 backdrop-saturate-200 backdrop-blur-2xl bg-opacity-60 py-2 md:hidden'>
        <div className='grid h-full max-w-lg grid-cols-3 mx-auto font-medium'>
          <div className='inline-flex flex-col items-center justify-center px-5 hover:cursor-pointer'>
            <LayoutDashboardIcon fill={`${pathname === '/dashboard' ? '#757575' : '#181820'}`} />
          </div>
          <div className='inline-flex flex-col items-center justify-center px-5'>
            <span
              className='p-3 rounded-2xl bg-gradient-to-r from-purple-500 to-pink-500 text-white font-normal text-3xl hover:cursor-pointer'
              onClick={handleOpen}
            >
              <PlusIcon />
            </span>
          </div>
          <div className='inline-flex flex-col items-center justify-center px-5 hover:cursor-pointer'>
            <NotebookTabsIcon fill={`${pathname === '/collections' ? '#757575' : '#181820'}`} />
          </div>
        </div>
      </div>
    </>
  )
}

export default BottomNavigation
