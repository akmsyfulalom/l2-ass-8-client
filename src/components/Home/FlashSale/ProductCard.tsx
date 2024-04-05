import { ShoppingCart } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const ProductCard = ({ cloth }: { cloth: any }) => {
  const discountedPrice = (
    cloth?.price -
    cloth?.price * (cloth?.discount / 100)
  ).toFixed(2);
  return (
    <Link href={`/cloth/${cloth?._id}`}>
      <div className="border-2 rounded-md max-w-[280px] bg-white overflow-hidden">
        <div className="relative bg-[#ffffff] p-5 max-w-[280px] max-h-[300px] border-b-2 rounded-t-md flex justify-center items-center group overflow-hidden">
          <Image
            src={cloth?.image}
            alt="product-image"
            width={0}
            height={0}
            sizes="100vw"
            className="group-hover:scale-110 transition-all duration-500 w-full h-[230px] "
          />
          <p className="absolute top-5 left-5 bg-[#3D3D3D] text-white text-xs py-1 px-3 rounded-xl">
            -{cloth?.discount}%
          </p>
        </div>
        <div className="p-2">
          <h2 className="text-left  mb-2">{cloth?.name}</h2>
          <div className="flex justify-between items-center text-sm">
            <div className="flex gap-5 ">
              <div>
                <span>$</span>
                <del className="text-slate-600">{cloth?.price}</del>
              </div>
              <div>
                <span>$</span>
                {discountedPrice}
              </div>
            </div>

            <ShoppingCart className="font-light h-5 w-5 cursor-pointer" />
          </div>
        </div>
      </div>
    </Link>
  );
};

export default ProductCard;
