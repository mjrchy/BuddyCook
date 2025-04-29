
import React, { createContext, useContext, useState, ReactNode } from 'react';

export type DietaryPreference = 'Vegetarian' | 'Vegan' | 'Pescatarian' | 'Keto' | 'Paleo' | 'Gluten-free' | 'Dairy-Free' | 'Low-carb' | 'Low-fat' | 'Other' | string;
export type FoodAllergy = 'Peanut' | 'Tree Nuts' | 'Milk' | 'Eggs' | 'Fish' | 'Shellfish' | 'Soy' | 'Wheat' | 'Other' | string;
export type CookingExperience = 'Beginner' | 'Intermediate' | 'Expert';
export type HealthGoal = 'Weight loss' | 'Muscle gain' | 'Balanced diet' | 'Other' | string;

interface UserContextType {
  name: string;
  setName: (name: string) => void;
  dietaryPreferences: DietaryPreference[];
  setDietaryPreferences: (preferences: DietaryPreference[]) => void;
  foodAllergies: FoodAllergy[];
  setFoodAllergies: (allergies: FoodAllergy[]) => void;
  cookingExperience: CookingExperience;
  setCookingExperience: (experience: CookingExperience) => void;
  healthGoal: HealthGoal;
  setHealthGoal: (goal: HealthGoal) => void;
  otherDietaryPreference: string;
  setOtherDietaryPreference: (preference: string) => void;
  otherFoodAllergy: string;
  setOtherFoodAllergy: (allergy: string) => void;
  otherHealthGoal: string;
  setOtherHealthGoal: (goal: string) => void;
  bookmarkedRecipes: string[];
  toggleBookmark: (recipeId: string) => void;
  hasCompletedOnboarding: boolean;
  setHasCompletedOnboarding: (completed: boolean) => void;
}

const UserContext = createContext<UserContextType | undefined>(undefined);

export const UserProvider = ({ children }: { children: ReactNode }) => {
  const [name, setName] = useState('Armi');
  const [dietaryPreferences, setDietaryPreferences] = useState<DietaryPreference[]>([]);
  const [foodAllergies, setFoodAllergies] = useState<FoodAllergy[]>([]);
  const [cookingExperience, setCookingExperience] = useState<CookingExperience>('Beginner');
  const [healthGoal, setHealthGoal] = useState<HealthGoal>('Balanced diet');
  const [otherDietaryPreference, setOtherDietaryPreference] = useState('');
  const [otherFoodAllergy, setOtherFoodAllergy] = useState('');
  const [otherHealthGoal, setOtherHealthGoal] = useState('');
  const [bookmarkedRecipes, setBookmarkedRecipes] = useState<string[]>([]);
  const [hasCompletedOnboarding, setHasCompletedOnboarding] = useState(false);

  const toggleBookmark = (recipeId: string) => {
    setBookmarkedRecipes(prev => 
      prev.includes(recipeId) 
        ? prev.filter(id => id !== recipeId)
        : [...prev, recipeId]
    );
  };

  return (
    <UserContext.Provider value={{
      name,
      setName,
      dietaryPreferences,
      setDietaryPreferences,
      foodAllergies,
      setFoodAllergies,
      cookingExperience,
      setCookingExperience,
      healthGoal,
      setHealthGoal,
      otherDietaryPreference,
      setOtherDietaryPreference,
      otherFoodAllergy,
      setOtherFoodAllergy,
      otherHealthGoal,
      setOtherHealthGoal,
      bookmarkedRecipes,
      toggleBookmark,
      hasCompletedOnboarding,
      setHasCompletedOnboarding
    }}>
      {children}
    </UserContext.Provider>
  );
};

export const useUser = () => {
  const context = useContext(UserContext);
  if (context === undefined) {
    throw new Error('useUser must be used within a UserProvider');
  }
  return context;
};
