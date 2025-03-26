import React from 'react';
import { Bell, X } from 'lucide-react';

interface NotificationBannerProps {
  message: string;
  type: 'info' | 'warning' | 'success';
  onClose: () => void;
}

export function NotificationBanner({ message, type, onClose }: NotificationBannerProps) {
  const bgColor = {
    info: 'bg-blue-50',
    warning: 'bg-yellow-50',
    success: 'bg-green-50'
  }[type];

  const textColor = {
    info: 'text-blue-800',
    warning: 'text-yellow-800',
    success: 'text-green-800'
  }[type];

  return (
    <div className={`${bgColor} ${textColor} px-4 py-3 rounded-lg flex items-center justify-between`}>
      <div className="flex items-center space-x-3">
        <Bell className="w-5 h-5" />
        <p className="font-medium">{message}</p>
      </div>
      <button onClick={onClose} className="hover:opacity-75 transition-opacity">
        <X className="w-5 h-5" />
      </button>
    </div>
  );
}