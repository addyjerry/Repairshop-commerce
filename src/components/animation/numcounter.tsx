// components/Counter.js
"use client";

import { useEffect, useRef, useState } from "react";

export default function Counter() {
  const [count, setCount] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef(null);

  // IntersectionObserver to detect when component is in view
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.5 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, []);

  // Counter logic when visible
  useEffect(() => {
    if (!isVisible) return;

    const interval = setInterval(() => {
      setCount((prevCount) => {
        if (prevCount < 100) {
          return prevCount + 10;
        } else {
          clearInterval(interval);
          return prevCount;
        }
      });
    }, 500);

    return () => clearInterval(interval);
  }, [isVisible]);

  return (
    <h3 ref={ref} className="text-2xl font-bold dark:text-white">
      {count}+
    </h3>
  );
}
