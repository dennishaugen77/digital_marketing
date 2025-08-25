import React from "react"
import { IconProps } from "./FooterLogo"

export const Envelop: React.FC<IconProps> = ({ color, className, style }) => (
  <svg
    fill={color || "currentColor"}
    className={"h-6 w-6" + (className ? ` ${className}` : "")}
    viewBox="0 0 24 24"
    enableBackground="new 0 0 100 100"
    xmlns="http://www.w3.org/2000/svg"
    style={{ color, ...(style || {}) }}
  >
    <path fill-rule="evenodd" clip-rule="evenodd" d="M7 4C4.23858 4 2 6.23858 2 9V15C2 17.7614 4.23858 20 7 20H17C19.7614 20 22 17.7614 22 15V9C22 6.23858 19.7614 4 17 4H7ZM7.62473 8.21913C7.19347 7.87412 6.56418 7.94404 6.21917 8.3753C5.87416 8.80657 5.94408 9.43586 6.37534 9.78087L8.87656 11.7818C10.7027 13.2427 13.2974 13.2427 15.1235 11.7818L17.6247 9.78087C18.056 9.43586 18.1259 8.80657 17.7809 8.3753C17.4359 7.94404 16.8066 7.87412 16.3753 8.21913L13.8741 10.2201C12.7785 11.0966 11.2216 11.0966 10.126 10.2201L7.62473 8.21913Z" fill="currentColor"/>
  </svg>
)



