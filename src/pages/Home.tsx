
import { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { Search, Filter } from "lucide-react";
import { useUser } from "@/contexts/UserContext";
import { recipes } from "@/data/recipes";
import RecipeCard from "@/components/RecipeCard";
import BottomNavigation from "@/components/BottomNavigation";

const Home = () => {
  const { name, hasCompletedOnboarding, dietaryPreferences } = useUser();
  const navigate = useNavigate();
  const location = useLocation();
  const [searchQuery, setSearchQuery] = useState("");
  const [activeTab, setActiveTab] = useState<"home" | "search">(
    location.search.includes("tab=search") ? "search" : "home"
  );

  useEffect(() => {
    if (!hasCompletedOnboarding) {
      navigate("/");
    }
  }, [hasCompletedOnboarding, navigate]);

  useEffect(() => {
    if (location.search.includes("tab=search")) {
      setActiveTab("search");
    } else {
      setActiveTab("home");
    }
  }, [location]);

  const categories = ["Breakfast", "Lunch", "Dinner", "Bakery"];

  const filteredRecipes = searchQuery
    ? recipes.filter(recipe =>
      recipe.title.toLowerCase().includes(searchQuery.toLowerCase())
    )
    : recipes;

  const recommendedRecipes = recipes
    .filter(recipe => {
      if (dietaryPreferences.length === 0) return true;
      return dietaryPreferences.some(pref =>
        recipe.dietaryTags.includes(pref)
      );
    })
    .slice(0, 6);

  const renderHomeContent = () => (
    <>
      <div className="mb-6">
        <h2 className="text-lg font-semibold mb-3">Categories</h2>
        <div className="grid grid-cols-4 gap-3">
          {/* {categories.map((category) => (
            <div key={category} style={{
              backgroundImage: `url(/images/${category}`
            }} className="aspect-square flex items-center justify-center bg-gray-100 rounded-lg relative bg-cover bg-center" >
              <span className="text-sm font-medium absolute">{category}</span>
            </div>
          ))} */}
          {categories.map((category) => (
            <div
              key={category}
              className="aspect-square flex items-center justify-center bg-gray-200 rounded-lg relative overflow-hidden hover:shadow-lg transition-shadow duration-300 cursor-pointer"
            >
              {/* Using images from the public/images directory */}
              <div
                className="absolute inset-0 bg-cover bg-center opacity-70"
                style={{ backgroundImage: `url(/images/${category.toLowerCase()}.jpg)` }}
              />
              <span className="text-sm font-medium absolute">{category}</span>
            </div>
          ))}
        </div>
      </div>
      < div className="mb-6" >
        <div className="flex justify-between items-center mb-3">
          <h2 className="text-lg font-semibold">Recommendations for you</h2>
          <button className="text-sm text-indigo-600">See all</button>
        </div>
        <div className="grid grid-cols-2 gap-4">
          {recommendedRecipes.slice(0, 2).map((recipe) => (
            <RecipeCard key={recipe.id} recipe={recipe} />
          ))}
        </div>
      </div >

      <div className="mb-20">
        <div className="flex justify-between items-center mb-3">
          <h2 className="text-lg font-semibold">Bookmarks</h2>
          <button className="text-sm text-indigo-600" onClick={() => navigate('/bookmark')}>
            See all
          </button>
        </div>
        <div className="grid grid-cols-2 gap-4">
          {recipes.slice(0, 2).map((recipe) => (
            <RecipeCard key={recipe.id} recipe={recipe} />
          ))}
        </div>
      </div>
    </>
  );

  const renderSearchContent = () => (
    <div className="mb-20">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-lg font-semibold">Search Results</h2>
        <button className="flex items-center gap-1 text-sm text-gray-600">
          <Filter size={16} />
          <span>Filter</span>
        </button>
      </div>
      {filteredRecipes.length > 0 ? (
        <div className="grid grid-cols-2 gap-4">
          {filteredRecipes.map((recipe) => (
            <RecipeCard key={recipe.id} recipe={recipe} />
          ))}
        </div>
      ) : (
        <div className="text-center py-10">
          <p className="text-gray-500">No recipes found</p>
        </div>
      )}
    </div>
  );

  return (
    <div className="min-h-screen bg-white pb-16">
      <div className="p-6">
        <div className="flex justify-between items-center mb-6">
          <div>
            <h1 className="text-lg font-medium text-gray-900">Hello, {name}</h1>
            <p className="text-gray-600">What would you like to cook today?</p>
          </div>
          <img src='/images/aom.png' className="w-10 h-10 bg-gray-200 rounded-full"></img>
        </div>

        <div className="relative mb-6">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
          <input
            type="text"
            className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg"
            placeholder="Search any recipes"
            value={searchQuery}
            onChange={(e) => {
              setSearchQuery(e.target.value);
              if (e.target.value && activeTab !== "search") {
                navigate("/home?tab=search");
              }
            }}
          />
        </div>

        {activeTab === "home" ? renderHomeContent() : renderSearchContent()}
      </div>
      <BottomNavigation />
    </div>
  );
};

export default Home;
