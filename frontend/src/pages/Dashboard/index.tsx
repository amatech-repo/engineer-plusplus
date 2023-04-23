import Navigation from "@/components/Navigataion";
import Card from "@/components/Card";
import RecentStudy from "@/components/RecentStudy";
import MaterialList from "@/components/MaterialsList";

const Dashboard = () => {
  return (
    <>
      <RecentStudy />
      <MaterialList listTitle="教材一覧"/>
      <MaterialList listTitle="Youtube"/>
      <MaterialList listTitle="Udemy" />
      <MaterialList listTitle="Progate" />
      <MaterialList listTitle="書籍" />
      <MaterialList listTitle="その他" />
    </>
  );
};

export default Dashboard;
