import React from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Line } from "react-chartjs-2";
import styled from "styled-components";

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

const StudyChart: React.FC = () => {
  const options = {
    responsive: true,
    scales: {
      x: {
        title: {
          display: true,
          text: '週目'
        },
        ticks: {
          autoSkip: true,
          maxTicksLimit: 10,
        },
      },
      y: {
        title: {
          display: true,
          text: '時間'
        },
      },
    },
  };

  const labels = ["1", "2", "3", "4", "5"];

  const data = {
    labels,
    datasets: [
      {
        label: "今月の勉強時間",
        data: [10, 40, 30, 40, 50, 80, 120],
        borderColor: "rgb(128, 164, 255)",
      },
    ],
  };

  return (
    <SContainerBg>
      <SContainer>
        <Line options={options} data={data} />
      </SContainer>
    </SContainerBg>
  );
};

export default StudyChart;

const SContainerBg = styled.div`
  background-color: #f2f2f2;
  border-radius: 16px;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.2);
  margin: 32px 0;
`;

const SContainer = styled.div`
  background-color: #fff;
  padding: 16px;
`;
