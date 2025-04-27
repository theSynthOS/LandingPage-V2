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
      <div className="border-t border-gray-800 mt-12 pt-8">
        <div className="container mx-auto px-4 py-12">
          <div className="flex justify-end">
            <div className="flex space-x-16 mr-18 mb-16">
              <div>
                <h3 className="text-white text-lg font-semibold mb-4">Company</h3>
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
                <h3 className="text-white text-lg font-semibold mb-4">Resources</h3>
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
          
          <div className="border-t border-gray-800 mt-12 pt-8">
            <div className="flex justify-between items-center px-8">
              <p className="ml-8">&copy; {currentYear} SynthOS. All Rights Reserved.</p>
              <div className="flex space-x-6 mr-8">
                <a
                  href="https://twitter.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-300 hover:text-white transition-colors"
                  aria-label="X (formerly Twitter)"
                >
                  <FaXTwitter size={24} />
                </a>
                <a
                  href="https://telegram.org"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-300 hover:text-white transition-colors"
                  aria-label="Telegram"
                >
                  <FaTelegram size={24} />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 