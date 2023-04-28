import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { getFirestore, doc, getDoc, collection, orderBy, query, addDoc, Timestamp, getDocs } from "firebase/firestore";
import styled from "styled-components";
import { useRecoilValue } from "recoil";

import { signInUserState } from "@/store/Auth/auth";
import PostPreview from "@/components/Questions/PostPreview";
import Layout from "@/components/Layouts/layout";

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

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const db = getFirestore();
    try {
      const newAnswerRef = await addDoc(collection(db, "questions", id as string, "answers"), {
        qId: id,
        uId: uid, // replace with actual user ID
        mId: question?.mId,
        content: newAnswer,
        createdAt: Timestamp.now(),
        updatedAt: Timestamp.now(),
      });
      setNewAnswer("");

      const newAnswerData = {
        ...newAnswerRef,
        qId: id,
        uId: uid,
        mId: question?.mId,
        content: newAnswer,
        createdAt: Timestamp.now(),
        updatedAt: Timestamp.now(),
      } as Answers;
      setAnswers([...answers, newAnswerData]);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <Layout>
      <Container>
        <Wrapper>
          {question && (
            <>
              <Title>{question.title}</Title>
              <PostPreview markdown={question.content} />
              <AnswerList>
                <h2>回答一覧</h2>
                {answers.map((answer) => (
                  <Answer key={answer.id}>
                    <AnswerContent>{answer.content}</AnswerContent>
                    <AnswerCreatedAt>
                      {new Date(
                        answer.createdAt.seconds * 1000 + answer.createdAt.nanoseconds / 1000000
                      ).toLocaleString()}
                    </AnswerCreatedAt>
                  </Answer>
                ))}
              </AnswerList>
              <NewAnswerForm onSubmit={handleSubmit}>
                <NewAnswerInput
                  value={newAnswer}
                  onChange={(e) => setNewAnswer(e.target.value)}
                  placeholder="Enter your answer here"
                />
                <NewAnswerButton type="submit">Post</NewAnswerButton>
              </NewAnswerForm>
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
  height: 100vh;
`;

const Wrapper = styled.div`
  width: 80%;
  max-width: 800px;
`;

const Title = styled.h1`
  font-size: 2rem;
  font-weight: bold;
  margin-bottom: 1rem;
`;

const Answer = styled.li`
  margin-bottom: 1.5rem;
`;

const NewAnswerButton = styled.button`
  background-color: #4caf50;
  color: white;
  border: none;
  padding: 0.5rem 1rem;
  border-radius: 5px;
  cursor: pointer;
`;

const NewAnswerForm = styled.form`
  display: flex;
  flex-direction: column;
  margin-top: 2rem;
`;

const NewAnswerInput = styled.textarea`
  height: 10rem;
  margin-bottom: 1rem;
  padding: 1rem;
  border: 1px solid #ccc;
  border-radius: 5px;
`;

const AnswerList = styled.ul`
  margin-top: 3rem;
  padding: 0;
  list-style: none;
  margin-left: 1rem;
`;

const AnswerContent = styled.div`
  padding: 1rem;
  border: 1px solid #ccc;
  border-radius: 5px;
`;

const AnswerCreatedAt = styled.span`
  font-size: 0.8rem;
  color: #666;
`;
