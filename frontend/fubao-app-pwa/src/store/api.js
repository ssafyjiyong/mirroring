import axios from "axios";

const API_URL = "http://127.0.0.1:8000";
const API_URL_FLASK = "http://54.180.108.229:5000";

// GET 요청 API
export const currentUserApi = async (token) => {
  try {
    const response = await axios.get(`${API_URL}/user/profile/`, {
      headers: {
        Authorization: `Token ${token}`,
        "Content-Type": "application/json",
      },
    });
    return response.data;
  } catch (error) {
    console.error("An error occurred during the API call:", error.response ? error.response.data : error.message);
    throw new Error("Failed to fetch user profile");
  }
};

export const mapInfoApi = async () => {
  try {
    // axios.get 요청을 시도합니다.
    const response = await axios.get(`${API_URL}/location/map/`);
    return response.data;
  } catch (error) {
    // 에러 처리 로직
    console.error("An error occurred during the API call:", error);
    throw new Error("Failed to fetch map info");
  }
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
    console.log(error.response.data.email);
    console.log(error.response.data.nickname);
    throw error; // 오류 발생 시 예외 처리
  }
};

export const loginApi = async ({ email, password1 }) => {
  try {
    const response = await axios.post(`${API_URL}/user/login/`, {
      email: email,
      password: password1,
    });

    // 로그인에 성공하면 로컬 스토리지에 토큰 저장
    localStorage.setItem("token", response.data.key);

    return response.data;
  } catch (error) {
    console.log(error);
    throw error;
  }
};

export const logoutApi = async (token) => {
  try {
    const response = await axios.post(`${API_URL}/user/logout/`, {
      headers: {
        Authorization: `Token ${token}`,
      },
    });

    return response.data;
  } catch (error) {
    throw error;
  }
};

export const planRegisterApi = async ({
  date,
  location,
  area,
  method,
  done,
}) => {
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

export const classifyApiCreditCard = async (file) => {
  const formData = new FormData();
  formData.append("file", file);
  formData.append("object", "credit_card");
  try {
    const response = await axios.post(`${API_URL_FLASK}/predict`, formData, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });
    console.log(response.data)
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const classifyApiCigarette = async (file) => {
  try {
    const response = await axios.post(`${API_URL_FLASK}/predict`, {
      file: file,
      object: "cigarette",
    });

    return response.data;
  } catch (error) {
    throw error;
  }
};

export const classifyApiNone = async (file) => {
  try {
    const response = await axios.post(`${API_URL_FLASK}/predict`, {
      file: file,
      object: "none",
    });

    return response.data;
  } catch (error) {
    throw error;
  }
};

// PUT 요청 API

//DELETE 요청 API
