import { Button } from "./ui/button";

const Promotion = () => {
  return (
    <div className="px-8 w-full bg-no-repeat bg-cover bg-center flex flex-col items-end justify-center bg-[url('https://ik.imagekit.io/gsozk5bngn/product/11_dGO9yVqQQ.jpg')] min-h-[400px] md:min-h-[460px] lg:min-h-[300px] xl:min-h-[650px] py-20 py:pt-24">
      <div className="w-full sm:w-[728px] flex flex-col items-end justify-center text-right gap-6 px-4">
        <p className="text-md font-bold text-white">30% Sale</p>
        <h1 className="text-6xl font-bold text-white">
          Latest Exclusive Summer Collection
        </h1>
        <Button>Shop now</Button>
      </div>
    </div>
  );
};

export default Promotion;
