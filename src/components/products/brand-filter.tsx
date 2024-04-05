"use client"
import Link from "next/link";

const BrandFilter = ({ title }: { title: string }
) => {
  return (
    <Link href={`/clothes?brand=${encodeURIComponent(title)}`}>
      <div className={`border-2  flex justify-center items-center flex-col p-2 transition-all duration-200 rounded`}>
        <p className="font-bold mt-1">{title}</p>
      </div>
    </Link>
  );
};

export default BrandFilter;
