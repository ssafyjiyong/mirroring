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
import "../FontAwsome";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useNavigate } from "react-router-dom";

function HomePage() {
  useEffect(() => {
    // URL의 해시(#) 부분을 사용하여 해당 ID를 가진 요소로 스크롤
    if (window.location.hash) {
      let id = window.location.hash.substring(1); // URL에서 앵커(#) 제거
      let element = document.getElementById(id);
      if (element) {
        element.scrollIntoView();
      }
    }
  }, []);

  const navigate = useNavigate();

  const goToProfile = () => {
    navigate("/profile");
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
            style={{ width: "2rem", height: "2rem", margin:"0rem 0.3rem" }}
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
          <FontAwesomeIcon
            icon="bell"
            color="#778a9b"
            style={{
              margin: "0.3rem 0.8rem 0.1rem 0.3rem",
              fontSize: "1.4rem",
            }}
          />
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
    </div>
  );
}

export default HomePage;
