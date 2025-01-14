import Card from "./components/recipeCard";
import Footer from "./components/footer";
import PopularRecipes from "./components/PopularRecipes";
import TopUsers from "./components/TopUsers";
import Filters from "./components/Filters";

export default function Home() {
  return (
    <main className="flex flex-col min-h-screen w-full items-center p-10 bg-[#9C8D71E8]">
      <div className="bg-[url('/header_image.jpg')] bg-cover bg-center h-[50vh] w-full mt-4">
        <div className="bg-[#E4E0D3] h-[70%] w-[90%] sm:w-[70%] md:w-[50%] lg:w-[30%] mt-12 ml-12 p-6 flex flex-col items-start justify-around">
          <h2 className="font-kalam text-black text-xl sm:text-2xl lg:text-3xl mb-4 break-words">
            Simple ingredients, endless possibilities...
          </h2>
          <p className="text-black text-sm sm:text-sm lg:text-base break-words overflow-hidden">
            Welcome to CoolCook, where simple ingredients turn into extraordinary meals. Unleash your creativity and make every dish unforgettable.
          </p>
        </div>
      </div>

      <div className="mt-10 flex flex-col lg:flex-row lg:gap-10 w-full">
        <Filters />
        <div className="flex-1">
          <h2 className="text-4xl font-kalam text-white font-bold text-center mb-8 mr-20">Recommended recipes</h2>
          <div>
            <Card></Card>
          </div>
        </div>
      </div>

      <h2 className="text-4xl font-kalam text-white font-bold text-center mt-[150px]">Popular recipes</h2>
      <div className="flex space-x-6 mt-5 w-screen bg-[#70966D] p-6 rounded-lg h-[250px] justify-center items-center gap-6">
        <PopularRecipes/>
      </div>
      
      <h2 className="text-4xl font-kalam text-white font-bold text-center mt-[60px] mb-5">Top users</h2>
      <TopUsers/>

      <Footer />
    </main>
  );
}
