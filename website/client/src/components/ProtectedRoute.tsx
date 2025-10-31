import { Route } from "wouter";
import { useAuth } from "../contexts/AuthContext";
import NotFound from "../pages/NotFound";

interface ProtectedRouteProps {
  path: string;
  component: any;
}

export default function ProtectedRoute({ path, component }: ProtectedRouteProps) {
  const { user } = useAuth();
  if (!user) {
    // If the user is not logged in, render NotFound (or redirect to login)
    return <Route path={path} component={NotFound} />;
  }
  return <Route path={path} component={component} />;
}
