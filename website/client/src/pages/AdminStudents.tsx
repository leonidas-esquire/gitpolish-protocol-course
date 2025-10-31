import Navigation from "../components/Navigation";
import { useState, useEffect } from "react";

interface Student {
  id: string;
  name: string;
  progress: number;
}

export default function AdminStudents() {
  // Placeholder data; replace with tRPC calls
  const [students, setStudents] = useState<Student[]>([]);

  useEffect(() => {
    setStudents([
      { id: "1", name: "Alice Smith", progress: 75 },
      { id: "2", name: "Bob Johnson", progress: 50 },
      { id: "3", name: "Carlos Martinez", progress: 90 },
    ]);
  }, []);

  return (
    <>
      <Navigation />
      <main className="px-8 py-10">
        <h1 className="text-3xl font-bold mb-6">Student Management</h1>
        <table className="min-w-full bg-white dark:bg-gray-800">
          <thead>
            <tr>
              <th className="py-3 px-4 text-left">Name</th>
              <th className="py-3 px-4 text-left">Progress</th>
            </tr>
          </thead>
          <tbody>
            {students.map((student) => (
              <tr key={student.id} className="border-b dark:border-gray-700">
                <td className="py-2 px-4">{student.name}</td>
                <td className="py-2 px-4">
                  <div className="w-full bg-gray-200 rounded-full h-4">
                    <div
                      className="bg-blue-500 h-4 rounded-full"
                      style={{ width: `${student.progress}%` }}
                    />
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </main>
    </>
  );
}
