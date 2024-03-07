import fs from "fs";
import { useSearchParams } from "next/navigation";
import { useRouter } from "next/router";
import Link from "next/link";

export default function PostPage({
    posts,
}: {
    posts: {
        title: string;
        date: string;
        tags: string[];
        description: string;
        link: string;
    }[];
}) {
    const router = useRouter();
    const searchParams = useSearchParams();
    const pageStr = searchParams.get("page") ?? "1";
    const tags = searchParams.get("tags") ?? null;
    const page = Number(pageStr);
    let tagsStr = "";
    if (tags) {
        posts = posts.filter((post) => post.tags.includes(tags));
        tagsStr = tags;
    }
    const pageSize = 5;
    const totalPages = Math.ceil(posts.length / pageSize);
    const startIdx = page <= totalPages ? (page - 1) * pageSize : totalPages;
    const endIndex = Math.min(startIdx + pageSize, posts.length);

    posts = posts.slice(startIdx, endIndex);

    return (
        <div className="w-full mx-auto my-4 px-2 prose dark:prose-invert min-h-[80vh] flex flex-col">
            <div className="flex-none text-center">
                <h2>
                    {tagsStr ? tagsStr + " posts " : "Posts "}
                    {page <= totalPages ? page + " of " : totalPages + " of "}
                    {totalPages}
                </h2>
            </div>
            <div className="grow">
                {posts.map((post) => (
                    <article
                        key={post.title}
                        className="cursor-pointer border rounded mb-1 px-1"
                        onClick={() =>
                            router.push(post.link, undefined, {
                                shallow: false,
                            })
                        }
                    >
                        <h3>{post.title}</h3>
                        <p>{post.description}</p>
                        <p className="text-right">{post.date}</p>
                    </article>
                ))}
                <div className="flex flex-row">
                    {page > 1 ? (
                        <Link
                            className="flex-1 text-center"
                            href={`/posts?page=${page - 1}${
                                tagsStr !== "" ? `&tags=${tagsStr}` : ""
                            }`}
                        >
                            Prev
                        </Link>
                    ) : (
                        <div className="flex-1"></div>
                    )}
                    {page < totalPages ? (
                        <Link
                            className="flex-1 text-center"
                            href={`/posts?page=${page + 1}${
                                tagsStr !== "" ? `&tags=${tagsStr}` : ""
                            }`}
                        >
                            Next
                        </Link>
                    ) : (
                        <div className="flex-1"></div>
                    )}
                </div>
            </div>
        </div>
    );
}

export async function getStaticProps() {
    const postList = JSON.parse(fs.readFileSync("posts.json", "utf-8"));
    const markdowns = postList.map(
        (post: {
            title: string;
            description: string;
            tags: string[];
            date: string;
            fileName: string;
        }) => ({
            title: post.title,
            date: post.date,
            tags: post.tags ?? [],
            description: post.description,
            link: `/posts/${post.fileName.replace(".md", "")}`,
        })
    );

    return {
        props: {
            posts: markdowns,
        },
    };
}
