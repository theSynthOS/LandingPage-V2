import React from 'react'


interface GlowButtonProps {
  children: React.ReactNode;
}

const GlowButton: React.FC<GlowButtonProps> = ({ children }) => {
  return (
    <div>
      <button className="no-underline group cursor-pointer relative shadow-2xl shadow-zinc-900 rounded-lg p-px font-semibold leading-6 text-white inline-block text-md" style={{fontFamily: 'Montserrat-Regular'}}>
        <span className="absolute -top-0 right-[2.125rem] h-px w-[calc(100%-2.25rem)] bg-gradient-to-r from-emerald-400/0 via-blue-400/90 to-emerald-400/0 transition-opacity duration-500 group-hover:opacity-40" />
        <span className="absolute inset-0 overflow-hidden rounded-lg">
          <span className="absolute inset-0 rounded-lg bg-[image:radial-gradient(75%_100%_at_50%_0%,rgba(56,189,248,0.6)_0%,rgba(56,189,248,0)_75%)] opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
        </span>
          <div className="relative flex space-x-2 items-center z-10 rounded-lg bg-transparent py-3 px-8 ring-1 ring-white/10 ">
            <span>
              {children}    
            </span>
          </div>
        <span className="absolute -bottom-0 right-[0.125rem] h-px w-[calc(100%-2.25rem)] bg-gradient-to-r from-emerald-400/0 via-purple-400/90 to-emerald-400/0 transition-opacity duration-500 group-hover:opacity-40" />
      </button>
    </div>
  )
}

export default GlowButton
