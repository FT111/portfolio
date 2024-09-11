
import React from "react";

interface Props {
	children: React.ReactNode;
	className?: string;
}

export default function Page({ children, ...props }: Props) {
	// Wraps each pages main content in a flex column
	return (
		<div className={"flex flex-col gap-8 pt-8 "
			+ props.className }>
			{children}
		</div>
	);
}