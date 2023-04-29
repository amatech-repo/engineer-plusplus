import { useEffect, useState } from "react";
import Link from "next/link";
import styled from "styled-components";
import { Timestamp, collection, getDocs, getFirestore } from "firebase/firestore";
import { useAuth } from "@/context/AuthContext";
import { useRecoilValue } from "recoil";

import { signInUserState } from "@/store/Auth/auth";
import Layout from "@/components/Layouts/layout";
import MaterialList from "@/components/MaterialsList";
import CustomButton from "@/components/Button";

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
		<Layout>
			<>
				<SContainer>
					<Link href="/materials/register">
						<CustomButton label="教材を登録" />
					</Link>
				</SContainer>
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
		</Layout>
	);
};

export default Dashboard;

const SContainer = styled.div`
  text-align: right;
`