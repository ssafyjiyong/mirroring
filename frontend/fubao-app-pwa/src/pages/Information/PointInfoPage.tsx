import React from "react";
import styled from "styled-components";
import "../../FontAwsome";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const AlignDiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const WhiteBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: white;
  border-radius: 15px;
  width: 8rem;
  height: 8rem;
  margin: 0.8rem 0.5rem;
  box-shadow: 3px 5px 5px rgba(0, 0, 0, 0.1);
`;

const BoxText = styled.span`
  font-size: 1rem;
  font-weight: 400;
  padding: 0.1rem;
`;

const PointInfoPage = () => {
  return (
    <div
      style={{ padding: "1rem", backgroundColor: "#E3F2FD", height: "100vh" }}
    >
      <h2 style={{ textAlign: "center" }}>(CANCEL)낚시 포인트</h2>
      <AlignDiv>
        <div>
          <WhiteBox>
            <FontAwesomeIcon icon="hat-cowboy-side" size="3x" color="#686868" />
            <BoxText>방파제</BoxText>
          </WhiteBox>
          <WhiteBox>
            {" "}
            <FontAwesomeIcon icon="hat-cowboy-side" size="3x" color="#686868" />
            <BoxText>갯바위</BoxText>
          </WhiteBox>
        </div>
        <div>
          <WhiteBox>
            {" "}
            <FontAwesomeIcon icon="hat-cowboy-side" size="3x" color="#686868" />
            <BoxText>선착장</BoxText>
          </WhiteBox>
          <WhiteBox>
            {" "}
            <FontAwesomeIcon icon="hat-cowboy-side" size="3x" color="#686868" />
            <BoxText>선상</BoxText>
          </WhiteBox>
        </div>
      </AlignDiv>
    </div>
  );
};

export default PointInfoPage;
