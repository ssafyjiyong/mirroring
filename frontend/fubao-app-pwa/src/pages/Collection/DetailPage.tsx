import React from "react";
import { useParams } from "react-router-dom";
import "../../FontAwsome";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styled from "styled-components";

const FishBox = styled.div`
  border: 1px solid black;
  height: 10rem;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Circle = styled.div`
  border: 1px solid black;
  height: 6rem;
  width: 6rem;
  border-radius: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const DetailPage = () => {
  const { fishname } = useParams(); // fishname 파라미터 가져오기
  const { level } = useParams(); // level 파라미터 가져오기

  return (
    <div style={{ padding: "1rem" }}>
      <h2>별 반복 수: {level}</h2>
      <FishBox>
        <div>이미지</div>
      </FishBox>
      <h2 style={{ textAlign: "center", margin: "0.5rem" }}>{fishname}</h2>
      <p style={{ fontSize: "1.3rem", fontWeight: "300", margin: "0" }}>MY</p>
      <div style={{ display: "flex", justifyContent: "space-around" }}>
        <div style={{ textAlign: "center" }}>
          <Circle>3</Circle>
          <span>잡은 수</span>
        </div>
        <div style={{ textAlign: "center" }}>
          <Circle>22cm</Circle>
          <span>최대 길이</span>
        </div>
      </div>
      <hr />
      정보 나타나는곳
    </div>
  );
};

export default DetailPage;
