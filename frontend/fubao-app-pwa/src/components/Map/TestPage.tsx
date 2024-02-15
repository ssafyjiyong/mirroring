import Weather from "../Modal/Weather";
import React, { useEffect, useState } from "react";
import { weatherGetApi } from "../../store/api";

const pos={
    lat : 34.5436111,
    lon : 127.4536111,
};
interface weatherInfo {
  //온도
  TMP: [
    {
      fcstTime: string;
      fsctValue: String;
    },
  ];
  // 풍향
  VEC: [
    {
      fcstTime: string;
      fsctValue: String;
    },
  ];
  // 풍속
  WSD: [
    {
      fcstTime: string;
      fsctValue: String;
    },
  ];
  // 하늘상태
  SKY: [
    {
      fcstTime: string;
      fsctValue: String;
    },
  ];
  // 강수확률
  POP: [
    {
      fcstTime: string;
      fsctValue: String;
    },
  ];
  // 파고
  WAV: [
    {
      fcstTime: string;
      fsctValue: String;
    },
  ];
  // 1시간 강수량
  PCP: [
    {
      fcstTime: string;
      fsctValue: String;
    },
  ];
}




const TestPage = () => {
  const [open, setOpenWeather] = useState<boolean>(false);
  const [wetherInfo, setWeather] = useState<any>(null); // method 상태
  const [sunset, setSunset] = useState<any>(null);
  const [sunrise, setSunrise] = useState<any>(null);
  const lat = 34.5436111;
  const lon = 127.4536111;

  const fetchWeather = async () => {
    try {
      console.log(lat, lon);
      const response = await weatherGetApi({ lat, lon });
      console.log(response);
      setWeather(response.weather);
      setSunset(response.sunset);
      setSunrise(response.sunrise);
      
    } catch (error) {
      console.error("API 호출 중 에러 발생:", error);
    }
  };

  const showMeWeather = (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    fetchWeather();
    setOpenWeather(true);
  };

  return (
    <div>
      <button onClick={showMeWeather}>open modal </button>
      {sunset}
      <Weather
        weatherInfo={wetherInfo}
        sunset={sunset}
        sunrise={sunrise}
        open={open}
        onClose={() => setOpenWeather(false)}
      ></Weather>
    </div>
  );
};

export default TestPage;
