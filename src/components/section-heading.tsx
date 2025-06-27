import { cn } from "@/lib/utils";
import { Pencil } from "lucide-react";

export function SectionHeading({
  children,
  editable = false,
}: {
  children: React.ReactNode;
  editable?: boolean;
}) {
  return (
    <div className="group relative mb-8 flex items-center gap-4 md:mb-12">
      <h2 className="text-3xl font-bold tracking-tight text-foreground md:text-4xl">{children}</h2>
      {editable && (
        <button className="absolute -right-8 top-1/2 -translate-y-1/2 cursor-pointer rounded-full p-2 text-muted-foreground opacity-0 transition-opacity group-hover:opacity-100 hover:bg-muted hover:text-foreground">
          <Pencil className="h-4 w-4" />
          <span className="sr-only">Edit section</span>
        </button>
      )}
    </div>
  );
}
