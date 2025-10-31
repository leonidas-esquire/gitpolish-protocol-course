import { useState } from 'react';
import Navigation from '../components/Navigation';
import { Link } from 'wouter';

const Module1Dashboard = () => {
  // Placeholder progress values; replace with tRPC data later
  const [progress, setProgress] = useState({
    slides: 50,
    labs: 20,
    quiz: 0,
    certificate: false,
  });

  return (
    <>
      <Navigation />
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-4">Module 1 Dashboard</h1>
        <p className="mb-6">Track your progress for Module 1 and access learning materials.</p>
        <div className="space-y-6">
          <div className="border p-4 rounded-lg shadow">
            <h2 className="text-xl font-semibold mb-2">Slides</h2>
            <div className="w-full bg-gray-200 rounded-full h-2 mb-2">
              <div className="bg-blue-500 h-2 rounded-full" style={{ width: `${progress.slides}%` }}></div>
            </div>
            <Link href="/module-1/slides" className="text-blue-600 hover:underline">View Slides</Link>
          </div>

          <div className="border p-4 rounded-lg shadow">
            <h2 className="text-xl font-semibold mb-2">Labs</h2>
            <div className="w-full bg-gray-200 rounded-full h-2 mb-2">
              <div className="bg-green-500 h-2 rounded-full" style={{ width: `${progress.labs}%` }}></div>
            </div>
            <Link href="/module-1/labs" className="text-blue-600 hover:underline">Start Labs</Link>
          </div>

          <div className="border p-4 rounded-lg shadow">
            <h2 className="text-xl font-semibold mb-2">Quiz</h2>
            <div className="w-full bg-gray-200 rounded-full h-2 mb-2">
              <div className="bg-yellow-500 h-2 rounded-full" style={{ width: `${progress.quiz}%` }}></div>
            </div>
            <Link href="/module-1/quiz" className="text-blue-600 hover:underline">Take Quiz</Link>
          </div>

          <div className="border p-4 rounded-lg shadow">
            <h2 className="text-xl font-semibold mb-2">Certificate</h2>
            {progress.certificate ? (
              <span className="text-green-600">Certificate Issued</span>
            ) : (
              <Link href="/certification" className="text-blue-600 hover:underline">View Certification Page</Link>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default Module1Dashboard;
