import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/NotFound";
import { Route, Switch } from "wouter";
import ErrorBoundary from "./components/ErrorBoundary";
import { ThemeProvider } from "./contexts/ThemeContext";
import Home from "./pages/Home";
import Curriculum from "./pages/Curriculum";
import Module1Dashboard from "./pages/Module1Dashboard";
import Module1Quiz from "./pages/Module1Quiz";
import Certification from "./pages/Certification";
import Resources from "./pages/Resources";
import Dashboard from "./pages/Dashboard";

function Router() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route path="/curriculum" component={Curriculum} />
      <Route path="/module-1" component={Module1Dashboard} />
      <Route path="/module-1/quiz" component={Module1Quiz} />
      <Route path="/dashboard" component={Dashboard} />
      <Route path="/certification" component={Certification} />
      <Route path="/resources" component={Resources} />
      <Route path="/404" component={NotFound} />
      {/* Final fallback route */}
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
