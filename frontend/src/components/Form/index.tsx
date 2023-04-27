import { materialState } from "@/store/Auth/material";
import { useState } from "react";
import { useRecoilState } from "recoil";
import styled from "styled-components";
import { auth } from "../../../lib/FirebaseConfig";
import { memo } from 'react';

interface Props {
    listTitle: string
    style: string
}

const Form = memo((props: Props) => {
    const { listTitle, style, ...rest } = props;
    const [material, setMaterial] = useRecoilState(materialState);
    const [ text, setText] = useState('');
    const [isTitleEmpty, setIsTitleEmpty] = useState(false);
    let newMaterial = {...material};

    const handleChange = (event: any) => {
        setText(event.target.value);
        setIsTitleEmpty(false);

        if (listTitle == '教材名') {
            newMaterial = {
                ...material,
                title: text,
            };
            setMaterial(newMaterial);

            if (event.target.value === '') {
                setIsTitleEmpty(true); // フォームが空ならエラーメッセージを表示
            }
        } else if (listTitle == '著書') {
            newMaterial = {
                ...material,
                author: event.target.value,
            };
            setMaterial(newMaterial);
        } else if (listTitle == '説明文') {
            newMaterial = {
                ...material,
                description: event.target.value,
            };
            setMaterial(newMaterial);
        } else if (listTitle == 'URL') {
            newMaterial = {
                ...material,
                url: event.target.value,
            };
            setMaterial(newMaterial);
        }
        console.log(newMaterial);

    };

    return (
        <Container>
            <TextStyled>
                <h3>{ listTitle }</h3>
                {isTitleEmpty && <ErrorMessage>※入力してください</ErrorMessage>}
            </TextStyled>

            <form>
                {style == 'textarea' ? (
                    <TextareaContainer {...rest} onChange={handleChange}/>
                    ) : (
                    <InputContainer type="text" value={text} onChange={handleChange} style={{ border: isTitleEmpty ? '1px solid red' : 'null' }}/>
                )}

            </form>

        </Container>
    );
});

export default Form;

const Container = styled.div `
    margin-top: 47px;
    width: 100%;
`;

const TextStyled = styled.div `
    display: flex;
    align-items: center;
`;

const InputContainer = styled.input `
    width: 100%;
    border: 1px solid #9A9A9A;
    border-radius: 5px;
    padding: 8px;
`;

const TextareaContainer = styled.textarea `
    width: 100%;
    height: 75px;
    border: 1px solid #9A9A9A;
    border-radius: 5px;
    padding: 8px;
`;

const ErrorMessage = styled.div `
    color: red;
    font-size: 15px;
    margin-left: 10px;
`;
