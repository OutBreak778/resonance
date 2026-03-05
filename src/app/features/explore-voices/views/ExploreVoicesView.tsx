import { Mic } from "lucide-react";
import { Separator } from "@/components/ui/separator";
import { VoicesToolbar } from "../components/VoiceToolbar";

const ExploreVoicesView = () => {
  return (
    <div className="flex-1 space-y-8 overflow-y-auto p-4 lg:p-6">
      <VoicesToolbar />
      <Separator />

      <div className="flex items-center justify-center py-20">
        <div className="flex flex-col items-center text-center max-w-md rounded-xl p-10 shadow-sm">

          <div className="flex h-14 w-14 items-center justify-center rounded-full mb-4">
            <Mic className="h-7 w-7 text-muted-foreground" />
          </div>

          <h2 className="text-xl font-semibold">
            Voice Library Coming Soon
          </h2>

          <p className="mt-2 text-sm text-muted-foreground">
            I'm working on bringing a collection of high-quality AI voices.
            This section will allow you to explore and preview voices soon.
          </p>

        </div>
      </div>
    </div>
  );
};

export default ExploreVoicesView;