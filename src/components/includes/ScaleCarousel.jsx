
import {
  Carousel,
  CarouselContent,
  CarouselItem
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import ClassNames from 'embla-carousel-class-names';


import { useRef } from "react";
import { AspectRatio } from "../ui/aspect-ratio";



function ScaleCarousel({ list, height }) {

  const autoscroll  = useRef(
    Autoplay({ delay: 3000, stopOnInteraction: true, stopOnMouseEnter: true})
  )

  
  return (
    <Carousel
      className="w-full h-full relative cursor-grabbing"
      opts={{
        loop: true,
        align: "center",
        startIndex:2,
      }}
      onMouseEnter={() => autoscroll.current.stop()}
      onMouseLeave={() => autoscroll.current.play()}
      plugins={[ClassNames({
        snapped : "selectedSOCard",
      }), autoscroll.current]}
    >
      {/* <CarouselPrevious className="z-10 absolute top-1/2 left-0 transform -translate-y-1/2 translate-x-1/2" /> */}
      <CarouselContent className="h-full gap-4 -ml-1">
        {list?.map((event) => (
          <CarouselItem
            key={`SOC-${event.id}`}
            className="pl-1 basis-2/3 md:basis-1/2 "
          >
            <AspectRatio ratio={16 / 9} className="transition-all duration-300 ease-in-out scale-75 opacity-50">
              <img
                src={event.image}
                alt={event.name}
                className="object-cover rounded-md absolute inset-0 w-full h-full"
              />
            </AspectRatio>
          </CarouselItem>
        ))}
      </CarouselContent>
      {/* <CarouselNext className="z-10 absolute top-1/2 right-0 transform -translate-y-1/2 -translate-x-1/2" /> */}
    </Carousel>
  );
}

export default ScaleCarousel;