import React, { useState } from "react";
import { nicknamePatchApi } from "../../store/api";
import Modal from "@mui/joy/Modal";
import Typography from "@mui/joy/Typography";
import Sheet from "@mui/joy/Sheet";
import Button from "@mui/joy/Button";
import useStore from "../../store/store";
import { Input } from "@mui/joy";

interface NicknameUpdateProps {
  openNicknameUpdate: boolean;
  setOpenNicknameUpdate: (open: boolean) => void;
}

const NicknameUpdate = ({ openNicknameUpdate, setOpenNicknameUpdate }: NicknameUpdateProps) => {
  const { loadProfile } = useStore();
  const [nickname, setNickname] = useState("");

  const handleFormSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault(); // 폼의 기본 제출 동작 방지
    await nicknamePatch();
  };

  const nicknamePatch = async () => {
    const token = localStorage.getItem("token");
    if (token && nickname) {
      try {
        await nicknamePatchApi({ token, nickname });
        loadProfile();
        setOpenNicknameUpdate(false);
      } catch (error) {
        console.error("닉네임 변경 실패:", error);
      }
    }
  };

  return (
    <Modal
      aria-labelledby="modal-title"
      aria-describedby="modal-desc"
      open={openNicknameUpdate}
      onClose={() => setOpenNicknameUpdate(false)}
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
        <form style={{ display: "flex" }} onSubmit={handleFormSubmit}>
          <Input
            placeholder="닉네임 변경"
            value={nickname}
            onChange={(e) => setNickname(e.target.value)}
          />
          <Button type="submit">완료</Button>
        </form>
      </Sheet>
    </Modal>
  );
};

export default NicknameUpdate;
