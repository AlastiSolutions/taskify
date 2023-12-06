"use client";

import React, { useState } from "react";

import Link from "next/link";
import NavbarTab from "./NavbarTab";

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  function toggleMobileMenu() {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  }

  return (
    <>
      <div className="bg-neutral-800 text-neutral-200 p-4 md:p-6">
        <div className="flex items-center justify-between">
          <Link href="/">
            <h1 className="text-2xl md:text-3xl font-semibold">Taskify</h1>
          </Link>
          {/* Mobile Menu Button */}
          <button
            className="md:hidden focus:outline-none"
            onClick={toggleMobileMenu}
            aria-label="Toggle Mobile Menu"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="https://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16m-7 6h7"
              ></path>
            </svg>
          </button>
          {/* Desktop Menu */}
          <ul className="hidden md:flex gap-4 items-center">
            <NavbarTab title="Home" link="/" />
            <NavbarTab title="About" link="/about" />
            <NavbarTab title="Pricing" link="/pricing" />
            <NavbarTab title="Contact" link="/contact" />
            <NavbarTab title="Dashboard" link="/app" />
          </ul>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden mt-4">
            <ul className="flex flex-col gap-4">
              <NavbarTab title="Home" link="/" />
              <NavbarTab title="About" link="/about" />
              <NavbarTab title="Pricing" link="/pricing" />
              <NavbarTab title="Contact" link="/contact" />
              <NavbarTab title="Dashboard" link="/app" />
            </ul>
          </div>
        )}
      </div>
    </>
  );
}
