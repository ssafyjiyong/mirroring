// import React from "react";
// import ReactDOM from "react";

// interface WeatherModalProps {
//   open: boolean;
//   onClose: () => void;
//   // selectedDate: Date | null;
//   // setSelectedDate: (date: Date | null) => void;
//   // handleSubmit: (event: React.FormEvent<HTMLFormElement>) => void;
// }

// // export const Weather = () => {
// //   return <div>Weather</div>;
// // };
// const Weather: React.FC<WeatherModalProps> = ({ open, onClose }) => {
//   return <div> i am modal </div>;
// };

// export default Weather;

import React, { useEffect, useState } from "react";
import { weatherGetApi } from "../../store/api";
import styled from "styled-components";

interface Weather{
  //온도
  TMP:{
    fcstTime:string;
    fsctValue:String;
  };
  // 풍향
  VEC:{
    fcstTime:string;
    fsctValue:String;
  };
  // 풍속
  WSD:{
    fcstTime:string;
    fsctValue:String;
  };
  // 하늘상태
  SKY:{
    fcstTime:string;
    fsctValue:String;
  };
  // 강수확률
  POP:{
    fcstTime:string;
    fsctValue:String;
  };
  // 파고
  WAV:{
    fcstTime:string;
    fsctValue:String;
  };
  // 1시간 강수량
  PCP:{
    fcstTime:string;
    fsctValue:String;
  };
  // 일출
  sunrise: string;
  // 일몰
  sunset: string;
}

const Title = styled.p`
  margin: 0.5rem 0.5rem;
  font-size: 2rem;
  font-weight: 600;
  color: #000000;
`;


function Weather() {
  const [weather, setWeather] = useState<Weather | null>(null); // method 상태
  const lat=34.5436111;
  const lon=127.4536111;

  useEffect(() => {
    const fetchMethods = async () => {
      try {
        const response = await weatherGetApi({lat,lon});
        console.log(response.data)

      } catch (error) {
        console.error("API 호출 중 에러 발생:", error);
      }
    };

    fetchMethods();
  });

  return <div>
    <>
      <Title>실시간 날씨</Title>
      <table>
        <tr>
          
        </tr>
      </table>


    </>
     
    
  </div>;
}

export default Weather;
