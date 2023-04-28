import { useState } from "react";
import { getFirestore, doc, addDoc, Timestamp, collection } from "firebase/firestore";
import styled from "styled-components";
import { useRecoilValue } from "recoil";

import { signInUserState } from "@/store/Auth/auth";

interface Props {
  id: string;
  mId: string;
  setAnswers: React.Dispatch<React.SetStateAction<Answers[]>>;
  answers: Answers[];
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

const AnswerForm = ({ id, setAnswers, answers , mId}: Props) => {
  const { uid } = useRecoilValue(signInUserState);
  const [newAnswer, setNewAnswer] = useState<string>("");

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const db = getFirestore();
    try {
      const newAnswerRef = await addDoc(collection(db, "questions", id as string, "answers"), {
        qId: id,
        uId: uid, // replace with actual user ID
        mId: mId,
        content: newAnswer,
        createdAt: Timestamp.now(),
        updatedAt: Timestamp.now(),
      });
      setNewAnswer("");

      const newAnswerData = {
        ...newAnswerRef,
        qId: id,
        uId: uid,
        mId: mId,
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
    <NewAnswerForm onSubmit={handleSubmit}>
      <NewAnswerInput
        value={newAnswer}
        onChange={(e) => setNewAnswer(e.target.value)}
        placeholder="Enter your answer here"
      />
      <NewAnswerButton type="submit">Post</NewAnswerButton>
    </NewAnswerForm>
  );
};

export default AnswerForm;

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
