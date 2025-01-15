//import { Navigation } from "../components/navigation";
import Link from "next/link";
import Image from "next/image";

export type BlogRecipePost = {
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


async function getBlogPosts(): Promise<BlogRecipePost[]> {
  const response = await fetch(`${process.env.NEXT_PUBLIC_BASE_API_URL}/recipes`);
  const data = await response.json();
  return data.recipes;
}

export default async function Blog() {
  const blogPosts: BlogRecipePost[] = await getBlogPosts();

  return (
    <main className="bg-[#A3967C] w-screen flex min-h-screen flex-col items-center p-20">
      <h1 className="text-6xl font-extrabold tracking-tight mb-10">Blog</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12 w-full m-20">
        {blogPosts.map((post) => (
          <div
            key={post.id}
            className="bg-white shadow-md rounded-lg overflow-hidden flex flex-col border border-balck-200"
          >
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
                href={`/blog/${post.id}`}
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
