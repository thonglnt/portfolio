import React, { useState } from "react";
import Menu from "@/components/Menu";
import Home from "@/pages/Home";
import About from "@/components/About";

interface DashboardProps {
  children?: React.ReactNode;
}

const Dashboard = ({ children }: DashboardProps) => {
  const [currentPage, setCurrentPage] = useState<string>("home");

  const renderContent = () => {
    switch (currentPage) {
      case "home":
        return <Home />;
      case "about":
        return <About />;
      default:
        return <Home />;
    }
  };

  return (
    <div
      className="dashboard-layout"
      style={{ width: "100%", height: "100%", minHeight: "100%" }}
    >
      <main className="dashboard-content"><div>{renderContent()}</div></main>
      <Menu setCurrentPage={setCurrentPage} />
    </div>
  );
};

export default Dashboard;
