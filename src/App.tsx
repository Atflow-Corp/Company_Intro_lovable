import { useState } from 'react';
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import PortfolioPage from "./pages/Portfolio";
import Navigation from './components/Navigation';

const queryClient = new QueryClient();

const AppContent = () => {
  const [language, setLanguage] = useState<'ko' | 'en'>('ko');
  const location = useLocation();
  const isPortfolioPage = location.pathname === '/portfolio';

  return (
    <>
      <Navigation language={language} setLanguage={setLanguage} />
      <Routes>
        <Route path="/" element={<Index language={language} setLanguage={setLanguage} />} />
        <Route path="/portfolio" element={<PortfolioPage language={language} />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <AppContent />
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
