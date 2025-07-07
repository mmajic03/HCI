"use client";

import { useEffect, useState } from "react";
import Footer from "./components/footer";
import Filter from "./components/Filter";
import PopularRecipes from "./components/PopularRecipes";
import RecommendedRecipes from "./components/RecommendedRecipes";
import { RecipePost } from "./types";
import Loading from "./loading";
import MainSection from "./components/MainSection";
import TopUsers from "./components/TopUsers";

export default function Home() {
  const [posts, setPosts] = useState<RecipePost[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  const [mealTypes, setMealTypes] = useState<string[]>([]);
  const [prepTimes, setPrepTimes] = useState<string[]>([]);
  const [cuisines, setCuisines] = useState<string[]>([]);
  const [difficulties, setDifficulties] = useState<string[]>([]);
  const [visibleCount, setVisibleCount] = useState(9);

  const mealTypeOptions = ["Breakfast", "Lunch", "Dinner", "Dessert", "Snack"];
  const prepTimeOptions = ["≤15", "≤30", ">30"];
  const cuisineOptions = ["Italian", "Mexican", "Indian", "American", "Greek", "Japanese"];
  const difficultyOptions = ["Easy", "Medium", "Hard"];

  useEffect(() => {
    async function fetchRecipes() {
      try {
        const response = await fetch(`${process.env.NEXT_PUBLIC_BASE_API_URL}/recipes`, {
          cache: "no-store",
        });
        const data = await response.json();
        setPosts(data.recipes);
      } catch (error) {
        console.error("Error fetching recipes:", error);
      } finally {
        setIsLoading(false);
      }
    }

    fetchRecipes();
  }, []);

  if (isLoading) return <Loading />;

  const toggleItem = (arr: string[], item: string) =>
    arr.includes(item) ? arr.filter((x) => x !== item) : [...arr, item];

  const filteredPosts = posts.filter((post) => {
    const mealMatch = mealTypes.length === 0 || mealTypes.some((mt) => post.mealType.includes(mt));
    const prepMatch =
      prepTimes.length === 0 ||
      prepTimes.some((pt) =>
        pt === "≤15"
          ? post.prepTimeMinutes <= 15
          : pt === "≤30"
          ? post.prepTimeMinutes <= 30
          : pt === ">30"
          ? post.prepTimeMinutes > 30
          : false
      );
    const cuisineMatch = cuisines.length === 0 || cuisines.includes(post.cuisine);
    const difficultyMatch = difficulties.length === 0 || difficulties.includes(post.difficulty);
    return mealMatch && prepMatch && cuisineMatch && difficultyMatch;
  });

  const visiblePosts = filteredPosts.slice(0, visibleCount);

  return (
    <>
      <main className="flex flex-col min-h-screen w-full items-center p-10 pt-0 bg-[#9c8d71d7]">
        <MainSection />
        <div className="flex flex-col mt-[-30px] font-kalam lg:flex-row lg:gap-10 w-full mb-5">
          <Filter
            mealTypeOptions={mealTypeOptions}
            prepTimeOptions={prepTimeOptions}
            cuisineOptions={cuisineOptions}
            difficultyOptions={difficultyOptions}
            mealTypes={mealTypes}
            setMealTypes={setMealTypes}
            prepTimes={prepTimes}
            setPrepTimes={setPrepTimes}
            cuisines={cuisines}
            setCuisines={setCuisines}
            difficulties={difficulties}
            setDifficulties={setDifficulties}
            toggleItem={toggleItem}
          />

          <RecommendedRecipes
            filteredPosts={filteredPosts}
            visiblePosts={visiblePosts}
            visibleCount={visibleCount}
            setVisibleCount={setVisibleCount}
          />
        </div>
        <h2 className="text-3xl font-kalam text-[#2c3b2ae8] mb-2 mt-10 md:mt-[40px] w-full text-center lg:text-left">
          Popular recipes
        </h2>
        <div className="border-b border-[#2c3b2ae8] w-full"></div>
        <div className="flex flex-wrap sm:flex-nowrap space-x-0 sm:space-x-6 w-screen p-6 rounded-lg h-auto sm:h-[250px] justify-center items-center gap-6 overflow-x-auto mb-1 text-center lg:text-left">
          <PopularRecipes />
        </div>
        <h2 className="text-3xl font-kalam text-[#2c3b2ae8] mb-2 mt-3 md:mt-[30px] w-full text-center lg:text-left">Top users</h2>
        <div className="border-b border-[#2c3b2ae8] w-full"></div>
        <div className="flex flex-wrap sm:flex-nowrap space-x-0 sm:space-x-6 w-screen p-10 rounded-lg h-auto justify-center items-start gap-10 overflow-x-auto mb-8 text-center lg:text-left">
          <TopUsers />
        </div>
      </main>
      <Footer />
    </>
  );
}
