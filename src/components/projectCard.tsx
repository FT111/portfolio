import React from "react";
import Image from "next/image";
import ScrollCard from "@/components/scrollCard";
import {ProjectStack} from "@/lib/types";

// Object of stack title and an icon SVG

interface Props {
	children?: React.ReactNode;
	className?: string;
	stack?: ProjectStack;
	imageHREF?: string;
	blurredHREF?: string;
	alternate?: boolean;
}

export default function ProjectCard({ children, ...props }: Props) {

	return (
		<ScrollCard threshold={0.2} className={"bg-slate-50 w-full h-[30rem] text-slate-900 rounded-2xl rounded-l-3xl flex md:flex-row flex-col"}>
			{props.imageHREF && (
					<div className={`grid grid-cols-1 basis-1/2 grid-rows-1 items-center ${props.alternate ? `md:order-2 sm:rounded-tl-none sm:rounded-r-2xl` : `sm:rounded-tr-none sm:rounded-l-2xl`} ` +
						"rounded-t-2xl place-items-center justify-center bg-slate-200 align-middle md:w-1/2 w-full overflow-hidden"}>

						<div style={{gridRow:1, gridColumn:1, backgroundImage: `url(${props.blurredHREF})`, backgroundSize:'cover'}} className={"w-full h-full bg-black saturate-150 brightness-75 hue-rotate-15"} />
						<ScrollCard style={{gridRow:1, gridColumn:1}} className={"p-8 transition-all h-full w-full grid items-center bg-none"}>
							<Image className={"rounded-xl z-20 h-auto w-full shadow-md"} src={props.imageHREF} alt={'Image of a project'} width={1920} height={1080} />
						</ScrollCard>
					</div>
			)}

			{/* Stack column */}
			<div className={`flex flex-row md:flex-col overflow-x-scroll md:overflow-y-scroll px-2 bg-slate-100 ${props.alternate ? 'md:order-1' : ''}
							group md:hover:w-fit items-center transition-all duration-250 transform-gpu`}>
				<p className={"p-3 text-xl font-semibold text-muted-foreground"}>Stack</p>
				{props.stack && (
					props.stack.map((stack, i) => (
						<div key={i} className={"flex flex-row w-20 group-hover:gap-3 md:group-hover:w-48 items-center p-4 transition-all "}>
							<Image src={stack.icon} alt={stack.title + ' icon'} width={50} height={50} />

							<p className={"hidden md:block opacity-0 translate-x-3 group-hover:translate-x-0 group-hover:opacity-100" +
								" truncate text-slate-950 transition-all"}>{stack.title}</p>
						</div>
					))
				)}
			</div>

			<div className={"grow p-10 text-slate-900"}>
				{children}
			</div>
		</ScrollCard>
	);
}

