import Card from "./Card"; 
import { RecipePost } from "../types";

type RecommendedRecipesProps = {
  filteredPosts: RecipePost[];
  visiblePosts: RecipePost[];
  visibleCount: number;
  setVisibleCount: React.Dispatch<React.SetStateAction<number>>;
};

export default function RecommendedRecipes({
  filteredPosts,
  visiblePosts,
  visibleCount,
  setVisibleCount,
}: RecommendedRecipesProps) {
  return (
    <section className="flex-1">
      <h2 className="text-3xl font-kalam text-[#2c3b2ae8] mb-2 mt-[30px] md:mt-[120px] w-full text-center lg:text-left">
        Recommended recipes
      </h2>
      <div className="border-b border-[#2c3b2ae8] w-full mb-5"></div>
      {filteredPosts.length === 0 ? (
        <div className="flex flex-col justify-end items-center h-[150px]"> 
            <p className="text-[#2c3b2ae8] text-2xl sm:text-3xl font-semibold text-center">
                No recipes match your filters.
            </p>
        </div>
      ) : (
        <>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {visiblePosts.map((post) => (
              <Card key={post.id} post={post} />
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
        </>
      )}
    </section>
  );
}
