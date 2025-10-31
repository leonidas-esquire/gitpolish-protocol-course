import { useState } from "react";
import Navigation from "../components/Navigation";
import { useAuth } from "../contexts/AuthContext";
// Adjust this import to match your tRPC hook generator path
import { trpc } from "../utils/trpc";

export default function Enroll() {
  const { user } = useAuth();
  const [status, setStatus] = useState<string | null>(null);

  // Use tRPC mutation to enroll the student
  const enrollMutation = trpc.enroll.useMutation();

  async function handleEnroll() {
    if (!user) {
      setStatus("Please log in before enrolling.");
      return;
    }
    try {
      // Pass the student's ID to the enrollment procedure
      await enrollMutation.mutateAsync({
        studentId: user.id,
        // If your procedure expects additional fields (e.g., courseId), add them here
      });
      setStatus("Enrollment successful! You’re now enrolled in the course.");
    } catch (error) {
      setStatus("Enrollment failed. Please try again later.");
    }
  }

  return (
    <>
      <Navigation />
      <main className="px-8 py-10">
        <h1 className="text-3xl font-bold mb-6">Enroll in the GitPolish Certification Course</h1>
        <p className="mb-4">
          Ready to start your journey toward mastering professional GitHub repository management? Click
          the button below to enroll.
        </p>
        <button
          onClick={handleEnroll}
          className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-500"
        >
          Enroll Now
        </button>
        {status && <p className="mt-4 text-lg">{status}</p>}
      </main>
    </>
  );
}
