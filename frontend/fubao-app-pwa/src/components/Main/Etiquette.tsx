import React from "react";
import { useNavigate } from "react-router-dom";
import { EtiquetteWhiteBox } from "./styles";
import "../../FontAwsome";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styled from "styled-components";

export const EtiquetteTextS = styled.p`
  font-size: 1.1rem;
  font-weight: 400;
  margin: 0rem 0rem;
  color: #778A9B;
`;

export const EtiquetteTextL = styled.p`
  font-size: 1.3rem;
  font-weight: 600;
  margin: 0rem 0rem;
  color: #2979ff;
`;

const Etiquette = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/etiquetteinfo");
  };

  return (
    <EtiquetteWhiteBox
      onClick={handleClick}
    >
      {/* <FontAwesomeIcon icon="seedling" size="1x" color="#778A9B" /> */}
      <div>
        <EtiquetteTextS>
          에티켓 지키면 고기가 잘 잡힌대요
        </EtiquetteTextS>
        <EtiquetteTextL>낚시의 기본, 에티켓 확인하기</EtiquetteTextL>
      </div>
      <FontAwesomeIcon icon="chevron-right" size="1x" color="#778A9B" />
    </EtiquetteWhiteBox>
  );
};

export default Etiquette;
