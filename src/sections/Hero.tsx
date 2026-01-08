import { useEffect, useRef, useState } from 'react';
import { gsap } from '../lib/gsap';
import { heroData } from "../data/ryzeData";

const Hero = () => {
  const [email, setEmail] = useState('');
  const [isPlaying, setIsPlaying] = useState(false);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const statsRef = useRef<HTMLDivElement>(null);
  const videoContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(titleRef.current, {
        y: 40,
        opacity: 0,
        duration: 1,
        ease: "power3.out"
      });

      gsap.from('.cta-section', {
        y: 20,
        opacity: 0,
        duration: 0.8,
        delay: 0.3,
        ease: "power2.out"
      });

      if (statsRef.current) {
        gsap.from(statsRef.current.children, {
          y: 30,
          opacity: 0,
          stagger: 0.1,
          duration: 0.6,
          delay: 0.6,
          ease: "power2.out"
        });
      }

      if (videoContainerRef.current) {
        gsap.from(videoContainerRef.current, {
          scale: 0.9,
          opacity: 0,
          duration: 1,
          delay: 0.9,
          ease: "power3.out"
        });
      }
    });

    if (videoRef.current) {
      videoRef.current.loop = true;
      videoRef.current.muted = true;
      videoRef.current.playsInline = true;

      videoRef.current.addEventListener('ended', () => {
        if (videoRef.current) {
          videoRef.current.currentTime = 0;
          videoRef.current.play();
        }
      });
    }

    return () => ctx.revert();
  }, []);

  const toggleVideoPlay = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      console.log('Email submitted:', email);
      setEmail('');
    }
  };

  return (
    <div className="min-h-screen bg-white">
      <div className="container mx-auto px-6 md:px-20 pt-24 pb-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h1
              ref={titleRef}
              className="text-5xl md:text-7xl lg:text-8xl font-bold text-black mb-6 leading-tight"
            >
              AI that
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
                Grows your ads
              </span>
            </h1>
            <p className="text-2xl text-gray-600 max-w-3xl mx-auto mb-10">
              See how brands increase conversions by 300% with AI-powered advertising
            </p>
          </div>

          <div className="cta-section max-w-2xl mx-auto mb-16">
            <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your work email"
                className="flex-1 px-6 py-4 rounded-xl border-2 border-gray-200 focus:outline-none focus:border-blue-500 text-lg"
                required
              />
              <button
                type="submit"
                className="px-8 py-4 bg-black text-white font-bold text-lg rounded-xl hover:bg-gray-800 transition-colors duration-200"
              >
                Get Free Demo
              </button>
            </form>
          </div>

          <div ref={statsRef} className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
            <div className="text-center p-6">
              <div className="text-3xl font-bold text-blue-600 mb-2">300%</div>
              <div className="text-gray-600">Higher conversions</div>
            </div>
            <div className="text-center p-6">
              <div className="text-3xl font-bold text-green-600 mb-2">24/7</div>
              <div className="text-gray-600">AI optimization</div>
            </div>
            <div className="text-center p-6">
              <div className="text-3xl font-bold text-purple-600 mb-2">50%</div>
              <div className="text-gray-600">Lower CPA</div>
            </div>
            <div className="text-center p-6">
              <div className="text-3xl font-bold text-red-600 mb-2">10K+</div>
              <div className="text-gray-600">Campaigns managed</div>
            </div>
          </div>

          <div ref={videoContainerRef} className="mb-12">
            <div className="rounded-3xl overflow-hidden bg-gradient-to-br from-gray-900 to-black p-1 shadow-2xl">
              <div className="relative aspect-video">
                <video
                  ref={videoRef}
                  src="/feature-3.mp4"
                  className="w-full h-full object-cover"
                  loop
                  muted
                  playsInline
                  onClick={toggleVideoPlay}
                />

                {!isPlaying && (
                  <div className="absolute inset-0 flex items-center justify-center bg-black/30">
                    <button
                      onClick={toggleVideoPlay}
                      className="w-20 h-20 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 flex items-center justify-center hover:bg-white/20 transition-all duration-300 group"
                    >
                      <svg className="w-8 h-8 text-white ml-1" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M8 5v14l11-7z" />
                      </svg>
                    </button>
                  </div>
                )}

                <div className="absolute top-6 left-6 right-6 flex justify-between items-center">
                  <div className="text-white font-medium">Live Campaign Dashboard</div>
                  <div className="flex gap-2">
                    <div className="w-3 h-3 rounded-full bg-red-500"></div>
                    <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                    <div className="w-3 h-3 rounded-full bg-green-500"></div>
                  </div>
                </div>

                {isPlaying && (
                  <div className="absolute bottom-6 left-6">
                    <button
                      onClick={toggleVideoPlay}
                      className="px-4 py-2 rounded-lg bg-black/70 text-white text-sm font-medium hover:bg-black/90 transition-colors duration-200 flex items-center gap-2"
                    >
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 9v6m4-6v6m7-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      Pause
                    </button>
                  </div>
                )}

                <div className="absolute bottom-6 right-6">
                  <div className="text-white/80 text-sm bg-black/50 px-3 py-1 rounded-md">
                    {isPlaying ? 'Playing' : 'Click to play'} (7s loop)
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="text-center">
            <p className="text-gray-500 mb-6">Trusted by leading advertising teams</p>
            <div className="flex flex-wrap justify-center gap-8 md:gap-12">
              {heroData.platforms.map((platform) => (
                <div
                  key={platform}
                  className="text-gray-700 font-semibold hover:text-black transition-colors duration-200"
                >
                  {platform}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;