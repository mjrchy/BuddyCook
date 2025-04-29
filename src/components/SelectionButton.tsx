
import { cn } from "@/lib/utils";
import { Check } from "lucide-react";

interface SelectionButtonProps {
  label: string;
  isSelected: boolean;
  onClick: () => void;
  className?: string;
}

const SelectionButton = ({
  label,
  isSelected,
  onClick,
  className,
}: SelectionButtonProps) => {
  return (
    <button
      type="button"
      onClick={onClick}
      className={cn(
        "px-4 py-2 rounded-full border text-sm font-medium transition-colors",
        isSelected
          ? "border-indigo-600 bg-indigo-50 text-indigo-600"
          : "border-gray-300 text-gray-700 hover:border-gray-400",
        className
      )}
    >
      {label}
      {isSelected && (
        <Check className="inline-block ml-1" size={16} />
      )}
    </button>
  );
};

export default SelectionButton;
