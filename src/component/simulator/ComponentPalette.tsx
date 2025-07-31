"use client";

export default function ComponentPalette() {
  return (
    <div>
      <h3 className="font-bold mb-2">Components</h3>
      <ul className="space-y-2">
        <li className="p-2 bg-white border rounded cursor-pointer">LED</li>
        <li className="p-2 bg-white border rounded cursor-pointer">Resistor</li>
        <li className="p-2 bg-white border rounded cursor-pointer">Button</li>
        <li className="p-2 bg-white border rounded cursor-pointer">LDR</li>
      </ul>
    </div>
  );
}