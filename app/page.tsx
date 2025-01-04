import Card from "./components/recipeCard";

export default function Home() {
  return (
    <main className="flex min-h-screen w-screen flex-col items-center p-10 bg-[#9C8D71E8]">
      <div className="bg-[url('/header_image.jpg')] bg-cover bg-center h-[50vh] w-screen mt-4">
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
        <div className="flex flex-col md:flex-row">
          <div className="lg:w-[100%] md:w-1/2 sm:w-full bg-[#E4E0D3] p-6 rounded-lg flex flex-col">
            <h3 className="font-kadwa font-regular text-xl mb-4 border-b border-black">Meals</h3>
            <ul className="font-kadwa mb-6">
              <li><input type="checkbox" className="mr-2"/>Breakfast</li>
              <li><input type="checkbox" className="mr-2"/>Lunch</li>
              <li><input type="checkbox" className="mr-2"/>Dinner</li>
              <li><input type="checkbox" className="mr-2"/>Soup</li>
              <li><input type="checkbox" className="mr-2"/>Desserts</li>
              <li><input type="checkbox" className="mr-2"/>Snacks</li>
            </ul>
            <h3 className="font-kadwa font-regular text-xl mb-4 border-b border-black">Primary ingredient</h3>
            <ul className="font-kadwa mb-6">
              <li><input type="checkbox" className="mr-2"/>Meat</li>
              <li><input type="checkbox" className="mr-2"/>Fish</li>
              <li><input type="checkbox" className="mr-2"/>Vegetables</li>
              <li><input type="checkbox" className="mr-2"/>Fruits</li>
              <li><input type="checkbox" className="mr-2"/>Pasta</li>
            </ul>
            <h3 className="font-kadwa font-regular text-xl mb-4 border-b border-black">Preparation time</h3>
            <ul className="font-kadwa mb-6">
              <li><input type="checkbox" className="mr-2"/>&lt; 15 min</li>
              <li><input type="checkbox" className="mr-2"/>15 - 45min</li>
              <li><input type="checkbox" className="mr-2"/>&gt; 45 min</li>
            </ul>
          </div>
        </div>
        <div className="flex-1">
          <h2 className="text-4xl font-kalam text-white font-bold text-center mb-8 mr-20">Recommended recipes</h2>
          <div>
            <Card></Card>
          </div>
        </div>
     </div>

      <h2 className="text-4xl font-kalam text-white font-bold text-center mt-[150px]">Popular recipes</h2>
      <div className="mt-5 w-screen bg-[#70966D] p-6 rounded-lg h-[250px]">
      </div>

      <h2 className="text-4xl font-kalam text-white font-bold text-center mt-[60px] mb-5">Top users</h2>
      <div className="mt-10 mb-10 w-full flex justify-center">
        <div className="flex justify-around w-[70%] items-center mb-6">
          {[
            {name:"Emily", image:"/Emily.jpeg"},
            {name:"Olivia",image:"/Olivia.jpeg"},
            {name:"James",image:"/James.jpeg"},
            {name:"Sophia",image:"/Sophia.jpeg"},
            {name:"Benjamin",image:"/Benjamin.jpeg"},
          ].map((user, index) => (
            <div key={index} className="flex flex-col items-center space-y-2">
              <div className="h-[120px] w-[120px] rounded-full overflow-hidden">
                <img
                  src={user.image}
                  className="h-full w-full object-cover"
                />
              </div>
              <span className="text-lg font-semibold">{user.name}</span>
            </div>
          ))}
        </div>
      </div>

    <footer className="w-screen bg-[#70966D] text-white py-6 flex flex-col items-center">
      <div className="flex flex-wrap justify-around items-start max-w-6xl w-full px-6 mb-8">
        <div className="flex flex-col items-center mb-8 md:mb-0">
          <img src="../logoCC.png" className="h-30 w-auto mb-4" />
        </div>

        <div className="flex flex-col items-start mb-8 md:mb-0">
          <h2 className="text-xl font-bold mb-0">Sitemap</h2>
          <p className="mb-5">Explore our site</p>
          <ul className="space-y-2">
            <li>Home</li>
            <li>Recipes</li>
            <li>Inspiration</li>
            <li>Blog</li>
            <li>My Profile</li>
          </ul>
        </div>

        <div className="flex flex-col items-start mb-8 md:mb-0">
          <h2 className="text-xl font-bold mb-4">Contact Us</h2>
          <p className="mb-2"><span className="font-bold">Phone:</span> +385 123 000</p>
          <p className="mb-4"><span className="font-bold">Email:</span> info@coolcook.com</p>
          <h2 className="text-xl font-bold mb-4">Follow Us</h2>
          <div className="flex space-x-4">
            <div className="h-6 w-6 transition-opacity">
              <img src="/fb.png" alt="Facebook" />
            </div>
            <div className="h-6 w-6 transition-opacity">
              <img src="/ig.png" alt="Instagram" />
            </div>
            <div className="h-6 w-6 transition-opacity">
              <img src="/yt.png" alt="YouTube" />
            </div>
          </div>
        </div>
      </div>
      <div className="text-center mt-12 border-white pt-4">
        <p className="text-sm">&copy; 2024 CoolCook. All rights reserved.</p>
      </div>
    </footer>
  </main>
  );
}
