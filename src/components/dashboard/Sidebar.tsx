"use client";

import Link from "next/link";
import { Dispatch } from "react";

type TSlider = {
  slider: boolean;
  setSlider: Dispatch<React.SetStateAction<boolean>>;
};

const Sidebar = ({ slider, setSlider }: TSlider) => {
  return (
    <div className=" bg-[#1F1F1F] text-white h-screen pt-5 ">
      <div className="lg:hidden">
        {slider ? (
          <div className="flex justify-center items-end flex-col px-5">
            <button onClick={() => setSlider(!slider)}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="30"
                height="30"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1}
                stroke="currentColor"
                className="w-8 h-8"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="m9.75 9.75 4.5 4.5m0-4.5-4.5 4.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                />
              </svg>
            </button>
          </div>
        ) : (
          <button onClick={() => setSlider(!slider)}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="30"
              height="30"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
              />
            </svg>
          </button>
        )}
      </div>
      {/* //* SideBar Collaps Menus */}
      <div className={`${slider ? "block" : "hidden lg:block "} `}>
        <h1 className="text-2xl cursor-pointer flex justify-start items-center px-5 mb-10">
          <Link href="/">
            <span className="font-bold">AKM CLOTH</span>
          </Link>
        </h1>
        <div className="hidden lg:block ">
          <ul className=" flex justify-center items-start flex-col gap-5 px-5">
            <li>
              <Link href="/dashboard/all-products">All Products</Link>
            </li>
          </ul>
        </div>
        <div className="block lg:hidden">
          <ul className=" flex justify-center items-start flex-col gap-5  px-5">
            <li onClick={() => setSlider(!slider)}>
              <Link href="/dashboard/all-products">All Products</Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
