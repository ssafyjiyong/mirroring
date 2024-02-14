import React from "react";
import "../../FontAwsome";
import { useParams, useLocation } from "react-router-dom";

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

const FishPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const fishId = id ? parseInt(id, 10) : 0;
  const location = useLocation();
  const fishData: FishData | null = null;

  if (!fishData) {
    return <div>Fish not found!</div>;
  }

  return (
    <div>
      <p>fish</p>
      {/* <h2>{fishData.name_kor}</h2>
      <p>{fishData.subtitle}</p> */}
    </div>
  );
};

export default FishPage;