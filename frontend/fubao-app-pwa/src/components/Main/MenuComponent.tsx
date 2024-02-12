import React, { useState } from "react";
import styled from "styled-components";
import Swal from "sweetalert2";
import "react-datepicker/dist/react-datepicker.css";
import { useMutation } from "@tanstack/react-query";
import { planRegisterApi } from "../../store/api";
import PlanRegister from "../Modal/PlanRegister";
import useStore from "../../store/store";
import { ScheduleType } from "../../store/types";

export const WhiteBox = styled.div`
  display: flex;
  justify-content: space-around;
  border-radius: 15px;
  height: 1.5rem;
  background-color: white;
  padding: 1rem;
  margin: 0rem 0;
  /* border-top: 2px solid #2979FF; */
  box-shadow: 3px 2px 2px rgba(0, 0, 0, 0.1);
`;

export const Text = styled.p`
  font-size: 1.1rem;
  font-weight: 400;
  margin: 0rem 0rem;
  color: #676f75;
  cursor: pointer;
`;

export const TextBar = styled.p`
  font-size: 1.1rem;
  font-weight: 400;
  margin: 0rem 0rem;
  color: #b4bbc0;
`;

const MenuComponent = () => {
  const [open, setOpen] = React.useState<boolean>(false);
  const [selectedDate, setSelectedDate] = useState<Date | null>(new Date());

  const scrollToMethod = () => {
    // `id`가 "method"인 요소로 스크롤
    const methodSection = document.getElementById("method");
    if (methodSection) {
      methodSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  const planRegisterMutation = useMutation({
    mutationFn: planRegisterApi,
    onSuccess: () => {
      Swal.fire({
        title: "일정 등록 완료",
        text: "와우, 벌써부터 설레는걸요?",
        icon: "success",
      });
    },
    onError: (error) => {
      Swal.fire({
        title: "일정등록 에러",
        text: "일정등록에 실패했습니다. 다시 시도해주세요.",
        icon: "error",
        confirmButtonColor: "#d42c348b",
        confirmButtonText: "확인",
      });
      console.log(error.message);
    },
    onSettled: () => {
      setOpen(false);
    },
  });

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const token = localStorage.getItem("token");
    const data = new FormData(event.currentTarget);
    const location = data.get("location") as string;
    const area = data.get("area") as string;
    const method = data.get("method") as string;

    const date = selectedDate
      ? `${selectedDate.getFullYear()}-${(selectedDate.getMonth() + 1)
          .toString()
          .padStart(2, "0")}-${selectedDate
          .getDate()
          .toString()
          .padStart(2, "0")}`
      : "";

    planRegisterMutation.mutate({ date, location, area, method, token });
  };

  const { schedule } = useStore() as {
    schedule: ScheduleType | null;
  };

  // 현재 날짜 가져오기
  const today = new Date();
  const year = today.getFullYear();
  const month = ("0" + (today.getMonth() + 1)).slice(-2);
  const day = ("0" + today.getDate()).slice(-2);
  const dateString = year + "년 " + month + "월 " + day + "일";

  // 디데이 계산 함수
  const calculateDday = () => {
    if (schedule && schedule.date) {
      const eventDate = new Date(schedule.date);
      const diffTime = eventDate.getTime() - today.getTime();
      const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
      return diffDays; // 남은 일수 반환
    }
    return null; // schedule.date가 없는 경우
  };

  const dday = calculateDday();

  return (
    <WhiteBox>
      <Text onClick={scrollToMethod}>낚시방법</Text>
      <TextBar>|</TextBar>
      {/* 조건부 렌더링을 사용하여 "맞춤추천", "AI카메라", "준비물" 표시 */}
      {!schedule || !schedule.id ? (
        <Text>맞춤추천</Text>
      ) : dday === 0 ? (
        <Text>AI카메라</Text>
      ) : (
        <Text>준비물</Text>
      )}
      <TextBar>|</TextBar>
      {!schedule || !schedule.id ? (
        <Text onClick={() => setOpen(true)}>일정등록</Text>
      ) : (
        <Text>일정관리</Text>
      )}

      <PlanRegister
        open={open}
        onClose={() => setOpen(false)}
        selectedDate={selectedDate}
        setSelectedDate={setSelectedDate}
        handleSubmit={handleSubmit}
      />
    </WhiteBox>
  );
};

export default MenuComponent;
