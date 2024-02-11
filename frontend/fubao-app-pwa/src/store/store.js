import { create } from 'zustand'
import { devtools, persist, createJSONStorage } from 'zustand/middleware'
import { currentUserApi, scheduleFetchApi } from './api'

const initialState = {
  profile: null,
  schedule: null,
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
  loadSchedule: async () => {
    try {
      const token = localStorage.getItem('token');
      if (token) {
        const schedule = await scheduleFetchApi(token); // 단일 일정 객체를 로드
        set({ schedule });
      }
    } catch (error) {
      console.error(error);
    }
  },
  clearSchedule: () => set({ schedule: null }),
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