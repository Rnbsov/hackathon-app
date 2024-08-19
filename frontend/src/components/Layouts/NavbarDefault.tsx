import { useStore } from '@/stores/store'
import { Navbar, MobileNav, Typography, Button, IconButton } from '@material-tailwind/react'
import { LayoutDashboard, NotebookTabs } from 'lucide-react'
import { usePathname } from 'next/navigation'
import React from 'react'

export function NavbarDefault() {
  const pathname = usePathname()

  const handleOpen = () => {
    useStore.setState((prevState) => ({
      tasksModalToggle: !prevState.tasksModalToggle
    }))
  }

  return (
    <Navbar className='mx-auto px-4 lg:px-8 py-4 bg-bgprimary rounded-none max-w-full border-none hidden md:block fixed z-10'>
      <div className='container mx-auto flex items-center justify-between max-w-full'>
        <div className='flex flex-auto gap-5'>
          <Typography
            as='a'
            href='#'
            className={`mr-4 cursor-pointer py-1.5 flex flex-row gap-2 font-semibold hover:text-white transition ${pathname === '/dashboard' ? 'text-white' : 'text-gray-600'}`}
          >
            <LayoutDashboard width={20} />
            Dashboard
          </Typography>
          <Typography
            as='a'
            href='#'
            className={`mr-4 cursor-pointer py-1.5 flex flex-row gap-2 font-semibold hover:text-white transition ${pathname === '/collections' ? 'text-white' : 'text-gray-600'}`}
          >
            <NotebookTabs width={20} />
            Collections
          </Typography>
        </div>
        <div className='flex items-center gap-x-4'>
          <Button
            variant='filled'
            color='blue-gray'
            size='sm'
            className='flex items-center gap-1 rounded-xl py-0.5 px-2.5 bg-gradient-to-r from-purple-500 to-pink-500 text-white font-bold text-md'
            onClick={handleOpen}
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
      </div>
    </Navbar>
  )
}
