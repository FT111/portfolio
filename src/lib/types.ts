export type ProjectStack = Array<{
	title: string;
	icon: string;
}>;

export type Project = {
	title: string;
	description: string;
	stack: ProjectStack;
	imageHREF: string;
	blurredHREF: string;
	githubURL: string;
};

export type Skill = {
	title: string;
	colour: string;
	description: string;
	icon: string;
};
