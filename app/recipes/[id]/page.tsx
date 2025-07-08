"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { useParams } from "next/navigation";
import { FaHeart, FaRegHeart } from "react-icons/fa";
import { RecipePost } from "@/app/types";
import Loading from "@/app/loading";

const getSessionFavs = (): number[] =>
  JSON.parse(sessionStorage.getItem("favoriteIds") || "[]");

const storeSessionFavs = (ids: number[]) =>
  sessionStorage.setItem("favoriteIds", JSON.stringify(ids));

export default function RecipePage() {
  const { id } = useParams() as { id: string };
  const recipeId = Number(id);

  const [recipe, setRecipe] = useState<RecipePost | null>(null);
  const [favoriteIds, setFavoriteIds] = useState<number[]>(() =>
    typeof window === "undefined" ? [] : getSessionFavs()
  );
  const [loading, setLoading] = useState(true);

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
    const fetchData = async () => {
      try {
        const [recipeRes, favRes] = await Promise.all([
          fetch(`${process.env.NEXT_PUBLIC_BASE_API_URL}/recipes/${id}`),
          fetch("/api/favorites"),
        ]);

        const recipeData: RecipePost = await recipeRes.json();
        const { favorites } = await favRes.json();

        if (favorites?.length) {
          storeSessionFavs(favorites);
          setFavoriteIds(favorites);
        }

        setRecipe(recipeData);
      } catch (err) {
        console.error("Error loading data:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [id]);

  const toggleFavorite = async () => {
    const isFav = favoriteIds.includes(recipeId);
    const method = isFav ? "DELETE" : "POST";

    await fetch("/api/favorites", {
      method,
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ id: recipeId }),
    });

    const updated = isFav
      ? favoriteIds.filter((x) => x !== recipeId)
      : [...favoriteIds, recipeId];

    setFavoriteIds(updated);
    storeSessionFavs(updated);
  };

  if (loading || !recipe) return <Loading />;

  const isFav = favoriteIds.includes(recipeId);

  return (
    <div className="bg-[#A3967C] min-h-screen flex items-center justify-center">
      <div className="max-w-5xl w-11/12 bg-white shadow-md rounded-lg p-6 relative my-8">
        <button
          onClick={toggleFavorite}
          className="absolute top-5 right-5 text-2xl bg-white border-2 border-black p-2 rounded-full cursor-pointer transition hover:scale-110"
          aria-label={isFav ? "Remove from favorites" : "Add to favorites"}
        >
          {isFav ? (
            <FaHeart className="fill-red-500" />
          ) : (
            <FaRegHeart className="fill-black hover:fill-red-500" />
          )}
        </button>

        <h1 className="text-4xl font-bold text-[#3b4e39e8] mb-6 text-center">
          {recipe.name}
        </h1>

        <div className="flex flex-col md:flex-row md:space-x-8">
          <div className="md:w-1/2 flex justify-center">
            <Image
              src={recipe.image}
              alt={recipe.name}
              width={350}
              height={350}
              className="object-contain rounded-lg max-h-[400px]"
            />
          </div>
          <div className="md:w-1/2 mt-6 md:mt-0">
            <span className="font-semibold text-[#3b4e39e8] text-lg">
              Ingredients:
            </span>
            <ul className="mt-4 list-disc list-inside text-gray-600 space-y-2">
              {recipe.ingredients.map((ing, i) => (
                <li key={i}>{ing}</li>
              ))}
            </ul>

            <h2 className="mt-6 text-xl font-semibold text-[#3b4e39e8]">
              Instructions
            </h2>
            <ol className="mt-4 list-decimal list-inside text-gray-600 space-y-2">
              {recipe.instructions.map((step, i) => (
                <li key={i}>{step}</li>
              ))}
            </ol>
          </div>
        </div>
      </div>
    </div>
  );
}
