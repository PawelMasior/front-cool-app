"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import SiteNav from "./site-nav";
import MobileMenu from "./mobilemenu"; // Import the MobileMenu component

export default function Header() {
  const [isMobileMenuVisible, setIsMobileMenuVisible] = useState(false);
  const toggleMobileMenu = () => {
    setIsMobileMenuVisible(prevState => !prevState);
  };

  const closeMobileMenu = () => {
      setIsMobileMenuVisible(false);
  };

  return (
    <header className="flex justify-between items-center pt-4 px-4">
      <Link href="/"  className="wow animate__animated animate__fadeIn hover-up-2 duration-500">
        <p className="lg:text-2xl text-2xl font-bold text-stone-900">
          🧭 {" "}
          {/* <span className="text-transparent bg-clip-text bg-gradient-to-tr from-teal-400 to-blue-500"> */}
          Dalongo
          {/* </span> */}
        </p>
      </Link>
      <SiteNav />
      <div className="lg:hidden">
          <button className="navbar-burger flex items-center py-2 px-3 text-t_greydark hover:text-slate-600 rounded border border-slate-700 hover:border-t_grey" onClick={toggleMobileMenu}>
              <svg className="fill-current h-4 w-4" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                  <title>Mobile Menu</title>
                  <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"></path>
              </svg>
          </button>
      </div>
      {isMobileMenuVisible && (
          <MobileMenu
              hiddenClass={isMobileMenuVisible ? "" : "hidden"}
              handleRemove={closeMobileMenu}
          />
        )}
    </header>
  );
}
