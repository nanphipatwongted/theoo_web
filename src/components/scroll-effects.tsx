"use client";

import { useEffect } from "react";

export function ScrollEffects() {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            entry.target.classList.add("active");
          }
        }
      },
      { threshold: 0.1, rootMargin: "0px 0px -50px 0px" },
    );

    const revealEls = document.querySelectorAll(".editorial-reveal");
    revealEls.forEach((el) => observer.observe(el));

    const nav = document.querySelector("nav");
    let lastScrollTop = 0;
    const onScroll = () => {
      const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
      if (nav) {
        nav.style.transform =
          scrollTop > lastScrollTop && scrollTop > 100
            ? "translateY(-100%)"
            : "translateY(0)";
      }
      lastScrollTop = scrollTop;
    };
    window.addEventListener("scroll", onScroll);

    return () => {
      observer.disconnect();
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  return null;
}
