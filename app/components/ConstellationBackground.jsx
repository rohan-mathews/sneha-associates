"use client";
import { useEffect, useRef } from 'react';

const ConstellationBackground = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    let width = canvas.width = window.innerWidth;
    let height = canvas.height = window.innerHeight;
    let animationFrameId;

    // ⚡ CONFIGURATION & BRAND COLORS
    const isMobile = width < 768;
    const starCount = isMobile ? 40 : 90; // Optimized for smooth gradient performance
    const connectionDistance = isMobile ? 100 : 150; 
    const mouseDistance = 250; // Range to connect to mouse
    
    // Brand Colors (RGB)
    const ORANGE_RGB = '249, 115, 22'; // Sneha Orange
    const BLUE_RGB = '59, 130, 246';   // Modern Tech Blue

    // Mouse tracking
    let mouse = { x: null, y: null };

    // Star Class
    class Star {
      constructor() {
        this.x = Math.random() * width;
        this.y = Math.random() * height;
        this.vx = (Math.random() - 0.5) * 0.5; // Gentle floating
        this.vy = (Math.random() - 0.5) * 0.5;
        this.size = Math.random() * 2 + 0.5;
        
        // 50/50 Split between Orange and Blue
        this.colorType = Math.random() > 0.5 ? 'orange' : 'blue';
        this.colorRgb = this.colorType === 'orange' ? ORANGE_RGB : BLUE_RGB;
      }

      draw() {
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(${this.colorRgb}, 0.8)`;
        ctx.fill();
      }

      update() {
        this.x += this.vx;
        this.y += this.vy;

        // Bounce off edges smoothly
        if (this.x < 0 || this.x > width) this.vx = -this.vx;
        if (this.y < 0 || this.y > height) this.vy = -this.vy;

        this.draw();
      }
    }

    // Create Stars
    const stars = [];
    for (let i = 0; i < starCount; i++) {
      stars.push(new Star());
    }

    // Draw lines
    function drawConnections() {
      for (let i = 0; i < stars.length; i++) {
        
        // 1. Connect star to star (Gradient Blend)
        for (let j = i + 1; j < stars.length; j++) {
          const dx = stars[i].x - stars[j].x;
          const dy = stars[i].y - stars[j].y;
          const distance = Math.sqrt(dx * dx + dy * dy);

          if (distance < connectionDistance) {
            const opacity = 1 - distance / connectionDistance;
            
            // Create a gradient that blends the two stars' colors
            const gradient = ctx.createLinearGradient(stars[i].x, stars[i].y, stars[j].x, stars[j].y);
            gradient.addColorStop(0, `rgba(${stars[i].colorRgb}, ${opacity * 0.3})`);
            gradient.addColorStop(1, `rgba(${stars[j].colorRgb}, ${opacity * 0.3})`);

            ctx.beginPath();
            ctx.moveTo(stars[i].x, stars[i].y);
            ctx.lineTo(stars[j].x, stars[j].y);
            ctx.strokeStyle = gradient;
            ctx.lineWidth = 1;
            ctx.stroke();
          }
        }

        // 2. Connect star to mouse (INTERACTIVE GLOW)
        if (mouse.x != null) {
          const dx = stars[i].x - mouse.x;
          const dy = stars[i].y - mouse.y;
          const distance = Math.sqrt(dx * dx + dy * dy);

          if (distance < mouseDistance) {
            const opacity = 1 - distance / mouseDistance;
            
            // Gradient fades from the Star's color out to transparent at the mouse cursor
            const mouseGradient = ctx.createLinearGradient(stars[i].x, stars[i].y, mouse.x, mouse.y);
            mouseGradient.addColorStop(0, `rgba(${stars[i].colorRgb}, ${opacity * 0.6})`);
            mouseGradient.addColorStop(1, `rgba(${stars[i].colorRgb}, 0)`);

            ctx.beginPath();
            ctx.moveTo(stars[i].x, stars[i].y);
            ctx.lineTo(mouse.x, mouse.y);
            ctx.strokeStyle = mouseGradient; 
            ctx.lineWidth = 1.5; // Slightly thicker for mouse interaction
            ctx.stroke();
          }
        }
      }
    }

    // Animation Loop
    function animate() {
      // Clear canvas to make it transparent
      ctx.clearRect(0, 0, width, height);

      // Draw connections first so they sit behind the stars
      drawConnections();
      
      // Update and draw stars
      stars.forEach(star => star.update());

      animationFrameId = requestAnimationFrame(animate);
    }

    animate();

    // Event Listeners
    const handleResize = () => {
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };

    const handleMouseMove = (event) => {
      mouse.x = event.clientX; 
      mouse.y = event.clientY;
    };
    
    const handleMouseLeave = () => {
      mouse.x = null;
      mouse.y = null;
    };

    window.addEventListener('resize', handleResize);
    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mouseout', handleMouseLeave);

    return () => {
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseout', handleMouseLeave);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas 
      ref={canvasRef} 
      // z-0 pushes it behind your text so it doesn't block readability
      className="fixed top-0 left-0 w-full h-full pointer-events-none z-0 opacity-80"
    />
  );
};

export default ConstellationBackground;