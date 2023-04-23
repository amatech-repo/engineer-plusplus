import styled from "styled-components";

import Card from "../Card";
import materialsData from "./materialsMock.json";

const data = materialsData;

const MaterialList = () => {
  return (
    <>
      <ContainerTitle>教材一覧</ContainerTitle>
      <CardContainer>
        {data.map((item) => (

        <ContainerContent>
          <Card title={data.title} totalStudyTime={10} tag={["React", "JavaScript", "Web開発"]} />
        </ContainerContent>
}
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
