import { materialState } from "@/store/Auth/material";
import { useState } from "react";
import { useRecoilState } from "recoil";
import styled from "styled-components";
import { auth } from "../../../lib/FirebaseConfig";

interface Props {
    listTitle: string
    style: string
}

const Form = (props: Props) => {
    const { listTitle, style, ...rest } = props;
    const [material, setMaterial] = useRecoilState(materialState);
    const [ text, setText] = useState('');
    let newMaterial = {...material};

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log("submitted text: ", text);
    };

    const handleChange = (event) => {
        setText(event.target.value);
        if (listTitle == '教材名') {
            newMaterial = {
                ...material,
                title: text,
            };
            setMaterial(newMaterial);
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
            <h3>{ listTitle }</h3>
            <form onSubmit={handleSubmit} >
                {style == 'textarea' ? (
                    <TextareaContainer {...rest} onChange={handleChange}/>
                    ) : (
                    <InputContainer type="text" value={text} onChange={handleChange} />
                )}
            </form>

        </Container>
    );
};

export default Form;

const Container = styled.div `
    margin-top: 47px;
    width: 100%;
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
