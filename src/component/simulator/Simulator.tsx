"use client";

import { useState, useEffect } from "react";

import CodeEditor from "./CodeEditor";
import ComponentPalette from "./ComponentPalette";
import VirtualSerial from "./VirtualSerial";
import Breadboard from "./BreadBoard";

export default function Simulator() {
  const [code, setCode] = useState(`void setup() {
  pinMode(13, OUTPUT);
}

void loop() {
  digitalWrite(13, HIGH);
  delay(1000);
  digitalWrite(13, LOW);
  delay(1000);
}`);
  const [pins, setPins] = useState<Record<number, boolean>>({});
  const [consoleOutput, setConsoleOutput] = useState<string[]>([]);

  const runCode = () => {
    // Simple interpreter for demo
    const lines = code.split("\n");
    const output: string[] = [];
    let pin13 = false;

    for (let i = 0; i < 5; i++) {
      pin13 = !pin13;
      output.push(`Pin 13: ${pin13 ? "HIGH" : "LOW"}`);
      setPins((prev) => ({ ...prev, 13: pin13 }));
    }

    setConsoleOutput(output);
  };

  return (
    <div className="flex h-screen">
      <div className="w-1/4 p-4 bg-gray-100">
        <ComponentPalette />
      </div>
      <div className="flex-1 p-4">
        <Breadboard pins={pins} />
        <button
          onClick={runCode}
          className="mt-4 px-4 py-2 bg-blue-600 text-white rounded"
        >
          Run Simulation
        </button>
      </div>
      <div className="w-1/3 p-4 bg-gray-800 text-white">
        <CodeEditor code={code} setCode={setCode} />
        <VirtualSerial output={consoleOutput} />
      </div>
    </div>
  );
}