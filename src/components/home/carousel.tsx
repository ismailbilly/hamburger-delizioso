"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";

const images = [
  { src: "/hero/slide-4.jpg", text: "Crispy chicken" },
  { src: "/hero/slide-5.jpg", text: "Chicken Fingers" },
  { src: "/hero/slide-6.jpg", text: "Double Burger" },
];

export default function Carousel() {
  const [index, setIndex] = useState(0);
  const direction = index % 2 === 0 ? "left" : "right";

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000); // Change every 5 seconds
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative h-screen w-full overflow-hidden bg-orange-700">
      {/* Background Image with Slide Animation */}
      <AnimatePresence>
        <motion.div
          key={index}
          initial={{ x: direction === "left" ? "100%" : "-100%" }}
          animate={{ x: 0 }}
          exit={{ x: direction === "left" ? "-100%" : "100%" }}
          transition={{ duration: 1, ease: "easeInOut" }}
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${images[index].src})` }}
        />
      </AnimatePresence>
      {/* Dark Overlay */}
      <div className="absolute inset-0  flex items-center">
        {/* Animated Text */}
        <motion.div
          key={index}
          initial={{ x: direction === "left" ? "-100%" : "100%", opacity: 0 }}
          animate={{ x: "20%", opacity: 1 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="text-white text-center p-6"
        >
          <Card className="bg-white/20 backdrop-blur-md rounded-2xl p-6 text-wrap max-w-[500px]">
            <CardContent className="text-8xl font-bold font-lilita_one text-white leading-[1.1] tracking-[.07em] text-justify">
              {images[index].text.toUpperCase()}
            </CardContent>
            <CardContent className="font-oswald text-white text-center text-6xl">
              ONLY <span className=" text-secondary">&#8358;2500</span>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </div>
  );
}
