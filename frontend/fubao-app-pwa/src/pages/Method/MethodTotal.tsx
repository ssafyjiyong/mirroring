import React, { useEffect, useState  } from 'react'
import Method1 from '../../components/Main/Method1'
import Method2 from '../../components/Main/Method2'
import Method3 from '../../components/Main/Method3'
import Method4 from '../../components/Main/Method4'
import { methodGetApi } from '../../store/api'

const MethodTotal = () => {
  const [methods, setMethods] = useState([]);
  const token = localStorage.getItem("token");

  useEffect(() => {
    const fetchMethods = async () => {
      try {
        const response = await methodGetApi(token);
        setMethods(response)
        console.log(response)
      } catch (error) {
        console.error("API 호출 중 에러 발생:", error);
      }
    };

    fetchMethods();
  }, [token]);

  return (
    <div style={{ padding:"1rem 1rem 2rem", backgroundColor:"#E3F2FD" }}>
        <Method1 />
        <Method2 />
        <Method3 />
        <Method4 />
    </div>
  )
}

export default MethodTotal