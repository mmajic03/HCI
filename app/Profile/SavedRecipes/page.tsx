"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { FaHeart } from "react-icons/fa";
import { RecipePost } from "@/app/types";
import Loading from "@/app/loading";

const getSessionFavs = (): number[] =>
  JSON.parse(sessionStorage.getItem("favoriteIds") || "[]");

const storeSessionFavs = (ids: number[]) =>
  sessionStorage.setItem("favoriteIds", JSON.stringify(ids));

export default function SavedRecipes() {
  const [saved, setSaved] = useState<RecipePost[]>([]);
  const [favoriteIds, setFavoriteIds] = useState<number[]>(() =>
    typeof window === "undefined" ? [] : getSessionFavs()
  );
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

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
    async function fetchFavorites() {
      try {
        const { favorites } = await fetch("/api/favorites").then((r) => r.json());

        const favIds: number[] = favorites?.length ? favorites : getSessionFavs();

        if (!favIds.length) {
          setSaved([]);
          return setLoading(false);
        }

        const details: RecipePost[] = await Promise.all(
          favIds.map((id) =>
            fetch(`${process.env.NEXT_PUBLIC_BASE_API_URL}/recipes/${id}`).then(
              (r) => r.json()
            )
          )
        );

        setSaved(details);
        setFavoriteIds(favIds);
      } catch (e) {
        console.error(e);
        setError("Error loading favorites");
      } finally {
        setLoading(false);
      }
    }

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

    if (isFav) {
      setSaved((s) => s.filter((r) => r.id !== id));
    } else {
      try {
        const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_API_URL}/recipes/${id}`);
        const newRecipe = await res.json();
        setSaved((s) => [...s, newRecipe]);
      } catch {
        console.error("Failed to fetch new recipe");
      }
    }
  };

  if (loading) return <Loading />;
  if (error) return <p className="text-red-700">{error}</p>;
  if (!saved.length) return (
    <div className="flex flex-col items-center justify-center min-h-[50vh]">
      <p className="text-center text-3xl font-bold text-[#496047]">
        No saved recipes yet.
      </p>
    </div>
  );

  return (
    <div className="min-h-screen flex flex-col items-center py-10 px-5">
      <div className="w-full mb-6 text-left pl-2">
        <h1 className="text-3xl font-bold text-[#2a4428]">
          Saved Recipes{" "}
          <span className="text-[#555a55] text-lg">({saved.length})</span>
        </h1>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-12 w-full">
        {saved.map((recipe) => (
          <div
            key={recipe.id}
            className="bg-white shadow-md rounded-lg overflow-hidden flex flex-col border border-gray-300 relative"
          >
            <button
              onClick={() => toggleFavorite(recipe.id)}
              aria-label="Remove from favorites"
              className="absolute top-5 right-5 text-2xl bg-white border-2 border-black p-2 rounded-full transition hover:scale-110"
            >
              <FaHeart className="fill-red-500" />
            </button>

            <div className="h-40 w-full p-4">
              <Image
                src={recipe.image}
                alt={recipe.name}
                className="h-48 w-full object-cover rounded"
                width={500}
                height={200}
              />
            </div>
            <div className="p-10 flex flex-col flex-grow">
              <h2 className="text-xl font-bold mb-2 pt-5">{recipe.name}</h2>
              <p className="text-gray-600 text-sm mb-4">
                {recipe.ingredients.join(", ")}
              </p>
              <Link
                href={`/recipes/${recipe.id}`}
                className="mt-auto inline-block text-center bg-[#70966D] text-white py-2 px-4 rounded hover:bg-[#496047] transition"
              >
                Read More
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
