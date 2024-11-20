"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

type Page = {
  title: string;
  path: `/${string}`;
};

// Stranice navigacije
const pages: Page[] = [
  {
    title: "Categories",
    path: "/recipes/Categories",
  },
  {
    title: "Filtering",
    path: "/recipes/Filtering",
  },
  {
    title: "Type of diet",
    path: "/recipes/typeOfDiet",
  },
];

function processPage(page: Page, index: number, pathname: string, handleClick: () => void) {
  return (
    <li key={index} onClick={handleClick}>
      <Link
        href={page.path}
        className={pathname === page.path ? "font-extrabold text-slate-600" : ""}
      >
        {page.title}
      </Link>
    </li>
  );
}

export function Navigation() {
  const pathname = usePathname();
  const [isVertical, setIsVertical] = useState(false);

  // Funkcija koja postavlja navigaciju na vertikalni prikaz
  const handleNavClick = () => {
    setIsVertical(true);
  };

  return (
    <ul className={`mt-8 ${isVertical ? 'space-y-4' : 'flex space-x-4 justify-center'}`}>
      {pages.map((page, index) => processPage(page, index, pathname, handleNavClick))}
    </ul>
  );
}
