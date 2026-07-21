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
    let suppressHideUntil = 0;
    const onScroll = () => {
      const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
      if (nav && Date.now() > suppressHideUntil) {
        nav.style.transform =
          scrollTop > lastScrollTop && scrollTop > 100
            ? "translateY(-100%)"
            : "translateY(0)";
      }
      lastScrollTop = scrollTop;
    };
    window.addEventListener("scroll", onScroll);

    const onNavLinkClick = () => {
      // Anchor-link jumps shouldn't trigger the hide-on-scroll-down behavior.
      suppressHideUntil = Date.now() + 1000;
      if (nav) nav.style.transform = "translateY(0)";
    };
    const navLinks = nav?.querySelectorAll('a[href^="#"]') ?? [];
    navLinks.forEach((link) => link.addEventListener("click", onNavLinkClick));

    return () => {
      observer.disconnect();
      window.removeEventListener("scroll", onScroll);
      navLinks.forEach((link) => link.removeEventListener("click", onNavLinkClick));
    };
  }, []);

  return null;
}
