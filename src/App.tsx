
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
// Product info pages
import BOPP from "./pages/products/BOPP";
import BoxStrapping from "./pages/products/BoxStrapping";
import LDStretch from "./pages/products/LDStretch";
import POF from "./pages/products/POF";
import PVC from "./pages/products/PVC";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          {/* Product detail routes */}
          <Route path="/products/bopp" element={<BOPP />} />
          <Route path="/products/box-strapping" element={<BoxStrapping />} />
          <Route path="/products/ld-stretch" element={<LDStretch />} />
          <Route path="/products/pof" element={<POF />} />
          <Route path="/products/pvc" element={<PVC />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
