"use client";
import { useEffect } from "react";
import { annotate } from "rough-notation";

const useTextAnnotation = (elementId: string) => {
  useEffect(() => {
    const element = document.getElementById(elementId);
    if (!element) return;

    const annotation = annotate(element, {
      type: "circle",
      color: "black",
      animate: true,
      animationDuration: 2000,
      padding: [10, 16, 10, 16],
      iterations: 1,
    });

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            annotation.show();
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1, rootMargin: "50px" }
    );

    observer.observe(element);

    return () => {
      observer.disconnect();
      annotation.remove();
    };
  }, [elementId]);
};

export default useTextAnnotation;
