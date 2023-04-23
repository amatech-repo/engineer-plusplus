import Navigation from "@/components/Navigataion";
import Card from "@/components/Card";

const Dashboard = () => {
  return (
    <>
      <h3>最近の学習</h3>
      <RecentStudy>

    </>
      <Card title="React入門" totalStudyTime={10} tag={["React", "JavaScript", "Web開発"]} />
      </RecentStudy>
  );
};

export default Dashboard;
