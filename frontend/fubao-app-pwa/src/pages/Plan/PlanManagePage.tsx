import React, { useState } from "react";
import "../../FontAwsome";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styled from "styled-components";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 0.4em;
`;

const RegisterBox = styled.div`
  height: 35em;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const PlanManagePage = () => {
  const [selectedDate, setSelectedDate] = useState<Date | null>(new Date());

  return (
    <Container>
      <p style={{ fontSize: "1.5em", fontWeight: "bold" }}>일정등록</p>
      {/* 일정 등록 칸 */}
      <RegisterBox>
        <div>
          <span>일정: </span>
          <DatePicker
            dateFormat="yyyy.MM.dd" // 날짜 형태
            shouldCloseOnSelect // 날짜를 선택하면 datepicker가 자동으로 닫힘
            minDate={new Date("2000-01-01")} // minDate 이전 날짜 선택 불가
            maxDate={new Date()} // maxDate 이후 날짜 선택 불가
            selected={selectedDate}
            onChange={(date) => setSelectedDate(date)}
          />
        </div>
        <div>
        <span>장소: </span>
        <input type="text" placeholder="장소 (예시 부산항)" />
        </div>
        <div>
        <span>포인트: </span>
        <input type="text" placeholder="포인트 (예시 방파제)" />
        </div>
        <div>
        <span>방법: </span>
        <input type="text" placeholder="방법 (예시 찌낚시)" />
        </div>
      </RegisterBox>
    </Container>
  );
};

export default PlanManagePage;
