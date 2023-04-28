import styled from "styled-components";
import CustomButton from "../Button";
import { memo, useEffect, useState } from "react";
import TimeCard from "./TimeCard";
import Modal from "react-modal";
import { Button } from "@mui/material";
import { useRouter } from "next/router";
import addStudyRecord from "./add_record";
import { useRecoilValue } from "recoil";
import { signInUserState } from "@/store/Auth/auth";

const CustomModal = memo(({ isOpen, onSubmit, onCancel, time, mid, uid}: any) => {
  const [memo, setMemo] = useState("");

  const handleMemoChange = (event: any) => {
    setMemo(event.target.value);
  };

  const handleSubmit = async () => {
    await addStudyRecord(time, memo, mid, uid);
    onSubmit();
  };

  return (
      <Modal isOpen={isOpen} ariaHideApp={false}>
        <ModalText>お疲れ様でした！</ModalText>
        <p>勉強時間: {Math.floor(time / 3600)}時間 {Math.floor(time / 60)}分 {time % 60}秒</p>
        <form>
          <label>学習メモ</label><br />
          <TextareaContainer onChange={handleMemoChange} />
        </form>
          <CustomButton label="記録する" onClick={handleSubmit} />
          <CustomButton label="キャンセル" onClick={onCancel} />
      </Modal>

  );
});

const TimerBox = () => {
  const router = useRouter();
  const { id } = router.query; // midをURLから取得
  const [modal, setModal] = useState(false); // モーダルの表示・非表示
  const [timer, setTimer] = useState(0); // ストップウォッチの時間
  const [isActive, setIsActive] = useState(false); // ストップウォッチが動いているかどうか
  const [intervalId, setIntervalId] = useState<number | null>(null);
  const { uid } = useRecoilValue(signInUserState);

  const handleModalClose = (resetTimer: boolean) => {
    if (resetTimer) {
      handleReset();
    }
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

  const handleReset = () => {
    setTimer(0);
  }

  return (
    <>
      <TimeCard hour={Math.floor(timer / 3600)} minute={Math.floor(timer / 60)} second={timer % 60} />
      <Box>
        { isActive
          ? <CustomButton label="pause" onClick={() => handlePause()}/>
          : <CustomButton label="reset" onClick={() => handleReset()}/>
        }

        <CustomButton label="start" onClick={() => handleStart()}/>
        <CustomButton label="stop" onClick={() => handleStop()}/>
        {/* <CustomModal
          isOpen={modal}
          onSubmit={() => handleModalClose(true)}
          onCancel={() => handleModalClose(false)}
          time={timer}
          mid={id}
          uid={uid}
        /> */}
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
  padding: 5px;
`;