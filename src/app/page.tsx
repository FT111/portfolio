"use client";

import Section from "@/components/section";
import Page from "@/components/page";
import AutoCarousel from "@/components/carousel";
import React from "react";
import ProjectCard from "@/components/projectCard";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import SkillGrid from "@/components/skillGrid";

import { projects, skills } from "@/lib/content";
import Markdown from "react-markdown";

export default function App() {
	return (
		<Page>
			<Section className={"flex-col z-10"}>
				<h1
					className={
						"md:text-6xl text-5xl sm:tracking-tight tracking-tighter font-bold text-slate-900 " +
						"max-w-full md:leading-[4rem]"
					}
				>
					Hi, i&apos;m{" "}
					<span className={"text-accent stroke stroke-cyan-900"}>Freddie</span>.
					<span className={"font-semibold text-slate-500"}>
						{" "}
						I&apos;m a computer science student.
					</span>
				</h1>

				<div className={"sm:px-8"}>
					<div
						className={
							"bg-slate-200 h-[28rem] py-3 flex flex-row justify-center w-full rounded-2xl " +
							"shadow-md"
						}
					>
						<AutoCarousel>
							<div
								className={
									"w-full h-full flex flex-col justify-between bg-sky-800 text-slate-50 rounded-2xl p-8"
								}
							>
								<div className={"flex flex-row justify-between"}>
									<p className={"text-5xl font-bold"}>Latest project</p>
								</div>
							</div>

							<div
								className={
									"w-full h-full grid grid-cols-1 grid-rows-1 bg-slate-800 overflow-hidden text-slate-50 rounded-2xl justify-between"
								}
							>
								<div
									style={{
										gridRow: 1,
										gridColumn: 1,
										backgroundImage:
											"url('https://res.cloudinary.com/db2frz3sv/image/upload/v1726579887/plus_e5a2no.svg')",
										backgroundSize: "5%",
									}}
									className={"w-full h-full opacity-15"}
								/>

								<div
									style={{ gridRow: 1, gridColumn: 1 }}
									className={"flex flex-col justify-between p-14 z-10"}
								>
									<svg
										width="98"
										height="96"
										xmlns="http://www.w3.org/2000/svg"
									>
										<path
											fillRule="evenodd"
											clipRule="evenodd"
											d="M48.854 0C21.839 0 0 22 0 49.217c0 21.756 13.993 40.172 33.405 46.69 2.427.49 3.316-1.059 3.316-2.362 0-1.141-.08-5.052-.08-9.127-13.59 2.934-16.42-5.867-16.42-5.867-2.184-5.704-5.42-7.17-5.42-7.17-4.448-3.015.324-3.015.324-3.015 4.934.326 7.523 5.052 7.523 5.052 4.367 7.496 11.404 5.378 14.235 4.074.404-3.178 1.699-5.378 3.074-6.6-10.839-1.141-22.243-5.378-22.243-24.283 0-5.378 1.94-9.778 5.014-13.2-.485-1.222-2.184-6.275.486-13.038 0 0 4.125-1.304 13.426 5.052a46.97 46.97 0 0 1 12.214-1.63c4.125 0 8.33.571 12.213 1.63 9.302-6.356 13.427-5.052 13.427-5.052 2.67 6.763.97 11.816.485 13.038 3.155 3.422 5.015 7.822 5.015 13.2 0 18.905-11.404 23.06-22.324 24.283 1.78 1.548 3.316 4.481 3.316 9.126 0 6.6-.08 11.897-.08 13.526 0 1.304.89 2.853 3.316 2.364 19.412-6.52 33.405-24.935 33.405-46.691C97.707 22 75.788 0 48.854 0z"
											fill="white"
										/>
									</svg>

									<div
										className={
											"flex sm:flex-row flex-col justify-between gap-4 sm:items-end"
										}
									>
										<p className={"text-6xl font-bold"}>Github</p>
										<Link href={"https://github.com/FT111"}>
											<Button
												size={"lg"}
												variant={"outline"}
												className={"bg-slate-700/10 backdrop-blur"}
											>
												Visit
											</Button>
										</Link>
									</div>
								</div>
							</div>

							<div className={"w-full h-full bg-white rounded-2xl p-4"}>
								test
							</div>
						</AutoCarousel>
					</div>
				</div>
			</Section>

			<div className={"md:-mt-60 -mt-32"}>
				<svg
					id="wave"
					viewBox="0 0 1440 220"
					version="1.1"
					xmlns="http://www.w3.org/2000/svg"
				>
					<path
						className={"w-full fill-slate-100"}
						d="M0,176L120,165C240,154,480,132,720,132C960,132,1200,154,1440,157.7C1680,161,1920,147,2160,146.7C2400,147,2640,161,2880,154C3120,147,3360,117,3600,95.3C3840,73,4080,59,4320,47.7C4560,37,4800,29,5040,36.7C5280,44,5520,66,5760,80.7C6000,95,6240,103,6480,99C6720,95,6960,81,7200,73.3C7440,66,7680,66,7920,77C8160,88,8400,110,8640,128.3C8880,147,9120,161,9360,139.3C9600,117,9840,59,10080,47.7C10320,37,10560,73,10800,73.3C11040,73,11280,37,11520,36.7C11760,37,12000,73,12240,80.7C12480,88,12720,66,12960,58.7C13200,51,13440,59,13680,62.3C13920,66,14160,66,14400,77C14640,88,14880,110,15120,99C15360,88,15600,44,15840,29.3C16080,15,16320,29,16560,44C16800,59,17040,73,17160,80.7L17280,88L17280,220L17160,220C17040,220,16800,220,16560,220C16320,220,16080,220,15840,220C15600,220,15360,220,15120,220C14880,220,14640,220,14400,220C14160,220,13920,220,13680,220C13440,220,13200,220,12960,220C12720,220,12480,220,12240,220C12000,220,11760,220,11520,220C11280,220,11040,220,10800,220C10560,220,10320,220,10080,220C9840,220,9600,220,9360,220C9120,220,8880,220,8640,220C8400,220,8160,220,7920,220C7680,220,7440,220,7200,220C6960,220,6720,220,6480,220C6240,220,6000,220,5760,220C5520,220,5280,220,5040,220C4800,220,4560,220,4320,220C4080,220,3840,220,3600,220C3360,220,3120,220,2880,220C2640,220,2400,220,2160,220C1920,220,1680,220,1440,220C1200,220,960,220,720,220C480,220,240,220,120,220L0,220Z"
					></path>
				</svg>

				<Section id={"skills"} className={"flex-col bg-slate-100 py-32 z-0"}>
					<h2 className={"text-4xl font-semibold"}>Skills</h2>
					<div
						className={
							"flex flex-row flex-wrap gap-4 md:gap-8 transition-all transform-gpu duration-200 h-fit"
						}
					>
						<SkillGrid skills={skills} />
					</div>
				</Section>

				<div className={"bg-slate-800"}>
					<svg
						id="wave"
						className={"rotate-180"}
						viewBox="0 0 1440 220"
						version="1.1"
						xmlns="http://www.w3.org/2000/svg"
					>
						<path
							className={"w-full fill-slate-100"}
							d="M0,176L120,165C240,154,480,132,720,132C960,132,1200,154,1440,157.7C1680,161,1920,147,2160,146.7C2400,147,2640,161,2880,154C3120,147,3360,117,3600,95.3C3840,73,4080,59,4320,47.7C4560,37,4800,29,5040,36.7C5280,44,5520,66,5760,80.7C6000,95,6240,103,6480,99C6720,95,6960,81,7200,73.3C7440,66,7680,66,7920,77C8160,88,8400,110,8640,128.3C8880,147,9120,161,9360,139.3C9600,117,9840,59,10080,47.7C10320,37,10560,73,10800,73.3C11040,73,11280,37,11520,36.7C11760,37,12000,73,12240,80.7C12480,88,12720,66,12960,58.7C13200,51,13440,59,13680,62.3C13920,66,14160,66,14400,77C14640,88,14880,110,15120,99C15360,88,15600,44,15840,29.3C16080,15,16320,29,16560,44C16800,59,17040,73,17160,80.7L17280,88L17280,220L17160,220C17040,220,16800,220,16560,220C16320,220,16080,220,15840,220C15600,220,15360,220,15120,220C14880,220,14640,220,14400,220C14160,220,13920,220,13680,220C13440,220,13200,220,12960,220C12720,220,12480,220,12240,220C12000,220,11760,220,11520,220C11280,220,11040,220,10800,220C10560,220,10320,220,10080,220C9840,220,9600,220,9360,220C9120,220,8880,220,8640,220C8400,220,8160,220,7920,220C7680,220,7440,220,7200,220C6960,220,6720,220,6480,220C6240,220,6000,220,5760,220C5520,220,5280,220,5040,220C4800,220,4560,220,4320,220C4080,220,3840,220,3600,220C3360,220,3120,220,2880,220C2640,220,2400,220,2160,220C1920,220,1680,220,1440,220C1200,220,960,220,720,220C480,220,240,220,120,220L0,220Z"
						></path>
					</svg>
				</div>
			</div>

			<Section
				id={"projects"}
				className={
					"flex-col alternateNav bg-slate-800 py-32 text-slate-50 pt-16 gap-8 "
				}
			>
				<h2 className={"text-4xl font-semibold"}>Solo Projects</h2>
				<p>The projects below are either personal projects or for education.</p>
				<div className={"flex flex-col gap-24"}>
					{projects.map((project, i) => (
						<ProjectCard
							key={i}
							alternate={i % 2 === 0}
							project={{
								title: project.title,
								description: project.description,
								githubURL: project.githubURL,
								stack: project.stack,
								imageHREF: project.image,
								blurredHREF: project.blurred,
							}}
						>
							<h3 className={"text-2xl font-semibold"}>{project.title}</h3>
							<Markdown className={"text-lg leading-relaxed"}>
								{project.description}
							</Markdown>
						</ProjectCard>
					))}
				</div>
			</Section>
		</Page>
	);
}
