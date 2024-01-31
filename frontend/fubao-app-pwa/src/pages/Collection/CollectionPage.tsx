import React from "react";
import "../../FontAwsome";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
import styled from "styled-components";

const InfoBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 0.4rem;
`;

const FishBox = styled.div`
  border-radius: 10px;
  background-color: white;
  width: 6rem;
  height: 6rem;
  box-shadow: 3px 5px 5px rgba(0, 0, 0, 0.1);
`;

const FishName = styled.p`
  font-size: 1rem;
  margin: 0.1rem;
`;

const CollectionPage = () => {
  return (
    <div
      style={{
        height: "100vh",
        padding: "1rem",
        paddingBottom: "2rem",
        backgroundColor: "#E3F2FD",
      }}
    >
      <p
        style={{
          fontWeight: 600,
          fontSize: "1.5rem",
          margin: "1rem 0.5rem 0.5rem",
        }}
      >
        도감리스트
      </p>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          margin: "1rem 0.5rem 0.8rem",
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
          <Link to="/detail/감성돔/1" style={{ textDecoration: "none" }}>
            <InfoBox>
              <FishBox>
                <FontAwesomeIcon icon="star" size="1x" color="#FFC107" />
                <FontAwesomeIcon
                  icon={["far", "star"]}
                  size="1x"
                  color="#FFC107"
                />
                <FontAwesomeIcon
                  icon={["far", "star"]}
                  size="1x"
                  color="#FFC107"
                />
                <img src="" alt="" />
              </FishBox>
              <FishName>감성돔</FishName>
            </InfoBox>
          </Link>
          <Link to="/detail/고등어/1" style={{ textDecoration: "none" }}>
            <InfoBox>
              <FishBox>
                <FontAwesomeIcon icon="star" size="1x" color="#FFC107" />
                <FontAwesomeIcon
                  icon={["far", "star"]}
                  size="1x"
                  color="#FFC107"
                />
                <FontAwesomeIcon
                  icon={["far", "star"]}
                  size="1x"
                  color="#FFC107"
                />
                <img src="" alt="" />
              </FishBox>
              <FishName>고등어</FishName>
            </InfoBox>
          </Link>
          <Link to="/detail/광어/1" style={{ textDecoration: "none" }}>
            <InfoBox>
              <FishBox>
                <FontAwesomeIcon icon="star" size="1x" color="#FFC107" />
                <FontAwesomeIcon
                  icon={["far", "star"]}
                  size="1x"
                  color="#FFC107"
                />
                <FontAwesomeIcon
                  icon={["far", "star"]}
                  size="1x"
                  color="#FFC107"
                />
                <img src="" alt="" />
              </FishBox>
              <FishName>광어</FishName>
            </InfoBox>
          </Link>
        </div>

        <div style={{ display: "flex", justifyContent: "center" }}>
          <Link to="/detail/농어/1" style={{ textDecoration: "none" }}>
            <InfoBox>
              <FishBox>
                <FontAwesomeIcon icon="star" size="1x" color="#FFC107" />
                <FontAwesomeIcon
                  icon={["far", "star"]}
                  size="1x"
                  color="#FFC107"
                />
                <FontAwesomeIcon
                  icon={["far", "star"]}
                  size="1x"
                  color="#FFC107"
                />
                <img src="" alt="" />
              </FishBox>
              <FishName>농어</FishName>
            </InfoBox>
          </Link>
          <Link to="/detail/전갱이/1" style={{ textDecoration: "none" }}>
            <InfoBox>
              <FishBox>
                <FontAwesomeIcon icon="star" size="1x" color="#FFC107" />
                <FontAwesomeIcon
                  icon={["far", "star"]}
                  size="1x"
                  color="#FFC107"
                />
                <FontAwesomeIcon
                  icon={["far", "star"]}
                  size="1x"
                  color="#FFC107"
                />
                <img src="" alt="" />
              </FishBox>
              <FishName>전갱이</FishName>
            </InfoBox>
          </Link>
          <Link to="/detail/숭어/1" style={{ textDecoration: "none" }}>
            <InfoBox>
              <FishBox>
                <FontAwesomeIcon icon="star" size="1x" color="#FFC107" />
                <FontAwesomeIcon
                  icon={["far", "star"]}
                  size="1x"
                  color="#FFC107"
                />
                <FontAwesomeIcon
                  icon={["far", "star"]}
                  size="1x"
                  color="#FFC107"
                />
                <img src="" alt="" />
              </FishBox>
              <FishName>숭어</FishName>
            </InfoBox>
          </Link>
        </div>

        <div style={{ display: "flex", justifyContent: "center" }}>
          <Link to="/detail/우럭/1" style={{ textDecoration: "none" }}>
            <InfoBox>
              <FishBox>
                <FontAwesomeIcon icon="star" size="1x" color="#FFC107" />
                <FontAwesomeIcon
                  icon={["far", "star"]}
                  size="1x"
                  color="#FFC107"
                />
                <FontAwesomeIcon
                  icon={["far", "star"]}
                  size="1x"
                  color="#FFC107"
                />
                <img src="" alt="" />
              </FishBox>
              <FishName>우럭</FishName>
            </InfoBox>
          </Link>
          <Link to="/detail/돌돔/2" style={{ textDecoration: "none" }}>
            <InfoBox>
              <FishBox>
                <FontAwesomeIcon icon="star" size="1x" color="#FFC107" />
                <FontAwesomeIcon icon="star" size="1x" color="#FFC107" />
                <FontAwesomeIcon
                  icon={["far", "star"]}
                  size="1x"
                  color="#FFC107"
                />
                <img src="" alt="" />
              </FishBox>
              <FishName>돌돔</FishName>
            </InfoBox>
          </Link>
          <Link to="/detail/참돔/2" style={{ textDecoration: "none" }}>
            <InfoBox>
              <FishBox>
                <FontAwesomeIcon icon="star" size="1x" color="#FFC107" />
                <FontAwesomeIcon icon="star" size="1x" color="#FFC107" />
                <FontAwesomeIcon
                  icon={["far", "star"]}
                  size="1x"
                  color="#FFC107"
                />
                <img src="" alt="" />
              </FishBox>
              <FishName>참돔</FishName>
            </InfoBox>
          </Link>
        </div>

        <div style={{ display: "flex" }}></div>

        <div style={{ display: "flex" }}></div>
      </div>
    </div>
  );
};

export default CollectionPage;
