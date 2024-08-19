'use client'

import { Button } from '@material-tailwind/react'
import { useEffect } from 'react'

import { DashboardCollectionAccordion } from '@/components/Layouts/DashboardCollectionAccordion'

import { useStore } from '@/stores/store'

const Index = () => {
  useEffect(() => {
    const AccordionData = [
      {
        id: 1,
        title: 'Future tasks',
        checklist: [
          { id: 1, label: 'Prepare for an Interview', checked: false, description: 'Tomorrow 10:30 AM' },
          { id: 2, label: 'Item 2', checked: false },
          { id: 3, label: 'Item 3', checked: false }
        ]
      },
      {
        id: 2,
        title: 'How to use Material Tailwind?',
        checklist: [
          { id: 4, label: 'Item 4', checked: false },
          { id: 5, label: 'Item 5', checked: false },
          { id: 6, label: 'Item 6', checked: false }
        ]
      }
    ]

    useStore.setState(() => ({ accordionData: AccordionData }))
  }, [])

  return (
    <>
      <div className='flex justify-center min-h-dvh bg-base-200'>
        <div className='w-full flex-col max-w-screen-md'>
          <div className='text-white p-6 md:mt-20 mt-0 w-full'>
            <div className='flex justify-between pb-10 md:py-10'>
              <p className='text-xl font-semibold'>Dashboard</p>
              <Button
                variant='filled'
                color='blue-gray'
                size='md'
                className='flex items-center gap-1 rounded-full py-4 px-5 bg-blue-gray-700 hover:bg-blue-gray-800 text-white md:hidden'
              >
                A
              </Button>
            </div>
            {/* Header Section */}
            <div className='mb-8'>
              <h1 className='text-3xl md:text-4xl font-bold'>Good morning,</h1>
              <h1 className='text-3xl md:text-4xl font-bold'>Jane Doe</h1>
              {/* <div className='mt-4 flex space-x-4'>
                <button className='px-4 py-2 bg-gray-700 rounded-md'>Daily Overview</button>
                <button className='px-4 py-2 bg-gray-700 rounded-md'>Statistics</button>
              </div> */}
            </div>

            {/* Task Section */}
            <div className='space-y-6 mb-20'>
              <DashboardCollectionAccordion />
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Index
