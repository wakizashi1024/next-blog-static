import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import remarkMath from "remark-math";
import rehypeKatex from "rehype-katex";
// import rehypeTruncate from 'rehype-truncate'
import remarkFrontmatter from "remark-frontmatter";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { a11yDark } from "react-syntax-highlighter/dist/cjs/styles/prism";
import fs from "fs";
import { getMarkdownFrontmatter } from "@/generate-res.mjs";

import "katex/dist/katex.min.css";

interface CodeProps {
    node?: any;
    className?: any;
    children?: any;
}

export default function PostPage({ post: markdown, frontmatter, defaultAuthor }: { post: string, frontmatter: any, defaultAuthor: string }) {
    return (
        <article className="prose dark:prose-invert mx-auto p-4">
            <h1 className="font-bold text-center">{frontmatter.title}</h1>
            <hr />
            <ReactMarkdown
                remarkPlugins={[remarkGfm, remarkFrontmatter, remarkMath]}
                rehypePlugins={[rehypeKatex]}
                components={{
                    code({ node, className, children, ...props }: CodeProps) {
                        const match = /language-(\w+)/.exec(className || "");
                        return match ? (
                            <SyntaxHighlighter
                                style={a11yDark}
                                language={match[1]}
                                PreTag="div"
                                {...props}
                            >
                                {String(children).replace(/\n$/, "")}
                            </SyntaxHighlighter>
                        ) : (
                            <code className="md-post-code" {...props}>
                                {children}
                            </code>
                        );
                    },
                }}
                urlTransform={(url, key, node) =>
                    node.tagName === "img" ? url.replace("../public", "") : url
                }
            >
                {markdown}
            </ReactMarkdown>
            <div className="font-bold italic underline text-md text-right">{frontmatter.author ?? defaultAuthor} @{frontmatter.date}</div>
        </article>
    );
}

export async function getStaticPaths() {
    const files = fs.readdirSync("articles");
    return {
        paths: [
            ...files.map((fileName) => ({
                params: {
                    postName: fileName.replace(".md", ""),
                },
            })),
        ],
        fallback: false,
    };
}

export async function getStaticProps(context: {
    params: { postName: string };
}) {
    const { postName } = context.params;
    const markdown = fs.readFileSync(`articles/${postName}.md`, "utf-8");
    const frontmatter = getMarkdownFrontmatter(markdown);

    return {
        props: {
            post: markdown,
            frontmatter: frontmatter,
            defaultAuthor: process.env.BLOG_AUTHOR ?? ""
        },
    };
}
