import styled from "styled-components";

interface Props {
  hour: number;
  minute: number;
  second: number;
}

const HourCard = ({ hour }: any) => (
  <Card>
    <TimeLabel>{hour}</TimeLabel>
    <div>hour</div>
  </Card>
);

const MinuteCard = ({ minute }: any) => (
  <Card>
    <TimeLabel>{minute}</TimeLabel>
    <div>minute</div>
  </Card>
);

const SecondCard = ({ second }: any) => (
  <Card>
    <TimeLabel>{second}</TimeLabel>
    <div>second</div>
  </Card>
);

const TimeCard = ({ hour, minute, second }: Props) => (
  <CardContainer>
    <HourCard hour={hour} />
    <Colon>:</Colon>
    <MinuteCard minute={minute} />
    <Colon>:</Colon>
    <SecondCard second={second} />
  </CardContainer>
);

export default TimeCard;

const CardContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 16px;
`;

const Card = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 120px;
  height: 120px;
  background-color: #f2f2f2;
  border-radius: 16px;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.2);
`;

const TimeLabel = styled.div`
  font-size: 24px;
  font-weight: bold;
  margin-bottom: 8px;
`;

const Colon = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 24px;
  font-weight: bold;
  margin: 0 8px;
`;
