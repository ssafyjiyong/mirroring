import React from "react";
import styled from "styled-components";
import Slider from "react-slick";

const StyledSlider = styled(Slider)`
  overflow: hidden;

  .slick-dots {
    bottom: 1px;
  }
`

const IntroductionPage = () => {

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <div>
      <StyledSlider {...settings}>
        <div>
          <h3>1</h3>
        </div>
        <div>
          <h3>2</h3>
        </div>
        <div>
          <h3>3</h3>
        </div>
      </StyledSlider>
    </div>
  );
}

export default IntroductionPage