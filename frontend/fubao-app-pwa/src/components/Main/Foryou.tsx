import React, { useState } from "react";
import styled from "styled-components";
import Button from "@mui/joy/Button";
import Modal from "@mui/joy/Modal";
import ModalClose from "@mui/joy/ModalClose";
import Typography from "@mui/joy/Typography";
import Sheet from "@mui/joy/Sheet";
import { WhiteBox } from "./styles";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import axios from "axios";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";
import "../../index.css";
import "../../FontAwsome";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import PlanRegister from "../Modal/PlanRegister";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 0.4rem;
`;

const RegisterBox = styled.form`
  height: 25rem;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Input = styled.input`
  border-radius: 10px;
  width: 20rem;
  padding: 0.5rem;
  margin: 0.5rem 0;
  border: 1px solid #ccc;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1);
  font-size: 1rem;
  ::placeholder {
    color: #ccc;
  }
`;

const Span = styled.span`
  display: inline-block;
  width: 20rem;
  margin-right: 0.5rem;
`;

const AlignDiv = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const Foryou = () => {
  const [open, setOpen] = React.useState<boolean>(false);
  const [selectedDate, setSelectedDate] = useState<Date | null>(new Date());
  const navigate = useNavigate();
  const API_URL = "http://127.0.0.1:8000";

  // 현재 날짜 가져오기
  const today = new Date();
  const year = today.getFullYear();
  const month = ("0" + (today.getMonth() + 1)).slice(-2);
  const day = ("0" + today.getDate()).slice(-2);
  const dateString = year + "년 " + month + "월 " + day + "일";

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setOpen(false);
    const data = new FormData(event.currentTarget);
    const location = data.get("location") as string;
    const area = data.get("area") as string;
    const method = data.get("method") as string;
    const done = false;

    axios
      .post(`${API_URL}/user/register/`, {
        user: "user",
        date: selectedDate,
        location,
        area,
        method,
        done,
      })
      .then((response) => {
        Swal.fire({
          title: "일정 등록 완료",
          text: "와우, 벌써부터 설레는걸요?",
          icon: "success",
        });
      })
      .then((result) => {
        navigate("/");
      })
      .catch((error) => {
        Swal.fire({
          icon: "error",
          title: "에러 발생",
          text: "등록 내용을 다시 한 번 확인해주세요.",
        });
      });
  };

  return (
    <WhiteBox
      style={{
        position: "relative",
        backgroundImage: "url('/imgs/main_plan.png')",
        backgroundRepeat: "no-repeat",
      }}
    >
      <React.Fragment>
        <div
          style={{
            marginLeft: "0.3rem",
            marginTop: "0.2rem",
            display: "flex",
            flexDirection: "column",
          }}
        >
          <div style={{ fontWeight:"300" }}>{dateString}</div>

          {/* 일정이 등록되지 않았을 경우 */}
          <div
            style={{
              marginTop: "0.5rem",
              fontSize: "1.5rem",
              fontWeight: "600",
            }}
          >
            낚시 일정을 등록하면
            <br />
            뭐부터 시작할지
            <br />
            알려줄게요
          </div>
          <div
            style={{ position: "absolute", bottom: "0.5rem", right: "0.5rem" }}
          >
            <Button
              variant="plain"
              color="neutral"
              onClick={() => setOpen(true)}
            >
              <span style={{ color: "#727272", marginRight: "0.1rem" }}>
                일정등록
              </span>
              <FontAwesomeIcon icon="arrow-right" color="#727272" />
            </Button>
          </div>

          {/* 일정이 등록되었을 경우 */}
          <div></div>
        </div>

        {/* 일정 등록 모달 */}
        <PlanRegister
        open={open}
        onClose={() => setOpen(false)}
        selectedDate={selectedDate}
        setSelectedDate={setSelectedDate}
        handleSubmit={handleSubmit}
      />
      </React.Fragment>
    </WhiteBox>
  );
};

export default Foryou;
