import React from "react";
import styled from "styled-components";
import useStore from "../../store/store";
import { ProfileType } from "../../store/types";

export const Text = styled.p`
  font-size: 1.1rem;
  font-weight: 300;
  margin: 1rem 1rem;
  color: black;
`;

const Fubaoguide = () => {
  const { profile } = useStore() as { profile: ProfileType | null };

  return (
    <div style={{ margin: "2rem 0rem 0rem" }}>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <div className="speech-bubble">
          <Text>{profile?.nickname}님의 일정을 알려주세요!</Text>
        </div>
      </div>

      <div style={{ display: "flex", justifyContent: "center" }}>
        <img
          src="/imgs/my_panda.png"
          alt="panda"
          style={{
            width: "50vw",
            height: "auto",
            maxWidth: "200px",
            marginTop: "0.7rem",
          }}
        />
      </div>
    </div>
  );
};

export default Fubaoguide;
