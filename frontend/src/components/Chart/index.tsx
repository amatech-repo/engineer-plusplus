import React, { useEffect, useState } from "react";
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
import { collection, doc, getDoc, getDocs, getFirestore } from "firebase/firestore";

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

type Records = {
  id: string;
  memo: string;
  mid: string;
  uid: string;
  createdAt: {
    seconds: number;
    nanoseconds: number;
  };
  time: number;
}

const StudyChart: React.FC = () => {
  const [studyData, setStudyData] = useState({ labels: [], data: [] });
  const router = useRouter();
  const { id } = router.query;

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
        beginAtZero: true, // y軸の最小値を0に設定
        title: {
          display: true,
          text: '時間'
        },
      },
    },
  };

  useEffect(() => {
    // Firestoreの初期化
    const fetchRecord = async () => {
      try {
        const db = getFirestore();
        const docSnap = await getDocs(collection(db, "records"));
        const records = docSnap.docs.map((doc) => {
          const data = doc.data() as Records;
          return {
            id: doc.id,
            memo: data.memo,
            mid: data.mid,
            uid: data.uid,
            createdAt: data.createdAt,
            time: data.time,
          };
        });

        const filterdRecords = records.filter((record) => record.mid === id);
        // ドキュメントのtimeを秒から時間に変換し、1週目から5週目までの勉強時間を合計
        const timeData = filterdRecords.flatMap((record) => record.time).map((t: number) => t / 3600); // 秒から時間に変換
        const totalTimes: number[] = [];
        for (let i = 0; i < 5; i++) {
          const startIndex = i * 7;
          const endIndex = (i + 1) * 7;
          const weekData = timeData.slice(startIndex, endIndex);
          const total = weekData.reduce((acc, curr) => acc + curr, 0);
          totalTimes.push(Math.max(total, 0));

          // ラベルとデータを設定
          const labels = ["1", "2", "3", "4", "5"];
          setStudyData({ labels, data: totalTimes });
          console.log(studyData);
        }
      } catch (error) {
        console.error(error);
      }
    };

    if(id) {
      fetchRecord();
    }
  }, [studyData]);


  const data = {
    labels: studyData.labels,
    datasets: [
      {
        label: "今月の勉強時間",
        data: studyData.data,
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
