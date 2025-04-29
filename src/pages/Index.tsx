
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useUser } from "@/contexts/UserContext";

const Index = () => {
  const { hasCompletedOnboarding } = useUser();
  const navigate = useNavigate();

  useEffect(() => {
    // Redirect to welcome page or home based on onboarding status
    if (hasCompletedOnboarding) {
      navigate("/home");
    } else {
      navigate("/");
    }
  }, [hasCompletedOnboarding, navigate]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-white">
      <div className="text-center">
        <h1 className="text-2xl font-bold mb-4">Loading...</h1>
      </div>
    </div>
  );
};

export default Index;
