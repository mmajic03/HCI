"use client";

import Footer from "../components/footer";
import Image from "next/image";
import Link from "next/link";

export default function Inspiration() {
  const kitchens = [
    { name: "Italian", img: "/italian_food.jpg", link: "/inspiration/italian" },
    { name: "Greek", img: "/greek_food.jpeg", link: "/inspiration/greek" },
    { name: "Japanese", img: "/japanese_food.jpeg", link: "/inspiration/japanese" },
    { name: "Indian", img: "/indian_food.jpeg", link: "/inspiration/indian" },
    { name: "Mexican", img: "/mexican_food.jpeg", link: "/inspiration/mexican" },
    { name: "Chinese", img: "/chinese_food.jpeg", link: "/inspiration/chinese" },
  ];

  return (
    <main className="flex min-h-screen flex-col items-center p-10 bg-[#9C8D71E8] relative">
      <h1 className="text-6xl text-[#2c3b2ae8] font-extrabold tracking-tight mb-12">Inspiration</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 mb-12 gap-8 w-full max-w-7xl px-4  ">
        {kitchens.map((kitchen) => (
          <div
          key={kitchen.name}
          className="relative w-full aspect-[16/9] shadow-2xl rounded-lg overflow-hidden transition-transform duration-300 hover:scale-105"
        >
        
          <div className="absolute inset-0 bg-gradient-to-r from-black/90 to-transparent flex items-center p-4 z-10">
            <p className="text-white text-2xl font-bold">{kitchen.name}</p>
          </div>

          <Image 
            src={kitchen.img} 
            alt={kitchen.name} 
            layout="fill" 
            objectFit="cover" />

          <Link href={kitchen.link} className="absolute inset-0 z-20" />
        </div>
        ))}
      </div>

      <Footer />
    </main>
  );
}
