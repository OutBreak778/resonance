import ExploreVoicesLayoutComponent from "@/app/features/explore-voices/views/ExploreVoiceLayout";
import React from "react";

export default function TextToSpeechLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <ExploreVoicesLayoutComponent>{children}</ExploreVoicesLayoutComponent>;
}
