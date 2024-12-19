import { Navigation } from "@/app/components/navigation";
import { BASE_API_URL } from "../page";
import { BlogRecipePost } from "../page";

type BlogPageProps = {
  params: {
    id: string;
  };
};

async function getBlogPost(id: string): Promise<BlogRecipePost> {
  const response = await fetch(`${BASE_API_URL}/recipes/${id}`);
  const data = response.json();
  return data;
}

export default async function BlogPage({ params }: BlogPageProps) {
  const blogPost = await getBlogPost(params.id);
  console.log(blogPost);
  return (
    <>    
      <div>
        <div>
          <img
            src={blogPost.image}
            alt={blogPost.name}
          />
          <h1>
            {blogPost.name}
          </h1>
          <p>
            {blogPost.ingredients.join(", ")}
          </p>
          <h2>Instructions</h2>
          <ol>
            {blogPost.instructions.map((instruction, index) => (
              <li key={index}>{instruction}</li>
            ))}
          </ol>
        </div>
      </div>
    </>
  );
}
