import React from "react";
import Image from "next/image";

const Banner = () => {
  return (
    <div className="relative w-full h-[40vh] sm:h-[50vh] md:h-[60vh] lg:h-[80vh] overflow-hidden rounded-lg mt-0">
      <Image
        src="/assets/banner1.webp"
        alt="banner"
        fill
        className="object-contain rounded-lg"
        quality={100}
        priority
        sizes="100vw"
      />
    </div>
  );
};

export default Banner;
