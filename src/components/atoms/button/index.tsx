import { ButtonHTMLAttributes, FC, ReactNode } from 'react';
import {SvgIcon} from "@/components/atoms/svgIcon";
import { cn } from '@/utils/cn';

type ButtonProps = {
  children: ReactNode;
  loading?: boolean;
  className?: string;
  variant?: 'primary' | 'secondary';
} & ButtonHTMLAttributes<HTMLButtonElement>;

export const Button: FC<ButtonProps> = ({
  children,
  loading,
  disabled,
  variant = 'primary',
  className = '',
  ...props
}) => {
  return (
    <button
      className={cn(
        `relative rounded-sm px-6 h-9 flex items-center text-sm border border-transparent outline-none${className}`,
        {
          'font-bold bg-primary text-white hover:opacity-80': variant === 'primary' && !(disabled || loading),
          'bg-primary/30 text-gray-50 pointer-events-none': disabled || loading,
        },
      )}
      {...props}
      disabled={disabled || loading}
    >
      {loading && (
        <div className="absolute left-1/2 -translate-x-1/2">
          <SvgIcon className="h-6 w-6 animate-spin text-white" name="spinner" />
        </div>
      )}

      {children}
    </button>
  );
};