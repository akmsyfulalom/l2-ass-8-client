"use client";
// import { useState } from "react";
// import StoreFilter from "./store-filter";
// import Slider from "rc-slider";
// import "rc-slider/assets/index.css";
// import { Star } from "lucide-react";

// const ProoductFilter = () => {
//   const [minPrice, setMinPrice] = useState(0);
//   console.log("🚀 ~ ProoductFilter ~ minPrice:", minPrice)
//   const [maxPrice, setMaxPrice] = useState(10000);
//     const [rating, setRating] = useState(0);
//     console.log("🚀 ~ ProoductFilter ~ rating:", rating)

//   const handleStarClick = (value: number) => {
//     setRating(value);
//   };

//   const handleSliderChange = (values: number | number[]) => {
//     console.log("🚀 ~ handleSliderChange ~ values:", values);
//     if (typeof values === "number") {
//       // Handle case when only one value is selected
//       setMinPrice(values);
//       setMaxPrice(values);
//     } else {
//       // Handle case when range is selected
//       setMinPrice(values[0]);
//       setMaxPrice(values[1]);
//     }
//   };

//   return (
//     <div>
//       {/* Category */}
//       <div className="border-2 p-5 mb-10 ">
//         <h1 className="  mb-4 text-xl">Brands</h1>

//         <div className="flex flex-col gap-3 ">
//           <StoreFilter title="Nike" />
//           <StoreFilter title="adidas" />
//           <StoreFilter title="GICCI" />
//           <StoreFilter title="ZARA" />
//           <StoreFilter title="H&M" />
//           <StoreFilter title="Levi's" />
//         </div>
//       </div>
//       <div className="border-2 p-5 mb-10">
//         <h1 className=" mb-4 text-xl">Price Range</h1>
//         <Slider
//           min={0}
//           max={10000}
//           step={1}
//           defaultValue={[minPrice, maxPrice]}
//           onChange={handleSliderChange}
//         />
//         <p>Price Range: {minPrice} - 10000</p>
//       </div>

//       {/* Rating */}
//       <div className="border-2 p-5  mb-10">
//         <h1 className="  mb-4 text-xl">Ratings</h1>
//         <div>
//       <div className="flex items-center space-x-2 mb-2">
//       <input
//           type="number"
//           min="1"
//           max="5"
//           value={rating}
//           className="hidden"
//           onChange={(e) => setRating(parseInt(e.target.value))}
//         />
//         {[1, 2, 3, 4, 5].map((value) => (
//           <Star
//             key={value}
//             size={24}
//             onClick={() => handleStarClick(value)}
//             style={{ cursor: 'pointer', fill: value <= rating ? 'gold' : 'none' }}
//           />
//         ))}
//       </div>

//     </div>
//       </div>
//     </div>
//   );
// };

// export default ProoductFilter;

// ProoductFilter.tsx
import { useState } from "react";
import StoreFilter from "./store-filter";
import Slider from "rc-slider";
import "rc-slider/assets/index.css";
import { Star } from "lucide-react";

const ProoductFilter = () => {
  const [minPrice, setMinPrice] = useState(0);
  const [maxPrice, setMaxPrice] = useState(10000);
  const [rating, setRating] = useState(0);

  const handleStarClick = (value: number) => {
    setRating(value);
  };

  const handleSliderChange = (values: number | number[]) => {
    if (typeof values === "number") {
      setMinPrice(values);
      setMaxPrice(values);
    } else {
      setMinPrice(values[0]);
      setMaxPrice(values[1]);
    }
  };

  return (
    <div>
      {/* Category */}
      <div className="border-2 p-5 mb-10 ">
        <h1 className="  mb-4 text-xl">Brands</h1>

        <div className="flex flex-col gap-3 ">
          <StoreFilter
            title="Nike"
            minPrice={minPrice}
            maxPrice={maxPrice}
            rating={rating}
          />
          <StoreFilter
            title="adidas"
            minPrice={minPrice}
            maxPrice={maxPrice}
            rating={rating}
          />
          <StoreFilter
            title="GICCI"
            minPrice={minPrice}
            maxPrice={maxPrice}
            rating={rating}
          />
          <StoreFilter
            title="ZARA"
            minPrice={minPrice}
            maxPrice={maxPrice}
            rating={rating}
          />
          <StoreFilter
            title="H&M"
            minPrice={minPrice}
            maxPrice={maxPrice}
            rating={rating}
          />
          <StoreFilter
            title="Levi's"
            minPrice={minPrice}
            maxPrice={maxPrice}
            rating={rating}
          />
        </div>
      </div>

      {/* Price Range */}
      <div className="border-2 p-5 mb-10">
        <h1 className=" mb-4 text-xl">Price Range</h1>
        <Slider
          min={0}
          max={10000}
          step={1}
          defaultValue={[minPrice, maxPrice]}
          onChange={handleSliderChange}
        />
        <p>Price Range: {minPrice} - 10000</p>
      </div>

      {/* Rating */}
      <div className="border-2 p-5  mb-10">
        <h1 className="  mb-4 text-xl">Ratings</h1>
        <div>
          <div className="flex items-center space-x-2 mb-2">
            <input
              type="number"
              min="1"
              max="5"
              value={rating}
              className="hidden"
              onChange={(e) => setRating(parseInt(e.target.value))}
            />
            {[1, 2, 3, 4, 5].map((value) => (
              <Star
                key={value}
                size={24}
                onClick={() => handleStarClick(value)}
                style={{
                  cursor: "pointer",
                  fill: value <= rating ? "gold" : "none",
                }}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProoductFilter;
