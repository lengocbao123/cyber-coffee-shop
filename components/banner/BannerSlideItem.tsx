import React from "react";
import { Button } from "../ui/button";
import { CarouselItem } from "../ui/carousel";
import Image from "next/image";

const BannerSlideItem = ({ image }: { image: string }) => {
  return (
    <CarouselItem>
      <div
        className={`relative w-full bg-no-repeat bg-cover bg-center flex flex-col items-start justify-center`}
      >
        <Image src={image} alt="" width={1920} height={1080} className="w-full" />
        <div className="w-full sm:w-[728px] flex flex-col items-start justify-center text-left gap-6 px-8 absolute inset-0">
          <p className="text-md font-bold text-white">30% Sale</p>
          <h1 className="text-6xl font-bold text-white">
            Latest Exclusive Summer Collection
          </h1>
          <Button>Shop now</Button>
        </div>
      </div>
    </CarouselItem>
  );
};

export default BannerSlideItem;
