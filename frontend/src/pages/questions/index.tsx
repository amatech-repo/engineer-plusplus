import { useEffect, useState } from "react";
import Link from "next/link";
import styled from "styled-components";
import { collection, getDocs, getFirestore } from "firebase/firestore";
import { useAuth } from "@/context/AuthContext";
import { useRecoilValue } from "recoil";

import { signInUserState } from "@/store/Auth/auth";
import Layout from "@/components/Layouts/layout";
import QuestionsList from "@/components/Questions/QuestionsList";
import CustomButton from "@/components/Button";
import Pagination from "@/components/Pagenation";

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

const Questions = () => {
  const [data, setData] = useState<Questions[] | undefined>();
  const { uid, accessToken } = useRecoilValue(signInUserState);

  const questionsPerPage = 10; // ページあたりの質問の数
  const [currentPage, setCurrentPage] = useState(1); // 現在のページ
  const [totalPages, setTotalPages] = useState(1); // 総ページ数
  const [currentQuestions, setCurrentQuestions] = useState<Questions[]>([]); // 現在のページに表示する質問

  const startIndex = (currentPage - 1) * questionsPerPage; // 現在のページの最初の質問のインデックス
  const endIndex = startIndex + questionsPerPage; // 現在のページの最後の質問のインデックス

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const db = getFirestore();
        const querySnapshot = await getDocs(collection(db, "questions"));
        const questions = querySnapshot.docs.map((doc) => {
          const data = doc.data() as Questions;
          return {
            id: doc.id,
            uId: data.uId,
            mId: data.mId,
            title: data.title,
            content: data.content,
            createdAt: data.createdAt,
          };
        });

        const filteredQuestions = questions.filter((question) => question.uId === uid);
        setData(filteredQuestions);
      } catch (error) {
        console.error(error);
      }
    };
    fetchData();
  }, []);

  useEffect(() => {
    if (data) {
      const totalPages = Math.ceil(data.length / questionsPerPage);
      setTotalPages(totalPages);
      const currentQuestions = data.slice(startIndex, endIndex);
      setCurrentQuestions(currentQuestions);
    }

    console.log(currentQuestions);
  }, [data, currentPage]);

  return (
    <Layout>
      <>
        <Header>
          <h1>質問一覧</h1>
          <Link href="/questions/register">
            <CustomButton label="質問を投稿する" />
          </Link>
        </Header>
        <QuestionsList data={currentQuestions} />
        <Pagination totalPages={totalPages} currentPage={currentPage} onPageChange={handlePageChange} />
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

export default Questions;
