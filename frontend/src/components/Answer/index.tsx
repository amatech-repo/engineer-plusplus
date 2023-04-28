import styled from "styled-components";

import PostPreview from "@/components/Questions/PostPreview";

interface Answers {
  id?: string;
  qId: string;
  uId: string;
  mId: string;
  content: string;
  createdAt: Timestamp;
  updatedAt: Timestamp;
}

interface Props {
  answers: Answers[];
}

const AnswerList = ({ answers }: Props) => {
  return (
    <Wrapper>
      <h2>回答一覧</h2>
      {answers.map((answer) => (
        <Answer key={answer.id}>
          <PostPreview markdown={answer.content} />
          <AnswerCreatedAt>
            {new Date(
              answer.createdAt.seconds * 1000 + answer.createdAt.nanoseconds / 1000000
            ).toLocaleString()}
          </AnswerCreatedAt>
        </Answer>
      ))}
    </Wrapper>
  );
};

const Wrapper = styled.ul`
  list-style: none;
  margin-top: 3rem;
  padding: 0;
`;

const Answer = styled.li`
  margin-left: 1.5rem;
  margin-bottom: 1.5rem;
`;

const AnswerContent = styled.div`
  margin-bottom: 0.5rem;
`;

const AnswerCreatedAt = styled.div`
  color: gray;
`;

export default AnswerList;
