import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { getFirestore, doc, getDoc, collection, orderBy, query, addDoc, Timestamp, getDocs } from "firebase/firestore";
import styled from "styled-components";
import { useRecoilValue } from "recoil";

import { signInUserState } from "@/store/Auth/auth";
import PostPreview from "@/components/Questions/PostPreview";
import AnswerList from "@/components/Answer";
import Layout from "@/components/Layouts/layout";
import AnswerForm from "@/components/Answer/AnswerForm";

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

interface Answers {
  id?: string;
  qId: string;
  uId: string;
  mId: string;
  content: string;
  createdAt: Timestamp;
  updatedAt: Timestamp;
}

const QuestionDetail = () => {
  const router = useRouter();
  const { id } = router.query;
  const { uid, accessToken } = useRecoilValue(signInUserState);
  const [question, setQuestion] = useState<Questions | null>(null);
  const [answers, setAnswers] = useState<Answers[]>([]);
  const [newAnswer, setNewAnswer] = useState<string>("");

  useEffect(() => {
    const fetchQuestion = async () => {
      try {
        const db = getFirestore();
        const docRef = doc(db, "questions", id as string);
        const docSnap = await getDoc(docRef);
        if (docSnap.exists()) {
          const data = docSnap.data() as Questions;
          setQuestion({
            id: docSnap.id,
            uId: data.uId,
            mId: data.mId,
            title: data.title,
            content: data.content,
            createdAt: data.createdAt,
          });
        }
      } catch (error) {
        console.error(error);
      }
    };

    const fetchAnswers = async () => {
      try {
        const db = getFirestore();
        const answersRef = collection(db, "questions", id as string, "answers");
        const querySnapshot = query(answersRef, orderBy("createdAt"));
        const answersData = (await getDocs(querySnapshot)).docs.map((doc) => {
          const data = doc.data() as Answers;
          return {
            id: doc.id,
            qId: data.qId,
            uId: data.uId,
            mId: data.mId,
            content: data.content,
            createdAt: data.createdAt,
            updatedAt: data.updatedAt,
          };
        });

        setAnswers(answersData);
      } catch (error) {
        console.error(error);
      }
    };
    if (id) {
      fetchQuestion();
      fetchAnswers();
    }
  }, [id]);


  return (
    <Layout>
      <Container>
        <Wrapper>
          {question && (
            <>
              <Title>{question.title}</Title>
              <PostPreview markdown={question.content} />
              <AnswerList answers={answers} />
              <AnswerForm id={id as string} setAnswers={setAnswers} answers={answers} mId={question.mId} />
            </>
          )}
        </Wrapper>
      </Container>
    </Layout>
  );
};

export default QuestionDetail;

const Container = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 4rem;
`;

const Wrapper = styled.div`
  width: 100%;
  max-width: 800px;
`;

const Title = styled.h1`
  font-size: 2rem;
  font-weight: bold;
  margin-bottom: 1rem;
`;
