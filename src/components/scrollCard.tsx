import React from 'react';
import { useEffect, useRef, useState } from 'react';

interface Props {
	children: React.ReactNode;
	className?: string;
	threshold?: number;
}

export default function ScrollCard({ children, ...props }: Props) {
	const [isVisible, setIsVisible] = useState(false); // State to track visibility
	const elementRef = useRef(null); // Ref for the target element

	const thresholdVal = props.threshold || 0.5; // Default threshold value

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
				threshold: thresholdVal, // Adjust this value as needed
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

	const invisibleClasses = ' opacity-0 blur-sm -translate-y-10 ';
	const visibleClasses = ' opacity-100 blur-none translate-y-0 ';
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