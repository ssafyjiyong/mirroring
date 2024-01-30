import React from 'react'
import styled from "styled-components";

const EntryLoadingBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 100vh;
  background-color: #42A5F5;
  color: white;
  position: fixed;
  top: 0;
  left: 0;
`;

const SmallP = styled.p`
  font-size: 1.2em;
  margin: 0;
  font-weight: 100;
`;

const BiggerP = styled.p`
  font-weight: 500;
  font-size: 2em;
  margin: 0;
`;

const EntryLoading = () => {
  return (
    <EntryLoadingBox>
        <SmallP>푸른 바다로 오세요</SmallP>
        <img 
        src="/Fubao_logo_nobackground.png" 
        alt="Fubao_Logo" 
        style={{ width: "8em", height: "8em" }}
        />
        <BiggerP>푸바오</BiggerP>
    </EntryLoadingBox>
  )
}

export default EntryLoading