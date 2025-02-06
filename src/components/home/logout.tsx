"use client"

import Link from 'next/link';
import React from 'react'
import { FiLogOut} from "react-icons/fi"; // For Cart icon
import { logout } from '../../../actions/auth';
export default function Logout() {
  return (
    <Link onClick={()=> logout()} href="/" className="text-lg hover:text-gray-900">
      <FiLogOut className="text-xl" />
    </Link>
  );
}

