import React, { useState } from "react";
import styled from "styled-components";
import { WhiteBox, AlignDiv } from "./styles";
import AspectRatio from "@mui/joy/AspectRatio";
import Box from "@mui/joy/Box";
import Typography from "@mui/joy/Typography";
import Card from "@mui/joy/Card";
import "../../index.css";
import "../../FontAwsome";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const data = [
  {
    src: "https://images.unsplash.com/photo-1502657877623-f66bf489d236",
    title: "신용카드",
    description: "높은 정확도",
  },
  {
    src: "https://images.unsplash.com/photo-1527549993586-dff825b37782",
    title: "담배갑",
    description: "보통 정확도",
  },
  {
    src: "https://images.unsplash.com/photo-1532614338840-ab30cf10ed36",
    title: "해당없음",
    description: "어종만 판별",
  },
  {
    src: "https://images.unsplash.com/photo-1532614338840-ab30cf10ed36",
    title: "취소",
    description: "뒤로가기",
  },
];

const Container = styled.button`
  display: flex;
  flex-direction: column;
  align-items: center;
  border: 0;
  background-color: white;
`;

const CameraOpen = () => {
  const [fileSelected, setFileSelected] = useState(false);

  const handleFileChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    if (event.target.files && event.target.files.length > 0) {
      setFileSelected(true);
    }
  };

  const handleCancel = () => {
    setFileSelected(false);
    const fileInput = document.getElementById("file") as HTMLInputElement;
    if (fileInput) {
      fileInput.value = "";
    }
  };

  return (
    <WhiteBox className="filebox">
      <AlignDiv style={{ flexDirection: "column" }}>
        <form
          action="#"
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          {!fileSelected && (
            <>
              <p style={{ margin: "0.5rem", fontSize: "1.1rem" }}>
                터치 한 번으로 어종/길이 측정
              </p>
              <label htmlFor="file">
                <img
                  src="/camera.png"
                  alt="camera"
                  style={{ width: "10rem", height: "10rem" }}
                />
              </label>
              <p style={{ margin: "0", color: "#778A9B" }}>CLICK!</p>
            </>
          )}

          <input
            type="file"
            id="file"
            accept="image/*;capture=camera"
            onChange={handleFileChange}
          />

          {fileSelected && (
            <>
              <p style={{ margin: "0.5rem", fontSize: "1.1rem" }}>
                어떤 물체와 비교해 볼까요?
              </p>

              <Box
                sx={{
                  display: "flex",
                  gap: 1,
                  py: 3,
                  overflow: "auto",
                  width: 320,
                  scrollSnapType: "x mandatory",
                  "& > *": {
                    scrollSnapAlign: "center",
                  },
                  "::-webkit-scrollbar": { display: "none" },
                }}
              >
                {data.map((item) => (
                  <Card
                    orientation="horizontal"
                    size="sm"
                    key={item.title}
                    variant="outlined"
                    sx={{ padding:"0.5rem" }}
                  >
                    <Container onClick={item.title === '취소' ? handleCancel : undefined}>
                      <AspectRatio ratio="1" sx={{ minWidth: 60 }}>
                        <img
                          srcSet={`${item.src}?h=120&fit=crop&auto=format&dpr=2 2x`}
                          src={`${item.src}?h=120&fit=crop&auto=format`}
                          alt={item.title}
                        />
                      </AspectRatio>
                      <Box
                        sx={{
                          whiteSpace: "nowrap",
                          mx: 1,
                          textAlign: "center",
                        }}
                      >
                        <Typography level="title-md">{item.title}</Typography>
                        <Typography level="body-sm">
                          {item.description}
                        </Typography>
                      </Box>
                    </Container>
                  </Card>
                ))}
              </Box>
            </>
          )}
        </form>
      </AlignDiv>
    </WhiteBox>
  );
};

export default CameraOpen;
