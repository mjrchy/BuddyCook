
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { User, ChevronRight } from "lucide-react";
import { useUser } from "@/contexts/UserContext";
import BottomNavigation from "@/components/BottomNavigation";

const Profile = () => {
  const { 
    name, 
    hasCompletedOnboarding 
  } = useUser();
  const navigate = useNavigate();

  useEffect(() => {
    if (!hasCompletedOnboarding) {
      navigate("/");
    }
  }, [hasCompletedOnboarding, navigate]);

  const profileSections = [
    { id: "edit", label: "Edit profile", link: "/profile/edit" },
    { id: "allergies", label: "Allergy Management", link: "/profile/allergies" },
    { id: "dietary", label: "Dietary Preference", link: "/onboarding/dietary-preferences" },
    { id: "experience", label: "Cooking Experience", link: "/onboarding/cooking-experience" },
    { id: "goal", label: "Goal Setting", link: "/onboarding/goal-setting" }
  ];

  return (
    <div className="min-h-screen bg-white pb-16">
      <div className="p-6">
        <h1 className="text-2xl font-bold mb-6">My Profile</h1>

        <div className="flex flex-col items-center justify-center mb-8">
          <div className="w-24 h-24 bg-gray-200 rounded-full flex items-center justify-center mb-3">
            <User size={40} className="text-gray-400" />
          </div>
          <h2 className="text-xl font-medium">{name}</h2>
        </div>

        <div className="rounded-lg border border-gray-200 overflow-hidden mb-20">
          {profileSections.map((section, index) => (
            <button 
              key={section.id}
              onClick={() => navigate(section.link)}
              className="flex items-center justify-between w-full p-4 text-left border-b border-gray-200 last:border-b-0"
            >
              <span className="font-medium">{section.label}</span>
              <ChevronRight size={20} className="text-gray-400" />
            </button>
          ))}
        </div>
      </div>
      <BottomNavigation />
    </div>
  );
};

export default Profile;
