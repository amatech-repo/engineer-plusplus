import { collection, addDoc, setDoc } from "firebase/firestore";
import { auth, db } from '../../../lib/FirebaseConfig';
import { useRecoilValue } from "recoil";
import { signInUserState } from "@/store/Auth/auth";

const addStudyRecord = async (time: string, memo: number, id: string) => {
    const { uid, accessToken } = useRecoilValue(signInUserState);
    try {
        const newRecordData = {
            uid: uid,
            mid: id,
            time: time,
            memo: memo,
            createdAt: Date.now()
        }
        const docRef = await addDoc(collection(db, "records"), newRecordData);
        console.log("Records added successfully!");
    } catch (error) {
        console.error("Error adding material: ", error);
    }
}

export default addStudyRecord;
