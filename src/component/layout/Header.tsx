'use client'
import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import GlowButton from '../GlowButton';
import { FaXTwitter, FaTelegram } from 'react-icons/fa6';

// Create a MobileNav component
const MobileNav = () => {
  const [isOpen, setIsOpen] = useState(false);
  
  // Add effect to prevent body scrolling when menu is open
  useEffect(() => {
    if (isOpen) {
      // Prevent scrolling on the body when menu is open
      document.body.style.overflow = 'hidden';
      document.body.style.touchAction = 'none';
    } else {
      // Re-enable scrolling when menu is closed
      document.body.style.overflow = '';
      document.body.style.touchAction = '';
    }
    
    // Cleanup function to ensure scrolling is re-enabled when component unmounts
    return () => {
      document.body.style.overflow = '';
      document.body.style.touchAction = '';
    };
  }, [isOpen]);
  
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  
  const handleClick = (e: React.MouseEvent, section: string) => {
    e.preventDefault();
    setIsOpen(false); // Close the menu when a link is clicked
    
    const targetElement = document.getElementById(section);
    if (targetElement) {
      window.scrollTo({
        top: targetElement.offsetTop - 100,
        behavior: 'smooth'
      });
    }
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
        <div className="fixed inset-0 z-50 flex flex-col">
          {/* Video Background */}
          <div className="absolute inset-0 z-0 overflow-hidden">
            <video className="absolute inset-0 object-cover w-full h-full opacity-90" autoPlay loop muted>
              <source src="/bg-heroSection-base.mp4" type="video/mp4" />
            </video>
            {/* Dark overlay with blur for better readability */}
            <div className="absolute inset-0 bg-gradient-to-b from-[#060421]/30 to-[#150b39]/30 backdrop-blur-md"></div>
          </div>
          
          {/* Content container - make everything relative to be above the video */}
          <div className="relative z-10 flex flex-col h-full">
            {/* Top bar with logo and close button */}
            <div className="flex justify-between items-center p-6">
              <Image 
                src='/white-logo.png'
                alt='SynthOS Logo'
                height={40}
                width={180}
                className="w-40"
              />
              <button 
                onClick={toggleMenu}
                className="text-white p-2 focus:outline-none"
                aria-label="Close menu"
              >
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>

            {/* Navigation Links - now in a scrollable container that doesn't affect the main page */}
            <div className="flex-1 flex flex-col justify-center items-start px-12 space-y-8 overflow-y-auto py-8">
              <a href="#partners" onClick={(e) => handleClick(e, 'partners')} className="text-[2rem] text-white/70 hover:text-white transition-colors">Partners</a>
              <a href="#how-it-works" onClick={(e) => handleClick(e, 'how-it-works')} className="text-[2rem] text-white/70 hover:text-white transition-colors">How It Works</a>
              <a href="#roadmap" onClick={(e) => handleClick(e, 'roadmap')} className="text-[2rem] text-white/70 hover:text-white transition-colors">Roadmap</a>
              <a href="#our-team" onClick={(e) => handleClick(e, 'our-team')} className="text-[2rem] text-white/70 hover:text-white transition-colors">Our Team</a>
              <a href="#faq" onClick={(e) => handleClick(e, 'faq')} className="text-[2rem] text-white/70 hover:text-white transition-colors">FAQ</a>
            </div>

            {/* Social Media Icons */}
            <div className="flex justify-start space-x-7 pb-12 ml-12">
              {/* Twitter */}
             <a
                href="https://x.com/SynthOS__"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-white transition-colors"
                aria-label="X (formerly Twitter)"
              >
                <FaXTwitter size={40} />
              </a>
              <a
                href="https://t.me/+uN6dMuzQB_g2OGU1"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-white transition-colors"
                aria-label="Telegram"
              >
                <FaTelegram size={40} />
              </a>
            {/* Docs */}
            <a 
              href="https://www.notion.so/SynthOS-Automate-Your-Gains-19618bd263f08027993cfa6c5618941d" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-yellow-400 transition-colors"
            >
              <span className="sr-only">Documentation</span>
              <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
            </a>
            {/* Github */}
            <a 
              href="https://github.com/theSynthOS" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-yellow-400 transition-colors"
            >
              <span className="sr-only">GitHub</span>
              <svg className="h-10 w-10" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
              </svg>
            </a>
            </div>
          </div>
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
            <Link href="/">
            <Image 
              src='/white-logo.png'
              alt='SynthOS Logo'
              height={200}
              width={200}
              className="w-40  md:w-50"
            />
            </Link>
          </div>
          
          <div className="flex items-cente z-50">
            {/* Launch App Button - Hidden on Mobile */}
            <a href="https://app.synthos.fun" className="hidden md:block"
              target="_blank" 
              rel="noopener noreferrer"
              >
              <GlowButton>Launch App</GlowButton>
            </a>
            
            {/* Mobile Navigation */}
            <MobileNav />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header; 