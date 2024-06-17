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
import { Banner } from "@/prisma/generated/client";

const BannerSlides = ({ banners }: { banners: Banner[] }) => {
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
          delay: 3000,
        }),
      ]}
      setApi={setApi}
      className="w-full flex flex-col relative"
    >
      <CarouselContent>
        {banners.map((banner) => {
          return (
            <BannerSlideItem
              key={banner.id}
              title={banner.title}
              subTitle={banner.subTitle}
              description={banner?.description}
              url={banner.url}
              image={banner.image}
            />
          );
        })}
      </CarouselContent>
      <BannerDots count={count} activeIndex={current} />
    </Carousel>
  );
};

export default BannerSlides;
