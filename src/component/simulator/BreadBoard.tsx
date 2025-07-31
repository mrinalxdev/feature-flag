"use client";

export default function Breadboard({ pins }: { pins: Record<number, boolean> }) {
  return (
    <div className="relative w-full h-64 bg-green-200 border border-gray-400">
      <h3 className="text-center font-bold">Virtual Breadboard</h3>
      <div className="absolute top-10 left-10">
        <div
          className={`w-4 h-4 rounded-full ${pins[13] ? "bg-red-500" : "bg-gray-400"}`}
        />
        <span className="ml-2 text-sm">LED on Pin 13</span>
      </div>
    </div>
  );
}