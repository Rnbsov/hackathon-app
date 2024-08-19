'use client'

import BottomNavigation from '@/components/Layouts/BottomNavigation'
import { NavbarDefault } from '@/components/Layouts/NavbarDefault'
import { TasksModal } from '@/components/Layouts/TasksModal'

export default function DashboardLayout({
  children // will be a page or nested layout
}: {
  children: React.ReactNode
}) {
  return (
    <section className='bg-bgsecondary'>
      <div>
        <NavbarDefault />
        {children}
        <TasksModal />
        <BottomNavigation />
      </div>
    </section>
  )
}
