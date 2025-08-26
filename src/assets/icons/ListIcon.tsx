import React from "react"
import { IconProps } from "./FooterLogo"

export const ListIcon: React.FC<IconProps> = ({ color, className, style }) => (
  <svg
    fill={color || "currentColor"}
    className={"h-6 w-6" + (className ? ` ${className}` : "")}
    viewBox="0 0 1920 1920"
    enableBackground="new 0 0 100 100"
    xmlns="http://www.w3.org/2000/svg"
    style={{ color, ...(style || {}) }}
  >
    <path
      d="M1920 1468.412v112.94H0v-112.94h1920Zm0-564.706v112.941H0V903.706h1920ZM1920 339v112.941H0V339h1920Z"
      fillRule="evenodd"
    />
  </svg>
)