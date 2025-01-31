"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";

const images = [
  { src: "/hero/slide-4.jpg", text: "Delicious Pizza, Just for You!" },
  { src: "/hero/slide-5.jpg", text: "Fresh Ingredients, Perfect Taste!" },
  { src: "/hero/slide-6.jpg", text: "Order Now and Enjoy!" },
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
      <div className="absolute inset-0  flex  items-center">
        {/* Animated Text */}
        <motion.div
          key={index}
          initial={{ x: direction === "left" ? "-100%" : "100%", opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="text-white text-center p-6"
        >
          <Card className= "bg-white/20 backdrop-blur-md rounded-2xl p-6">
            <CardContent className="text-4xl font-bold lilita">
              {images[index].text}
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </div>
  );
}
