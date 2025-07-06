'use client'

import React, { useRef, useEffect } from 'react';

interface SilkBackgroundProps {
  className?: string;
}

const SilkBackground: React.FC<SilkBackgroundProps> = ({ className = '' }) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Set canvas size
    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    // Silk wave animation variables
    let animationId: number;
    let time = 0;
    const waves: Array<{
      amplitude: number;
      frequency: number;
      phase: number;
      speed: number;
      color: string;
      opacity: number;
    }> = [];

    // Initialize waves
    for (let i = 0; i < 6; i++) {
      waves.push({
        amplitude: 50 + Math.random() * 100,
        frequency: 0.005 + Math.random() * 0.01,
        phase: Math.random() * Math.PI * 2,
        speed: 0.01 + Math.random() * 0.02,
        color: `rgba(0, 212, 170, ${0.1 + Math.random() * 0.2})`,
        opacity: 0.1 + Math.random() * 0.3,
      });
    }

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      time += 0.01;

      // Draw flowing silk waves
      waves.forEach((wave, index) => {
        ctx.beginPath();
        ctx.strokeStyle = wave.color;
        ctx.lineWidth = 2 + Math.sin(time + index) * 1;
        
        // Create flowing wave pattern
        for (let x = 0; x <= canvas.width; x += 2) {
          const y1 = canvas.height * 0.3 + 
                    Math.sin(x * wave.frequency + time * wave.speed + wave.phase) * wave.amplitude +
                    Math.sin(x * wave.frequency * 2 + time * wave.speed * 1.5) * wave.amplitude * 0.5;
          
          const y2 = canvas.height * 0.7 + 
                    Math.cos(x * wave.frequency + time * wave.speed + wave.phase + Math.PI) * wave.amplitude +
                    Math.cos(x * wave.frequency * 1.5 + time * wave.speed * 0.8) * wave.amplitude * 0.3;
          
          if (x === 0) {
            ctx.moveTo(x, y1);
          } else {
            ctx.lineTo(x, y1);
          }
        }
        ctx.stroke();

        // Draw second wave layer
        ctx.beginPath();
        ctx.strokeStyle = `rgba(0, 212, 170, ${wave.opacity * 0.6})`;
        ctx.lineWidth = 1 + Math.cos(time + index) * 0.5;
        
        for (let x = 0; x <= canvas.width; x += 3) {
          const y = canvas.height * 0.5 + 
                   Math.sin(x * wave.frequency * 1.2 + time * wave.speed * 0.7 + wave.phase) * wave.amplitude * 0.8 +
                   Math.sin(x * wave.frequency * 0.8 + time * wave.speed * 1.2) * wave.amplitude * 0.4;
          
          if (x === 0) {
            ctx.moveTo(x, y);
          } else {
            ctx.lineTo(x, y);
          }
        }
        ctx.stroke();
      });

      // Add flowing particles
      for (let i = 0; i < 12; i++) {
        const particleX = (time * 20 + i * 100) % (canvas.width + 100);
        const particleY = canvas.height * 0.5 + 
                         Math.sin(particleX * 0.01 + time * 2) * 100 +
                         Math.cos(particleX * 0.008 + time * 1.5) * 60;
        
        ctx.fillStyle = `rgba(0, 212, 170, ${0.3 + Math.sin(time + i) * 0.2})`;
        ctx.beginPath();
        ctx.arc(particleX, particleY, 1 + Math.sin(time + i) * 1, 0, Math.PI * 2);
        ctx.fill();
      }

      animationId = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener('resize', resizeCanvas);
      cancelAnimationFrame(animationId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className={`absolute inset-0 pointer-events-none ${className}`}
      style={{ zIndex: 10 }}
    />
  );
};

export default SilkBackground; 