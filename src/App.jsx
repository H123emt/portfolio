import { BrowserRouter } from "react-router-dom";
import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";
import ScrollProgress from "./components/layout/ScrollProgress";
import AppRoutes from "./routes/AppRoutes";

export default function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen bg-background font-body antialiased">
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-[999] focus:px-4 focus:py-2 focus:bg-primary focus:text-white focus:rounded-lg focus:font-body focus:text-sm"
        >
          Skip to main content
        </a>

        <ScrollProgress />
        <Navbar />
        <AppRoutes />
        <Footer />
      </div>
    </BrowserRouter>
  );
}
