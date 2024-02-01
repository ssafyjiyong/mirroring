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
          <Link
            to="/detail/감성돔/1"
            style={{ textDecoration: "none", color: "black" }}
          >
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
                <FontAwesomeIcon
                  icon={["far", "star"]}
                  size="1x"
                  color="#FFC107"
                />
                <div style={{ display:"flex", justifyContent:"center", alignItems:"center" }}>
                <img 
                src="/imgs/fish_silhouette/gamsungdom.png" 
                alt="gamsungdom" 
                style={{ width: "5.5rem", borderRadius:"10px" }}
                />
                </div>
              </FishBox>
              <FishName>감성돔</FishName>
            </InfoBox>
          </Link>
          <Link
            to="/detail/고등어/1"
            style={{ textDecoration: "none", color: "black" }}
          >
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
                <FontAwesomeIcon
                  icon={["far", "star"]}
                  size="1x"
                  color="#FFC107"
                />
                <div style={{ display:"flex", justifyContent:"center", alignItems:"center" }}>
                <img 
                src="/imgs/fish_silhouette/godeunguh.png" 
                alt="godeunguh" 
                style={{ width: "5.5rem", borderRadius:"10px" }}
                />
                </div>
              </FishBox>
              <FishName>고등어</FishName>
            </InfoBox>
          </Link>
          <Link
            to="/detail/광어/1"
            style={{ textDecoration: "none", color: "black" }}
          >
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
                <FontAwesomeIcon
                  icon={["far", "star"]}
                  size="1x"
                  color="#FFC107"
                />
                <div style={{ display:"flex", justifyContent:"center", alignItems:"center" }}>
                <img 
                src="/imgs/fish_silhouette/kwanguh.png" 
                alt="kwanguh" 
                style={{ width: "5.5rem", borderRadius:"10px" }}
                />
                </div>
              </FishBox>
              <FishName>광어</FishName>
            </InfoBox>
          </Link>
        </div>

        <div style={{ display: "flex", justifyContent: "center" }}>
          <Link
            to="/detail/농어/1"
            style={{ textDecoration: "none", color: "black" }}
          >
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
                <FontAwesomeIcon
                  icon={["far", "star"]}
                  size="1x"
                  color="#FFC107"
                />
                <div style={{ display:"flex", justifyContent:"center", alignItems:"center" }}>
                <img 
                src="/imgs/fish_silhouette/nonguh.png" 
                alt="nonguh" 
                style={{ width: "5.5rem", borderRadius:"10px" }}
                />
                </div>
              </FishBox>
              <FishName>농어</FishName>
            </InfoBox>
          </Link>
          <Link
            to="/detail/전갱이/1"
            style={{ textDecoration: "none", color: "black" }}
          >
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
                <FontAwesomeIcon
                  icon={["far", "star"]}
                  size="1x"
                  color="#FFC107"
                />
                <div style={{ display:"flex", justifyContent:"center", alignItems:"center" }}>
                <img 
                src="/imgs/fish_silhouette/jeongang.png" 
                alt="jeongang" 
                style={{ width: "5.5rem", borderRadius:"10px" }}
                />
                </div>
              </FishBox>
              <FishName>전갱이</FishName>
            </InfoBox>
          </Link>
          <Link
            to="/detail/숭어/1"
            style={{ textDecoration: "none", color: "black" }}
          >
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
                <FontAwesomeIcon
                  icon={["far", "star"]}
                  size="1x"
                  color="#FFC107"
                />
                <div style={{ display:"flex", justifyContent:"center", alignItems:"center" }}>
                <img 
                src="/imgs/fish_silhouette/sunguh.png" 
                alt="sunguh" 
                style={{ width: "5.5rem", borderRadius:"10px" }}
                />
                </div>
              </FishBox>
              <FishName>숭어</FishName>
            </InfoBox>
          </Link>
        </div>

        <div style={{ display: "flex", justifyContent: "center" }}>
          <Link
            to="/detail/우럭/1"
            style={{ textDecoration: "none", color: "black" }}
          >
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
                <FontAwesomeIcon
                  icon={["far", "star"]}
                  size="1x"
                  color="#FFC107"
                />
                <div style={{ display:"flex", justifyContent:"center", alignItems:"center" }}>
                <img 
                src="/imgs/fish_silhouette/wuroek.png" 
                alt="wuroek" 
                style={{ width: "5.5rem", borderRadius:"10px" }}
                />
                </div>
              </FishBox>
              <FishName>우럭</FishName>
            </InfoBox>
          </Link>
          <Link
            to="/detail/돌돔/2"
            style={{ textDecoration: "none", color: "black" }}
          >
            <InfoBox>
              <FishBox>
                <FontAwesomeIcon icon="star" size="1x" color="#FFC107" />
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
                <div style={{ display:"flex", justifyContent:"center", alignItems:"center" }}>
                <img 
                src="/imgs/fish_silhouette/doldom.png" 
                alt="doldom" 
                style={{ width: "5.5rem", borderRadius:"10px" }}
                />
                </div>
              </FishBox>
              <FishName>돌돔</FishName>
            </InfoBox>
          </Link>
          <Link
            to="/detail/참돔/2"
            style={{ textDecoration: "none", color: "black" }}
          >
            <InfoBox>
              <FishBox>
                <FontAwesomeIcon icon="star" size="1x" color="#FFC107" />
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
                <div style={{ display:"flex", justifyContent:"center", alignItems:"center" }}>
                <img 
                src="/imgs/fish_silhouette/chamdom.png" 
                alt="chamdom" 
                style={{ width: "5.5rem", borderRadius:"10px" }}
                />
                </div>
              </FishBox>
              <FishName>참돔</FishName>
            </InfoBox>
          </Link>
        </div>

        <div style={{ display: "flex", justifyContent: "center" }}>
          <Link to="/detail/쥐노래미/2" style={{ textDecoration: "none", color: "black" }}>
            <InfoBox>
              <FishBox>
                <FontAwesomeIcon icon="star" size="1x" color="#FFC107" />
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
                <div style={{ display:"flex", justifyContent:"center", alignItems:"center" }}>
                <img 
                src="/imgs/fish_silhouette/gnoraemi.png" 
                alt="gnoraemi" 
                style={{ width: "5.5rem", borderRadius:"10px" }}
                />
                </div>
              </FishBox>
              <FishName>쥐노래미</FishName>
            </InfoBox>
          </Link>
          <Link to="#" style={{ textDecoration: "none", color: "black" }}>
            <InfoBox>
              <FishBox>
                <FontAwesomeIcon icon="star" size="1x" color="#FFC107" />
                <FontAwesomeIcon icon="star" size="1x" color="#FFC107" />
                <FontAwesomeIcon icon="star" size="1x" color="#FFC107" />
                <FontAwesomeIcon
                  icon={["far", "star"]}
                  size="1x"
                  color="#FFC107"
                />
                <img src="" alt="" />
              </FishBox>
              <FishName>???</FishName>
            </InfoBox>
          </Link>
          <Link to="#" style={{ textDecoration: "none", color: "black" }}>
            <InfoBox>
              <FishBox>
                <FontAwesomeIcon icon="star" size="1x" color="#FFC107" />
                <FontAwesomeIcon icon="star" size="1x" color="#FFC107" />
                <FontAwesomeIcon icon="star" size="1x" color="#FFC107" />
                <FontAwesomeIcon icon="star" size="1x" color="#FFC107" />
                <img src="" alt="" />
              </FishBox>
              <FishName>???</FishName>
            </InfoBox>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default CollectionPage;
