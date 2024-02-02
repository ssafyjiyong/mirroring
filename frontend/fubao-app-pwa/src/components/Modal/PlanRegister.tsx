import React from 'react';
import styled from "styled-components";
import Modal from '@mui/joy/Modal';
import ModalClose from '@mui/joy/ModalClose';
import Typography from '@mui/joy/Typography';
import Sheet from '@mui/joy/Sheet';
import Button from '@mui/joy/Button';
import DatePicker from "react-datepicker";
import 'react-datepicker/dist/react-datepicker.css';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 0.4rem;
`;

const RegisterBox = styled.form`
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

interface PlanRegisterProps {
  open: boolean;
  onClose: () => void;
  selectedDate: Date | null;
  setSelectedDate: (date: Date | null) => void;
  handleSubmit: (event: React.FormEvent<HTMLFormElement>) => void;
}

const PlanRegister: React.FC<PlanRegisterProps> = ({ open, onClose, selectedDate, setSelectedDate, handleSubmit }) => {
  const today = new Date();
  const year = today.getFullYear();
  const month = ("0" + (today.getMonth() + 1)).slice(-2);
  const day = ("0" + today.getDate()).slice(-2);

  return (
    <Modal
      aria-labelledby="modal-title"
      aria-describedby="modal-desc"
      open={open}
      onClose={onClose}
      sx={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }}
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
          <RegisterBox onSubmit={handleSubmit}>
            <AlignDiv>
              <Span>일정: </Span>
              <DatePicker
                className="datePicker"
                dateFormat="yyyy.MM.dd"
                shouldCloseOnSelect
                minDate={new Date()}
                maxDate={new Date(year + 1 + "-" + month + "-" + day)}
                selected={selectedDate}
                onChange={(date) => setSelectedDate(date)}
              />
            </AlignDiv>
            <AlignDiv>
                  <Span>장소: </Span>
                  <Input
                    name="location"
                    type="text"
                    placeholder="장소 (예시 부산항)"
                  />
                </AlignDiv>
                <AlignDiv>
                  <Span>포인트: </Span>
                  <Input
                    name="area"
                    type="text"
                    placeholder="포인트 (예시 방파제)"
                  />
                </AlignDiv>
                <AlignDiv>
                  <Span>방법: </Span>
                  <Input
                    name="method"
                    type="text"
                    placeholder="방법 (예시 찌낚시)"
                  />
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
        </Container>
      </Sheet>
    </Modal>
  );
};

export default PlanRegister;
