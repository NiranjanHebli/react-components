import React from 'react';
import { Item } from './Item';

interface Data {
  id: number;
  text: string;
  completed: boolean;
}

interface ListProps {
  data: Data[];
  onToggle: (id: number) => void;
  onDelete: (id: number) => void;
}

export function List({ data, onToggle, onDelete }: ListProps) {
  return (
    <div className="space-y-3">
      {data.map((value) => (
        <Item
          key={value.id}
          id={value.id}
          text={value.text}
          completed={value.completed}
          onToggle={onToggle}
          onDelete={onDelete}
        />
      ))}
    </div>
  );
}