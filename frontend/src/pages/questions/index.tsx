import { useState } from "react";
import styled from "styled-components";

import Layout from "@/components/Layouts/layout";
import mockData from "@/components/data/questionsMock.json";
import Link from "next/link";

type Question = {
  id: number;
  title: string;
  materialName: string;
  materialCategory: string;
  materialTags: string[];
  createdAt: string;
};

type Props = {
  questions: Question[];
};

const QuestionsList = () => {
  const questionsPerPage = 10; // ページあたりの質問の数
  const [currentPage, setCurrentPage] = useState(1); // 現在のページ

  const questions = mockData;

  const totalPages = Math.ceil(questions.length / questionsPerPage); // 総ページ数
  const startIndex = (currentPage - 1) * questionsPerPage; // 現在のページの最初の質問のインデックス
  const endIndex = startIndex + questionsPerPage; // 現在のページの最後の質問のインデックス
  const currentQuestions = questions.slice(startIndex, endIndex); // 現在のページに表示する質問

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  return (
    <Layout>
      <>
        <Header>
          <h1>My Questions</h1>
          <PostButton>
            <Link href="/questions/post" style={{ textDecoration: "none", color: "#fff" }}>
              質問を投稿する
            </Link>
          </PostButton>
        </Header>
        <List>
          {currentQuestions.map((question) => (
            <Card key={question.id}>
              <Title>{question.title}</Title>
              <Meta>
                <Text>{question.materialName}</Text>
                <Text>{question.materialCategory}</Text>
                <Tags>
                  {question.materialTags.map((tag, index) => (
                    <Tag key={index}>{tag}</Tag>
                  ))}
                </Tags>
                <Time>{question.createdAt}</Time>
              </Meta>
            </Card>
          ))}
        </List>
        <Pagination>
          {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
            <PageButton key={page} onClick={() => handlePageChange(page)} active={currentPage === page}>
              {page}
            </PageButton>
          ))}
        </Pagination>
      </>
    </Layout>
  );
};

const Header = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1.5rem;
`;

const PostButton = styled.button`
  background-color: #4b9ce2;
  color: #fff;
  font-size: 1rem;
  border: none;
  border-radius: 0.5rem;
  padding: 0.5rem 1rem;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    background-color: #3476b3;
  }
`;

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

const Pagination = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 2rem;
  margin-bottom: 4rem;
`;

const PageButton = styled.button<{ active: boolean }>`
  background-color: ${(props) => (props.active ? "#4b9ce2" : "#f0f0f0")};
  color: ${(props) => (props.active ? "#fff" : "#555")};
  font-size: 1rem;
  border: none;
  border-radius: 0.5rem;
  padding: 0.5rem 1rem;
  margin-right: 0.5rem;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    background-color: #4b9ce2;
    color: #fff;
  }
`;

export default QuestionsList;
