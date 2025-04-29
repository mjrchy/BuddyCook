
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Search } from "lucide-react";
import { useUser } from "@/contexts/UserContext";
import { recipes } from "@/data/recipes";
import RecipeCard from "@/components/RecipeCard";
import BottomNavigation from "@/components/BottomNavigation";

const Bookmark = () => {
  const { hasCompletedOnboarding, bookmarkedRecipes } = useUser();
  const navigate = useNavigate();

  useEffect(() => {
    if (!hasCompletedOnboarding) {
      navigate("/");
    }
  }, [hasCompletedOnboarding, navigate]);

  const bookmarkedItems = recipes.filter(recipe => 
    bookmarkedRecipes.includes(recipe.id)
  );

  return (
    <div className="min-h-screen bg-white pb-16">
      <div className="p-6">
        <h1 className="text-2xl font-bold mb-4">Bookmark</h1>

        <div className="relative mb-6">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
          <input
            type="text"
            className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg"
            placeholder="Search any recipes"
          />
        </div>

        <div className="mb-20">
          {bookmarkedItems.length > 0 ? (
            <div className="grid grid-cols-2 gap-4">
              {bookmarkedItems.map((recipe) => (
                <RecipeCard key={recipe.id} recipe={recipe} />
              ))}
            </div>
          ) : (
            <div className="text-center py-10">
              <p className="text-gray-500">No bookmarked recipes yet</p>
              <button 
                className="mt-4 text-indigo-600 font-medium"
                onClick={() => navigate('/home')}
              >
                Explore recipes
              </button>
            </div>
          )}
        </div>
      </div>
      <BottomNavigation />
    </div>
  );
};

export default Bookmark;
