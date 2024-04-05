/* eslint-disable react/no-unescaped-entities */
import CountdownTimer from "@/components/flash-sale/count-down";
import ProductCard from "@/components/shared/ProductCard";
import Container from "@/components/ui/container";

const FlashSalePage = async () => {
  const res = await fetch("https://l2-ass-8-server.vercel.app/api/v1/cloth", {
    cache: "no-store",
  });

  const clothData = await res.json();
  console.log("🚀 ~ FlashSalePage ~ clothData:", clothData);

  const flashSaleCloth = clothData?.data?.filter(
    (cloth: any) => cloth?.flashSale
  );
  console.log("🚀 ~ FlashSalePage ~ flashSaleCloth:", flashSaleCloth);

  return (
    <div className="mt-16 py-10">
      <Container>
        <div className="flex justify-start items-center mb-10">
          <CountdownTimer />
        </div>
        <h1 className="text-3xl font-bold mb-5">Flash Sale</h1>
        <p className="text-slate-700 mb-14">
          Gear up for an extraordinary shopping spree at AKM Cloth Store's Flash
          Sale! Dive into a sea of stunning fashion finds and unbeatable deals
          on a wide range of clothing items. From trendy apparel to timeless
          classics, discover everything you need to elevate your wardrobe to new
          heights. Hurry, this limited-time event promises jaw-dropping
          discounts and exciting surprises at every turn. Don't miss out on your
          chance to snag your favorite styles at prices that will leave you
          speechless. Shop now and make a splash with your fashion statement at
          AKM Cloth Store's Flash Sale!
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5 justify-items-center items-start">
          {flashSaleCloth?.map((cloth: any) => (
            <ProductCard key={cloth?._id} cloth={cloth} />
          ))}
        </div>
      </Container>
    </div>
  );
};

export default FlashSalePage;
