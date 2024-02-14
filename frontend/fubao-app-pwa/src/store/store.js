import { create } from "zustand";
import { devtools, persist, createJSONStorage } from "zustand/middleware";
import { currentUserApi, scheduleFetchApi, scheduleDoneApi } from "./api";

const initialState = {
  profile: null,
  schedule: null,
};

const store = (set) => ({
  ...initialState,
  loadProfile: async () => {
    try {
      const token = localStorage.getItem("token");

      if (token) {
        const profile = await currentUserApi(token);
        set({ profile });
        console.log(profile);
      }
    } catch (error) {
      console.error("profile:", error);
    }
  },
  loadSchedule: async () => {
    try {
      const token = localStorage.getItem("token");
      if (token) {
        const schedule = await scheduleFetchApi(token); // 단일 일정 객체를 로드
        console.log(`일정 불러오기: ${JSON.stringify(schedule)}`);

        const currentTime = new Date();
        const scheduleDate = new Date(schedule.date);

        // 시간 정보를 제거하여 단순히 날짜만 비교
        currentTime.setHours(0, 0, 0, 0);
        scheduleDate.setHours(0, 0, 0, 0);

        if (schedule.id && currentTime.getTime() > scheduleDate.getTime()) {
          const pk = schedule.id;
          scheduleDoneApi({ token, pk });
          // 로컬 저장소에서 스케줄 정보 삭제
          set({ schedule: null });
          console.log(`일정 삭제됨`);
        } else {
          set({ schedule });
        }
      }
    } catch (error) {
      console.error("schedule:", error);
      set({ schedule: null });
      console.log("일정 등록 안되어 있으면 에러뜸. 정상임 걱정 ㄴㄴ.");
    }
  },
  clearSchedule: () => set({ schedule: null }),
  resetStore: () => set({ ...initialState }),
});

const useStore = create(
  persist(store, {
    name: "user", // persist 미들웨어에 대한 설정: 스토어의 이름
    // 'getStorage' 대신 'storage'를 사용하여 sessionStorage 또는 localStorage 선택 (예제에서는 sessionStorage를 사용)
    storage: createJSONStorage(() => sessionStorage),
  }),
  process.env.NODE_ENV !== "production" ? devtools(store) : store
);

export default useStore;
