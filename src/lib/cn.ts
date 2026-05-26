/**
 * cn — tiny className combiner.
 * Joins truthy class strings, the React equivalent of Astro's `class:list`.
 *
 *   cn('p-4', isActive && 'bg-blue', undefined)  // -> "p-4 bg-blue"
 */
export function cn(...classes: Array<string | false | null | undefined>): string {
  return classes.filter(Boolean).join(' ');
}
