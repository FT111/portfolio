'use client';
import {type CarouselApi, Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious} from "@/components/ui/carousel"
import React from "react";


// interface Props {
// 	?children: React.ReactNode;
// }

export default function AutoCarousel ({children}: {children: React.ReactNode}) {

	const [api, setApi] = React.useState<CarouselApi>()
	const [scrolling, setScrolling] = React.useState(true)

	React.useEffect(() => {
		// If the api is not set, return
		if (!api) {return}

		// Scroll every 3 seconds
		const interval = setInterval(() => {
			console.log('scrolling: '+scrolling)
			// Only scroll if the user is not interacting with the carousel
			if (scrolling) {
				api.scrollNext()
			}
		}, 4000)


		return () => {
			clearInterval(interval)
		}
	}, [api, scrolling])

	const items = React.Children.toArray(children)


	return (
		<Carousel className={"w-full h-full"} opts={{loop: true, align:'center'}} setApi={setApi}>
			<CarouselContent className={"w-full h-full rounded-2xl p-4 px-8"}>
				{items.map((item, i) => (
					<CarouselItem className={"w-full h-full"} key={i} onMouseEnter={() => {console.log('entered');setScrolling(false)}} onMouseLeave={() => {console.log('left'); setScrolling(true)}}>
						{item}
					</CarouselItem>
				))}
			</CarouselContent>
			<CarouselPrevious />
			<CarouselNext />
		</Carousel>
);}