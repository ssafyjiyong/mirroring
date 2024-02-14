import React from "react";
import { useNavigate } from "react-router-dom";
import { WhiteBox, MyText } from "./styles";
import "../../FontAwsome";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Fish1 = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/fish1");
  };

  return (
    <WhiteBox
      style={{
        position: "relative",
      }}
      onClick={handleClick}
    >
      <MyText>
        바다의 여왕
        <br />
        참돔
      </MyText>
      <div style={{display:"flex", justifyContent:"end", alignContent:"center"}}>
        <img
          src="/imgs/fish/chamdom.png"
          alt="chamdom"
          style={{ maxHeight: "150px" }}
        />
      </div>
      <div style={{ position: "absolute", bottom: "0.5rem", right: "0.5rem" }}>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            border: "1px solid white",
            borderRadius: "50px",
            width: "1.3rem",
            height: "1.3rem",
            margin: "0.3rem",
          }}
        >
          <FontAwesomeIcon icon="plus" size="1x" color="white" />
        </div>
      </div>
    </WhiteBox>
  );
};

export default Fish1;
