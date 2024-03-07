import { unified } from "unified";
import remarkParse from "remark-parse";
import remarkFrontmatter from "remark-frontmatter";
import remarkParseFrontmatter from "remark-parse-frontmatter";
import remarkStringify from "remark-stringify";
import fs from "fs";
import path from "path";

export function getMarkdownFrontmatter(string) {
    // With Unified, which is a lower-level API that remark uses internally.
    const fileOfUnified = unified()
        .use(remarkParse)
        .use(remarkStringify)
        .use(remarkFrontmatter, ["yaml", "toml"])
        .use(remarkParseFrontmatter)
        .processSync(string);

    return fileOfUnified.data.frontmatter;
}

if (import.meta.url.endsWith(process.argv[1])) {
    const files = fs.readdirSync("articles");
    let posts = [];
    files.map((fileName) => {
        const frontmatter = getMarkdownFrontmatter(fs.readFileSync(path.join("articles", fileName), "utf-8"));

        console.log(fileName);
        console.log(frontmatter);
        console.log("-----------------------------------");
        posts.push({
            title: frontmatter.title ?? "",
            date: frontmatter.date ?? new Date(),
            tags: frontmatter.tags ?? [],
            description: frontmatter.description ?? "This is a description",
            fileName: fileName,
        });

        posts = posts.sort((a, b) => new Date(a.date) - new Date(b.date));
    });

    fs.writeFileSync("posts.json", JSON.stringify(posts, null, 2), {
        encoding: "utf-8",
        flag: "w",
    });
}