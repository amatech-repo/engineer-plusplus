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
        {/* <SAuthor>{materialData.author}</SAuthor> */}
        <SDescription>{materialData.description}</SDescription>
        {/* <SLink>{materialData.url}</SLink> */}
      </SDetailTexts>
    </SDetailBox>
  );
};

export default MaterialDetailCard;

const SDetailBox = styled.div`
  width: 100%;
  display: flex;
  background-color: #333;
  border-radius: 16px;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.2);
`;

const SDetailImage = styled.img`
  width: 40%;
  background-color: #f2f2f2;
  border-radius: 16px;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.2);
  height: auto;
  object-fit: cover;
`;

const SDetailTexts = styled.div`
  color: #fff;
  margin: 12px 16px;
`;

const STitle = styled.h1`
  font-size: 1.5rem;
`;

const SStudyTime = styled.p`
  font-size: 0.8rem;
`;

const SCategory = styled.p`
  font-size: 0.8rem;
`;

const STags = styled.p`
  font-size: 0.8rem;
`;

const STag = styled.span`
  margin: 0 8px;
`;
const SAuthor = styled.p``;

const SDescription = styled.p``;

const SLink = styled.p``;
