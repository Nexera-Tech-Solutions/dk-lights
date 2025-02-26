// components/CursorAnimation.jsx
"use client";

import { useEffect, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

const CursorAnimation = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [trailPoints, setTrailPoints] = useState([]);
  const maxTrailPoints = 5; // Number of trailing dots

  useEffect(() => {
    // Register ScrollTrigger with GSAP
    if (typeof window !== "undefined") {
      gsap.registerPlugin(ScrollTrigger);
    }

    // Create cursor elements
    const setupCursorElements = () => {
      // Main cursor
      if (!document.querySelector(".cursor")) {
        const cursor = document.createElement("div");
        cursor.classList.add("cursor");
        document.body.appendChild(cursor);
      }

      // Cursor blur/glow effect
      if (!document.querySelector(".cursor-blur")) {
        const cursorBlur = document.createElement("div");
        cursorBlur.classList.add("cursor-blur");
        document.body.appendChild(cursorBlur);
      }

      // Create trail points
      for (let i = 0; i < maxTrailPoints; i++) {
        if (!document.querySelector(`.cursor-trail-${i}`)) {
          const trail = document.createElement("div");
          trail.classList.add("cursor-trail", `cursor-trail-${i}`);
          trail.style.opacity = 1 - i / maxTrailPoints;
          document.body.appendChild(trail);
        }
      }
    };

    setupCursorElements();

    // Main cursor reference
    const cursor = document.querySelector(".cursor");
    const cursorBlur = document.querySelector(".cursor-blur");

    // Track mouse position and update cursor elements
    const handleMouseMove = (event: any) => {
      const newPosition = { x: event.clientX, y: event.clientY };
      setMousePosition(newPosition);

      // Update trails
      setTrailPoints((prev) => {
        // Add new position to beginning
        const updated = [newPosition, ...prev.slice(0, maxTrailPoints - 1)];
        return updated;
      });

      // Update cursor position
      if (cursor) {
        cursor.style.left = `${newPosition.x}px`;
        cursor.style.top = `${newPosition.y}px`;
      }

      // Update blur position with slight delay for subtle effect
      if (cursorBlur) {
        cursorBlur.style.left = `${newPosition.x}px`;
        cursorBlur.style.top = `${newPosition.y}px`;
      }

      // Update trail positions
      trailPoints.forEach((point, index) => {
        const trail = document.querySelector(`.cursor-trail-${index}`);
        if (trail && point) {
          trail.style.left = `${point.x}px`;
          trail.style.top = `${point.y}px`;
          // Fade out based on position in trail
          trail.style.opacity = 0.5 * (1 - index / maxTrailPoints);
        }
      });
    };

    // Find and mark interactive elements
    const markInteractiveElements = () => {
      // Common interactive elements
      const interactiveElements = document.querySelectorAll(
        'a, button, input, select, textarea, [role="button"]'
      );
      interactiveElements.forEach((el) => {
        el.classList.add("interactive-element");
      });

      // Add your site's specific interactive classes
      const additionalElements = document.querySelectorAll(
        ".nav h4, .card-container div"
      );
      additionalElements.forEach((el) => {
        el.classList.add("interactive-element");
      });
    };

    markInteractiveElements();

    // Add hover effects for interactive elements
    const setupHoverEffects = () => {
      const interactiveElements = document.querySelectorAll(
        ".interactive-element"
      );

      interactiveElements.forEach((element) => {
        element.addEventListener("mouseenter", () => {
          if (cursor) {
            cursor.style.width = "24px";
            cursor.style.height = "24px";
            cursor.style.backgroundColor = "white";
            cursor.style.mixBlendMode = "difference";
          }

          if (cursorBlur) {
            cursorBlur.style.width = "150px";
            cursorBlur.style.height = "150px";
            cursorBlur.style.opacity = "0.3";
          }
        });

        element.addEventListener("mouseleave", () => {
          if (cursor) {
            cursor.style.width = "12px";
            cursor.style.height = "12px";
            cursor.style.backgroundColor = "white";
            cursor.style.mixBlendMode = "exclusion";
          }

          if (cursorBlur) {
            cursorBlur.style.width = "300px";
            cursorBlur.style.height = "300px";
            cursorBlur.style.opacity = "0.05";
          }
        });
      });
    };

    setupHoverEffects();

    // Add scroll animations for cursor glow
    const setupScrollEffects = () => {
      // Make cursor glow effect more intense on scroll
      gsap.to(".cursor-blur", {
        opacity: 0.15,
        scrollTrigger: {
          trigger: "body",
          start: "top top",
          end: "bottom bottom",
          scrub: true,
        },
      });
    };

    setupScrollEffects();

    // Set up event listeners
    document.addEventListener("mousemove", handleMouseMove);

    // Observer to handle dynamically added elements
    const observer = new MutationObserver(() => {
      markInteractiveElements();
      setupHoverEffects();
    });

    observer.observe(document.body, { childList: true, subtree: true });

    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
      observer.disconnect();
    };
  }, [trailPoints]);

  return null; // This component doesn't render visible content
};

export default CursorAnimation;
