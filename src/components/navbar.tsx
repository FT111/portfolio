import Link from 'next/link';


export default function Navbar() {
	return (
		<nav className={"flex items-center sticky top-0 justify-between h-16" +
			" bg-white/60 backdrop-blur-2xl text-black shadow-sm font-geist"}>

			<div className="pl-8">
				<Link href="/">
					<p className="text-2xl font-bold">Freddie Taylor</p>
				</Link>
			</div>
			<div className="flex flex-row gap-3 pr-8">
				<Link href="/projects">
					<p className="p-4">Projects</p>
				</Link>

				<Link href="/about">
					<p className="p-4">About</p>
				</Link>
			</div>
		</nav>
	);
}