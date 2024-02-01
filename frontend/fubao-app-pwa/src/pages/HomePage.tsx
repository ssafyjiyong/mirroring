import React, { useState, useEffect } from "react";
import EntryLoading from "../components/Entry/EntryLoading";
import Foryou from "../components/Main/Foryou";
import Recommendation from "../components/Main/Recommendation";
import CameraOpen from "../components/Main/CameraOpen";
import Method from "../components/Main/Method";
import Method1 from "../components/Main/Method1";
import Method2 from "../components/Main/Method2";
import Point from "../components/Main/Point";
import Point1 from "../components/Main/Point1";
import Point2 from "../components/Main/Point2";
import Point3 from "../components/Main/Point3";
import Etiquette from "../components/Main/Etiquette";
import "../FontAwsome";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function HomePage() {
  const [showLoading, setShowLoading] = useState(true); // EntryLoading 컴포넌트를 보여줄지 결정하는 상태

  useEffect(() => {
    // URL의 해시(#) 부분을 사용하여 해당 ID를 가진 요소로 스크롤
    if (window.location.hash) {
      let id = window.location.hash.substring(1); // URL에서 앵커(#) 제거
      let element = document.getElementById(id);
      if (element) {
        element.scrollIntoView();
      }
    }

    // 1초 후에 EntryLoading 컴포넌트를 숨김
    const timer = setTimeout(() => {
      setShowLoading(false);
    }, 0);

    // 컴포넌트가 언마운트될 때 타이머를 정리
    return () => clearTimeout(timer);
  }, []);

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
      <Method id="method" />
      <Method1 />
      <Method2 />
      <Point id="point" />
      <Point1 />
      <Point2 />
      <Point3 />
      {/* showLoading 상태에 따라 EntryLoading 표시 */}
      {showLoading && <EntryLoading />}{" "}
    </div>
  );
}

export default HomePage;
