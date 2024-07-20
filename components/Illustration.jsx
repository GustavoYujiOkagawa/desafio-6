"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";

const Illustration = () => {
  const [isLargeScreen, setIsLargeScreen] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsLargeScreen(window.innerWidth >= 1024);
    };

    handleResize();

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <>
      {isLargeScreen ? (
        <Image
          src="/assets/illustration-sign-up-desktop.svg"
          width={400}
          height={600}
          alt="Desktop Illustration"
          className="flex flex-1"
        />
      ) : (
        <Image
          src="/assets/illustration-sign-up-mobile.svg"
          width={500}
          height={200}
          alt="Mobile Illustration"
        />
      )}
    </>
  );
};

export default Illustration;
