import styled from "styled-components";

interface Props {
  studyTime: number;
}

const TodayStudyTime = ({ studyTime }: Props) => {
  // 学習時間を時、分、秒に変換する
  const hour = Math.floor(studyTime / 3600);
  const minute = Math.floor((studyTime % 3600) / 60);
  const second = studyTime % 60;

  // 時、分、秒を文字列に整形する
  const formattedTime = `${hour}時間${minute}分${second}秒`;

  return (
    <Wrapper>
      <Card>
        <CardContent>
          <CardTitle>今日の学習時間</CardTitle>
          <CardTime>{formattedTime}</CardTime>
        </CardContent>
      </Card>
    </Wrapper>
  );
};

export default TodayStudyTime;

const Wrapper = styled.div`
  margin: 0 auto;
  margin-top: 48px;
`;

const Card = styled.div`
  background-color: #f5f5f5;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  width: 100%;
  @media (max-width: 800px) {
    width: 90%;
    margin: 0 24px;
  }
`;

const CardContent = styled.div`
  padding: 20px;
  text-align: center;
`;

const CardTitle = styled.h3`
  margin: 0;
  font-size: 24px;
`;

const CardTime = styled.p`
  margin: 10px 0 0;
  font-size: 48px;
  font-weight: bold;
`;
