import Navigation from "../components/Navigation";
import { useEffect, useState } from "react";

interface Stats {
  students: number;
  completedModules: number;
  averageQuizScore: number;
}

export default function AdminDashboard() {
  // Placeholder state; integrate tRPC calls in future phases
  const [stats, setStats] = useState<Stats>({
    students: 0,
    completedModules: 0,
    averageQuizScore: 0,
  });

  useEffect(() => {
    // TODO: fetch real statistics via tRPC
    setStats({
      students: 25,
      completedModules: 40,
      averageQuizScore: 88,
    });
  }, []);

  return (
    <>
      <Navigation />
      <main className="px-8 py-10">
        <h1 className="text-3xl font-bold mb-6">Admin Dashboard</h1>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-gray-100 dark:bg-gray-800 p-6 rounded-lg shadow">
            <h2 className="text-xl font-semibold mb-2">Students Enrolled</h2>
            <p className="text-4xl">{stats.students}</p>
          </div>
          <div className="bg-gray-100 dark:bg-gray-800 p-6 rounded-lg shadow">
            <h2 className="text-xl font-semibold mb-2">Modules Completed</h2>
            <p className="text-4xl">{stats.completedModules}</p>
          </div>
          <div className="bg-gray-100 dark:bg-gray-800 p-6 rounded-lg shadow">
            <h2 className="text-xl font-semibold mb-2">Avg. Quiz Score</h2>
            <p className="text-4xl">{stats.averageQuizScore}%</p>
          </div>
        </div>
      </main>
    </>
  );
}
