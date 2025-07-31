"use client";

export default function VirtualSerial({ output }: { output: string[] }) {
  return (
    <div className="mt-4">
      <h4 className="font-bold mb-2">Serial Monitor</h4>
      <pre className="bg-black text-green-400 p-2 h-32 overflow-y-auto text-sm">
        {output.join("\n")}
      </pre>
    </div>
  );
}