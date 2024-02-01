import React from "react";
import { useNavigate } from 'react-router-dom';
import styled from "styled-components";
import Button from "@mui/joy/Button";
import { WhiteBox } from "./styles";
import "../../FontAwsome";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Etiquette = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/etiquetteinfo');
  };

  return (
    <WhiteBox style={{ position: "relative" }}>
      <div style={{ position: "absolute", bottom: "0.5rem", right: "0.5rem" }}>
        <Button variant="plain" color="neutral" onClick={handleClick}>
          <span style={{ color: "#727272", marginRight: "0.1rem" }}>
            자세히보기
          </span>
          <FontAwesomeIcon icon="arrow-right" color="#727272" />
        </Button>
      </div>
    </WhiteBox>
  );
};

export default Etiquette;
