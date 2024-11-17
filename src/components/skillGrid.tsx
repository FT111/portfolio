import React, { useEffect, useState } from "react";
import SkillCard from "@/components/skillCard";

export default function SkillGrid({ skills }) {
	const [expandedCard, setExpandedCard] = useState<string | null | boolean>(
		null,
	);
	const [cardStates, setCardStates] = useState<{ [key: string]: boolean }>({});

	const refs = skills.reduce(
		(
			acc: { [key: string]: React.RefObject<HTMLDivElement> },
			skill: { title: string },
		) => {
			acc[skill.title] = React.createRef();
			return acc;
		},
		{},
	);

	useEffect(() => {
		const initialCardStates = skills.reduce(
			(acc: { [key: string]: boolean }, skill: { title: string }) => {
				acc[skill.title] = null;
				return acc;
			},
			{},
		);
		setCardStates(initialCardStates);
	}, [skills]);

	// Handle the click event for the card
	const handleClick = (title: string) => {
		// Toggle the card state
		setCardStates((prevCardStates) => ({
			...prevCardStates,
			[title]: !prevCardStates[title],
		}));
		refs[title].current.flip();

		// If the card is already expanded, collapse it
		if (expandedCard !== null && expandedCard !== title) {
			setCardStates((prevCardStates) => ({
				...prevCardStates,
				// @ts-expect-error ts is wrong
				[expandedCard]: false,
			}));
			if (typeof expandedCard === "string") {
				refs[expandedCard].current.flip();
			}
		}

		// Mark as expanded
		setExpandedCard((prevExpandedCard) => {
			if (prevExpandedCard === null || prevExpandedCard !== title) {
				return title;
			} else {
				return null;
			}
		});
	};

	return (
		<>
			{skills.map(
				(
					skill: {
						title: string;
						colour: string;
						description: string;
						icon: string;
					},
					index: React.Key,
				) => (
					<SkillCard
						key={index}
						skillTitle={skill.title}
						skillColour={skill.colour}
						skillDescription={skill.description}
						icon={skill.icon}
						isExpanded={cardStates[skill.title]}
						clickHandler={() => handleClick(skill.title)}
						expandedTitle={expandedCard}
						ref={refs[skill.title]}
					/>
				),
			)}
		</>
	);
}
