"use client"

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { FiShoppingCart } from "react-icons/fi"; // For Cart icon
import { FiLogIn } from "react-icons/fi"; // For Login ico
const navItems = [
  { name: "Home", href: "/" },
  { name: "Menu", href: "/menu" },
  { name: "About", href: "/about" },
  { name: "Contact", href: "/contact" },
];
export function Navbar() {
  const [isSticky, setIsSticky] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isSticky ? "bg-white shadow-md" : "bg-transparent"
      }`}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
    >
      <div className="max-w-7xl mx-auto px-6 py-4 oswald">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <div className="text-2xl font-bold text-gray-900">
            <Link href="/" className="text-gray-900 hover:text-gray-700">
              Logo
            </Link>
          </div>

          {/* Navigation Menu */}
          <div className="hidden md:flex space-x-6 text-white">
            <Link href="/" className="text-lg  hover:text-gray-900">
              Home
            </Link>
            <Link
              href="/about"
              className="text-lg hover:text-gray-900"
            >
              About
            </Link>
            <Link
              href="/services"
              className="text-lg hover:text-gray-900"
            >
              Services
            </Link>
          </div>

          {/* Login and Cart */}
          <div className="flex space-x-6 items-center text-white">
            <Link
              href="/login"
              className="text-lg hover:text-gray-900"
            >
              <FiLogIn className="text-xl" />
            </Link>
            <Link
              href="/cart"
              className="text-lg hover:text-gray-900"
            >
              <FiShoppingCart className="text-xl" />
            </Link>
          </div>
        </div>
      </div>
    </motion.nav>
  );
}
