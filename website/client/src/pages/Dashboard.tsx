import { useEffect, useState } from "react";
import Navigation from '../components/Navigation';
import { Link } from 'wouter';

// Dashboard page displays student progress across modules and recent activity.
const Dashboard: React.FC = () => {
  // Placeholder state for module progress; in a real implementation, fetch from tRPC API
  const [modules, setModules] = useState([
    { id: 1, name: 'Module 1', progress: 0.0 },
    { id: 2, name: 'Module 2', progress: 0.0 },
    { id: 3, name: 'Module 3', progress: 0.0 },
    { id: 4, name: 'Module 4', progress: 0.0 },
    { id: 5, name: 'Module 5', progress: 0.0 },
    { id: 6, name: 'Module 6', progress: 0.0 },
  ]);

  // Example: useEffect to fetch progress data when component mounts
  useEffect(() => {
    // TODO: call tRPC procedures (getModuleProgress, getQuizAttempts, etc.)
    // to populate modules state with real progress values and recent activity
  }, []);

  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation />
      <div className="max-w-5xl mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-6">Student Dashboard</h1>
        <p className="mb-4 text-gray-700">
          Track your progress through the course modules, see your recent quiz scores, and continue where you left off.
        </p>
        <div className="space-y-4">
          {modules.map((module) => (
            <div key={module.id} className="p-4 bg-white rounded shadow">
              <div className="flex justify-between items-center mb-2">
                <h2 className="text-xl font-semibold">{module.name}</h2>
                <Link href={`/module${module.id}`} className="text-blue-600 hover:underline">
                  Go to Module
                </Link>
              </div>
              <div className="w-full bg-gray-200 rounded h-2">
                <div
                  className="bg-blue-500 h-2 rounded"
                  style={{ width: `${module.progress * 100}%` }}
                ></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
