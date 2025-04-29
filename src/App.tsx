
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { UserProvider } from "./contexts/UserContext";

// Onboarding pages
import Welcome from "./pages/onboarding/Welcome";
import DietaryPreferences from "./pages/onboarding/DietaryPreferences";
import FoodAllergy from "./pages/onboarding/FoodAllergy";
import CookingExperience from "./pages/onboarding/CookingExperience";
import GoalSetting from "./pages/onboarding/GoalSetting";

// Main app pages
import Home from "./pages/Home";
import Bookmark from "./pages/Bookmark";
import Profile from "./pages/Profile";
import Recipe from "./pages/Recipe";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <UserProvider>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <div className="max-w-[390px] w-full mx-auto bg-white min-h-screen shadow-lg overflow-hidden">
          <BrowserRouter>
            <Routes>
              {/* Onboarding Routes */}
              <Route path="/" element={<Welcome />} />
              <Route path="/onboarding/dietary-preferences" element={<DietaryPreferences />} />
              <Route path="/onboarding/food-allergy" element={<FoodAllergy />} />
              <Route path="/onboarding/cooking-experience" element={<CookingExperience />} />
              <Route path="/onboarding/goal-setting" element={<GoalSetting />} />

              {/* Main App Routes */}
              <Route path="/home" element={<Home />} />
              <Route path="/bookmark" element={<Bookmark />} />
              <Route path="/profile" element={<Profile />} />
              <Route path="/recipe/:id" element={<Recipe />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </BrowserRouter>
        </div>
      </TooltipProvider>
    </UserProvider>
  </QueryClientProvider>
);

export default App;
