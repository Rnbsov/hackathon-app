import {
  Button,
  Dialog,
  DialogHeader,
  DialogBody,
  DialogFooter,
  Tabs,
  TabsHeader,
  TabsBody,
  TabPanel,
  Tab
} from '@material-tailwind/react'
import React from 'react'

import { useStore } from '@/stores/store'

export function TasksModal() {
  const { tasksModalToggle } = useStore()

  const handleOpen = () => {
    useStore.setState((prevState) => ({
      tasksModalToggle: !prevState.tasksModalToggle
    }))
  }

  const data = [
    {
      label: 'Collection',
      value: 'collection',
      desc: (
        <>
          <div>
            <p>It really matters and then like it really doesn't matter.</p>
            <p>
              What matters is the people who are sparked by it. And the people who are like offended by it, it doesn't
              matter.
            </p>
          </div>
        </>
      )
    },
    {
      label: 'Checklist',
      value: 'checklist',
      desc: (
        <div>
          <p>Because it's about motivating the doers.</p>
          <p>Because I'm here to follow my dreams and inspire other people to follow their dreams, too.</p>
        </div>
      )
    }
  ]

  return (
    <>
      <Dialog
        open={tasksModalToggle}
        handler={handleOpen}
        animate={{
          mount: { scale: 1, y: 0 },
          unmount: { scale: 0.9, y: -100 }
        }}
        className='bg-bgsecondary'
      >
        <DialogHeader className='text-white'>Its a simple dialog.</DialogHeader>
        <DialogBody>
          <Tabs value='collection'>
            <TabsHeader
              className='bg-gray-700'
              indicatorProps={{
                className: 'bg-gray-100/30 shadow-none text-gray-900'
              }}
            >
              {data.map(({ label, value }) => (
                <Tab key={value} value={value} className='h-7 text-sm text-white'>
                  {label}
                </Tab>
              ))}
            </TabsHeader>
            <TabsBody
              // animate={{
              //   initial: { y: 250 },
              //   mount: { y: 0 },
              //   unmount: { y: 250 }
              // }}
              className='mt-1'
            >
              {data.map(({ value, desc }) => (
                <TabPanel key={value} value={value} className='text-gray-300 max-h-[60vh] overflow-scroll'>
                  {desc}
                </TabPanel>
              ))}
            </TabsBody>
          </Tabs>
        </DialogBody>
        <DialogFooter>
          <Button variant='text' color='red' onClick={handleOpen} className='mr-1'>
            <span>Cancel</span>
          </Button>
          <Button variant='gradient' color='green' onClick={handleOpen}>
            <span>Confirm</span>
          </Button>
        </DialogFooter>
      </Dialog>
    </>
  )
}
