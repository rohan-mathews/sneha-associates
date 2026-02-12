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
    const isMobile = width < 768;
    const starCount = isMobile ? 40 : 100; // Adjusted for performance
    const starColor = '234, 88, 12'; // Sneha Orange (RGB)
    const connectionDistance = isMobile ? 100 : 150; 
    const mouseDistance = 250; // Range to connect to mouse

    // Mouse tracking
    let mouse = { x: null, y: null };

    // Star Class
    class Star {
      constructor() {
        this.x = Math.random() * width;
        this.y = Math.random() * height;
        this.vx = (Math.random() - 0.5) * 0.5; // Gentle floating
        this.vy = (Math.random() - 0.5) * 0.5;
        this.size = Math.random() * 2;
      }

      draw() {
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(${starColor}, 0.8)`;
        ctx.fill();
      }

      update() {
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

    // Draw lines
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
            ctx.strokeStyle = `rgba(${starColor}, ${opacity * 0.2})`; // Faint lines
            ctx.lineWidth = 1;
            ctx.stroke();
          }
        }

        // 2. Connect star to mouse (INTERACTIVE)
        if (mouse.x != null) {
          const dx = stars[i].x - mouse.x;
          const dy = stars[i].y - mouse.y;
          const distance = Math.sqrt(dx * dx + dy * dy);

          if (distance < mouseDistance) {
            const opacity = 1 - distance / mouseDistance;
            ctx.beginPath();
            ctx.moveTo(stars[i].x, stars[i].y);
            ctx.lineTo(mouse.x, mouse.y);
            ctx.strokeStyle = `rgba(${starColor}, ${opacity * 0.5})`; // Stronger mouse line
            ctx.lineWidth = 1;
            ctx.stroke();
          }
        }
      }
    }

    // Animation Loop
    function animate() {
      // ✅ FIX: Clear the canvas instead of drawing a black box
      // This makes it transparent so your Hero Image shows through!
      ctx.clearRect(0, 0, width, height);

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
      mouse.x = event.clientX; // Use clientX for accuracy
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
      className="fixed top-0 left-0 w-full h-full pointer-events-none z-[1]"
      // z-[1] = It sits ON TOP of your background image
      // pointer-events-none = You can still click buttons underneath it
    />
  );
};

export default ConstellationBackground;