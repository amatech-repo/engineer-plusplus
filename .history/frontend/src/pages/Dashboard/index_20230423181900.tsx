import Navigation from "@/components/Navigataion";
import Card from "@/components/Card";

const Dashboard = () => {
  return (
    <>
      <h1>最近</h1>
      <Card title="React入門" totalStudyTime={10} tag={["React", "JavaScript", "Web開発"]} />
    </>
  );
};

export default Dashboard;
