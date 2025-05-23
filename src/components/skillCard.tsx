import Image from "next/image";
import ScrollCard from "@/components/scrollCard";
import React, { forwardRef, useImperativeHandle } from "react";
import { clsx } from "clsx";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";

import { Flip } from "gsap/Flip";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Observer } from "gsap/Observer";
import Markdown from "react-markdown";
import { Skill } from "@/lib/types";

gsap.registerPlugin(useGSAP, Flip, ScrollTrigger, Observer);
interface SkillCardProps {
	skill: Skill;
	isExpanded: boolean;
	expandedTitle: string | boolean;
	clickHandler: () => void;
	index: number;
}

export const SkillCard = forwardRef((props: SkillCardProps, ref) => {
	// eslint-disable-next-line @typescript-eslint/no-unused-vars
	const [_, colour, intensity] = props.skill.colour.split("-");
	const expandedID = `expanded-${props.skill.title.split(" ")[0]}`;
	const expandedHeaderID = `expandedHeader-${props.skill.title.split(" ")[0]}`;
	const baseID = `base-${props.skill.title.split(" ")[0]}`;

	const baseREF = React.useRef(null);
	const expandedREF = React.useRef(null);
	const expandedHeaderRef = React.useRef(null);

	useImperativeHandle(ref, () => ({
		flip: () => flip(),
	}));

	const flip = () => {
		const state = Flip.getState(`#${baseID}, #${expandedID}`);

		baseREF.current.classList.toggle("hidden");
		expandedREF.current.classList.toggle("hidden");

		Flip.from(state, {
			duration: 0.125,
			ease: "power2.inOut",
			zIndex: 40,
			fade: true,
			absolute: true,
		});
	};

	return (
		<ScrollCard
			threshold={0.5}
			className={`lg:grow-0 grow basis-1/3 md:basis-1/4 lg:basis-1/5 z-10 min-h-48 ${props.isExpanded ? "z-40" : ""}`}
		>
			<div className={"flex flex-col justify-center"}>
				<div
					ref={expandedREF}
					onClick={props.clickHandler}
					id={expandedID}
					data-flip-id={expandedID}
					className={`expandedCard absolute hidden 
						md:w-[140%] w-[120%] md:h-[130%]  md:-translate-x-12 translate-y-20 ${props.index % 2 === 0 ? "" : "-translate-x-8"} `}
				>
					<div
						className={clsx(`bg-slate-50 select-none cursor-pointer group w-full h-full rounded-2xl shadow-2xl shadow-slate-900/50 transition-all
       outline outline-[3px] hover:outline-[5px] outline-slate-300 hover:outline-accent/50`)}
					>
						{/* Cross SVG overlay */}
						<div
							className={
								"absolute flex w-full h-full p-5 justify-end align-bottom justify-items-end items-end"
							}
						>
							<svg
								xmlns="http://www.w3.org/2000/svg"
								fill="none"
								viewBox="0 0 24 24"
								stroke-width="1.5"
								stroke="currentColor"
								className="size-6 items-end opacity-50 bg-blend-lighten group-hover:opacity-100 transition-all duration-100"
							>
								<path
									stroke-linecap="round"
									stroke-linejoin="round"
									d="M6 18 18 6M6 6l12 12"
								/>
							</svg>
						</div>

						<h3
							ref={expandedHeaderRef}
							id={expandedHeaderID}
							className={`text-xl select-none transition-all font-semibold p-4 w-full text-slate-50
        bg-${colour}-${intensity} p-2 rounded-t-2xl`}
						>
							{props.skill.title}
						</h3>
						<Markdown className={"p-4 select-none"}>
							{props.skill.description}
						</Markdown>
					</div>
				</div>

				<div
					ref={baseREF}
					onClick={props.clickHandler}
					id={baseID}
					data-flip-id={expandedID}
					className={clsx(
						"h-[12rem] md:h-[10rem] cursor-pointer",
						"transition-all text-white rounded-2xl outline outline-[3px]",
						"hover:outline-[5px] outline-slate-300",
						"hover:brightness-110",
						"hover:outline-accent/50",
						"saturate-[80%]",
						"shadow-md",
						"group",
						"z-10",
						props.skill.colour,
					)}
				>
					<div
						className={
							"absolute flex w-full h-full p-4 justify-end align-bottom justify-items-end items-end"
						}
					>
						<svg
							xmlns="http://www.w3.org/2000/svg"
							fill="none"
							viewBox="0 0 24 24"
							stroke-width="1.5"
							stroke="currentColor"
							className="size-6 items-end opacity-50 bg-blend-lighten group-hover:opacity-100 transition-all duration-100"
						>
							<path
								stroke-linecap="round"
								className={"mix-blend-screen bg-blend-color-burn"}
								stroke-linejoin="round"
								d="m11.99 7.5 3.75-3.75m0 0 3.75 3.75m-3.75-3.75v16.499H4.49"
							/>
						</svg>
					</div>
					<h3 className={"text-xl font-semibold p-4"}>{props.skill.title}</h3>
					<div className={"flex flex-col justify-center items-center w-full"}>
						{props.skill.icon && (
							<Image
								src={props.skill.icon}
								alt={props.skill.icon + " icon"}
								width={70}
								height={70}
							/>
						)}
					</div>
					<div className={"hidden blur-lg "} data-flip-id={expandedID}>
						{props.skill.description}
					</div>
				</div>
			</div>
		</ScrollCard>
	);
});

SkillCard.displayName = "SkillCard";
export default SkillCard;
