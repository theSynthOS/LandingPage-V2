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
      <div className=" md:mt-12 md:pt-8">
        <div className="px-4 md:px-8 md:py-12">
          <div className="flex flex-col md:flex-row justify-end">
            <div className="flex flex-col md:flex-row space-y-8 md:space-y-0 md:space-x-16 mb-8 md:mb-0">
              <div>
                
              </div>
              <div>
                {/* <h3 className="text-white text-md md:text-lg font-semibold mb-4">Resources</h3>
                <ul className="space-y-2">
                  {footerLinks.resources.map((link, index) => (
                    <li key={index}>
                      <a href={link.href} className="hover:text-white transition-colors">
                        {link.name}
                      </a>
                    </li>
                  ))}
                </ul> */}
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
      </div>
    </footer>
  );
};

export default Footer; 