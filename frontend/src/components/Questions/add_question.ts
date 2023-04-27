import { collection, addDoc, serverTimestamp } from "firebase/firestore";
import { db } from "../../../lib/FirebaseConfig";

export const addQuestion = async (title: string, content: string, createdAt: any) => {
  const docRef = await addDoc(collection(db, "questions"), {
    title: title,
    content: content,
    createdAt: createdAt,
  });
  return {
    title,
    content,
    createdAt,
  };
};
