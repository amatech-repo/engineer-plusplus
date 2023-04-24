import { useState } from "react";

const Form = () => {
    const [text, setText] = useState("");

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log("submitted text: ", text);
    };

    const handleChange = (event) => {
        setText(event.target.value);
    };

    return (
        <form onSubmit={handleSubmit}>
        <input type="text" value={text} onChange={handleChange} />
        </form>
    );
};

export default Form;
