"use client";

import Image from "next/image";
import Link from "next/link";

export default function MainSection() {
  return (
    <>
      <div className="hidden md:flex h-[60vh] w-screen mt-4">
        <div className="w-1/2 bg-[#E4E0D3] flex flex-col p-10 pt-24 pr-16">
          <h2 className="font-kalam font-bold text-5xl text-[#2c3b2ae8] mb-6 leading-tight">
            Simple ingredients, <br /> endless possibilities...
          </h2>
          <p className="text-[#2c3b2ae8] font-kalam text-lg max-w-3xl">
            Welcome to CoolCook, your ultimate destination for culinary inspiration. Discover a wide variety of delicious recipes crafted from simple, fresh ingredients. 
            Whether you&apos;re cooking quick meals or gourmet dishes, we make cooking enjoyable and accessible for everyone. Let your creativity flourish.
          </p>
          <div className="flex space-x-4 mt-12">
            <Link href="/Profile/Login" className="px-12 py-4 bg-[#70966D] text-white rounded-md font-semibold hover:bg-[#587956] transition text-xl text-center">
              Log In
            </Link>
            <Link href="/Profile/Signup" className="px-12 py-4 border-2 border-[#70966D] text-[#70966D] rounded-md font-semibold hover:bg-[#70966D] hover:text-white transition text-xl text-center">
              Sign Up
            </Link>
          </div>
        </div>
        <div className="relative w-1/2">
          <Image
            src="/header_image.webp"
            alt="Delicious cooking ingredients"
            fill
            sizes="(max-width: 768px) 100vw, 50vw" 
            className="object-cover"
          />
        </div>
      </div>
      <div className="md:hidden relative w-full h-[50vh] mt-4 mb-4">
        <Image
          src="/header_image.webp"
          alt="Delicious cooking ingredients"
          fill
          priority
          className="object-cover"
        />
        <div className="absolute inset-0 bg-[#E4E0D3cc]" />
        <div className="relative p-8 flex flex-col items-center text-center max-w-md mx-auto">
          <h2 className="font-kalam font-bold text-4xl text-[#2c3b2ae8] mb-6 leading-snug">
            Simple ingredients,<br /> endless possibilities...
          </h2>
          <div className="flex flex-col space-y-4 w-full">
            <Link href="/Profile/Login" className="w-full px-10 py-4 bg-[#70966D] text-white rounded-md font-semibold hover:bg-[#587956] transition text-xl text-center">
              Log In
            </Link>
            <Link href="/Profile/Signup" className="w-full px-10 py-4 border-2 border-[#70966D] text-[#446141] rounded-md font-semibold hover:bg-[#70966D] hover:text-white transition text-xl text-center">
              Sign Up
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
