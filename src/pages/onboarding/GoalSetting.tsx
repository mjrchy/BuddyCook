
import { Link, useNavigate } from "react-router-dom";
import { useUser, HealthGoal } from "@/contexts/UserContext";
import OnboardingProgress from "@/components/OnboardingProgress";
import SelectionButton from "@/components/SelectionButton";

const GoalSetting = () => {
  const { healthGoal, setHealthGoal, otherHealthGoal, setOtherHealthGoal, setHasCompletedOnboarding } = useUser();
  const navigate = useNavigate();
  
  const options: HealthGoal[] = ['Weight loss', 'Muscle gain', 'Balanced diet'];

  const handleGoalSelect = (goal: HealthGoal) => {
    setHealthGoal(goal);
  };

  const handleFinish = () => {
    if (otherHealthGoal && healthGoal !== 'Other') {
      setHealthGoal('Other');
    }
    setHasCompletedOnboarding(true);
    navigate('/home');
  };

  return (
    <div className="min-h-screen flex flex-col p-6 bg-white">
      <OnboardingProgress step={4} />

      <h1 className="text-2xl font-bold mb-2 text-gray-900">Goal Setting</h1>
      <p className="text-gray-600 mb-6">What is your health goal?</p>

      <div className="flex flex-wrap gap-2 mb-8">
        {options.map((goal) => (
          <SelectionButton
            key={goal}
            label={goal}
            isSelected={healthGoal === goal}
            onClick={() => handleGoalSelect(goal)}
            className="text-base py-3"
          />
        ))}
      </div>

      <div className="mb-8">
        <label className="block mb-2 text-gray-700">Other</label>
        <input
          type="text"
          value={otherHealthGoal}
          onChange={(e) => {
            setOtherHealthGoal(e.target.value);
            if (e.target.value) {
              setHealthGoal('Other');
            }
          }}
          className="w-full p-3 border border-gray-300 rounded-lg"
          placeholder="Enter other health goal"
        />
      </div>

      <div className="mt-auto flex justify-between">
        <Link
          to="/onboarding/cooking-experience"
          className="py-2 px-4 border border-gray-300 rounded-lg text-gray-700"
        >
          Back
        </Link>
        <button 
          onClick={handleFinish}
          className="py-2 px-8 bg-indigo-600 text-white rounded-lg shadow hover:bg-indigo-700"
        >
          Finish
        </button>
      </div>
    </div>
  );
};

export default GoalSetting;
