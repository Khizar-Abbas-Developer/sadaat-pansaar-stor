"use client";

import React, { useState, useEffect } from "react";
import firstImage from "@/public/assets/carousel/1.png";
import secondImage from "@/public/assets/carousel/2.png";
import thirdImage from "@/public/assets/carousel/3.png";
import fourthImage from "@/public/assets/carousel/4.png";
import Image from "next/image";

const items = [
  { src: firstImage },
  { src: secondImage },
  { src: thirdImage },
  { src: fourthImage },
];

const Banner = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % items.length);
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  const scrollToContact = () => {
    document
      .getElementById("contact-section")
      ?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="relative w-full h-[30vh] sm:h-[55vh] lg:h-[45vh] xl:h-[75vh] overflow-hidden">
      {items.map((item, index) => (
        <div
          key={index}
          className={`absolute top-0 left-0 w-full h-full transition-opacity duration-1000 ${
            index === currentIndex ? "opacity-100 z-10" : "opacity-0 z-0"
          }`}
        >
          <Image
            src={item.src}
            alt={`Carousel item ${index + 1}`}
            fill
            className="object-contain xl:object-cover xl:object-top"
            priority={true}
          />
        </div>
      ))}
    </div>
  );
};

export default Banner;
