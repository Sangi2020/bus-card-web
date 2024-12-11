import { cn } from "../lib/utils";
import GridPattern from "../magic-ui/components/ui/grid-pattern.jsx";
import { MeteorDemo } from "./demo-meteors";
import BusinessCard from "./Vcard";
 
export function GridPatternLinearGradient() {
  return (
    <div className="relative flex size-full  h-screen w-screen items-center justify-center overflow-hidden rounded-lg border bg-background md:p-20 p-4 md:shadow-xl">
      <MeteorDemo/>
      <GridPattern
        width={50}
        height={50}
        x={-2}
        y={-1}
        className={cn(
          "[mask-image:linear-gradient(to_bottom_right,white,transparent,black)] ",
        )}
      />
    </div>
  );
}