import Navigation from "@/components/Navigation";
import { useState, useEffect } from "react";

function AdminStudents() {
  const [students, setStudents] = useState([
    { id: 1, name: "John Doe", progress: 50 },
    { id: 2, name: "Jane Smith", progress: 75 },
  ]);

  useEffect(() => {
    // TODO: fetch students and progress via tRPC
  }, []);

  return (
    <>
      <Navigation />
      <div className="container mx-auto p-4">
        <h1 className="text-3xl font-bold mb-4">Student Management</h1>
        <table className="min-w-full bg-white dark:bg-gray-800">
          <thead>
            <tr>
              <th className="px-4 py-2 text-left">Name</th>
              <th className="px-4 py-2">Progress</th>
            </tr>
          </thead>
          <tbody>
            {students.map((student) => (
              <tr key={student.id} className="border-t">
                <td className="px-4 py-2">{student.name}</td>
                <td className="px-4 py-2">
                  <div className="w-full bg-gray-200 rounded">
                    <div
                      className="bg-blue-500 text-xs leading-none py-1 text-center text-white rounded"
                      style={{ width: `${student.progress}%` }}
                    >
                      {student.progress}%
                    </div>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
}

export default AdminStudents;
