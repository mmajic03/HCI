"use client";

import Footer from "../components/footer";

export default function Inspiration() {
  const kitchens = [
    { name: "Italian", img: "/italian_food.jpg", link: "/recipes/italian" },
    { name: "Greek", img: "/greek_food.jpeg", link: "/recipes/greek" },
    { name: "Japanese", img: "/japanese_food.jpeg", link: "/recipes/japanese" },
    { name: "Indian", img: "/indian_food.jpeg", link: "/recipes/indian" },
    { name: "Mexican", img: "/mexican_food.jpeg", link: "/recipes/mexican" },
    { name: "Chinese", img: "/chinese_food.jpeg", link: "/recipes/chinese" },
  ];

  return (
    <main className="flex min-h-screen flex-col items-center p-10 bg-[#9C8D71E8] relative">
      <h1 className="text-6xl font-extrabold tracking-tight">Inspiration</h1>

      
        <div className="flex items-center justify-center relative w-screen h-[90vh]">
          {kitchens.map((kitchen, index) => {
            const angle = (index / kitchens.length) * 2 * Math.PI;
            const x = Math.cos(angle) * 350;
            const y = Math.sin(angle) * 250;

            return (
              <div
                key={kitchen.name}
                onClick={() => (window.location.href = kitchen.link)}
                className="absolute cursor-pointer w-[180px] h-[180px] rounded-full mb-14 mt-10 shadow-2xl flex flex-col items-center justify-center"
                style={{
                  transform: `translate(${x}px, ${y}px)`,
                }}
              >
                <img
                  src={kitchen.img}
                  alt={kitchen.name}
                  className="w-full h-full object-cover rounded-full"
                />
                <p className="absolute bottom-[-20px] text-center text-sm font-bold">
                  {kitchen.name}
                </p>
              </div>
            );
          })}
        </div>
     

      <Footer></Footer>
    </main>
  );
}
