import Link from "next/link";
import styled from "styled-components";
import LiveTvIcon from "@mui/icons-material/LiveTv";

interface CardProps {
  id: string | number;
  title: string;
  totalStudyTime: number | string;
  thumbnail: string;
  tags: string[];
}

const Card = ({ id, title, totalStudyTime, tags, thumbnail }: CardProps) => {
  return (
    <Wrapper>
      <Link href={`/materials/detail/${id}`}>
        <CardContainer>
          <CardHeader>
            <CardThumbnail>
              <CardImage src={thumbnail} alt="" />
            </CardThumbnail>
          </CardHeader>
          <CardBody>
            <LiveTvIcon />
            <CardTextBox>
              <CardTitle>{title}</CardTitle>
              <TotalStudyTime>トータル勉強時間: {totalStudyTime} h</TotalStudyTime>
              <STagList>
                {tags.map((tag) => (
                  <Tag>{tag}</Tag>
                ))}
              </STagList>
            </CardTextBox>
          </CardBody>
        </CardContainer>
      </Link>
    </Wrapper>
  );
};

export default Card;

const Wrapper = styled.div`
  width: 250px;

  a {
    text-decoration: none;
  }

  &:hover {
    /* background-color: #444; */
    cursor: pointer;
  }
`;

const CardContainer = styled.article`
  height: 250px;
  background-color: #fff;
  box-shadow: 0 0 8px rgba(0, 0, 0, 0.16);
  color: #212121;
  text-decoration: none;

  &:hover {
    cursor: pointer;
    box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
    transform: translateY(-2px);
  }
`;

const CardHeader = styled.div``;

const CardThumbnail = styled.figure`
  margin: 0;
`;

const CardImage = styled.img`
  width: 100%;
  height: 120px;
  object-fit: cover;
`;

const CardBody = styled.div`
  display: flex;
  padding: 0.8rem;
`;

const CardTitle = styled.h3`
  margin: 0;
  font-size: 1.25rem;
`;

const TotalStudyTime = styled.p`
  margin: 0;
  font-size: 0.75rem;
`;

const STagList = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
`;

const Tag = styled.p`
  margin: 0 4px 4px 0;
  font-size: 0.75rem;
  background-color: #e0e0e0;
  border-radius: 5px;
  padding: 3px 7px;
`;

const CardTextBox = styled.div`
  margin-left: 1rem;
`;
