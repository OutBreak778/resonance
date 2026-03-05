"use client";

import { SettingsPanel } from "../components/SettingsPanel";
import TextInputPanel from "../components/TextInputPanel";
import { VoicePreviewPlaceholder } from "../components/VoicePreviewPlaceholder";

import {
  defaultTTSValues,
  TextToSpeechForm,
} from "@/app/features/text-to-speech/components/TextToSpeechForm";

const TextToSpeechView = () => {
  return (
    <TextToSpeechForm defaultValues={defaultTTSValues}>
      <div className="flex min-h-0 flex-1 overflow-hidden">
        <div className="flex min-h-0 flex-1 flex-col">
          <TextInputPanel />
          <VoicePreviewPlaceholder />
        </div>
        <SettingsPanel />
      </div>
    </TextToSpeechForm>
  );
};

export default TextToSpeechView;
