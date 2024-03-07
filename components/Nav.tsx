import Tag from "@/components/Tag";

export default function Nav({
    tags = [
        { name: "JS", count: 10 },
        { name: "C#", count: 5 },
        { name: "C++", count: 3 },
        { name: "Python", count: 2 },
        { name: "Java", count: 1 },
        { name: "C", count: 1 },
        { name: "Go", count: 1 },
        { name: "Rust", count: 1 },
        { name: "Ruby", count: 1 },
        { name: "PHP", count: 1 },
        { name: "Swift", count: 1 },
        { name: "Kotlin", count: 1 },
        { name: "Dart", count: 1 },
        { name: "R", count: 1 },
    ],
}: {
    tags?: { name: string; count: number }[];
}) {
    return (
        <nav className="w-full max-w-full lg:max-w-80 bg-gray-200 dark:bg-gray-900 flex flex-col">
            <section className="prose dark:prose-invert flex-none lg:mb-4">
                <div className="flex flex-row sm:flex-col items-center my-2">
                    <div className="mx-1 font-bold text-xl">Tags</div>
                    <div className="flex flex-row flex-wrap">
                        {tags.map((tag) => (
                            <Tag
                                key={tag.name}
                                name={tag.name}
                                value={tag.count}
                                href={`/posts?tags=${tag.name}`}
                            />
                        ))}
                    </div>
                </div>
            </section>
            <div className="w-0 sm:w-full bg-gray-50 dark:bg-gray-700 grow"></div>
        </nav>
    );
}
