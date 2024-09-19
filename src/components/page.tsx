import React from "react";

interface Props {
  children: React.ReactNode;
  className?: string;
}

export default function Page({ children, ...props }: Props) {
  // Wraps each pages main content in a flex column
  return (
    <div className={"flex flex-col pt-8 gap-0 " + props.className}>
      {children}
    </div>
  );
}
