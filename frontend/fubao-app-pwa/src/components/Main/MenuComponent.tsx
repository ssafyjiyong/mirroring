import React, { useState } from "react";
import { WhiteBox, AlignDiv, PendingBox } from "./styles";
import AspectRatio from "@mui/joy/AspectRatio";
import Box from "@mui/joy/Box";
import Card from "@mui/joy/Card";
import Modal from "@mui/joy/Modal";
import ModalClose from "@mui/joy/ModalClose";
import Typography from "@mui/joy/Typography";
import Sheet from "@mui/joy/Sheet";
import styled from "styled-components";
import Swal from "sweetalert2";
import "react-datepicker/dist/react-datepicker.css";
import { useMutation } from "@tanstack/react-query";
import { planRegisterApi } from "../../store/api";
import PlanRegister from "../Modal/PlanRegister";
import useStore from "../../store/store";
import { AxiosError } from "axios";
import { ScheduleType, ProfileType } from "../../store/types";
import {
  classifyApiCreditCard,
  classifyApiCigarette,
  classifyApiNone,
} from "../../store/api";
import { useNavigate } from "react-router-dom";

interface Props {
  profile: ProfileType | null;
}

const WhiteBoxHere = styled.div`
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

const Text = styled.p`
  font-size: 1.1rem;
  font-weight: 400;
  margin: 0rem 0rem;
  color: #676f75;
  cursor: pointer;
`;

const TextBar = styled.p`
  font-size: 1.1rem;
  font-weight: 400;
  margin: 0rem 0rem;
  color: #b4bbc0;
`;

const Container = styled.button`
  display: flex;
  flex-direction: column;
  align-items: center;
  border: 0;
  background-color: white;
