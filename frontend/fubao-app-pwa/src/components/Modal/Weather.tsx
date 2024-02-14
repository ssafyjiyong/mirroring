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
import Modal from "@mui/joy/Modal";
import ModalDialog, { ModalDialogProps } from "@mui/joy/ModalDialog";
import ModalClose from "@mui/joy/ModalClose";
import Typography from "@mui/joy/Typography";
import Sheet from "@mui/joy/Sheet";
import { useQuery } from "@tanstack/react-query";
import Table from '@mui/joy/Table';

interface Weather {
  //온도
  TMP: {
    fcstTime: string;
    fsctValue: String;
  };
  // 풍향
  VEC: {
    fcstTime: string;
    fsctValue: String;
  };
  // 풍속
  WSD: {
    fcstTime: string;
    fsctValue: String;
  };
  // 하늘상태
  SKY: {
    fcstTime: string;
    fsctValue: String;
  };
  // 강수확률
  POP: {
    fcstTime: string;
    fsctValue: String;
  };
  // 파고
  WAV: {
    fcstTime: string;
    fsctValue: String;
  };
  // 1시간 강수량
  PCP: {
    fcstTime: string;
    fsctValue: String;
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

const Weather = () => {
  const [open, setOpenWeather] = useState<boolean>(false);
  const [weather, setWeather] = useState<Weather | null>(null); // method 상태
  const lat = 34.5436111;
  const lon = 127.4536111;

  useEffect(() => {
    const fetchWeather = async () => {
      try {
        console.log(lat, lon);
        const response = await weatherGetApi({ lat, lon });
        console.log(response["weather"]);
        setWeather(response);
      } catch (error) {
        console.error("API 호출 중 에러 발생:", error);
      }
    };

    fetchWeather();
  });

  return (
    <>
      <button onClick={() => setOpenWeather(true)}> open modal </button>
      <Modal
        open={open}
        onClose={() => setOpenWeather(false)}
        sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}
      >
        <ModalDialog>
          <ModalClose variant="plain" sx={{ m: 1 }} />
          <Typography
            component="h2"
            id="modal-title"
            level="h4"
            textColor="inherit"
            fontWeight="lg"
            mb={1}
            textAlign={"center"}
          >
            현재 날씨
          </Typography>
          <Typography
            component="h2"
            id="modal-title"
            level="h4"
            textColor="inherit"
            fontWeight="lg"
            mb={1}
            textAlign={"center"}
          >
            {weather && (
              <div>
                <div>일출시간 : {weather.sunrise}</div>
                <div>일몰시간 : {weather.sunset}</div>
                <table aria-label="basic table">
                <thead>
                  <tr>
                  <th style={{ width: '40%' }}></th>
                  </tr>
                  </thead>
                  <tbody>
                    <tr>
                    <th scope="row">시간</th>
                    <th scope="row">날씨</th>
                    <th scope="row">기온</th>
                    <th scope="row">강수량</th>
                    <th scope="row">강수확률</th>
                    <th scope="row">풍속</th>
                    <th scope="row">파고</th>
                    <th scope="row">풍향</th>
                    </tr>
                  </tbody>
                  
                </table>
              </div>
            )}
          </Typography>
        </ModalDialog>
      </Modal>
    </>
  );
};

export default Weather;
