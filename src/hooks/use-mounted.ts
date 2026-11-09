import { useEffect, useState } from "react";

/** False on the server and on the first client render, so output depending on browser-only state (media queries) cannot mismatch hydration. */
export function useMounted() {
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);
  return mounted;
}