`;

const MenuComponent = ({ profile }: Props) => {
  const [planRegisterOpen, setplanRegisterOpen] =
    React.useState<boolean>(false);
  const [cameraOpen, setcameraOpen] = React.useState<boolean>(false);
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
      setplanRegisterOpen(false);
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

  // 카메라 관련 함수들
  const [fileSelected, setFileSelected] = useState(false);
  const [selectedFile, setSelectedFile] = useState<File | null>(null);

  const navigate = useNavigate();

  const goToResult = () => {
    navigate("/result");
  };

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files && event.target.files.length > 0) {
      const file = event.target.files[0];
      const reader = new FileReader();
  
      reader.onloadend = () => {
        const base64String = reader.result as string;
        // Base64 문자열을 로컬 스토리지에 저장
        localStorage.setItem("selectedImage", base64String);
        setSelectedFile(file);
        setFileSelected(true);
      };
  
      reader.readAsDataURL(file);
    } else {
      setSelectedFile(null);
      setFileSelected(false);
      localStorage.removeItem("selectedImage"); // 이미지 선택을 취소한 경우 로컬 스토리지에서 삭제
    }
  };

  const handleCancel = () => {
    setSelectedFile(null);
    setFileSelected(false);
    const fileInput = document.getElementById("file") as HTMLInputElement;
    if (fileInput) {
      fileInput.value = "";
    }
  };

  const creditCardMutation = useMutation({
    mutationFn: classifyApiCreditCard,
    onSuccess: () => {
      setSelectedFile(null);
      setFileSelected(false);
      goToResult();
    },
    onError: (error: AxiosError) => {
      Swal.fire({
        title: "입력 에러",
        html: "알 수 없는 이유로 분석에 실패했습니다. <br> 다시 시도해주세요.",
        icon: "error",
        confirmButtonColor: "#d42c348b",
        confirmButtonText: "확인",
      });
      setcameraOpen(false);
      console.log(error.message);
    },
  });

  const cigaretteMutation = useMutation({
    mutationFn: classifyApiCigarette,
    onSuccess: () => {
      setSelectedFile(null);
      setFileSelected(false);
      goToResult();
    },
    onError: (error: AxiosError) => {
      Swal.fire({
        title: "입력 에러",
        html: "알 수 없는 이유로 분석에 실패했습니다. <br> 다시 시도해주세요.",
        icon: "error",
        confirmButtonColor: "#d42c348b",
        confirmButtonText: "확인",
      });
      setcameraOpen(false);
      console.log(error.message);
    },
  });

  const noneMutation = useMutation({
    mutationFn: classifyApiNone,
    onSuccess: () => {
      setSelectedFile(null);
      setFileSelected(false);
      goToResult();
    },
    onError: (error: AxiosError) => {
      Swal.fire({
        title: "입력 에러",
        html: "알 수 없는 이유로 분석에 실패했습니다. <br> 다시 시도해주세요.",
        icon: "error",
        confirmButtonColor: "#d42c348b",
        confirmButtonText: "확인",
      });
      setcameraOpen(false);
      console.log(error.message);
    },
  });

  const data = [
    {
      src: "/imgs/card.png",
      title: "신용카드",
      description: "높은 정확도",
      onClick: () => {
        if (selectedFile) {
          creditCardMutation.mutate({
            file: selectedFile,
            uid: profile?.id,
          });
        } else {
          // 파일이 선택되지 않았을 때의 처리 로직 (예: 경고 메시지 표시)
          Swal.fire("파일을 선택해주세요.", "", "warning");
        }
      },
    },
    {
      src: "/imgs/ciga.png",
      title: "담배갑",
      description: "보통 정확도",
      onClick: () => {
        if (selectedFile) {
          cigaretteMutation.mutate({
            file: selectedFile,
            uid: profile?.id,
          });
        } else {
          // 파일이 선택되지 않았을 때의 처리 로직 (예: 경고 메시지 표시)
          Swal.fire("파일을 선택해주세요.", "", "warning");
        }
      },
    },
    {
      src: "/imgs/fish.png",
      title: "해당없음",
      description: "어종만 판별",
      onClick: () =>
        selectedFile &&
        noneMutation.mutate({
          file: selectedFile,
          uid: profile?.id,
        }),
    },
    {
      src: "/imgs/cancel.png",
      title: "취소",
      description: "뒤로가기",
      onClick: handleCancel,
    },
  ];

  return (
    <WhiteBoxHere>
      <Text onClick={scrollToMethod}>낚시방법</Text>
      <TextBar>|</TextBar>
      {/* 조건부 렌더링을 사용하여 "맞춤추천", "AI카메라", "준비물" 표시 */}
      {!schedule || !schedule.id ? (
        <Text>맞춤추천</Text>
      ) : dday === 0 ? (
        <label htmlFor="file">
          <Text onClick={() => setcameraOpen(true)}>AI카메라</Text>
        </label>
      ) : (
        <Text>준비물</Text>
      )}
      <TextBar>|</TextBar>
      {!schedule || !schedule.id ? (
        <Text onClick={() => setplanRegisterOpen(true)}>일정등록</Text>
      ) : (
        <Text>일정관리</Text>
      )}

      <input
        type="file"
        id="file"
        accept="image/*;capture=camera"
        onChange={handleFileChange}
        style={{ display: "none" }}
      />

      <PlanRegister
        open={planRegisterOpen}
        onClose={() => setplanRegisterOpen(false)}
        selectedDate={selectedDate}
        setSelectedDate={setSelectedDate}
        handleSubmit={handleSubmit}
      />

      {/* 카메라 오픈 모달 */}
      <Modal
        aria-labelledby="modal-title"
        aria-describedby="modal-desc"
        open={cameraOpen}
        onClose={() => setcameraOpen(false)}
        sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}
      >
        <Sheet
          variant="outlined"
          sx={{
            maxWidth: 500,
            borderRadius: "md",
            p: 3,
            boxShadow: "lg",
          }}
        >
          <ModalClose variant="plain" sx={{ m: 1 }} />

          {creditCardMutation.isPending || cigaretteMutation.isPending || noneMutation.isPending ? (
            <div style={{ display: "flex", justifyContent: "center" }}>
              분석중입니다. 조금만 기다려주세요.
            </div>
          ) : (
            <WhiteBox className="filebox">
              <AlignDiv style={{ flexDirection: "column" }}>
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  {!fileSelected && (
                    <>
                      <p
                        style={{
                          margin: "0.5rem",
                          fontSize: "1.5rem",
                          fontWeight: "600",
                        }}
                      >
                        입력된 사진이 없어요.
                      </p>
                      <img
                        src="/camera.png"
                        alt="camera"
                        style={{ width: "10rem", height: "10rem" }}
                      />
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
                      <p
                        style={{
                          margin: "0.5rem",
                          fontSize: "1.5rem",
                          fontWeight: "600",
                        }}
                      >
                        어떤 물체와 비교해 볼까요?
                      </p>

                      <Box
                        sx={{
                          display: "flex",
                          gap: 1,
                          py: 3,
                          overflow: "auto",
                          width: 320,
                          scrollSnapType: "x mandatory",
                          "& > *": {
                            scrollSnapAlign: "center",
                          },
                          "::-webkit-scrollbar": { display: "none" },
                        }}
                      >
                        {data.map((item) => (
                          <Card
                            orientation="horizontal"
                            size="sm"
                            key={item.title}
                            variant="outlined"
                            sx={{ padding: "0.5rem" }}
                          >
                            <Container onClick={item.onClick}>
                              <AspectRatio ratio="1" sx={{ minWidth: 60 }}>
                                <img
                                  srcSet={`${item.src}?h=120&fit=crop&auto=format&dpr=2 2x`}
                                  src={`${item.src}?h=120&fit=crop&auto=format`}
                                  alt={item.title}
                                />
                              </AspectRatio>
                              <Box
                                sx={{
                                  whiteSpace: "nowrap",
                                  mx: 1,
                                  textAlign: "center",
                                }}
                              >
                                <Typography level="title-md">
                                  {item.title}
                                </Typography>
                                <Typography level="body-sm">
                                  {item.description}
                                </Typography>
                              </Box>
                            </Container>
                          </Card>
                        ))}
                      </Box>
                      <p style={{ margin: "0", color: "#778A9B" }}>
                        원하는 옵션을 선택해주세요
                      </p>
                    </>
                  )}
                </div>
              </AlignDiv>
            </WhiteBox>
          )}
        </Sheet>
      </Modal>
    </WhiteBoxHere>
  );
};

export default MenuComponent;
