import { SetStateAction, useEffect, useState } from "react";
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
  createdAt: Timestamp;
  updatedAt: Timestamp;
}

interface Material {
  author: string;
  categoryId: number;
  createdAt: Timestamp; // タイムスタンプにする場合は Date 型が適しています
  updatedAt: Timestamp;
  description: string;
  image: string;
  tags: string[]; // タグが複数ある場合は string[] 型が適しています
  id: string; // ID は文字列型が適しています
  title: string;
  totalStudyTime: number;
  uId: string;
  url: string;
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
  const [material, setMaterial] = useState<Material | null>(null);

  const startIndex = (currentPage - 1) * questionsPerPage; // 現在のページの最初の質問のインデックス
  const endIndex = startIndex + questionsPerPage; // 現在のページの最後の質問のインデックス

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  // 質問一覧を取得
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
            updatedAt: data.updatedAt,
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

  // 現在のページに表示する質問を設定
  useEffect(() => {
    if (data) {
      const totalPages = Math.ceil(data.length / questionsPerPage);
      setTotalPages(totalPages);
      const currentQuestions = data.slice(startIndex, endIndex);
      setCurrentQuestions(currentQuestions);
    }
  }, [data, currentPage]);

  // IDに紐付いた教材を1つ取得
  useEffect(() => {
    const fetchMaterial = async () => {
      try {
        const db = getFirestore();
        const docRef = doc(db, "materials", id as string);
        const docSnap = await getDoc(docRef);
        if (docSnap.exists()) {
          const data = docSnap.data() as Material;
          setMaterial({
            id: docSnap.id,
            uId: data.uId,
            title: data.title,
            description: data.description,
            createdAt: data.createdAt,
            updatedAt: data.updatedAt,
            categoryId: data.categoryId,
            tags: data.tags,
            image: data.image,
            url: data.url,
            author: data.author,
            totalStudyTime: data.totalStudyTime,
          });
        }
        // console.log(material);
      } catch (error) {
        console.error(error);
      }
    };
    fetchMaterial();
  }, []);

  return (
    <Layout>
      <>
        <SContainer>
          <MaterialDetailCard material={material} />
          <STimerContainer>
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
