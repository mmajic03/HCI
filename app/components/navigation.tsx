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
    <header className="bg-white shadow w-full py-8">
      <nav className="max-w-7xl mx-auto">
        <ul className="flex justify-center space-x-12">
          {pages.map((page, index) => processPage(page, index, pathname))}
        </ul>
      </nav>
    </header>
  );
}
