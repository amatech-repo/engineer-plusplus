import { collection, addDoc, Timestamp, getFirestore } from "firebase/firestore";

interface Props {
  mId: string | string[];
  uId: string;
  title: string;
  content: string | undefined;
  updatedAt: Timestamp;
  createdAt: Timestamp;
}

export const addQuestion = async ({ mId, uId, title, content, createdAt, updatedAt }: Props) => {
  const db = getFirestore();
  const docRef = await addDoc(collection(db, "questions"), {
    mId: mId,
    uId: uId,
    title: title,
    content: content,
    createdAt: createdAt,
    updatedAt: updatedAt,
  });
  return {
    title,
    content,
    createdAt,
    updatedAt,
    mId,
    uId,
  };
};
