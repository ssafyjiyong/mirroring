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

// 조사를 결정하는 함수
function chooseJosa(word:string, josaPair:string) {
  const lastChar = word.charCodeAt(word.length - 1);
  const jongSung = (lastChar - 44032) % 28;
  const [first, second] = josaPair.split('/');
  return jongSung ? first : second;
}

const ResultPage = () => {
  const { profile } = useStore() as { profile: ProfileType | null };

  const nickname = profile?.nickname || '낚시왕푸바오';

  // 현재 날짜 가져오기
  const today = new Date();
  const year = today.getFullYear();
  const month = ("0" + (today.getMonth() + 1)).slice(-2);
  const day = ("0" + today.getDate()).slice(-2);
  const dateString = year + ". " + month + ". " + day;

  // 선택된 이미지 가져오기
  const storedImage = localStorage.getItem("selectedImage");

  return (
    <>
      <TitleBox>
        <span>{profile?.nickname},</span>
        <span>가녀린 몸으로 자기 몸만한 월척 낚시 "기적"</span>
      </TitleBox>
      <span>{dateString}</span>
      <div>
      {storedImage && <img src={storedImage} alt="selected_image" />}
      </div>
      <ContentBox>
        <div>
          <p>
          "{profile?.nickname}{chooseJosa(nickname, "이/가")} 직접 낚은 월척을 자랑했다. {profile?.nickname}{chooseJosa(nickname, "은/는")} 무려
          <span>(길이)</span>의
          <span> (어종)</span>{chooseJosa(nickname, "을/를")}낚았다."
          </p>
        </div>
      </ContentBox>
    </>
  );
};

export default ResultPage;
