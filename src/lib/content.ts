export const skills = [
	{
		title: "Python",
		description:
			"A versatile programming language for writing logic and web APIs. \n\n It has been my go-to backend language for years and the one I have the most experience in.",
		colour: "bg-cyan-700",
		icon: "https://res.cloudinary.com/db2frz3sv/image/upload/v1726331282/PythonIcon_oh2hs2.png",
	},
	{
		title: "Svelte",
		description:
			"A minimal Javascript component framework. \n\n " +
			"My choice for building web apps due to its simplicity and speed. It abstracts away some complexities and boilerplate without sacrificing power.",
		colour: "bg-orange-600",
		icon: "https://res.cloudinary.com/db2frz3sv/image/upload/v1726331283/SvelteIcon_nydju3.svg",
	},
	{
		title: "React",
		description:
			"A JavaScript framework for building web apps. \n\n " +
			"I have used it for a small number of projects, but have a good understanding of the core concepts.",
		colour: "bg-blue-500",
		icon: "https://res.cloudinary.com/db2frz3sv/image/upload/v1726331282/ReactIcon_n8rlzk.svg",
	},
	{
		title: "SQL and relational databases",
		description:
			"I have previously used MySQL, SQL Server and SQLite. \n\n " +
			"I have limited experience with ORMs, having used some SQLAlchemy.",
		colour: "bg-slate-800",
	},
	{
		title: "SvelteKit",
		description:
			"A meta-framework for building web apps with Svelte. \n\n " + "",
		colour: "bg-orange-500",
		icon: "https://res.cloudinary.com/db2frz3sv/image/upload/v1726331283/SvelteIcon_nydju3.svg",
	},
	{
		title: "FastAPI",
		description:
			"FastAPI is a high-performance, web framework for building APIs with Python. \n\n" +
			"I've recently begun using it for its strong integration with Pyantic models and speed.",
		colour: "bg-teal-700",
		icon: "https://res.cloudinary.com/db2frz3sv/image/upload/v1726331281/FastAPIIcon_rl3qx9.svg",
	},
	{
		title: "Tailwind CSS",
		description:
			"I have used Tailwind to style most sites I have built. \n\n " +
			"It is a great CSS utility framework that for rapid development and avoiding stylesheet mess.",
		colour: "bg-cyan-800",
		icon: "https://res.cloudinary.com/db2frz3sv/image/upload/v1726331282/TailwindIcon_xtqpqb.svg",
	},
	{
		title: "TypeScript",
		description:
			"I have some experience with TypeScript and would like to use it for upcoming projects as it mitigates JavaScript's irritating lack of types.",
		colour: "bg-sky-700",
		icon: "https://res.cloudinary.com/db2frz3sv/image/upload/v1726331281/TypeScriptIcon_qtqu0r.png",
	},
];

export const projects = [
	{
		title: "Portfolio",
		description:
			"A portfolio website to showcase my projects. \n\n" +
			"The stack is excessive for a single page, but it serves as a tool to test new React technologies, as I usually use Svelte.",
		githubURL: "https://github.com/FT111/portfolio",
		stack: [
			{
				title: "React",
				icon: "https://res.cloudinary.com/db2frz3sv/image/upload/v1726331282/ReactIcon_n8rlzk.svg",
			},
			{
				title: "Next.js",
				icon: "https://res.cloudinary.com/db2frz3sv/image/upload/v1726331281/NextJSIcon_axledu.png",
			},
			{
				title: "TypeScript",
				icon: "https://res.cloudinary.com/db2frz3sv/image/upload/v1726331281/TypeScriptIcon_qtqu0r.png",
			},
			{
				title: "Vercel",
				icon: "https://res.cloudinary.com/db2frz3sv/image/upload/v1726333899/Vercel_logo_oobok8.svg",
			},
			{
				title: "Tailwind CSS",
				icon: "https://res.cloudinary.com/db2frz3sv/image/upload/v1726331282/TailwindIcon_xtqpqb.svg",
			},
		],
		image:
			"https://res.cloudinary.com/db2frz3sv/image/upload/v1726332716/portfolio_afx1dx.png",
		blurred:
			"https://res.cloudinary.com/db2frz3sv/image/upload/v1726332717/portfolioblur_mdlwo7.png",
	},
	{
		title: "eCommerce Web App",
		description:
			"*Currently in development* \n\n" +
			"The final project for my Computer Science A Level. \n\n" +
			"It is a fully functional eCommerce website with a Python backend and a Svelte frontend. \n\n" +
			"Features include user authentication, user product listings with variants/customisation, a shopping cart, and a checkout system. \n\n" +
			"The backend is a REST API built with FastAPI. ",
		githubURL: "https://github.com/FT111/OnlineStoreBackend",
		stack: [
			{
				title: "Svelte",
				icon: "https://res.cloudinary.com/db2frz3sv/image/upload/v1726331283/SvelteIcon_nydju3.svg",
			},
			{
				title: "SvelteKit",
				icon: "https://res.cloudinary.com/db2frz3sv/image/upload/v1726331283/SvelteIcon_nydju3.svg",
			},
			{
				title: "Python",
				icon: "https://res.cloudinary.com/db2frz3sv/image/upload/v1726331282/PythonIcon_oh2hs2.png",
			},
			{
				title: "FastAPI",
				icon: "https://res.cloudinary.com/db2frz3sv/image/upload/v1726331281/FastAPIIcon_rl3qx9.svg",
			},
			{
				title: "Tailwind CSS",
				icon: "https://res.cloudinary.com/db2frz3sv/image/upload/v1726331282/TailwindIcon_xtqpqb.svg",
			},
			{
				title: "SQLite",
				icon: "https://res.cloudinary.com/db2frz3sv/image/upload/v1726331282/SQLiteIcon_fysdul.svg",
			},
		],
		image:
			"https://res.cloudinary.com/db2frz3sv/image/upload/v1726332714/eCommerce_r63kqs.png",
		blurred:
			"https://res.cloudinary.com/db2frz3sv/image/upload/v1726332715/eCommerceblur_qvqk9z.png",
	},
	{
		title: "Cinema Booking System",
		description:
			"A booking system for a fictional cinema. \n\n" +
			"It is designed for cinema staff to book tickets for customers. \n\n" +
			"Staff can manage bookings and showings, along with viewing statistics and graphical seat maps. \n\n",
		githubURL: "https://github.com/FT111/bookingSystem",
		stack: [
			{
				title: "Python",
				icon: "https://res.cloudinary.com/db2frz3sv/image/upload/v1726331282/PythonIcon_oh2hs2.png",
			},
			{
				title: "Flask",
				icon: "https://res.cloudinary.com/db2frz3sv/image/upload/v1726331281/FlaskIcon_j7huim.svg",
			},
			{
				title: "Tailwind CSS",
				icon: "https://res.cloudinary.com/db2frz3sv/image/upload/v1726331282/TailwindIcon_xtqpqb.svg",
			},
			{
				title: "AWS RDS",
				icon: "https://res.cloudinary.com/db2frz3sv/image/upload/v1726331493/AWS_icon_shtjnu.png",
			},
		],
		image:
			"https://res.cloudinary.com/db2frz3sv/image/upload/v1726332713/BookingSystem_e1asmd.png",
		blurred:
			"https://res.cloudinary.com/db2frz3sv/image/upload/v1726332712/BookingSystemblur_e8vom9.png",
	},
];
