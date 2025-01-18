import Link from "next/link";
import Image from "next/image";
import FilterBar from "./__components/Filterbar";
import { FaHeart } from "react-icons/fa";

export type RecipePost = {
  id: number;
  name: string;
  ingredients: string[];
  instructions: string[];
  prepTimeMinutes: number;
  cookTimeMinutes: number;
  servings: number;
  difficulty: "Easy" | "Medium" | "Hard";
  cuisine: string;
  caloriesPerServing: number;
  tags: string[];
  userId: number;
  image: string;
  rating: number;
  reviewCount: number;
  mealType: string[];
};

async function getRecipePosts(): Promise<RecipePost[]> {
  const response = await fetch(`${process.env.NEXT_PUBLIC_BASE_API_URL}/recipes`);
  const data = await response.json();
  return data.recipes;
}

export default async function Recipes() {
  const recipePosts: RecipePost[] = await getRecipePosts();

  return (
    <main className="bg-[#A3967C] w-screen flex min-h-screen flex-col items-center p-20">
      <div className="w-full mb-6 text-left pl-2">
        <h1 className="text-3xl font-bold text-black">
          Recipes <span className="text-gray-600 text-lg">({recipePosts.length})</span>
        </h1>
      </div>
      <FilterBar />

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 w-full">
        {recipePosts.map((post) => (
          <div
            key={post.id}
            className="bg-white shadow-md rounded-lg overflow-hidden flex flex-col border border-gray-300 relative"
          >
            <div className="absolute top-5 right-5 text-white text-2xl bg-white border-2 border-black p-2 rounded-full hover:text-white">
              <FaHeart className="fill-[#000000] hover:fill-red-500"/>
            </div>
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
              <h2 className="text-xl font-bold mb-2 pt-5">{post.name}</h2>
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
    </main>
  );
}
