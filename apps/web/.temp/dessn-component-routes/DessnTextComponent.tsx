import React from 'react';

interface DessnTextComponentProps {
  text?: string;
}

export default function DessnTextComponent({ text = "Hello from DessnTextComponent!" }: DessnTextComponentProps) {
  return (
    <div className="p-4 border rounded shadow-sm">
      <h2 className="text-xl font-semibold mb-2">DessnTextComponent</h2>
      <p>{text}</p>
    </div>
  );
}
