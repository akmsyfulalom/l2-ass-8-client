import { Button } from "@/components/ui/button";
import Container from "@/components/ui/container";

import { ChevronRight } from "lucide-react";
import Link from "next/link";
import React from "react";
import ProductCard from "../FlashSale/ProductCard";

const TrendingProducts = async () => {
  const res = await fetch("http://localhost:5000/api/v1/cloth", {
    next: {
      revalidate: 30,
    },
  });

  const clothData = await res.json();

  const sortedClothData = clothData?.data
    ?.slice()
    .sort(
      (b: { rating: number }, a: { rating: number }) => a.rating - b.rating
    );

  return (
    <div className="w-full my-20">
      <Container>
        <div className="flex justify-between items-center">
          <div>
            <h2 className="text-2xl font-bold">Trending Products</h2>
          </div>
          <Link href="/products">
            {" "}
            <Button className="bg-zinc-900 hover:bg-white text-white hover:text-black border-2 border-zinc-900 transition-all duration-500">
              View All{" "}
              <ChevronRight className="font-light h-5 w-5 cursor-pointer" />
            </Button>
          </Link>
        </div>
        <p className="mb-10">
          Explore our collection of trending products at LapLux, <br /> where
          innovation and technology converge to bring you the latest in laptop
          excellence.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5 justify-items-center items-start">
          {sortedClothData.slice(0, 6).map((cloth: any) => (
            <ProductCard key={cloth?._id} cloth={cloth} />
          ))}
        </div>
      </Container>
    </div>
  );
};

export default TrendingProducts;
