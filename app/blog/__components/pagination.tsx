import Link from "next/link";

type PaginationProps = {
  currentPage: number;
  pagesCount: number;
};

export default function Pagination(pagination: PaginationProps) {
  const { currentPage, pagesCount } = pagination;
  const isFirstPage = currentPage === 1;
  const isLastPage = currentPage === pagesCount;

  return (
    <div className="bg-[#E5E1CE] mt-10 rounded-lg shadow-md p-6 flex justify-between items-center border border-black">
      <Link
        href={`/blog?page=${currentPage - 1}`}
        className={`px-6 py-3 text-lg rounded-lg transition-all duration-200 ${
          isFirstPage
            ? "bg-gray-200 text-gray-400 cursor-not-allowed"
            : "bg-gray-100 text-gray-700 border border-gray-300 hover:bg-gray-200"
        }`}
        aria-disabled={isFirstPage}
      >
        Previous
      </Link>
      <p className="text-lg text-gray-700">
        Page{" "}
        <span className="font-bold">{currentPage}</span> of{" "}
        <span className="font-bold">{pagesCount}</span>
      </p>
      <Link
        href={`/blog?page=${currentPage + 1}`}
        className={`px-6 py-3 text-lg rounded-lg transition-all duration-200 ${
          isLastPage
            ? "bg-gray-200 text-gray-400 cursor-not-allowed"
            : "bg-gray-100 text-gray-700 border border-gray-300 hover:bg-gray-200"
        }`}
        aria-disabled={isLastPage}
      >
        Next
      </Link>
    </div>
  );
}
