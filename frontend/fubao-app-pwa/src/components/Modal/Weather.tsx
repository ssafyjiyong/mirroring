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
  const [open, setOpenWeather] = useState<boolean>(false);
  const [weather, setWeather] = useState<Weather | null>(null); // method 상태
  const lat=34.5436111;
  const lon=127.4536111;

  // useEffect(() => {
    const WeatherPage = async () => {

      const { data: weather, isError, isLoading } = useQuery<Weather>({
        
        queryKey: ["weatherData"], // Pass query key as part of the options object
        queryFn: async () => {
          // const token = localStorage.getItem("token");
          console.log(lat,lon);
          const response = await weatherGetApi({lat,lon});
          console.log(response);
          return response;
    
        },
      });
    
      if (isLoading) {
        return <p>Loading...</p>;
      };
    
      if (isError || !weather) {
        return <p>데이터를 가져오지 못해습니다.</p>;
      };

    //   try {
    //     const response = await weatherGetApi({lat,lon});
    //     console.log(response['weather'])

    //   } catch (error) {
    //     console.error("API 호출 중 에러 발생:", error);
    //   }
    // };

    WeatherPage();
  };

  return (
    <>
    <button onClick={() => setOpenWeather(true)}> open modal </button>
    <Modal
      open={open}
      onClose={() => setOpenWeather(false)}
      sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}
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
            component="h6"
            id="modal-title"
            level="h4"
            textColor="inherit"
            fontWeight="lg"
            mb={1}
            textAlign={"center"}
          >
          {weather && (<div>{weather.sunrise}</div>)}
          </Typography>

      </ModalDialog>
    </Modal>
    </>
  );
}

export default Weather;
