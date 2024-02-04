import axios from 'axios';

const API_URL = "http://127.0.0.1:8000";

// GET 요청 API
// 임시
export const fetchTodoList = async () => {
    const response = await fetch('https://example.com/todos');
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
      return response.data;
    } catch (error) {
      throw error;
    }
  };


// PUT 요청 API

//DELETE 요청 API
