import styled from "styled-components";
import LiveTvIcon from "@mui/icons-material/LiveTv";

interface CardProps {
  title: string;
  totalStudyTime: number;
  tag: string[];
}

const Card = ({ title, totalStudyTime, tag }: CardProps) => {
  return (
    <Wrapper>
      <CardContainer>
        <CardHeader>
          <CardThumbnail>
            <CardImage
              src="https://shibajuku.net/wp/wp-content/uploads/2020/02/seigiT.jpg"
              alt="手書きの「正義」という文字が縦に大きくマジックで書かれている白いTシャツ"
              className="card__image"
            />
          </CardThumbnail>
        </CardHeader>
        <CardBody>
          <LiveTvIcon />
          <CardTextBox>
            <CardTitle>{title}</CardTitle>
            <TotalStudyTime>{totalStudyTime}時間</TotalStudyTime>
            {tag.map((tag) => {}
            <Tag>{tag}</Tag>
          </CardTextBox>
        </CardBody>
      </CardContainer>
    </Wrapper>
  );
};

export default Card;

const Wrapper = styled.div`
  margin: 3rem auto;
  width: 400px;
`;

const CardContainer = styled.article`
  background-color: #fff;
  box-shadow: 0 0 8px rgba(0, 0, 0, 0.16);
  color: #212121;
  text-decoration: none;
`;

const CardHeader = styled.div``;

const CardThumbnail = styled.figure`
  margin: 0;
`;

const CardImage = styled.img`
  width: 100%;
`;

const CardBody = styled.div`
  display: flex;
  padding: 1rem;
`;

const CardTitle = styled.h3`
  margin: 0;
  font-size: 1.25rem;
`;

const TotalStudyTime = styled.p`
  margin: 0;
  font-size: 0.75rem;
`;

const Tag = styled.p`
  margin: 0;
  font-size: 0.75rem;
`;

const CardTextBox = styled.div`
  margin-left: 1rem;
`;
