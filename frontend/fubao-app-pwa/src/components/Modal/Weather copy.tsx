
import React, { useEffect, useState } from "react";
import { weatherGetApi } from "../../store/api";
import styled from "styled-components";
import Modal from "@mui/joy/Modal";
import ModalDialog, { ModalDialogProps } from "@mui/joy/ModalDialog";
import ModalClose from "@mui/joy/ModalClose";
import Typography from "@mui/joy/Typography";
import Sheet from "@mui/joy/Sheet";
import { useQuery } from "@tanstack/react-query";
import Table from "@mui/joy/Table";

interface Weather {
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

// interface Props {
//   Pos: Pos
// }

const Title = styled.p`
  margin: 0.5rem 0.5rem;
  font-size: 2rem;
  font-weight: 600;
  color: #000000;
`;


function sortSKY(num:String) {
  if (num === "1") {
    return "맑음";
  } else if (num === "3") {
    return "구름많음";
  } else {
    return "흐림";
  }
};



// const Weather: React.FC<Props> = ({Pos}) => {
const Weather= () => {
  // const [open, setOpenWeather] = useState<boolean>(false);
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

  // const showMeWeather= (e:React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
  //   fetchWeather();
  //   setOpenWeather(true);
  // }

  return (
    <>
      {/* <button onClick ={ showMeWeather }> open modal </button> */}
      {/* <Modal
        open={open}
        onClose={() => setOpenWeather(false)}
        sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}
      > */}
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
            🌈현재 날씨
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
                {sunrise && (
                  <div>
                    <div>🌞 일출시간 : {sunrise}</div>
                  </div>
                )}
                {sunset && <div> 🌝 일몰시간 : {sunset}</div>}
                <table aria-label="basic table">
                  <thead>
                    {/* <tr>
                      <th style={{ width: "40%" }}></th>
                    </tr> */}
                  </thead>
                  <tbody>
                    <tr key="시간">
                      시간
                      {weather.PCP.map((row) => (
                        <td>{row.fcstTime.substr(0, 2)}시</td>
                      ))}
                    </tr>
                    <tr key="날씨">
                      날씨
                      {weather.SKY.map((row) => (
                        <td>{sortSKY(row.fsctValue)}</td>
                      ))}
                    </tr>
                    <tr key="기온">
                      기온
                      {weather.TMP.map((row) => (
                        <td>{row.fsctValue}℃</td>
                      ))}
                    </tr>
                    <tr key="강수량">
                      강수량
                      {weather.PCP.map((row) => (
                        <td>{row.fsctValue}</td>
                      ))}
                    </tr>
                    <tr key="강수확률">
                      강수확률
                      {weather.POP.map((row) => (
                        <td>{row.fsctValue}%</td>
                      ))}
                    </tr>
                    <tr key="풍속">
                      풍속
                      {weather.WSD.map((row) => (
                        <td>{row.fsctValue}m/s</td>
                      ))}
                    </tr>
                    <tr key="파고">
                      파고
                      {weather.WAV.map((row) => (
                        <td>{row.fsctValue}M</td>
                      ))}
                    </tr>
                    <tr key="풍향">
                      풍향
                      {weather.VEC.map((row) => (
                        <td>{row.fsctValue}deg</td>
                      ))}
                    </tr>
                  </tbody>
                </table>
              </div>
            )}
          </Typography>
        </ModalDialog>
    </>
  );
};

export default Weather;
