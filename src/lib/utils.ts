import { type ClassValue, clsx } from 'clsx'
import { twMerge } from 'tailwind-merge'

/**
 * Tailwind CSS `clsx` function
 *
 * The function is a modified version of clsx which includes `twMerge`.
 * @param inputs - Class names
 * @returns - Merged class names
 */
export function cn(...inputs: Array<ClassValue>) {
  return twMerge(clsx(inputs))
}
