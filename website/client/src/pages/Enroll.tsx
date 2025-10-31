import { useState } from 'react';
import Navigation from "../components/Navigation";
import { useAuth } from "../contexts/AuthContext";
import { trpc } from "../utils/trpc";

export default function Enroll() {
  const { user } = useAuth();
  const enrollMutation = trpc.enroll.useMutation();
  const [status, setStatus] = useState('');

  const handleEnroll = async () => {
    if (!user) {
      setStatus('Please log in first.');
      return;
    }
    try {
      await enrollMutation.mutateAsync({ studentId: user.id, courseId: 'gitpolish' });
      setStatus('Enrollment successful!');
    } catch (error) {
      setStatus('Enrollment failed.');
    }
  };

  return (
    <>
      <Navigation />
      <main className="px-8 py-10">
        <h1 className="text-3xl font-bold mb-6">Enroll in GitPolish Certification Course</h1>
        <p className="mb-4">Click below to enroll.</p>
        <button onClick={handleEnroll} className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-500">
          Enroll Now
        </button>
        {status && <p className="mt-4">{status}</p>}
      </main>
    </>
  );
}
