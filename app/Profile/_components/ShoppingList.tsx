"use client";
import { useState } from "react";

const ShoppingList = () => {
  const [items, setItems] = useState<string[]>([]);
  const [newItem, setNewItem] = useState("");

  const addItem = () => {
    if (newItem.trim() !== "") {
      setItems([...items, newItem]);
      setNewItem("");
    }
  };

  const removeItem = (index: number) => {
    const updatedItems = items.filter((item, i) => i !== index);
    setItems(updatedItems);
  };

  return (
    <div className="bg-[#e7e1d5] p-8 rounded-2xl shadow-lg">
      <h2 className="text-2xl font-semibold text-[#467242] text-center mb-6">Shopping list</h2>
      <div className="space-y-4 max-h-[570px] overflow-y-auto">
        {items.length === 0 ? (
          <div className="text-center text-gray-500">Shopping list is empty. Add some items!</div>
        ) : (
          items.map((item, index) => (
            <div
              key={index}
              className="flex items-center justify-between bg-[#EDE8DF] border border-[#467242] p-4 rounded-lg"
            >
              <span className="text-gray-800">{item}</span>
              <button
                onClick={() => removeItem(index)}
                className="text-[#70966D] hover:text-[#20381f] font-semibold text-xl"
              >
                🗑
              </button>
            </div>
          ))
        )}
      </div>

      <div className="mt-4 flex items-center justify-center space-x-4">
        <input
          type="text"
          value={newItem}
          onChange={(e) => setNewItem(e.target.value)}
          className="flex-1 border border-gray-400 rounded-lg px-4 py-2 bg-[#EDE8DF] focus:outline-none focus:ring-2 focus:ring-[#70966D]"
          placeholder="Add new item"
        />
        <button
          onClick={addItem}
          className="px-10 py-3 bg-[#70966D] text-black rounded-lg shadow hover:bg-[#467242] focus:outline-none focus:ring-2 focus:ring-[#70966D]"
        >
          ADD
        </button>
      </div>
    </div>
  );
};

export default ShoppingList;
