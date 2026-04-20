"use client";

import { useEffect, useRef } from "react";

export default function HeroSection() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let particlesArray: Particle[] = [];
    // Adjust number of particles based on screen size roughly
    const numberOfParticles = Math.min(200, window.innerWidth / 10);

    class Particle {
      x: number;
      y: number;
      size: number;
      speedX: number;
      speedY: number;

      constructor(x: number, y: number, size: number, speedX: number, speedY: number) {
        this.x = x;
        this.y = y;
        this.size = size;
        this.speedX = speedX;
        this.speedY = speedY;
      }
      update() {
        this.x += this.speedX;
        this.y += this.speedY;
        if (this.x < 0 || this.x > canvas!.width) this.speedX *= -1;
        if (this.y < 0 || this.y > canvas!.height) this.speedY *= -1;
      }
      draw() {
        if (!ctx) return;
        ctx.fillStyle = "rgba(255, 255, 255, 0.4)";
        ctx.shadowBlur = 10;
        ctx.shadowColor = "rgba(255, 255, 255, 0.6)";
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.closePath();
        ctx.fill();
        ctx.shadowBlur = 0; // reset
      }
    }

    function init() {
      if (!canvas) return;
      particlesArray = [];
      for (let i = 0; i < numberOfParticles; i++) {
        let size = Math.random() * 1.5;
        let x = Math.random() * canvas.width;
        let y = Math.random() * canvas.height;
        let speedX = (Math.random() * 0.4) - 0.2;
        let speedY = (Math.random() * 0.4) - 0.2;
        particlesArray.push(new Particle(x, y, size, speedX, speedY));
      }
    }

    let animationFrameId: number;
    function animate() {
      if (!ctx || !canvas) return;
      // create a trailing effect
      ctx.fillStyle = "rgba(11, 16, 33, 0.2)"; // match deep-space color
      ctx.fillRect(0, 0, canvas.width, canvas.height);
      for (let i = 0; i < particlesArray.length; i++) {
        particlesArray[i].update();
        particlesArray[i].draw();
      }
      animationFrameId = requestAnimationFrame(animate);
    }

    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      init();
    };

    handleResize();
    animate();

    return () => {
      window.removeEventListener("resize", handleResize);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <section className="relative w-full h-screen bg-deep-space overflow-hidden flex items-center justify-center">
      <canvas ref={canvasRef} className="absolute inset-0 pointer-events-none" />
      
      <div className="relative z-10 flex flex-col items-center max-w-4xl mx-auto px-6 text-center mt-[-10vh]">
        {/* User Logo */}
        <div className="w-32 h-32 md:w-40 md:h-40 mb-10 relative flex items-center justify-center">
             <img 
               src="/logo.png" 
               alt="" 
               className="object-contain w-full h-full filter drop-shadow-lg relative z-10" 
               onError={(e) => { 
                 e.currentTarget.style.display = 'none';
               }} 
             />
        </div>

        <h1 className="font-sans text-5xl md:text-7xl lg:text-8xl text-[#b3b3b3] tracking-[0.2em] pl-[0.2em] mb-6 drop-shadow-2xl font-light text-center">
          星塵遠征隊
        </h1>
        
        <p className="text-earth-khaki/70 tracking-[0.2em] pl-[0.2em] text-xs md:text-sm max-w-2xl mt-4 font-light border-t border-earth-khaki/20 pt-6 text-center">
          探索宇宙与地球 —— 穿越时空的严谨之旅。
        </p>
      </div>

      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center text-earth-khaki/50 opacity-80 hover:opacity-100 transition-opacity duration-300">
        <span className="text-[10px] tracking-widest mb-3 font-mono">向 下 滚 动 探 索</span>
        <div className="w-px h-16 bg-gradient-to-b from-earth-khaki/60 to-transparent"></div>
      </div>
    </section>
  );
}
