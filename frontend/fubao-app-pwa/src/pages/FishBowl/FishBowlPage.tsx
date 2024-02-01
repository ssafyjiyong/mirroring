import React from 'react'
import styled from "styled-components";

const FishBowlBox = styled.div`
  background-color: aqua;
  width: 100vw;
  height: 100vh;
  position: fixed;
  top: 0;
  left: 0;
`;

const FishBowlPage = () => {
  return (
    <FishBowlBox>
      어항코드를 여기에 넣으면 전체 화면을 덮는 방식
    </FishBowlBox>
  )
}

export default FishBowlPage