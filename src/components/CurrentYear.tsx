"use client";

export default function CurrentYear() {
  // suppressHydrationWarning covers the only real edge case: a page built
  // in the last moments of one year and hydrated in the first moments of
  // the next. Not worth a useState/useEffect dance for that.
  return <span suppressHydrationWarning>{new Date().getFullYear()}</span>;
}
