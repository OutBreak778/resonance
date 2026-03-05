import { PageHeader } from "@/components/PageHeader";
import React from "react";

export default function DashboardLayoutComponent({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex h-full min-h-0 flex-col overflow-hidden">
      <PageHeader title="Dashboard" />
      {children}
    </div>
  );
}
