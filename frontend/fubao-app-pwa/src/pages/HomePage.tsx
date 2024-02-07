import React, { useEffect } from "react";
import Foryou from "../components/Main/Foryou";
import Recommendation from "../components/Main/Recommendation";
import CameraOpen from "../components/Main/CameraOpen";
import Method1 from "../components/Main/Method1";
import Method2 from "../components/Main/Method2";
import Method3 from "../components/Main/Method3";
import Method4 from "../components/Main/Method4";
import Point1 from "../components/Main/Point1";
import Point2 from "../components/Main/Point2";
import Point3 from "../components/Main/Point3";
import Point4 from "../components/Main/Point4";
import Etiquette from "../components/Main/Etiquette";
import Swal from "sweetalert2";
import "../FontAwsome";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useNavigate } from "react-router-dom";
import Survey from "../components/Modal/Survey";
import Review from "../components/Modal/Review";
import useStore from "../store/store";
import { logoutApi } from "../store/api";
import { ProfileType } from "../store/types";

function HomePage() {
  const { profile } = useStore() as { profile: ProfileType | null };
  const { loadProfile, resetStore } = useStore();

  useEffect(() => {
    // URL의 해시(#) 부분을 사용하여 해당 ID를 가진 요소로 스크롤
    if (window.location.hash) {
      let id = window.location.hash.substring(1); // URL에서 앵커(#) 제거
      let element = document.getElementById(id);
      if (element) {
        element.scrollIntoView();
      }
    }
    if (localStorage.getItem("token")) {
      loadProfile();
    }
  }, []);

  const logout = async () => {
    const token = localStorage.getItem('token');
    if (token) {
      try {
        await logoutApi(token); // 로그아웃 API 호출
        localStorage.removeItem('token'); // 로컬 스토리지에서 토큰 삭제
        resetStore(); // 스토어를 초기 상태로 재설정
      } catch (error) {
        console.error('로그아웃 실패:', error);
        // 오류 처리 로직
      }
    }
  }

  const navigate = useNavigate();

  const logoutConfirm = () => {
    Swal.fire({
      title: "로그아웃",
      text: "정말로 로그아웃 하시겠습니까?",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "네",
      cancelButtonText: "아니요",
    }).then(result => {
      if (result.isConfirmed) {
        logout();
        navigate("/introduction")
      }
    });
  }

  const goToProfile = () => {
    navigate("/profile");
  };

  const goToLogin = () => {
    navigate("/login");
  };

  return (
    <div
      style={{
        height: "auto",
        padding: "1rem",
        paddingBottom: "2rem",
        backgroundColor: "#E3F2FD",
      }}
    >
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <img
            src="/favicon_io/android-chrome-192x192.png"
            alt="logo"
            style={{ width: "2rem", height: "2rem", margin: "0rem 0.3rem" }}
          />
          <span
            style={{
              fontWeight: 600,
              fontSize: "1.5rem",
              color: "#5D7A93",
            }}
          >
            FUBAO
          </span>

        </div>
        <div>
          <FontAwesomeIcon
            icon="user"
            color="#778a9b"
            style={{ margin: "0.3rem 1rem 0.1rem 0.3rem", fontSize: "1.4rem" }}
            onClick={goToProfile}
          />
          {profile ? (
            <FontAwesomeIcon
              icon="right-from-bracket"
              color="#778a9b"
              style={{
                margin: "0.3rem 0.8rem 0.1rem 0.3rem",
                fontSize: "1.4rem",
              }}
              onClick={logoutConfirm}
            />
          ) : (
            <FontAwesomeIcon
              icon="right-to-bracket"
              color="#778a9b"
              style={{
                margin: "0.3rem 0.8rem 0.1rem 0.3rem",
                fontSize: "1.4rem",
              }}
              onClick= {goToLogin}
            />
          )}
        </div>
      </div>
      <Foryou />
      <CameraOpen />
      <Recommendation />
      <Etiquette />
      <Method1 id="method" />
      <Method2 />
      <Method3 />
      <Method4 />
      <Point1 id="point" />
      <Point2 />
      <Point3 />
      <Point4 />

      {/* 사전설문 모달 */}
      {/* <Survey
        open={open}
        onClose={() => setOpen(false)}
        selectedDate={selectedDate}
        setSelectedDate={setSelectedDate}
        handleSubmit={handleSubmit}
      /> */}

      {/* 리뷰 모달 */}
      {/* <Review
        open={open}
        onClose={() => setOpen(false)}
        selectedDate={selectedDate}
        setSelectedDate={setSelectedDate}
        handleSubmit={handleSubmit}
      /> */}
    </div>
  );
}

export default HomePage;
