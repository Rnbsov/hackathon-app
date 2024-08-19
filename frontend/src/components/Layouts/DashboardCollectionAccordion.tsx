import { Accordion, AccordionHeader, AccordionBody, Checkbox, Typography } from '@material-tailwind/react'
import { ChevronDownIcon, MoveRightIcon } from 'lucide-react'
import React, { useEffect, useState } from 'react'

import { useStore } from '@/stores/store'

type IconProps = {
  id: number
  open: number[]
}

function Icon({ id, open }: IconProps) {
  return (
    <ChevronDownIcon
      className={`${!open.includes(id) ? 'rotate-180' : ''} h-4 w-4 transition-transform`}
      strokeWidth={3}
    />
  )
}

type ChecklistProps = {
  items: { id: number; label: string; checked: boolean; description?: string }[]
  onToggle: (id: number) => void
}

function Checklist({ items, onToggle }: ChecklistProps) {
  return (
    <div className='flex flex-col gap-4'>
      {items.map((item, index) => (
        <label
          className='hover:bg-gray-500/10 p-2 mx-3 rounded-md cursor-pointer transition'
          htmlFor={`checkbox-${item.id}`}
          key={index}
        >
          <Checkbox
            key={item.id}
            id={`checkbox-${item.id}`}
            checked={item.checked}
            onChange={() => onToggle(item.id)}
            className='border-2 border-purple-500 text-purple-500 focus:ring-0'
            color='purple'
            containerProps={{
              className: `${item.description ? '-mt-5' : ''}`
            }}
            label={
              <div>
                <Typography color='blue-gray' className='font-semibold text-gray-300'>
                  {item.label}
                </Typography>
                {item.description && (
                  <Typography variant='small' color='gray' className='font-semibold text-red-600'>
                    {item.description}
                  </Typography>
                )}
              </div>
            }
            crossOrigin='anonymous' // Adding crossOrigin with a default value
          />
        </label>
      ))}
    </div>
  )
}

const CUSTOM_ANIMATION = {
  mount: { scale: 1 },
  unmount: { scale: 0.9 }
}

export const DashboardCollectionAccordion = () => {
  const { accordionData } = useStore()

  const [open, setOpen] = useState<number[]>([])

  const handleOpen = (value: number) => {
    setOpen((prevOpen) => (prevOpen.includes(value) ? prevOpen.filter((id) => id !== value) : [...prevOpen, value]))
  }

  const toggleChecklistItem = (accordionId: number, itemId: number) => {
    useStore.setState((prevState) => ({
      accordionData: prevState.accordionData.map((accordion) =>
        accordion.id === accordionId
          ? {
              ...accordion,
              checklist: accordion.checklist.map((item) =>
                item.id === itemId ? { ...item, checked: !item.checked } : item
              )
            }
          : accordion
      )
    }))
  }

  return (
    <>
      {accordionData.map((accordion, index) => (
        <div key={index}>
          <Accordion
            className='bg-bgprimary rounded-t-xl'
            open={!open.includes(accordion.id)}
            animate={CUSTOM_ANIMATION}
            icon={<Icon id={accordion.id} open={open} />}
          >
            <AccordionHeader
              className='border-none bg-activegray text-gray-300 px-5 rounded-t-xl hover:text-gray-400 hover:text-gray-300/90 text-base md:text-xl font-semibold py-5'
              onClick={() => handleOpen(accordion.id)}
            >
              {accordion.title}
            </AccordionHeader>
            <AccordionBody>
              <Checklist items={accordion.checklist} onToggle={(itemId) => toggleChecklistItem(accordion.id, itemId)} />
            </AccordionBody>
          </Accordion>
          <div className='bg-bgprimary mt-0 p-3 text-center cursor-pointer rounded-b-xl border border-x-0 border-b-0 border-gray-800 hover:bg-bgprimary/70 group'>
            <div className='flex items-center justify-center'>
              <p className='md:font-semibold text-gray-300 mr-2'>Go to Collection</p>
              <span className='inline-block transform transition-transform group-hover:translate-x-1'>
                <MoveRightIcon size={20} />
              </span>
            </div>
          </div>
        </div>
      ))}
    </>
  )
}
