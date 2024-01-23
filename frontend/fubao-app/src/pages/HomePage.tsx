import Button from '@mui/joy/Button';
import { useNavigate } from 'react-router-dom';

function HomePage() {
  const navigate = useNavigate();

  const handleLoginClick = () => {
    navigate('/login');
  };

  const handleSignupClick = () => {
    navigate('/signup');
  };

  return (
    <div style={{
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      height: '100vh'
    }}>
      <p>로그인이랑 회원가입 가즈아</p>
      <Button sx={{ margin: 2 }} onClick={handleLoginClick}>Login</Button>
      <Button sx={{ margin: 2 }} onClick={handleSignupClick}>Signup</Button>
    </div>
  );
}

export default HomePage;
