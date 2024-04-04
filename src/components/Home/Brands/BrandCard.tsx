import Image from "next/image";
import Link from "next/link";

const BrandCard = ({ image, title }: { image: string; title: string }) => {
  return (
    <Link href={`/cloth?brand=${encodeURIComponent(title)}`}>
      <div className="w-[150px] h-[150px] border-2  flex justify-center items-center flex-col p-2 transition-all duration-200 rounded">
        <Image
          src={image}
          alt="brand-image"
          width={0}
          height={0}
          sizes="100vw"
          className="w-[120px] h-[80px]"
        />
        <p className="font-bold mt-1">{title}</p>
      </div>
    </Link>
  );
};

export default BrandCard;