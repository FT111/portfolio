import React from "react";
import Image from "next/image";
import ScrollCard from "@/components/scrollCard";
import { ProjectStack } from "@/lib/types";

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
		<ScrollCard
			threshold={0.2}
			className={
				"bg-slate-50 border-slate-600 shadow-md border-0 w-full md:h-[30rem] min-h-[30rem] text-slate-900 rounded-2xl flex md:flex-row flex-col"
			}
		>
			{/* Stack and image section */}
			<div
				className={`${props.alternate ? "md:order-1" : ""} flex flex-col md:flex-row rounded-2xl basis-1/2`}
			>
				{props.imageHREF && (
					<div
						className={
							`grid grid-cols-1 basis-8/12 grid-rows-1 grow items-center ${props.alternate ? `md:order-2 sm:rounded-tl-none sm:rounded-r-2xl` : `sm:rounded-tr-none sm:rounded-l-2xl`} ` +
							"rounded-t-2xl place-items-center justify-center bg-slate-200 align-middle w-full overflow-hidden"
						}
					>
						<div
							style={{
								gridRow: 1,
								gridColumn: 1,
								backgroundImage: `url(${props.blurredHREF})`,
								backgroundSize: "cover",
							}}
							className={
								"w-full h-full bg-black saturate-150 brightness-75 hue-rotate-15"
							}
						/>
						<div
							style={{ gridRow: 1, gridColumn: 1 }}
							className={
								"p-8 transition-all h-full w-full grid items-center bg-none"
							}
						>
							<Image
								className={"rounded-xl z-20 h-auto w-full shadow-md"}
								src={props.imageHREF}
								alt={"Image of a project"}
								width={1920}
								height={1080}
							/>
						</div>
					</div>
				)}

				{/* Stack column */}
				<div
					className={`flex flex-row md:flex-col overflow-x-scroll md:overflow-y-scroll md:overflow-x-hidden bg-slate-100 order-0 ${props.alternate ? "md:order-1 " : "items-end"}
								group transition-all duration-250 transform-gpu`}
				>
					<p
						className={
							"p-3 text-xl font-semibold bg-slate-200/50 backdrop-blur-xl sticky top-0 md:w-full text-center  z-20 text-muted-foreground"
						}
					>
						Stack
					</p>
					{props.stack &&
						props.stack.map((stack, i) => (
							<div
								key={i}
								className={`flex w-20 h-auto gap-3 md:group-hover:w-56 items-center p-4 transition-all ${props.alternate ? "flex-row" : "flex-row-reverse"}  `}
							>
								<Image
									className={"  w-11  aspect-square  "}
									src={stack.icon}
									alt={stack.title}
									width={50}
									height={50}
								/>

								<p
									className={
										"hidden md:block opacity-0  group-hover:translate-x-0 group-hover:opacity-100" +
										` truncate text-slate-950 transition-all ${props.alternate ? "-translate-x-7" : "translate-x-7"}`
									}
								>
									{stack.title}
								</p>
							</div>
						))}
				</div>
			</div>

			<div className={"basis-1/2 p-10 text-slate-900"}>{children}</div>
		</ScrollCard>
	);
}
