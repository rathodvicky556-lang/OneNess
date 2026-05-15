"use client";

import Image from "next/image";

const NewsLatterBox = () => {
  return (
    <div
      className="wow fadeInUp shadow-three dark:bg-gray-dark relative z-10 rounded-sm bg-white overflow-hidden"
      data-wow-delay=".2s"
    >
      <Image
        src="/images/contact_us.jpg"
        alt="Contact Us"
        width={500}
        height={600}
        className="w-full h-auto object-cover"
      />
    </div>
  );
};

export default NewsLatterBox;
