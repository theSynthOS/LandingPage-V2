import React from 'react'

interface GlowButtonProps {
  children: React.ReactNode;
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
  className?: string;
}

const GlowButton: React.FC<GlowButtonProps> = ({ children, onClick, className = '' }) => {
  return (
    <div>
      <button 
        onClick={onClick}
        className={`no-underline group cursor-pointer relative shadow-md shadow-purple-500/20 rounded-lg p-px font-semibold leading-6 text-white inline-block text-md ${className}`} 
        style={{fontFamily: 'Montserrat-Regular'}}
      >
        <span className="absolute -top-0 right-[2.125rem] h-px w-[calc(100%-2.25rem)] bg-gradient-to-r from-purple-400/0 via-blue-400/90 to-purple-400/0 transition-opacity duration-500 group-hover:opacity-40" />
        <span className="absolute inset-0 overflow-hidden rounded-lg">
          <span className="absolute inset-0 rounded-lg bg-[image:radial-gradient(75%_100%_at_50%_0%,rgba(168,85,247,0.4)_0%,rgba(168,85,247,0)_75%)] opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
        </span>
        <div className="relative flex space-x-2 items-center z-10 rounded-lg backdrop-blur-md bg-[#030213]/30 py-2 px-6 ring-1 ring-purple-500/20">
          <span className="relative z-20 font-medium">
            {children}    
          </span>
        </div>
        <span className="absolute -bottom-0 right-[0.125rem] h-px w-[calc(100%-2.25rem)] bg-gradient-to-r from-purple-400/0 via-purple-400/90 to-purple-400/0 transition-opacity duration-500 group-hover:opacity-40" />
      </button>
    </div>
  )
}

export default GlowButton
