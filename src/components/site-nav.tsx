"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";


export default function SiteNav() {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [scroll, setScroll] = useState(false);
  const [isMobileMenuVisible, setIsMobileMenuVisible] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownOpen(prevState => !prevState);
  };

  return (
    <nav>
        <ul className="hidden lg:flex lg:items-center lg:w-auto lg:space-x-16 list-none">
          <li className="pt-4 pb-4 group relative">
              <button onClick={toggleDropdown} className="text-lg font-bold text-slate-800 hover:text-blueGray-500 duration-500">
              💡 About
              </button>
              {isDropdownOpen && (
                  <ul className="drop-down-menu absolute min-w-280 bg-white shadow-md rounded mt-2 z-10">
                      <li>
                          <Link href="/register" className="menu-sub-item text-base text-stone-800 hover:text-stone-600 font-bold block px-4 py-2">
                              🗿 register
                          </Link>
                      </li>
                      <li>
                          <Link href="/contact" className="menu-sub-item text-base text-stone-800 hover:text-stone-600 font-bold block px-4 py-2">
                              🗿 contact
                          </Link>
                      </li>
                  </ul>
              )}
          </li>
          <li className="pt-4 pb-4">
            <Link href="/login" >
              <div className="bg-gradient-to-tr from-blue-600 via-blue-500 to-blue-400 duration-500 border-2 border-stone-950 px-4 py-2 rounded-lg shadow-white shadow-lg">
                  <p className="text-white font-bold hover-up-2 text-base">
                  🔐 Login
                  </p>
              </div>
            </Link>
          </li>
      </ul>
    </nav>
  );
}
