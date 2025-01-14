import RecipeCard from "./Card";

export type RecipePost = {
  id: number;
  name: string;
  ingredients: string[];
  instructions: string[];
  prepTimeMinutes: number;
  cookTimeMinutes: number;
  servings: number;
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

export default async function Card() {
  const recipePosts: RecipePost[] = await getRecipePosts();

  const limitedRecipePosts = recipePosts.slice(0, 9);

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {limitedRecipePosts.map((post) => (
        <RecipeCard key={post.id} post={post} />
      ))}
    </div>
  );
}
