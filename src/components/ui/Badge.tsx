import React, { HTMLAttributes } from 'react';
import { twMerge } from 'tailwind-merge';

export type BadgeVariant = 'primary' | 'secondary' | 'success' | 'error' | 'warning' | 'info';
export type BadgeSize = 'sm' | 'md' | 'lg';

interface BadgeProps extends Omit<HTMLAttributes<HTMLSpanElement>, 'content'> {
  content?: React.ReactNode;
  variant?: BadgeVariant;
  size?: BadgeSize;
  className?: string;
  outline?: boolean;
  pill?: boolean;
}

export function Badge({
  content,
  variant = 'primary',
  size = 'md',
  className,
  outline = false,
  pill = false,
  ...rest
}: BadgeProps) {
  const variantSolidClasses = {
    primary: 'bg-primary text-white',
    secondary: 'bg-secondary text-white',
    success: 'bg-success text-white',
    error: 'bg-error text-white',
    warning: 'bg-warning text-black',
    info: 'bg-info text-white',
  };

  const variantOutlineClasses = {
    primary: 'bg-primary/10 text-primary border border-primary/20',
    secondary: 'bg-secondary/10 text-secondary border border-secondary/20',
    success: 'bg-success/10 text-success border border-success/20',
    error: 'bg-error/10 text-error border border-error/20',
    warning: 'bg-warning/10 text-warning border border-warning/20',
    info: 'bg-info/10 text-info border border-info/20',
  };

  const sizeClasses = {
    sm: 'px-2 py-0.5 text-xs',
    md: 'px-3 py-1 text-sm',
    lg: 'px-4 py-1.5 text-base',
  };

  const variantClasses = outline ? variantOutlineClasses[variant] : variantSolidClasses[variant];
  const roundedClass = pill ? 'rounded-full' : 'rounded-md';
  
  const badgeClasses = twMerge(
    'inline-flex items-center justify-center font-medium',
    roundedClass,
    sizeClasses[size],
    variantClasses,
    className
  );

  return (
    <span className={badgeClasses} {...rest}>
      {content}
    </span>
  );
}