import React, { useState, useEffect } from 'react';

interface HeaderProps {
  isScrolled: boolean;
}

const Header: React.FC<HeaderProps> = ({ isScrolled }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [isMenuOpen]);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  const navLinks = [
    { name: 'Collections', href: '#collections' },
    { name: 'Projects', href: '#projects' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <>
      <header className={`fixed top-0 w-full z-[60] transition-all duration-500 ${isScrolled || isMenuOpen ? 'navy-glass py-4 border-b border-cyan-500/20' : 'bg-transparent py-6'}`}>
        <div className="px-6 sm:px-10 flex items-center justify-between mx-auto max-w-7xl">
          {/* Logo Section */}
          <a href="/" className="flex items-center space-x-4 shrink-0 group transition-transform hover:scale-[1.02]">
            <img 
              src="https://i.ibb.co/rXrY4fh/unnamed.jpg" 
              alt="Premium Pool Tiles Logo" 
              className="w-12 h-12 object-cover rounded-full border border-cyan-500/20 shadow-lg shadow-cyan-500/10"
            />
            <div className="flex flex-col">
              <span className="text-sm font-bold tracking-[0.2em] text-white uppercase leading-none">Premium</span>
              <span className="text-xs font-medium tracking-[0.1em] text-cyan-400 uppercase">Pool Tiles</span>
            </div>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <a key={link.name} href={link.href} className="text-[10px] font-bold text-slate-200 hover:text-cyan-400 transition-colors uppercase tracking-[0.3em]">
                {link.name}
              </a>
            ))}
            <a 
              href="#contact" 
              className="bg-cyan-500 text-white px-6 py-2.5 rounded-sm text-[10px] font-bold tracking-widest uppercase hover:bg-cyan-600 transition-all"
            >
              Quote
            </a>
          </nav>

          {/* Mobile Hamburger */}
          <button 
            onClick={toggleMenu}
            className="md:hidden w-12 h-12 flex items-center justify-end text-white focus:outline-none z-[70]"
            aria-label="Toggle Menu"
          >
            <div className="relative w-7 h-5">
              <span className={`absolute block w-7 h-0.5 bg-white transition-all duration-300 ${isMenuOpen ? 'rotate-45 top-2' : 'top-0'}`}></span>
              <span className={`absolute block w-5 h-0.5 bg-cyan-400 transition-all duration-300 top-2 right-0 ${isMenuOpen ? 'opacity-0' : 'opacity-100'}`}></span>
              <span className={`absolute block w-7 h-0.5 bg-white transition-all duration-300 ${isMenuOpen ? '-rotate-45 top-2' : 'top-4'}`}></span>
            </div>
          </button>
        </div>
      </header>

      {/* Fullscreen Mobile Menu Overlay */}
      <div className={`fixed inset-0 z-[55] bg-slate-950/98 backdrop-blur-xl transition-all duration-500 ease-in-out md:hidden ${isMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible pointer-events-none'}`}>
        <div className="flex flex-col h-full justify-center px-10 space-y-8">
          <span className="text-cyan-500 text-[10px] font-bold uppercase tracking-[0.4em] mb-4">Main Navigation</span>
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href} 
              onClick={() => setIsMenuOpen(false)}
              className="text-4xl font-bold text-white uppercase tracking-tighter hover:text-cyan-400 transition-colors"
            >
              {link.name}
            </a>
          ))}
          <div className="pt-10 border-t border-white/10">
            <a 
              href="#contact" 
              onClick={() => setIsMenuOpen(false)}
              className="block w-full bg-cyan-500 text-white text-center py-5 rounded-sm text-sm font-bold uppercase tracking-widest shadow-xl shadow-cyan-500/20"
            >
              Request Quote
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;