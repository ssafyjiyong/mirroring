import React, { useState } from "react";
import styled from "styled-components";
import Button from "@mui/joy/Button";
import Select from "react-select";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import "../../index.css";
import axios from "axios";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";
import { planCancelApi, planFetchApi } from "../../store/api";

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

const PlanManagePage = () => {
  const [selectedDate, setSelectedDate] = useState<Date | null>(new Date());
  const navigate = useNavigate();
  const API_URL = "http://127.0.0.1:8000";

  const Cancel = (event: React.MouseEvent<HTMLButtonElement>) => {

    axios.delete(`${API_URL}/schedule/1/`, {
      headers: {
        // 임시토큰값
        Authorization: 'Token fdb1edc661bfe5cbc0d620d696c703a5509b641e',
      },
    })
      .then((response) => {
        Swal.fire({
          title: "일정 삭제 완료",
          text: "등록된 일정이 삭제되었습니다.",
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
          text: "알 수 없는 에러가 발생했습니다.",
        });
      });
  };

  const [selectedPointOption, setSelectedPointOption] = useState<{
    value: string;
    label: string;
  } | null>(null);
  
  const [selectedMethodOption, setSelectedMethodOption] = useState<{
    value: string;
    label: string;
  } | null>(null);

  const handlePointChange = (
    selectedPointOption: { value: string; label: string } | null
  ) => {
    setSelectedPointOption(selectedPointOption);
  };

  const handleMethodChange = (
    selectedMethodOption: { value: string; label: string } | null
  ) => {
    setSelectedMethodOption(selectedMethodOption);
  };

  const PointOptions = [
    { value: "1", label: "방파제" },
    { value: "2", label: "갯바위" },
    { value: "3", label: "선착장" },
    { value: "4", label: "선상" },
  ];

  const MethodOptions = [
    { value: "1", label: "찌낚시" },
    { value: "2", label: "원투낚시" },
    { value: "3", label: "루어낚시" },
    { value: "4", label: "훌치기낚시" },
  ];

  const PointSelect = () => (
    <Select
      options={PointOptions}
      value={selectedPointOption}
      placeholder="원래 등록한 값"
      onChange={handlePointChange}
      required
      name="area"
      styles={{
        control: (provided) => ({
          ...provided,
          borderRadius: "10px",
          margin: "0.5rem 0rem",
          width: "21rem",
          borderColor: "#ccc",
          boxShadow: "0px 2px 4px rgba(0, 0, 0, 0.1)",
          fontSize: 16,
        }),
        menu: (provided) => ({
          ...provided,
          marginTop: -8,
        }),
      }}
    />
  );

  const MethodSelect = () => (
    <Select
      options={MethodOptions}
      value={selectedMethodOption}
      placeholder="원래 등록한 값"
      onChange={handleMethodChange}
      required
      name="method"
      styles={{
        control: (provided) => ({
          ...provided,
          borderRadius: "10px",
          margin: "0.5rem 0rem",
          width: "21rem",
          borderColor: "#ccc",
          boxShadow: "0px 2px 4px rgba(0, 0, 0, 0.1)",
          fontSize: 16,
        }),
        menu: (provided) => ({
          ...provided,
          marginTop: -8,
        }),
      }}
    />
  );


  return (
    <Container>
      <p style={{ fontSize: "1.5rem", fontWeight: "bold" }}>일정관리</p>
      {/* 등록된 일정 칸 */}
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
              <Input
                name="location"
                type="text"
                placeholder="원래 등록한 값"
              />
          </AlignDiv>
          <AlignDiv>
              <Span>포인트: </Span>
              <PointSelect />
            </AlignDiv>
            <AlignDiv>
              <Span>방법: </Span>
              <MethodSelect />
            </AlignDiv>
          <div>
          <Button
            size="md"
            variant="solid"
            style={{ margin: "2rem", marginRight: "0.2rem" }}
          >
            수정하기
          </Button>

          <Button
            size="md"
            variant="solid"
            color="danger"
            style={{ margin: "2rem", marginLeft: "0.2rem" }}
            onClick={Cancel}
          >
            삭제하기
          </Button>
          </div>
        </RegisterBox>
      </form>
    </Container>
  );
};

export default PlanManagePage;
