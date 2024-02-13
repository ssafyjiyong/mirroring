import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { methodGetApi } from "../../store/api";
import { useQuery } from "@tanstack/react-query";

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

const AlignDiv = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

const MethodPage1 = () => {
  const { data: method, isError, isLoading } = useQuery<Method>({
    queryKey: ["methodData"], // Pass query key as part of the options object
    queryFn: async () => {
      const token = localStorage.getItem("token");
      const response = await methodGetApi(token);
      return response[0];
    },
  });

  if (isLoading) {
    return <p>Loading...</p>;
  }

  if (isError || !method) {
    return <p>데이터를 가져오지 못해습니다.</p>;
  }

  // method 상태를 사용하여 해당 데이터 렌더링
  return (
    <div>
      {method && (
        <>
          <Title>{method.title}</Title>
          <h2>{method.subtitle}</h2>
          <p>{method.document}</p>
          <AlignDiv>
          <img
            src="/pending_img.png"
            alt=""
            style={{ width: "80vw", maxWidth: "500px" }}
          />
          </AlignDiv>
        </>
      )}
    </div>
  );
};

export default MethodPage1;
