"use client";
// import Link from "next/link";

// const StoreFilter = ({ title }: { title: string }
// ) => {
//   return (
//     <Link href={`/clothes?brand=${encodeURIComponent(title)}`}>
//       <div className={`border-2  flex justify-center items-center flex-col p-2 transition-all duration-200 rounded`}>
//         <p className="font-bold mt-1">{title}</p>
//       </div>
//     </Link>
//   );
// };

// export default StoreFilter;

// StoreFilter.tsx
import Link from "next/link";

interface StoreFilterProps {
  title: string;
  minPrice: number;
  maxPrice: number;
  rating: number;
}

const StoreFilter = ({
  title,
  minPrice,
  maxPrice,
  rating,
}: StoreFilterProps) => {
  const queryParams = `brand=${encodeURIComponent(
    title
  )}&minPrice=${minPrice}&maxPrice=${maxPrice}&rating=${rating}`;

  return (
    <Link href={`/clothes?${queryParams}`}>
      <div
        className={`border-2 flex justify-center items-center flex-col p-2 transition-all duration-200 rounded`}
      >
        <p className="font-bold mt-1">{title}</p>
      </div>
    </Link>
  );
};

export default StoreFilter;
