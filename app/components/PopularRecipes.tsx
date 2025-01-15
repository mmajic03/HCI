'use client';
import { useState, useEffect } from 'react';

export default function PopularRecipes() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [itemsPerView, setItemsPerView] = useState(4); 

  const numItems = 10;

  const updateItemsPerView = () => {
    if (window.innerWidth < 640) {
      setItemsPerView(1); 
    } else if (window.innerWidth < 1024) {
      setItemsPerView(2);
    } else {
      setItemsPerView(4);
    }
  };

  useEffect(() => {
    updateItemsPerView(); 
    window.addEventListener('resize', updateItemsPerView); 
    return () => window.removeEventListener('resize', updateItemsPerView); 
  }, []);

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? numItems - 1 : prevIndex - 1
    );
  };

  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === numItems - 1 ? 0 : prevIndex + 1
    );
  };

  const processItem = (index: number) => {
    const adjustedIndex = (index + numItems) % numItems;
    return (
      <div
        key={adjustedIndex}
        className="bg-white rounded-lg shadow-lg w-[150px] h-[150px] flex items-center justify-center"
      >
        <p className="text-gray-500">{adjustedIndex + 1}</p>
      </div>
    );
  };

  return (
    <div className="relative flex items-center w-full overflow-hidden">
      <button
        className="absolute left-0 p-3 bg-white rounded-full w-16 h-16 shadow-md z-10 flex justify-center items-center"
        onClick={prevSlide}
      >
        &#9664;
      </button>

      <div className="flex overflow-hidden w-full justify-center gap-4">
        {Array.from({ length: itemsPerView }).map((_, index) =>
          processItem(currentIndex + index)
        )}
      </div>

      <button
        className="absolute right-0 p-3 bg-white rounded-full w-16 h-16 shadow-md z-10 flex justify-center items-center"
        onClick={nextSlide}
      >
        &#9654;
      </button>
    </div>
  );
}
