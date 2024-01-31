import React from "react";
import "../../FontAwsome";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styled from "styled-components";

const InfoBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 0.4em;
`;

const FishBox = styled.div`
  border-radius: 10px;
  background-color: white;
  width: 6em;
  height: 6em;
`;

const FishName = styled.p`
  font-size: 1em;
  margin: 0.1em;
  `;

const CollectionPage = () => {
  return (
    <div
      style={{
        height: "100vh",
        padding: "1em",
        paddingBottom: "2em",
        backgroundColor: "#E3F2FD",
      }}
    >
      <p
        style={{
          fontWeight: 600,
          fontSize: "1.5em",
          margin: "1em 0.5em 0.5em",
        }}
      >
        도감리스트
      </p>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          margin: "1em 0.5em 0.8em",
        }}
      >
        <div>
          <FontAwesomeIcon icon="fish" size="1x" color="#1565C0" />
          <span> 도감 완성도</span>
        </div>
        <span>4/10</span>
      </div>

      <div style={{ display: "flex", flexDirection: "column" }}>
        <div style={{ display: "flex", justifyContent: "center" }}>
          <InfoBox>
            <FishBox>
              <img src="" alt="" />
            </FishBox>
            <FishName>감성돔</FishName>
          </InfoBox>
          <InfoBox>
            <FishBox>
              <img src="" alt="" />
            </FishBox>
            <FishName>고등어</FishName>
          </InfoBox>
          <InfoBox>
            <FishBox>
              <img src="" alt="" />
            </FishBox>
            <FishName>광어</FishName>
          </InfoBox>
        </div>

        <div style={{ display: "flex", justifyContent: "center" }}>
          <InfoBox>
            <FishBox>
              <img src="" alt="" />
            </FishBox>
            <FishName>농어</FishName>
          </InfoBox>
          <InfoBox>
            <FishBox>
              <img src="" alt="" />
            </FishBox>
            <FishName>전갱이</FishName>
          </InfoBox>
          <InfoBox>
            <FishBox>
              <img src="" alt="" />
            </FishBox>
            <FishName>숭어</FishName>
          </InfoBox>
        </div>

        <div style={{ display: "flex", justifyContent: "center" }}>
          <InfoBox>
            <FishBox>
              <img src="" alt="" />
            </FishBox>
            <FishName>우럭</FishName>
          </InfoBox>
          <InfoBox>
            <FishBox>
              <img src="" alt="" />
            </FishBox>
            <FishName>돌돔</FishName>
          </InfoBox>
          <InfoBox>
            <FishBox>
              <img src="" alt="" />
            </FishBox>
            <FishName>참돔</FishName>
          </InfoBox>
        </div>

        <div style={{ display: "flex" }}></div>

        <div style={{ display: "flex" }}></div>
      </div>
    </div>
  );
};

export default CollectionPage;