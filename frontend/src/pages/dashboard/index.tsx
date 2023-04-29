import styled from "styled-components";
import Link from "next/link";

import Navigation from "@/components/Navigataion";
import Card from "@/components/Card";
import RecentStudy from "@/components/RecentStudy";
import MaterialList from "@/components/MaterialsList";
import TodayStudyTime from "@/components/TodayStudyTime";
import CustomButton from "@/components/Button";

// TODO: pages/materialsと重複するので、共通化する
import { useEffect, useState } from "react";
import { useRecoilValue } from "recoil";
import { Timestamp, collection, getDocs, getFirestore } from "firebase/firestore";
import { signInUserState } from "@/store/Auth/auth";

type Materials = {
	id: string;
	uId: string;
	title: string;
	author: string;
	categoryId: string;
	description: string;
	image: string;
	tags: string[];
	totalStudyTime: number;
	url: string;
	createdAt: Timestamp;
	updateAt: Timestamp;
};

const Dashboard = () => {
	// pages/materials の Dashboard と同じ
	const [data, setData] = useState<Materials[] | undefined>();
	const { uid, accessToken } = useRecoilValue(signInUserState);

	useEffect(() => {
		const fetchData = async () => {
			try {
				const db = getFirestore();
				const querySnapshot = await getDocs(collection(db, "materials"));
				const materials = querySnapshot.docs.map((doc) => {
					const data = doc.data() as Materials;
					return {
						id: doc.id,
						uId: data.uId,
						title: data.title,
						author: data.author,
						categoryId: data.categoryId,
						description: data.description,
						image: data.image,
						tags: data.tags,
						totalStudyTime: data.totalStudyTime,
						url: data.url,
						createdAt: data.createdAt,
						updateAt: data.updateAt,
					};
				});
				console.log(materials);
				const filteredMaterials = materials.filter((material) => material.uId === uid);
				setData(filteredMaterials);
			} catch (error) {
				console.error(error);
			}
		};
		fetchData();
	}, []);

	return (
		<>
			<Container>
				<RecentStudyContainer>
					<RecentStudy />
				</RecentStudyContainer>
				<ContainerRight>
					<Link href="/materials/register">
						<CustomButton label="教材を登録" />
					</Link>
					<TodayStudyTimeContainer>
						<TodayStudyTime studyTime={12345} />
					</TodayStudyTimeContainer>
				</ContainerRight>
			</Container>
			{/* カードがない場合はMaterialListを非表示にする*/}
			<MaterialList listTitle="教材一覧" data={data} />
			{data?.filter((material) => material.categoryId === "0").length !== 0 && (
				<MaterialList listTitle="書籍" data={data?.filter((material) => material.categoryId === "0")} />
			)}
			{data?.filter((material) => material.categoryId === "1").length !== 0 && (
				<MaterialList listTitle="Youtube" data={data?.filter((material) => material.categoryId === "1")} />
			)}
			{data?.filter((material) => material.categoryId === "2").length !== 0 && (
				<MaterialList listTitle="Udemy" data={data?.filter((material) => material.categoryId === "2")} />
			)}
			{data?.filter((material) => material.categoryId === "3").length !== 0 && (
				<MaterialList listTitle="Progate" data={data?.filter((material) => material.categoryId === "3")} />
			)}
			{data?.filter((material) => material.categoryId === "4").length !== 0 && (
				<MaterialList listTitle="その他" data={data?.filter((material) => material.categoryId === "4")} />
			)}
		</>
	);
};

export default Dashboard;

const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 2rem;

  @media (max-width: 800px) {
    flex-direction: column;
    gap: 1rem;
  }
`;

const ContainerRight = styled.div`
  text-align: right;
  color: #333;
  text-decoration: none;
`;

const TodayStudyTimeContainer = styled.div`
  flex: 1;

  @media (max-width: 800px) {
    order: 1;
  }
`;

const RecentStudyContainer = styled.div`
  flex: 1;

  @media (max-width: 800px) {
    order: 2;
  }
`;
