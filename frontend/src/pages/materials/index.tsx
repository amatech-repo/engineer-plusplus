import Layout from "@/components/Layouts/layout";
import MaterialList from "@/components/MaterialsList";
import styled from "styled-components";

const Dashboard = () => {
  return (
    <Layout>
      <>
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