import React, { useState } from 'react'
import styled from 'styled-components';
import Button from '@mui/joy/Button';
import Modal from '@mui/joy/Modal';
import ModalClose from '@mui/joy/ModalClose';
import Typography from '@mui/joy/Typography';
import Sheet from '@mui/joy/Sheet';
import { WhiteBox } from './styles';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import axios from "axios";
import Swal from "sweetalert2";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 0.4rem;
`;

const RegisterBox = styled.div`
  height: 25rem;
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

const Foryou = () => {
  const [open, setOpen] = React.useState<boolean>(false);
  const [selectedDate, setSelectedDate] = useState<Date | null>(new Date());
  const API_URL = "http://127.0.0.1:8000";

  const handleSubmit = (event:any) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const email = data.get("email") as string;
    const user = data.get("user") as string;
    const date = data.get("date") as string;
    const location = data.get("location") as string;
    const area = data.get("area") as string;
    const method = data.get("method") as string;
    const done = false;

    axios.post(`${API_URL}/user/register/`, { user, date, location, area, method, done })
      .then(response => {
        Swal.fire({
          title: "회원가입 완료. \n 로그인 하시겠습니까?",
          icon: "success",
          showCancelButton: true,
          confirmButtonColor: "#3085d6",
          cancelButtonColor: "#d33",
          confirmButtonText: "네",
          cancelButtonText: "아니요",
        }).then(result => {
          if (result.isConfirmed) {
            navigate("/login");
          }
        });
      })
      .catch(error => {
        Swal.fire({
          title: "회원가입 에러",
          text: "회원가입에 실패했습니다. 다시 시도해주세요.",
          icon: "error",
          confirmButtonColor: "#682cd48c",
          confirmButtonText: "확인",
        });
      });
  };

  return (
    <WhiteBox>
       <React.Fragment>
      <Button variant="outlined" color="neutral" onClick={() => setOpen(true)}>
        일정 등록하기
      </Button>
      <Modal
        aria-labelledby="modal-title"
        aria-describedby="modal-desc"
        open={open}
        onClose={() => setOpen(false)}
        sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}
      >
        <Sheet
          variant="outlined"
          sx={{
            maxWidth: 500,
            borderRadius: 'md',
            p: 3,
            boxShadow: 'lg',
          }}
        >
          <ModalClose variant="plain" sx={{ m: 1 }} />
          <Typography
            component="h2"
            id="modal-title"
            level="h4"
            textColor="inherit"
            fontWeight="bold"
            fontSize={"1.5rem"}

            textAlign={"center"}
            mb={1}
          >
            일정등록
          </Typography>
          <Container id="modal-desc">
      {/* 일정 등록 칸 */}
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
            <Input type="text" placeholder="장소 (예시 부산항)" />
          </AlignDiv>
          <AlignDiv>
            <Span>포인트: </Span>
            <Input type="text" placeholder="포인트 (예시 방파제)" />
          </AlignDiv>
          <AlignDiv>
            <Span>방법: </Span>
            <Input type="text" placeholder="방법 (예시 찌낚시)" />
          </AlignDiv>
            <Button
              size="md"
              variant="solid"
              style={{ margin: "2rem", marginRight: "0.2rem" }}
              type="submit"
            >
              등록하기
            </Button>
        </RegisterBox>
      </form>
    </Container>
        </Sheet>
      </Modal>
    </React.Fragment>
    </WhiteBox>
  )
}

export default Foryou