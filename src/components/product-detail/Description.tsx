import React from 'react';

function generateKey(text: string, index: number) {
  return `${text}-${index}`;
}

type DescriptionProps = {
  value: string;
}

export default function Description({
  value,
}: DescriptionProps) {
  if (!value) {
    return null;
  }

  const lines = value.split('\n');

  return (
    <div>
      { lines.map((line, i) => (<p key={generateKey(line, i)}>{line}</p>)) }

    </div>
  );
}
