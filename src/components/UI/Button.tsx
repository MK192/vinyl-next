import Link from 'next/link';
import React, { ElementType, forwardRef } from 'react';

export type ButtonVariant = 'primary' | 'secondary' | 'outline' | 'ghost'
export type ButtonSize = 'sm' | 'md' | 'lg' | 'xl';
export type ButtonShape = 'default' | 'pill' | 'square';

interface BaseButtonProps {
  variant?: ButtonVariant;
  size?: ButtonSize;
  fullWidth?: boolean;
  isLoading?: boolean;
  shape?: ButtonShape;
  children?: React.ReactNode;
  className?: string;
}

// Polymorphic component props helper
export type ButtonProps<T extends ElementType = 'button'> = BaseButtonProps & {
  as?: T;
} & Omit<React.ComponentPropsWithoutRef<T>, keyof BaseButtonProps | 'as'>;

export const Button = forwardRef(
  <T extends ElementType = 'button'>(
    {
      variant = 'primary',
      size = 'md',
      fullWidth = false,
      isLoading = false,
      shape = 'default',
      children,
      className = '',
      as,
      ...props
    }: ButtonProps<T>,
    ref: React.Ref<any>
  ) => {


    // Base layout & animation classes
    const baseClasses = 'inline-flex items-center justify-center font-bold tracking-wider uppercase select-none transition-all duration-300 ease-out focus:outline-none focus-visible:ring-2 focus-visible:ring-gold/50 active:scale-98 disabled:opacity-50 disabled:pointer-events-none';

    // Variant classes
    const variantClasses: Record<ButtonVariant, string> = {
      primary: 'bg-lightGray text-white hover:bg-darkGray border border-transparent',
      secondary: 'bg-white text-black hover:bg-light border border-transparent',
      outline: 'bg-transparent border border-white/20 text-white hover:border-gold hover:text-gold hover:shadow-[0_0_15px_rgba(212,175,55,0.1)]',
      ghost: 'bg-transparent text-gray-400 hover:text-white hover:bg-white/5 border border-transparent',
    };

    // Shape classes
    const shapeClasses: Record<ButtonShape, Record<ButtonSize, string>> = {
      default: {
        sm: 'rounded-md',
        md: 'rounded-lg',
        lg: 'rounded-xl',
        xl: 'rounded-xl',
      },
      pill: {
        sm: 'rounded-full',
        md: 'rounded-full',
        lg: 'rounded-full',
        xl: 'rounded-full',
      },
      square: {
        sm: 'rounded-none',
        md: 'rounded-none',
        lg: 'rounded-none',
        xl: 'rounded-none',
      },
    };

    // Size classes
    const sizeClasses: Record<ButtonSize, string> = {
      sm: 'px-4 py-2 text-xs',
      md: 'px-6 py-3 text-sm',
      lg: 'px-8 py-4 text-base',
      xl: 'px-10 py-5 text-lg',
    };

    // Build overall class string
    const combinedClasses = [
      baseClasses,
      sizeClasses[size],
      shapeClasses[shape][size],
      variantClasses[variant],
      fullWidth ? 'w-full' : '',
      isLoading ? 'relative !text-transparent select-none pointer-events-none' : '',
      className,
    ]
      .filter(Boolean)
      .join(' ');

    return (
      <button
        ref={ref}
        className={combinedClasses}
        {...props}
      >
        {isLoading && (
          <span className="absolute inset-0 flex items-center justify-center text-current">
            <svg
              className="animate-spin h-5 w-5"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
            >
              <circle
                className="opacity-25"
                cx="12"
                cy="12"
                r="10"
                stroke="currentColor"
                strokeWidth="4"
              />
              <path
                className="opacity-75"
                fill="currentColor"
                d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
              />
            </svg>
          </span>
        )}
        <span className={`flex items-center justify-center gap-2 ${isLoading ? 'opacity-0' : ''}`}>
          {children}
        </span>
      </button>
    );
  }
) as {
  <T extends ElementType = 'button'>(
    props: ButtonProps<T> & { ref?: React.Ref<any> }
  ): React.ReactElement;
  displayName?: string;
};

// Added for React DevTools debugging
Button.displayName = 'Button';
