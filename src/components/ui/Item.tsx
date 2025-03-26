import React from 'react';
import { Check, Trash2 } from 'lucide-react';

interface ItemProps {
  id: number;
  text: string;
  completed: boolean;
  onToggle: (id: number) => void;
  onDelete: (id: number) => void;
}

export function Item({ id, text, completed, onToggle, onDelete }: ItemProps) {
  return (
    <div className="flex items-center justify-between bg-white p-4 rounded-lg shadow-sm">
      <div className="flex items-center gap-3">
        <button
          onClick={() => onToggle(id)}
          className={`w-6 h-6 rounded-full border-2 flex items-center justify-center transition-colors ${
            completed
              ? 'bg-green-500 border-green-500'
              : 'border-gray-300 hover:border-green-500'
          }`}
        >
          {completed && <Check className="w-4 h-4 text-white" />}
        </button>
        <span className={`${completed ? 'line-through text-gray-500' : 'text-gray-700'}`}>
          {text}
        </span>
      </div>
      <button
        onClick={() => onDelete(id)}
        className="text-gray-400 hover:text-red-500 transition-colors"
      >
        <Trash2 className="w-5 h-5" />
      </button>
    </div>
  );
}