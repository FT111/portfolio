import React, { useEffect, useState } from "react";
import SkillCard from "@/components/skillCard";

export default function SkillGrid({ skills }) {
  const [expandedCard, setExpandedCard] = useState<string | null>(null);

  useEffect(() => {
    console.log("Initial expandedCard state:", expandedCard);
  }, []);

  const handleExpand = (title: string) => {
    setExpandedCard((prev) => (prev === title ? null : title));
    console.log("Toggled expandedCard state:", expandedCard);
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
            isExpanded={expandedCard === skill.title}
            onExpand={() => handleExpand(skill.title)}
            onCollapse={() => setExpandedCard(null)}
          />
        ),
      )}
    </>
  );
}
