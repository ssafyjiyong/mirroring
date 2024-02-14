import React, { useEffect, useState } from "react";
import Fish from "../../components/Main/Fish";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import { fishGetApi } from "../../store/api";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import { HomeIcon } from "../../styles/globalStyles";
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

const FishTotal = () => {
    const [fish, setFish] = useState<FishData[]>([]);
    const token = localStorage.getItem("token");
    const navigate = useNavigate();
  
    const handleBack = () => {
      navigate(-1);
    };
  
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

  return (
<div style={{ position:"relative", padding: "1rem 1rem 2rem", backgroundColor: "#E3F2FD" }}>
      <ChevronLeftIcon
        sx={{
          marginTop: 1,
          cursor: "pointer",
        }}
        onClick={handleBack}
      />
      <Link to="/">
        <HomeIcon color="#555555">
          <FontAwesomeIcon icon="home" />
        </HomeIcon>
      </Link>
      {fish.map((fishData) => (
        <Fish key={fishData.id} fishData={fishData} />
      ))}
    </div>
  )
}

export default FishTotal