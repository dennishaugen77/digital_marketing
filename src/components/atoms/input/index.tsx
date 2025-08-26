import React, {
    ChangeEvent,
    forwardRef,
    InputHTMLAttributes,
    MouseEvent,
    useState,
  } from 'react';
  import { SvgIcon } from '@/components/atoms/svgIcon';
import { cn } from '@/utils/cn';
  
  type InputProps = {
    className?: string;
    label?: string;
    value?: string | number;
    onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
    error?: string;
  } & InputHTMLAttributes<HTMLInputElement>;
  
  export const Input = forwardRef<HTMLInputElement, InputProps>((
    {
      className = '',
      label,
      error,
      type,
      value,
      ...props
    }, ref
  ) => {
    const [defaultType, setDefaultType] = useState(true);
  
    const onClickVisible = (e: MouseEvent<HTMLOrSVGElement>) => {
      e.stopPropagation();
      setDefaultType(!defaultType);
    };
  
    return (
      <div className={`${className}`}>
        {label &&
          <p className={cn("mb-1 text-gray-500 text-xs", {
            '!text-red-700': error,
          })}>{label}</p>
        }
  
        <div
          className={cn(
            'relative flex h-10 w-full items-center rounded-sm border border-gray-400 overflow-hidden focus-within:border-cyan-800',
            {
              '!border-red-700': error,
            },
          )}
        >
          <input
            ref={ref}
            className={cn(
              'text-sm h-full outline-none border-none px-3 w-full',
              {
                'pr-5': type === 'password',
              },
            )}
            type={defaultType ? type : 'text'}
            value={value}
            {...props}
          />
  
          {/* {type === 'password' && (
            <SvgIcon
              className={cn(
                'hover:opacity-80 absolute right-3 h-5 w-5 hover:cursor-pointer',
                {},
              )}
              name={defaultType ? 'eye' : 'eye-off'}
              onClick={onClickVisible}
            />
          )} */}
        </div>
  
        {error && <p className="text-red-700 mt-0.5 text-xs">{error}</p>}
      </div>
    );
  });
  