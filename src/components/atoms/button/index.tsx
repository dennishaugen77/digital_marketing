import { ButtonHTMLAttributes, FC, ReactNode } from "react"
import { SvgIcon } from "@/components/atoms/svgIcon"
import { cn } from "@/utils/cn"

type ButtonProps = {
  children: ReactNode
  loading?: boolean
  className?: string
  variant?: "primary" | "secondary"
} & ButtonHTMLAttributes<HTMLButtonElement>

export const Button: FC<ButtonProps> = ({
  children,
  loading,
  disabled,
  variant = "primary",
  className = "",
  ...props
}) => {
  return (
    <button
      className={cn(
        `relative flex h-9 items-center rounded-sm border border-transparent px-6 text-sm outline-none${className}`,
        {
          "bg-primary font-bold text-white hover:opacity-80":
            variant === "primary" && !(disabled || loading),
          "bg-primary/30 pointer-events-none text-gray-50": disabled || loading,
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
  )
}
