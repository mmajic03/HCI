export type RecipePost = {
id: number;
name: string;
image: string;
ingredients: string[];
instructions: string[];
prepTimeMinutes: number;
cookTimeMinutes: number;
servings: number;
mealType: string[];
cuisine: string;
difficulty: string;
rating: number;
caloriesPerServing: number;
};

export type FilterProps = {
mealTypeOptions: string[];
prepTimeOptions: string[];
cuisineOptions: string[];
difficultyOptions: string[];
mealTypes: string[];
setMealTypes: (value: string[]) => void;
prepTimes: string[];
setPrepTimes: (value: string[]) => void;
cuisines: string[];
setCuisines: (value: string[]) => void;
difficulties: string[];
setDifficulties: (value: string[]) => void;
toggleItem: (arr: string[], item: string) => string[];
};