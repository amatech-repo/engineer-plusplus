import styled from "styled-components";
import Card from "../Card";

const RecentStudy = () => {
  return (
    <>
      <h3>最近の学習</h3>
    <CardContainer>
      <ContainerContent>
        <Card title="React入門" totalStudyTime={10} tags={["React", "JavaScript", "Web開発"]} />
      </ContainerContent>
      <ContainerContent>
        <Card title="React入門" totalStudyTime={10} tag={["React", "JavaScript", "Web開発"]} />
      </ContainerContent>
    </CardContainer>
    </>
  );
};

export default RecentStudy;

const CardContainer = styled.div`
  display: flex;
`;

const ContainerContent = styled.div`
  margin: 8px;
`;
