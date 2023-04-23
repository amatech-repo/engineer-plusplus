import styled from "styled-components";

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
