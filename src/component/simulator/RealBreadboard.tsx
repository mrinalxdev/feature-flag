"use client";
import { useRef, useMemo } from "react";

type Props = {
  width?: number;   // px
  height?: number;  // px
};

export default function RealisticBreadboard({ width = 850, height = 260 }: Props) {
  const svgRef = useRef<SVGSVGElement>(null);

  /* ---------- geometry constants ---------- */
  const cols = 64;                // 2×32 columns
  const rows = 10;                // 10 main rows
  const railWidth = 24;           // power-rail width in px
  const gutter = 4;               // space between power rail and main trench
  const trench = 8;               // center trench
  const clipRadius = 2.5;         // metal clip hole
  const pitch = 10;               // 0.1" ≈ 2.54 mm → 10 px at 100 DPI

  /* ---------- helper: grid of clip positions ---------- */
  const clips = useMemo(() => {
    const list: { x: number; y: number }[] = [];

    // Left power rails
    for (let y = 0; y < rows; y++) {
      list.push({ x: railWidth / 2, y: y * pitch + pitch / 2 });
    }

    // Main 5-hole strips
    for (let c = 0; c < cols; c++) {
      const x = railWidth + gutter + c * pitch + pitch / 2;
      for (let r = 0; r < rows; r++) {
        list.push({ x, y: r * pitch + pitch / 2 });
      }
    }

    // Right power rails
    for (let y = 0; y < rows; y++) {
      list.push({ x: width - railWidth / 2, y: y * pitch + pitch / 2 });
    }

    return list;
  }, [width, cols, rows, railWidth, gutter, pitch]);

  return (
    <div
      style={{ width, height }}
      className="relative select-none overflow-hidden"
    >
      {/* ------------- SVG breadboard ------------- */}
      <svg
        ref={svgRef}
        viewBox={`0 0 ${width} ${height}`}
        className="w-full h-full"
      >
        <defs>
          {/* subtle texture */}
          <filter id="noise" x="-20%" y="-20%" width="140%" height="140%">
            <feTurbulence type="turbulence" baseFrequency="0.8" numOctaves="2" result="noise"/>
            <feColorMatrix type="saturate" values="0"/>
            <feBlend in="SourceGraphic" in2="noise" mode="multiply"/>
          </filter>

          {/* inset shadow for sockets */}
          <filter id="inset" x="-50%" y="-50%" width="200%" height="200%">
            <feOffset dx="0" dy="1"/>
            <feGaussianBlur stdDeviation="1"/>
            <feComposite operator="out" in2="SourceGraphic"/>
            <feComponentTransfer>
              <feFuncA type="linear" slope="0.4"/>
            </feComponentTransfer>
          </filter>
        </defs>

        {/* plastic body */}
        <rect width={width} height={height} fill="#f3f3f3" filter="url(#noise)" rx="2"/>

        {/* red power rails */}
        <rect x="0" y="0" width={railWidth} height={height} fill="#e74c3c"/>
        <rect x={width - railWidth} y="0" width={railWidth} height={height} fill="#e74c3c"/>

        {/* blue power rails */}
        <rect x="0" y="0" width={railWidth} height={height} fill="#3498db" opacity="0.3"/>
        <rect x={width - railWidth} y="0" width={railWidth} height={height} fill="#3498db" opacity="0.3"/>

        {/* center trench */}
        <rect
          x={railWidth + gutter + cols / 2 * pitch}
          y="0"
          width={trench}
          height={height}
          fill="#d0d0d0"
        />

        {/* metal clip holes */}
        {clips.map((c, i) => (
          <circle
            key={i}
            cx={c.x}
            cy={c.y}
            r={clipRadius}
            fill="#333"
            filter="url(#inset)"
          />
        ))}
      </svg>

      {/* ------------- invisible CSS grid for drop zones ------------- */}
      <div
        className="absolute inset-0 grid pointer-events-none"
        style={{
          gridTemplateColumns: `repeat(${cols}, ${pitch}px)`,
          gridTemplateRows: `repeat(${rows}, ${pitch}px)`,
          paddingLeft: `${railWidth + gutter}px`,
          paddingTop: `${pitch / 2}px`,
        }}
      >
        {Array.from({ length: cols * rows }).map((_, idx) => {
          const col = idx % cols;
          const row = Math.floor(idx / cols);
          const holeId = `h-${col}-${row}`;
          return (
            <div
              key={holeId}
              data-hole={holeId}
              className="bg-transparent pointer-events-auto"
            />
          );
        })}
      </div>
    </div>
  );
}