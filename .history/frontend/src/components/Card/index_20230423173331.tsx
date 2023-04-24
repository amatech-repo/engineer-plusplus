import styled from "styled-components";

const Wrapper = styled.div`
  margin: 3rem auto;
  width: 320px;
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

const CardFooter = styled.div`
  padding: 1rem;
  border-top: 1px solid #ddd;
`;

const Button = styled.a`
  display: inline-block;
  text-decoration: none;
  transition: background-color 0.3s ease-in-out;

  &.-compact {
    padding: 0.5rem 1rem;
    border-radius: 0.25rem;
    background-color: #26a69a;
    color: #fff;
    font-weight: bold;

    &:hover,
    &:focus {
      background-color: #80cbc4;
    }
  }
`;

const Card = () => {
  return (
    <Wrapper className="l-wrapper">
      <CardContainer className="card">
        <CardHeader className="card__header">
          <CardTitle className="card__title">正義Tシャツ</CardTitle>
          <CardThumbnail className="card__thumbnail">
            <CardImage
              src="https://shibajuku.net/wp/wp-content/uploads/2020/02/seigiT.jpg"
              alt="手書きの「正義」という文字が縦に大きくマジックで書かれている白いTシャツ"
              className="card__image"
            />
          </CardThumbnail>
        </CardHeader>
        <CardBody className="card__body">
          <CardText className="card__text">
            ごく普通の生地の白いTシャツに油性マジックで「正義」と書いただけの架空の半袖Tシャツです。
          </CardText>
          <CardText className="card__text -number">&yen; 15,000</CardText>
        </CardBody>
        <CardFooter className="card__footer">
          <CardText className="card__text">
            <Button href="#" className="button -compact">
              正義Tシャツの詳細を見る
            </Button>
          </CardText>
        </CardFooter>
      </CardContainer>
    </Wrapper>
  );
};

export default Card;
