"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

type Page = {
  title: string;
  path: `/${string}`;
};

const pages: Page[] = [
  {
    title: "My profile",
    path: "/Profile/MyProfile",
  },
  {
    title: "Saved Recipes",
    path: "/Profile/SavedRecipes",
  },
  {
    title: "Shopping List",
    path: "/Profile/ShoppingList",
  }
];
function processPage(page: Page, index: number, pathname: string) {
  return (
    <li key={index}>
      <Link
        href={page.path}
        className={
          pathname === page.path ? "font-extrabold text-[#477734]" : ""
        }
      >
        {page.title}
      </Link>
    </li>
  );
}
export function Navigation() {
  const pathname = usePathname();
  console.log(pathname);
  return (
    <ul className="flex flex-col space-y-4 mt-8">
      {pages.map((page, index) => processPage(page, index, pathname))}
    </ul>
  );
}