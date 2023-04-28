import Layout from "@/components/Layouts/layout";
import styled from "styled-components";
import React, { useEffect, useState } from "react";
import Form from "@/components/Form";
import SelectCategory from "@/components/SelectCategory";
import Tag from "@/components/Tag";
import Thumbnail from "@/components/Thumbnail";
import { memo } from 'react';
import Modal from "react-modal";
import { useRecoilState, useRecoilValue, useSetRecoilState } from "recoil";
import { materialState } from "@/store/Auth/material";
import addMaterialToFirebase from "./addContent";
import { signInUserState } from "@/store/Auth/auth";


const RegisterMaterials = memo(() => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const material = useRecoilValue(materialState);
    const setMaterial = useSetRecoilState(materialState);
    const { uid, accessToken } = useRecoilValue(signInUserState);

    const handleRegisterButtonClick = () => {

        if (material.title === "" || material.categoryID === "") {
            alert("教材名とカテゴリは必須項目です。入力してください。");
        } else {
            console.log('クリック: ', material);
            setIsModalOpen(true);
            addMaterialToFirebase(material, uid);
            setMaterial({
                title: '',
                author: '',
                description: '',
                categoryID: '',
                url: '',
                image: '',
                tags: [''],
            });
        }
    };

    const ModalContent = () => {
        return (
            <Modal
                isOpen={isModalOpen}
                onRequestClose={() => setIsModalOpen(false)}
                style={customStyles}
                ariaHideApp={false}
            >
                <div>登録が完了しました</div>
                <button onClick={() => setIsModalOpen(false)}>OK</button>
            </Modal>
        );
    };

    const handleSubmit = (event: any) => {
        event.preventDefault();
    };

    return (
    <>
        <Layout>
            <div onSubmit={handleSubmit}>
                <TitleStyle>教材登録</TitleStyle>
                <Thumbnail />
                <Form listTitle="教材名" style="input"/>
                <SelectCategory listTitle="カテゴリ"/>
                <Form listTitle="著書" style="input"/>
                <Form listTitle="説明文" style="textarea"/>
                <Form listTitle="URL" style="input"/>
                <Tag listTitle="タグ" />
                <CenteredButtonContainer>
                    <RegisterButton onClick={handleRegisterButtonClick}>登録</RegisterButton>
                    <ModalContent />
                </CenteredButtonContainer>

            </div>
        </Layout>
    </>
    );
});

export default RegisterMaterials;

const TitleStyle = styled.h1 `
    font-weight: bold;
`;

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

const customStyles = {
    overlay: {
        backgroundColor: "rgba(0, 0, 0, 0.6)",
    },
    content: {
        top: "50%",
        left: "50%",
        right: "auto",
        bottom: "auto",
        marginRight: "-50%",
        transform: "translate(-50%, -50%)",
        backgroundColor: "#F7F7F7",
        boxShadow: "0px 0px 15px rgba(0, 0, 0, 0.3)",
        border: "none",
        borderRadius: "10px",
        padding: "20px",
        textAlign: "center",
    },
};