import { collection, addDoc, Timestamp } from "firebase/firestore";
import { db } from "../../../../lib/FirebaseConfig";

async function addMaterialToFirebase(material: any) {

    try {
        const newMaterialData = {
            title: material.title,
            author: material.author,
            description: material.description,
            categoryID: material.categoryID,
            url: material.url,
            image: material.image,
            tags: material.tags,
            totalStudyTime: 0,
            createdAt: Timestamp .now()
        }
        const docRef = await addDoc(collection(db, "materials"), newMaterialData);
        console.log("Material added successfully!", docRef.id);
    } catch (error) {
        console.log("エラーですよ")
        console.error("Error adding material: ", error);
    }
}

export default addMaterialToFirebase;
