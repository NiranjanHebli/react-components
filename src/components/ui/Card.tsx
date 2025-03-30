import React, { HTMLAttributes } from 'react';
import { twMerge } from 'tailwind-merge';

export type CardVariant = 'default' | 'outline' | 'primary' | 'secondary';

interface CardProps extends HTMLAttributes<HTMLDivElement> {
  title?: string;
  children?: React.ReactNode;
  variant?: CardVariant;
  footer?: React.ReactNode;
  headerAction?: React.ReactNode;
  className?: string;
  bodyClassName?: string;
  headerClassName?: string;
  footerClassName?: string;
}

export function Card({
  title,
  children,
  variant = 'default',
  footer,
  headerAction,
  className,
  bodyClassName,
  headerClassName,
  footerClassName,
  ...rest
}: CardProps) {
  const variantClasses = {
    default: 'bg-white',
    outline: 'bg-white border border-gray-200',
    primary: 'bg-primary/5 border border-primary/20',
    secondary: 'bg-secondary/5 border border-secondary/20',
  };

  const cardClasses = twMerge(
    'rounded-lg shadow-sm hover:shadow transition-shadow overflow-hidden',
    variantClasses[variant],
    className
  );

  const renderHeader = title || headerAction ? (
    <div className={twMerge('px-6 py-4 flex justify-between items-center border-b border-gray-100', headerClassName)}>
      {title && <h3 className="text-lg font-medium text-gray-900">{title}</h3>}
      {headerAction && <div>{headerAction}</div>}
    </div>
  ) : null;

  const renderBody = (
    <div className={twMerge('p-6', bodyClassName)}>
      {children || (
        <p className="text-gray-600">
          This is a card component that accepts various props for customization.
        </p>
      )}
    </div>
  );

  const renderFooter = footer ? (
    <div className={twMerge('px-6 py-4 bg-gray-50 border-t border-gray-100', footerClassName)}>
      {footer}
    </div>
  ) : null;

  return (
    <div className={cardClasses} {...rest}>
      {renderHeader}
      {renderBody}
      {renderFooter}
    </div>
  );
}