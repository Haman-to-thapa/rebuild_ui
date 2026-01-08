import { useEffect, useRef, useState } from 'react';
import { gsap, ScrollTrigger } from '../lib/gsap';

const Header = () => {
  const headerRef = useRef<HTMLElement>(null);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(headerRef.current, {
        y: -20,
        opacity: 0,
        duration: 0.5,
        ease: "power2.out"
      });

      const trigger = ScrollTrigger.create({
        trigger: document.body,
        start: "top top",
        end: "max",
        onUpdate: (self) => {
          if (headerRef.current && !isMenuOpen) {
            if (self.direction === 1 && self.progress > 0.1) {
              gsap.to(headerRef.current, { y: -100, duration: 0.3 });
            } else {
              gsap.to(headerRef.current, { y: 0, duration: 0.3 });
            }
          }
        }
      });

      return () => trigger.kill();
    });

    return () => ctx.revert();
  }, [isMenuOpen]);

  return (
    <>
      <header
        ref={headerRef}
        className="fixed top-0 left-0 w-full z-50 bg-white/95 backdrop-blur-md border-b border-gray-100 shadow-md transition-opacity"
      >
        <div className="mx-auto px-6 md:px-20 py-4 flex items-center justify-between light-bold">
          <div className="text-3xl  font-extrabold tracking-tight text-black">
            Ryze
          </div>

          <nav className="hidden md:flex items-center gap-8 text-x text-gray-900">
            <a
              href="#"
              className="hover:text-black font-semibold transition-colors duration-400"
            >
              Case Studies
            </a>
            <a
              href="#"
              className="hover:text-black font-semibold transition-colors duration-200"
            >
              About Us
            </a>
          </nav>

          <div className="flex items-center gap-4">
            <button className="px-5 py-2 rounded-md bg-black text-white text-sm font-medium hover:bg-gray-800 transition-all duration-300 hover:scale-105">
              Get started
            </button>

            <button
              className="md:hidden text-gray-600 hover:text-black transition-colors duration-200"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                {isMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>
      </header>

      {isMenuOpen && (
        <div className="fixed top-0 left-0 w-full h-screen z-40 bg-white md:hidden pt-20">
          <div className="px-6 py-8 flex flex-col gap-6">
            <a
              href="#"
              className="text-lg text-gray-600 hover:text-black py-2 border-b border-gray-100"
              onClick={() => setIsMenuOpen(false)}
            >
              Case Studies
            </a>
            <a
              href="#"
              className="text-lg text-gray-600 hover:text-black py-2 border-b border-gray-100"
              onClick={() => setIsMenuOpen(false)}
            >
              About Us
            </a>
          </div>
        </div>
      )}
    </>
  );
};

export default Header;