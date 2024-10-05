"use client";

import { useState } from "react";
import Link from "next/link";

export default function Nav() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-red-600 text-white ">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link href="/" className="text-xl font-medium ">
              Counter
            </Link>
          </div>

          {/* Main Navigation */}
          <div className="hidden md:flex space-x-4 font-light">
            <Link href="/" className=" hover:text-slate-400">
              Services
            </Link>
            <Link href="/" className=" hover:text-slate-400">
              Investing
            </Link>
            <Link href="/" className=" hover:text-slate-400">
              Pricing
            </Link>
            <Link href="/" className=" hover:text-slate-400">
              Resource
            </Link>
            <Link href="/" className=" hover:text-slate-400">
              News
            </Link>
            <Link href="/" className=" hover:text-slate-400">
              About
            </Link>
          </div>
          {/* watch videos */}
          <div className="hidden lg:block text-black px-4 py-2 text-smfont-medium bg-white rounded-full">
            Watch Videos
          </div>
          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              type="button"
              className=" "
              aria-controls="mobile-menu"
              aria-expanded="false"
            >
              <svg
                className="h-6 w-6"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {isOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden ${isOpen ? "block" : "hidden"}`}
        id="mobile-menu"
      >
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
          <Link href="/" className="block hover:text-slate-200">
            Home
          </Link>
          <Link href="/" className="block hover:text-slate-200">
            Home
          </Link>
          <Link href="/" className="block hover:text-slate-200">
            Home
          </Link>
          <Link href="/" className="block hover:text-slate-200">
            Home
          </Link>
        </div>
      </div>
    </nav>
  );
}
