import { collection, addDoc, Timestamp, getFirestore } from "firebase/firestore";

async function addMaterialToFirebase(material: any, uid: any) {

    try {

        const db = getFirestore();
        const newMaterialData = {
            uid: uid,
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
