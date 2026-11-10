/**
 * Hero lattice: a fine diagonal trellis with one payment route (wallet, SignetPass, agent) that
 * draws once on load, then rests with a single small pulse every 8s. Route vertices sit on lattice
 * crossings (multiples of 24 whose x+y is a multiple of 48).
 */
export const ROUTE = "M120 552 L360 312 L504 456 L912 48";
export const NODES = [
  { x: 120, y: 552, at: 0 },
  { x: 504, y: 456, at: 0.5 },
  { x: 912, y: 48, at: 1 },
];
export const DRAW_SECONDS = 2.4;
