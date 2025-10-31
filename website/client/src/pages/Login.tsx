import Navigation from "../components/Navigation";
import { useAuth } from "../contexts/AuthContext";
import { useLocation } from "wouter";

export default function Login() {
  const { loginAsStudent, loginAsAdmin } = useAuth();
  const [, setLocation] = useLocation();

  const handleStudentLogin = () => {
    loginAsStudent();
    setLocation("/dashboard");
  };

  const handleAdminLogin = () => {
    loginAsAdmin();
    setLocation("/admin");
  };

  return (
    <>
      <Navigation />
      <main className="px-8 py-10">
        <h1 className="text-3xl font-bold mb-6">Login</h1>
        <p className="mb-4">Select your role to continue.</p>
        <div className="flex space-x-4">
          <button
            className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded"
            onClick={handleStudentLogin}
          >
            Login as Student
          </button>
          <button
            className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded"
            onClick={handleAdminLogin}
          >
            Login as Admin
          </button>
        </div>
      </main>
    </>
  );
}
