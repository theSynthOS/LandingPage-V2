'use client'
import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

// Create a MobileNav component
const MobileNav = () => {
  const [isOpen, setIsOpen] = useState(false);
  
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  
  return (
    <div className="md:hidden">
      {/* Hamburger Button */}
      <button 
        onClick={toggleMenu}
        className="text-white p-2 focus:outline-none"
        aria-label="Toggle menu"
      >
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} />
        </svg>
      </button>
      
      {/* Dropdown Menu */}
      {isOpen && (
        <div className="absolute top-full right-0 mt-2 mr-4 w-48 rounded-md shadow-lg py-1 bg-gray-900/80 backdrop-blur-lg ring-1 ring-black ring-opacity-5 focus:outline-none z-50">
          <Link href="#partners" className="block px-4 py-2 text-white hover:bg-purple-900/50">Partners</Link>
          <Link href="#how-it-works" className="block px-4 py-2 text-white hover:bg-purple-900/50">How It Works</Link>
          <Link href="#roadmap" className="block px-4 py-2 text-white hover:bg-purple-900/50">Roadmap</Link>
          <Link href="#our-team" className="block px-4 py-2 text-white hover:bg-purple-900/50">Our Team</Link>
          <Link href="#faq" className="block px-4 py-2 text-white hover:bg-purple-900/50">FAQ</Link>
        </div>
      )}
    </div>
  );
};

const Header = () => {
  return (
    <header className="absolute top-0 left-0 w-full z-50 py-6">
      <div className="container px-4 mx-auto">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center">
            <Image 
              src='/white-logo.png'
              alt='SynthOS Logo'
              height={200}
              width={200}
              className="mr-2"
            />
          </div>
          
          <div className="flex items-center">
            {/* Launch App Button - Hidden on Mobile */}
            <Link href="#" className="px-8 py-3 rounded-full bg-transparent text-white border border-gray-600 hover:bg-gray-800 transition duration-300 hidden md:block">
              Launch App
            </Link>
            
            {/* Mobile Navigation */}
            <MobileNav />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header; 