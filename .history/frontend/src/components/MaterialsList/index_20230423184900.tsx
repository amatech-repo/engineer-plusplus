import styled from "styled-components";
import Card from "../Card";

const MaterialList = () => {
  return (
    <>
      <ContainerTitle>教材一覧</ContainerTitle>
      <CardContainer>
        <ContainerContent>
          <Card title="React入門" totalStudyTime={10} tag={["React", "JavaScript", "Web開発"]} />
        </ContainerContent>
      </CardContainer>
    </>
  );
};

export default MaterialList;

const ContainerTitle = styled.h3`
color: 

const CardContainer = styled.div`
  display: flex;
`;

const ContainerContent = styled.div`
  margin: 8px;
`;
