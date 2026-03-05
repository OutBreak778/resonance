"use client"

import { useState } from "react";
import { Search, Sparkles } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  InputGroup,
  InputGroupInput,
  InputGroupAddon,
} from "@/components/ui/input-group";

export function VoicesToolbar() {
  const [localQuery, setLocalQuery] = useState("");

  return (
    <div className="space-y-4">
      <div>
        <h2 className="text-xl lg:text-2xl font-semibold tracking-tight">
          All Libraries
        </h2>
        <p className="text-sm text-muted-foreground">
          Discover your voices, or make your own
        </p>
      </div>

      <div className="flex flex-col gap-3">
        <div className="flex items-center gap-3">
          <InputGroup className="lg:max-w-sm bg-gray-300/40">
            <InputGroupAddon>
              <Search className="size-4" />
            </InputGroupAddon>
            <InputGroupInput
              placeholder="Search voices..."
              value={localQuery}
              onChange={(e: any) => {
                setLocalQuery(e.target.value)
              }}
            />
          </InputGroup>
          <div className="ml-auto hidden lg:block">
            <Button size="sm">
              <Sparkles />
              Custom voice
            </Button>
          </div>
          <div className="lg:hidden">
            <Button size="sm" className="w-full">
              <Sparkles />
              Custom voice
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
