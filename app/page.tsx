import Card from "./components/recipeCard";
import Footer from "./components/footer";
import PopularRecipes from "./components/PopularRecipes";
import TopUsers from "./components/TopUsers";
import Filters from "./components/Filters";

export default function Home() {
  return (
    <main className="flex flex-col min-h-screen w-full items-center p-10 bg-[#9C8D71E8]">
      <div className="bg-[url('/header_image.jpg')] bg-cover bg-center h-[70vh] w-screen mt-4">
        <div className="bg-[#E4E0D3] h-[50%] w-[90%] sm:w-[70%] md:w-[50%] lg:w-[30%] mt-[100px] ml-4 sm:ml-6 md:ml-12 p-4 sm:p-6  flex flex-col items-start justify-around">
          <h2 className="font-kalam text-black text-xl sm:text-2xl lg:text-3xl mb-1 break-words">
            Simple ingredients, endless possibilities...
          </h2>
          <p className="text-black text-sm sm:text-sm lg:text-base break-words overflow-hidden">
            Welcome to CoolCook, where simple ingredients turn into extraordinary meals. Unleash your creativity and make every dish unforgettable.
          </p>
        </div>
      </div>

      <div className="mt-1 flex flex-col lg:flex-row lg:gap-10 w-full">
        <Filters />
        <div className="flex-1">
        <h2 className="text-4xl font-kalam text-white font-bold text-center mb-8 mt-[20px] sm:mt-12 md:mt-16 lg:mt-[76px] w-full">Recommended recipes</h2>
          <div>
            <Card></Card>
          </div>
        </div>
      </div>

      <h2 className="text-4xl font-kalam text-white font-bold text-center mt-[150px]">Popular recipes</h2>
      <div className="flex flex-wrap sm:flex-nowrap space-x-0 sm:space-x-6 mt-5 w-screen bg-[#70966D] p-6 rounded-lg h-auto sm:h-[250px] justify-center items-center gap-6 overflow-x-auto">
        <PopularRecipes />
      </div>


      <h2 className="text-4xl font-kalam text-white font-bold text-center mt-[60px] mb-5">Top users</h2>
      <TopUsers/>

      <Footer />
    </main>
  );
}
