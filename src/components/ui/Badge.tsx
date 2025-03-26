import React from 'react';

interface BadgeProps {
  count: number;
}

export function Badge({ count }: BadgeProps) {
  return (
    <span className="inline-flex items-center justify-center px-3 py-1 text-sm font-medium rounded-full bg-indigo-100 text-indigo-800">
      {count}
    </span>
  );
}