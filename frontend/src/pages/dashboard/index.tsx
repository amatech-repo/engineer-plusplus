import styled from "styled-components";
import Link from "next/link";

import Navigation from "@/components/Navigataion";
import Card from "@/components/Card";
import RecentStudy from "@/components/RecentStudy";
import MaterialList from "@/components/MaterialsList";
import TodayStudyTime from "@/components/TodayStudyTime";
import CustomButton from "@/components/Button";

const Dashboard = () => {
  return (
    <>
      <Container>
        <RecentStudyContainer>
          <RecentStudy />
        </RecentStudyContainer>
        <ContainerRight>
          <Link href="/materials/register">
            <CustomButton label="教材を登録" />
          </Link>
          <TodayStudyTimeContainer>
            <TodayStudyTime studyTime={12345} />
          </TodayStudyTimeContainer>
        </ContainerRight>
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

const ContainerRight = styled.div`
  text-align: right;
  color: #333;
  text-decoration: none;
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
