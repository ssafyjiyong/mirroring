import React from "react";
import styled from "styled-components";
import Slider from "react-slick";
import Button from "@mui/joy/Button";
import { useNavigate } from "react-router-dom";

const StyledSlider = styled(Slider)`
  overflow: hidden;

  .slick-dots {
    bottom: 110px;
    z-index: 1000;
  }
`;

const TopBox = styled.div`
  display: flex !important;
  flex-direction: column;
  background-color: #5a60f1;
  height: 100vh;
`;

const AlignBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Text = styled.p`
  color: white;
  font-size: 2rem;
  font-weight: 600;
`;

const IntroductionPage = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  const navigate = useNavigate();

  return (
    <div>
      <StyledSlider {...settings}>
        <TopBox>
          <Text style={{ margin: "3rem 0rem 4rem 1.8rem" }}>
            물고기 판별과 <br /> 길이 측정까지 <br /> 인공지능으로 편리하게
          </Text>
          <AlignBox>
            <img
              src="imgs/introduction/introduction1.png"
              alt="introduction1"
              style={{ width: "19rem", height: "15rem" }}
            />
          </AlignBox>
        </TopBox>
        <div>
          <h3>2</h3>
        </div>
        <div>
          <h3>3</h3>
        </div>
        <div>
          <h3>4</h3>
        </div>
      </StyledSlider>
      <Button
        sx={{
          position: "fixed",
          bottom: "3rem",
          left: "50%",
          transform: "translateX(-50%)",
          backgroundColor: "#F68596",
          width: "90%",
          fontFamily: "SpoqaHanSansNeo",
          fontSize: "1rem",
          fontWeight: "400",
          padding: "0.5rem",
          ":hover": { backgroundColor: "#d47382" },
        }}
        onClick={() => navigate("/login")}
      >
        로그인하기
      </Button>
    </div>
  );
};

export default IntroductionPage;
