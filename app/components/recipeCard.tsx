import Image from "next/image";
import Link from "next/link";
import { FaHeart, FaRegHeart } from "react-icons/fa";
import { RecipePost } from "../types";

type RecipeCardProps = {
  post: RecipePost;
  isFavorite: boolean;
  onToggleFavorite: () => void;
};

export default function RecipeCard({ post, isFavorite, onToggleFavorite }: RecipeCardProps) {
  return (
    <div className="bg-white shadow-md rounded-lg overflow-hidden flex flex-col border border-black-200 max-w-md mx-auto relative">
      <button
        onClick={onToggleFavorite}
        aria-label={isFavorite ? "Remove from favorites" : "Add to favorites"}
        className="absolute top-4 right-4 z-10 bg-white border-2 border-black p-2 rounded-full text-2xl text-black hover:text-red-500 transition"
      >
        {isFavorite ? <FaHeart className="fill-red-500" /> : <FaRegHeart />}
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
        <h2 className="text-2xl font-bold mb-4 pt-5 font-kalam text-[#2c3b2ae8]">{post.name}</h2>
        <p className="text-gray-600 text-m mb-6 font-kalam text-[#2c3b2ae8]">
          {post.ingredients.join(", ")}
        </p>
        <Link
          href={`/home/${post.id}`}
          className="mt-auto inline-block text-center font-kalam bg-[#70966D] text-white py-2 px-4 rounded hover:bg-[#496047]"
        >
          Read More
        </Link>
      </div>
    </div>
  );
}
