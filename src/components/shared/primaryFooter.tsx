import { Mail, MapPinned } from "lucide-react";
import Link from "next/link";

const PrimaryFooter = () => {
  return (
    <footer className="bg-gray-800 text-white">
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10 md:px-10 px-5 py-20 ">
        <div className="">
          <div className="flex items-center gap-2 text-lg font-semibold md:text-base whitespace-nowrap pb-3">
            AKM CLOTH
          </div>
          <p>
            Welcome to our cloth store, where style meets comfort. Discover a
            curated collection of trendy fashion pieces, from casual wear to
            elegant ensembles, crafted to elevate your wardrobe.
          </p>
        </div>
        <div className="">
          <h3 className="pb-3">Keep Exploring</h3>
          <ul className="flex flex-col gap-3">
            <Link href={"/"}>What we can do </Link>
            <Link href={"/"}>Who we are </Link>
            <Link href={"/"}>Our Impact </Link>
            <Link href={"/"}>Refund and Return Policy</Link>
            <Link href={"/"}>Privacy Policy</Link>
          </ul>
        </div>
        <div className=" ">
          <h3 className="pb-3">Quick Link</h3>
          <ul className="flex flex-col gap-3">
            <Link href={"/"}>Cart</Link>
            <Link href={"/"}>Checkout</Link>
            <Link href={"/"}>Contact Us</Link>
            <Link href={"/"}>Sitemap</Link>
            <Link href={"/"}>Gallery</Link>
          </ul>
        </div>
        <div className=" ">
          <h3 className="pb-3">Contact Us</h3>
          <div className="flex flex-col gap-3">
            <div className="flex gap-2 items-center">
              <Mail size={20} />
              <a href="mailto:info@akmsyful.com">info@akmsyful.com</a>
            </div>
            <div className="flex gap-2 items-center">
              <MapPinned size={25} />
              <p>Tilagor, Sylhet, Bangladesh</p>
            </div>
          </div>
        </div>
      </div>
      <div className="text-center pb-5">
        <p>
          &copy;
          {new Date().getFullYear()} All rights reserved | Developed by{" "}
          <Link
            href={"https://akmsyful.vercel.app/"}
            target="_blank"
            className="text-sky-400"
          >
            AKM SYFUL
          </Link>
        </p>
      </div>
    </footer>
  );
};

export default PrimaryFooter;
