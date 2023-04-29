import { useEffect, useState } from "react";
import styled from "styled-components";
import { getFirestore, doc, getDoc } from "firebase/firestore";

interface Material {
  id: string;
  title: string;
  description: string;
  createdAt: {
    seconds: number;
    nanoseconds: number;
  };
  tags: { id: number; name: string }[];
  image: string;
  url: string;
  author: string;
  totalStudyTime: number;
}

interface Category {
  name: string;
}

interface Props {
  material: Material | null;
}

const MaterialDetailCard = ({ material }: Props) => {
  if (!material) {
    return <div>Loading...</div>;
  }

  const { id, title, description, createdAt, tags, image, url, author, totalStudyTime } = material;

  const [category, setCategory] = useState<Category | null>(null);

  useEffect(() => {
    const fetchCategory = async () => {
      const db = getFirestore();
      const docRef = doc(db, "category", id);
      const docSnap = await getDoc(docRef);
      if (docSnap.exists()) {
        const data = docSnap.data();
        setCategory({ name: data?.name });
      }
    };
    fetchCategory();
  }, []);

  return (
    <SDetailBox>
      <SDetailImage src={image} alt="" />
      <SDetailTexts>
        <STitle>{title}</STitle>
        <SStudyTime>トータル勉強時間: {totalStudyTime} h</SStudyTime>
        <SCategory>
          {category && category.name} {/* categoryがnullの場合を考慮 */}
        </SCategory>
        <STags>
          {tags && tags.map((tag) => (
            <STag key={tag.id}>{tag.name}</STag>
          ))}
        </STags>
        <SAuthor>{author}</SAuthor>
        <SDescription>{description}</SDescription>
        <SLink>{url}</SLink>
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
