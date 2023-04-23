import styled from "styled-components";
import Card from "../Card";

const RecentStudy = () => {
  return (
    <CardContainer>
      <ContainerContent>

      <Card title="React入門" totalStudyTime={10} tag={["React", "JavaScript", "Web開発"]} />
      <Card title="React入門" totalStudyTime={10} tag={["React", "JavaScript", "Web開発"]} />
      </ContainerContent>
    </CardContainer>
  );
};

export default RecentStudy;

const CardContainer = styled.div`
  display: flex;
`;

const ContainerContent = styled.div`
margin: ;
`;