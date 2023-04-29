import { collection, addDoc, setDoc, getFirestore, Timestamp } from "firebase/firestore";

const addStudyRecord = async (time: string, memo: number, mid: string, uid: string) => {

    const db = getFirestore();
    try {
        const newRecordData = {
            uid: uid,
            mid: mid,
            time: time,
            memo: memo,
            createdAt: Timestamp.now()
        }
        await addDoc(collection(db, "records"), newRecordData);
        console.log("Records added successfully!");
        alert("学習を記録しました！");
    } catch (error) {
        console.error("Error adding material: ", error);
        alert("なぜかわからんが記録に失敗してるぞよ");
    }
}

export default addStudyRecord;
