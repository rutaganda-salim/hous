'use client';
import React from 'react';
import Link from 'next/link';
import { useState } from 'react';
import { ChevronDown } from 'lucide-react';

import Logo from './Logo';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="bg-[#14211C] px-4 py-3">
      <nav className="max-w-6xl mx-auto bg-gradient-to-r from-[#485550] to-white/10 backdrop-blur-sm rounded-3xl">
        <div className="px-6 py-1 flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2">
            <div className="p-1.5 rounded">
              <Logo />
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            <Link
              href="/features"
              className="text-white hover:text-teal-500 transition-colors"
            >
              Features
            </Link>
            <Link
              href="/about"
              className="text-white hover:text-teal-500 transition-colors"
            >
              About Us
            </Link>
            <div className="relative">
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="flex items-center gap-1 text-white hover:text-teal-500 transition-colors"
              >
                Solutions
                <ChevronDown className="w-4 h-4" />
              </button>
              {isOpen && (
                <div className="absolute top-full mt-2 py-2 w-48 bg-[#0A1A14] border border-white/10 rounded-lg shadow-lg backdrop-blur-sm">
                  <Link
                    href="/solutions/residential"
                    className="block px-4 py-2 text-white hover:bg-white/5"
                  >
                    Residential
                  </Link>
                  <Link
                    href="/solutions/commercial"
                    className="block px-4 py-2 text-white hover:bg-white/5"
                  >
                    Commercial
                  </Link>
                  <Link
                    href="/solutions/enterprise"
                    className="block px-4 py-2 text-white hover:bg-white/5"
                  >
                    Enterprise
                  </Link>
                </div>
              )}
            </div>
            <Link
              href="/pricing"
              className="text-white hover:text-teal-500 transition-colors"
            >
              Pricing
            </Link>
            <Link
              href="/contact"
              className="text-white hover:text-teal-500 transition-colors"
            >
              Contact Us
            </Link>
          </div>

          {/* Login Button */}
          <Link
            href="/login"
            className="px-6 py-2 rounded-full border border-white text-white hover:bg-white/10 transition-colors"
          >
            Login
          </Link>

          {/* Mobile Menu Button */}
          <button className="md:hidden text-white">
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>
      </nav>
    </div>
  );
}
