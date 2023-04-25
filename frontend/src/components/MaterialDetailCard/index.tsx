import * as React from "react";
import styled from "styled-components";
import Image from "next/image";
import data from "../data/materialsMock.json";

const MaterialDetailCard = () => {
  const materialData = data[1];
  console.log(materialData);

  return (
    <SDetailBox>
      <SDetailImage src={materialData.thumbnail} alt="" />
      <SDetailTexts>
        <STitle>{materialData.title}</STitle>
        <SStudyTime>トータル勉強時間: {materialData.total_study_time} h</SStudyTime>
        <SCategory>カテゴリ名 ID:{materialData.category_id}</SCategory>
        <STags>
          {materialData.tags.map((tag) => (
            <STag>{tag}</STag>
          ))}
        </STags>
        <SAuthor>{materialData.author}</SAuthor>
        <SDescription>{materialData.description}</SDescription>
        <SLink>{materialData.url}</SLink>
      </SDetailTexts>
    </SDetailBox>
  );
};

export default MaterialDetailCard;

const SDetailBox = styled.div`
  width: 60%;
  background-color: #333;
  display: flex;
`;

const SDetailImage = styled.img`
  width: 30%;
  height: auto;
  object-fit: cover;
`;

const SDetailTexts = styled.div`
  color: #fff;
  margin: 16px;
`;

const STitle = styled.h1``;

const SStudyTime = styled.p``;

const SCategory = styled.p``;

const STags = styled.p``;

const STag = styled.span`
  margin: 0 8px;
`;
const SAuthor = styled.p``;

const SDescription = styled.p``;

const SLink = styled.p``;
