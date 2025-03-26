import React from 'react';

interface UserAvatarProps {
  name: string;
  role: string;
  imageUrl: string;
}

export function UserAvatar({ name, role, imageUrl }: UserAvatarProps) {
  return (
    <div className="flex items-center space-x-4">
      <img
        src={imageUrl}
        alt={name}
        className="w-12 h-12 rounded-full object-cover border-2 border-gray-200"
      />
      <div>
        <h3 className="font-medium text-gray-900">{name}</h3>
        <p className="text-sm text-gray-500">{role}</p>
      </div>
    </div>
  );
}