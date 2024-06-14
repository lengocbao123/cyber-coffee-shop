import { cn } from "@/lib/utils";
import React from "react";

const BannerDots = ({
  activeIndex,
  count,
}: {
  activeIndex: number;
  count: number;
}) => {
  return (
    <div className="absolute w-full z-10 -bottom-1 flex flex-col items-center">
      <div className="w-[160px] h-[40px] bg-[url('/images/1.png')] bg-cover bg-center flex gap-1 justify-center items-end">
        {Array.from({ length: count }).map((_, index) => (
          <button
            key={index}
            className={cn("h-4 w-4 border rounded-full", {
              "bg-extend-8/30": activeIndex === index,
            })}
          />
        ))}
      </div>
    </div>
  );
};

export default BannerDots;
