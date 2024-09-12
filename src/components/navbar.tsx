'use client'
import Link from 'next/link';
import { useEffect, useRef, useState } from 'react';


export default function Navbar() {
	const targetRef = useRef(null); // Reference to the target element
	const [isIntersecting, setIsIntersecting] = useState(false); // State to manage intersection

	useEffect(() => {
		const targetElement = document.getElementsByClassName('alternateNav'); // Element to observe

		if (!targetElement) return; // Exit if the target element doesn't exist

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
				threshold: 0.4, // Percentage of the target's visibility to trigger the observer
			}
		);

		for (let i = 0; i < targetElement.length; i++) {
			observer.observe(targetElement[i]); // Start observing the target element
		}

		// Clean up the observer on component unmount
		return () => {
			for (let i = 0; i < targetElement.length; i++) {
				observer.unobserve(targetElement[i]);
			}
		};
	}, []);


	return (
		<nav ref={targetRef} className={`flex items-center sticky top-0 justify-between h-16 z-50 transition-colors " +
			" backdrop-blur-2xl text-black shadow-sm ${isIntersecting ? 'bg-slate-700/80 text-white' : 'bg-slate-100/75'} `}>

			<div className="pl-8">
				<Link href="/">
					<p className="text-2xl font-bold">Freddie Taylor</p>
				</Link>
			</div>
			<div className="flex flex-row gap-3 pr-8">
				<Link href="/#projects" className={"scaleInUnderline"}>
					<p className="p-4">Projects</p>
				</Link>

				<Link href="/about" className={"scaleInUnderline"}>
					<p className="p-4">About</p>
				</Link>
			</div>
		</nav>
	);
}