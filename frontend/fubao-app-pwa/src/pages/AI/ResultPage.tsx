import React from "react";
import styled from "styled-components";
import useStore from "../../store/store";
import { ProfileType } from "../../store/types";

const TitleBox = styled.div`
  border: 1px solid black;
  height: 10rem;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const ContentBox = styled.div`
  border: 1px solid black;
  height: 10rem;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const ResultPage = () => {
  const { profile } = useStore() as { profile: ProfileType | null };

  // 현재 날짜 가져오기
  const today = new Date();
  const year = today.getFullYear();
  const month = ("0" + (today.getMonth() + 1)).slice(-2);
  const day = ("0" + today.getDate()).slice(-2);
  const dateString = year + ". " + month + ". " + day;

  return (
    <>
      <TitleBox>
        <span>{profile?.nickname},</span>
        <span>가녀린 몸으로 자기 몸만한 월척 낚시 "기적"</span>
      </TitleBox>
      <span>{dateString}</span>
      <ContentBox>
        <div>
          <span>"</span>
          <span>{profile?.nickname}</span>
          <span>직접 낚은 월척을 자랑했다.</span>
          <span>{profile?.nickname}</span>
          <span>무려</span>
          <span>(길이)</span>
          <span>의</span>
          <span>(어종)</span>
          <span>낚았다."</span>
        </div>
      </ContentBox>
    </>
  );
};

export default ResultPage;
