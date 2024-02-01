import React from "react";
import { useNavigate } from "react-router-dom";
import { WhiteBox, MyText } from "./styles";
import "../../FontAwsome";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Etiquette = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/etiquetteinfo");
  };

  return (
    <WhiteBox
      style={{
        position: "relative",
        backgroundImage: "url('/imgs/dock.jpg')",
        backgroundRepeat: "no-repeat",
      }}
      onClick={handleClick}
    >
      <MyText>
        아름다운 사람은
        <br />
        머문 자리도 아름답습니다
      </MyText>
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
            margin:"0.3rem",
          }}
        >
          <FontAwesomeIcon icon="plus" size="1x" color="white" />
        </div>
      </div>
    </WhiteBox>
  );
};

export default Etiquette;
