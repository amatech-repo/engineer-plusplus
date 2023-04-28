import { useEffect, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import { getFirestore, doc, getDoc, collection, orderBy, query, addDoc, Timestamp, getDocs } from "firebase/firestore";
import styled from "styled-components";
import { useRecoilValue } from "recoil";

import { signInUserState } from "@/store/Auth/auth";
import Layout from "@/components/Layouts/layout";
import MaterialDetailCard from "@/components/MaterialDetailCard";
import TimeCard from "@/components/Timer/TimeCard";
import TimerBox from "@/components/Timer/TimerBox";
import StudyChart from "@/components/Chart";
import CustomButton from "@/components/Button";
import QuestionsList from "@/components/Questions/QuestionsList";
import Pagination from "@/components/Pagenation";

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

const MaterialDetail = () => {
  const router = useRouter();
  const { id } = router.query;

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

        const filteredQuestionsByUid = questions.filter((question) => question.uId === uid);
        const fileterdQuestionsByMid = filteredQuestionsByUid.filter((question) => question.mId == id);
        setData(fileterdQuestionsByMid);
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
        <SContainer>
          <MaterialDetailCard />
          <STimerContainer>
            <TimeCard hour={1} minute={23} second={45} />
            <TimerBox />
          </STimerContainer>
        </SContainer>
        <StudyChart />
        <Link href={`/questions/register?mId=${id}`}>
          <CustomButton label="質問を投稿する" />
        </Link>
        <QuestionsList data={currentQuestions} />
        <Pagination totalPages={totalPages} currentPage={currentPage} onPageChange={handlePageChange} />
      </>
    </Layout>
  );
};

export default MaterialDetail;

const SContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 24px;
`;

const STimerContainer = styled.div`
  height: 100%;
`;
