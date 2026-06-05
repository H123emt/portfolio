import { Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import Home from "../pages/Home";
import ProjectDetails from "../pages/ProjectDetails";

export default function AppRoutes() {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait" initial={false}>
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Home />} />
        <Route path="/project/:id" element={<ProjectDetails />} />
        <Route
          path="*"
          element={
            <div className="min-h-screen flex flex-col items-center justify-center text-white bg-background gap-4">
              <p className="font-display text-6xl font-bold text-primary">404</p>
              <p className="font-body text-white/50">Page not found.</p>
              <a href="/" className="text-primary hover:underline font-body text-sm">
                Go home
              </a>
            </div>
          }
        />
      </Routes>
    </AnimatePresence>
  );
}
