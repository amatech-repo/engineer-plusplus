import styled from "styled-components";
import LiveTvIcon from '@mui/icons-material/LiveTv';

interface CardProps {
  title: string;
  totalStudyTime: number;
  tag: string;
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
          <Card
          <CardTitle>{title}</CardTitle>
          <TotalStudyTime>{totalStudyTime}時間</TotalStudyTime>
          <Tag>{tag}</Tag>
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

const CardHeader = styled.div`
  align-items: center;
`;

const CardTitle = styled.h3`
  margin: 0;
  padding: 1rem;
  font-size: 1.25rem;
`;

const TotalStudyTime = styled.p`
  margin: 0;
  padding: 1rem;
  font-size: 0.75rem;
  text-align: right;
`;

const Tag = styled.p`
  margin: 0;
  padding: 1rem;
  font-size: 0.75rem;
`;

const CardThumbnail = styled.figure`
  margin: 0;
`;

const CardImage = styled.img`
  width: 100%;
`;

const CardBody = styled.div`
  display: flex;
  align-items: center;
  padding: 1rem;
`;

const CardText = styled.p`
  font-size: 0.75rem;

  & + & {
    margin-top: 0.5rem;
  }

  &.-number {
    text-align: right;
  }
`;
