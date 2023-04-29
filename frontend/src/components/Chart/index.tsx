import React, { memo, useEffect, useState } from "react";
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
import { db } from "../../../lib/FirebaseConfig";
import { useRouter } from "next/router";
import { Timestamp, collection, doc, getDoc, getDocs, getFirestore } from "firebase/firestore";

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

type Records = {
  id: string;
  memo: string;
  mid: string;
  uid: string;
  createdAt: Timestamp;
  time: number;
}

const StudyChart: React.FC = memo(() => {
  const [chartData, setChartData] = useState<{ labels: string[], datasets: { data: number[] }[] }>({
    labels: [],
    datasets: [{ data: [] }],
  });
  const [studyData, setStudyData] = useState({ labels: [], data: [] });
  const [record , setRecord] = useState<Records[] | undefined>();
  const router = useRouter();
  const { id } = router.query;
  const now = new Date();
  const month = now.getMonth() + 1;
  const year = now.getFullYear();

  const options = {
    responsive: true,
    scales: {
      x: {
        title: {
          display: true,
        },
        ticks: {
          autoSkip: true,
          maxTicksLimit: 10,
        },
      },
      y: {
        beginAtZero: true, // y軸の最小値を0に設定
        title: {
          display: true,
          text: '時間'
        },
      },
    },
  };


  const data = {
    labels: ["Week1","Week2","Week3","Week4","Week5",],
    datasets: [
      {
        label: `${month}月の勉強時間`,
        data: [25, 55, 40, 60, 33],
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
});

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
