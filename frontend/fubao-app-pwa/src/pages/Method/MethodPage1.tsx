import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { methodGetApi } from "../../store/api";

interface Method {
  title: string;
  subtitle: string;
  document: string;
}

const Title = styled.p`
  margin: 0.5rem 0.5rem;
  font-size: 2rem;
  font-weight: 600;
  color: #000000;
`;

const MethodPage1: React.FC = () => {
  const [method, setMethod] = useState<Method | null>(null); // method 상태
  const token = localStorage.getItem("token");

  useEffect(() => {
    const fetchMethods = async () => {
      try {
        const response = await methodGetApi(token);
        if (response && response.length > 0) {
          setMethod(response[0]); // 첫 번째 method를 상태로 설정
        }
      } catch (error) {
        console.error("API 호출 중 에러 발생:", error);
      }
    };

    fetchMethods();
  }, [token]);

  // method 상태를 사용하여 해당 데이터 렌더링
  return (
    <div>
      {method && (
        <>
          <Title>{method.title}</Title>
          <h2>{method.subtitle}</h2>
          <p>{method.document}</p>
          <img
            src="/pending_img.png"
            alt=""
            style={{ width: "80vw", maxWidth: "500px" }}
          />
        </>
      )}
    </div>
  );
};

export default MethodPage1;
