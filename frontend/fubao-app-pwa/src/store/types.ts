export interface Profile {
    id: number;
    is_superuser: boolean;
    email: string;
    name: string;
    date_joined: string;
    nickname: string;
    age: number | null;
    date_of_birth: string | null;
    gender: string;
    profile_img: string;
    total_fish_count: number;
    total_schedules: number;
    latest_schedule_date: string | null;
  }
  