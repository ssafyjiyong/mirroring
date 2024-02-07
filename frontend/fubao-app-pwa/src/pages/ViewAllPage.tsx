import React from "react";
import { Link } from "react-router-dom";
import { HomeIcon } from "../styles/globalStyles";
import styled from "styled-components";
import "../FontAwsome";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Container = styled.nav`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 90vh;
`;

const MyButton = styled.button`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  flex-grow: 1;
  border: 0;
  background-color: transparent;
  margin: 1em;
`;

const ButtonText = styled.span`
  margin-top: 0.5rem;
  min-width: 50px;
`;

const ViewAllPage = () => {
  return (
    <Container>
      <div style={{ display: "flex", flexDirection: "column" }}>
        <div style={{ display: "flex" }}>
        {/* 로그인 정보 토대로 닉네임 받아서 각 프로필 페이지로 이동 라우터 설정도 해야함 */}
          <Link to="/profile" style={{ textDecoration: "none" }}>
            <MyButton>
              <FontAwesomeIcon icon="user" size="3x" />
              <ButtonText>프로필</ButtonText>
            </MyButton>
          </Link>

          <Link to="/planmanage" style={{ textDecoration: "none" }}>
            <MyButton>
              <FontAwesomeIcon icon="calendar-day" size="3x" />
              <ButtonText>일정관리</ButtonText>
            </MyButton>
          </Link>

          <Link to="/collection" style={{ textDecoration: "none" }}>
            <MyButton>
              <FontAwesomeIcon icon="book" size="3x" />
              <ButtonText>도감</ButtonText>
            </MyButton>
          </Link>
        </div>

        <div style={{ display: "flex" }}>
          <Link to="/map" style={{ textDecoration: "none" }}>
            <MyButton>
              <FontAwesomeIcon icon="map" size="3x" />
              <ButtonText>지도</ButtonText>
            </MyButton>
          </Link>

          <Link to="/home#point" style={{ textDecoration: "none" }}>
            <MyButton>
              <FontAwesomeIcon icon="check" size="3x" />
              <ButtonText>포인트</ButtonText>
            </MyButton>
          </Link>

          <Link to="/home#method" style={{ textDecoration: "none" }}>
            <MyButton>
              <FontAwesomeIcon icon="clipboard-question" size="3x" />
              <ButtonText>방법</ButtonText>
            </MyButton>
          </Link>
        </div>

        <div style={{ display: "flex" }}>
          <Link to="/fishinfo" style={{ textDecoration: "none" }}>
            <MyButton>
              <FontAwesomeIcon icon="fish" size="3x" />
              <ButtonText>어종</ButtonText>
            </MyButton>
          </Link>

          <Link to="/prohibitioninfo" style={{ textDecoration: "none" }}>
            <MyButton>
              <FontAwesomeIcon icon="ban" size="3x" />
              <ButtonText>금어기</ButtonText>
            </MyButton>
          </Link>

          <Link to="/releaseinfo" style={{ textDecoration: "none" }}>
            <MyButton>
              <FontAwesomeIcon icon="arrow-rotate-left" size="3x" />
              <ButtonText>방생기준</ButtonText>
            </MyButton>
          </Link>
        </div>

        <div
          style={{
            display: "flex",
            justifyContent: "center",
            marginTop: "2rem",
          }}
        >
          <span>로그아웃</span>
          <span>　|　</span>
          <span style={{ color: "#DD0C0C" }}>회원탈퇴</span>
        </div>
      </div>

      <Link to="/">
        <HomeIcon>
          <FontAwesomeIcon icon="home" />
        </HomeIcon>
      </Link>
    </Container>
  );
};

export default ViewAllPage;
