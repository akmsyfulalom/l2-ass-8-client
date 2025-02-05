import { cn } from "@/lib/utils";
import { ReactNode } from "react";

type TContainerProps = {
  children: ReactNode;
  className?: string;
};

export default function Container({ children, className }: TContainerProps) {
  return (
    <div className={cn("w-full max-w-[1280px] px-[20px] mx-auto", className)}>
      {children}
    </div>
  );
}
