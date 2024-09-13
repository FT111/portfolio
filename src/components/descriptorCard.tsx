import {Card} from "@/components/ui/card";
import React from "react";
import Image from "next/image";
import ScrollCard from "@/components/scrollCard";

interface Props {
	children?: React.ReactNode;
	className?: string;
	imageHREF?: string;
	alternate?: boolean;
}

export default function DescriptorCard({ children, ...props }: Props) {

	return (
		<ScrollCard threshold={0.2} className={"bg-slate-50 w-full h-[30rem] rounded-2xl rounded-l-3xl border-0 flex sm:flex-row flex-col gap-4"}>
			{props.imageHREF && (
					<div className={`grid grid-cols-1 grid-rows-1 items-center ${props.alternate ? `sm:order-1 sm:rounded-tl-none sm:rounded-r-2xl` : `sm:rounded-tr-none sm:rounded-l-2xl`} ` +
						"rounded-t-2xl place-items-center justify-center bg-slate-200 align-middle w-full sm:w-1/2 overflow-hidden"}>

						<div style={{gridRow:1, gridColumn:1, backgroundImage: `url(${props.imageHREF})`, backgroundSize:'contain'}} className={"w-full h-full  blur-xl saturate-150 hue-rotate-15"} />
						<Image style={{gridRow:1, gridColumn:1}} className={"rounded-xl w-4/5 z-20 shadow-md"} src={props.imageHREF} alt={'Image of a project'} width={500} height={500} />
					</div>
			)}
			<div className={"grow p-10"}>
				{children}
			</div>
		</ScrollCard>
	);
}

