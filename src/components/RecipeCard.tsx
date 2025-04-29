
import { Link } from "react-router-dom";
import { Bookmark, Clock } from "lucide-react";
import { Recipe } from "@/data/recipes";
import { useUser } from "@/contexts/UserContext";
import { cn } from "@/lib/utils";

interface RecipeCardProps {
  recipe: Recipe;
  className?: string;
}

const RecipeCard = ({ recipe, className }: RecipeCardProps) => {
  const { bookmarkedRecipes, toggleBookmark } = useUser();

  return (
    <div className={cn("relative rounded-lg overflow-hidden shadow-md bg-white", className)}>
      <div className="aspect-square relative">
        <img
          src={`/images/${recipe.image}`}
          alt={recipe.title}
          className="w-full h-full object-cover"
        />
        <button
          onClick={(e) => {
            e.preventDefault();
            toggleBookmark(recipe.id);
          }}
          className="absolute top-2 right-2 p-1 rounded-full bg-white/70 hover:bg-white"
        >
          <Bookmark
            size={20}
            fill={bookmarkedRecipes.includes(recipe.id) ? "currentColor" : "none"}
            className={bookmarkedRecipes.includes(recipe.id) ? "text-indigo-600" : "text-gray-700"}
          />
        </button>
      </div>

      <div className="p-3">
        <Link to={`/recipe/${recipe.id}`} className="block">
          <h3 className="font-semibold text-gray-900">{recipe.title}</h3>
          <div className="flex items-center gap-2 mt-2 text-sm text-gray-600">
            <Clock size={16} />
            <span>{recipe.time} min</span>
            <span className="ml-auto bg-gray-100 px-2 py-1 rounded-full text-xs">
              {recipe.difficulty}
            </span>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default RecipeCard;
