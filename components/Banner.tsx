import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Promotion from "./Promotion";

const Banner = () => {
  return (
    <Carousel className="w-full">
      <CarouselContent>
        <CarouselItem>
          <Promotion />
        </CarouselItem>
        <CarouselItem>
          <Promotion />
        </CarouselItem>
        <CarouselItem>
          <Promotion />
        </CarouselItem>
      </CarouselContent>
    </Carousel>
  );
};

export default Banner;
