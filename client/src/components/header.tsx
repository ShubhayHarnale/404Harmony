import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Link, useLocation } from "wouter";
import { Menu, X } from "lucide-react";

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [location] = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      setIsScrolled(scrollPosition > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
    setIsMobileMenuOpen(false);
  };

  const handleContactUs = () => {
    if (location === '/') {
      scrollToSection('contact');
    } else {
      window.location.href = '/#contact';
    }
  };

  const handleLogoClick = () => {
    if (location === '/') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      window.location.href = '/';
    }
  };

  const isActiveLink = (path: string) => {
    return location === path;
  };

  const navigationLinks = [
    { href: "/", label: "Home", onClick: null },
    { href: "/team", label: "Our Team", onClick: null },
    { href: "/news", label: "News", onClick: null },
    { href: "/inspiration", label: "Inspiration", onClick: null },
    { href: "#contact", label: "Contact Us", onClick: handleContactUs }
  ];

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-[#3dab38] shadow-lg animate-fadeInDown' 
          : 'bg-white/95 backdrop-blur-sm border-b border-gray-100'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <nav className="flex items-center justify-between py-4" role="navigation" aria-label="Main navigation">
          {/* Logo */}
          <button 
            onClick={handleLogoClick}
            className={`flex items-center space-x-3 text-xl font-bold transition-colors duration-200 ${
              isScrolled 
                ? 'text-black hover:text-gray-700' 
                : 'text-gray-900 hover:text-[#3dab38]'
            }`}
            aria-label="404Harmony homepage"
          >
            <div className={`w-10 h-10 rounded-xl flex items-center justify-center shadow-lg transition-colors duration-200 ${
              isScrolled ? 'bg-white' : 'bg-[#3dab38]'
            }`}>
              <span className={`font-bold text-lg transition-colors duration-200 ${
                isScrolled ? 'text-[#3dab38]' : 'text-white'
              }`}>4H</span>
            </div>
            <span className="hidden sm:block">404Harmony</span>
          </button>
          
          {/* Desktop Navigation - Right Side */}
          <div className="hidden md:flex items-center space-x-8">
            <ul className="flex items-center space-x-8" role="menubar">
              {navigationLinks.map((link, index) => (
                <li key={index} role="none">
                  {link.onClick ? (
                    <button 
                      onClick={link.onClick}
                      className={`font-medium transition-all duration-200 hover:scale-105 relative group ${
                        isScrolled 
                          ? 'text-black hover:text-gray-700' 
                          : 'text-gray-600 hover:text-brand-green'
                      }`}
                      role="menuitem"
                      tabIndex={0}
                      onKeyDown={(e) => {
                        if (e.key === 'Enter' || e.key === ' ') {
                          e.preventDefault();
                          link.onClick?.();
                        }
                      }}
                    >
                      {link.label}
                      <span className={`absolute -bottom-1 left-0 w-0 h-0.5 transition-all duration-200 group-hover:w-full ${
                        isScrolled ? 'bg-black' : 'bg-[#3dab38]'
                      }`}></span>
                    </button>
                  ) : (
                    <Link 
                      href={link.href}
                      className={`font-medium transition-all duration-200 hover:scale-105 relative group ${
                        isActiveLink(link.href) ? 'font-bold' : ''
                      } ${
                        isScrolled 
                          ? 'text-black hover:text-gray-700' 
                          : 'text-gray-600 hover:text-[#3dab38]'
                      }`}
                      role="menuitem"
                      tabIndex={0}
                    >
                      {link.label}
                      <span className={`absolute -bottom-1 left-0 h-0.5 transition-all duration-200 ${
                        isActiveLink(link.href) 
                          ? `w-full ${isScrolled ? 'bg-black' : 'bg-[#3dab38]'}` 
                          : `w-0 group-hover:w-full ${isScrolled ? 'bg-black' : 'bg-[#3dab38]'}`
                      }`}></span>
                    </Link>
                  )}
                </li>
              ))}
            </ul>
          </div>
          
          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className={`md:hidden p-2 rounded-lg transition-colors duration-200 ${
              isScrolled 
                ? 'text-black hover:bg-black/10' 
                : 'text-gray-600 hover:bg-gray-100'
            }`}
            aria-label="Toggle mobile menu"
            aria-expanded={isMobileMenuOpen}
          >
            {isMobileMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </nav>

        {/* Mobile Menu */}
        <div 
          className={`md:hidden transition-all duration-300 ease-in-out overflow-hidden ${
            isMobileMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
          }`}
        >
          <div className={`py-4 border-t ${
            isScrolled ? 'border-black/20' : 'border-gray-200'
          }`}>
            <ul className="space-y-4" role="menu">
              {navigationLinks.map((link, index) => (
                <li key={index} role="none">
                  {link.onClick ? (
                    <button 
                      onClick={link.onClick}
                      className={`block w-full text-left font-medium transition-colors duration-200 ${
                        isScrolled 
                          ? 'text-black hover:text-gray-700' 
                          : 'text-gray-600 hover:text-[#3dab38]'
                      }`}
                      role="menuitem"
                      tabIndex={0}
                    >
                      {link.label}
                    </button>
                  ) : (
                    <Link 
                      href={link.href}
                      onClick={() => setIsMobileMenuOpen(false)}
                      className={`block font-medium transition-colors duration-200 ${
                        isActiveLink(link.href) ? 'font-bold' : ''
                      } ${
                        isScrolled 
                          ? 'text-black hover:text-gray-700' 
                          : 'text-gray-600 hover:text-[#3dab38]'
                      }`}
                      role="menuitem"
                      tabIndex={0}
                    >
                      {link.label}
                    </Link>
                  )}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </header>
  );
}
