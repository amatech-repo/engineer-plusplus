import styled from "styled-components";

import Card from "../Card";
import materialsData from "../data/materialsMock.json";

const data = materialsData;

interface Props {
  listTitle: string;
}

const MaterialList = (props: Props) => {
  const { listTitle } = props;

  return (
    <Container>
      {/* TODO: youtube一覧やudemy一覧などカテゴリによってフィルタリングできるようにする */}
      <h3>{listTitle}</h3>
      <CardContainer>
        {data.map((item) => (
          <ContainerContent key={item.id}>
            <Card id="{item.id}" title={item.title} totalStudyTime={item.total_study_time} tags={item.tags} />
          </ContainerContent>
        ))}
      </CardContainer>
    </Container>
  );
};

export default MaterialList;

const Container = styled.div`
  margin-top: 24px;
  width: 100%;
`;

const CardContainer = styled.ul`
  display: flex;
  overflow-x: scroll;
  overflow-y: hidden;
  white-space: nowrap;
`;

const ContainerContent = styled.li`
  list-style: none;
  margin: 8px;
`;
