import { create } from 'zustand'

type AccordionData = {
  id: number
  title: string
  checklist: { id: number; label: string; checked: boolean; description?: string }[]
}

interface StoreState {
  accordionData: AccordionData[],
  tasksModalToggle: boolean,
}

export const useStore = create<StoreState>(() => ({
  accordionData: [],
  tasksModalToggle: false
}))
