import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/NotFound";
import { Route, Switch } from "wouter";
import ErrorBoundary from "./components/ErrorBoundary";
import { ThemeProvider } from "./contexts/ThemeContext";

// Authentication context and route guards
import { AuthProvider } from "./contexts/AuthContext";
import ProtectedRoute from "./components/ProtectedRoute";
import AdminRoute from "./components/AdminRoute";

// Public pages
import Home from "./pages/Home";
import Curriculum from "./pages/Curriculum";
import Module1Dashboard from "./pages/Module1Dashboard";
import Module1Quiz from "./pages/Module1Quiz";
import Certification from "./pages/Certification";
import Resources from "./pages/Resources";
import Dashboard from "./pages/Dashboard";
import Login from "./pages/Login"; // ⬅️ import the login page

// Admin pages
import AdminDashboard from "./pages/AdminDashboard";
import AdminStudents from "./pages/AdminStudents";
import AdminAnalytics from "./pages/AdminAnalytics";

function Router() {
  return (
    <Switch>
      {/* Public routes */}
      <Route path="/" component={Home} />
      <Route path="/login" component={Login} /> {/* ⬅️ login route */}
      <Route path="/curriculum" component={Curriculum} />
      <ProtectedRoute path="/module-1" component={Module1Dashboard} />
      <ProtectedRoute path="/module-1/quiz" component={Module1Quiz} />
      <ProtectedRoute path="/dashboard" component={Dashboard} />
      <ProtectedRoute path="/certification" component={Certification} />
      <ProtectedRoute path="/resources" component={Resources} />

      {/* Admin routes */}
      <AdminRoute path="/admin" component={AdminDashboard} />
      <AdminRoute path="/admin/students" component={AdminStudents} />
      <AdminRoute path="/admin/analytics" component={AdminAnalytics} />

      {/* 404 route */}
      <Route path="/404" component={NotFound} />

      {/* Fallback */}
      <Route component={NotFound} />
    </Switch>
  );
}

export default function App() {
  return (
    <ErrorBoundary>
      <AuthProvider>
        <ThemeProvider defaultTheme="light">
          <TooltipProvider>
            <Router />
            <Toaster />
          </TooltipProvider>
        </ThemeProvider>
      </AuthProvider>
    </ErrorBoundary>
  );
}
