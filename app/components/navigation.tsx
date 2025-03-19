"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import Image from "next/image";

type Page = {
  title: string;
  path: `/${string}`;
};

const pages: Page[] = [
  { title: "HOME", path: "/" },
  {
    title: "RECIPES",
    path: "/recipes",
  },
  {
    title: "INSPIRATION",
    path: "/inspiration",
  },
  {
    title: "BLOG",
    path: "/blog",
  },
  {
    title: "MY PROFILE",
    path: "/Profile",
  },
];

function processPage(page: Page, index: number, pathname: string) {
  return (
    <li key={index}>
      <Link
        href={page.path}
        className={
          page.path === "/"
            ? pathname === page.path
              ? "border-2 border-[#ffffff] p-2 rounded text-white"
              : "text-white"
            : pathname.startsWith(page.path)
            ? "border-2 border-[#ffffff] p-2 rounded text-white"
            : "text-white"
        }
      >
        {page.title}
      </Link>
    </li>
  );
}

export function Navigation() {
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-[#70966D] shadow-2xl w-screen py-8 flex items-center justify-between font-kalam">
      <div className="flex items-center space-x-2">
        <Image
          src="/logoCC.png"
          alt="Logo"
          width={156}
          height={156}
          className="pl-3"
        />
      </div>

      <nav className="hidden md:flex max-w-7xl mr-8">
        <ul className="flex space-x-12">
          {pages.map((page, index) => processPage(page, index, pathname))}
        </ul>
      </nav>
      <div className="md:hidden mr-6">
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="flex flex-col justify-between items-center w-10 h-10 p-2 rounded-lg focus:outline-none"
        >
          {isMenuOpen ? (
            <span className="text-white text-2xl font-bold">X</span>
          ) : (
            <>
              <span className="w-7 h-1 bg-white rounded-full" />
              <span className="w-7 h-1 bg-white rounded-full" />
              <span className="w-7 h-1 bg-white rounded-full" />
            </>
          )}
        </button>
      </div>

      {isMenuOpen && (
        <nav className="absolute top-[6rem] left-0 w-full bg-[#70966D] shadow-lg md:hidden">
          <ul className="flex flex-col space-y-4 p-4">
            {pages.map((page, index) => processPage(page, index, pathname))}
          </ul>
        </nav>
      )}
    </header>
  );
}
