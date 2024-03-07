import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Nav from "@/components/Nav";
import { ReactElement, ReactNode } from "react";
import { NextPage } from "next";
import App, { AppContext, AppInitialProps, AppProps } from "next/app";
import posts from "@/posts.json";

import "@/styles/globals.css";
import styles from "@/styles/MyApp.module.css";

interface AppOwnProps {
    title: string;
    author: string;
    tags: { name: string; count: number }[];
}

type AppPropsWithLayout = AppProps & {
    Component: NextPageWithLayout;
};

export type NextPageWithLayout<P = {}, IP = P> = NextPage<P, IP> & {
    getLayout?: (page: ReactElement) => ReactNode;
};

export default function MyApp({
    Component,
    pageProps,
    title,
    author,
    tags,
}: AppPropsWithLayout & AppOwnProps) {
    if (Component.getLayout) {
        return Component.getLayout(<Component {...pageProps} />);
    }

    return (
        <div className="flex flex-col">
            <Header title={title} />
            <div className={`flex flex-col lg:flex-row ${styles.content}`}>
                <Nav tags={tags} />
                <Component {...pageProps} />
            </div>
            <Footer author={author} />
        </div>
    );
}

MyApp.getInitialProps = async (
    context: AppContext
): Promise<AppOwnProps & AppInitialProps> => {
    const ctx = await App.getInitialProps(context);

    const tags: { name: string; count: number }[] = [];
    for (const post of posts) {
        for (const tag of post.tags) {
            const _tag = tags.find((t) => t.name === tag);
            if (_tag) {
                _tag.count++;
            } else {
                tags.push({
                    name: tag,
                    count: 1,
                });
            }
        }
    }

    return {
        ...ctx,
        title: process.env.BLOG_TITLE ?? "",
        author: process.env.BLOG_AUTHOR ?? "",
        tags: tags,
    };
};
