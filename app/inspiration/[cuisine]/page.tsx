import { Navigation } from "@/app/components/navigation";
import Footer from "@/app/components/footer";
import Card from "@/app/components/recipeCard";
import NotFoundPage from "@/app/components/NotFoundPage";


type PageProps = {
  params: {
    cuisine: string;
  };
};

export default function CuisinePage({ params }: PageProps) {
  const { cuisine } = params;

  const validCuisines = ["italian", "greek", "japanese", "indian", "mexican", "chinese"];

  if (!validCuisines.includes(cuisine)) {
    return <NotFoundPage />;
  }

  return (
    <main className="p-10">
      <h1 className="text-4xl font-bold">Recipes for {cuisine} Cuisine</h1>
      <p>Here are some delicious {cuisine} recipes.</p>
    </main>
  );
}