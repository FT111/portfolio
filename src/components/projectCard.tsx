import React from "react";
import Image from "next/image";
import ScrollCard from "@/components/scrollCard";
import { Project } from "@/lib/types";
import { ChevronLeft, ChevronRight } from "lucide-react";

// Object of stack title and an icon SVG

interface Props {
	project: Project;
	alternate?: boolean;
	children: React.ReactNode;
}

export default function ProjectCard({ children, ...props }: Props) {
	// Check if stack is being hovered
	const [isHovered, setIsHovered] = React.useState(false);

	// Handle the stack hover event
	const handleStackHover = () => {
		setIsHovered(!isHovered);
	};

	const chevronProps =
		"sm:inline hidden " +
		"transition-all duration-150 " +
		`${isHovered ? "opacity-0" : ""} `;

	return (
		<ScrollCard
			id={props.project.title}
			threshold={0.2}
			className={
				"bg-slate-50 border-slate-600 shadow-md border-0 w-full md:h-[30rem] min-h-[30rem] text-slate-900 rounded-2xl flex md:flex-row flex-col"
			}
		>
			{/* Stack and image section */}
			<div
				className={`${props.alternate ? "md:order-1" : ""} flex flex-col md:flex-row rounded-2xl basis-1/2`}
			>
				{props.project.imageHREF && (
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
								backgroundImage: `url(${props.project.blurredHREF})`,
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
								src={props.project.imageHREF}
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
								group transition-all duration-200 transform-gpu`}
					onMouseEnter={handleStackHover}
					onMouseLeave={handleStackHover}
				>
					<p
						className={
							"p-3 px-1.5 text-xl font-semibold bg-slate-200/50 backdrop-blur-xl sticky top-0 md:w-full text-center" +
							"  z-20 text-muted-foreground flex flex-row items-center justify-center"
						}
					>
						{props.alternate ? (
							<ChevronRight
								width={18}
								height={26}
								className={chevronProps + "order-1 -mr-1"}
							/>
						) : (
							<ChevronLeft
								width={18}
								height={26}
								className={chevronProps + "-ml-1"}
							/>
						)}
						Stack
					</p>

					{props.project.stack &&
						props.project.stack.map((stack, i) => (
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

			<div className={"basis-1/2 p-5 flex flex-col justify-between"}>
				<div className={`p-5 text-slate-900 flex flex-col h-full gap-3.5`}>
					{children}
				</div>
				{/*	Github URL */}
				<a
					href={props.project.githubURL}
					className={"justify-self-end self-end"}
				>
					<svg
						className={"scale-75"}
						width="98"
						height="96"
						xmlns="http://www.w3.org/2000/svg"
					>
						<path
							fill-rule="evenodd"
							clip-rule="evenodd"
							d="M48.854 0C21.839 0 0 22 0 49.217c0 21.756 13.993 40.172 33.405 46.69 2.427.49 3.316-1.059 3.316-2.362 0-1.141-.08-5.052-.08-9.127-13.59 2.934-16.42-5.867-16.42-5.867-2.184-5.704-5.42-7.17-5.42-7.17-4.448-3.015.324-3.015.324-3.015 4.934.326 7.523 5.052 7.523 5.052 4.367 7.496 11.404 5.378 14.235 4.074.404-3.178 1.699-5.378 3.074-6.6-10.839-1.141-22.243-5.378-22.243-24.283 0-5.378 1.94-9.778 5.014-13.2-.485-1.222-2.184-6.275.486-13.038 0 0 4.125-1.304 13.426 5.052a46.97 46.97 0 0 1 12.214-1.63c4.125 0 8.33.571 12.213 1.63 9.302-6.356 13.427-5.052 13.427-5.052 2.67 6.763.97 11.816.485 13.038 3.155 3.422 5.015 7.822 5.015 13.2 0 18.905-11.404 23.06-22.324 24.283 1.78 1.548 3.316 4.481 3.316 9.126 0 6.6-.08 11.897-.08 13.526 0 1.304.89 2.853 3.316 2.364 19.412-6.52 33.405-24.935 33.405-46.691C97.707 22 75.788 0 48.854 0z"
							fill="#24292f"
						/>
					</svg>
				</a>
			</div>
		</ScrollCard>
	);
}
