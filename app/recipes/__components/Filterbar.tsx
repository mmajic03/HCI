"use client";
import React, { useState, useEffect } from "react";

type FilterBarProps = {
  onFilterChange: (filters: {
    mealType: string;
    minCalories: number | null;
    selectedIngredient: string;
    ingredientsSearch: string;
  }) => void;
};

const allIngredients = [
  "egg",
  "sugar",
  "salt",
  "butter",
  "milk",
  "cheese",
  "flour",
  "olive oil",
  "cinnamon",
  "vanilla extract",
  "tomato",
  "onion",
  "garlic"
];

const mealTypeOptions = [
  "Breakfast",
  "Lunch",
  "Dinner",
  "Snack",
  "Dessert",
  "Brunch"
];

const FilterBar = ({ onFilterChange }: FilterBarProps) => {
  const [mealType, setMealType] = useState("default");
  const [minCalories, setMinCalories] = useState("default");
  const [selectedIngredient, setSelectedIngredient] = useState("default");
  const [ingredientsSearch, setIngredientsSearch] = useState("");

  useEffect(() => {
    onFilterChange({
      mealType: mealType === "default" ? "" : mealType,
      minCalories: minCalories === "default" ? null : Number(minCalories),
      selectedIngredient: selectedIngredient === "default" ? "" : selectedIngredient,
      ingredientsSearch,
    });
  }, [mealType, minCalories, selectedIngredient, ingredientsSearch, onFilterChange]);

  return (
    <div className="bg-[#E4E0D3] p-4 rounded-lg w-full mb-6">
      <div className="flex flex-wrap lg:flex-nowrap items-start lg:items-center gap-4">
        <select
          className="p-2 bg-[#E5E1CE] rounded border border-[#4e664be8] text-[#253d24e8] text-sm flex-grow lg:flex-grow-0"
          value={mealType}
          onChange={(e) => setMealType(e.target.value)}
        >
          <option value="default" disabled>Meal Type</option>
          {mealTypeOptions.map((type) => (
            <option key={type} value={type}>{type}</option>
          ))}
        </select>
        <select
          className="p-2 bg-[#E5E1CE] rounded border border-[#4e664be8] text-[#253d24e8] text-sm flex-grow lg:flex-grow-0"
          value={minCalories}
          onChange={(e) => setMinCalories(e.target.value)}
        >
          <option value="default" disabled>Calories</option>
          <option value="400">400+</option>
          <option value="300">300+</option>
          <option value="200">200+</option>
          <option value="100">100+</option>
        </select>
        <select
          className="p-2 bg-[#E5E1CE] rounded border border-[#4e664be8] text-[#253d24e8] text-sm flex-grow lg:flex-grow-0"
          value={selectedIngredient}
          onChange={(e) => setSelectedIngredient(e.target.value)}
        >
          <option value="default" disabled>Ingredient</option>
          {allIngredients.map((ingredient) => (
            <option key={ingredient} value={ingredient}>
              {ingredient}
            </option>
          ))}
        </select>
        <input
          type="text"
          placeholder="Search ingredients..."
          value={ingredientsSearch}
          onChange={(e) => setIngredientsSearch(e.target.value)}
          className="p-3 bg-[#E5E1CE] rounded border border-[#4e664be8] text-[#253d24e8] text-sm w-60 ml-auto"
        />
      </div>
    </div>
  );
};

export default FilterBar;
