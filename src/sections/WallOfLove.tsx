import { useEffect, useRef } from 'react';
import { gsap, ScrollTrigger } from '../lib/gsap';
import { testimonials } from "../data/ryzeData";

const WallOfLove = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const headerRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      if (headerRef.current) {
        gsap.from(headerRef.current.children, {
          y: 30,
          opacity: 0,
          stagger: 0.1,
          duration: 0.8,
          scrollTrigger: {
            trigger: headerRef.current,
            start: "top 80%",
            toggleActions: "play none none reverse"
          }
        });
      }

      cardsRef.current.forEach((card, index) => {
        if (card) {
          gsap.from(card, {
            y: 50,
            opacity: 0,
            duration: 0.6,
            delay: index * 0.1,
            scrollTrigger: {
              trigger: card,
              start: "top 85%",
              toggleActions: "play none none reverse"
            },
            ease: "power2.out"
          });
        }
      });

      gsap.to(sectionRef.current, {
        backgroundPosition: "0% 0%",
        ease: "none",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top bottom",
          end: "bottom top",
          scrub: true
        }
      });
    });

    return () => ctx.revert();
  }, []);

  const addToRefs = (el: HTMLDivElement | null) => {
    if (el && !cardsRef.current.includes(el)) {
      cardsRef.current.push(el);
    }
  };

  const getPlatformColor = (platform: string) => {
    const colors: Record<string, string> = {
      'G2': 'text-blue-600',
      'X': 'text-black',
      'Quote': 'text-purple-600',
      'LinkedIn': 'text-blue-700',
      'Trustpilot': 'text-green-600',
      'Clutch': 'text-orange-600'
    };
    return colors[platform] || 'text-gray-600';
  };

  const getPlatformIcon = (platform: string) => {
    const icons: Record<string, string> = {
      'G2': '★',
      'X': '𝕏',
      'Quote': '"',
      'LinkedIn': 'in',
      'Trustpilot': '✓',
      'Clutch': 'C'
    };
    return icons[platform] || platform.charAt(0);
  };

  return (
    <section
      ref={sectionRef}
      className="py-28 relative overflow-hidden"
      style={{
        background: 'linear-gradient(135deg, #f8fafc 0%, #f1f5f9 25%, #e2e8f0 50%, #f1f5f9 75%, #f8fafc 100%)',
        backgroundSize: '400% 400%'
      }}
    >
      <div className="absolute inset-0 bg-gradient-to-b from-white/60 to-transparent" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div ref={headerRef} className="mb-16 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/80 backdrop-blur-sm border border-gray-200 mb-4">
            <svg className="w-4 h-4 text-red-500" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
            </svg>
            <p className="text-sm font-medium text-gray-700 uppercase tracking-wider">
              Wall of Love
            </p>
          </div>
          <h2 className="mt-4 text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 tracking-tight">
            Loved by performance teams
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
              worldwide
            </span>
          </h2>
          <p className="mt-6 text-xl text-gray-600 max-w-2xl mx-auto">
            See what marketing leaders say about transforming their ad performance
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((item, index) => (
            <div
              key={index}
              ref={addToRefs}
              className="group relative"
            >
              <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-500 to-purple-500 rounded-2xl blur opacity-0 group-hover:opacity-30 transition duration-500" />
              <div className="relative rounded-2xl bg-white border border-gray-200 p-6 hover:shadow-2xl hover:border-gray-300 transition-all duration-300">
                <div className="flex items-center justify-between mb-4">
                  <div className={`flex items-center justify-center w-10 h-10 rounded-lg ${getPlatformColor(item.platform)} bg-gray-50 font-bold`}>
                    {getPlatformIcon(item.platform)}
                  </div>
                  <span className={`text-xs font-semibold ${getPlatformColor(item.platform)}`}>
                    {item.platform}
                  </span>
                </div>

                <div className="mb-1">
                  <svg className="w-5 h-5 text-gray-300 mb-2" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                  </svg>
                </div>

                <p className="text-gray-700 leading-relaxed mb-5">
                  "{item.content}"
                </p>

                {item.highlight && (
                  <div className="inline-flex items-center gap-2 mb-5 px-3 py-1.5 rounded-full bg-gradient-to-r from-blue-50 to-purple-50 border border-blue-100">
                    <svg className="w-4 h-4 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                    </svg>
                    <span className="text-sm font-bold text-blue-700">
                      {item.highlight}
                    </span>
                  </div>
                )}

                <div className="pt-4 border-t border-gray-100">
                  <p className="font-bold text-gray-900">
                    {item.name}
                  </p>
                  <p className="text-sm text-gray-500 mt-1">
                    {item.role}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <div className="inline-flex items-center gap-6 text-gray-400">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-green-500" />
              <span className="text-sm">Verified reviews</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-blue-500" />
              <span className="text-sm">Real customers</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-purple-500" />
              <span className="text-sm">Updated weekly</span>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white to-transparent" />
    </section>
  );
};

export default WallOfLove;