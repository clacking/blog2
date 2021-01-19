import Link from 'next/link'
import Head from 'next/head';

export default function Index() {
	return (
		<main className="h-screen flex flex-col justify-center text-center">
			<h1 className="text-xl">clacking.net</h1>
			<div>
				<span className="p-2 m-1">
					<Link href="/blog">blog</Link>
				</span>
				<span className="p-2 m-1">
					<Link href="/about">about</Link>
				</span>
			</div>
		</main>
	);
}
