import React from 'react';
import Button from '@mui/joy/Button';
// import { useNavigate } from 'react-router-dom';
import Initial from '../components/Initial/Initial';
import Login from '../components/Login/Login'; // 가정된 로그인 컴포넌트

function HomePage() {
  // const navigate = useNavigate();

  // const handleLoginClick = () => {
  //   navigate('/login');
  // };

  const isLoggedIn = false; // 로그인 상태를 확인하는 로직 (가정)

  return (
    <div style={{
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      height: '100vh'
    }}>
      {isLoggedIn ? <Initial /> : <Login />}
    </div>
  );
}

export default HomePage;
