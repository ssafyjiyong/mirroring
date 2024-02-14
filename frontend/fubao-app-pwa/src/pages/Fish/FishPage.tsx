import React from "react";
import "../../FontAwsome";
import { useParams } from "react-router-dom";
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

const FishPage: React.FC = () => {
  const { id } = useParams();
  const fishIMG = fishImages[id - 1];

  if (!fishData) {
    return <div>Fish not found!</div>;
  }

  return (
    <div>
      <h2>{fishData.name_kor}</h2>
      <img src={fishData.image} alt={fishData.name_kor} />
      <p>{fishData.subtitle}</p>
    </div>
  )
};

export default FishPage;