import Link from "next/link";
import styled from "styled-components";

interface Props {
  item: Questions;
}

type Questions = {
  id: string;
  uId: string;
  mId: string;
  title: string;
  content: string;
  createdAt: {
    seconds: number;
    nanoseconds: number;
  };
};

const QuestionCard = ({ item }: Props) => {
  return (
    <>
      {item && (
        <Card key={item.id}>
          <Link
            href={`/questions/detail/${item.id}`}
            style={{
              textDecoration: "none",
            }}
          >
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
          </Link>
        </Card>
      )}
    </>
  );
};

export default QuestionCard;

const Card = styled.li`
  margin-bottom: 2rem;
  padding: 1.5rem;
  border-radius: 0.5rem;
  box-shadow: 0px 4px 12px rgba(0, 0, 0, 0.1);

  &:hover {
    cursor: pointer;
    box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
    transform: translateY(-2px);
  }
`;

const Title = styled.a`
  font-size: 1.2rem;
  margin-bottom: 0.5rem;
  transition: opacity 0.3s ease;
  cursor: pointer;
  text-decoration: inherit;
  color: #333;
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
