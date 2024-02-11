import React from "react";
import styled from "styled-components";

export const Text = styled.p`
  font-size: 1.3rem;
  font-weight: 300;
  margin: 1rem 1rem;
  color: black;
`;

const Fubaoguide = () => {
  return (
    <div>
      <div className="speech-bubble">
        <Text>xx님, 일정을 알려주세요!</Text>
      </div>

    <div  style={{ display: "flex", justifyContent: "center" }}>
      <img
        src="/imgs/my_panda.png"
        alt="panda"
        style={{ width: "80vw", height: "auto", maxWidth: "350px", marginTop: "0.7rem" }}
      />
    </div>
    </div>
  );
};

export default Fubaoguide;
