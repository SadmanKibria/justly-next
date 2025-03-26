import { Globe2Icon } from "lucide-react";

export function Logo() {
  return (
    <span className="flex items-center gap-2 font-semibold flex-shrink-0 text-lg">
      <Globe2Icon className="size-8" />
      <span>Justly</span>
    </span>
  );
}
