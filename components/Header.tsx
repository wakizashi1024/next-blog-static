import { useRouter } from "next/router";

import styles from "@/styles/Header.module.css";

export default function Header({ title }: { title: string }) {
    const router = useRouter();

    return (
        <header
            className={`prose dark:prose-invert min-w-[100%] min-h-[175px] m-0 p-0 flex flex-col ${styles.header}`}
        >
            <h1 className="flex-1 text-center"></h1>
            <h1
                className="flex-1 text-center cursor-pointer"
                onClick={() => router.push("/posts")}
            >
                {title}
            </h1>
        </header>
    );
}
