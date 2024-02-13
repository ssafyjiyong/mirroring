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

function Weather() {
  const token = localStorage.getItem("token");
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

  return <div>Weather</div>;
}

export default Weather;
