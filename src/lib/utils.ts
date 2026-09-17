import clsx, { type ClassValue } from 'clsx'

/** Conditional class names, nothing more. */
export function cn(...classes: ClassValue[]) {
  return clsx(classes)
}
