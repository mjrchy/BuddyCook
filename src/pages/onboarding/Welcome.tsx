
import { Link } from "react-router-dom";
import { ChefHat } from "lucide-react";

const Welcome = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-6 bg-white">
      <div className="w-full max-w-md mx-auto text-center">
        <div className="mb-8">
          <div className="mx-auto w-32 h-32 bg-indigo-100 rounded-full flex items-center justify-center">
            <ChefHat size={72} className="text-indigo-600" />
          </div>
        </div>
        
        <h1 className="text-3xl font-bold mb-3 text-gray-900">Welcome to BuddyCook!</h1>
        <p className="text-lg text-gray-600 mb-10">
          Tell us about your food preferences so we can personalize your experience
        </p>

        <Link 
          to="/onboarding/dietary-preferences"
          className="block w-full bg-indigo-600 text-white py-3 px-6 rounded-lg font-medium shadow-md hover:bg-indigo-700 transition-colors"
        >
          Get Started
        </Link>
      </div>
    </div>
  );
};

export default Welcome;
