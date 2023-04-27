import { collection, addDoc } from "firebase/firestore";
import { db } from "../../../lib/FirebaseConfig";

export const addQuestion = async (title: string, content: string) => {
  const docRef = await addDoc(collection(db, "questions"), {
    title: title,
    content: content,
  });
  return {
    title,
    content,
  };
};
