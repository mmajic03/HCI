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

async function getPostsCount(): Promise<number> {
    const data = await fetch(`${process.env.NEXT_PUBLIC_BLOG_API}/posts/?_limit=1`, {
        method: "HEAD",
    });
    const countHeader = data.headers.get("x-total-count");
    const count = countHeader ? parseInt(countHeader, 10) : 0; 
    return count;
}

async function getPosts({
    _start = 0,
    _limit = PAGE_SIZE,
}: PagingInfo): Promise<Post[]> {
    const data = await fetch(
        `${process.env.NEXT_PUBLIC_BLOG_API}/posts/?_start=${_start}&_limit=${_limit}`
    );
    return data.json();
}

export { getPosts, getPostsCount };
