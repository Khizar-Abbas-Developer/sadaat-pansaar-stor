// app/components/ScrollManager.tsx
"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

export default function ScrollManager() {
  const pathname = usePathname();

  // Save scroll position
  useEffect(() => {
    const saveScroll = () => {
      sessionStorage.setItem("scrollY", window.scrollY.toString());
    };
    window.addEventListener("scroll", saveScroll);
    return () => window.removeEventListener("scroll", saveScroll);
  }, []);

  // Restore scroll on homepage
  useEffect(() => {
    if (pathname === "/") {
      const savedScrollY = sessionStorage.getItem("scrollY");
      if (savedScrollY) {
        setTimeout(() => {
          window.scrollTo(0, parseInt(savedScrollY, 10));
        }, 50); // delay to wait for page rendering
      }
    }
  }, [pathname]);

  return null;
}
