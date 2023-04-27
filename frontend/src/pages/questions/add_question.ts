import { getFirestore, collection, addDoc } from "firebase/firestore";

const db = getFirestore();

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
