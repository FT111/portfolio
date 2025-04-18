"use client";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";

export default function Navbar() {
	const targetRef = useRef(null);
	const [isIntersecting, setIsIntersecting] = useState(false);

	useEffect(() => {
		const targetElement = document.getElementsByClassName("alternateNav");

		if (!targetElement) return;

		const observer = new IntersectionObserver(
			(entries) => {
				entries.forEach((entry) => {
					// Check if the target element is intersecting
					if (entry.isIntersecting) {
						setIsIntersecting(true); // Update the state
					} else {
						setIsIntersecting(false);
					}
				});
			},
			{
				threshold: 0.3, // Percentage of the target's visibility to trigger the observer
			},
		);

		for (let i = 0; i < targetElement.length; i++) {
			observer.observe(targetElement[i]);
		}

		return () => {
			for (let i = 0; i < targetElement.length; i++) {
				observer.unobserve(targetElement[i]);
			}
		};
	}, []);

	const linkClasses = `p-2 px-3 transition-all rounded-xl 
	${isIntersecting ? "hover:bg-slate-900/70" : "hover:bg-accent/30"}`;

	return (
		<nav
			ref={targetRef}
			className={`flex items-center sticky top-0 justify-between h-16 z-50 transition-colors " +
			" backdrop-blur-2xl text-black shadow-sm ${isIntersecting ? "bg-cyan-950/90 text-white" : "bg-slate-100/40"} `}
		>
			<div className="pl-8">
				<Link href="/">
					<p className="text-2xl font-bold hidden md:block">Frederick Taylor</p>
				</Link>
			</div>
			<div className="flex flex-row gap-3 pr-8">
				<Link href="/#projects">
					<p className={linkClasses}>Projects</p>
				</Link>

				<Link href="https://github.com/FT111">
					<p className={linkClasses}>Github</p>
				</Link>
			</div>
		</nav>
	);
}
