"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

type Page = {
  title: string;
  path: `/${string}`;
};


const pages: Page[] = [
  { title: "Home", path: "/" },
  {
    title: "Recipes",
    path: "/recipes",
  },
  {
    title: "Inspiration",
    path: "/inspiration",
  },
  {
    title: "Blog",
    path: "/blog",
  },
  {
    title: "My profile",
    path: "/Profile",
  }
];

function processPage(page: Page, index: number, pathname: string) {
  return (
    <li key={index}>
      <Link
        href={page.path}
        className={
          page.path === "/"
            ? pathname === page.path
              ? "font-extrabold"
              : ""
            : pathname.startsWith(page.path)
            ? "font-extrabold"
            : ""
        }
      >
        {page.title}
      </Link>
    </li>
  );
}

export function Navigation() {
  const pathname = usePathname();

  return (
    <header className="bg-[#70966D] shadow-2xl w-full py-8 flex items-center justify-between">
      <div className="flex items-center space-x-2">
          <img src="../logoCC.png" className="h-14 w-auto pl-3" />
        </div>
      <nav className="max-w-7xl mr-8">
        <ul className="flex space-x-12">
          {pages.map((page, index) => processPage(page, index, pathname))}
        </ul>
      </nav>
    </header>
  );
}
