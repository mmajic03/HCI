"use client";

import { Dispatch, SetStateAction, useState } from "react";

export interface FilterProps {
  mealTypeOptions: string[];
  prepTimeOptions: string[];
  cuisineOptions: string[];
  difficultyOptions: string[];

  mealTypes: string[];
  setMealTypes: Dispatch<SetStateAction<string[]>>;
  prepTimes: string[];
  setPrepTimes: Dispatch<SetStateAction<string[]>>;
  cuisines: string[];
  setCuisines: Dispatch<SetStateAction<string[]>>;
  difficulties: string[];
  setDifficulties: Dispatch<SetStateAction<string[]>>;


  toggleItem: (arr: string[], item: string) => string[];
}

export default function Filter({
  mealTypeOptions,
  prepTimeOptions,
  cuisineOptions,
  difficultyOptions,
  mealTypes,
  setMealTypes,
  prepTimes,
  setPrepTimes,
  cuisines,
  setCuisines,
  difficulties,
  setDifficulties,
  toggleItem,
}: FilterProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleToggle = (
    current: string[],
    item: string,
    setter: Dispatch<SetStateAction<string[]>>
  ) => setter(toggleItem(current, item));

  const renderCheckboxList = (
    options: string[],
    selected: string[],
    setter: Dispatch<SetStateAction<string[]>>,
    format?: (value: string) => string
  ) => (
    <ul className="font-kalam mb-6 text-[#2c3b2ae8]">
      {options.map((opt) => (
        <li key={opt} className="my-1">
          <label className="inline-flex items-center cursor-pointer">
            <input
              type="checkbox"
              className="mr-2 accent-[#70966D]"
              checked={selected.includes(opt)}
              onChange={() => handleToggle(selected, opt, setter)}
            />
            {format ? format(opt) : opt}
          </label>
        </li>
      ))}
    </ul>
  );

  const filterContent = (
    <>
      <h3 className="font-kalam text-xl mb-2 border-b border-black text-[#2c3b2ae8]">Meals</h3>
      {renderCheckboxList(mealTypeOptions, mealTypes, setMealTypes)}

      <h3 className="font-kalam text-xl mb-2 border-b border-black text-[#2c3b2ae8]">
        Preparation time
      </h3>
      {renderCheckboxList(
        prepTimeOptions,
        prepTimes,
        setPrepTimes,
        (t) =>
          t === "≤15"
            ? "<= 15 min"
            : t === "≤30"
            ? "<= 30 min"
            : "> 30 min"
      )}

      <h3 className="font-kalam text-xl mb-2 border-b border-black text-[#2c3b2ae8]">Cuisine</h3>
      {renderCheckboxList(cuisineOptions, cuisines, setCuisines)}

      <h3 className="font-kalam text-xl mb-2 border-b border-black text-[#2c3b2ae8]">Difficulty</h3>
      {renderCheckboxList(difficultyOptions, difficulties, setDifficulties)}
    </>
  );

  return (
    <div className="flex flex-col mt-10">
      <div className="mb-4 flex justify-center lg:hidden">
        <button
          onClick={() => setIsMenuOpen(true)}
          className="flex items-center px-8 py-5 text-white text-lg bg-[#70966D] border border-[#4e6d4c] rounded-lg hover:shadow-md transition-all"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            className="w-9 h-7 mr-2"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M3 4h18M8 9h8m-6 5h4"
            />
          </svg>
          Filter
        </button>
      </div>

      {isMenuOpen && (
        <div className="fixed inset-0 z-50 flex">
          <div
            className="flex-1 bg-black/40"
            onClick={() => setIsMenuOpen(false)}
          ></div>

          <aside className="w-[300px] bg-[#E4E0D3] p-6">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-xl font-bold font-kalam">Filters</h2>
              <button
                onClick={() => setIsMenuOpen(false)}
                className="text-xl font-bold"
              >
                ✕
              </button>
            </div>
            {filterContent}
          </aside>
        </div>
      )}
      <aside className="hidden lg:block lg:w-[300px] bg-[#E4E0D3] p-6 rounded-lg mt-[76px]">
        {filterContent}
      </aside>
    </div>
  );
}
