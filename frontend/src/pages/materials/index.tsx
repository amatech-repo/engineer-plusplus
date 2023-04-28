import Link from "next/link";
import styled from "styled-components";

import Layout from "@/components/Layouts/layout";
import MaterialList from "@/components/MaterialsList";
import CustomButton from "@/components/Button";

const Dashboard = () => {
  return (
    <Layout>
      <>
        <SContainer>
          <Link href="/materials/register">
            <CustomButton label="教材を登録" />
          </Link>
        </SContainer>
        <MaterialList listTitle="教材一覧" />
        <MaterialList listTitle="Youtube" />
        <MaterialList listTitle="Udemy" />
        <MaterialList listTitle="Progate" />
        <MaterialList listTitle="書籍" />
        <MaterialList listTitle="その他" />
      </>
    </Layout>
  );
};

export default Dashboard;

const SContainer = styled.div`
  text-align: right;
`