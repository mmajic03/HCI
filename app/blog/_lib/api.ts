import fs from "fs";
import path from "path";

type PagingInfo = {
    _start?: number;
    _limit?: number;
};

export type Post = {
    userId: number;
    id: number;
    title: string;
    body: string;
};

const PAGE_SIZE = Number(process.env.NEXT_PUBLIC_PAGE_SIZE);
const FILE_PATH = path.join(process.cwd(), "public", "blog_posts.json");

function readLocalPosts(): Post[] {
    const fileContent = fs.readFileSync(FILE_PATH, "utf-8");
    return JSON.parse(fileContent);
}

async function getPostsCount(): Promise<number> {
    if (typeof window === "undefined") {
        return readLocalPosts().length;
    }

    const data = await fetch(`${process.env.NEXT_PUBLIC_BLOG_API}/posts/?_limit=1`, {
        method: "HEAD",
    });
    const countHeader = data.headers.get("x-total-count");
    return countHeader ? parseInt(countHeader, 10) : 0;
}

async function getPosts({
    _start = 0,
    _limit = PAGE_SIZE,
}: PagingInfo): Promise<Post[]> {
    if (typeof window === "undefined") {
        return readLocalPosts().slice(_start, _start + _limit);
    }

    const data = await fetch(
        `${process.env.NEXT_PUBLIC_BLOG_API}/posts/?_start=${_start}&_limit=${_limit}`
    );
    return data.json();
}

export { getPosts, getPostsCount };
