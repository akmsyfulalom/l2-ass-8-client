
import Image from "next/image";

const SliderProductCard = ({ cloth }: any) => {
  return (
    <div className="border-2 rounded-md w-[280px] bg-white overflow-hidden mx-auto">
      <div className="bg-[#ffffff] p-5 w-[280px] h-[210px] border-b-2 rounded-t-md flex justify-center items-center group overflow-hidden">
        <Image
          src={cloth?.image}
          alt="product-image"
          width={0}
          height={0}
          sizes="100vw"
          className="group-hover:scale-110 transition-all duration-500 w-[280px] h-auto"
        />
      </div>
    </div>
  );
};

export default SliderProductCard;