import Link from "next/link";

type PaginationProps = {
  currentPage: number;
  pagesCount: number;
};

export default function Pagination({ currentPage, pagesCount }: PaginationProps) {
  const isFirstPage = currentPage === 1;
  const isLastPage = currentPage === pagesCount;

  const generateVisiblePages = () => {
    const pages = new Set<number>();
    pages.add(1);
    pages.add(pagesCount);
    
    for (let i = currentPage - 2; i <= currentPage + 2; i++) {
      if (i > 1 && i < pagesCount) {
        pages.add(i);
      }
    }
    return Array.from(pages).sort((a, b) => a - b);
  };

  const visiblePages = generateVisiblePages();

  return (
    <div className="flex justify-center items-center gap-2 p-4">
      <Link
        href={`/blog?page=${currentPage - 1}`}
        className={`px-3 py-2 rounded-md text-lg font-bold font-kadwa transition-all duration-200 ${
          isFirstPage 
            ? "text-[#b6c7b5] cursor-not-allowed" 
            : "text-[#295c25] hover:text-[#457242]"
        }`}
        aria-disabled={isFirstPage}
      >
        {"<"}
      </Link>

      {visiblePages.map((page, index) => (
        <>
          {index > 0 && page !== visiblePages[index - 1] + 1 && <span className="px-2 text-[#457242] font-extrabold font-kadwa">. . .</span>}
          <Link
            key={page}
            href={`/blog?page=${page}`}
            className={`px-3 py-2 rounded-md text-lg font-bold font-kadwa transition-all duration-200 ${
              currentPage === page 
                ? "bg-[#457242] text-white font-bold" 
                : "text-[#295c25] hover:text-[#457242]"
            }`}
          >
            {page}
          </Link>
        </>
      ))}

      <Link
        href={`/blog?page=${currentPage + 1}`}
        className={`px-3 py-2 rounded-md text-lg font-bold font-kadwa transition-all duration-200 ${
          isLastPage 
          ? "text-gray-400 cursor-not-allowed" 
          : "text-[#295c25] hover:text-[#457242]"
        }`}
        aria-disabled={isLastPage}
      >
        {">"}
      </Link>
    </div>
  );
}
