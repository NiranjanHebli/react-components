import React, { HTMLAttributes } from 'react';
import { twMerge } from 'tailwind-merge';

export type AlertVariant = 'info' | 'success' | 'warning' | 'error';

interface AlertProps extends HTMLAttributes<HTMLDivElement> {
  title?: string;
  children?: React.ReactNode;
  message?: React.ReactNode;
  variant?: AlertVariant;
  icon?: React.ReactNode;
  onClose?: () => void;
  className?: string;
}

export function Alert({
  title,
  children,
  message,
  variant = 'info',
  icon,
  onClose,
  className,
  ...rest
}: AlertProps) {
  const variantStyles = {
    info: {
      container: 'bg-info/10 border-info text-info',
      icon: 'text-info',
    },
    success: {
      container: 'bg-success/10 border-success text-success',
      icon: 'text-success',
    },
    warning: {
      container: 'bg-warning/10 border-warning text-warning',
      icon: 'text-warning',
    },
    error: {
      container: 'bg-error/10 border-error text-error',
      icon: 'text-error',
    },
  };

  const alertClasses = twMerge(
    'rounded-md border-l-4 p-4',
    variantStyles[variant].container,
    className
  );

  return (
    <div className={alertClasses} role="alert" {...rest}>
      <div className="flex">
        {icon && (
          <div className="flex-shrink-0 mr-3">
            <span className={variantStyles[variant].icon}>{icon}</span>
          </div>
        )}
        <div className="flex-1">
          {title && <p className="font-medium mb-1">{title}</p>}
          {message && <p className="text-sm opacity-90">{message}</p>}
          {children}
        </div>
        {onClose && (
          <div className="flex-shrink-0 ml-3">
            <button
              type="button"
              className="inline-flex opacity-70 hover:opacity-100 focus:outline-none"
              onClick={onClose}
              aria-label="Close"
            >
              <svg className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                <path
                  fillRule="evenodd"
                  d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                  clipRule="evenodd"
                />
              </svg>
            </button>
          </div>
        )}
      </div>
    </div>
  );
}