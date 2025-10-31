import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/NotFound";
import { Route, Switch } from "wouter";
import ErrorBoundary from "./components/ErrorBoundary";
import { ThemeProvider } from "./contexts/ThemeContext";

// Public pages
import Home from "./pages/Home";
import Curriculum from "./pages/Curriculum";
import Module1Dashboard from "./pages/Module1Dashboard";
import Module1Quiz from "./pages/Module1Quiz";
import Certification from "./pages/Certification";
import Resources from "./pages/Resources";
import Dashboard from "./pages/Dashboard";

// Admin pages
import AdminDashboard from "./pages/AdminDashboard";
import AdminStudents from "./pages/AdminStudents";
import AdminAnalytics from "./pages/AdminAnalytics";

function Router() {
  return (
    <Switch>
      {/* Public routes */}
      <Route path="/" component={Home} />
      <Route path="/curriculum" component={Curriculum} />
      <Route path="/module-1" component={Module1Dashboard} />
      <Route path="/module-1/quiz" component={Module1Quiz} />
      <Route path="/dashboard" component={Dashboard} />
      <Route path="/certification" component={Certification} />
      <Route path="/resources" component={Resources} />

      {/* Admin routes */}
      <Route path="/admin" component={AdminDashboard} />
      <Route path="/admin/students" component={AdminStudents} />
      <Route path="/admin/analytics" component={AdminAnalytics} />

      {/* 404 route */}
      <Route path="/404" component={NotFound} />

      {/* Fallback route */}
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <ErrorBoundary>
      <ThemeProvider defaultTheme="light">
        <TooltipProvider>
          <Router />
          <Toaster />
        </TooltipProvider>
      </ThemeProvider>
    </ErrorBoundary>
  );
}

export default App;
