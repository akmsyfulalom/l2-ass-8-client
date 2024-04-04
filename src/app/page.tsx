import Brands from "@/components/Home/Brands/Brands";
import FlashSale from "@/components/Home/FlashSale/FlashSale";
import Hero from "@/components/Home/Hero/Hero";
import TrendingProducts from "@/components/Home/TrendingProducts/TrendingProducts";

export default function page() {
  return (
    <div>
      <Hero />
      <FlashSale />
      <Brands />
      <TrendingProducts />
      
    </div>
  );
}
