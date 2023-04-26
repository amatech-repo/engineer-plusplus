// ユーザが登録している教材の詳細ページ
// http://localhost:3000/materialDetail/id
import styled from "styled-components";

import Layout from "@/components/Layouts/layout";
import MaterialDetailCard from "@/components/MaterialDetailCard";
import TimeCard from "@/components/Timer/TimeCard";
import TimerBox from "@/components/Timer/TimerBox";
import StudyChart from "@/components/Chart";

const MaterialDetail = () => {
  return (
    <Layout>
      <div>
        <SContainer>
          <MaterialDetailCard />
          <STimerContainer>
            <TimeCard hour={1} minute={23} second={45} />
            <TimerBox />
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