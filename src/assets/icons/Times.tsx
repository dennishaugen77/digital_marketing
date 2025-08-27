import React from "react"
import { IconProps } from "./FooterLogo"

export const Times: React.FC<IconProps> = ({ color, className, style }) => (
  <svg
    fill={color || "currentColor"}
    className={"h-6 w-6" + (className ? ` ${className}` : "")}
    viewBox="0 0 24 24"
    enableBackground="new 0 0 100 100"
    xmlns="http://www.w3.org/2000/svg"
    style={{ color, ...(style || {}) }}
  >
    <g stroke="currentColor" strokeLinecap="round" strokeWidth="2">
      <path d="M6 18L18 6" />
      <path d="M18 18L6 6" />
    </g>
  </svg>
)
