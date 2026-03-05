import { Skeleton } from "@/components/ui/skeleton";

export default function Loading() {
  return (
    <div className="flex min-h-0 flex-1 flex-col">
      <div className="min-h-0 flex-1 p-4 lg:p-26 space-y-3">
        <Skeleton className="h-8 w-25 rounded-md" />
        <Skeleton className="h-8 w-35 rounded-md" />
        <Skeleton className="h-80 w-full rounded-xl" />
      </div>

    </div>
  );
}
