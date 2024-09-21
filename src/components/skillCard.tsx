import Image from "next/image";
import ScrollCard from "@/components/scrollCard";
import React from "react";
import {clsx} from "clsx";
import {gsap} from "gsap";
import {useGSAP} from "@gsap/react";

import {Flip} from "gsap/Flip";
import {ScrollTrigger} from "gsap/ScrollTrigger";
import {Observer} from "gsap/Observer";

gsap.registerPlugin(useGSAP, Flip, ScrollTrigger, Observer);

interface SkillCardProps {
	skillTitle: string;
	skillColour: string;
	skillDescription: string;
	icon: string;
	children?: React.ReactNode;
}

export default function SkillCard({
									  skillTitle,
									  skillColour,
									  skillDescription,
									  icon,
								  }: SkillCardProps) {
	const [isOpen, setIsOpen] = React.useState(false);
	const [_, colour, intensity] = skillColour.split("-");
	const expandedID = `expanded-${skillTitle}`;
	const baseID = `base-${skillTitle}`;

	const baseREF = React.useRef(null);
	const expandedREF = React.useRef(null);

	const expandCard = () => {
		const state = Flip.getState(`#${baseID}`);

		setIsOpen(!isOpen);
		baseREF.current.style.display="none";
		expandedREF.current.style.display="block";

		Flip.from(state, {
			targets: expandedREF.current,
			duration: 0.5,
			ease: "power2.inOut",
			opacity: 0,
			stagger: 0.1,
		})

	};

	return (
		<>
			{/*<Dialog*/}
			{/*    open={isOpen}*/}
			{/*    onOpenChange={() => {*/}
			{/*      setIsOpen(!isOpen);*/}
			{/*    }}*/}
			{/*>*/}
			{/*  <DialogContent*/}
			{/*      className={`bg-slate-50 border-${colour}-${intensity} border-0 `}*/}
			{/*  >*/}
			{/*    <DialogHeader*/}
			{/*        className={`p-6 ${skillColour} bg-opacity-70 rounded-t-lg fill-slate-50 text-slate-50 `}*/}
			{/*    >*/}
			{/*      <DialogTitle>{skillTitle}</DialogTitle>*/}
			{/*    </DialogHeader>*/}

			{/*    <DialogDescription className={"p-6"}>*/}
			{/*      {skillDescription}*/}
			{/*    </DialogDescription>*/}
			{/*  </DialogContent>*/}
			{/*</Dialog>*/}
			<ScrollCard
				threshold={0.5}
				className={"lg:grow-0 grow basis-1/3 md:basis-1/4 lg:basis-1/5"}

			>
				<div
					ref={baseREF}
					onClick={expandCard}
					id={baseID}
					data-flip-id={expandedID}
					className={clsx(
						"h-[10rem] cursor-pointer",
						"transition-all text-white rounded-2xl outline outline-[3px]",
						"hover:outline-[5px] outline-slate-300",
						"hover:brightness-110",
						"hover:outline-accent/50",
						"shadow-md",
						"group",
						skillColour
					)}>

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

					<h3 className={"text-xl font-semibold p-4"}>{skillTitle}</h3>

					{/* shows if icon exists */}
					<div className={"flex flex-col justify-center items-center w-full"}>
						{icon && (
							<Image src={icon} alt={icon + " icon"} width={70} height={70}/>
						)}
					</div>

				</div>
			</ScrollCard>
			<div
				ref={expandedREF}
				id={expandedID} data-flip-id={expandedID}
				className={"expandedCard scale-125 absolute bg-primary hidden w-full h-full"}>
				<p className={"text-2xl font-bold"}>Freddie Taylor</p>
			</div>


		</>
	);
}