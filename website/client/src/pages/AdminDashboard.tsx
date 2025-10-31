import Navigation from "@/components/Navigation";
import { useState, useEffect } from "react";

function AdminDashboard() {
  const [stats, setStats] = useState({
    students: 0,
    modulesCompleted: 0,
    averageQuizScore: 0,
  });

  useEffect(() => {
    // TODO: fetch actual stats via tRPC procedures
  }, []);

  return (
    <>
      <Navigation />
      <div className="container mx-auto p-4">
        <h1 className="text-3xl font-bold mb-4">Admin Dashboard</h1>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="bg-white dark:bg-gray-800 p-4 rounded shadow">
            <h2 className="text-xl font-semibold">Students Enrolled</h2>
            <p className="text-4xl">{stats.students}</p>
          </div>
          <div className="bg-white dark:bg-gray-800 p-4 rounded shadow">
            <h2 className="text-xl font-semibold">Modules Completed</h2>
            <p className="text-4xl">{stats.modulesCompleted}</p>
          </div>
          <div className="bg-white dark:bg-gray-800 p-4 rounded shadow">
            <h2 className="text-xl font-semibold">Avg Quiz Score</h2>
            <p className="text-4xl">{stats.averageQuizScore}%</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default AdminDashboard;
