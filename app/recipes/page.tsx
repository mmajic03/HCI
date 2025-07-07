"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import FilterBar from "./__components/Filterbar";
import { FaHeart, FaRegHeart } from "react-icons/fa";
import { RecipePost } from "../types";
import Footer from "../components/footer";

const getSessionFavs = (): number[] =>
  JSON.parse(sessionStorage.getItem("favoriteIds") || "[]");

const storeSessionFavs = (ids: number[]) =>
  sessionStorage.setItem("favoriteIds", JSON.stringify(ids));

export default function Recipes() {
  const [recipePosts, setRecipePosts] = useState<RecipePost[]>([]);
  const [visibleCount, setVisibleCount] = useState(8);
  const [favoriteIds, setFavoriteIds] = useState<number[]>(() =>
    typeof window === "undefined" ? [] : getSessionFavs()
  );
  const [filters, setFilters] = useState({
    mealType: "",
    minCalories: null as number | null,
    selectedIngredient: "",
    ingredientsSearch: "",
  });

  useEffect(() => {
    const onStorage = (e: StorageEvent) => {
      if (e.key === "favoriteIds") {
        setFavoriteIds(e.newValue ? JSON.parse(e.newValue) : []);
      }
    };
    window.addEventListener("storage", onStorage);
    return () => window.removeEventListener("storage", onStorage);
  }, []);

  useEffect(() => {
    const fetchRecipes = async () => {
      const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_API_URL}/recipes`);
      const data = await res.json();
      setRecipePosts(data.recipes);
    };

    const fetchFavorites = async () => {
      const res = await fetch("/api/favorites");
      const { favorites } = await res.json();
      if (favorites?.length) {
        setFavoriteIds(favorites);
        storeSessionFavs(favorites);
      }
    };

    fetchRecipes();
    fetchFavorites();
  }, []);

  const toggleFavorite = async (id: number) => {
    const isFav = favoriteIds.includes(id);
    const method = isFav ? "DELETE" : "POST";

    await fetch("/api/favorites", {
      method,
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ id }),
    });

    const updated = isFav
      ? favoriteIds.filter((x) => x !== id)
      : [...favoriteIds, id];

    setFavoriteIds(updated);
    storeSessionFavs(updated);
  };

  const filteredPosts = recipePosts.filter((post) => {
    if (
      filters.mealType &&
      !post.mealType.some(
        (mt) => mt.toLowerCase() === filters.mealType.toLowerCase()
      )
    )
      return false;
    if (
      filters.minCalories !== null &&
      post.caloriesPerServing < filters.minCalories
    )
      return false;
    if (filters.selectedIngredient) {
      const ok = post.ingredients.some((ing) =>
        ing.toLowerCase().includes(filters.selectedIngredient.toLowerCase())
      );
      if (!ok) return false;
    }
    if (filters.ingredientsSearch.trim()) {
      const ok = post.ingredients.some((ing) =>
        ing.toLowerCase().includes(filters.ingredientsSearch.toLowerCase())
      );
      if (!ok) return false;
    }
    return true;
  });

  const visiblePosts = filteredPosts.slice(0, visibleCount);

  return (
    <>
      <main className="bg-[#A3967C] w-screen flex min-h-screen flex-col items-center p-20">
        <div className="w-full mb-6 text-left pl-2">
          <h1 className="text-3xl font-bold text-[#2a4428]">
            Recipes{" "}
            <span className="text-[#555a55] text-lg">({filteredPosts.length})</span>
          </h1>
        </div>

        <FilterBar onFilterChange={setFilters} />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 w-full">
          {visiblePosts.map((post) => (
            <div
              key={post.id}
              className="bg-white shadow-md rounded-lg overflow-hidden flex flex-col border border-gray-300 relative"
            >
              <button
                onClick={() => toggleFavorite(post.id)}
                className="absolute top-5 right-5 text-2xl bg-white border-2 border-black p-2 rounded-full cursor-pointer transition hover:scale-110"
              >
                {favoriteIds.includes(post.id) ? (
                  <FaHeart className="fill-red-500" />
                ) : (
                  <FaRegHeart className="fill-black hover:fill-red-500" />
                )}
              </button>

              <div className="h-40 w-full p-4">
                <Image
                  src={post.image}
                  alt={post.name}
                  className="h-48 w-full object-cover rounded"
                  width={500}
                  height={200}
                />
              </div>
              <div className="p-10 flex flex-col flex-grow">
                <h2 className="text-xl font-bold mb-2 pt-5 text-[#3b4e39e8]">{post.name}</h2>
                <p className="text-gray-600 text-sm mb-4">
                  {post.ingredients.join(", ")}
                </p>
                <Link
                  href={`/recipes/${post.id}`}
                  className="mt-auto inline-block text-center bg-[#70966D] text-white py-2 px-4 rounded hover:bg-[#496047]"
                >
                  Read More
                </Link>
              </div>
            </div>
          ))}
        </div>

        {visibleCount < filteredPosts.length && (
          <div className="flex justify-center mt-10">
            <button
                onClick={() => setVisibleCount((prev) => prev + 3)}
                className="bg-[#70966D] text-white py-5 px-6 rounded hover:bg-[#496047] transition mt-10"
              >
                Load more...
              </button>
          </div>
        )}
      </main>
      <Footer />
    </>
  );
}
