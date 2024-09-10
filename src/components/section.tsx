
import React from "react";

interface Props {
	children: React.ReactNode;
	className?: string;
}

export default function Section({ children, ...props }: Props) {
	// Wraps each section in a flex row
  return (
	<div className={"text-gray-600 body-font flex gap-8" +
		" min-h-32 lg:px-32 md:px-20 sm:px-4 px-4 "
		+ props.className }>
	  {children}
	</div>
  );
}