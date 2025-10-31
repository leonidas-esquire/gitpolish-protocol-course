import { Route } from "wouter";
import { useAuth } from "../contexts/AuthContext";
import NotFound from "../pages/NotFound";

interface AdminRouteProps {
  path: string;
  component: any;
}

export default function AdminRoute({ path, component }: AdminRouteProps) {
  const { user } = useAuth();
  if (!user || user.role !== "admin") {
    return <Route path={path} component={NotFound} />;
  }
  return <Route path={path} component={component} />;
}
