import React from "react";
// import { useNavigate } from 'react-router-dom';
import Initial from "../components/Initial/Initial";
import BottomNav from "../components/BottomNav";

// import Login from '../components/Login/Login'; // 가정된 로그인 컴포넌트

function HomePage() {
  // const navigate = useNavigate();

  // const handleLoginClick = () => {
  //   navigate('/login');
  // };

  const isLoggedIn = false; // 로그인 상태를 확인하는 로직 (가정)

  return (
    <div        
      style={{
        height: "100vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
        <div style={{ flex: 1 }}></div>
        <p style={{ alignSelf: "center" }}>테스트</p>
        {/* {isLoggedIn ? <Initial /> : <Login />} */}
        {isLoggedIn && <Initial />}
        <div style={{ flex: 1 }}></div>
      <BottomNav />
    </div>
  );
}

export default HomePage;
