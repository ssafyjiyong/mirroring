import React, { useEffect, useState } from "react";
import "../../FontAwsome";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { myFishApi } from "../../store/api";
import { useQuery } from "@tanstack/react-query";

interface FishInfo {
  name: string;
  image: string;
  link: string;
  level: number;
}

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

// 물고기정보
// 1:참돔
// 2:농어
// 3:전갱이
// 4:숭어
// 5:고등어
// 6:광어
// 7:우럭
// 8:감성돔
// 9:돌돔
// 10:쥐노래미

// 물고기 정보 배열
const fishInfos = [
  {
    name: "참돔",
    image: "/imgs/fish_silhouette/chamdom.png",
    link: "/detail/1",
    level: 2,
  },
  {
    name: "농어",
    image: "/imgs/fish_silhouette/nonguh.png",
    link: "/detail/2",
    level: 1,
  },
  {
    name: "전갱이",
    image: "/imgs/fish_silhouette/jeongang.png",
    link: "/detail/3",
    level: 1,
  },
  {
    name: "숭어",
    image: "/imgs/fish_silhouette/sunguh.png",
    link: "/detail/4",
    level: 1,
  },
  {
    name: "고등어",
    image: "/imgs/fish_silhouette/godeunguh.png",
    link: "/detail/5",
    level: 1,
  },
  {
    name: "광어",
    image: "/imgs/fish_silhouette/kwanguh.png",
    link: "/detail/6",
    level: 1,
  },
  {
    name: "우럭",
    image: "/imgs/fish_silhouette/wuroek.png",
    link: "/detail/7",
    level: 1,
  },
  {
    name: "감성돔",
    image: "/imgs/fish_silhouette/gamsungdom.png",
    link: "/detail/8",
    level: 1,
  },
  {
    name: "돌돔",
    image: "/imgs/fish_silhouette/doldom.png",
    link: "/detail/9",
    level: 2,
  },
  {
    name: "쥐노래미",
    image: "/imgs/fish_silhouette/gnoraemi.png",
    link: "/detail/10",
    level: 2,
  },
  {
    name: "미정",
    image: "/imgs/fish_silhouette/temp.png",
    link: "#",
    level: 4,
  },
];

const CollectionPage = () => {
  const { data, error, isError, isLoading } = useQuery({
    queryKey: ["fishData"],
    queryFn: async () => {
      const token = localStorage.getItem("token");
      const response = await myFishApi(token);
      return response;
    },
  });

  const [myfish, setMyfish] = useState();

  useEffect(() => {
    if (data) {
      setMyfish(data[2]);
    }
  }, [data]);

  if (isLoading) {
    return <p>Loading...</p>;
  }

  if (isError) {
    return <p>데이터를 가져오지 못해습니다.</p>;
  }
  
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
        <span>{data ? `${data[0]}/10` : "0/10"}</span>
      </div>

      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <div style={{ display: "flex", flexWrap: "wrap", maxWidth: "326.4px" }}>
          {fishInfos.map(({ name, image, link, level }) => (
            <Link
              to={link}
              style={{ textDecoration: "none", color: "black" }}
              key={name}
            >
              <InfoBox>
                <FishBox>
                  {[...Array(4)].map((_, index) => (
                    <FontAwesomeIcon
                      key={index}
                      icon={index < level ? "star" : ["far", "star"]}
                      size="1x"
                      color="#FFC107"
                    />
                  ))}
                  <img
                    src={image}
                    alt={name}
                    style={{ width: "5.5rem", borderRadius: "10px" }}
                  />
                </FishBox>
                <FishName>{name}</FishName>
              </InfoBox>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CollectionPage;
