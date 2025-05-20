
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AuthProvider } from "./contexts/AuthContext";
import Index from "./pages/Index";
import Learn from "./pages/Learn";
import NotFound from "./pages/NotFound";
import CoursesPage from "./pages/CoursesPage";
import ResourcesPage from "./pages/ResourcesPage";
import BitcoinBasics from "./pages/learn/BitcoinBasics";
import WalletsPage from "./pages/learn/WalletsPage";
import SecurityPage from "./pages/learn/SecurityPage";
import TransactionsPage from "./pages/learn/TransactionsPage";
import BeginnersCoursePage from "./pages/courses/BeginnersCoursePage";
import IntermediateCoursePage from "./pages/courses/IntermediateCoursePage";
import AdvancedCoursePage from "./pages/courses/AdvancedCoursePage";
import BitcoinDesignCoursePage from "./pages/courses/BitcoinDesignCoursePage";
import StacksPrimerCoursePage from "./pages/courses/StacksPrimerCoursePage";
import ExSatCoursePage from "./pages/courses/ExSatCoursePage";
import PrivacyPage from "./pages/PrivacyPage";
import TermsPage from "./pages/TermsPage";
import GlossaryPage from "./pages/resources/GlossaryPage";
import FaqPage from "./pages/resources/FaqPage";
import EventsCalendar from "./pages/EventsCalendar";
import ContactPage from "./pages/ContactPage";
import HelpPage from "./pages/HelpPage";
import FeedbackPage from "./pages/FeedbackPage";
import NewsPage from "./pages/NewsPage";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <AuthProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/learn" element={<Learn />} />
            <Route path="/learn/basics" element={<BitcoinBasics />} />
            <Route path="/learn/wallets" element={<WalletsPage />} />
            <Route path="/learn/security" element={<SecurityPage />} />
            <Route path="/learn/transactions" element={<TransactionsPage />} />
            <Route path="/courses" element={<CoursesPage />} />
            <Route path="/courses/beginners" element={<BeginnersCoursePage />} />
            <Route path="/courses/intermediate" element={<IntermediateCoursePage />} />
            <Route path="/courses/advanced" element={<AdvancedCoursePage />} />
            <Route path="/courses/bitcoin-design" element={<BitcoinDesignCoursePage />} />
            <Route path="/courses/stacks-primer" element={<StacksPrimerCoursePage />} />
            <Route path="/courses/exsat" element={<ExSatCoursePage />} />
            <Route path="/resources" element={<ResourcesPage />} />
            <Route path="/resources/glossary" element={<GlossaryPage />} />
            <Route path="/resources/faq" element={<FaqPage />} />
            <Route path="/events" element={<EventsCalendar />} />
            <Route path="/privacy" element={<PrivacyPage />} />
            <Route path="/terms" element={<TermsPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/help" element={<HelpPage />} />
            <Route path="/feedback" element={<FeedbackPage />} />
            <Route path="/news" element={<NewsPage />} />
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </AuthProvider>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
