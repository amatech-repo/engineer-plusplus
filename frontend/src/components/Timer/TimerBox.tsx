import styled from "styled-components";
import CustomButton from "../Button";

const TimerBox = () => {
  return (
    <Box>
      <CustomButton label="pause" />
      <CustomButton label="start" />
      <CustomButton label="stop" />
    </Box>
  );
};

export default TimerBox;

const Box = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 24px;
  margin-top: 24px;
`;
