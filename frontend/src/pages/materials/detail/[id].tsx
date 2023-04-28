// ユーザが登録している教材の詳細ページ
// http://localhost:3000/materialDetail/id
import styled from "styled-components";

import Layout from "@/components/Layouts/layout";
import MaterialDetailCard from "@/components/MaterialDetailCard";
import TimeCard from "@/components/Timer/TimeCard";
import TimerBox from "@/components/Timer/TimerBox";
import StudyChart from "@/components/Chart";
import { SetStateAction, useEffect, useState } from "react";
import { Button } from "reactstrap";

const MaterialDetail = () => {

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
    setIsActive(true);
  };

  const handleStop = () => {
    setIsActive(false);
    setTimer(0);
    clearInterval(setIntervalID);
  };

  const handlePause = () => {
    setIsActive(false);
    clearInterval(setIntervalID);
  }

  return (
    <Layout>
      <div>
        <SContainer>
          <MaterialDetailCard />
          <STimerContainer>
            <TimeCard hour={Math.floor(timer / 3600)} minute={Math.floor(timer / 60)} second={timer % 60} />
            {!isActive && (
              <Button variant="contained" color="inherit" onClick={handleStart}>
                START
              </Button>
            )}

            {isActive && (
              <Button variant="contained" color="inherit" onClick={handlePause}>
                PAUSE
              </Button>
            )}

            {timer > 0 && (
              <Button variant="contained" color="inherit" onClick={handleStop}>
                STOP
              </Button>
            )}
          </STimerContainer>
        </SContainer>
        <StudyChart />
      </div>
    </Layout>
  );
};

export default MaterialDetail;

const SContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 24px;
`

const STimerContainer = styled.div`
  height: 100%;
`

