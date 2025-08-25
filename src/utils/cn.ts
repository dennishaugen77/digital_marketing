import { twMerge } from "tailwind-merge"
import clsx, { type ClassValue } from "clsx" // Assuming clsx is also installed

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}
