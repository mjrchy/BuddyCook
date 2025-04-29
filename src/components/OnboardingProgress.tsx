
import { cn } from "@/lib/utils";

interface OnboardingProgressProps {
  step: number;
  totalSteps?: number;
}

const OnboardingProgress = ({ step, totalSteps = 5 }: OnboardingProgressProps) => {
  return (
    <div className="flex justify-center gap-2 my-6">
      {Array.from({ length: totalSteps }).map((_, index) => (
        <div
          key={index}
          className={cn(
            "h-1 rounded-full",
            index + 1 === step ? "bg-indigo-600 w-8" : "bg-gray-300 w-6",
          )}
        />
      ))}
    </div>
  );
};

export default OnboardingProgress;
