import Section from "@/components/section";
import Page from "@/components/page";
import AutoCarousel from "@/components/carousel";

export default function Home() {
  return (
      <Page>

          <Section className={"flex-col z-10 "}>
              <h1 className={"md:text-6xl text-5xl tracking-tight font-extrabold text-slate-900 " +
                  "max-w-full md:leading-[4rem]"}>Hi, i'm Freddie.
                  <span className={"font-bold text-slate-500"}> I'm a computer science student.</span>
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

          <div className={"-mt-60"}>
              <svg id="wave"  viewBox="0 0 1440 220" version="1.1"
                   xmlns="http://www.w3.org/2000/svg">

                  <path className={"w-full fill-slate-100"}
                        d="M0,176L120,165C240,154,480,132,720,132C960,132,1200,154,1440,157.7C1680,161,1920,147,2160,146.7C2400,147,2640,161,2880,154C3120,147,3360,117,3600,95.3C3840,73,4080,59,4320,47.7C4560,37,4800,29,5040,36.7C5280,44,5520,66,5760,80.7C6000,95,6240,103,6480,99C6720,95,6960,81,7200,73.3C7440,66,7680,66,7920,77C8160,88,8400,110,8640,128.3C8880,147,9120,161,9360,139.3C9600,117,9840,59,10080,47.7C10320,37,10560,73,10800,73.3C11040,73,11280,37,11520,36.7C11760,37,12000,73,12240,80.7C12480,88,12720,66,12960,58.7C13200,51,13440,59,13680,62.3C13920,66,14160,66,14400,77C14640,88,14880,110,15120,99C15360,88,15600,44,15840,29.3C16080,15,16320,29,16560,44C16800,59,17040,73,17160,80.7L17280,88L17280,220L17160,220C17040,220,16800,220,16560,220C16320,220,16080,220,15840,220C15600,220,15360,220,15120,220C14880,220,14640,220,14400,220C14160,220,13920,220,13680,220C13440,220,13200,220,12960,220C12720,220,12480,220,12240,220C12000,220,11760,220,11520,220C11280,220,11040,220,10800,220C10560,220,10320,220,10080,220C9840,220,9600,220,9360,220C9120,220,8880,220,8640,220C8400,220,8160,220,7920,220C7680,220,7440,220,7200,220C6960,220,6720,220,6480,220C6240,220,6000,220,5760,220C5520,220,5280,220,5040,220C4800,220,4560,220,4320,220C4080,220,3840,220,3600,220C3360,220,3120,220,2880,220C2640,220,2400,220,2160,220C1920,220,1680,220,1440,220C1200,220,960,220,720,220C480,220,240,220,120,220L0,220Z"></path>
              </svg>

              <Section className={"flex-col bg-slate-100 pt-32 z-0"}>

                  <h2 className={"text-4xl font-semibold"}>Projects</h2>
                  <div className={"flex flex-row gap-8"}>
                      <div className={"bg-slate-300 h-[24rem] basis-1/3 rounded-2xl"}></div>
                      <div className={"bg-slate-300 h-[24rem] basis-1/3 rounded-2xl"}></div>
                      <div className={"bg-slate-300 h-[24rem] basis-1/3 rounded-2xl"}></div>
                  </div>
              </Section>
          </div>


      </Page>
  );
}
