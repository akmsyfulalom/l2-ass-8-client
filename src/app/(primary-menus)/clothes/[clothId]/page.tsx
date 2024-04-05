import { Button } from "@/components/ui/button";
import Container from "@/components/ui/container";
import { Rating } from "@smastrom/react-rating";
import { Clock, Heart, Truck } from "lucide-react";
import Image from "next/image";
import React from "react";

interface TClothId {
  params: {
    clothId: string;
  };
}

// export const generateStaticParams = async () => {
//   const res = await fetch("https://l2-ass-8-server.vercel.app/api/v1/cloth");
//   const clothes = await res.json();
//   return clothes?.data?.slice(0, 10).map((cloth: any) => ({
//     TClothId: cloth?._id,
//   }));
// };

const ClothDetail = async ({ params }: TClothId) => {
  const res = await fetch(
    `https://l2-ass-8-server.vercel.app/api/v1/cloth/${params?.clothId}`,
    {
      cache: "no-store",
    }
  );

  const cloth = await res.json();

  const discountedPrice = (
    cloth?.data?.price -
    (cloth?.data?.price * cloth?.data?.discount) / 100
  ).toFixed(2);

  return (
    <div className="mt-32">
      <Container>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 items-start ">
          <div className="w-full h-[350px] sm:h-[500px] border-2 flex justify-center items-center">
            <Image
              src={cloth?.data?.image}
              alt="product-image"
              width={0}
              height={0}
              sizes="100vw"
              className="w-[90%] h-[90%]"
            />
          </div>
          <div>
            <div>
              <div className="pb-5 border-b-2 border-b-zinc-900 mb-10">
                <div className="flex justify-between items-center gap-2  mb-3">
                  <h1 className="text-2xl font-bold">{cloth?.data?.name}</h1>
                  <Heart className="text-red-400 cursor-pointer hover:text-red-500" />
                </div>
                <div className="flex items-center gap-5">
                  <p className=" text-xl pe-10 border-e-2 border-e-zinc-900">
                    <span className="text-2xl font-bold">$</span>
                    <del className="text-slate-600">
                      {cloth?.data?.price}
                    </del>{" "}
                    <span>
                      <span className="text-2xl font-bold">$</span>
                      {discountedPrice}
                    </span>
                  </p>
                  <Rating
                    style={{ maxWidth: 100 }}
                    value={cloth?.data?.rating}
                    readOnly
                  />
                </div>
              </div>
            </div>
            <ul className="px-5 mt-5">
              <li className="list-disc">brand: {cloth.data?.brand}</li>
              <li className="list-disc">size: {cloth?.data?.size}</li>
              
            </ul>
            <div className="mt-10">
              <p className="mb-2 flex items-center gap-2">
                <Truck /> Free worldwide shipping on all orders over $100
              </p>
              <p className=" flex items-center gap-2">
                <Clock /> Delivers in: 3-7 Working Days Shipping & Return
              </p>
            </div>
            <div className="flex gap-5 mt-8">
              <Button>Add to Cart</Button>
              <Button variant="outline">Add to Wishlist</Button>
            </div>
          </div>
        </div>
        <div className="my-10">
          <h3 className="text-2xl font-bold mb-5">Description</h3>
          <p className="text-slate-700">{cloth?.data?.description}</p>
        </div>
      </Container>
    </div>
  );
};

export default ClothDetail;
