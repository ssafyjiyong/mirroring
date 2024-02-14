import React, { useEffect } from "react";
import styled from "styled-components";
import useStore from "../../store/store";
import { ProfileType } from "../../store/types";
import Button from "@mui/joy/Button";
import { useNavigate } from "react-router-dom";

const TitleBox = styled.div`
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-size: 1.5rem;
  font-weight: 600;
  padding: 0.5rem 1rem 0rem;
`;

const ContentBox = styled.div`
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-size: 1.2rem;
  font-weight: 400;
  padding-bottom: 1rem;
  margin: 0.5rem 1rem 0rem;
  /* text-align: center; */
`;

const AlignBox = styled.div`
  display: flex;
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

  const length = localStorage.getItem("length");
  const species: string | null = localStorage.getItem("species");

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

  const navigate = useNavigate();
  const goToHome = () => {
    navigate("/home");
  };
  const goToCollection = () => {
    navigate("/collection");
  };

  // 페이지 벗어나면 스토리지 이미지 지우기
  useEffect(() => {
    const handleUnload = () => {
      localStorage.removeItem("selectedImage"); // 'selectedImage' 키로 저장된 항목을 localStorage에서 삭제
      localStorage.removeItem("species");
      localStorage.removeItem("length");
    };

    window.addEventListener("beforeunload", handleUnload);

    return () => {
      window.removeEventListener("beforeunload", handleUnload);
    };
  }, []);

  return (
    <div
      style={{
        backgroundColor: "#E3F2FD",
        minHeight: "100vh",
        height: "auto",
        padding: "1rem 0rem 1rem",
        position: "relative",
      }}
    >
      <div style={{ backgroundColor: "white", margin: "0rem 1rem" }}>
        <div
          style={{
            display: "flex",
            justifyContent: "start",
            alignItems: "center",
            padding: "0.5rem 0.5rem 0rem",
          }}
        >
          <img
            src="/favicon_io/android-chrome-192x192.png"
            alt="logo"
            style={{ width: "2rem", height: "2rem", margin: "0rem 0.3rem" }}
          />
          <span
            style={{
              fontWeight: 600,
              fontSize: "1.5rem",
              color: "#5D7A93",
            }}
          >
            FUBAO
          </span>
        </div>

        <TitleBox>
          <p style={{ margin: "0rem" }}>
            <span>{profile?.nickname}, </span>
            가녀린 몸으로 자기 몸만한 월척 낚시 "기적"
          </p>
        </TitleBox>
        <AlignBox>
          <span>{dateString}</span>
        </AlignBox>
        <div style={{ display: "flex", justifyContent: "center" }}>
          {storedImage && (
            <img
              src={storedImage}
              alt="selected_image"
              style={{
                width: "90vw",
                maxWidth: "544px",
                margin: "1.2rem 0rem 0rem",
              }}
            />
          )}
        </div>
        <AlignBox>
          <span>
            {profile?.nickname}
            {chooseJosa(nickname, "이/가")} 올린 {length ? `${length}cm ` : ""}
            {species}
          </span>
        </AlignBox>
        <ContentBox>
            <p style={{ marginBottom: "0rem" }}>
              {profile?.nickname}
              {chooseJosa(nickname, "이/가")} 직접 낚은 월척을 자랑했다.{" "}
              {profile?.nickname}
              {chooseJosa(nickname, "은/는")}
              {length && <span style={{ fontWeight: "600" }}>{length}cm의</span>}
              <span style={{ fontWeight: "600" }}> {species}</span>
              {chooseJosa(species!, "을/를")} 낚았다. 낚시터 곳곳에서는 월척을
              낚은 {profile?.nickname}
              {chooseJosa(nickname, "을/를")} 대단하다는 듯 바라보고 있다.
            </p>
        </ContentBox>
      </div>

      <div
        style={{
          display: "flex",
          justifyContent: "end",
          backgroundColor: "#E3F2FD",
          paddingRight: "1rem",
          paddingTop: "0.5rem",
        }}
      >
        <Button color="success" onClick={goToCollection} style={{ marginRight: "0.5rem" }}>
          도감보기
        </Button>
        <Button onClick={handleSaveImage} style={{ marginRight: "0.5rem" }}>
          이미지 저장
        </Button>
        <Button color="danger" onClick={goToHome}>
          돌아가기
        </Button>
      </div>
    </div>
  );
};

export default ResultPage;
