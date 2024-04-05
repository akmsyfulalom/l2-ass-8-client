import { Button } from "@/components/ui/button";
import Container from "@/components/ui/container";
import { ChevronRight } from "lucide-react";
import Link from "next/link";
import React from "react";
import ProductCard from "../../shared/ProductCard";

const FlashSale = async () => {
  const res = await fetch("https://l2-ass-8-server.vercel.app/api/v1/cloth", {
    next: {
      revalidate: 30,
    },
  });

  const clothData = await res.json();

  const flashSaleCloth = clothData?.data?.filter(
    (cloth: any) => cloth?.flashSale
  );

  const sortedFlashSaleCloth = flashSaleCloth?.sort(
    (a: any, b: any) =>
      new Date(b?.createdAt).getTime() - new Date(a?.createdAt).getTime()
  );

  return (
    <div className="w-full mt-20">
      <Container>
        <div className="flex justify-between items-center mb-10">
          <h2 className="text-2xl font-bold">Flash Sale</h2>
          <Link href="/flash-sale">
            <Button className="bg-zinc-900 hover:bg-white text-white hover:text-black border-2 border-zinc-900 transition-all duration-500">
              View All{" "}
              <ChevronRight className="font-light h-5 w-5 cursor-pointer" />
            </Button>
          </Link>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5 justify-items-center items-start">
          {sortedFlashSaleCloth?.slice(0, 6).map((cloth: any) => (
            <ProductCard key={cloth?._id} cloth={cloth} />
          ))}
        </div>
      </Container>
    </div>
  );
};

export default FlashSale;
