import { useState } from "react";
import styled from "styled-components";

interface Props {
    listTitle: string
    style: string
}

const Form = (props: Props) => {
    const { listTitle, style, ...rest } = props;
    const [text, setText] = useState("");

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log("submitted text: ", text);
    };

    const handleChange = (event) => {
        setText(event.target.value);
    };

    return (
        <Container>
            <h3>{ listTitle }</h3>
            <form onSubmit={handleSubmit}>
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
    padding: 10px;
    margin-top: 15px;
`;

const TextareaContainer = styled.textarea `
    width: 100%;
    height: 75px;
    border: 1px solid #9A9A9A;
    border-radius: 5px;
    padding: 10px;
    margin-top: 15px;
`;
