import React from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { WhiteBox, MyText } from "./styles";
import "../../FontAwsome";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

type FishData = {
    id: number;
    name_kor: string;
    name_eng: string;
    fish_difficulty: number;
    subtitle: string;
    document: string;
    release_standard: number;
    prohibit: number;
    bait: number[];
    area: number[];
    equipment: number[];
    method: number[];
};

type FishProps = {
    fishData: FishData;
};

// 물고기 images
const fishImages = [
    { name: '참돔', image: '/imgs/fish/chamdom.png', nickname: '바다의 여왕'}, // 1. 참돔
    { name: '농어', image: '/imgs/fish/nonguh.png', nickname: '몸매가 좋은 8등신 생선'}, // 2. 농어
    { name: '전갱이', image: '/imgs/fish/jeongang.png', nickname: '나 한번 잡아보시지!'}, // 3. 전갱이
    { name: '숭어', image: '/imgs/fish/sunguh.png', nickname: '별명부자'}, // 4. 숭어
    { name: '고등어', image: '/imgs/fish/godeunguh.png', nickname: '고단백 고영양'}, // 5. 고등어
    { name: '광어', image: '/imgs/fish/kwanguh.png', nickname: '넙적넙적'}, // 6. 광어
    { name: '우럭', image: '/imgs/fish/wuroek.png', nickname: '우럭 못잡으면 광광 우럭'}, // 7. 우럭
    { name: '감성돔', image: '/imgs/fish/gamsungdom.png', nickname: 'aka.갬성돔'}, // 8. 감성돔
    { name: '돌돔', image: '/imgs/fish/doldom.png', nickname: '바다의 폭군'}, // 9. 돌돔
    { name: '쥐노래미', image: '/imgs/fish/gnoraemi.png', nickname: '잡으면 깜짝!'}, // 10. 쥐노래미
];

const Fish: React.FC<FishProps> = ({ fishData }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/fish/${fishData.id}`);
  };

  return (
    <WhiteBox
      style={{
        position: "relative",
      }}
      onClick={handleClick}
    >
      <MyText>
        {fishImages[fishData.id - 1].nickname}
        <br />
        {fishData.name_kor}
      </MyText>
      <div style={{display:"flex", justifyContent:"center", alignContent:"center"}}>
        <img
          src={fishImages[fishData.id - 1].image}
          alt={fishData.name_kor}
          style={{ maxHeight: "150px", maxWidth: "500px" }}
        />
      </div>
      <div style={{ position: "absolute", bottom: "0.5rem", right: "0.5rem" }}>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            border: "1px solid white",
            borderRadius: "50px",
            width: "1.3rem",
            height: "1.3rem",
            margin: "0.3rem",
          }}
        >
          <FontAwesomeIcon icon="plus" size="1x" color="white" />
        </div>
      </div>
    </WhiteBox>
  );
};

export default Fish;
