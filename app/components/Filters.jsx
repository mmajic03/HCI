export default function Filters() {
    return (
      <div className="flex flex-col md:flex-row max-h-[600px] mt-[76px]">
        <div className="lg:w-full md:w-1/2 sm:w-full bg-[#E4E0D3] p-6 rounded-lg flex flex-col">
          <h3 className="font-kadwa font-regular text-xl mb-4 border-b border-black">Meals</h3>
          <ul className="font-kadwa mb-6">
            <li><input type="checkbox" className="mr-2" />Breakfast</li>
            <li><input type="checkbox" className="mr-2" />Lunch</li>
            <li><input type="checkbox" className="mr-2" />Dinner</li>
            <li><input type="checkbox" className="mr-2" />Soup</li>
            <li><input type="checkbox" className="mr-2" />Desserts</li>
            <li><input type="checkbox" className="mr-2" />Snacks</li>
          </ul>
  
          <h3 className="font-kadwa font-regular text-xl mb-4 border-b border-black">Primary ingredient</h3>
          <ul className="font-kadwa mb-6">
            <li><input type="checkbox" className="mr-2" />Meat</li>
            <li><input type="checkbox" className="mr-2" />Fish</li>
            <li><input type="checkbox" className="mr-2" />Vegetables</li>
            <li><input type="checkbox" className="mr-2" />Fruits</li>
            <li><input type="checkbox" className="mr-2" />Pasta</li>
          </ul>
  
          <h3 className="font-kadwa font-regular text-xl mb-4 border-b border-black">Preparation time</h3>
          <ul className="font-kadwa mb-6">
            <li><input type="checkbox" className="mr-2" />&lt; 15 min</li>
            <li><input type="checkbox" className="mr-2" />15 - 45 min</li>
            <li><input type="checkbox" className="mr-2" />&gt; 45 min</li>
          </ul>
        </div>
      </div>
    );
  }
  