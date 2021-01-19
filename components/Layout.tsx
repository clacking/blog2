import Link from 'next/link';

export default function Layout ({children}) {
    return (
        <div className="bg-white dark:bg-gray-800 dark:text-gray-200">
            <header className="w-full border-b py-4">
                <div className="flex px-4 mx-auto justify-between">
                    <h1 className="text-5xl transform rotate-180 hover:rotate-0">
                        <Link href="/">clakcing.net</Link>
                    </h1>
                    <p>
                        <Link href="/blog">blog</Link>
                        {' '}
                        <Link href="/about">about</Link>
                    </p>
                </div>
            </header>
            { children }
            <footer className="relative p-4">
                <p className="absolute p-4 right-0">Powered by <a href="https://nextjs.org/">Next.js</a></p>
            </footer>
        </div>
    )
}
