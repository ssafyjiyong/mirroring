import React, { useEffect } from "react";
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
function chooseJosa(word: string, josaPair: string) {
  const lastChar = word.charCodeAt(word.length - 1);
  const jongSung = (lastChar - 44032) % 28;
  const [first, second] = josaPair.split("/");
  return jongSung ? first : second;
}

const ResultPage = () => {
  const { profile } = useStore() as { profile: ProfileType | null };
  const nickname = profile?.nickname || "낚시왕푸바오";

  // 현재 날짜 가져오기
  const today = new Date();
  const year = today.getFullYear();
  const month = ("0" + (today.getMonth() + 1)).slice(-2);
  const day = ("0" + today.getDate()).slice(-2);
  const dateString = year + ". " + month + ". " + day;

  // 선택된 이미지 가져오기
  const storedImage = localStorage.getItem("selectedImage");

  // 이미지 저장 버튼 클릭 핸들러
  const handleSaveImage = () => {
    if (storedImage) {
      // a 태그를 생성하여 프로그래매틱하게 클릭 이벤트를 발생시킵니다.
      const a = document.createElement("a");
      a.href = storedImage; // localStorage에서 가져온 이미지의 URL
      a.download = "downloaded_image.png"; // 다운로드 될 파일의 이름
      document.body.appendChild(a); // a 태그를 문서에 추가
      a.click(); // a 태그 클릭 이벤트를 발생시켜 파일 다운로드를 실행
      document.body.removeChild(a); // 사용 후 a 태그를 제거
    }
  };

  // 페이지 벗어나면 스토리지 이미지 지우기
  useEffect(() => {
    const handleUnload = () => {
      localStorage.removeItem("selectedImage"); // 'selectedImage' 키로 저장된 항목을 localStorage에서 삭제
    };

    window.addEventListener("beforeunload", handleUnload);

    return () => {
      window.removeEventListener("beforeunload", handleUnload);
    };
  }, []);

  return (
    <>
      <TitleBox>
        <span>{profile?.nickname},</span>
        <span>가녀린 몸으로 자기 몸만한 월척 낚시 "기적"</span>
      </TitleBox>
      <span>{dateString}</span>
      <div style={{ display: "flex", justifyContent: "center" }}>
        {storedImage && (
          <img
            src={storedImage}
            alt="selected_image"
            style={{ width: "90vw", maxWidth: "550px" }}
          />
        )}
      </div>
      <ContentBox>
        <div>
          <p>
            "{profile?.nickname}
            {chooseJosa(nickname, "이/가")} 직접 낚은 월척을 자랑했다.{" "}
            {profile?.nickname}
            {chooseJosa(nickname, "은/는")} 무려
            <span>(길이)</span>의<span> (어종)</span>
            {chooseJosa(nickname, "을/를")}낚았다."
          </p>
        </div>
      </ContentBox>
      <button onClick={handleSaveImage}>이미지 저장하기</button>
    </>
  );
};

export default ResultPage;
