// HeroSection.jsx
"use client";
import Image from "next/image";
import { useEffect, useState } from "react";
import speaker from "../assets/images/fan1.jpeg";
import blender from "../assets/images/iron6.png";
import radio from "../assets/images/radiov2.webp";
import fan from "../assets/images/speaker2.jpg";
import television from "../assets/images/tv6.jpg";

const HeroSection = () => {
  const images = [speaker, radio, television, fan, blender];

  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % images.length);
    }, 5000); // Change image every 5 seconds

    return () => clearInterval(interval); // Cleanup on unmount
  }, [images.length]);

  return (
    <section className="relative h-screen flex items-center justify-center text-center text-white overflow-hidden">
      {images.map((image, index) => (
        <Image
          key={index}
          className={`absolute inset-0  bg-cover bg-center transition-opacity duration-1000 ease-in-out place-self-center w-full ${
            index === currentImage ? "opacity-100" : "opacity-0"
          }`}
          src={image}
          alt="image"
          // style={{ backgroundImage: `url(${image})` }}
        />
      ))}
      <div className="absolute inset-0 bg-black/50 z-10"></div> {/* Overlay */}
      <div className="relative z-20">
        <h1 className="text-5xl md:text-6xl font-bold mb-4 text-shadow-lg">
          Welcome Adom Repairshop
        </h1>
        <p className="text-xl md:text-2xl mb-8 text-shadow-md">
          We sell and repair all types of electrical gadgets
        </p>
      </div>
    </section>
  );
};

export default HeroSection;
