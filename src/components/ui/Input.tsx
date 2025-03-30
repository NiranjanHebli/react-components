import { InputHTMLAttributes, ReactNode, forwardRef } from 'react';
import { twMerge } from 'tailwind-merge';

export type InputVariant = 'default' | 'filled' | 'outlined' | 'underlined';
export type InputSize = 'sm' | 'md' | 'lg';

export interface InputProps extends Omit<InputHTMLAttributes<HTMLInputElement>, 'size'> {
  label?: string;
  hint?: string;
  error?: string;
  leftIcon?: ReactNode;
  rightIcon?: ReactNode;
  variant?: InputVariant;
  size?: InputSize;
  fullWidth?: boolean;
  className?: string;
  containerClassName?: string;
  labelClassName?: string;
  inputClassName?: string;
  hintClassName?: string;
  errorClassName?: string;
}

export const Input = forwardRef<HTMLInputElement, InputProps>(
  (
    {
      label,
      hint,
      error,
      leftIcon,
      rightIcon,
      variant = 'default',
      size = 'md',
      fullWidth = false,
      className,
      containerClassName,
      labelClassName,
      inputClassName,
      hintClassName,
      errorClassName,
      disabled,
      required,
      ...rest
    },
    ref
  ) => {
    const variantClasses = {
      default: 'border border-gray-300 bg-white focus:ring-2 focus:ring-primary focus:border-primary',
      filled: 'border-0 bg-gray-100 focus:bg-gray-50 focus:ring-2 focus:ring-primary',
      outlined: 'bg-transparent border border-gray-300 focus:ring-2 focus:ring-primary focus:border-primary',
      underlined: 'border-0 border-b-2 border-gray-300 rounded-none bg-transparent px-0 focus:ring-0 focus:border-b-primary',
    };
    
    const sizeClasses = {
      sm: 'px-3 py-1 text-sm',
      md: 'px-4 py-2',
      lg: 'px-5 py-3 text-lg',
    };
    
    const disabledClass = disabled ? 'opacity-60 cursor-not-allowed' : '';
    const widthClass = fullWidth ? 'w-full' : '';
    const errorClass = error ? 'border-error focus:border-error focus:ring-error' : '';

    const inputClasses = twMerge(
      'rounded-md transition-colors outline-none appearance-none',
      sizeClasses[size],
      variantClasses[variant],
      disabledClass,
      widthClass,
      errorClass,
      (leftIcon || rightIcon) && 'flex items-center',
      leftIcon && 'pl-10',
      rightIcon && 'pr-10',
      inputClassName
    );
    
    const containerClasses = twMerge(
      'flex flex-col',
      widthClass,
      containerClassName
    );
    
    return (
      <div className={containerClasses}>
        {label && (
          <label 
            className={twMerge(
              'block text-sm font-medium text-gray-700 mb-1',
              required && 'after:content-["*"] after:ml-0.5 after:text-error',
              labelClassName
            )}
          >
            {label}
          </label>
        )}
        
        <div className="relative">
          {leftIcon && (
            <div className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500">
              {leftIcon}
            </div>
          )}
          
          <input
            ref={ref}
            className={inputClasses}
            disabled={disabled}
            required={required}
            {...rest}
          />
          
          {rightIcon && (
            <div className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500">
              {rightIcon}
            </div>
          )}
        </div>
        
        {error && (
          <p className={twMerge('mt-1 text-sm text-error', errorClassName)}>
            {error}
          </p>
        )}
        
        {!error && hint && (
          <p className={twMerge('mt-1 text-sm text-gray-500', hintClassName)}>
            {hint}
          </p>
        )}
      </div>
    );
  }
);