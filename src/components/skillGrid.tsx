import React, { useEffect, useState } from "react";
import SkillCard from "@/components/skillCard";

export default function SkillGrid({ skills }) {
	const [expandedCard, setExpandedCard] = useState<string | null>(null);
	const [cardStates, setCardStates] = useState<{ [key: string]: boolean }>({});

	useEffect(() => {
		const initialCardStates = skills.reduce(
			(acc: { [key: string]: boolean }, skill: { title: string }) => {
				acc[skill.title] = false;
				return acc;
			},
			{},
		);
		setCardStates(initialCardStates);
	}, [skills]);

	// Handle the click event for the card
	const handleClick = (title: string) => {
		console.log(`Clicked ${title}!!!!`);

		// Toggle the card state
		setCardStates((prevCardStates) => ({
			...prevCardStates,
			[title]: !prevCardStates[title],
		}));

		// If the card is already expanded, collapse it
		if (expandedCard !== null && expandedCard !== title) {
			setCardStates((prevCardStates) => ({
				...prevCardStates,
				[expandedCard]: false,
			}));
			console.log(`Collapsing card: ${expandedCard}`);
		}

		// Mark as expanded
		setExpandedCard((prevExpandedCard) => {
			if (prevExpandedCard === null || prevExpandedCard !== title) {
				console.log(`Expanding card: ${title}`);
				return title;
			} else {
				console.log(`Set expanded card to null`);
				return null;
			}
		});
	};

	// Log the state changes
	useEffect(() => {
		console.info("Current card states: ", cardStates);
		console.log("Expanded card: ", expandedCard);
		console.log("------------------------------------------------------");
	}, [cardStates, expandedCard]);

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
					/>
				),
			)}
		</>
	);
}
