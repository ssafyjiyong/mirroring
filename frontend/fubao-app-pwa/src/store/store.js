import { create } from 'zustand'
import { devtools } from 'zustand/middleware'

const store = (set) => ({
  registered: false,
  setRegistered: () => set((state) => ({...state, registered: true})),
})

const useStore = create(
  process.env.NODE_ENV !== 'production' ? devtools(store) : store
)

export default useStore