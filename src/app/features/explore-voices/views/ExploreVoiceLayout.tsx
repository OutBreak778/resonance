import { PageHeader } from "@/components/PageHeader";

export default function ExploreVoicesLayoutComponent({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex h-full min-h-0 flex-col overflow-hidden">
      <PageHeader title="Explore voices" />
      {children}
    </div>
  );
}
