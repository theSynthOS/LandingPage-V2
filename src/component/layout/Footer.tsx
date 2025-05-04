import React from 'react';
import { FaXTwitter, FaTelegram } from 'react-icons/fa6';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    company: [
      { name: 'Contact Us', href: '#' },
    ],
    resources: [
      { name: 'Documentation', href: '#' },
    ],
  };

  return (
    <footer className="bg-black-100 text-gray-300">
      <div className=" mt-12 pt-8">
        <div className="px-4 md:px-8 py-8 md:py-12">
          <div className="flex flex-col md:flex-row justify-end">
            <div className="flex flex-col md:flex-row space-y-8 md:space-y-0 md:space-x-16 mb-8 md:mb-0">
              <div>
                <h3 className="text-white text-md md:text-lg font-semibold mb-4">Company</h3>
                <ul className="space-y-2">
                  {footerLinks.company.map((link, index) => (
                    <li key={index}>
                      <a href={link.href} className="hover:text-white transition-colors">
                        {link.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h3 className="text-white text-md md:text-lg font-semibold mb-4">Resources</h3>
                <ul className="space-y-2">
                  {footerLinks.resources.map((link, index) => (
                    <li key={index}>
                      <a href={link.href} className="hover:text-white transition-colors">
                        {link.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <div className="mt-8">
        <div className="px-4 md:px-8 py-8 md:py-12">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-center md:text-left">&copy; {currentYear} SynthOS. All Rights Reserved.</p>
            <div className="flex space-x-6">
              <a
                href="https://x.com/SynthOS__"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-white transition-colors"
                aria-label="X (formerly Twitter)"
              >
                <FaXTwitter size={30} />
              </a>
              <a
                href="https://t.me/+uN6dMuzQB_g2OGU1"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-white transition-colors"
                aria-label="Telegram"
              >
                <FaTelegram size={30} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 