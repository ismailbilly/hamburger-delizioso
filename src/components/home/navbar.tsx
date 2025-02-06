

import Link from "next/link";
import { FiShoppingCart } from "react-icons/fi"; // For Cart icon
import { FiLogIn } from "react-icons/fi"; // For Login ico
import { auth } from "@/auth";
import { NavWrapper } from "./navWrapper";
import Logout from "./logout";

const navItems = [
  { name: "Home", href: "/" },
  { name: "Menu", href: "/menu" },
  { name: "About", href: "/about" },
  { name: "Contact", href: "/contact" },
];
export async function Navbar() {
  const session = auth();

  return (
    <NavWrapper
    >
      <div className="max-w-7xl mx-auto px-6 py-4 font-oswald">
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
            <Link href="/about" className="text-lg hover:text-gray-900">
              About
            </Link>
            <Link href="/services" className="text-lg hover:text-gray-900">
              Services
            </Link>
          </div>

          {/* Login and Cart */}
          <div className="flex space-x-6 items-center text-white">
            {!session ?
              (<Link href="/login" className="text-lg hover:text-gray-900">
                <FiLogIn className="text-xl" />
              </Link>)
              :
              <Logout />
           
            }
            <Link href="/register" className="text-lg hover:text-gray-900">
              Register
            </Link>
            <Link href="/cart" className="text-lg hover:text-gray-900">
              <FiShoppingCart className="text-xl" />
            </Link>
          </div>
        </div>
      </div>
    </NavWrapper>
  );
}
