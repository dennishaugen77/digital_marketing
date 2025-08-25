import React from "react"
import { IconProps } from "./FooterLogo"

export const ChartLineUp: React.FC<IconProps> = ({
  color,
  className,
  style,
}) => (
  <svg
    fill="none"
    className={"h-6 w-6" + (className ? ` ${className}` : "")}
    viewBox="0 0 24 24"
    enableBackground="new 0 0 100 100"
    xmlns="http://www.w3.org/2000/svg"
    style={{ color, ...(style || {}) }}
  >
    <path
      d="M21 21H7.8C6.11984 21 5.27976 21 4.63803 20.673C4.07354 20.3854 3.6146 19.9265 3.32698 19.362C3 18.7202 3 17.8802 3 16.2V3M6 15L10 11L14 15L20 9M20 9V13M20 9H16"
      stroke={color || "currentColor"}
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
)
