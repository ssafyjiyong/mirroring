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
        </div>

        {/* 일정 등록 모달 */}
        <Modal
          aria-labelledby="modal-title"
          aria-describedby="modal-desc"
          open={open}
          onClose={() => setOpen(false)}
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Sheet
            variant="outlined"
            sx={{
              maxWidth: 500,
              borderRadius: "md",
              p: 3,
              boxShadow: "lg",
            }}
          >
            <ModalClose variant="plain" sx={{ m: 1 }} />
            <Typography
              component="h2"
              id="modal-title"
              level="h4"
              textColor="inherit"
              fontWeight="bold"
              fontSize={"1.5rem"}
              textAlign={"center"}
              mb={1}
            >
              일정등록
            </Typography>
            <Container id="modal-desc">
              {/* 일정 등록 칸 */}

              <RegisterBox onSubmit={handleSubmit}>
                <AlignDiv>
                  <Span>일정: </Span>
                  <DatePicker
                    className="datePicker"
                    dateFormat="yyyy.MM.dd" // 날짜 형태
                    shouldCloseOnSelect // 날짜를 선택하면 datepicker가 자동으로 닫힘
                    minDate={new Date()} // minDate 이전 날짜 선택 불가
                    maxDate={new Date(year + 1 + "-" + month + "-" + day)} // maxDate 이후 날짜 선택 불가
                    selected={selectedDate}
                    onChange={(date) => setSelectedDate(date)}
                  />
                </AlignDiv>
                <AlignDiv>
                  <Span>장소: </Span>
                  <Input
                    name="location"
                    type="text"
                    placeholder="장소 (예시 부산항)"
                  />
                </AlignDiv>
                <AlignDiv>
                  <Span>포인트: </Span>
                  <Input
                    name="area"
                    type="text"
                    placeholder="포인트 (예시 방파제)"
                  />
                </AlignDiv>
                <AlignDiv>
                  <Span>방법: </Span>
                  <Input
                    name="method"
                    type="text"
                    placeholder="방법 (예시 찌낚시)"
                  />
                </AlignDiv>
                <Button
                  size="md"
                  variant="solid"
                  style={{ margin: "2rem", marginRight: "0.2rem" }}
                  type="submit"
                >
                  등록하기
                </Button>
              </RegisterBox>
            </Container>
          </Sheet>
        </Modal>
      </React.Fragment>
    </WhiteBox>
  );
};

export default Foryou;
