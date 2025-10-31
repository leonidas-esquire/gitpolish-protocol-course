import Navigation from "../components/Navigation";
import { useEffect, useState } from "react";

interface Analytics {
  completionRate: number;
  avgQuizScore: number;
  avgLabTime: number;
}

export default function AdminAnalytics() {
  // Placeholder analytics; integrate tRPC calls in future phases
  const [analytics, setAnalytics] = useState<Analytics>({
    completionRate: 0,
    avgQuizScore: 0,
    avgLabTime: 0,
  });

  useEffect(() => {
    setAnalytics({
      completionRate: 64,
      avgQuizScore: 82,
      avgLabTime: 45,
    });
  }, []);

  return (
    <>
      <Navigation />
      <main className="px-8 py-10">
        <h1 className="text-3xl font-bold mb-6">Course Analytics</h1>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-gray-100 dark:bg-gray-800 p-6 rounded-lg shadow">
            <h2 className="text-xl font-semibold mb-2">
              Course Completion Rate
            </h2>
            <p className="text-4xl">{analytics.completionRate}%</p>
          </div>
          <div className="bg-gray-100 dark:bg-gray-800 p-6 rounded-lg shadow">
            <h2 className="text-xl font-semibold mb-2">
              Avg. Quiz Score
            </h2>
            <p className="text-4xl">{analytics.avgQuizScore}%</p>
          </div>
          <div className="bg-gray-100 dark:bg-gray-800 p-6 rounded-lg shadow">
            <h2 className="text-xl font-semibold mb-2">
              Avg. Lab Completion Time
            </h2>
            <p className="text-4xl">{analytics.avgLabTime} mins</p>
          </div>
        </div>
      </main>
    </>
  );
}
