import styled from "styled-components";


const Card = () => {
  return (
    <Wrapper>
      <CardContainer>
        <CardHeader>
          <CardTitle>教材タイトル</CardTitle>
          <CardThumbnail>
            <CardImage
              src="https://shibajuku.net/wp/wp-content/uploads/2020/02/seigiT.jpg"
              alt="手書きの「正義」という文字が縦に大きくマジックで書かれている白いTシャツ"
              className="card__image"
            />
          </CardThumbnail>
        </CardHeader>
        <CardBody>
          <CardText>トータル勉強時間</CardText>
          <CardText>tag</CardText>
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
  display: flex;
  flex-wrap: wrap;
`;

const CardTitle = styled.h3`
  padding: 1rem 1rem 0;
  font-size: 1.25rem;
  order: 1;
`;

const CardThumbnail = styled.figure`
  margin: 0;
  order: 0;
`;

const CardImage = styled.img`
  width: 100%;
`;

const CardBody = styled.div`
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
