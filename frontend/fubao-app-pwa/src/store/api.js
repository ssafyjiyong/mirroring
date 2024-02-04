import axios from 'axios';

const API_URL = "http://127.0.0.1:8000";

// GET 요청 API
export const currentUserApi = async (token) => {
    const response = await fetch(`${API_URL}/user/profile/`, {
      headers: {
        'Authorization': `Token ${token}`,
        'Content-Type': 'application/json',
      },
    });
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    return response.json();
  };

// POST 요청 API
export const signupApi = async ({ email, password1, password2, nickname }) => {
  try {
    const response = await axios.post(`${API_URL}/user/register/`, {
      email,
      password1,
      password2,
      nickname,
    });
    return response.data; // 회원가입 성공 시 응답 데이터 반환
  } catch (error) {
    throw error; // 오류 발생 시 예외 처리
  }
};

export const loginApi = async ({email, password1}) => {
  try {
    const response = await axios.post(`${API_URL}/user/login/`, {
      email: email,
      password: password1,
    });

    // 로그인에 성공하면 로컬 스토리지에 토큰 저장
    localStorage.setItem('token', response.data.key);

    return response.data;
  } catch (error) {
    throw error;
  }
};
  export const planRegisterApi = async ({ date, location, area, method, done }) => {
    try {
      const response = await axios.post(`${API_URL}/schedule/`, {
        user: 1,
        date,
        location,
        area,
        method,
        done,
      });
      return response.data;
    } catch (error) {
      throw error;
    }
  };

// PUT 요청 API

//DELETE 요청 API
