import styled from "styled-components";
import CustomButton from "../Button";

const TimerBox = () => {
  return (
    <Box>
      <SContainer>
        <CustomButton label="pause" />
      </SContainer>
      <SContainer>
        <CustomButton label="start" />
      </SContainer><SContainer>
        <CustomButton label="stop" />
      </SContainer>
    </Box>
  );
};

export default TimerBox;

const Box = styled.div`
  display: flex;
  flex-direction: row;
`;

const SContainer = styled.div`
  margin: 4px;
`;
