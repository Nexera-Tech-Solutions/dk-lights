import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export const range = (init: number, fin?: number, step: number = 1) => {
    const arr = [];

    if (!fin) {
        fin = init;
        init = 0;
    }

    for (let i = init; i < fin; i = i + step) {
        arr.push(i);
    }

    return arr;
};