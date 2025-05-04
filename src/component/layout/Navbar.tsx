'use client'
import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { gsap } from 'gsap';

interface NavLinkProps {
  href: string;
  children: React.ReactNode;
  isActive: boolean;
  onClick: (e: React.MouseEvent) => void;
}

const Navbar = () => {
  const [activeSection, setActiveSection] = useState<string | null>(null);
  const navRef = useRef<HTMLDivElement>(null);
  const spotlightRef = useRef<SVGFEPointLightElement>(null);
  
  // Config for spotlight effect
  const config = {
    spotlight: {
      speed: 0.25,
      deviation: 0.8,
      surface: 0.5,
      specular: 6,
      exponent: 65,
      light: 'hsla(234, 14%, 100%, 0.45)',
      x: 0,
      y: 40,
      z: 82,
    },
    ambience: {
      deviation: 0.8,
      surface: 0.5,
      specular: 25,
      exponent: 65,
      light: 'hsla(270, 50%, 80%, 0.35)',
      x: 120,
      y: -154,
      z: 160,
    }
  };
  
  // Update spotlight position based on active link
  const updateSpotlight = (section: string | null) => {
    if (!navRef.current || !spotlightRef.current) return;
    
    if (!section) {
      // If no section is active, hide spotlight by moving it off-screen
      gsap.to(spotlightRef.current, {
        duration: config.spotlight.speed,
        attr: {
          x: -100,
        },
      });
      return;
    }
    
    const navBounds = navRef.current.getBoundingClientRect();
    const activeLink = navRef.current.querySelector(`a[href="#${section}"]`);
    
    if (activeLink) {
      const anchorBounds = activeLink.getBoundingClientRect();
      
      gsap.to(spotlightRef.current, {
        duration: config.spotlight.speed,
        attr: {
          x: anchorBounds.left - navBounds.left + anchorBounds.width * 0.5,
        },
      });
    }
  };
  
  // Update active section based on scroll position
  useEffect(() => {
    const handleScroll = () => {
      const sections = ['partners', 'how-it-works', 'roadmap', 'our-team', 'faq'];
      
      // Check if we're at the hero section (top of page)
      if (window.scrollY < 100) {
        if (activeSection !== 'partners') {
          setActiveSection('partners');
          updateSpotlight('partners');
        }
        return;
      }

      // Find which section is currently in view
      let currentSection = sections[0]; // Default to first section
      
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          // Consider a section in view when its top is near the top of the viewport
          // Adding a small offset to trigger slightly before the section starts
          if (rect.top <= 150) { // Increased from 0 to 150px to trigger earlier
            currentSection = section;
          }
        }
      }
      
      if (currentSection !== activeSection) {
        setActiveSection(currentSection);
        updateSpotlight(currentSection);
      }
    };
    
    // Call on initial render
    handleScroll();
    
    // Setup scroll listener with debounce for performance
    let timeoutId: NodeJS.Timeout;
    const debouncedScroll = () => {
      clearTimeout(timeoutId);
      timeoutId = setTimeout(handleScroll, 10);
    };
    
    window.addEventListener('scroll', debouncedScroll);
    return () => {
      window.removeEventListener('scroll', debouncedScroll);
      clearTimeout(timeoutId);
    };
  }, [activeSection]);
  
  // Handle click on navigation links
  const handleClick = (e: React.MouseEvent, section: string) => {
    e.preventDefault();
    
    // Immediately update the active section and spotlight
    setActiveSection(section);
    updateSpotlight(section);
    
    const targetElement = document.getElementById(section);
    if (targetElement) {
      // Get the element's position relative to the viewport
      const elementPosition = targetElement.getBoundingClientRect().top;
      // Get the current scroll position
      const offsetPosition = elementPosition + window.pageYOffset - 100;
      
      // Scroll to the target section with smooth behavior
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  // Initial spotlight setup
  useEffect(() => {
    // Add smooth scrolling to the entire document
    document.documentElement.style.scrollBehavior = 'smooth';
    
    // Default to Partners if no section is selected yet
    if (!activeSection) {
      setActiveSection('partners');
      updateSpotlight('partners');
    } else {
      updateSpotlight(activeSection);
    }
    
    return () => {
      // Clean up
      document.documentElement.style.scrollBehavior = '';
    };
  }, []);

  return (
    <>
      <div className="fixed bottom-0 left-0 w-full z-50 mb-6 md:block hidden">
      <div className="container mx-auto px-4">
          <nav ref={navRef} className="relative py-3 px-4 bg-[#402D86B2]/30 backdrop-blur-lg rounded-md max-w-4xl mx-auto border-2 border-[#3C229C]/100">
            {/* Hidden duplicate content for lighting effect */}
            <ul aria-hidden="true" className="lit flex items-center p-0 m-0 list-none h-full justify-between text-transparent">
              <li className="px-5 py-2">Partners</li>
              <li className="px-5 py-2">How It Works</li>
              <li className="px-5 py-2">Roadmap</li>
              <li className="px-5 py-2">Our Team</li>
              <li className="px-5 py-2">FAQ</li>
            </ul>
            
            {/* Actual clickable content */}
            <ul className="content flex items-center p-0 m-0 list-none h-full justify-between relative font-bold">
              <li>
                <NavLink href="#partners" isActive={activeSection === 'partners'} onClick={(e) => handleClick(e, 'partners')}>Partners</NavLink>
              </li>
              <li>
                <NavLink href="#how-it-works" isActive={activeSection === 'how-it-works'} onClick={(e) => handleClick(e, 'how-it-works')}>How It Works</NavLink>
              </li>
              <li>
                <NavLink href="#roadmap" isActive={activeSection === 'roadmap'} onClick={(e) => handleClick(e, 'roadmap')}>Roadmap</NavLink>
              </li>
              <li>
                <NavLink href="#our-team" isActive={activeSection === 'our-team'} onClick={(e) => handleClick(e, 'our-team')}>Our Team</NavLink>
              </li>
              <li>
                <NavLink href="#faq" isActive={activeSection === 'faq'} onClick={(e) => handleClick(e, 'faq')}>FAQ</NavLink>
              </li>
            </ul>
          </nav>
        </div>
      </div>
      
      {/* SVG filters for lighting effects */}
      <svg className="sr-only">
        <filter id="spotlight">
          <feGaussianBlur in="SourceAlpha" stdDeviation="3" result="blur"></feGaussianBlur>
          <feSpecularLighting
            result="lighting"
            in="blur"
            surfaceScale="0.6"
            specularConstant="1.5"
            specularExponent="90"
            lighting-color={config.spotlight.light}
          >
            <fePointLight ref={spotlightRef} x="50" y="60" z="180"></fePointLight>
          </feSpecularLighting>
          <feComposite
            in="lighting"
            in2="SourceAlpha"
            operator="in"
            result="composite"
          ></feComposite>
          <feComposite
            in="merged"
            in2="composite"
            operator="arithmetic"
            k1="0"
            k2="1"
            k3="1"
            k4="0"
            result="litPaint"
          ></feComposite>
        </filter>
        <filter id="ambience">
          <feGaussianBlur in="SourceAlpha" stdDeviation="2" result="blur"></feGaussianBlur>
          <feSpecularLighting
            result="lighting"
            in="blur"
            surfaceScale="0.5"
            specularConstant="15"
            specularExponent="55"
            lighting-color={config.ambience.light}
          >
            <fePointLight x="120" y="-100" z="180"></fePointLight>
          </feSpecularLighting>
          <feComposite
            in="lighting"
            in2="SourceAlpha"
            operator="in"
            result="composite"
          ></feComposite>
          <feComposite
            in="merged"
            in2="composite"
            operator="arithmetic"
            k1="0"
            k2="1"
            k3="1"
            k4="0"
            result="litPaint"
          ></feComposite>
        </filter>
      </svg>
      
      <style jsx>{`
        nav {
          height: 80px;
          border-radius: 1.5rem;
          position: relative;
          box-shadow: 0 0 20px rgba(124, 58, 237, 0.2);
        }
        
        nav::before,
        nav::after,
        nav ul.lit {
          filter: url('#spotlight')
        }
        
        nav::after {
          background: rgba(60, 30, 110, 0.2);
          content: '';
          position: absolute;
          inset: 0;
          z-index: -1;
          border-radius: 1.5rem;
          opacity: 0.2;
        }
        
        nav::before {
          content: '';
          position: absolute;
          inset: -1px;
          z-index: -1;
          border-radius: 1.5rem;
          border: 1px solid rgba(139, 92, 246, 0.8);
          filter: url('#spotlight'), url('#ambience');
          opacity: 0.6;
          box-shadow: 0 0 15px 1px rgba(124, 58, 237, 0.3);
        }
        
        ul.lit {
          position: absolute;
          inset: 0;
          z-index: 2;
          pointer-events: none;
        }
      `}</style>
    </>
  );
};

// NavLink component for consistent styling
const NavLink: React.FC<NavLinkProps> = ({ href, children, isActive, onClick }) => {
  return (
    <Link 
      href={href} 
      className={`relative px-4 py-2 transition-colors duration-300 ${isActive ? 'text-white opacity-100' : 'text-gray-400 opacity-40 hover:opacity-100'}` }
      onClick={onClick}
      data-active={isActive}
      style={{fontFamily: 'Montserrat-SemiBold'}}
    >
      <span>{children}</span>
      {isActive && (
        <span className="absolute inset-0 rounded-md"></span>
      )}
    </Link>
  );
};

export default Navbar;