// components/Counter.js
"use client";

import { useEffect, useRef, useState } from "react";

export default function Reviews() {
  const [count, setCount] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef(null);

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

  useEffect(() => {
    if (!isVisible) return;

    const interval = setInterval(() => {
      setCount((prevCount) => {
        if (prevCount < 850) {
          return prevCount + 50;
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
