import HeroSection from '@/sections/HeroSection';
import { useState, useEffect, useRef } from 'react';

const TeslaSpeedometer = ({ onComplete, children }) => {
  const [isComplete, setIsComplete] = useState(false);
  const [showContent, setShowContent] = useState(false);
  const [fadeOut, setFadeOut] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
 
  const canvasRef = useRef(null);
  const animationRef = useRef(null);
  const startTimeRef = useRef(Date.now());

  // Check if device is mobile
  useEffect(() => {
    const checkMobile = () => {
      const mobile = window.innerWidth <= 768;
      setIsMobile(mobile);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    // Responsive canvas size
    const canvasSize = isMobile ? 300 : 500;
    const centerX = canvasSize / 2;
    const centerY = canvasSize / 2;
    
    canvas.width = canvasSize;
    canvas.height = canvasSize;
    const ctx = canvas.getContext('2d');
    ctx.scale(1, 1);

    // Updated gradients to match website colors
    const speedGradient = ctx.createLinearGradient(0, canvasSize, 0, 0);
    speedGradient.addColorStop(0, '#D2691E'); // Chocolate/orange from your website
    speedGradient.addColorStop(1, '#F4A460'); // Sandy brown

    const rpmGradient = ctx.createLinearGradient(0, canvasSize, 0, 0);
    rpmGradient.addColorStop(0, '#A0522D'); // Sienna brown
    rpmGradient.addColorStop(1, '#CD853F'); // Peru brown

    function speedNeedle(rotation) {
      ctx.lineWidth = isMobile ? 1.5 : 2;
      ctx.save();
      ctx.translate(centerX, centerY);
      ctx.rotate(rotation);
      const needleLength = isMobile ? 80 : 135;
      const needleOffset = isMobile ? 100 : 170;
      ctx.strokeRect(-needleLength / 2 + needleOffset, -1 / 2, needleLength, 1);
      ctx.restore();
    }

    function rpmNeedle(rotation) {
      ctx.lineWidth = isMobile ? 1.5 : 2;
      ctx.save();
      ctx.translate(centerX, centerY);
      ctx.rotate(rotation);
      const needleLength = isMobile ? 80 : 135;
      const needleOffset = isMobile ? 100 : 170;
      ctx.strokeRect(-needleLength / 2 + needleOffset, -1 / 2, needleLength, 1);
      ctx.restore();
    }

    function drawMiniNeedle(rotation, width, speed) {
      ctx.lineWidth = width;
      ctx.save();
      ctx.translate(centerX, centerY);
      ctx.rotate(rotation);
      ctx.strokeStyle = "#8B4513"; // Saddle brown for needles
      ctx.fillStyle = "#8B4513";
      const needleLength = isMobile ? 15 : 20;
      const needleDistance = isMobile ? 120 : 220;
      ctx.strokeRect(-needleLength / 2 + needleDistance, -1 / 2, needleLength, 1);
      ctx.restore();

      let x = (centerX + (isMobile ? 120 : 180) * Math.cos(rotation));
      let y = (centerY + (isMobile ? 120 : 180) * Math.sin(rotation));

      ctx.font = isMobile ? "600 16px Arial" : "700 20px Arial";
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
      const radius = isMobile ? 50 : 80;

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
      ctx.lineWidth = isMobile ? 2 : 3;
      ctx.arc(centerX, centerY, radius, 0, 2 * Math.PI);
      ctx.stroke();

      // Draw inner highlight circle
      ctx.beginPath();
      ctx.strokeStyle = "rgba(245, 222, 179, 0.3)";
      ctx.lineWidth = isMobile ? 1.5 : 2;
      ctx.arc(centerX, centerY, radius - (isMobile ? 8 : 10), 0, 2 * Math.PI);
      ctx.stroke();

      // Speed text
      ctx.font = isMobile ? "700 32px Arial" : "700 48px Arial";
      ctx.textAlign = "center";
      ctx.textBaseline = "middle";
      ctx.fillStyle = "#F5DEB3"; // Wheat color for main text
      ctx.fillText(speed, centerX, centerY - (isMobile ? 6 : 8));

      // "mph" text
      ctx.font = isMobile ? "700 12px Arial" : "700 14px Arial";
      ctx.fillStyle = "#DEB887"; // Burlywood
      ctx.fillText("mph", centerX, centerY + (isMobile ? 18 : 25));
    }

    function drawSpeedo(speed, gear, rpm, topSpeed) {
      if (speed === undefined) return false;

      speed = Math.floor(speed);
      rpm = rpm * 10;

      ctx.clearRect(0, 0, canvasSize, canvasSize);

      // Main circle background - updated to match website colors
      ctx.beginPath();
      ctx.fillStyle = 'rgba(139, 69, 19, 0.9)'; // Saddle brown with transparency
      ctx.arc(centerX, centerY, canvasSize * 0.48, 0, 2 * Math.PI);
      ctx.fill();
      ctx.strokeStyle = "#D2691E"; // Orange border
      ctx.lineWidth = isMobile ? 1.5 : 2;
      ctx.stroke();

      // Outer circle
      ctx.beginPath();
      ctx.strokeStyle = "#8B4513"; // Saddle brown
      ctx.lineWidth = 1;
      ctx.arc(centerX, centerY, canvasSize * 0.48, 0, 2 * Math.PI);
      ctx.stroke();

      // Draw speed markers
      ctx.fillStyle = "#F5DEB3";
      for (var i = 10; i <= Math.ceil(topSpeed / 20) * 20; i += 10) {
        drawMiniNeedle(calculateSpeedAngle(i / topSpeed, 83.07888, 34.3775) * Math.PI, i % 20 == 0 ? (isMobile ? 2 : 3) : 1, i % 20 == 0 ? i : '');

        if (i <= 100) {
          drawMiniNeedle(calculateRPMAngle(i / 47, 0, 22.9183) * Math.PI, i % 20 == 0 ? (isMobile ? 2 : 3) : 1, i % 20 == 0 ? i / 10 : '');
        }
      }

      // Speed arc
      ctx.beginPath();
      ctx.strokeStyle = speedGradient;
      ctx.lineWidth = isMobile ? 18 : 25;
      ctx.shadowBlur = isMobile ? 15 : 20;
      ctx.shadowColor = "#D2691E";
      ctx.arc(centerX, centerY, canvasSize * 0.456, .6 * Math.PI, calculateSpeedAngle(speed / topSpeed, 83.07888, 34.3775) * Math.PI);
      ctx.stroke();

      // RPM arc
      ctx.beginPath();
      ctx.lineWidth = isMobile ? 18 : 25;
      ctx.strokeStyle = rpmGradient;
      ctx.shadowBlur = isMobile ? 15 : 20;
      ctx.shadowColor = "#A0522D";
      ctx.arc(centerX, centerY, canvasSize * 0.456, .4 * Math.PI, calculateRPMAngle(rpm / 4.7, 0, 22.9183) * Math.PI, true);
      ctx.stroke();
      ctx.shadowBlur = 0;

      // Draw the circular speed display (this replaces the simple text)
      drawCircularSpeedDisplay(speed);

      // Gear display logic
      ctx.fillStyle = "#DEB887"; // Burlywood for active gear
      ctx.textAlign = "center";
      ctx.textBaseline = "alphabetic";
      
      if (gear == 0 && speed > 0) {
        ctx.font = isMobile ? "700 50px Arial" : "700 70px Arial";
        ctx.fillText('R', centerX, canvasSize * 0.92);
        ctx.fillStyle = "#A0522D";
        ctx.font = isMobile ? "40px Arial" : "50px Arial";
        ctx.fillText('N', centerX + (isMobile ? 30 : 40), canvasSize * 0.92);
      } else if (gear == 0 && speed == 0) {
        ctx.font = isMobile ? "700 50px Arial" : "700 70px Arial";
        ctx.fillText('N', centerX, canvasSize * 0.92);
        ctx.fillStyle = "#A0522D";
        ctx.font = isMobile ? "700 40px Arial" : "700 50px Arial";
        ctx.fillText('R', centerX - (isMobile ? 30 : 40), canvasSize * 0.92);
        ctx.fillText(parseInt(gear) + 1, centerX + (isMobile ? 30 : 40), canvasSize * 0.92);
      } else if (gear - 1 <= 0) {
        ctx.font = isMobile ? "700 50px Arial" : "700 70px Arial";
        ctx.fillText(gear, centerX, canvasSize * 0.92);
        ctx.fillStyle = "#A0522D";
        ctx.font = isMobile ? "40px Arial" : "50px Arial";
        ctx.fillText('R', centerX - (isMobile ? 30 : 40), canvasSize * 0.92);
        ctx.font = isMobile ? "700 40px Arial" : "700 50px Arial";
        ctx.fillText(parseInt(gear) + 1, centerX + (isMobile ? 30 : 40), canvasSize * 0.92);
      } else {
        ctx.font = isMobile ? "700 50px Arial" : "700 70px Arial";
        ctx.fillText(gear, centerX, canvasSize * 0.92);
        ctx.fillStyle = "#A0522D";
        ctx.font = isMobile ? "700 40px Arial" : "700 50px Arial";
        ctx.fillText(gear - 1, centerX - (isMobile ? 30 : 40), canvasSize * 0.92);
        if (parseInt(gear) + 1 < 7) {
          ctx.fillText(parseInt(gear) + 1, centerX + (isMobile ? 30 : 40), canvasSize * 0.92);
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
  }, [onComplete, isMobile]);

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
        <div className="absolute inset-0 flex flex-col items-center justify-center px-4">

          {/* Title */}
          <div className={`text-center ${isMobile ? 'mb-4' : 'mb-8'}`}>
            <h1 className={`font-light text-white mb-2 tracking-wider ${
              isMobile ? 'text-xl' : 'text-4xl'
            }`}>
              SURESH SHANMUGASUNDARAM
            </h1>
            <div className={`text-white/70 uppercase tracking-[0.2em] ${
              isMobile ? 'text-xs' : 'text-lg'
            }`}>
              Associate Software Developer | Creating modern, functional, and elegant web applications.
            </div>
          </div>

          {/* Canvas Container */}
          <div className="relative">
            <canvas
              ref={canvasRef}
              className="drop-shadow-2xl"
              style={{
                filter: 'drop-shadow(0 0 30px rgba(210, 105, 30, 0.5))',
                width: isMobile ? '300px' : '500px',
                height: isMobile ? '300px' : '500px'
              }}
            />

            {/* Loading indicator overlay */}
            <div className="absolute top-4 left-1/2 transform -translate-x-1/2">
              <div className="flex space-x-2">
                {[...Array(3)].map((_, i) => (
                  <div
                    key={i}
                    className={`rounded-full animate-pulse ${
                      isMobile ? 'w-2 h-2' : 'w-3 h-3'
                    }`}
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
          <div className={`text-center ${isMobile ? 'mt-4' : 'mt-8'}`}>
            <div className={`text-white/80 uppercase tracking-wider ${
              isMobile ? 'text-xs' : 'text-sm'
            }`}>
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
                width: isMobile ? `${200 + i * 60}px` : `${300 + i * 100}px`,
                height: isMobile ? `${200 + i * 60}px` : `${300 + i * 100}px`,
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
          <div className="relative overflow-hidden px-4">
            <div className={`font-light text-center tracking-wide ${
              isMobile ? 'text-3xl' : 'text-6xl'
            }`} style={{ color: '#8B4513' }}>
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
      <div className="text-center">
        <h1>WELCOME</h1>
        <p className="mt-4 normal-case text-lg">Your content is ready</p>
      </div>
    </TeslaSpeedometer>
  );
};

export default PostHeroLoader;