'use client'
import Section from "@/components/section";
import Page from "@/components/page";
import AutoCarousel from "@/components/carousel";
import React from "react";
import ScrollCard from "@/components/scrollCard";
import Image from "next/image";
import ProjectCard from "@/components/projectCard";
import {ProjectStack} from "@/lib/types";


export default function Home() {

    const skills = [
        {'title': 'Python', 'description': 'Python is a backend programming language for writing logic and web APIs', 'colour': 'bg-cyan-700', 'icon': 'PythonIcon.png'},
        {'title':'React', 'description':'A JavaScript library for building user interfaces', 'colour':'bg-blue-500', 'icon': 'ReactIcon.svg'},
        {'title': 'Svelte', 'description': 'Cybernetically enhanced web apps', 'colour': 'bg-orange-600', 'icon': 'SvelteIcon.svg'},
        {'title':'SQL and relational databases', 'description':'SQL and relational databases.', 'colour':'bg-slate-800'},
        {'title': 'SvelteKit', 'description': 'The official Svelte framework', 'colour':'bg-orange-500', 'icon': 'SvelteIcon.svg'},
        {'title': 'FastAPI', 'description': 'FastAPI is a modern, high-performance, web framework for building APIs with Python.', 'colour':'bg-teal-700', 'icon': 'FastAPIIcon.svg'},
        {'title':'Tailwind CSS', 'description':'A utility-first CSS framework for rapidly building custom designs', 'colour':'bg-cyan-800', 'icon': 'TailwindIcon.svg'},
        {'title':'TypeScript', 'description':'TypeScript is a typed superset of JavaScript that compiles to plain JavaScript.', 'colour':'bg-sky-700', 'icon': 'TypeScriptIcon.png'},
    ]

    const projects = [
        {'title': 'Portfolio', 'description': 'A portfolio website to showcase my projects', 'stack': [
                {'title': 'React', 'icon': 'ReactIcon.svg'},
                {'title': 'Next.js', 'icon': 'NextJSIcon.png'},
                {'title': 'Tailwind CSS', 'icon': 'TailwindIcon.svg'},
            ], 'image': 'portfolio'},
        {'title': 'eCommerce', 'description': 'An eCommerce website for selling products', 'stack': [
                {'title': 'Svelte', 'icon': 'SvelteIcon.svg'},
                {'title': 'SvelteKit', 'icon': 'SvelteIcon.svg'},
                {'title': 'Python', 'icon': 'PythonIcon.png'},
                {'title': 'FastAPI', 'icon': 'FastAPIIcon.svg'},
                {'title': 'Tailwind CSS', 'icon': 'TailwindIcon.svg'},
                {'title': 'SQLite', 'icon': 'SQLiteIcon.svg'},

            ], 'image': 'eCommerce'},
        {'title': 'Booking System', 'description': 'A booking system for booking appointments', 'stack': [
                {'title': 'Python', 'icon': 'PythonIcon.png'},
                {'title': 'Flask', 'icon': 'FlaskIcon.svg'},
                {'title': 'Tailwind CSS', 'icon': 'TailwindIcon.svg'},
                {'title': 'AWS RDS', 'icon': 'AWSIcon.svg'},
            ], 'image': 'BookingSystem'}]


    return (
      <Page>

          <Section className={"flex-col z-10 "}>
              <h1 className={"md:text-6xl text-5xl tracking-tight font-bold text-slate-900 " +
                  "max-w-full md:leading-[4rem]"}>Hi, i'm <span className={"text-accent stroke stroke-cyan-900"}>Freddie</span>.
                  <span className={"font-semibold text-slate-500"}> I'm a computer science student.</span>
              </h1>

              <div className={"bg-slate-300 h-[28rem] flex flex-row justify-center w-full rounded-2xl " +
                  "shadow-md"}>
                  <AutoCarousel>
                      <div className={"w-full h-full bg-white rounded-2xl p-4"}>test</div>
                      <div className={"w-full h-full bg-white rounded-2xl p-4"}>test</div>
                      <div className={"w-full h-full bg-white rounded-2xl p-4"}>test</div>
                  </AutoCarousel>
              </div>
          </Section>

          <div className={"md:-mt-60 -mt-32"}>
              <svg id="wave" viewBox="0 0 1440 220" version="1.1"
                   xmlns="http://www.w3.org/2000/svg">

                  <path className={"w-full fill-slate-100"}
                        d="M0,176L120,165C240,154,480,132,720,132C960,132,1200,154,1440,157.7C1680,161,1920,147,2160,146.7C2400,147,2640,161,2880,154C3120,147,3360,117,3600,95.3C3840,73,4080,59,4320,47.7C4560,37,4800,29,5040,36.7C5280,44,5520,66,5760,80.7C6000,95,6240,103,6480,99C6720,95,6960,81,7200,73.3C7440,66,7680,66,7920,77C8160,88,8400,110,8640,128.3C8880,147,9120,161,9360,139.3C9600,117,9840,59,10080,47.7C10320,37,10560,73,10800,73.3C11040,73,11280,37,11520,36.7C11760,37,12000,73,12240,80.7C12480,88,12720,66,12960,58.7C13200,51,13440,59,13680,62.3C13920,66,14160,66,14400,77C14640,88,14880,110,15120,99C15360,88,15600,44,15840,29.3C16080,15,16320,29,16560,44C16800,59,17040,73,17160,80.7L17280,88L17280,220L17160,220C17040,220,16800,220,16560,220C16320,220,16080,220,15840,220C15600,220,15360,220,15120,220C14880,220,14640,220,14400,220C14160,220,13920,220,13680,220C13440,220,13200,220,12960,220C12720,220,12480,220,12240,220C12000,220,11760,220,11520,220C11280,220,11040,220,10800,220C10560,220,10320,220,10080,220C9840,220,9600,220,9360,220C9120,220,8880,220,8640,220C8400,220,8160,220,7920,220C7680,220,7440,220,7200,220C6960,220,6720,220,6480,220C6240,220,6000,220,5760,220C5520,220,5280,220,5040,220C4800,220,4560,220,4320,220C4080,220,3840,220,3600,220C3360,220,3120,220,2880,220C2640,220,2400,220,2160,220C1920,220,1680,220,1440,220C1200,220,960,220,720,220C480,220,240,220,120,220L0,220Z"></path>
              </svg>

              <Section className={"flex-col bg-slate-100 py-32 z-0"}>

                  <h2 className={"text-4xl font-semibold"}>Skills</h2>
                  <div className={"flex flex-row flex-wrap gap-4 md:gap-8 transition-all transform-gpu duration-200"}>
                      {skills.map((skill, i) => (
                          <ScrollCard key={i}
                                      className={"h-[10rem] lg:grow-0 grow basis-1/3 md:basis-1/4 lg:basis-1/5 " +
                                          "transition-all text-white rounded-2xl shadow-sm  " + skill.colour}>

                              <h3 className={"text-xl font-semibold p-4"}>{skill.title}</h3>

                              {/* shows if icon exists */}
                              <div className={"flex flex-col justify-center items-center w-full"}>
                                  {skill.icon &&
                                      <Image src={'/assets/icons/' + skill['icon']} alt={skill.title + ' icon'}
                                             width={70} height={70}/>}
                              </div>
                          </ScrollCard>
                      ))}
                  </div>
              </Section>

              <div className={"bg-slate-800"}>
                  <svg id="wave" className={"rotate-180"} viewBox="0 0 1440 220" version="1.1"
                       xmlns="http://www.w3.org/2000/svg">

                      <path  className={"w-full fill-slate-100"}
                            d="M0,176L120,165C240,154,480,132,720,132C960,132,1200,154,1440,157.7C1680,161,1920,147,2160,146.7C2400,147,2640,161,2880,154C3120,147,3360,117,3600,95.3C3840,73,4080,59,4320,47.7C4560,37,4800,29,5040,36.7C5280,44,5520,66,5760,80.7C6000,95,6240,103,6480,99C6720,95,6960,81,7200,73.3C7440,66,7680,66,7920,77C8160,88,8400,110,8640,128.3C8880,147,9120,161,9360,139.3C9600,117,9840,59,10080,47.7C10320,37,10560,73,10800,73.3C11040,73,11280,37,11520,36.7C11760,37,12000,73,12240,80.7C12480,88,12720,66,12960,58.7C13200,51,13440,59,13680,62.3C13920,66,14160,66,14400,77C14640,88,14880,110,15120,99C15360,88,15600,44,15840,29.3C16080,15,16320,29,16560,44C16800,59,17040,73,17160,80.7L17280,88L17280,220L17160,220C17040,220,16800,220,16560,220C16320,220,16080,220,15840,220C15600,220,15360,220,15120,220C14880,220,14640,220,14400,220C14160,220,13920,220,13680,220C13440,220,13200,220,12960,220C12720,220,12480,220,12240,220C12000,220,11760,220,11520,220C11280,220,11040,220,10800,220C10560,220,10320,220,10080,220C9840,220,9600,220,9360,220C9120,220,8880,220,8640,220C8400,220,8160,220,7920,220C7680,220,7440,220,7200,220C6960,220,6720,220,6480,220C6240,220,6000,220,5760,220C5520,220,5280,220,5040,220C4800,220,4560,220,4320,220C4080,220,3840,220,3600,220C3360,220,3120,220,2880,220C2640,220,2400,220,2160,220C1920,220,1680,220,1440,220C1200,220,960,220,720,220C480,220,240,220,120,220L0,220Z"></path>
                  </svg>
              </div>

          </div>

          <Section id={'projects'} className={"flex-col alternateNav bg-slate-800 py-32 text-slate-50 pt-16 "}>

              <h2 className={"text-4xl font-semibold"}>Solo Projects</h2>
              <div className={"flex flex-col gap-24"}>
                  {projects.map((project, i) => (
                      <ProjectCard key={i} imageHREF={`/assets/projectThumbnails/${project.image}.png`}
                                   blurredHREF={`/assets/projectThumbnails/${project.image}blur.png`}
                                   stack={project.stack}
                                   alternate={i % 2 === 0}
                      >
                          <h3 className={"text-2xl font-semibold"}>{project.title}</h3>
                          <p className={"text-lg"}>{project.description}</p>
                      </ProjectCard>
                  ))}
              </div>
          </Section>


      </Page>
    );
}
