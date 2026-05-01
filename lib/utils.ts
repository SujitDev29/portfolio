export type RevealDelay = "1" | "2" | "3" | "4" | "5" | "6";

const MAX_DELAY = 6;

export function getRevealDelay(index: number): RevealDelay {
  const clamped = Math.max(0, Math.min(index, MAX_DELAY - 1));
  return String(clamped + 1) as RevealDelay;
}
