import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

/**
 * Utility: Merges Tailwind CSS classes safely
 * Combines clsx (conditional classes) with tailwind-merge (deduplication)
 */
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
