import styled from "styled-components";

interface Props {
  data: Questions[];
}

interface Questions {
  id: string;
  uId: string;
  mId: string;
  title: string;
  content: string;
  createdAt: {
    seconds: number;
    nanoseconds: number;
  };
}

const QuestionsList = (props: Props) => {
  const { data } = props;
  return (
    <List>
      {data &&
        data.map((item: Questions) => (
          <Card key={item.id}>
            <Title>{item.title}</Title>
            <Meta>
              {/* TODO: questionsデータに含まれる教材IDをもとに教材の情報を取得する */}
              {/* <Text>{data.materialName}</Text>
                <Text>{data.materialCategory}</Text>
                <Tags>
                  {data.materialTags.map((tag, index) => (
                    <Tag key={index}>{tag}</Tag>
                  ))}
                </Tags> */}
              <Time>
                {new Date(item.createdAt.seconds * 1000 + item.createdAt.nanoseconds / 1000000).toLocaleString()}
              </Time>
            </Meta>
          </Card>
        ))}
    </List>
  );
};

export default QuestionsList;

const List = styled.ul`
  list-style: none;
  padding: 0;
`;

const Card = styled.li`
  margin-bottom: 2rem;
  padding: 1.5rem;
  border-radius: 0.5rem;
  box-shadow: 0px 4px 12px rgba(0, 0, 0, 0.1);
`;

const Title = styled.h2`
  font-size: 1.2rem;
  margin-bottom: 0.5rem;
`;

const Text = styled.p`
  margin-bottom: 0.5rem;
`;

const Meta = styled.div`
  display: flex;
  flex-wrap: wrap;
  font-size: 1rem;
  color: #999;
`;

const Tags = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin-left: 1rem;
`;

const Tag = styled.span`
  background-color: #f0f0f0;
  color: #555;
  font-size: 0.8rem;
  border-radius: 0.5rem;
  padding: 0.25rem 0.5rem;
  margin-right: 0.5rem;
  margin-bottom: 0.5rem;
`;

const Time = styled.p`
  font-size: 0.8rem;
  margin-bottom: 0;
  margin-left: auto;
`;
