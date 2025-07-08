"use client";

type Page = {
  title: string;
  emoji: string;
  path: `/${string}`;
  tabKey: string;
};

const pages: Page[] = [
  { 
    title: "Saved Recipes", 
    emoji: "📖", 
    path: "/Profile/SavedRecipes", 
    tabKey: "savedRecipes" 
  },
  { 
    title: "Shopping List", 
    emoji: "🛒", 
    path: "/Profile/ShoppingList", 
    tabKey: "shoppingList" 
  },
  { 
    title: "Profile settings", 
    emoji: "⚙️", 
    path: "/Profile/ProfileSettings", 
    tabKey: "profile" 
  },
];

interface NavigationProps {
  activeTab: string;
  setActiveTab: (tab: string) => void;
}

export function Navigation({ activeTab, setActiveTab }: NavigationProps) {
  return (
    <ul className="flex flex-col mt-8 space-y-2">
      {pages.map((page) => (
        <li key={page.tabKey}>
          <button
            type="button"
            onClick={() => setActiveTab(page.tabKey)}
            className={
              (activeTab === page.tabKey
                ? "bg-[#70966D] text-white font-extrabold"
                : "text-slate-800 hover:bg-[#C4D1B4]") +
              " flex items-center space-x-3 rounded-md py-3 px-4 w-full text-left text-lg font-kalam transition-colors"
            }
          >
            <span className="text-2xl">{page.emoji}</span>
            <span className="hidden sm:inline">{page.title}</span>
          </button>
        </li>
      ))}
    </ul>
  );
}
