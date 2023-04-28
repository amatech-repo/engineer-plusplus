import styled from "styled-components";
import CustomButton from "../Button";
import { useEffect, useState } from "react";
import TimeCard from "./TimeCard";
import Modal from "react-modal";
import { Button } from "@mui/material";

const CustomModal = ({ isOpen, onClose }: any) => {
  return (
    <Modal isOpen={isOpen} >
      <p>お疲れ様でした！</p>
      <Button onClick={onClose}>閉じる</Button>
    </Modal>
  );
};

const TimerBox = () => {
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
        <CustomModal isOpen={modal} onClose={handleModalClose} />
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

