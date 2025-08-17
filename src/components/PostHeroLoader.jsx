import HeroSection from '@/sections/HeroSection';
import { useState, useEffect, useRef } from 'react';

const TeslaSpeedometer = ({ onComplete, children }) => {
  const [isComplete, setIsComplete] = useState(false);
  const [showContent, setShowContent] = useState(false);
  const [fadeOut, setFadeOut] = useState(false);
 
  const canvasRef = useRef(null);
  const animationRef = useRef(null);
  const startTimeRef = useRef(Date.now());

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    canvas.width = 500;
    canvas.height = 500;
    const ctx = canvas.getContext('2d');
    ctx.scale(1, 1);

    // Updated gradients to match website colors
    const speedGradient = ctx.createLinearGradient(0, 500, 0, 0);
    speedGradient.addColorStop(0, '#D2691E'); // Chocolate/orange from your website
    speedGradient.addColorStop(1, '#F4A460'); // Sandy brown

    const rpmGradient = ctx.createLinearGradient(0, 500, 0, 0);
    rpmGradient.addColorStop(0, '#A0522D'); // Sienna brown
    rpmGradient.addColorStop(1, '#CD853F'); // Peru brown

    function speedNeedle(rotation) {
      ctx.lineWidth = 2;
      ctx.save();
      ctx.translate(250, 250);
      ctx.rotate(rotation);
      ctx.strokeRect(-130 / 2 + 170, -1 / 2, 135, 1);
      ctx.restore();
    }

    function rpmNeedle(rotation) {
      ctx.lineWidth = 2;
      ctx.save();
      ctx.translate(250, 250);
      ctx.rotate(rotation);
      ctx.strokeRect(-130 / 2 + 170, -1 / 2, 135, 1);
      ctx.restore();
    }

    function drawMiniNeedle(rotation, width, speed) {
      ctx.lineWidth = width;
      ctx.save();
      ctx.translate(250, 250);
      ctx.rotate(rotation);
      ctx.strokeStyle = "#8B4513"; // Saddle brown for needles
      ctx.fillStyle = "#8B4513";
      ctx.strokeRect(-20 / 2 + 220, -1 / 2, 20, 1);
      ctx.restore();

      let x = (250 + 180 * Math.cos(rotation));
      let y = (250 + 180 * Math.sin(rotation));

      ctx.font = "700 20px Arial";
      ctx.fillStyle = "#F5DEB3"; // Wheat color for text
      ctx.fillText(speed, x, y);
    }

    function calculateSpeedAngle(x, a, b) {
      let degree = (a - b) * (x) + b;
      let radian = (degree * Math.PI) / 180;
      return radian <= 1.45 ? radian : 1.45;
    }

    function calculateRPMAngle(x, a, b) {
      let degree = (a - b) * (x) + b;
      let radian = (degree * Math.PI) / 180;
      return radian >= -0.46153862656807704 ? radian : -0.46153862656807704;
    }

    // New function to draw circular speed display
    function drawCircularSpeedDisplay(speed) {
      const centerX = 250;
      const centerY = 250;
      const radius = 80;

      // Draw outer circle with gradient
      const circleGradient = ctx.createRadialGradient(centerX, centerY, 0, centerX, centerY, radius);
      circleGradient.addColorStop(0, 'rgba(139, 69, 19, 0.9)'); // Saddle brown
      circleGradient.addColorStop(0.7, 'rgba(160, 82, 45, 0.8)'); // Sienna
      circleGradient.addColorStop(1, 'rgba(210, 105, 30, 0.9)'); // Chocolate

      ctx.beginPath();
      ctx.fillStyle = circleGradient;
      ctx.arc(centerX, centerY, radius, 0, 2 * Math.PI);
      ctx.fill();

      // Draw border
      ctx.beginPath();
      ctx.strokeStyle = "#D2691E";
      ctx.lineWidth = 3;
      ctx.arc(centerX, centerY, radius, 0, 2 * Math.PI);
      ctx.stroke();

      // Draw inner highlight circle
      ctx.beginPath();
      ctx.strokeStyle = "rgba(245, 222, 179, 0.3)";
      ctx.lineWidth = 2;
      ctx.arc(centerX, centerY, radius - 10, 0, 2 * Math.PI);
      ctx.stroke();

      // Speed text
      ctx.font = "700 48px Arial";
      ctx.textAlign = "center";
      ctx.textBaseline = "middle";
      ctx.fillStyle = "#F5DEB3"; // Wheat color for main text
      ctx.fillText(speed, centerX, centerY - 8);

      // "mph" text
      ctx.font = "700 14px Arial";
      ctx.fillStyle = "#DEB887"; // Burlywood
      ctx.fillText("mph", centerX, centerY + 25);
    }

    function drawSpeedo(speed, gear, rpm, topSpeed) {
      if (speed === undefined) return false;

      speed = Math.floor(speed);
      rpm = rpm * 10;

      ctx.clearRect(0, 0, 500, 500);

      // Main circle background - updated to match website colors
      ctx.beginPath();
      ctx.fillStyle = 'rgba(139, 69, 19, 0.9)'; // Saddle brown with transparency
      ctx.arc(250, 250, 240, 0, 2 * Math.PI);
      ctx.fill();
      ctx.strokeStyle = "#D2691E"; // Orange border
      ctx.lineWidth = 2;
      ctx.stroke();

      // Outer circle
      ctx.beginPath();
      ctx.strokeStyle = "#8B4513"; // Saddle brown
      ctx.lineWidth = 1;
      ctx.arc(250, 250, 240, 0, 2 * Math.PI);
      ctx.stroke();

      // Draw speed markers
      ctx.fillStyle = "#F5DEB3";
      for (var i = 10; i <= Math.ceil(topSpeed / 20) * 20; i += 10) {
        drawMiniNeedle(calculateSpeedAngle(i / topSpeed, 83.07888, 34.3775) * Math.PI, i % 20 == 0 ? 3 : 1, i % 20 == 0 ? i : '');

        if (i <= 100) {
          drawMiniNeedle(calculateRPMAngle(i / 47, 0, 22.9183) * Math.PI, i % 20 == 0 ? 3 : 1, i % 20 == 0 ? i / 10 : '');
        }
      }

      // Speed arc
      ctx.beginPath();
      ctx.strokeStyle = speedGradient;
      ctx.lineWidth = 25;
      ctx.shadowBlur = 20;
      ctx.shadowColor = "#D2691E";
      ctx.arc(250, 250, 228, .6 * Math.PI, calculateSpeedAngle(speed / topSpeed, 83.07888, 34.3775) * Math.PI);
      ctx.stroke();

      // RPM arc
      ctx.beginPath();
      ctx.lineWidth = 25;
      ctx.strokeStyle = rpmGradient;
      ctx.shadowBlur = 20;
      ctx.shadowColor = "#A0522D";
      ctx.arc(250, 250, 228, .4 * Math.PI, calculateRPMAngle(rpm / 4.7, 0, 22.9183) * Math.PI, true);
      ctx.stroke();
      ctx.shadowBlur = 0;

      // Draw the circular speed display (this replaces the simple text)
      drawCircularSpeedDisplay(speed);

      // Gear display logic
      ctx.fillStyle = "#DEB887"; // Burlywood for active gear
      ctx.textAlign = "center";
      ctx.textBaseline = "alphabetic";
      
      if (gear == 0 && speed > 0) {
        ctx.font = "700 70px Arial";
        ctx.fillText('R', 250, 460);
        ctx.fillStyle = "#A0522D";
        ctx.font = "50px Arial";
        ctx.fillText('N', 290, 460);
      } else if (gear == 0 && speed == 0) {
        ctx.font = "700 70px Arial";
        ctx.fillText('N', 250, 460);
        ctx.fillStyle = "#A0522D";
        ctx.font = "700 50px Arial";
        ctx.fillText('R', 210, 460);
        ctx.fillText(parseInt(gear) + 1, 290, 460);
      } else if (gear - 1 <= 0) {
        ctx.font = "700 70px Arial";
        ctx.fillText(gear, 250, 460);
        ctx.fillStyle = "#A0522D";
        ctx.font = "700 50px Arial";
        ctx.fillText('R', 210, 460);
        ctx.font = "700 50px Arial";
        ctx.fillText(parseInt(gear) + 1, 290, 460);
      } else {
        ctx.font = "700 70px Arial";
        ctx.fillText(gear, 250, 460);
        ctx.fillStyle = "#A0522D";
        ctx.font = "700 50px Arial";
        ctx.fillText(gear - 1, 210, 460);
        if (parseInt(gear) + 1 < 7) {
          ctx.fillText(parseInt(gear) + 1, 290, 460);
        }
      }

      // Needles
      ctx.strokeStyle = '#D2691E';
      speedNeedle(calculateSpeedAngle(speed / topSpeed, 83.07888, 34.3775) * Math.PI);

      ctx.strokeStyle = '#A0522D';
      rpmNeedle(calculateRPMAngle(rpm / 4.7, 0, 22.9183) * Math.PI);
    }

    // Animation logic
    let speedM = 0;
    let gear = 0;
    let rpm = 0;
    const duration = 8000; // 8 seconds

    const animate = () => {
      const elapsed = Date.now() - startTimeRef.current;
      const progress = Math.min(elapsed / duration, 1);

      // Calculate speed based on progress
      speedM = Math.floor(progress * 160);

      // Gear calculation
      if (speedM > 1 && speedM < 30) {
        gear = 1;
      } else if (speedM > 30 && speedM < 50) {
        gear = 2;
      } else if (speedM > 50 && speedM < 70) {
        gear = 3;
      } else if (speedM > 70 && speedM < 100) {
        gear = 4;
      } else if (speedM > 100) {
        gear = 5;
      }

      // RPM calculation
      if (rpm < 1) {
        rpm += 0.03;
      }

      drawSpeedo(speedM, gear, rpm, 160);

      // Check completion
      if (progress >= 0.9) {
        setFadeOut(true);
        setShowContent(true);
      }

      if (progress >= 1) {
        setIsComplete(true);
        if (onComplete) onComplete();
        return;
      }

      animationRef.current = requestAnimationFrame(animate);
    };

    animationRef.current = requestAnimationFrame(animate);

    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, [onComplete]);

  if (isComplete && !children) return null;

  return (
    <>
      {/* Loading Screen */}
      <div
        className={`fixed inset-0 z-50 transition-all duration-1000 ${fadeOut ? 'opacity-0' : 'opacity-100'
          }`}
        style={{
          background: 'linear-gradient(135deg, #8B4513 0%, #A0522D 50%, #D2691E 100%)', // Website color gradient
        }}
      >
        {/* Container */}
        <div className="absolute inset-0 flex flex-col items-center justify-center">

          {/* Title */}
          <div className="mb-8 text-center">
            <h1 className="text-4xl font-light text-white mb-2 tracking-wider">
              SURESH SHANMUGASUNDARAM
            </h1>
            <div className="text-lg text-white/70 uppercase tracking-[0.2em]">
              Associate Software Developer | Creating modern, functional, and elegant web applications.
            </div>
          </div>

          {/* Canvas Container */}
          <div className="relative">
            <canvas
              ref={canvasRef}
              className="drop-shadow-2xl"
              style={{
                filter: 'drop-shadow(0 0 30px rgba(210, 105, 30, 0.5))'
              }}
            />

            {/* Loading indicator overlay */}
            <div className="absolute top-4 left-1/2 transform -translate-x-1/2">
              <div className="flex space-x-2">
                {[...Array(3)].map((_, i) => (
                  <div
                    key={i}
                    className="w-3 h-3 rounded-full animate-pulse"
                    style={{
                      backgroundColor: '#F5DEB3',
                      animationDelay: `${i * 0.3}s`,
                      animationDuration: '1.5s'
                    }}
                  />
                ))}
              </div>
            </div>
          </div>

          {/* Status Text */}
          <div className="mt-8 text-center">
            <div className="text-white/80 text-sm uppercase tracking-wider">
              System Status: Loading
            </div>
          </div>
        </div>

        {/* Decorative Elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {[...Array(4)].map((_, i) => (
            <div
              key={i}
              className="absolute rounded-full opacity-10 animate-pulse"
              style={{
                width: `${300 + i * 100}px`,
                height: `${300 + i * 100}px`,
                background: 'radial-gradient(circle, rgba(245, 222, 179, 0.3) 0%, transparent 70%)',
                left: `${-10 + i * 20}%`,
                top: `${-10 + i * 15}%`,
                animationDelay: `${i * 0.7}s`,
                animationDuration: `${5 + i}s`,
              }}
            />
          ))}
        </div>
      </div>

      {/* Content Reveal */}
      {showContent && children && (
        <div
          className={`fixed inset-0 z-40 flex items-center justify-center transition-all duration-1000 ${showContent ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
            }`}
          style={{
            background: 'linear-gradient(135deg, #F5DEB3 0%, #DEB887 100%)' // Light version of website colors
          }}
        >
          <div className="relative overflow-hidden">
            <div className="text-6xl font-light text-center tracking-wide" style={{ color: '#8B4513' }}>
              {children}
            </div>

            {/* Reveal Animation Overlay */}
            <div
              className="absolute inset-0 transition-transform duration-1200 ease-out"
              style={{
                background: 'linear-gradient(135deg, #8B4513 0%, #A0522D 50%, #D2691E 100%)',
                transform: showContent ? 'translateY(-100%)' : 'translateY(0)',
                transitionDelay: '200ms'
              }}
            />
          </div>
        </div>
      )}
    </>
  );
};

// Main PostHeroLoader component
const PostHeroLoader = ({ onComplete }) => {
  return (
    <TeslaSpeedometer onComplete={onComplete}>
     {/* <HeroSection onAnimationComplete={onComplete} /> */}
    </TeslaSpeedometer>
  );
};

export default PostHeroLoader;