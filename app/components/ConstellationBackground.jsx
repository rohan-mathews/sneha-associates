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

    // ⚡ CONFIGURATION
    // Detect mobile to reduce particle count (saves battery)
    const isMobile = width < 768;
    const starCount = isMobile ? 45 : 110; 
    const starColor = '234, 88, 12'; // Sneha Orange (RGB)
    const connectionDistance = isMobile ? 100 : 160; // Distance to connect stars
    const mouseDistance = 200; // Distance to connect to mouse

    // Mouse tracking
    let mouse = { x: null, y: null };

    // Star Class
    class Star {
      constructor() {
        this.x = Math.random() * width;
        this.y = Math.random() * height;
        this.vx = (Math.random() - 0.5) * 0.6; // Gentle floating speed
        this.vy = (Math.random() - 0.5) * 0.6;
        this.size = Math.random() * 2;
      }

      draw() {
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(${starColor}, 0.8)`;
        ctx.fill();
      }

      update() {
        // Move star
        this.x += this.vx;
        this.y += this.vy;

        // Bounce off edges
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

    // Draw lines between stars and mouse
    function drawConnections() {
      for (let i = 0; i < stars.length; i++) {
        // 1. Connect star to star
        for (let j = i + 1; j < stars.length; j++) {
          const dx = stars[i].x - stars[j].x;
          const dy = stars[i].y - stars[j].y;
          const distance = Math.sqrt(dx * dx + dy * dy);

          if (distance < connectionDistance) {
            const opacity = 1 - distance / connectionDistance;
            ctx.beginPath();
            ctx.moveTo(stars[i].x, stars[i].y);
            ctx.lineTo(stars[j].x, stars[j].y);
            ctx.strokeStyle = `rgba(${starColor}, ${opacity * 0.15})`; // Subtle orange lines
            ctx.lineWidth = 1;
            ctx.stroke();
          }
        }

        // 2. Connect star to mouse (INTERACTIVE EFFECT)
        if (mouse.x != null) {
          const dx = stars[i].x - mouse.x;
          const dy = stars[i].y - mouse.y;
          const distance = Math.sqrt(dx * dx + dy * dy);

          if (distance < mouseDistance) {
            const opacity = 1 - distance / mouseDistance;
            ctx.beginPath();
            ctx.moveTo(stars[i].x, stars[i].y);
            ctx.lineTo(mouse.x, mouse.y);
            // Stronger line for mouse connection
            ctx.strokeStyle = `rgba(${starColor}, ${opacity * 0.3})`; 
            ctx.lineWidth = 1;
            ctx.stroke();
          }
        }
      }
    }

    // Animation Loop
    function animate() {
      ctx.clearRect(0, 0, width, height);

      // Deep Dark Background (Tech/Engineering Vibe)
      const gradient = ctx.createLinearGradient(0, 0, 0, height);
      gradient.addColorStop(0, '#050505'); // Deep Black
      gradient.addColorStop(1, '#1a1005'); // Very subtle dark orange tint at bottom
      ctx.fillStyle = gradient;
      ctx.fillRect(0, 0, width, height);

      drawConnections();
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
      mouse.x = event.x;
      mouse.y = event.y;
    };
    
    // Clear mouse when leaving window so lines don't get stuck
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

  return <canvas ref={canvasRef} className="fixed top-0 left-0 w-full h-full -z-10 pointer-events-none" />;
};

export default ConstellationBackground;