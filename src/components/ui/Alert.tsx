import React from 'react';

interface AlertProps {
  message: string;
}

export function Alert({ message }: AlertProps) {
  return (
    <div className="bg-blue-100 border-l-4 border-blue-500 text-blue-700 p-4" role="alert">
      <p className="font-medium">{message}</p>
    </div>
  );
}