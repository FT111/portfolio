'use client';
import {type CarouselApi, Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious} from "@/components/ui/carousel"
import React from "react";


// interface Props {
// 	?children: React.ReactNode;
// }

export default function AutoCarousel ({children}: {children: React.ReactNode}) {

	const [api, setApi] = React.useState<CarouselApi>()

	React.useEffect(() => {
		// If the api is not set, return
		if (!api) {return}

		// Scroll every 3 seconds
		const interval = setInterval(() => {
			api.scrollNext()
		}, 3000)

		return () => {
			clearInterval(interval)
		}
	}, [api])

	const items = React.Children.toArray(children)


	return (
		<Carousel className={"w-full h-full"} opts={{loop: true}} setApi={setApi}>
			<CarouselContent className={"w-full h-full"}>
				{items.map((item, i) => (
					<CarouselItem className={"w-full h-full"} key={i}>
						{item}
					</CarouselItem>
				))}
			</CarouselContent>
			<CarouselPrevious />
			<CarouselNext />
		</Carousel>
);}