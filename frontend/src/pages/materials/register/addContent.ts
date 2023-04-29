import { collection, addDoc, Timestamp, getFirestore } from "firebase/firestore";

async function addMaterialToFirebase(material: any, uId: any) {

    try {

        const db = getFirestore();
        const newMaterialData = {
            uId: uId,
            title: material.title,
            author: material.author,
            description: material.description,
            categoryId: material.categoryId,
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
