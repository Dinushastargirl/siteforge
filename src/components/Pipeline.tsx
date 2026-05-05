import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function Pipeline() {
  const lineRef = useRef<HTMLDivElement>(null);
  const glowRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!lineRef.current || !glowRef.current) return;

    gsap.to(glowRef.current, {
      top: '100%',
      ease: 'none',
      scrollTrigger: {
        trigger: 'body',
        start: 'top top',
        end: 'bottom bottom',
        scrub: 0.5,
      }
    });

    // Animate the line thickness or pulse
    gsap.to(lineRef.current, {
      opacity: 0.8,
      repeat: -1,
      yoyo: true,
      duration: 2,
      ease: 'power1.inOut'
    });

  }, []);

  return (
    <div className="fixed left-4 md:left-8 top-0 bottom-0 w-[2px] bg-white/10 z-40 hidden sm:block">
      {/* Background Pipe */}
      <div 
        ref={lineRef}
        className="absolute inset-0 w-full bg-gradient-to-b from-[#b87333]/20 via-[#00f3ff]/20 to-[#b87333]/20" 
      />
      
      {/* Glowing Pulse */}
      <div 
        ref={glowRef}
        className="absolute top-0 left-1/2 -translate-x-1/2 w-4 h-24 blur-md bg-gradient-to-b from-transparent via-[#00f3ff] to-transparent z-50"
      />
      
      <div className="absolute top-[10%] left-[-8px] w-4 h-4 rounded-full bg-[#b87333] shadow-[0_0_10px_#b87333]" />
      <div className="absolute top-[50%] left-[-8px] w-4 h-4 rounded-full bg-[#00f3ff] shadow-[0_0_10px_#00f3ff]" />
      <div className="absolute top-[90%] left-[-8px] w-4 h-4 rounded-full bg-[#b87333] shadow-[0_0_10px_#b87333]" />
    </div>
  );
}
