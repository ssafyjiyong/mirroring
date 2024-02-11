import React from 'react'
import styled from "styled-components";

export const WhiteBox = styled.div`
    display: flex;
    justify-content: space-around;
    border-radius: 15px;
    height: 1.5rem;
    background-color: white;
    padding: 1rem;
    margin: 0rem 0;
    /* border-top: 2px solid #2979FF; */
  box-shadow: 3px 2px 2px rgba(0, 0, 0, 0.1);

`;

export const Text = styled.p`
  font-size: 1.1rem;
  font-weight: 400;
  margin: 0rem 0rem;
  color: #676f75;
`;

export const TextBar = styled.p`
  font-size: 1.1rem;
  font-weight: 400;
  margin: 0rem 0rem;
  color: #b4bbc0;
`;

const menu = () => {
  return (
    <WhiteBox>
        <Text>일정등록</Text>
        <TextBar>|</TextBar>
        <Text>맞춤정보</Text>
        <TextBar>|</TextBar>
        <Text>낚시방법</Text>
    </WhiteBox>
  )
}

export default menu