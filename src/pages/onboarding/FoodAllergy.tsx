
import { Link, useNavigate } from "react-router-dom";
import { useUser, FoodAllergy as AllergyType } from "@/contexts/UserContext";
import SelectionButton from "@/components/SelectionButton";
import OnboardingProgress from "@/components/OnboardingProgress";

const FoodAllergy = () => {
  const { foodAllergies, setFoodAllergies, otherFoodAllergy, setOtherFoodAllergy } = useUser();
  const navigate = useNavigate();
  
  const options: AllergyType[] = [
    'Peanut', 'Tree Nuts', 'Milk', 'Eggs', 'Fish', 'Shellfish', 'Soy', 'Wheat'
  ];

  const toggleAllergy = (allergy: AllergyType) => {
    if (foodAllergies.includes(allergy)) {
      setFoodAllergies(foodAllergies.filter(a => a !== allergy));
    } else {
      setFoodAllergies([...foodAllergies, allergy]);
    }
  };

  const handleNext = () => {
    if (otherFoodAllergy && !foodAllergies.includes('Other')) {
      setFoodAllergies([...foodAllergies, 'Other']);
    }
    navigate('/onboarding/cooking-experience');
  };

  return (
    <div className="min-h-screen flex flex-col p-6 bg-white">
      <OnboardingProgress step={2} />

      <h1 className="text-2xl font-bold mb-2 text-gray-900">Food Allergies</h1>
      <p className="text-gray-600 mb-6">Tell us about any food allergies so we can suggest safe recipes</p>

      <div className="flex flex-wrap gap-2 mb-8">
        {options.map((allergy) => (
          <SelectionButton
            key={allergy}
            label={allergy}
            isSelected={foodAllergies.includes(allergy)}
            onClick={() => toggleAllergy(allergy)}
          />
        ))}
      </div>

      <div className="mb-8">
        <label className="block mb-2 text-gray-700">Other</label>
        <input
          type="text"
          value={otherFoodAllergy}
          onChange={(e) => setOtherFoodAllergy(e.target.value)}
          className="w-full p-3 border border-gray-300 rounded-lg"
          placeholder="Enter other food allergies"
        />
      </div>

      <div className="mt-auto flex justify-between">
        <Link
          to="/onboarding/dietary-preferences"
          className="py-2 px-4 border border-gray-300 rounded-lg text-gray-700"
        >
          Back
        </Link>
        <div className="flex gap-2">
          <Link
            to="/onboarding/cooking-experience"
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

export default FoodAllergy;
