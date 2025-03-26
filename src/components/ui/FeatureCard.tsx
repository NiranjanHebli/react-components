import React from 'react';
import { ArrowRight } from 'lucide-react';

interface FeatureCardProps {
  title: string;
  description: string;
  linkText: string;
}

export function FeatureCard({ title, description, linkText }: FeatureCardProps) {
  return (
    <div className="bg-gradient-to-br from-indigo-50 to-blue-50 p-6 rounded-xl">
      <h3 className="text-xl font-semibold text-indigo-900 mb-2">{title}</h3>
      <p className="text-gray-600 mb-4">{description}</p>
      <div className="flex items-center text-indigo-600 hover:text-indigo-700 transition-colors">
        <span className="font-medium">{linkText}</span>
        <ArrowRight className="w-4 h-4 ml-1" />
      </div>
    </div>
  );
}