import Navigation from "@/components/Navigation";
import { useState, useEffect } from "react";

function AdminAnalytics() {
  const [analytics, setAnalytics] = useState({
    completionRate: 0,
    averageQuizScore: 0,
    averageLabCompletionTime: 0,
  });

  useEffect(() => {
    // TODO: fetch analytics via tRPC
  }, []);

  return (
    <>
      <Navigation />
      <div className="container mx-auto p-4">
        <h1 className="text-3xl font-bold mb-4">Course Analytics</h1>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="bg-white dark:bg-gray-800 p-4 rounded shadow">
            <h2 className="text-xl font-semibold">Completion Rate</h2>
            <p className="text-4xl">{analytics.completionRate}%</p>
          </div>
          <div className="bg-white dark:bg-gray-800 p-4 rounded shadow">
            <h2 className="text-xl font-semibold">Average Quiz Score</h2>
            <p className="text-4xl">{analytics.averageQuizScore}%</p>
          </div>
          <div className="bg-white dark:bg-gray-800 p-4 rounded shadow">
            <h2 className="text-xl font-semibold">Avg Lab Completion Time</h2>
            <p className="text-4xl">{analytics.averageLabCompletionTime} mins</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default AdminAnalytics;
