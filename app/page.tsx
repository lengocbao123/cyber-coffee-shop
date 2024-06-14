import Contact from "@/components/Contact";
import Promotion from "@/components/Promotion";
import BannerSlides from "@/components/banner/BannerSlides";
import CategoryList from "@/components/category/CategoryList";
import HomeProductList from "@/components/home/HomeProductList";
import { getCategories } from "@/services/category";
import { getProducts } from "@/services/products";

export default async function Home() {
  const [{ data: products }, categories] = await Promise.all([
    getProducts({ page: 1, take: 8 }),
    getCategories(),
  ]);
  return (
    <div className="w-full flex min-h-screen flex-col items-center justify-between space-y-10 px-8 pb-24">
      <BannerSlides />
      <CategoryList categories={categories} />
      <HomeProductList products={products} />
      <Promotion />
      <Contact />
    </div>
  );
}
