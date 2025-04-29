
import { useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { ArrowLeft, Bookmark, Clock } from "lucide-react";
import { useUser } from "@/contexts/UserContext";
import { recipes } from "@/data/recipes";
import BottomNavigation from "@/components/BottomNavigation";

const Recipe = () => {
  const { id } = useParams<{ id: string }>();
  const { hasCompletedOnboarding, bookmarkedRecipes, toggleBookmark } = useUser();
  const navigate = useNavigate();

  const recipe = recipes.find(r => r.id === id);

  useEffect(() => {
    if (!hasCompletedOnboarding) {
      navigate("/");
      return;
    }
    
    if (!recipe) {
      navigate("/home");
    }
  }, [hasCompletedOnboarding, navigate, recipe]);

  if (!recipe) {
    return <div>Recipe not found</div>;
  }

  const isBookmarked = bookmarkedRecipes.includes(recipe.id);

  return (
    <div className="min-h-screen bg-white pb-16">
      <div className="h-64 relative">
        <img 
          src={recipe.image} 
          alt={recipe.title} 
          className="w-full h-full object-cover"
        />
        <div className="absolute top-0 left-0 w-full p-4 flex justify-between">
          <button 
            onClick={() => navigate(-1)}
            className="w-10 h-10 bg-white/70 rounded-full flex items-center justify-center"
          >
            <ArrowLeft size={20} />
          </button>
          <button 
            onClick={() => toggleBookmark(recipe.id)}
            className="w-10 h-10 bg-white/70 rounded-full flex items-center justify-center"
          >
            <Bookmark 
              size={20} 
              fill={isBookmarked ? "currentColor" : "none"}
              className={isBookmarked ? "text-indigo-600" : "text-gray-700"}
            />
          </button>
        </div>

        <div className="absolute bottom-0 left-0 w-full p-4">
          <div className="bg-white/90 p-4 rounded-lg shadow-sm">
            <h1 className="text-2xl font-bold">{recipe.title}</h1>
            <div className="flex items-center gap-4 mt-2">
              <div className="flex items-center gap-1 text-gray-600">
                <Clock size={16} />
                <span>{recipe.time} min</span>
              </div>
              <span className="px-2 py-1 bg-gray-100 text-gray-700 rounded-full text-xs">
                {recipe.difficulty}
              </span>
              <span className="px-2 py-1 bg-gray-100 text-gray-700 rounded-full text-xs">
                {recipe.calories} cal
              </span>
            </div>
          </div>
        </div>
      </div>

      <div className="p-6">
        <div className="mb-8">
          <h2 className="text-xl font-semibold mb-4">Nutritional Information</h2>
          <div className="p-4 bg-gray-50 rounded-lg">
            <p className="text-gray-600">Calories: {recipe.calories} kcal</p>
          </div>
        </div>

        <div className="mb-8">
          <h2 className="text-xl font-semibold mb-4">Ingredients</h2>
          <ul className="space-y-4">
            {recipe.ingredients.map((ingredient, index) => (
              <li key={index} className="flex items-center justify-between p-3 border-b border-gray-200">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 bg-gray-200 rounded-md flex items-center justify-center">
                    {index + 1}
                  </div>
                  <span>{ingredient.name}</span>
                </div>
                <span className="text-gray-600">{ingredient.quantity}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="mb-16">
          <h2 className="text-xl font-semibold mb-4">Instructions</h2>
          <ol className="space-y-6">
            {recipe.instructions.map((instruction, index) => (
              <li key={index} className="flex">
                <div className="mr-4">
                  <div className="flex items-center justify-center w-8 h-8 bg-indigo-100 rounded-full text-indigo-600 font-medium">
                    {index + 1}
                  </div>
                </div>
                <div>
                  <p className="text-gray-700">{instruction}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>

        <button className="w-full bg-indigo-600 text-white py-3 rounded-lg mb-4 flex items-center justify-center gap-2">
          Watch Video
        </button>
      </div>
      <BottomNavigation />
    </div>
  );
};

export default Recipe;
