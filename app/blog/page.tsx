import { getPosts, getPostsCount, Post } from "./_lib/api";
import Pagination from './__components/pagination';
import type { Metadata } from "next";
import Footer from "../components/footer";
import Image from "next/image";

type BlogPageProps = {
  searchParams: { page: string };
};

const PAGE_SIZE = Number(process.env.PAGE_SIZE) || 6;

export const metadata: Metadata = {
  title: "Blog",
};

function processPost(post: Post) {
  const { id, title, body, userId } = post;

  return (
    <li key={id} className="mb-8">
      <div className="flex flex-col md:flex-row bg-[#EDE8DF] rounded-lg shadow-lg overflow-hidden">
        <div className="w-full md:w-1/2 h-60 md:h-auto">
          <Image
            src="/mnt/data/image.png"
            alt="Blog image"
            width={500}
            height={300}
            className="w-full h-auto object-cover"
          />
        </div>

        <div className="w-full md:w-1/2 p-6 flex flex-col justify-between">
          <div>
          <p className="text-l text-gray-500">
            <span className="font-semibold text-xl">User {userId}</span>
          </p>
            <h2 className="mt-10 text-4xl font-bold text-gray-900">{title}</h2>
            <p className="mt-5 text-gray-600 text-2xl">{body.slice(0, 100)}...</p>
          </div>
          <hr className=" mt-[120px] border-t border-gray-400"/>
          <div className="flex justify-between items-center mb-7 text-gray-500 text-xl">
            <span>1,162 views • 4 comments</span>
          </div>
        </div>
      </div>
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

  let posts: Post[] = [];

  try {
    const response = await getPosts({ _start, _limit });

    posts = Array.isArray(response)
      ? response
      : typeof response === "object" && response !== null
      ? Object.values(response)
      : [];
  } catch (error) {
    console.error("Failed to fetch posts:", error);
    posts = [];
  }

  return (
    <div className="bg-[#A3967C] min-h-screen flex flex-col">
      <main className="flex flex-col flex-1 w-full px-10 py-6">
        <ul className="w-full divide-y divide-gray-300 mt-10">{posts.map(processPost)}</ul>
        <div className="mt-auto">
          <Pagination currentPage={currentPage} pagesCount={pagesCount} />
        </div>
      </main>
      <Footer />
    </div>
  );
}
