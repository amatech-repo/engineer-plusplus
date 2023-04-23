import styled from "styled-components";

import Card from "../Card";
import materialsData from "../data/materialsMock.json";

const data = materialsData;

const MaterialList = () => {
  return (
    <>
      <ContainerTitle>教材一覧</ContainerTitle>
      <CardContainer>
        {data.map((item) => (
        <ContainerContent>
          <Card title={item.title} totalStudyTime={item.total_study_time} tags={item.tags} />
        </ContainerContent>
)}
      </CardContainer>
    </>
  );
};

export default MaterialList;

const ContainerTitle = styled.h3`
  color: #212121;
`;

const CardContainer = styled.ul`
  display: flex;
  overflow-x: auto;
  white-space: nowrap;
`;

const ContainerContent = styled.li`
  margin: 8px;
`;
