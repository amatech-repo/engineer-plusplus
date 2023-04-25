import styled from "styled-components";
import { useState } from 'react';
import { useRecoilState } from "recoil";
import { materialState } from "@/store/Auth/material";


const Thumbnail = (props: Props) => {
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
        <Container>
            <input type="file" onChange={handleImageChange} />
            <button onClick={handleImageUpload}>Upload</button>
        </Container>
    );
};

export default Thumbnail;

const Container = styled.div `
    margin-top: 47px;
    width: 100%;
`;