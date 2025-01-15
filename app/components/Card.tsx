import Link from "next/link";
import { RecipePost } from "./recipeCard"; 
import Image from "next/image";

type RecipeCardProps = {
  post: RecipePost;
};

export default function RecipeCard({ post }: RecipeCardProps) {
  return (
    <div
      key={post.id}
      className="bg-white shadow-md rounded-lg overflow-hidden flex flex-col border border-black-200"
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
          href={`/home/${post.id}`}
          className="mt-auto inline-block text-center bg-[#70966D] text-white py-2 px-4 rounded hover:bg-[#496047]"
        >
          Read More
        </Link>
      </div>
    </div>
  );
}
