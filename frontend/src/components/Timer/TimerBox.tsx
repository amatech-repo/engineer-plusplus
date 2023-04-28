import styled from "styled-components";
import CustomButton from "../Button";
import { useEffect, useState } from "react";
import TimeCard from "./TimeCard";

const TimerBox = () => {
  const [modal, setModal] = useState(false);
  const [timer, setTimer] = useState(0); // ストップウォッチの時間
  const [isActive, setIsActive] = useState(false); // ストップウォッチが動いているかどうか
  const [setIntervalID, setSetIntervalID] = useState(null);

  useEffect(() => {
    let intervalId: any = null;
    if (isActive) {
      intervalId = setInterval(() => {
        setTimer((timer) => timer + 1);
      }, 1000);
      setSetIntervalID(intervalId);
    } else if (!isActive && timer !== 0) {
      clearInterval(intervalId);
    }
    return () => clearInterval(intervalId);
  }, [isActive, timer]);

  const handleStart = () => {
    if(!isActive) {
      setIsActive(true);
    };
  };

  const handlePause = () => {
    if(isActive) {
      setIsActive(false);
      clearInterval(setIntervalID);
    };
  };

  const handleStop = () => {
    if(timer > 0) {
      setIsActive(false);
      setTimer(0);
      clearInterval(setIntervalID);
      setModal(true);
    };
  };

  const Modal = ({isOpen, closeModal}) => {
    return (
      <>
        {isOpen &&
          <ModalContainer>
            <ModalContent>
              <ModalText>お疲れ様でした</ModalText>
              <CustomButton label="OK" onClick={closeModal}/>
            </ModalContent>
          </ModalContainer>
        }
      </>
    );
  };

  return (
    <>
      <TimeCard hour={Math.floor(timer / 3600)} minute={Math.floor(timer / 60)} second={timer % 60} />
      <Box>
        <CustomButton label="pause" onClick={() => handlePause()}/>
        <CustomButton label="start" onClick={() => handleStart()}/>
        <CustomButton label="stop" onClick={() => handleStop()}/>
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

