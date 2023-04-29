import styled from "styled-components";

import QuestionCard from "./QuestionCard";

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

  if (!data || data.length === 0) {
    return <NoQuestions>まだ質問がありません。質問を投稿してみましょう！</NoQuestions>;
  }

  return <List>{data.map((item: Questions) => <QuestionCard item={item} key={item.id} />)}</List>;
};

export default QuestionsList;

const List = styled.ul`
  list-style: none;
  padding: 0;
`;

const NoQuestions = styled.p`
  margin-top: 3rem;
  text-align: center;
  font-size: 1.5rem;
  color: gray;
`;
