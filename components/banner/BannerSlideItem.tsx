import React from "react";
import { Button, buttonVariants } from "../ui/button";
import { CarouselItem } from "../ui/carousel";
import Image from "next/image";
import Link from "next/link";

const BannerSlideItem = ({
  title,
  subTitle,
  description,
  url,
  image,
}: {
  image: string;
  title: string;
  subTitle: string;
  description: string | null;
  url: string;
}) => {
  return (
    <CarouselItem>
      <div
        className={`relative w-full bg-no-repeat bg-cover bg-center flex flex-col items-start justify-center`}
      >
        <Image
          src={image}
          alt=""
          width={1920}
          height={1080}
          className="w-full h-[750px]"
        />
        <div className="w-full sm:w-[728px] flex flex-col items-start justify-center text-left gap-6 px-8 absolute inset-0">
          <p className="text-md font-bold text-white">{subTitle}</p>
          <h1 className="text-6xl font-bold text-white">{title}</h1>
          {description && <p className="text-md  text-white">{description}</p>}
          <Link href={url} className={buttonVariants({})}>
            Shop now
          </Link>
        </div>
      </div>
    </CarouselItem>
  );
};

export default BannerSlideItem;
