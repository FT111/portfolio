import Section from "@/components/section";
import Page from "@/components/page";
import AutoCarousel from "@/components/carousel";

export default function Home() {
  return (
    <Page>

        <Section className={"flex-col "}>
            <h1 className={"md:text-6xl text-5xl tracking-tight font-extrabold text-slate-900 " +
                "max-w-full md:leading-[4rem]"}>Hi, i'm Freddie.
                <span className={"font-bold text-slate-500"}> I'm a computer science student.</span>
            </h1>

            <div className={"bg-slate-300 h-[28rem] w-full rounded-2xl p-2" }>
                <AutoCarousel>
                    <div className={"w-full h-full bg-white"}>test</div>
                    <div className={"w-full h-full bg-white"}>test</div>
                </AutoCarousel>
            </div>
        </Section>

        <Section className={"flex-col"}>
            <h2 className={"text-4xl font-semibold"}>Projects</h2>
            <div className={"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"}>
                <div className={"bg-slate-300 h-[24rem] w-full rounded-2xl"}></div>
                <div className={"bg-slate-300 h-[24rem] w-full rounded-2xl"}></div>
                <div className={"bg-slate-300 h-[24rem] w-full rounded-2xl"}></div>
            </div>
        </Section>

    </Page>
  );
}
