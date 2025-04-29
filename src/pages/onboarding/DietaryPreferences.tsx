
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useUser, DietaryPreference } from "@/contexts/UserContext";
import SelectionButton from "@/components/SelectionButton";
import OnboardingProgress from "@/components/OnboardingProgress";

const DietaryPreferences = () => {
  const { dietaryPreferences, setDietaryPreferences, otherDietaryPreference, setOtherDietaryPreference } = useUser();
  const navigate = useNavigate();
  
  const options: DietaryPreference[] = [
    'Vegetarian', 'Vegan', 'Pescatarian', 'Keto', 
    'Paleo', 'Gluten-free', 'Dairy-Free', 'Low-carb', 'Low-fat'
  ];

  const togglePreference = (preference: DietaryPreference) => {
    if (dietaryPreferences.includes(preference)) {
      setDietaryPreferences(dietaryPreferences.filter(p => p !== preference));
    } else {
      setDietaryPreferences([...dietaryPreferences, preference]);
    }
  };

  const handleNext = () => {
    if (otherDietaryPreference && !dietaryPreferences.includes('Other')) {
      setDietaryPreferences([...dietaryPreferences, 'Other']);
    }
    navigate('/onboarding/food-allergy');
  };

  return (
    <div className="min-h-screen flex flex-col p-6 bg-white">
      <OnboardingProgress step={1} />

      <h1 className="text-2xl font-bold mb-2 text-gray-900">Dietary Preferences</h1>
      <p className="text-gray-600 mb-6">Select any dietary styles that apply to you.</p>

      <div className="flex flex-wrap gap-2 mb-8">
        {options.map((preference) => (
          <SelectionButton
            key={preference}
            label={preference}
            isSelected={dietaryPreferences.includes(preference)}
            onClick={() => togglePreference(preference)}
          />
        ))}
      </div>

      <div className="mb-8">
        <label className="block mb-2 text-gray-700">Other</label>
        <input
          type="text"
          value={otherDietaryPreference}
          onChange={(e) => setOtherDietaryPreference(e.target.value)}
          className="w-full p-3 border border-gray-300 rounded-lg"
          placeholder="Enter other dietary preference"
        />
      </div>

      <div className="mt-auto flex justify-between">
        <Link
          to="/"
          className="py-2 px-4 border border-gray-300 rounded-lg text-gray-700"
        >
          Back
        </Link>
        <div className="flex gap-2">
          <Link
            to="/onboarding/food-allergy"
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

export default DietaryPreferences;
