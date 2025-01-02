
import { RecipePost } from "../../components/recipeCard";

type PageProps = {
  params: {
    id: string;
  };
};

async function getRecipePost(id: string): Promise<RecipePost> {
  const response = await fetch(`${process.env.NEXT_PUBLIC_BASE_API_URL}/recipes/${id}`);
  const data = response.json();
  return data;
}

export default async function HomePage({ params }: PageProps) {
  const recipePost = await getRecipePost(params.id);
  
  return (
    <>    
      <div className="bg-[#A3967C] min-h-screen flex items-center justify-center">
        <div className="w-11/12 max-w-4xl mx-auto mt-10 p-6 bg-white shadow-md rounded-lg">
        <h1 className="text-4xl font-bold text-gray-800 mb-6 text-center">{recipePost.name}</h1>
          <img
            src={recipePost.image}
            alt={recipePost.name}
            className="w-full h-67 object-contain rounded-t-lg"
          />
          <div className="p-6">
            <p className="mt-4 text-grey-800">
              <span className="font-semibold text-black">Ingredients:</span>
              <ul className="mt-4 list-disc list-inside text-gray-700 space-y-2">
                {recipePost.ingredients.map((ingredient, index) => (
                  <li key={index} className="list-none">{ingredient}</li>
                ))}
              </ul>
            </p>
          <h2 className="mt-6 text-xl font-semibold text-black">Instructions</h2>
          <ol className="mt-4 list-decimal list-inside text-gray-700 space-y-2">
            {recipePost.instructions.map((instruction, index) => (
              <li key={index}>{instruction}</li>
            ))}
          </ol>
          </div>
        </div>
      </div>
    </>
  );
}