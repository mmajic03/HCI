"use client";
import React, { useState } from "react";

const FilterBar = () => {
  const [selectedFilters, setSelectedFilters] = useState<string[]>([]);


  const updateFilters = (value: string) => {
    if (value !== "default" && !selectedFilters.includes(value)) {
      setSelectedFilters([...selectedFilters, value]);
    }
  };
  

  const removeFilter = (filter: string) => {
    setSelectedFilters(selectedFilters.filter(f => f !== filter));
  };


  return (
    <div className="bg-[#E4E0D3] p-4 rounded-lg w-full mb-6">
      <div className="flex flex-wrap lg:flex-nowrap items-start lg:items-center gap-4">
        <select
          className="p-2 bg-[#E5E1CE] rounded border border-black text-sm flex-grow lg:flex-grow-0"
          defaultValue="default"
          onChange={e => updateFilters(e.target.value)}
        >
          <option value="default" disabled>Categories</option>
          <option value="Quick meals">Quick meals</option>
          <option value="Healthy meals">Healthy meals</option>
          <option value="Budget recipes">Budget recipes</option>
          <option value="Seasonal recipes">Seasonal recipes</option>
        </select>


        <select
          className="p-2 bg-[#E5E1CE] rounded border border-black text-sm flex-grow lg:flex-grow-0"
          defaultValue="default"
          onChange={e => updateFilters(e.target.value)}
        >
          <option value="default" disabled>Filter by</option>
          <option value="Ingredients">Ingredients</option>
          <option value="Nutritional values">Nutritional values</option>
          <option value="Preparation method">Preparation method</option>
        </select>


        <select
          className="p-2 bg-[#E5E1CE] rounded border border-black text-sm flex-grow lg:flex-grow-0"
          defaultValue="default"
          onChange={e => updateFilters(e.target.value)}
        >
          <option value="default" disabled>Diet Type</option>
          <option value="Gluten-free">Gluten-free</option>
          <option value="Lactose-free">Lactose-free</option>
          <option value="Vegan">Vegan</option>
          <option value="Pescatarian">Pescatarian</option>
          <option value="High-protein">High-protein</option>
          <option value="Keto">Keto</option>
          <option value="Vegetarian">Vegetarian</option>
        </select>

        <input
          type="text"
          placeholder="Search..."
          className="p-3 bg-[#E5E1CE] rounded border border-black text-sm w-60 ml-auto"
        />
      </div>

      {selectedFilters.length > 0 && (
        <div className="mt-4 flex gap-2">
          {selectedFilters.map((filter, index) => (
            <div key={index} className="bg-[#70966D] text-white px-4 py-1 rounded-full flex items-center">
              <span>{filter}</span>
              <button
                onClick={() => removeFilter(filter)}
                className="ml-2 text-sm font-bold"
              >
                x
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default FilterBar;
