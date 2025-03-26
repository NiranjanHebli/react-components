import React from 'react';

interface CardProps {
  title: string;
}

export function Card({ title }: CardProps) {
  return (
    <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
      <h2 className="text-xl font-semibold mb-2">{title}</h2>
      <p className="text-gray-600">
        This is a simple card component that accepts a title prop.
      </p>
    </div>
  );
}