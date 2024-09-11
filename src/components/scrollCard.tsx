import React from 'react';
import { useEffect, useRef, useState } from 'react';

interface Props {
	children: React.ReactNode;
	className?: string;
}

export default function ScrollCard({ children, ...props }: Props) {
	const [isVisible, setIsVisible] = useState(false); // State to track visibility
	const elementRef = useRef(null); // Ref for the target element

	useEffect(() => {
		const observer = new IntersectionObserver(
			([entry]) => {
				// Update state when the element enters or leaves the viewport
				if (entry.isIntersecting) {
					setIsVisible(true);
					observer.disconnect(); // Disconnect the observer
				}
			},
			{
				threshold: 0.5, // Adjust this value as needed
			}
		);

		const currentElement = elementRef.current; // Get the current element from ref

		if (currentElement) {
			observer.observe(currentElement); // Start observing the element
		}

		// Clean up observer on component unmount
		return () => {
			if (currentElement) {
				observer.unobserve(currentElement);
			}
		};
	}, []);

	const invisibleClasses = ' opacity-10 -translate-y-5 ';
	const visibleClasses = ' opacity-100 translate-y-0 ';
	let classes = 'transition-all duration-150 ' + invisibleClasses + (props.className || '');

	if (isVisible) {
		classes += visibleClasses;
		classes = classes.replace(invisibleClasses, '');
	}

	return (
		<div ref={elementRef} className={classes}>
			{children}
		</div>
	);
}