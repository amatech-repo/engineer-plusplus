import styled from "styled-components";
import Card from "../Card";

const MaterialList = () => {
  return (
    <>
      <h3>最近の学習</h3>
    <CardContainer>
      <ContainerContent>
        <Card title="React入門" totalStudyTime={10} tag={["React", "JavaScript", "Web開発"]} />
      </ContainerContent>
      <ContainerContent>
        <Card title="React入門" totalStudyTime={10} tag={["React", "JavaScript", "Web開発"]} />
      </ContainerContent>
    </CardContainer>
    </>
  );
};

export default MaterialList;

const CardContainer = styled.div`
  display: flex;
`;

const ContainerContent = styled.div`
  margin: 8px;
`;
