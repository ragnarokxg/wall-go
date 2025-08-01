// src/lib/color.ts
// Helper for player color classes (for stones and walls)
import type { Player } from './types'

export function playerColorClass(p: Player) {
  return p === 'R'
    ? 'bg-rose-500 dark:bg-rose-400'
    : p === 'B'
      ? 'bg-indigo-500 dark:bg-indigo-400'
      : p === 'G'
        ? 'bg-emerald-500 dark:bg-emerald-400'
        : 'bg-amber-500 dark:bg-amber-400'
}
