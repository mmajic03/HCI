export default function Home() {
  return (
    <main className="flex min-h-screen w-screen flex-col items-center p-10 bg-[#9C8D71E8]">
      <h1 className="text-black text-6xl font-extrabold tracking-tight">Home</h1>
      <div className="bg-[url('/header_image.jpg')] bg-cover bg-center h-[50vh] w-screen mt-4">
        <div className="bg-[#E4E0D3] h-[70%] w-[90%] sm:w-[70%] md:w-[50%] lg:w-[30%] mt-12 ml-6 p-6 flex flex-col items-start justify-around">
          <h2 className="font-kalam text-black text-xl sm:text-2xl lg:text-3xl mb-4 break-words">
            Simple ingredients, endless possibilities...
          </h2>
          <p className="text-black text-sm sm:text-sm lg:text-base break-words overflow-hidden">
            Welcome to CoolCook, where simple ingredients turn into extraordinary meals. Unleash your creativity and make every dish unforgettable.
          </p>
        </div>
      </div>

      <div>
        
      </div>
    </main>
  );
}
