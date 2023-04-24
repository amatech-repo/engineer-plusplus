import Navigation from "@/components/Navigataion";
import Card from "@/components/Card";
import RecentStudy from "@/components/RecentStudy";
import MaterialList from "@/components/MaterialsList";
import TodayStudyTime from "@/components/TodayStudyTime";
import styled from "styled-components";

const Dashboard = () => {
  return (
    <>
      <Container>
        <RecentStudyContainer>
          <RecentStudy />
        </RecentStudyContainer>
        <TodayStudyTimeContainer>
          <TodayStudyTime studyTime={12345} />
        </TodayStudyTimeContainer>
      </Container>
      <MaterialList listTitle="教材一覧" />
      <MaterialList listTitle="Youtube" />
      <MaterialList listTitle="Udemy" />
      <MaterialList listTitle="Progate" />
      <MaterialList listTitle="書籍" />
      <MaterialList listTitle="その他" />
    </>
  );
};

export default Dashboard;

const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 2rem;

  @media (max-width: 800px) {
    flex-direction: column;
    gap: 1rem;
  }
`;

const TodayStudyTimeContainer = styled.div`
  flex: 1;

  @media (max-width: 800px) {
    order: 1;
  }
`;

const RecentStudyContainer = styled.div`
  flex: 1;

  @media (max-width: 800px) {
    order: 2;
  }
`;
