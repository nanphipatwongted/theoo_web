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
    const navLinks = Array.from(nav?.querySelectorAll("[data-nav-link]") ?? []);
    navLinks.forEach((link) => link.addEventListener("click", onNavLinkClick));

    // Highlight the nav link matching the section currently in view.
    const ACTIVE_CLASSES = ["text-primary", "border-primary"];
    const INACTIVE_CLASSES = ["text-on-surface/80", "border-transparent"];
    const setActiveLink = (id: string | null) => {
      navLinks.forEach((link) => {
        const isMatch = id !== null && link.getAttribute("href") === `#${id}`;
        link.classList.remove(...(isMatch ? INACTIVE_CLASSES : ACTIVE_CLASSES));
        link.classList.add(...(isMatch ? ACTIVE_CLASSES : INACTIVE_CLASSES));
      });
    };

    const sectionIds = Array.from(
      new Set(
        navLinks
          .map((link) => link.getAttribute("href"))
          .filter((href): href is string => !!href?.startsWith("#"))
          .map((href) => href.slice(1)),
      ),
    );
    const sections = sectionIds
      .map((id) => document.getElementById(id))
      .filter((el): el is HTMLElement => !!el);

    const sectionObserver = new IntersectionObserver(
      (entries) => {
        const visible = entries.find((entry) => entry.isIntersecting);
        if (visible) setActiveLink(visible.target.id);
      },
      { rootMargin: "-45% 0px -50% 0px", threshold: 0 },
    );
    sections.forEach((el) => sectionObserver.observe(el));

    const onScrollTop = () => {
      if (window.scrollY < 50) setActiveLink(null);
    };
    window.addEventListener("scroll", onScrollTop);

    return () => {
      observer.disconnect();
      sectionObserver.disconnect();
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("scroll", onScrollTop);
      navLinks.forEach((link) => link.removeEventListener("click", onNavLinkClick));
    };
  }, []);

  return null;
}
