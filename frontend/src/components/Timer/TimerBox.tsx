import styled from "styled-components";
import CustomButton from "../Button";
import { useEffect, useState } from "react";
import TimeCard from "./TimeCard";
import Modal from "react-modal";
import { Button } from "@mui/material";
import { useRouter } from "next/router";
import addStudyRecord from "./add_record";
import { useRecoilValue } from "recoil";
import { signInUserState } from "@/store/Auth/auth";

const CustomModal = ({ isOpen, onClose, time, mid}: any) => {
  const [memo, setMemo] = useState("");
  const { uid, accessToken } = useRecoilValue(signInUserState);

  const handleMemoChange = (event: any) => {
    setMemo(event.target.value);
  };

  const handleSubmit = async (event: any) => {
    // ここでメモの保存処理を行う
    await addStudyRecord(time, memo, mid, uid);

    // event.preventDefault();
    onClose();
  };

  return (
      <Modal isOpen={isOpen} ariaHideApp={false}>
        <ModalText>お疲れ様でした！</ModalText>
        <p>勉強時間: {Math.floor(time / 3600)}時間 {Math.floor(time / 60)}分 {time % 60}秒</p>
        <form>
          <label>学習メモ</label><br />
          <TextareaContainer onChange={handleMemoChange} />
          <CustomButton label="記録する" onClick={handleSubmit} />
        </form>
      </Modal>

  );
};

const TimerBox = () => {
  const router = useRouter();
  const { id } = router.query;
  const [modal, setModal] = useState(false);
  const [timer, setTimer] = useState(0); // ストップウォッチの時間
  const [isActive, setIsActive] = useState(false); // ストップウォッチが動いているかどうか
  const [intervalId, setIntervalId] = useState<number | null>(null);


  const handleModalClose = () => {
    setTimer(0);
    setModal(false);
  };

  useEffect(() => {
    if (isActive) {
      const id = setInterval(() => {
        setTimer((timer) => timer + 1);
      }, 1000);
      setIntervalId(id);
    } else {
      clearInterval(intervalId);
      setIntervalId(null);
    }
    return () => clearInterval(intervalId);
  }, [isActive]);


  const handleStart = () => {
    if(!isActive) {
      setIsActive(true);
    };
  };

  const handlePause = () => {
    if(isActive) {
      setIsActive(false);
      clearInterval(intervalId);
    };
  };

  const handleStop = () => {
    if(timer > 0) {
      setIsActive(false);
      clearInterval(intervalId);
      setModal(true);

    };
  };

  return (
    <>
      <TimeCard hour={Math.floor(timer / 3600)} minute={Math.floor(timer / 60)} second={timer % 60} />
      <Box>
        <CustomButton label="pause" onClick={() => handlePause()}/>
        <CustomButton label="start" onClick={() => handleStart()}/>
        <CustomButton label="stop" onClick={() => handleStop()}/>
        <CustomModal isOpen={modal} onClose={handleModalClose} time={timer} mid={id}/>
      </Box>
    </>

  );
};

export default TimerBox;

const Box = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 24px;
  margin-top: 24px;
`;

const ModalContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 100;
`;

const ModalContent = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: white;
  padding: 24px;
  border-radius: 8px;
  text-align: center;
`;

const ModalText = styled.p`
  font-size: 24px;
  margin-bottom: 24px;
`;

const TextareaContainer = styled.textarea `
  height: 200px;
  width: 100%;
  border: 1px solid #9A9A9A;
  border-radius: 5px;
  margin-bottom: 10px;
`;