import React from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import Button from "@mui/joy/Button";
import { WhiteBox } from "./styles";
import "../../FontAwsome";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

type Method1Props = {
  id?: string; // id 프로퍼티는 선택적(optional)입니다
};

const Method1 = ({ id }: Method1Props) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/methodinfo1");
  };

  return (
    <WhiteBox id={id} style={{ position: "relative" }}>
      <div>찌낚시</div>
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

export default Method1;
