import { create } from 'zustand'
import { devtools, persist, createJSONStorage } from 'zustand/middleware'
import { currentUserApi } from './api'

const initialState = {
  profile: null,
}

const store = (set) => ({
  ...initialState,
  loadProfile: async () => {
    try {
      const token = localStorage.getItem('token');

      if (token) {
        const profile = await currentUserApi(token);
        set({ profile });
        console.log(profile);
      }
    } catch (error) {
      console.error(error);
    }
  },
  resetStore: () => set({ ...initialState }),
})

const useStore = create(
  persist(store, {
    name: 'user', // persist 미들웨어에 대한 설정: 스토어의 이름
    // 'getStorage' 대신 'storage'를 사용하여 sessionStorage 또는 localStorage 선택 (예제에서는 sessionStorage를 사용)
    storage: createJSONStorage(() => sessionStorage),
  }),
  process.env.NODE_ENV !== 'production' ? devtools(store) : store
)

export default useStore