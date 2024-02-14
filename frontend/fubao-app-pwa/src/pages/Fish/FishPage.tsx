import React, { useEffect, useState } from "react";
import "../../FontAwsome";
import { fishGetApi } from "../../store/api";
import { useParams } from "react-router-dom";

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
  { name: '참돔', image: '/imgs/fish/chamdom.png', link: '/detail/참돔'}, // 1. 참돔
  { name: '농어', image: '/imgs/fish/nonguh.png', link: '/detail/농어'}, // 2. 농어
  { name: '전갱이', image: '/imgs/fish/jeongang.png', link: '/detail/전갱이'}, // 3. 전갱이
  { name: '숭어', image: '/imgs/fish/sunguh.png', link: '/detail/숭어'}, // 4. 숭어
  { name: '고등어', image: '/imgs/fish/godeunguh.png', link: '/detail/고등어'}, // 5. 고등어
  { name: '광어', image: '/imgs/fish/kwanguh.png', link: '/detail/광어'}, // 6. 광어
  { name: '우럭', image: '/imgs/fish/wuroek.png', link: '/detail/우럭'}, // 7. 우럭
  { name: '감성돔', image: '/imgs/fish/gamsungdom.png', link: '/detail/감성돔'}, // 8. 감성돔
  { name: '돌돔', image: '/imgs/fish/doldom.png', link: '/detail/돌돔'}, // 9. 돌돔
  { name: '쥐노래미', image: '/imgs/fish/gnoraemi.png', link: '/detail/쥐노래미'}, // 10. 쥐노래미
];

const FishPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const fishId = id ? parseInt(id, 10) : 0;

  const [fish, setFish] = useState<FishData[]>([]);
  const token = localStorage.getItem("token");

  useEffect(() => {
    const fetchFish = async () => {
      try {
        const response = await fishGetApi(token);
        setFish(response);
        console.log(response);
      } catch (error) {
        console.error("API 호출 중 에러 발생:", error);
      }
    };

    fetchFish();
  }, [token]);

  const fishData = fish[fishId - 1];
  const fishImage = fishImages[fishId - 1];

  if (!fishData) {
    return <div>Fish not found!</div>;
  }

  if (!fishImage) {
    return <div>Fish image not found!</div>;
  }

  return (
    <div>
      <h2>{fishData.name_kor}</h2>
      <p>{fishData.subtitle}</p>
      <img src={fishImage.image} alt={fishData.name_kor} />
      <p>{fishData.document}</p>
    </div>
  );
};

export default FishPage;