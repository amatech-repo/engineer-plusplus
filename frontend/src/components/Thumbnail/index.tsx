import styled from "styled-components";
import { useState } from 'react';
import { useRecoilState } from "recoil";
import { materialState } from "@/store/Auth/material";


const Thumbnail = () => {

    const [thumbnail, setThumbnail] = useState(null);

    const handleThumbnailChange = (event) => {
        const file = event.target.files[0];
        if (file) {
        const reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onloadend = () => {
            setThumbnail(reader.result);
        };
        }
    };

    return (
        <Container>
            <h3>サムネイル画像</h3>
            {thumbnail && (
                <ImgContainer
                src={thumbnail}
                alt="thumbnail"
                />
            )}
            <input
                id="thumbnail"
                type="file"
                accept="image/*"
                onChange={handleThumbnailChange}
            />
        </Container>
    );
};

export default Thumbnail;

const Container = styled.div `
    margin-top: 47px;
    width: 100%;
`;

const ImgContainer = styled.img `
    width: 50%;
    height: 50%;
    max-height: 500px;
    margin-top: 10px;
    object-fit: contain;
`;