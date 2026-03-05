import TextToSpeechView from "@/app/features/text-to-speech/views/TextToSpeechView";
import { Metadata } from "next";

export const metadata: Metadata = { title: "Text To Speech" };

const page = () => {
  return <TextToSpeechView />
};

export default page;
