import React from "react";
import styled from "styled-components";
import useStore from "../../store/store";
import { ProfileType, ScheduleType } from "../../store/types";

export const Text = styled.p`
  font-size: 1.1rem;
  font-weight: 300;
  margin: 1rem 1rem;
  color: black;
`;

const Fubaoguide = () => {
  const { profile, schedule } = useStore() as {
    profile: ProfileType | null;
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
    <div style={{ margin: "2rem 0rem 0rem" }}>
      <div style={{ display: "flex", justifyContent: "center" }}>
        {!schedule || !schedule.id ? (
          <div className="speech-bubble">
            <Text>{profile?.nickname}님의 일정을 알려주세요!</Text>
          </div>
        ) : (
          <div className="speech-bubble">
            <Text>
              {profile?.nickname}님,{" "}
              {dday === 0
                ? [
                    "드디어 낚시일이군요!",
                    <br key="1" />,
                    "AI카메라 버튼으로 어종 판별과 길이 측정을 해보세요.",
                  ]
                : [
                    `일정까지 ${dday}일 남았어요.`,
                    <br key="2" />,
                    "아래 준비물을 챙겨보세요.",
                  ]}
            </Text>
          </div>
        )}
      </div>

      <div style={{ display: "flex", justifyContent: "center" }}>
        <img
          src="/imgs/my_panda.png"
          alt="panda"
          style={{
            width: "50vw",
            height: "auto",
            maxWidth: "200px",
            marginTop: "0.7rem",
          }}
        />
      </div>
    </div>
  );
};

export default Fubaoguide;
