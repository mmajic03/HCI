"use client";

import { useEffect, useState } from "react";
import { RecipePost } from "../types";
import Link from "next/link";
import Image from "next/image";
import Loading from "../loading";

export default function PopularRecipes() {
  const [posts, setPosts] = useState<RecipePost[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchRecipes() {
      try {
        const response = await fetch(`${process.env.NEXT_PUBLIC_BASE_API_URL}/recipes`, {
          cache: "no-store",
        });
        const data = await response.json();
        setPosts(data.recipes);
      } catch (error) {
        console.error("Error fetching popular recipes:", error);
      } finally {
        setLoading(false);
      }
    }
    fetchRecipes();
  }, []);

  if (loading) {
    return <Loading />;
  }

  const popularSorted = posts
    .filter(post => post.rating !== undefined)
    .sort((a, b) => (b.rating ?? 0) - (a.rating ?? 0))
    .slice(0, 6);

  return (
    <div
      className="w-full flex flex-col sm:flex-row sm:flex-nowrap justify-around gap-4 sm:gap-2 overflow-x-auto"
    >
      {popularSorted.map((post) => (
        <div
          key={post.id}
          className="flex-shrink-0 w-full sm:w-[260px] rounded-lg overflow-hidden shadow-md bg-white flex flex-col relative"
        >
          <Image
            src={post.image}
            alt={post.name}
            width={500}
            height={300}
            className="w-full h-44 object-cover rounded-lg"
            style={{ filter: "blur(1px)" }}
          />
          <Link
            href={`/home/${post.id}`}
            className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-[#70966D] text-white py-4 px-3 rounded hover:bg-[#496047] transition font-semibold"
          >
            Read more
          </Link>
        </div>
      ))}
    </div>
  );
}
