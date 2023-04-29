import styled from "styled-components";
import categoriesData from "../data/categoryMocks.json";
import { useEffect, useState } from 'react';
import { useRecoilState } from "recoil";
import { materialState } from "@/store/Auth/material";
import { collection, getDocs, getFirestore } from "firebase/firestore";

const mockData = categoriesData;

interface Category {
    id: string;
    name: string;
}

interface Props {
    listTitle: string
}

const CatetoryList = (props: Props) => {
    const [material, setMaterial] = useRecoilState(materialState);
    const [selectedCategory, setSelectedCategory] = useState('');
    const [categories, setCategories] = useState<Category[]>([]);
    const { listTitle } = props

    useEffect(() => {
        const fetchCategories = async () => {
            try {
                const db = getFirestore();
                const categoryDocs = await getDocs(collection(db, 'category'));
                const categoriesData = categoryDocs.docs.map((doc) => {
                    return {
                        id: doc.id,
                        name: doc.data().name,
                    };
                });
            setCategories(categoriesData);
            } catch(error) {
                console.log(error);
            }

        }
        fetchCategories();
    }, []);

    const handleCategoryChange = (e: any) => {
        setSelectedCategory(e.target.value);
        const newMaterial = {
            ...material,
            categoryId: e.target.value,
        }
        setMaterial(newMaterial);
        console.log(newMaterial);
    };

    return (
        <Container>
            <h3>{ listTitle }</h3>
            <form>
                <SelectContainer id="category" value={selectedCategory} onChange={handleCategoryChange}>
                    <option value="" disabled={selectedCategory !== ''}>--選択してください--</option>
                    {categories.map((category) => (
                        <option key={category.id} value={category.id}>
                            {category.name}
                        </option>
                    ))}
                </SelectContainer>
            </form>
        </Container>
    );
};

export default CatetoryList;

const Container = styled.div `
    margin-top: 47px;
    width: 100%;
`;

const SelectContainer = styled.select `
    width: 100%;
    border: 1px solid #9A9A9A;
    border-radius: 5px;
    padding: 5px;
`;

