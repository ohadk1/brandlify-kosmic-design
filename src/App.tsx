
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import WebDesign from "./pages/WebDesign";
import LogoDesign from "./pages/LogoDesign";
import PortfolioPage from "./pages/PortfolioPage";
import WhyChooseMePage from "./pages/WhyChooseMePage";
import ContactPage from "./pages/ContactPage";
import LandingPages from "./pages/LandingPages";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/web-design" element={<WebDesign />} />
          <Route path="/logo-design" element={<LogoDesign />} />
          <Route path="/portfolio" element={<PortfolioPage />} />
          <Route path="/why-choose-me" element={<WhyChooseMePage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/landing-pages" element={<LandingPages />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
