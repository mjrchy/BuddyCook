
import { Link, useNavigate } from "react-router-dom";
import { useUser, CookingExperience as ExperienceType } from "@/contexts/UserContext";
import OnboardingProgress from "@/components/OnboardingProgress";
import { Check } from "lucide-react";
import { cn } from "@/lib/utils";

const CookingExperience = () => {
  const { cookingExperience, setCookingExperience } = useUser();
  const navigate = useNavigate();
  
  const options: ExperienceType[] = ['Beginner', 'Intermediate', 'Expert'];

  const handleNext = () => {
    navigate('/onboarding/goal-setting');
  };

  return (
    <div className="min-h-screen flex flex-col p-6 bg-white">
      <OnboardingProgress step={3} />

      <h1 className="text-2xl font-bold mb-2 text-gray-900">Cooking Experience</h1>
      <p className="text-gray-600 mb-6">What's your level of cooking experience?</p>

      <div className="flex flex-col gap-3 mb-8">
        {options.map((experience) => (
          <button
            key={experience}
            onClick={() => setCookingExperience(experience)}
            className={cn(
              "flex items-center justify-between p-4 border rounded-lg",
              cookingExperience === experience
                ? "border-indigo-600 bg-indigo-50 text-indigo-600"
                : "border-gray-300 text-gray-700"
            )}
          >
            <span className="font-medium">{experience}</span>
            {cookingExperience === experience && (
              <Check size={20} className="text-indigo-600" />
            )}
          </button>
        ))}
      </div>

      <div className="mt-auto flex justify-between">
        <Link
          to="/onboarding/food-allergy"
          className="py-2 px-4 border border-gray-300 rounded-lg text-gray-700"
        >
          Back
        </Link>
        <div className="flex gap-2">
          <Link
            to="/onboarding/goal-setting"
            className="py-2 px-4 border border-gray-300 rounded-lg text-gray-700"
          >
            Skip all
          </Link>
          <button 
            onClick={handleNext}
            className="py-2 px-8 bg-indigo-600 text-white rounded-lg shadow hover:bg-indigo-700"
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
};

export default CookingExperience;
