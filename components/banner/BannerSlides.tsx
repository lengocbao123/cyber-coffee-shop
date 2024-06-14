"use client";
import {
  Carousel,
  CarouselApi,
  CarouselContent,
} from "@/components/ui/carousel";
import BannerSlideItem from "./BannerSlideItem";
import BannerDots from "./BannerDots";
import { useEffect, useState } from "react";
import Autoplay from "embla-carousel-autoplay";

const BannerSlides = () => {
  const [api, setApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState(0);
  const [count, setCount] = useState(0);
  useEffect(() => {
    if (!api) {
      return;
    }
    setCount(api.scrollSnapList().length);
    setCurrent(api.selectedScrollSnap());

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap());
    });
  }, [api]);
  return (
    <Carousel
      opts={{
        loop: true,
      }}
      plugins={[
        Autoplay({
          delay: 5000,
        }),
      ]}
      setApi={setApi}
      className="w-full flex flex-col relative"
    >
      <CarouselContent>
        <BannerSlideItem image="https://maraviyainfotech.com/projects/grabit-tailwind/grabit-tailwind/assets/img/hero-bg/5.jpg" />
        <BannerSlideItem image="https://maraviyainfotech.com/projects/grabit-tailwind/grabit-tailwind/assets/img/hero-bg/6.jpg" />
        <BannerSlideItem image="https://maraviyainfotech.com/projects/grabit-tailwind/grabit-tailwind/assets/img/hero-bg/5.jpg" />
        <BannerSlideItem image="https://maraviyainfotech.com/projects/grabit-tailwind/grabit-tailwind/assets/img/hero-bg/6.jpg" />
      </CarouselContent>
      <BannerDots count={count} activeIndex={current} />
    </Carousel>
  );
};

export default BannerSlides;
