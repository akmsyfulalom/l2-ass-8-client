"use client";
import PrimaryFooter from "@/components/shared/primaryFooter";
import PrimaryNavbar from "@/components/shared/primaryNavbar";
import { usePathname } from "next/navigation";
import { ReactNode } from "react";

const pathData = {
  paths: [
    "/dashboard", 
    "/dashboard/all-products"
  ],
};

export default function NavbarFooterProvider({
  children,
}: {
  children: ReactNode;
}) {
  const pathname = usePathname();
  const shouldRenderNavbarAndFooter = !pathData?.paths?.some((path: string) => {
    if (path.includes("/:")) {
      const basePath = path.split("/:")[0];
      return pathname.startsWith(basePath);
    }
    return pathname === path;
  });
  return (
    <div>
      {shouldRenderNavbarAndFooter && <PrimaryNavbar />}
      {children}
      {shouldRenderNavbarAndFooter && <PrimaryFooter />}
    </div>
  );
}
