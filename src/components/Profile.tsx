import React from 'react';

interface ProfileProps {
  name: string;
}

export function Profile({ name }: ProfileProps) {
  return (
    <div className="flex items-center space-x-4 bg-gray-50 p-4 rounded-lg">
      <div className="w-12 h-12 bg-gray-300 rounded-full flex items-center justify-center">
        <span className="text-xl text-gray-600">{name.charAt(0)}</span>
      </div>
      <div>
        <h3 className="font-medium">{name}</h3>
        <p className="text-sm text-gray-500">User Profile</p>
      </div>
    </div>
  );
}