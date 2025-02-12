"use client";
import { useState } from "react";

export default function Filters() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="flex flex-col max-h-[600px] mt-[76px]">
      <div className="mb-4 flex justify-center lg:hidden">
        <button
          onClick={() => setIsMenuOpen(true)}
          className="flex items-center px-7 py-3 text-black font-bold bg-[#70966D] border border-black rounded-lg hover:shadow-md transition-all"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            className="w-5 h-5 mr-2"
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
        <div className="fixed top-0 left-0 h-screen w-[300px] bg-[#E4E0D3] shadow-lg p-6 z-50 lg:hidden">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-xl font-bold">Filters</h2>
            <button
              onClick={() => setIsMenuOpen(false)}
              className="text-xl font-bold text-[#000000]"
            >
              X
            </button>
          </div>
          <div className="flex flex-col max-h-[600px] mt-[50px]">
            <div className="w-full bg-[#E4E0D3] p-6 rounded-lg flex flex-col">
              <h3 className="font-kadwa font-regular text-xl mb-4 border-b border-black">Meals</h3>
              <ul className="font-kadwa mb-6">
                <li><input type="checkbox" className="mr-2 accent-[#70966D]" />Breakfast</li>
                <li><input type="checkbox" className="mr-2 accent-[#70966D]" />Lunch</li>
                <li><input type="checkbox" className="mr-2 accent-[#70966D]" />Dinner</li>
                <li><input type="checkbox" className="mr-2 accent-[#70966D]" />Soup</li>
                <li><input type="checkbox" className="mr-2 accent-[#70966D]" />Desserts</li>
                <li><input type="checkbox" className="mr-2 accent-[#70966D]" />Snacks</li>
              </ul>

              <h3 className="font-kadwa font-regular text-xl mb-4 border-b border-black">Primary ingredient</h3>
              <ul className="font-kadwa mb-6">
                <li><input type="checkbox" className="mr-2 accent-[#70966D]" />Meat</li>
                <li><input type="checkbox" className="mr-2 accent-[#70966D]" />Fish</li>
                <li><input type="checkbox" className="mr-2 accent-[#70966D]" />Vegetables</li>
                <li><input type="checkbox" className="mr-2 accent-[#70966D]" />Fruits</li>
                <li><input type="checkbox" className="mr-2 accent-[#70966D]" />Pasta</li>
              </ul>

              <h3 className="font-kadwa font-regular text-xl mb-4 border-b border-black">Preparation time</h3>
              <ul className="font-kadwa mb-6">
                <li><input type="checkbox" className="mr-2 accent-[#70966D]" />&lt; 15 min</li>
                <li><input type="checkbox" className="mr-2 accent-[#70966D]" />15 - 45 min</li>
                <li><input type="checkbox" className="mr-2 accent-[#70966D]" />&gt; 45 min</li>
              </ul>
            </div>
          </div>
        </div>
      )}
      
      <div className="hidden lg:block w-full">
        <div className="flex flex-row max-h-[600px] mt-[76px]">
          <div className="lg:w-full md:w-1/2 sm:w-full bg-[#E4E0D3] p-6 rounded-lg flex flex-col">
            <h3 className="font-kadwa font-regular text-xl mb-4 border-b border-black">Meals</h3>
            <ul className="font-kadwa mb-6">
              <li><input type="checkbox" className="mr-2 accent-[#70966D]" />Breakfast</li>
              <li><input type="checkbox" className="mr-2 accent-[#70966D]" />Lunch</li>
              <li><input type="checkbox" className="mr-2 accent-[#70966D]" />Dinner</li>
              <li><input type="checkbox" className="mr-2 accent-[#70966D]" />Soup</li>
              <li><input type="checkbox" className="mr-2 accent-[#70966D]" />Desserts</li>
              <li><input type="checkbox" className="mr-2 accent-[#70966D]" />Snacks</li>
            </ul>

            <h3 className="font-kadwa font-regular text-xl mb-4 border-b border-black">Primary ingredient</h3>
            <ul className="font-kadwa mb-6">
              <li><input type="checkbox" className="mr-2 accent-[#70966D]" />Meat</li>
              <li><input type="checkbox" className="mr-2 accent-[#70966D]" />Fish</li>
              <li><input type="checkbox" className="mr-2 accent-[#70966D]" />Vegetables</li>
              <li><input type="checkbox" className="mr-2 accent-[#70966D]" />Fruits</li>
              <li><input type="checkbox" className="mr-2 accent-[#70966D]" />Pasta</li>
            </ul>

            <h3 className="font-kadwa font-regular text-xl mb-4 border-b border-black">Preparation time</h3>
            <ul className="font-kadwa mb-6">
              <li><input type="checkbox" className="mr-2 accent-[#70966D]" />&lt; 15 min</li>
              <li><input type="checkbox" className="mr-2 accent-[#70966D]" />15 - 45 min</li>
              <li><input type="checkbox" className="mr-2 accent-[#70966D]" />&gt; 45 min</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
