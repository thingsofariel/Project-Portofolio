"use client";

import {
  useEffect,
  useRef,
  type ElementType,
  type ReactNode,
  type RefObject,
  type ComponentPropsWithoutRef,
} from "react";

let globalObserver: IntersectionObserver | null = null;
let readyClassApplied = false;

function ensureReady() {
  if (readyClassApplied || typeof window === "undefined") return;
  if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

  document.documentElement.classList.add("js-reveal-ready");
  readyClassApplied = true;

  globalObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("in-view");
          globalObserver?.unobserve(entry.target);
        }
      });
    },
    { threshold: 0, rootMargin: "0px 0px -10% 0px" }
  );
}

/**
 * Reusable hook version of the reveal behavior, for components that
 * already manage their own root ref (e.g. LanyardCard, which also needs
 * the ref for hover-tilt math) and can't use the <Reveal> wrapper
 * without breaking CSS Grid placement rules like `grid-column: 1/-1`.
 */
export function useRevealEffect(ref: RefObject<HTMLElement | null>) {
  useEffect(() => {
    ensureReady();
    const el = ref.current;
    if (!el || !globalObserver) return;

    globalObserver.observe(el);
    const timeout = setTimeout(() => el.classList.add("in-view"), 3000);
    return () => clearTimeout(timeout);
  }, [ref]);
}

export default function Reveal<T extends ElementType = "div">({
  children,
  as,
  className = "",
  hidden = false,
  ...rest
}: {
  children: ReactNode;
  as?: T;
  className?: string;
  hidden?: boolean;
} & Omit<ComponentPropsWithoutRef<T>, "as" | "className" | "hidden" | "children">) {
  const Tag = (as ?? "div") as ElementType;
  const ref = useRef<HTMLElement | null>(null);
  useRevealEffect(ref);

  return (
    <Tag ref={ref} className={`reveal ${className}`.trim()} hidden={hidden} {...rest}>
      {children}
    </Tag>
  );
}
