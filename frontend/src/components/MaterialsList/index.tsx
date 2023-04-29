import styled from "styled-components";

import Card from "../Card";
import { Timestamp } from "firebase/firestore";

interface Props {
  listTitle: string;
  data: Materials[];
};

type Materials = {
	id: string;
	uId: string;
	title: string;
	author: string;
	categoryId: string;
	description: string;
	image: string;
	tags: string[];
	totalStudyTime: number;
	url: string;
	createdAt: Timestamp;
	updateAt: Timestamp;
};

const MaterialList = (props: Props) => {
  const { listTitle, data } = props;

  return (
    <Container>
      {/* TODO: youtube一覧やudemy一覧などカテゴリによってフィルタリングできるようにする */}
      <h3>{listTitle}</h3>
      <CardContainer>
        {data && data.map((item) => (
          <ContainerContent key={item.id}>
            <Card
              id={item.id}
              title={item.title}
              totalStudyTime={item.totalStudyTime}
              tags={item.tags && item.tags}
              thumbnail={item.image && item.image}
            />
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
