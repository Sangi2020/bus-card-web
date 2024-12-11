import { useId } from "react";
import { cn } from "../../../lib/utils";

export function GridPattern({
  width = 40,
  height = 40,
  x = -1,
  y = -1,
  strokeDasharray = "5", // Dash length for the lines
  squares,
  className,
  ...props
}) {
  const id = useId();

  return (
    <svg
      aria-hidden="true"
      className={cn(
        "pointer-events-none absolute inset-0 h-full w-full fill-gray-400/30 stroke-gray-400/30",
        className
      )}
      {...props}
    >
      <defs>
        <pattern
          id={id}
          width={width}
          height={height}
          patternUnits="userSpaceOnUse"
          x={x}
          y={y}
        >
          <path
            d={`M.5 ${height}V.5H${width}`}
            fill="none"
            stroke="gray"
            strokeDasharray={strokeDasharray}
            style={{
              animation: `dash 2s linear infinite`, // Animation for dash offset
            }}
          />
        </pattern>
      </defs>
      <rect width="100%" height="100%" strokeWidth={0} fill={`url(#${id})`} />
      {squares && (
        <svg x={x} y={y} className="overflow-visible">
          {squares.map(([x, y]) => (
            <rect
              strokeWidth="0"
              key={`${x}-${y}`}
              width={width - 1}
              height={height - 1}
              x={x * width + 1}
              y={y * height + 1}
            />
          ))}
        </svg>
      )}
      <style jsx>{`
        @keyframes dash {
          0% {
            stroke-dashoffset: ${width}; // Start with the offset
          }
          100% {
            stroke-dashoffset: 0; // End with the offset
          }
        }
      `}</style>
    </svg>
  );
}

export default GridPattern;
