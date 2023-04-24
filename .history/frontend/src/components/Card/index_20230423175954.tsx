import styled from "styled-components";
import LiveTvIcon from '@mui/icons-material/LiveTv';

const Card = () => {
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
          <CardTitle>教材タイトル</CardTitle>
          <LiveTvIcon />
        </CardHeader>
        <CardBody>
          <CardText>トータル勉強時間</CardText>
          <CardText>tag</CardText>
        </CardBody>
      </CardContainer>
    </Wrapper>
  );
};

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
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem;
`;

const CardTitle = styled.h3`
  font-size: 1.25rem;
  margin: 0 1rem;
`;

const CardThumbnail = styled.figure`
  margin: 0;
`;

const CardImage = styled.img`
  width: 100%;
`;

const CardBody = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 0 1rem 1rem;
  align-items: center;
`;

const CardText = styled.p`
  font-size: 0.75rem;
  margin: 0;
`;
