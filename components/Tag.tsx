import Link from "next/link";

export default function Tag({name, value, className: clz, href} : {name: string, value: string | number, className?: string, href?: string}) {
    if (href) {
        return (
            <Link
                className={`mx-1 mt-1 text-sm border rounded bg-gray-600 no-underline ${clz}`}
                href={href}
            >
                <span className="px-1">{name}</span>
                <span>|</span>
                <span className="px-1 bg-gray-400">{value}</span>
            </Link>
        );
    }

    return (
        <div
            className={`mx-1 mt-1 text-sm border rounded bg-gray-600 ${clz}`}
            key={name}
        >
            <span className="px-1">{name}</span>
            <span>|</span>
            <span className="px-1 bg-gray-400">{value}</span>
        </div>
    );
}
