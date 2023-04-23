import styled from "styled-components";

const Card = () => {
  return (
    <CardWrapper>
      <Thumbnail src="https://unsplash.com/photos/TKj8nFF6_w0" />
      <LogoWrapper>
        <Logo src="/logo.svg" />
        <Title>教材タイトル</Title>
      </LogoWrapper>
      <DetailsWrapper>
        <TotalTime>トータル勉強時間：10時間</TotalTime>
        <Tags>教材タグ1, 教材タグ2, 教材タグ3</Tags>
      </DetailsWrapper>
    </CardWrapper>
  );
};

export default Card;

const CardWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #fff;
  border-radius: 10px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
  padding: 20px;
`;

const Thumbnail = styled.img`
  width: 100%;
  height: auto;
  border-radius: 10px;
  margin-bottom: 10px;
`;

const LogoWrapper = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 10px;
`;

const Logo = styled.img`
  width: 50px;
  height: 50px;
  margin-right: 10px;
`;

const Title = styled.h3`
  font-size: 1.5rem;
  font-weight: bold;
`;

const DetailsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const TotalTime = styled.p`
  font-size: 1rem;
  margin-bottom: 10px;
`;

const Tags = styled.p`
  font-size: 0.8rem;
  font-style: italic;
  color: gray;
`;
