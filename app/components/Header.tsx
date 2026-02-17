"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm border-b border-gray-200 shadow-sm">
      <nav className="max-w-[1280px] mx-auto px-6 md:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3">
            <div className="relative w-20 h-10 overflow-hidden">
              <Image 
                src="/Logo admi 2.png" 
                alt="ADMI AI Academy" 
                fill
                className="object-contain scale-125"
                style={{ objectPosition: 'center' }}
                priority
              />
            </div>
            <div className="px-3 py-1 rounded-md bg-ai-primary text-sm font-semibold text-white">
              AI Academy
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            <Link 
              href="/paths" 
              className="text-gray-700 hover:text-[#C55A11] font-medium transition-colors duration-200"
            >
              Learning Paths
            </Link>
            <Link 
              href="/about" 
              className="text-gray-700 hover:text-[#C55A11] font-medium transition-colors duration-200"
            >
              About
            </Link>
            <Link 
              href="/enquiry" 
              className="text-gray-700 hover:text-[#C55A11] font-medium transition-colors duration-200"
            >
              Contact
            </Link>
            <Link 
              href="/enquiry"
              className="px-6 py-2 rounded-lg bg-[#C55A11] text-white font-semibold hover:bg-[#a04a0e] transition-all duration-200 shadow-md hover:shadow-lg"
            >
              Enrol Now
            </Link>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 rounded-lg text-gray-700 hover:bg-gray-100 transition-colors"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>

        {/* Mobile menu */}
        {mobileMenuOpen && (
          <div className="md:hidden py-4 space-y-3 border-t border-gray-200 animate-fade-in">
            <Link 
              href="/paths" 
              className="block py-2 text-gray-700 hover:text-[#C55A11] font-medium transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              Learning Paths
            </Link>
            <Link 
              href="/about" 
              className="block py-2 text-gray-700 hover:text-[#C55A11] font-medium transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              About
            </Link>
            <Link 
              href="/enquiry" 
              className="block py-2 text-gray-700 hover:text-[#C55A11] font-medium transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              Contact
            </Link>
            <Link 
              href="/enquiry"
              className="block text-center px-6 py-2 rounded-lg bg-[#C55A11] text-white font-semibold hover:bg-[#a04a0e] transition-all"
              onClick={() => setMobileMenuOpen(false)}
            >
              Enrol Now
            </Link>
          </div>
        )}
      </nav>
    </header>
  );
}
