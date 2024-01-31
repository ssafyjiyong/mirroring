import React, { useState } from "react";
import styled from "styled-components";
import Button from "@mui/joy/Button";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import "./styles.css";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 0.4rem;
`;

const RegisterBox = styled.div`
  height: 35rem;
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

const PlanPage = () => {
  const [selectedDate, setSelectedDate] = useState<Date | null>(new Date());

  return (
    <Container>
      <p style={{ fontSize: "1.5rem", fontWeight: "bold" }}>일정등록</p>
      {/* 일정 등록 칸 */}
      <form action="">
        <RegisterBox>
          <AlignDiv>
            <Span>일정: </Span>
            <DatePicker
              className="datePicker"
              dateFormat="yyyy.MM.dd" // 날짜 형태
              shouldCloseOnSelect // 날짜를 선택하면 datepicker가 자동으로 닫힘
              minDate={new Date("2000-01-01")} // minDate 이전 날짜 선택 불가
              maxDate={new Date()} // maxDate 이후 날짜 선택 불가
              selected={selectedDate}
              onChange={(date) => setSelectedDate(date)}
            />
          </AlignDiv>
          <AlignDiv>
            <Span>장소: </Span>
            <Input type="text" placeholder="장소 (예시 부산항)" />
          </AlignDiv>
          <AlignDiv>
            <Span>포인트: </Span>
            <Input type="text" placeholder="포인트 (예시 방파제)" />
          </AlignDiv>
          <AlignDiv>
            <Span>방법: </Span>
            <Input type="text" placeholder="방법 (예시 찌낚시)" />
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
      </form>
    </Container>
  );
};

export default PlanPage;
