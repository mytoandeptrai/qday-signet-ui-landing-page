// Vertical offsets (viewBox units) of each plate when stacked vs. fanned out, top layer first.
export const STACKED = [220, 200, 180] as const;
export const FANNED = [0, 240, 480] as const;
export const CENTER_X = 260; // 60 (plate x) + 200 (half plate width)
export const PLATE_MID = 100;
// The payment dot starts once the plates are fanned out, then falls through them.
export const FAN_END = 0.6;
export const FALL_END = 0.92;
