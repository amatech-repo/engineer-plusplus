import { collection, addDoc, setDoc } from "firebase/firestore";
import { auth, db } from '../../../lib/FirebaseConfig';

const addStudyRecord = async (time: string, memo: number, mid: string, uid: string) => {
    try {
        const newRecordData = {
            uid: uid,
            mid: mid,
            time: time,
            memo: memo,
            createdAt: Date.now()
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
