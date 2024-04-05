import DashboardMainLayout from "@/components/dashboard/DashboardMainLayout";
import React, { ReactNode } from "react";

export default function DashboardLayout({ children }: { children: ReactNode }) {
  return (
    <>
      <DashboardMainLayout>{children}</DashboardMainLayout>
    </>
  );
}
