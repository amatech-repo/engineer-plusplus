import Layout from "@/components/Layouts/layout";
import styled from "styled-components";
import React, { useState } from "react";
import Form from "@/components/Form";
import SelectCategory from "@/components/SelectCategory";
import Tag from "@/components/Tag";
import Thumbnail from "@/components/Thumbnail";
// import axios from "axios";


const RegisterMaterials = () => {
    const [imageFile, setImageFile] = useState<File | null>(null);

    const handleImageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        if (event.target.files) {
            setImageFile(event.target.files[0]);
        }
    };

    const handleImageUpload = async () => {
        try {
            const formData = new FormData();
            formData.append("imageFile", imageFile as File);
            const response = await axios.post("/api/upload-image", formData);
            console.log(response.data);
        } catch (error) {
            console.log(error);
        }
    };

    return (
    <>
        <Layout>
            <div>
                <h1>教材登録</h1>
                <Thumbnail />
                <Form listTitle="教材名" style="input"/>
                <SelectCategory listTitle="カテゴリ"/>
                <Form listTitle="著書" style="input"/>
                <Form listTitle="説明文" style="textarea"/>
                <Form listTitle="URL" style="input"/>
                <Tag listTitle="タグ" />
                <CenteredButtonContainer>
                    <RegisterButton>登録</RegisterButton>
                </CenteredButtonContainer>

            </div>
        </Layout>
    </>
    );
}

export default RegisterMaterials;

const CenteredButtonContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 10vh; /* 縦方向に中央に配置するための高さ */
`;

const RegisterButton = styled.button`
    background-color: #FF8C00;
    color: white;
    font-size: 1.2rem;
    padding: 0.5rem 1.5rem;
    border-radius: 1rem;
    border: none;
    box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.2);
    cursor: pointer;

    &:hover {
        background-color: #FFA500;
    }

    &:active {
        box-shadow: none;
        transform: translateY(2px);
    }
`;