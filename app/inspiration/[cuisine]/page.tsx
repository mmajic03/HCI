// app/inspiration/[cuisine]/page.tsx

import RecipeCard from '@/app/components/Card'; 
import { RecipePost } from '@/app/components/recipeCard';

export default async function CuisinePage({ params }: { params: { cuisine: string } }) {
  const cuisine = params.cuisine.toLowerCase();

  const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_API_URL}/recipes`);
  const data = await res.json();

  const filteredRecipes: RecipePost[] = data.recipes.filter(
    (recipe: RecipePost) => recipe.cuisine.toLowerCase() === cuisine
  );

  if (!filteredRecipes || filteredRecipes.length === 0) {
    return (
      <div className="text-center py-20 text-white bg-[#b39a74] min-h-screen">
        <h1 className="text-4xl font-bold mb-4 capitalize">{cuisine}</h1>
        <p className="text-lg">No recipes found for this cuisine.</p>
      </div>
    );
  }

  return (
    <div className="bg-[#b39a74] min-h-screen px-6 py-12">
      <h1 className="text-4xl font-bold text-center mb-10 capitalize">{cuisine} Recipes</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredRecipes.map((recipe: RecipePost) => (
          <RecipeCard key={recipe.id} post={recipe} />
        ))}
      </div>
    </div>
  );
}
