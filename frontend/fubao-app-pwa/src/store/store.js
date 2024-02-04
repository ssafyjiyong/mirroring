import { create } from 'zustand'
import { devtools } from 'zustand/middleware'
import { currentUserApi } from './api'

const initialState = {
  profile: null,
  registered: false,
}

const store = (set) => ({
  ...initialState,
  loadProfile: async () => {
    try {
      const token = localStorage.getItem('token');

      if (token) {
        const profile = await currentUserApi(token);
        set({ profile });
      }
    } catch (error) {
      console.error(error);
    }
  },
  registered: false,
  setRegistered: () => set((state) => ({...state, registered: true})),
})

const useStore = create(
  process.env.NODE_ENV !== 'production' ? devtools(store) : store
)

export default useStore