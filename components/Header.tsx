
import React, { useState } from 'react';

interface HeaderProps {
  isScrolled: boolean;
}

const Header: React.FC<HeaderProps> = ({ isScrolled }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  const navLinks = [
    { name: 'Collections', href: '#products' },
    { name: 'Projects', href: '#projects' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <>
      <header className={`fixed top-0 w-full z-50 transition-all duration-300 ${isScrolled || isMenuOpen ? 'navy-glass py-4 border-b border-cyan-900/30' : 'bg-transparent py-6'}`}>
        <div className="px-5 sm:px-10 flex items-center justify-between mx-auto max-w-7xl">
          <div className="flex items-center space-x-2 shrink-0">
            <div className="w-9 h-9 sm:w-10 sm:h-10 bg-cyan-500 rounded-full flex items-center justify-center overflow-hidden">
               <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 sm:w-6 sm:h-6 text-white">
                  <path d="M12 21.5C12 21.5 4 14 4 9.5C4 5.08172 7.58172 1.5 12 1.5C16.4183 1.5 20 5.08172 20 9.5C20 14 12 21.5 12 21.5Z" fill="currentColor" stroke="white" strokeWidth="1"/>
                  <path d="M8 9.5H16M10 7.5H14M11 11.5H13" stroke="white" strokeWidth="1" strokeLinecap="round"/>
               </svg>
            </div>
            <span className="text-lg sm:text-xl font-bold tracking-tight text-white uppercase leading-none">
              Premium <span className="text-cyan-400 block sm:inline">Pool Tiles</span>
            </span>
          </div>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center space-x-10">
            {navLinks.map((link) => (
              <a key={link.name} href={link.href} className="text-xs font-semibold text-slate-100 hover:text-cyan-400 transition-colors uppercase tracking-[0.2em]">
                {link.name}
              </a>
            ))}
          </nav>

          <div className="flex items-center space-x-4">
            <a 
              href="#contact" 
              className="hidden sm:block bg-[#B8860B] hover:bg-[#966d09] text-white px-6 py-2.5 rounded-sm text-xs font-bold tracking-widest uppercase transition-all"
            >
              Get a Quote
            </a>
            
            {/* Mobile Menu Toggle - Large Touch Target 44px */}
            <button 
              onClick={toggleMenu}
              className="md:hidden w-11 h-11 flex items-center justify-center text-white focus:outline-none"
              aria-label="Toggle Menu"
            >
              <div className="relative w-6 h-5">
                <span className={`absolute block w-6 h-0.5 bg-white transition-all duration-300 ${isMenuOpen ? 'rotate-45 top-2' : 'top-0'}`}></span>
                <span className={`absolute block w-6 h-0.5 bg-white transition-all duration-300 top-2 ${isMenuOpen ? 'opacity-0' : 'opacity-100'}`}></span>
                <span className={`absolute block w-6 h-0.5 bg-white transition-all duration-300 ${isMenuOpen ? '-rotate-45 top-2' : 'top-4'}`}></span>
              </div>
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Fullscreen Menu */}
      <div className={`fixed inset-0 z-40 bg-slate-950 transition-transform duration-500 ease-in-out md:hidden ${isMenuOpen ? 'translate-x-0' : 'translate-x-full'}`}>
        <div className="flex flex-col h-full justify-center items-center p-10 space-y-12">
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href} 
              onClick={() => setIsMenuOpen(false)}
              className="text-3xl font-light text-white uppercase tracking-widest hover:text-cyan-400 transition-colors"
            >
              {link.name}
            </a>
          ))}
          <a 
            href="#contact" 
            onClick={() => setIsMenuOpen(false)}
            className="w-full bg-cyan-500 text-white text-center py-5 rounded-sm text-sm font-bold uppercase tracking-widest"
          >
            Get a Quote
          </a>
        </div>
      </div>
    </>
  );
};

export default Header;
