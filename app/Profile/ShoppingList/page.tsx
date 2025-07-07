"use client";
import { useState, useEffect } from "react";
import Loading from "@/app/loading";

const ShoppingList = () => {
  const [items, setItems] = useState<string[]>([]);
  const [newItem, setNewItem] = useState("");
  const [ready, setReady] = useState(false);

  useEffect(() => {
    const savedItems = localStorage.getItem("shoppingListItems");
    if (savedItems) {
      try {
        setItems(JSON.parse(savedItems));
      } catch {
        setItems([]);
      }
    }
    setReady(true);
  }, []);

  useEffect(() => {
    if (ready) {
      localStorage.setItem("shoppingListItems", JSON.stringify(items));
    }
  }, [items, ready]);

  const addItem = () => {
    if (newItem.trim() !== "") {
      setItems((prev) => [...prev, newItem.trim()]);
      setNewItem("");
    }
  };

  const removeItem = (index: number) => {
    setItems((prev) => prev.filter((_, i) => i !== index));
  };

  if (!ready) {
    return <Loading />;
  }

  return (
    <div
      className="bg-[#e7e1d5] p-8 rounded-2xl shadow-lg max-w-xl mx-auto sm:p-6 sm:max-w-md md:max-w-4xl md:px-12 px-4">
      <h2 className="text-2xl font-semibold text-[#467242] text-center mb-6">
        Shopping list
      </h2>

      <div className="space-y-4 max-h-[570px] overflow-y-auto">
        {items.length === 0 ? (
          <div className="text-center text-gray-500">
            Shopping list is empty. Add some items!
          </div>
        ) : (
          items.map((item, index) => (
            <div
              key={index}
              className="flex items-center justify-between bg-[#EDE8DF] border border-[#467242] p-4 rounded-lg"
            >
              <span className="text-gray-800 break-words">{item}</span>
              <button
                onClick={() => removeItem(index)}
                className="text-[#70966D] hover:text-[#20381f] font-semibold text-xl"
                aria-label={`Remove ${item}`}
              >
                🗑
              </button>
            </div>
          ))
        )}
      </div>

      <div
        className="mt-4 flex flex-col sm:flex-row items-center justify-center
                   space-y-4 sm:space-y-0 sm:space-x-4"
      >
        <input
          type="text"
          value={newItem}
          onChange={(e) => setNewItem(e.target.value)}
          className="w-full sm:flex-1 border border-gray-400 rounded-lg px-4 py-2 bg-[#EDE8DF]
                     focus:outline-none focus:ring-2 focus:ring-[#70966D]"
          placeholder="Add new item"
          onKeyDown={(e) => e.key === "Enter" && addItem()}
          aria-label="Add new shopping item"
        />
        <button
          onClick={addItem}
          className="w-full sm:w-auto px-10 py-3 bg-[#70966D] text-black rounded-lg shadow
                     hover:bg-[#467242] focus:outline-none focus:ring-2 focus:ring-[#70966D]"
        >
          ADD
        </button>
      </div>
    </div>
  );
};

export default ShoppingList;
