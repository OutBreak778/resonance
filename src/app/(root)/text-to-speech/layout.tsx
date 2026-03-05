import TextToSpeechLayoutComponent from "@/app/features/text-to-speech/views/TextToSpeechLayout";
import React from "react";

export default function TextToSpeechLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <TextToSpeechLayoutComponent>{children}</TextToSpeechLayoutComponent>;
}
