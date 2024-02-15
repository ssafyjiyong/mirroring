
import React from "react";
import styled from "styled-components";
import Modal from "@mui/joy/Modal";
import ModalDialog, { ModalDialogProps } from "@mui/joy/ModalDialog";
import ModalClose from "@mui/joy/ModalClose";
import Typography from "@mui/joy/Typography";


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

interface WeatherProps {
  weatherInfo:weatherInfo;
  sunset:string;
  sunrise:string;
  open: boolean;
  onClose: () => void;
}


const Weather: React.FC<WeatherProps> = ({
  weatherInfo,
  sunrise,
  sunset,
  open,
  onClose,
}) => {

  return (
    <>
      <Modal
        open={open}
        onClose={onClose}
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
            {weatherInfo && (
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
                      {weatherInfo.PCP.map((row) => (
                        <td>{row.fcstTime.substr(0, 2)}시</td>
                      ))}
                    </tr>
                    <tr key="날씨">
                      날씨
                      {weatherInfo.SKY.map((row) => (
                        <td>{sortSKY(row.fsctValue)}</td>
                      ))}
                    </tr>
                    <tr key="기온">
                      기온
                      {weatherInfo.TMP.map((row) => (
                        <td>{row.fsctValue}℃</td>
                      ))}
                    </tr>
                    <tr key="강수량">
                      강수량
                      {weatherInfo.PCP.map((row) => (
                        <td>{row.fsctValue}</td>
                      ))}
                    </tr>
                    <tr key="강수확률">
                      강수확률
                      {weatherInfo.POP.map((row) => (
                        <td>{row.fsctValue}%</td>
                      ))}
                    </tr>
                    <tr key="풍속">
                      풍속
                      {weatherInfo.WSD.map((row) => (
                        <td>{row.fsctValue}m/s</td>
                      ))}
                    </tr>
                    <tr key="파고">
                      파고
                      {weatherInfo.WAV.map((row) => (
                        <td>{row.fsctValue}M</td>
                      ))}
                    </tr>
                    <tr key="풍향">
                      풍향
                      {weatherInfo.VEC.map((row) => (
                        <td>{row.fsctValue}deg</td>
                      ))}
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
