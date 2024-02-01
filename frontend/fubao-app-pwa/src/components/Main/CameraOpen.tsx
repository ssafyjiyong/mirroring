import React, { useRef, useState } from "react";
import styled from "styled-components";
import { WhiteBox, AlignDiv } from "./styles";
import "../../index.css";
import "../../FontAwsome";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const MyButton = styled.button`
  border: 3px solid #168bf2;
  font-size: 1rem;
  font-weight: 500;
  color: #778a9b;
  margin: 1rem;
  border-radius: 30px;
  height: 7rem;
  width: 7rem;
  background-color: white;
  box-shadow: 3px 5px 5px rgba(0, 0, 0, 0.1);
`;

const CarouselWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const CarouselContainer = styled.div`
  display: flex;
  overflow: hidden;
  max-width: 13rem;
`;

const CarouselItem = styled.div`
  min-width: 100%;
  display: flex;
  justify-content: center;
  transition: transform 0.5s ease-in-out;
`;

const ArrowButton = styled.button`
  border: none;
  background: none;
  color: black;
  cursor: pointer;
  margin: 0 1rem; // 화살표 버튼 주변에 여백 추가
`;

const CameraOpen = () => {
  const [fileSelected, setFileSelected] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);
  const totalItems = 4; // 캐러셀 항목의 총 수
  const touchStartXRef = useRef(0); // 터치 시작 x 좌표를 저장할 ref
  const touchEndXRef = useRef(0); // 터치 끝 x 좌표를 저장할 ref

  const handleTouchStart = (event: React.TouchEvent<HTMLInputElement>) => {
    touchStartXRef.current = event.touches[0].clientX; // 터치 시작 위치 저장
  };

  const handleTouchMove = (event: React.TouchEvent<HTMLInputElement>) => {
    touchEndXRef.current = event.touches[0].clientX; // 터치 이동 중 위치 갱신
  };

  const handleTouchEnd = () => {
    if (touchStartXRef.current - touchEndXRef.current > 75) {
      // 오른쪽으로 스와이프
      setActiveIndex((prevIndex) => (prevIndex + 1) % totalItems);
    } else if (touchStartXRef.current - touchEndXRef.current < -75) {
      // 왼쪽으로 스와이프
      setActiveIndex((prevIndex) => (prevIndex - 1 + totalItems) % totalItems);
    }
  };

  const handleArrowClick = (direction: 'left' | 'right') => {
    if (direction === "right") {
      if (activeIndex < totalItems - 1) {
        setActiveIndex(activeIndex + 1);
      } else {
        // 마지막 아이템에서 다음으로 이동 시 첫 번째 아이템으로 순환
        setActiveIndex(0);
      }
    } else if (direction === "left") {
      if (activeIndex > 0) {
        setActiveIndex(activeIndex - 1);
      } else {
        // 첫 번째 아이템에서 이전으로 이동 시 마지막 아이템으로 순환
        setActiveIndex(totalItems - 1);
      }
    }
  };

  const handleFileChange = async (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files && event.target.files.length > 0) {
      setFileSelected(true);
    }
  };

  return (
    <WhiteBox className="filebox">
      <AlignDiv style={{ flexDirection: "column" }}>
        <form
          action="#"
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          {!fileSelected && (
            <>
              <input
                className="upload-name"
                value="물고기 종류와 길이를 알려줄게요!"
                readOnly
              />
              <label htmlFor="file">
                <img
                  src="/camera.png"
                  alt="camera"
                  style={{ width: "10rem", height: "10rem" }}
                />
              </label>
            </>
          )}

          <input
            type="file"
            id="file"
            accept="image/*;capture=camera"
            onChange={handleFileChange}
          />

          {fileSelected && (
            <>
              <input
                className="upload-name"
                value="어떤 물체와 비교해볼까요?"
                readOnly
              />

              <CarouselWrapper>
                <ArrowButton
                  type="button"
                  onClick={() => handleArrowClick("left")}
                >
                  <FontAwesomeIcon icon="chevron-left" />
                </ArrowButton>

                <CarouselContainer
                  onTouchStart={handleTouchStart}
                  onTouchMove={handleTouchMove}
                  onTouchEnd={handleTouchEnd}
                >
                  <CarouselItem
                    style={{ transform: `translateX(-${activeIndex * 100}%)` }}
                  >
                    {/* 각 CarouselItem에 버튼 그룹을 배치 */}
                    <MyButton>
                      다시
                      <br />
                      선택
                    </MyButton>
                  </CarouselItem>

                  <CarouselItem
                    style={{ transform: `translateX(-${activeIndex * 100}%)` }}
                  >
                    <MyButton>
                      신용
                      <br />
                      카드
                    </MyButton>
                  </CarouselItem>

                  <CarouselItem
                    style={{ transform: `translateX(-${activeIndex * 100}%)` }}
                  >
                    <MyButton>담배갑</MyButton>
                  </CarouselItem>

                  <CarouselItem
                    style={{ transform: `translateX(-${activeIndex * 100}%)` }}
                  >
                    <MyButton>
                      비교
                      <br />
                      없음
                    </MyButton>
                  </CarouselItem>
                </CarouselContainer>

                <ArrowButton
                  type="button"
                  onClick={() => handleArrowClick("right")}
                >
                  <FontAwesomeIcon icon="chevron-right" size="1x" />
                </ArrowButton>
              </CarouselWrapper>
            </>
          )}
          <p style={{ margin: "0", color: "#778A9B" }}>CLICK!</p>
        </form>
      </AlignDiv>
    </WhiteBox>
  );
};

export default CameraOpen;
