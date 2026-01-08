import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";
import { TextPlugin } from "gsap/TextPlugin";
import { SplitText } from "gsap/SplitText";

// Register GSAP plugins
gsap.registerPlugin(ScrollTrigger, ScrollToPlugin, TextPlugin);

// Export GSAP core and plugins
export { gsap, ScrollTrigger, ScrollToPlugin, TextPlugin, SplitText };

// Export pre-configured animation presets
export const animations = {
  // Fade animations
  fadeIn: {
    opacity: 0,
    y: 30,
    duration: 0.8,
    ease: "power2.out"
  },
  
  fadeOut: {
    opacity: 0,
    y: -30,
    duration: 0.6,
    ease: "power2.in"
  },
  
  // Scale animations
  scaleIn: {
    scale: 0.8,
    opacity: 0,
    duration: 0.7,
    ease: "back.out(1.7)"
  },
  
  // Slide animations
  slideInLeft: {
    x: -100,
    opacity: 0,
    duration: 0.8,
    ease: "power3.out"
  },
  
  slideInRight: {
    x: 100,
    opacity: 0,
    duration: 0.8,
    ease: "power3.out"
  },
  
  // Stagger animations
  staggerChildren: {
    stagger: 0.1,
    duration: 0.5,
    ease: "power2.out"
  }
};

// Utility functions for common animations
export const gsapUtils = {
  // Initialize ScrollTrigger with defaults
  initScrollTrigger: (config = {}) => {
    ScrollTrigger.defaults({
      toggleActions: "play none none reverse",
      start: "top 85%",
      ...config
    });
  },
  
  // Smooth scroll to element
  scrollTo: (target: string | Element, config = {}) => {
    return gsap.to(window, {
      duration: 1.2,
      ease: "power2.inOut",
      scrollTo: target,
      ...config
    });
  },
  
  // Create staggered grid animation
  staggerGrid: (elements: gsap.TweenTarget, config = {}) => {
    return gsap.from(elements, {
      opacity: 0,
      y: 40,
      stagger: {
        amount: 0.4,
        grid: "auto",
        from: "center"
      },
      duration: 0.8,
      ease: "power2.out",
      ...config
    });
  },
  
  // Text reveal animation
  textReveal: (element: Element, config = {}) => {
    return gsap.from(element, {
      yPercent: 100,
      opacity: 0,
      duration: 1.2,
      ease: "power3.out",
      ...config
    });
  },
  
  // Hover animations
  createHoverEffect: (element: Element, config = {}) => {
    const hoverAnimation = gsap.to(element, {
      scale: 1.05,
      duration: 0.3,
      ease: "power2.out",
      paused: true,
      ...config
    });
    
    element.addEventListener("mouseenter", () => hoverAnimation.play());
    element.addEventListener("mouseleave", () => hoverAnimation.reverse());
    
    return hoverAnimation;
  },
  
  // Parallax effect
  createParallax: (element: Element, speed = 0.5, config = {}) => {
    return gsap.to(element, {
      yPercent: speed * 50,
      ease: "none",
      scrollTrigger: {
        trigger: element,
        start: "top bottom",
        end: "bottom top",
        scrub: true,
        ...config
      }
    });
  }
};

// Custom easing curves
export const customEases = {
  smooth: "M0,0 C0.44,0 0.56,1 1,1",
  bounce: "M0,0 C0,0 0.36,1.005 0.55,1.005 0.713,1.005 0.85,0.46 1,0.46",
  elastic: "M0,0 C0,0 0.05,0.965 0.195,1.01 0.44,1.09 0.64,0.99 1,0.99"
};

// Responsive animation configuration
export const responsiveAnimations = {
  mobile: {
    yOffset: 20,
    duration: 0.6
  },
  tablet: {
    yOffset: 30,
    duration: 0.7
  },
  desktop: {
    yOffset: 40,
    duration: 0.8
  }
};

// Cleanup utility
export const cleanupGSAP = () => {
  ScrollTrigger.getAll().forEach(trigger => trigger.kill());
  gsap.killTweensOf("*");
};