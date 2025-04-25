"use client";
import { useEffect } from "react";

const useScrollToPosition = (scrollY = 0) => {
  useEffect(() => {
    window.scrollTo({ top: scrollY, behavior: "smooth" });
  }, [scrollY]);
};

export default useScrollToPosition;
