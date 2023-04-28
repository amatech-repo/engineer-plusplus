import { collection, addDoc, setDoc } from "firebase/firestore";
import { auth, db } from '../../../../lib/FirebaseConfig'

async function addMaterialToFirebase(material: any) {

    try {
        const newMaterialData = {
            title: material.title,
            author: material.auther,
            description: material.description,
            categoryID: material.categoryID,
            url: material.url,
            image: material.image,
            tags: material.tags,
            totalStudyTime: 0,
            createdDate: Date.now
        }
        const docRef = await addDoc(collection(db, "materials"), newMaterialData);
        console.log("Material added successfully!", docRef.id);
    } catch (error) {
        console.error("Error adding material: ", error);
    }
}

export default addMaterialToFirebase;
