import Weather from "../Modal/Weather";
import React, { useEffect, useState } from "react";
import { weatherGetApi } from "../../store/api";

// const pos={
//     lat = 34.5436111;
//     lon = 127.4536111;
// };

const TestPage = () => {
  const [open, setOpenWeather] = useState<boolean>(false);
  const [weather, setWeather] = useState<Weather | null>(null); // method 상태
  const [sunset, setSunset] = useState(null);
  const [sunrise, setSunrise] = useState(null);
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
      // setSunset(response['']);
      // setPCP(response.PCP);
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
      <Weather
        // onClose={() => setOpenWeather(false)}
      ></Weather>
    </div>
  );
};

export default TestPage;
