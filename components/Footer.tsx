import styles from '@/styles/Footer.module.css'

export default function Footer({author}: {author: string}) {
    return (
        <footer className={`prose dark:prose-invert min-w-[100%] min-h-[150px] m-0 p-0 flex flex-col justify-center ${styles.footer}`}>
            <p className="text-center mt-4 mb-0">&copy; 2024 {author}. copyright.</p>
            <p className="text-center mt-0 mb-2"><a href="#">About</a>&nbsp;&nbsp;<a href="#">Articles</a>&nbsp;&nbsp;<a href="#">Contact</a></p>
        </footer>
    )
}