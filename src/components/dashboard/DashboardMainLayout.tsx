"use client";
import { useState } from "react";
import Image from "next/image";
import Sidebar from "./Sidebar";
import Container from "../ui/container";
import { CircleUserRound } from "lucide-react";

const DashboardMainLayout = ({ children }: { children: React.ReactNode }) => {
  const [slider, setSlider] = useState(false);
  return (
    <div className="grid grid-cols-12 relative">
      <div
        className={`${
          slider
            ? "fixed left-0 top-0 bottom-0 lg:w-full w-3/4 sm:w-1/2"
            : "col-span-1 "
        } lg:relative lg:col-start-1 lg:col-end-3 z-40`}
      >
        <div className="sticky top-0">
          <Sidebar slider={slider} setSlider={setSlider} />
        </div>
      </div>
      {/* //*2nd grid */}
      <div
        className={`${slider ? "col-span-12" : "col-span-11"}  lg:col-span-10`}
      >
        <div className="bg-[#1F1F1F] text-white flex justify-center items-end flex-col px-5 lg:px-10 py-2 sticky top-0 z-[15] ">
          <div className="flex justify-center items-center">
            <div className="text-end me-2">
              <h2 className="text font-bold">AKM SYFUL ALOM</h2>
              <p className="text-slate-400 text-sm">Admin</p>
            </div>
            <CircleUserRound size={40} />
          </div>
        </div>
        <Container>{children}</Container>
      </div>
    </div>
  );
};

export default DashboardMainLayout;
