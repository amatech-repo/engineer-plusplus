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
  return <List>{data && data.map((item: Questions) => <QuestionCard item={item} />)}</List>;
};

export default QuestionsList;

const List = styled.ul`
  list-style: none;
  padding: 0;
`;
