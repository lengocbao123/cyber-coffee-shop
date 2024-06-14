import Banner from "@/components/Banner";
import Contact from "@/components/Contact";
import Promotion from "@/components/Promotion";
import HomeProductList from "@/components/home/HomeProductList";
import { getProducts } from "@/services/products";

export default async function Home() {
  const { data } = await getProducts({ page: 1, take: 8 });
  return (
    <div className="w-full flex min-h-screen flex-col items-center justify-between space-y-10 pb-24">
      <Banner />

      <HomeProductList products={data} />
      <Promotion />
      <Contact />
    </div>
  );
}
