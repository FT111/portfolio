import Image from "next/image";
import ScrollCard from "@/components/scrollCard";
import React from "react";
import {
	Dialog,
	DialogContent,
	DialogDescription,
	DialogHeader,
	DialogTitle
} from "@/components/ui/dialog"
import {clsx} from "clsx";

interface SkillCardProps {
	skillTitle: string;
	skillColour: string;
	skillDescription: string;
	icon: string;
	children?: React.ReactNode;

}

export default function SkillCard({ skillTitle, skillColour, skillDescription, icon }: SkillCardProps) {
	const [isOpen, setIsOpen] = React.useState(false);

	return (
		<>
			<Dialog open={isOpen} onOpenChange={()=>{setIsOpen(!isOpen)}}>
				<DialogContent className={"bg-slate-50"}>
					<DialogHeader>
						<DialogTitle>{skillTitle}</DialogTitle>
						<DialogDescription>
							{skillDescription}
						</DialogDescription>
					</DialogHeader>
				</DialogContent>
			</Dialog>
			<ScrollCard onClick={() => setIsOpen(!isOpen)}
						className={clsx(
							"h-[10rem] cursor-pointer lg:grow-0 grow basis-1/3 md:basis-1/4 lg:basis-1/5",
							"transition-all text-white rounded-2xl outline outline-[3px]",
							"hover:outline-[5px] outline-slate-300",
							"hover:brightness-110",
							"hover:outline-accent/50",
							"shadow-md",
							skillColour
						)}>

				<h3 className={"text-xl font-semibold p-4"}>{skillTitle}</h3>

				{/* shows if icon exists */}
				<div className={"flex flex-col justify-center items-center w-full"}>
					{icon &&
						<Image src={icon} alt={icon + ' icon'}
							   width={70} height={70}/>}
				</div>
			</ScrollCard>
			</>
	);
}