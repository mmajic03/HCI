"use client";

type Page = {
  title: string;
  key: string;
};

const pages: Page[] = [
  { 
    title: "My Profile", 
    key: "profile" 
  },
  { 
    title: "Saved Recipes", 
    key: "savedRecipes" 
  },
  { 
    title: "Shopping List", 
    key: "shoppingList" 
  },
];

export function Navigation({ activeTab, setActiveTab }: { activeTab: string; setActiveTab: (tab: string) => void }) {
  return (
    <ul className="flex flex-col space-y-4 mt-8">
      {pages.map((page) => (
        <li key={page.key}>
          <button
            onClick={() => setActiveTab(page.key)}
            className={`text-left w-full ${
              activeTab === page.key ? "font-extrabold text-[#477734]" : "text-gray-800"
            }`}
          >
            {page.title}
          </button>
        </li>
      ))}
    </ul>
  );
}
