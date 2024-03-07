import { ReactElement } from "react";
import Link from "next/link";

interface HomePageProps {
    title: string | null;
    subtitle: string | null;
}

export default function Home({ title, subtitle }: HomePageProps) {
    return (
        <main className="prose dark:prose-invert flex min-w-max min-h-screen flex-col items-center justify-center mx-auto p-24 cursor-pointer">
            {title ? <h1 className="font-bold mb-4">{title}</h1> : null}
            {subtitle ? <h5 className=" italic">{subtitle}</h5> : null}
            <h4 className="mt-2">
                <Link href="/posts">-- Enter --</Link>
            </h4>
        </main>
    );
}

Home.getLayout = function getLayout(page: ReactElement) {
    return page;
};

export async function getStaticProps() {
    return {
        props: {
            title: process.env.BLOG_TITLE ?? null,
            subtitle: process.env.BLOG_SUBTITLE ?? null,
        },
    };
}
