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
		<ScrollCard threshold={0.2} className={"bg-slate-50 w-full h-[30rem] rounded-2xl rounded-l-3xl border-0 flex sm:flex-row flex-col"}>
			{props.imageHREF && (
					<div className={`grid grid-cols-1 min-w-fit grid-rows-1 items-center ${props.alternate ? `sm:order-2 sm:rounded-tl-none sm:rounded-r-2xl` : `sm:rounded-tr-none sm:rounded-l-2xl`} ` +
						"rounded-t-2xl place-items-center justify-center bg-slate-200 align-middle w-full sm:w-1/2 overflow-hidden"}>

						<div style={{gridRow:1, gridColumn:1, backgroundImage: `url(${props.blurredHREF})`, backgroundSize:'cover'}} className={"w-full h-full bg-black saturate-150 brightness-75 hue-rotate-15"} />
						<Image style={{gridRow:1, gridColumn:1}} className={"rounded-xl w-4/5 z-20 sm:m-0 m-2 shadow-md"} src={props.imageHREF} alt={'Image of a project'} width={500} height={500} />
					</div>
			)}

			{/* Stack column */}

			<div className={`overflow-y-scroll px-2 bg-slate-100 ${props.alternate ? 'order-1' : ''}
							group hover:w-fit transition-all transform-gpu
			`}>
				{props.stack && (
					props.stack.map((stack, i) => (
						<div key={i} className={"flex flex-row w-20 group-hover:gap-3 group-hover:w-48 items-center p-4 transition-all "}>
							<Image src={'/assets/icons/' + stack.icon} alt={stack.title + ' icon'} width={50} height={50} />

							<p className={"opacity-0 translate-x-3 group-hover:translate-x-0 group-hover:opacity-100 text-slate-950 transition-all"}>{stack.title}</p>
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

