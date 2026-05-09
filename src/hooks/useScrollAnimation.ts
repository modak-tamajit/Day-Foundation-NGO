"use client";

import { useEffect, useRef, useState } from "react";

/**
 * Hook: useScrollAnimation
 * Detects when an element enters the viewport and triggers animation.
 * Uses IntersectionObserver for performance.
 *
 * @param threshold - How much of the element must be visible (0-1)
 * @param rootMargin - Margin around the root (e.g., "-50px")
 * @returns [ref, isVisible] - Attach ref to element, isVisible triggers animation
 */
export function useScrollAnimation(threshold = 0.1, rootMargin = "0px") {
  const ref = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(element); // Only animate once
        }
      },
      { threshold, rootMargin }
    );

    observer.observe(element);

    return () => {
      observer.unobserve(element);
    };
  }, [threshold, rootMargin]);

  return { ref, isVisible };
}
