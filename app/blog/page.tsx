import { getPosts, getPostsCount, Post } from "./_lib/api";
import Pagination from './__components/pagination';
import Link from "next/link";
import type { Metadata } from "next";
import Footer from "../components/footer";

type BlogPageProps = {
  searchParams: { page: string };
};

const PAGE_SIZE = Number(process.env.PAGE_SIZE) || 6;

export const metadata: Metadata = {
  title: "Blog",
};

function processPost(post: Post) {
  const { id, title } = post;
  return (
    <li key={id} className="mb-6">
      <Link
        href={`/blog/${id}`}
        className="block w-full p-10 rounded-lg bg-[#E5E1CE] hover:bg-[#ebe8dd] transition-all duration-200 h-52"
      >
        <h2 className="mb-4 text-4xl font-bold text-gray-900">
          Post {id}: {title}
        </h2>
        <p className="text-lg text-gray-600">
          Click to read more about this fascinating recipe...
        </p>
      </Link>
    </li>
  );
}

export default async function Recipes({ searchParams }: BlogPageProps) {
  const postsCount = await getPostsCount();
  const pagesCount = Math.ceil(postsCount / PAGE_SIZE);
  const currentPage = Math.min(
    /^[1-9][0-9]*$/.test(searchParams.page) ? Number(searchParams.page) : 1,
    pagesCount
  );
  const _start = (currentPage - 1) * PAGE_SIZE;
  const _limit = PAGE_SIZE;

  const posts = await getPosts({ _start, _limit });

  return (
    <div className="bg-[#A3967C] min-h-screen flex flex-col">
      <main className="flex flex-col flex-1 w-full px-10">
        <div className="w-full mb-6">
          <Pagination currentPage={currentPage} pagesCount={pagesCount} />
        </div>
        <ul className="w-full divide-y divide-gray-300">{posts.map(processPost)}</ul>
      </main>
      <Footer />
    </div>
  );
}
