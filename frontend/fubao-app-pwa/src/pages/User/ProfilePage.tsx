import React from "react";
import "../../FontAwsome";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styled from "styled-components";

const Circle = styled.div`
  border: 1px solid black;
  height: 5.5rem;
  width: 5.5rem;
  border-radius: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 0.5rem;
`;

const ProfilePage = () => {
  return (
    <div style={{ padding: "1rem" }}>
      {/* 사용자 정보 */}
      <div
        style={{
          padding: "3rem 1rem",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <div
          style={{
            border: "1px solid black",
            borderRadius: "50%",
            backgroundColor: "#E8EAE9",
            width: "12rem",
            height: "12rem",
          }}
        >
          <img src="" alt="" />
        </div>
        <div style={{ display: "flex", alignItems: "center" }}>
          <p
            style={{
              fontSize: "1.5rem",
              fontWeight: "bold",
              margin: "0.5rem",
              marginBottom: "0",
            }}
          >
            닉네임 들어가는 공간
          </p>
          <FontAwesomeIcon
            icon="gear"
            size="1x"
            color="#969696"
            style={{ paddingTop: "0.8rem" }}
          />
        </div>
        <div style={{ color: "#969696" }}>이메일 들어가는 공간</div>
      </div>

      {/* 대시보드 */}
      <p style={{ marginTop:"0" }}>Dashboard</p>
      <div style={{ display: "flex", justifyContent: "space-around" }}>
        <div style={{ textAlign: "center" }}>
          <Circle>17</Circle>
          <span>출조 횟수</span>
        </div>
        <div style={{ textAlign: "center" }}>
          <Circle>8</Circle>
          <span>잡은 물고기 수</span>
        </div>
        <div style={{ textAlign: "center" }}>
          <Circle>2024<br/>01.24</Circle>
          <span>마지막 낚시일</span>
        </div>
      </div>

      <div
        style={{
          display: "flex",
          justifyContent: "center",
          marginTop: "5rem",
        }}
      >
        <span>로그아웃</span>
        <span>　|　</span>
        <span style={{ color: "#DD0C0C" }}>회원탈퇴</span>
      </div>
    </div>
  );
};

export default ProfilePage;
