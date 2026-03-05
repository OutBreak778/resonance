import DashboardLayoutComponent from "@/app/features/dashboard/view/DashboardLayout";
import React from "react";

export default function TextToSpeechLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <DashboardLayoutComponent>{children}</DashboardLayoutComponent>;
}
